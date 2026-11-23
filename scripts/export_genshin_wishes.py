"""Export Genshin Impact wish history from local HoYoverse webCaches.

Outputs:
1. UIGF v3.0 JSON (.json)
2. UTF-8 BOM CSV (.csv)
3. Formatted multi-sheet Excel workbook (.xlsx)
"""

from __future__ import annotations

import argparse
import csv
import json
import os
import re
import shutil
import sys
import tempfile
import time
import urllib.parse
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Any

import openpyxl
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter
import requests


@dataclass(frozen=True)
class BannerConfig:
    """Configuration metadata for a Genshin Impact wish pool."""

    pool_id: str
    name: str
    sheet_name: str


STANDARD_BANNERS: list[BannerConfig] = [
    BannerConfig("301", "Cầu Nguyện Nhân Vật", "Nhân Vật (301)"),
    BannerConfig("302", "Cầu Nguyện Vũ Khí", "Vũ Khí (302)"),
    BannerConfig("200", "Cầu Nguyện Thường", "Thường (200)"),
    BannerConfig("500", "Cầu Nguyện Sử Ký", "Sử Ký (500)"),
    BannerConfig("100", "Cầu Nguyện Tân Thủ", "Tân Thủ (100)"),
]

REGION_TIMEZONES: dict[str, int] = {
    "os_asia": 8,
    "os_cht": 8,
    "os_usa": -5,
    "os_euro": 1,
}

REQUEST_DELAY_SEC = 0.45
RATE_LIMIT_BACKOFFS = (2, 4, 6, 8, 10)
NETWORK_RETRIES = 3
PAGE_SIZE = 20

HEADER_FILL = PatternFill(start_color="1E293B", end_color="1E293B", fill_type="solid")
HEADER_FONT = Font(name="Calibri", size=11, bold=True, color="FFFFFF")
SECTION_FONT = Font(name="Calibri", size=12, bold=True, color="1E293B")
TITLE_FONT = Font(name="Calibri", size=14, bold=True, color="0F172A")
META_LABEL_FONT = Font(name="Calibri", size=10, bold=True, color="334155")
META_VALUE_FONT = Font(name="Calibri", size=10, color="0F172A")
BASE_FONT = Font(name="Calibri", size=10, color="0F172A")

FIVE_STAR_FILL = PatternFill(start_color="FEF3C7", end_color="FEF3C7", fill_type="solid")
FIVE_STAR_FONT = Font(name="Calibri", size=10, bold=True, color="B45309")
FOUR_STAR_FILL = PatternFill(start_color="F3E8FF", end_color="F3E8FF", fill_type="solid")
FOUR_STAR_FONT = Font(name="Calibri", size=10, color="6D28D9")
ZEBRA_FILL = PatternFill(start_color="F8FAFC", end_color="F8FAFC", fill_type="solid")

THIN_BORDER = Border(
    left=Side(style="thin", color="CBD5E1"),
    right=Side(style="thin", color="CBD5E1"),
    top=Side(style="thin", color="CBD5E1"),
    bottom=Side(style="thin", color="CBD5E1"),
)


def sanitize_error(message: str) -> str:
    """Strip any authkey token from error strings before printing."""
    return re.sub(r"authkey=[^&\s'\"]+", "authkey=[REDACTED]", message)


def sanitize_sheet_title(title: str) -> str:
    """Make a sheet title valid and <= 31 characters for Excel."""
    cleaned = re.sub(r"[\\/*?:\[\]]", "_", title).strip()
    return cleaned[:31] or "Banner"


def discover_game_data_dir() -> Path:
    """Find GenshinImpact_Data or YuanShen_Data via official player logs."""
    local_low = Path(os.environ.get("USERPROFILE", str(Path.home()))) / "AppData" / "LocalLow" / "miHoYo"
    candidates = [
        local_low / "Genshin Impact" / "output_log.txt",
        local_low / "Genshin Impact" / "output_log.txt.last",
        local_low / "原神" / "output_log.txt",
        local_low / "原神" / "output_log.txt.last",
    ]
    pattern = re.compile(r"([A-Za-z]:[/\\][^\r\n\"]+?(?:GenshinImpact_Data|YuanShen_Data))")

    for log_path in candidates:
        if not log_path.is_file():
            continue
        text = log_path.read_text(encoding="utf-8", errors="ignore")
        match = pattern.search(text)
        if match:
            data_dir = Path(match.group(1))
            if data_dir.is_dir():
                return data_dir

    raise FileNotFoundError(
        "Không tìm thấy thư mục GenshinImpact_Data/YuanShen_Data trong output_log.txt. "
        "Hãy mở game và mở trang Lịch Sử Cầu Nguyện ít nhất một lần."
    )


def find_latest_cache_file(game_data_dir: Path) -> Path:
    """Locate Cache/Cache_Data/data_2 inside the highest versioned webCaches folder."""
    web_caches = game_data_dir / "webCaches"
    if not web_caches.is_dir():
        raise FileNotFoundError(f"Không tìm thấy thư mục webCaches tại: {web_caches}")

    def version_key(path: Path) -> tuple[tuple[int, ...], float]:
        nums = tuple(int(n) for n in re.findall(r"\d+", path.name))
        return (nums, path.stat().st_mtime)

    version_dirs = sorted(
        (d for d in web_caches.iterdir() if d.is_dir()),
        key=version_key,
        reverse=True,
    )
    for folder in version_dirs:
        cache_file = folder / "Cache" / "Cache_Data" / "data_2"
        if cache_file.is_file():
            return cache_file

    raise FileNotFoundError(f"Không tìm thấy file cache data_2 trong: {web_caches}")


def extract_auth_endpoint(cache_file: Path) -> tuple[str, dict[str, str]]:
    """Copy data_2 to a temp file and extract the newest gacha log endpoint and params."""
    fd, tmp_path = tempfile.mkstemp(prefix="genshin_cache_", suffix=".tmp")
    os.close(fd)
    try:
        shutil.copy2(cache_file, tmp_path)
        raw_text = Path(tmp_path).read_bytes().decode("utf-8", errors="ignore")
    finally:
        try:
            os.remove(tmp_path)
        except OSError:
            pass

    url_pattern = re.compile(r"^(https://[^\x00\s]+?gacha_info/api/getGachaLog[^\x00\s]+)")
    parts = raw_text.split("1/0/")
    for part in reversed(parts):
        match = url_pattern.match(part)
        if not match:
            continue
        candidate = match.group(1)
        if "authkey=" not in candidate:
            continue
        parsed = urllib.parse.urlparse(candidate)
        query_map = urllib.parse.parse_qs(parsed.query, keep_blank_values=True)
        flat_params = {k: v[0] for k, v in query_map.items()}
        if flat_params.get("authkey"):
            return parsed.netloc, flat_params

    raise RuntimeError(
        "Không tìm thấy authkey hợp lệ trong webCaches. "
        "Vui lòng mở game Genshin Impact -> Cầu Nguyện -> Lịch Sử, rồi chạy lại script."
    )


class GachaApiClient:
    """Thin rate-limited client for HoYoverse getConfigList and getGachaLog APIs."""

    def __init__(self, host: str, base_params: dict[str, str]) -> None:
        self.host = host
        self.base_params = dict(base_params)
        self.session = requests.Session()
        self.session.headers.update({"User-Agent": "Mozilla/5.0"})
        self._last_request_ts = 0.0

    def _get_json(self, endpoint: str, extra_params: dict[str, str] | None = None) -> dict[str, Any]:
        url = f"https://{self.host}{endpoint}"
        params = dict(self.base_params)
        if extra_params:
            params.update(extra_params)

        rate_attempt = 0
        net_attempt = 0
        while True:
            elapsed = time.monotonic() - self._last_request_ts
            if self._last_request_ts > 0 and elapsed < REQUEST_DELAY_SEC:
                time.sleep(REQUEST_DELAY_SEC - elapsed)

            try:
                self._last_request_ts = time.monotonic()
                resp = self.session.get(url, params=params, timeout=20)
                resp.raise_for_status()
                payload = resp.json()
            except (requests.RequestException, ValueError) as exc:
                net_attempt += 1
                if net_attempt > NETWORK_RETRIES:
                    raise RuntimeError(
                        f"Lỗi kết nối tới API ({endpoint}): {sanitize_error(str(exc))}"
                    ) from exc
                time.sleep(2 * net_attempt)
                continue

            retcode = payload.get("retcode")
            if retcode == 0:
                return payload
            if retcode in (-100, -101):
                print(
                    "Authkey đã hết hạn hoặc không hợp lệ (retcode "
                    f"{retcode}). Vui lòng mở lại Lịch Sử Cầu Nguyện trong game Genshin Impact rồi thử lại."
                )
                sys.exit(1)
            if retcode == -110:
                if rate_attempt >= len(RATE_LIMIT_BACKOFFS):
                    raise RuntimeError("API bị giới hạn tốc độ (-110) sau nhiều lần thử lại.")
                wait_sec = RATE_LIMIT_BACKOFFS[rate_attempt]
                rate_attempt += 1
                time.sleep(wait_sec)
                continue

            raise RuntimeError(
                f"API trả về lỗi không mong đợi tại {endpoint}: "
                f"retcode={retcode}, message={payload.get('message')}"
            )

    def fetch_config_list(self) -> tuple[list[dict[str, Any]], str]:
        """Query getConfigList once to discover active pools and region."""
        payload = self._get_json("/gacha_info/api/getConfigList")
        data = payload.get("data") or {}
        return data.get("gacha_type_list") or [], str(data.get("region") or "")

    def fetch_pool_wishes(self, pool_id: str) -> list[dict[str, str]]:
        """Paginate all available wishes for a single gacha_type pool."""
        seen_ids: set[str] = set()
        records: list[dict[str, str]] = []
        page = 1
        end_id = "0"

        while True:
            payload = self._get_json(
                "/gacha_info/api/getGachaLog",
                {
                    "gacha_type": pool_id,
                    "page": str(page),
                    "size": str(PAGE_SIZE),
                    "end_id": end_id,
                },
            )
            items = (payload.get("data") or {}).get("list") or []
            if not items:
                break

            for item in items:
                item_id = str(item.get("id", ""))
                if not item_id or item_id in seen_ids:
                    continue
                seen_ids.add(item_id)
                records.append({k: str(v) if v is not None else "" for k, v in item.items()})

            last_id = str(items[-1].get("id", ""))
            if len(items) < PAGE_SIZE or not last_id or last_id == end_id:
                break

            end_id = last_id
            page += 1

        return records


def resolve_banners(config_list: list[dict[str, Any]]) -> list[BannerConfig]:
    """Merge standard Genshin pools in display order with any extra pools from getConfigList."""
    banners = list(STANDARD_BANNERS)
    known_ids = {b.pool_id for b in banners}

    for entry in config_list:
        key = str(entry.get("key") or "")
        if not key or key == "400" or key in known_ids:
            continue
        name = str(entry.get("name") or f"Banner {key}")
        sheet = sanitize_sheet_title(f"{name[:20]} ({key})")
        banners.append(BannerConfig(key, name, sheet))
        known_ids.add(key)

    return banners


def enrich_pool_records(banner: BannerConfig, raw_records: list[dict[str, str]]) -> tuple[list[dict[str, Any]], dict[str, Any]]:
    """Sort chronologically ascending by id, compute stt and 5★/4★ pity, and summarize."""
    chronological = sorted(raw_records, key=lambda r: int(r["id"]))
    pity_5 = 0
    pity_4 = 0
    enriched: list[dict[str, Any]] = []
    count_5 = 0
    count_4 = 0
    count_3 = 0
    five_star_pities: list[int] = []

    for idx, item in enumerate(chronological, start=1):
        pity_5 += 1
        pity_4 += 1
        rank = str(item.get("rank_type", ""))
        gacha_type = str(item.get("gacha_type", banner.pool_id))
        uigf_type = "301" if gacha_type == "400" else gacha_type

        row = {
            "banner_pool": banner.pool_id,
            "banner_name": banner.name,
            "uigf_gacha_type": uigf_type,
            "gacha_type": gacha_type,
            "item_id": str(item.get("item_id", "")),
            "count": str(item.get("count", "1")),
            "stt": idx,
            "time": str(item.get("time", "")),
            "name": str(item.get("name", "")),
            "item_type": str(item.get("item_type", "")),
            "rank_type": rank,
            "pity_5": pity_5,
            "pity_4": pity_4,
            "id": str(item["id"]),
            "uid": str(item.get("uid", "")),
            "lang": str(item.get("lang", "")),
        }
        enriched.append(row)

        if rank == "5":
            count_5 += 1
            five_star_pities.append(pity_5)
            pity_5 = 0
        elif rank == "4":
            count_4 += 1
            pity_4 = 0
        else:
            count_3 += 1

    total = len(enriched)
    summary = {
        "banner": banner.name,
        "pool_id": banner.pool_id,
        "sheet_name": banner.sheet_name,
        "total": total,
        "count_5": count_5,
        "count_4": count_4,
        "count_3": count_3,
        "rate_5": round((count_5 / total) * 100, 2) if total else 0.0,
        "avg_5": round(sum(five_star_pities) / count_5, 2) if count_5 else None,
        "current_pity_5": pity_5,
        "current_pity_4": pity_4,
        "first_time": enriched[0]["time"] if enriched else "-",
        "last_time": enriched[-1]["time"] if enriched else "-",
    }
    return enriched, summary


def get_region_timezone(region: str) -> int:
    """Return UIGF region_time_zone integer for a HoYoverse region code."""
    if region in REGION_TIMEZONES:
        return REGION_TIMEZONES[region]
    if region.startswith("cn_"):
        return 8
    return 8


def write_uigf_json(
    out_path: Path,
    uid: str,
    lang: str,
    region: str,
    now: datetime,
    all_rows_asc: list[dict[str, Any]],
) -> None:
    """Export all wishes in UIGF v3.0 JSON format."""
    uigf_list = [
        {
            "uigf_gacha_type": r["uigf_gacha_type"],
            "gacha_type": r["gacha_type"],
            "item_id": r["item_id"],
            "count": r["count"],
            "time": r["time"],
            "name": r["name"],
            "item_type": r["item_type"],
            "rank_type": r["rank_type"],
            "id": r["id"],
        }
        for r in all_rows_asc
    ]
    payload = {
        "info": {
            "uid": uid,
            "lang": lang,
            "export_timestamp": int(now.timestamp()),
            "export_time": now.strftime("%Y-%m-%d %H:%M:%S"),
            "export_app": "genshin-wish-export",
            "export_app_version": "1.0.0",
            "uigf_version": "v3.0",
            "region_time_zone": get_region_timezone(region),
        },
        "list": uigf_list,
    }
    out_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def write_csv_file(out_path: Path, pool_rows_desc: list[dict[str, Any]]) -> None:
    """Export wishes to UTF-8 BOM CSV ordered by banner display order, newest-first."""
    fieldnames = [
        "banner_pool",
        "banner_name",
        "gacha_type",
        "stt",
        "time",
        "name",
        "item_type",
        "rank_type",
        "pity_5",
        "pity_4",
        "id",
        "uid",
    ]
    with out_path.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        for row in pool_rows_desc:
            writer.writerow({k: row[k] for k in fieldnames})


def style_header_row(ws: openpyxl.worksheet.worksheet.Worksheet, row_idx: int, col_count: int) -> None:
    """Apply dark navy header styling across a table header row."""
    ws.row_dimensions[row_idx].height = 24
    for col_idx in range(1, col_count + 1):
        cell = ws.cell(row=row_idx, column=col_idx)
        cell.fill = HEADER_FILL
        cell.font = HEADER_FONT
        cell.border = THIN_BORDER
        cell.alignment = Alignment(horizontal="center", vertical="center")


def autofit_columns(ws: openpyxl.worksheet.worksheet.Worksheet, min_width: int = 10, max_width: int = 44) -> None:
    """Auto-fit column widths based on cell string lengths with padding."""
    for col in ws.columns:
        col_letter = get_column_letter(col[0].column)
        longest = 0
        for cell in col:
            val = "" if cell.value is None else str(cell.value)
            longest = max(longest, len(val))
        ws.column_dimensions[col_letter].width = max(min_width, min(max_width, longest + 4))


def build_overview_sheet(
    ws: openpyxl.worksheet.worksheet.Worksheet,
    uid: str,
    region: str,
    lang: str,
    now: datetime,
    total_pulls: int,
    summaries: list[dict[str, Any]],
    five_stars_desc: list[dict[str, Any]],
) -> None:
    """Populate the 'Tổng quan' sheet with metadata, banner stats, and 5★ list."""
    ws.title = "Tổng quan"
    ws.views.sheetView[0].showGridLines = True

    ws["A1"] = "BÁO CÁO LỊCH SỬ CẦU NGUYỆN GENSHIN IMPACT"
    ws["A1"].font = TITLE_FONT

    meta_rows = [
        ("UID", uid),
        ("Server", region or "-"),
        ("Ngôn ngữ", lang or "-"),
        ("Thời gian xuất", now.strftime("%Y-%m-%d %H:%M:%S")),
        ("Tổng số lượt roll", total_pulls),
        ("Ghi chú", "HoYoverse chỉ lưu lịch sử tối đa 1 năm gần nhất"),
    ]
    for offset, (label, val) in enumerate(meta_rows, start=3):
        c_label = ws.cell(row=offset, column=1, value=label)
        c_label.font = META_LABEL_FONT
        c_val = ws.cell(row=offset, column=2, value=val)
        c_val.font = META_VALUE_FONT
        if label == "UID":
            c_val.number_format = "@"

    summary_title_row = 10
    ws.cell(row=summary_title_row, column=1, value="THỐNG KÊ THEO BANNER").font = SECTION_FONT

    summary_headers = [
        "Banner",
        "Mã Pool",
        "Tổng roll",
        "Số 5★",
        "Số 4★",
        "Số 3★",
        "Tỉ lệ 5★ (%)",
        "TB roll/5★",
        "Pity 5★ hiện tại",
        "Pity 4★ hiện tại",
        "Từ ngày",
        "Đến ngày",
    ]
    summary_header_row = 11
    for col_idx, header in enumerate(summary_headers, start=1):
        ws.cell(row=summary_header_row, column=col_idx, value=header)
    style_header_row(ws, summary_header_row, len(summary_headers))

    cur_row = summary_header_row + 1
    for idx, s in enumerate(summaries):
        values = [
            s["banner"],
            s["pool_id"],
            s["total"],
            s["count_5"],
            s["count_4"],
            s["count_3"],
            s["rate_5"],
            s["avg_5"] if s["avg_5"] is not None else "-",
            s["current_pity_5"],
            s["current_pity_4"],
            s["first_time"],
            s["last_time"],
        ]
        for col_idx, val in enumerate(values, start=1):
            cell = ws.cell(row=cur_row, column=col_idx, value=val)
            cell.font = BASE_FONT
            cell.border = THIN_BORDER
            if idx % 2 == 1:
                cell.fill = ZEBRA_FILL
            if col_idx == 2:
                cell.number_format = "@"
                cell.alignment = Alignment(horizontal="center", vertical="center")
            elif col_idx in (3, 4, 5, 6, 7, 8, 9, 10):
                cell.alignment = Alignment(horizontal="right", vertical="center")
                if col_idx in (7, 8) and isinstance(val, (int, float)):
                    cell.number_format = "0.00"
            elif col_idx in (11, 12):
                cell.alignment = Alignment(horizontal="center", vertical="center")
            else:
                cell.alignment = Alignment(horizontal="left", vertical="center")
        cur_row += 1

    five_title_row = cur_row + 1
    ws.cell(row=five_title_row, column=1, value="DANH SÁCH VẬT PHẨM / NHÂN VẬT 5★").font = SECTION_FONT

    five_headers = ["Banner", "Thời gian", "Tên", "Loại", "Pity 5★"]
    five_header_row = five_title_row + 1
    for col_idx, header in enumerate(five_headers, start=1):
        ws.cell(row=five_header_row, column=col_idx, value=header)
    style_header_row(ws, five_header_row, len(five_headers))

    cur_row = five_header_row + 1
    for item in five_stars_desc:
        values = [
            item["banner_name"],
            item["time"],
            item["name"],
            item["item_type"],
            item["pity_5"],
        ]
        for col_idx, val in enumerate(values, start=1):
            cell = ws.cell(row=cur_row, column=col_idx, value=val)
            cell.fill = FIVE_STAR_FILL
            cell.font = FIVE_STAR_FONT
            cell.border = THIN_BORDER
            cell.alignment = Alignment(
                horizontal="right" if col_idx == 5 else ("center" if col_idx == 2 else "left"),
                vertical="center",
            )
        cur_row += 1

    autofit_columns(ws, min_width=12, max_width=46)
    ws.column_dimensions["A"].width = max(ws.column_dimensions["A"].width or 0, 26)
    ws.column_dimensions["B"].width = max(ws.column_dimensions["B"].width or 0, 22)


def build_banner_sheet(
    ws: openpyxl.worksheet.worksheet.Worksheet,
    rows_desc: list[dict[str, Any]],
) -> None:
    """Populate a single banner sheet with newest-first pulls and rarity highlights."""
    headers = [
        "STT",
        "Thời gian",
        "Tên",
        "Loại",
        "Sao (★)",
        "Pity 5★",
        "Pity 4★",
        "Mã Banner",
        "ID",
    ]
    for col_idx, header in enumerate(headers, start=1):
        ws.cell(row=1, column=col_idx, value=header)
    style_header_row(ws, 1, len(headers))

    for row_idx, r in enumerate(rows_desc, start=2):
        rank_int = int(r["rank_type"]) if r["rank_type"].isdigit() else 3
        values = [
            r["stt"],
            r["time"],
            r["name"],
            r["item_type"],
            rank_int,
            r["pity_5"],
            r["pity_4"],
            str(r["gacha_type"]),
            str(r["id"]),
        ]
        for col_idx, val in enumerate(values, start=1):
            cell = ws.cell(row=row_idx, column=col_idx, value=val)
            cell.border = THIN_BORDER

            if rank_int == 5:
                cell.fill = FIVE_STAR_FILL
                cell.font = FIVE_STAR_FONT
            elif rank_int == 4:
                cell.fill = FOUR_STAR_FILL
                cell.font = FOUR_STAR_FONT
            else:
                cell.font = BASE_FONT
                if row_idx % 2 == 1:
                    cell.fill = ZEBRA_FILL

            if col_idx in (8, 9):
                cell.number_format = "@"
                cell.alignment = Alignment(horizontal="center", vertical="center")
            elif col_idx in (1, 5, 6, 7):
                cell.alignment = Alignment(horizontal="right", vertical="center")
            elif col_idx == 2:
                cell.alignment = Alignment(horizontal="center", vertical="center")
            else:
                cell.alignment = Alignment(horizontal="left", vertical="center")

    ws.freeze_panes = "A2"
    ws.auto_filter.ref = f"A1:{get_column_letter(len(headers))}{max(1, len(rows_desc) + 1)}"
    autofit_columns(ws, min_width=10, max_width=40)


def write_excel_workbook(
    out_path: Path,
    uid: str,
    region: str,
    lang: str,
    now: datetime,
    summaries: list[dict[str, Any]],
    per_banner_rows_desc: list[tuple[BannerConfig, list[dict[str, Any]]]],
    five_stars_desc: list[dict[str, Any]],
) -> None:
    """Create and save the formatted Excel workbook."""
    wb = openpyxl.Workbook()
    overview_ws = wb.active
    total_pulls = sum(s["total"] for s in summaries)
    build_overview_sheet(
        overview_ws,
        uid=uid,
        region=region,
        lang=lang,
        now=now,
        total_pulls=total_pulls,
        summaries=summaries,
        five_stars_desc=five_stars_desc,
    )

    for banner, rows_desc in per_banner_rows_desc:
        if not rows_desc:
            continue
        sheet = wb.create_sheet(title=sanitize_sheet_title(banner.sheet_name))
        build_banner_sheet(sheet, rows_desc)

    wb.save(out_path)


def parse_args() -> argparse.Namespace:
    """Parse CLI arguments for the wish history exporter."""
    default_out_dir = Path(__file__).resolve().parent.parent / "data" / "wish_history"
    parser = argparse.ArgumentParser(
        description="Export Genshin Impact wish history from local HoYoverse webCaches."
    )
    parser.add_argument(
        "--out-dir",
        type=Path,
        default=default_out_dir,
        help=f"Output directory for exported files (default: {default_out_dir})",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    game_data_dir = discover_game_data_dir()
    cache_file = find_latest_cache_file(game_data_dir)
    host, base_params = extract_auth_endpoint(cache_file)

    client = GachaApiClient(host=host, base_params=base_params)
    config_list, cfg_region = client.fetch_config_list()
    banners = resolve_banners(config_list)

    region = cfg_region or base_params.get("region", "")
    lang = base_params.get("lang", "vi-vn")
    uid = ""

    summaries: list[dict[str, Any]] = []
    all_rows_asc: list[dict[str, Any]] = []
    pool_rows_desc_flat: list[dict[str, Any]] = []
    per_banner_rows_desc: list[tuple[BannerConfig, list[dict[str, Any]]]] = []

    for banner in banners:
        raw_records = client.fetch_pool_wishes(banner.pool_id)
        enriched_asc, summary = enrich_pool_records(banner, raw_records)
        summaries.append(summary)

        if enriched_asc:
            if not uid:
                uid = enriched_asc[0]["uid"]
            if enriched_asc[0]["lang"]:
                lang = enriched_asc[0]["lang"]

        rows_desc = list(reversed(enriched_asc))
        per_banner_rows_desc.append((banner, rows_desc))
        pool_rows_desc_flat.extend(rows_desc)
        all_rows_asc.extend(enriched_asc)

    # Global chronological ascending sort and deduplication by id
    seen_global: set[str] = set()
    unique_asc: list[dict[str, Any]] = []
    for row in sorted(all_rows_asc, key=lambda r: int(r["id"])):
        if row["id"] not in seen_global:
            seen_global.add(row["id"])
            unique_asc.append(row)

    five_stars_desc = [r for r in sorted(unique_asc, key=lambda r: int(r["id"]), reverse=True) if r["rank_type"] == "5"]

    if not uid:
        uid = "unknown"

    now = datetime.now()
    date_str = now.strftime("%Y%m%d")
    export_dir = args.out_dir.resolve()
    export_dir.mkdir(parents=True, exist_ok=True)

    json_path = export_dir / f"genshin_wish_{uid}_{date_str}_uigf_v3.json"
    csv_path = export_dir / f"genshin_wish_{uid}_{date_str}.csv"
    xlsx_path = export_dir / f"genshin_wish_{uid}_{date_str}.xlsx"

    write_uigf_json(json_path, uid=uid, lang=lang, region=region, now=now, all_rows_asc=unique_asc)
    write_csv_file(csv_path, pool_rows_desc_flat)
    write_excel_workbook(
        xlsx_path,
        uid=uid,
        region=region,
        lang=lang,
        now=now,
        summaries=summaries,
        per_banner_rows_desc=per_banner_rows_desc,
        five_stars_desc=five_stars_desc,
    )

    print(f"UID={uid} | REGION={region} | LANG={lang} | TOTAL={len(unique_asc)}")
    for s in summaries:
        print(
            f"POOL={s['pool_id']} ({s['banner']}): total={s['total']}, "
            f"5*={s['count_5']}, 4*={s['count_4']}, 3*={s['count_3']}, "
            f"pity5={s['current_pity_5']}, pity4={s['current_pity_4']}"
        )
    print(f"JSON={json_path}")
    print(f"CSV={csv_path}")
    print(f"XLSX={xlsx_path}")


if __name__ == "__main__":
    main()
