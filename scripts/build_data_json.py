#!/usr/bin/env python3
"""Transform raw HoYoLAB Battle Chronicle crawl JSON into dashboard dataset JSON."""

from __future__ import annotations

import argparse
import datetime
import json
from collections import Counter
from pathlib import Path
from typing import Any

REPO_ROOT = Path(__file__).resolve().parent.parent

SERVER_LABELS: dict[str, str] = {
    "os_asia": "Asia Server (os_asia)",
    "os_usa": "America Server (os_usa)",
    "os_euro": "Europe Server (os_euro)",
    "os_cht": "TW, HK, MO Server (os_cht)",
}


def format_server_label(server: str) -> str:
    """Return human-readable server label matching existing dashboard format."""
    if server in SERVER_LABELS:
        return SERVER_LABELS[server]
    if "(" in server and ")" in server:
        return server
    return f"{server} ({server})"


def icon_filename(url: str | None) -> str:
    """Extract normalized filename from a HoYoLAB asset URL."""
    if not url:
        return ""
    return url.split("/")[-1].split("?")[0]


def prop_name(prop_map: dict[str, Any], ptype: Any) -> str:
    """Resolve localized Vietnamese stat name from HoYoLAB property_map."""
    entry = prop_map.get(str(ptype)) or {}
    return entry.get("filter_name") or entry.get("name") or str(ptype)


def build_name_lookups(
    page_data: dict[str, Any],
    chars_by_id: dict[str, Any],
    existing_master: dict[str, Any] | None,
) -> tuple[dict[Any, str], dict[str, str]]:
    """Build character ID->name and icon-filename->name mappings."""
    id_to_name: dict[Any, str] = {}
    icon_to_name: dict[str, str] = {}

    if existing_master:
        for ch in existing_master.get("characters") or []:
            cid = ch.get("id")
            name = ch.get("name")
            if cid and name:
                id_to_name[cid] = name
                id_to_name[str(cid)] = name
            for key in ("icon", "card_image", "splash"):
                fname = icon_filename(ch.get(key))
                if fname and name:
                    icon_to_name[fname] = name

    for av in page_data.get("avatars") or []:
        name = av.get("name")
        if not name:
            continue
        if av.get("id") is not None:
            id_to_name[av["id"]] = name
            id_to_name[str(av["id"])] = name
        for key in ("image", "icon", "card_image"):
            fname = icon_filename(av.get(key))
            if fname:
                icon_to_name[fname] = name

    for c in chars_by_id.values():
        b = c.get("base") or {}
        name = b.get("name")
        if not name:
            continue
        if b.get("id") is not None:
            id_to_name[b["id"]] = name
            id_to_name[str(b["id"])] = name
        for key in ("icon", "image"):
            fname = icon_filename(b.get(key))
            if fname:
                icon_to_name[fname] = name

    return id_to_name, icon_to_name


def transform_characters(
    page_data: dict[str, Any],
    chars_by_id: dict[str, Any],
    prop_map: dict[str, Any],
) -> list[dict[str, Any]]:
    """Convert raw HoYoLAB character entries into normalized dashboard records."""
    av_map = {a.get("id"): a for a in (page_data.get("avatars") or []) if a.get("id") is not None}
    chars: list[dict[str, Any]] = []

    for c in chars_by_id.values():
        b = c.get("base") or {}
        cid = b.get("id")
        av = av_map.get(cid, {})
        w = c.get("weapon") or {}

        props: dict[str, dict[str, str]] = {}
        for p in c.get("selected_properties") or []:
            props[prop_name(prop_map, p.get("property_type"))] = {
                "base": p.get("base", ""),
                "add": p.get("add", ""),
                "final": p.get("final", ""),
            }

        active_skills = [s for s in (c.get("skills") or []) if s.get("skill_type") == 1]
        if cid in (10000041, 10000002) and len(active_skills) >= 4:
            normal_talents = [
                s
                for s in active_skills
                if "Senho" not in s.get("name", "") and "Dòng Chảy Ảo" not in s.get("name", "")
            ]
            talent_str = "/".join(str(s["level"]) for s in normal_talents[:3])
        else:
            talent_str = "/".join(str(s["level"]) for s in active_skills[:3])

        relics: list[dict[str, Any]] = []
        set_counts: Counter[str] = Counter()
        for r in c.get("relics") or []:
            sname = (r.get("set") or {}).get("name", "")
            if sname:
                set_counts[sname] += 1
            main_prop = r.get("main_property") or {}
            relics.append(
                {
                    "slot": r.get("pos_name"),
                    "name": r.get("name"),
                    "set": sname,
                    "rarity": r.get("rarity"),
                    "level": r.get("level"),
                    "main_stat": prop_name(prop_map, main_prop.get("property_type")),
                    "main_val": main_prop.get("value"),
                    "substats": [
                        {
                            "name": prop_name(prop_map, sp.get("property_type")),
                            "value": sp.get("value"),
                            "rolls": sp.get("times", 0),
                        }
                        for sp in (r.get("sub_property_list") or [])
                    ],
                    "icon": r.get("icon", ""),
                }
            )

        set_summary = ", ".join(f"{cnt}pc {name}" for name, cnt in set_counts.most_common())
        sub_prop = w.get("sub_property") or None
        raw_rarity = b.get("rarity")

        chars.append(
            {
                "id": cid,
                "name": b.get("name", ""),
                "element": b.get("element", ""),
                "rarity": 5 if raw_rarity in (5, 105) else raw_rarity,
                "rarity_raw": raw_rarity,
                "level": b.get("level", 1),
                "constellation": b.get("actived_constellation_num", 0),
                "friendship": b.get("fetter", 0),
                "talents": [f"{s.get('name', '')}: {s.get('level', 1)}" for s in active_skills],
                "talent_levels": talent_str,
                "weapon": {
                    "name": w.get("name"),
                    "rarity": w.get("rarity"),
                    "level": w.get("level"),
                    "refinement": w.get("affix_level"),
                    "base_atk": (w.get("main_property") or {}).get("final"),
                    "substat_name": prop_name(prop_map, sub_prop.get("property_type")) if sub_prop else None,
                    "substat_val": sub_prop.get("final") if sub_prop else None,
                    "icon": w.get("icon", ""),
                },
                "stats": props,
                "artifact_sets": set_summary,
                "artifacts": relics,
                "icon": b.get("icon") or av.get("image") or "",
                "card_image": av.get("card_image") or "",
                "splash": b.get("image") or "",
            }
        )

    chars.sort(key=lambda x: (-x["level"], -(x["rarity"] or 0), -x["constellation"], x["name"]))
    return chars


def resolve_abyss(
    abyss_raw: list[dict[str, Any]],
    id_to_name: dict[Any, str],
    icon_to_name: dict[str, str],
) -> list[dict[str, Any]]:
    """Normalize Spiral Abyss data structures."""

    def resolve_rank(arr: list[dict[str, Any]] | None) -> list[dict[str, Any]]:
        return [
            {
                "name": id_to_name.get(x.get("avatar_id"))
                or icon_to_name.get(icon_filename(x.get("avatar_icon")), str(x.get("avatar_id"))),
                "value": x.get("value"),
            }
            for x in (arr or [])
        ]

    abyss_clean: list[dict[str, Any]] = []
    for ab in abyss_raw:
        d = ab.get("data") if "data" in ab else ab
        if not isinstance(d, dict) or not d:
            continue
        floors = []
        for fl in d.get("floors") or []:
            chambers = []
            for lv in fl.get("levels") or []:
                battles = []
                for bt in lv.get("battles") or []:
                    battles.append(
                        {
                            "half": bt.get("index"),
                            "timestamp": bt.get("timestamp"),
                            "team": [
                                {
                                    "name": id_to_name.get(av.get("id"))
                                    or icon_to_name.get(icon_filename(av.get("icon")), str(av.get("id"))),
                                    "level": av.get("level"),
                                    "rarity": av.get("rarity"),
                                }
                                for av in (bt.get("avatars") or [])
                            ],
                        }
                    )
                chambers.append(
                    {
                        "chamber": lv.get("index"),
                        "stars": f"{lv.get('star')}/{lv.get('max_star')}",
                        "battles": battles,
                    }
                )
            floors.append(
                {
                    "floor": fl.get("index"),
                    "stars": f"{fl.get('star')}/{fl.get('max_star')}",
                    "chambers": chambers,
                }
            )
        abyss_clean.append(
            {
                "schedule_type": ab.get("schedule_type"),
                "schedule_id": d.get("schedule_id"),
                "max_floor": d.get("max_floor"),
                "total_star": d.get("total_star"),
                "total_battle_times": d.get("total_battle_times"),
                "total_win_times": d.get("total_win_times"),
                "most_played": resolve_rank(d.get("reveal_rank")),
                "most_defeats": resolve_rank(d.get("defeat_rank")),
                "strongest_strike": resolve_rank(d.get("damage_rank")),
                "most_damage_taken": resolve_rank(d.get("take_damage_rank")),
                "burst_rank": resolve_rank(d.get("energy_skill_rank")),
                "skill_rank": resolve_rank(d.get("normal_skill_rank")),
                "floors": floors,
            }
        )
    return abyss_clean


def resolve_stygian_onslaught(
    challenge_raw: dict[str, Any] | None,
    icon_to_name: dict[str, str],
    existing_stygian: dict[str, Any] | None,
) -> dict[str, Any] | None:
    """Resolve Stygian Onslaught (hard_challenge) dynamically from crawl data or fallback."""
    if not challenge_raw:
        return existing_stygian

    bosses_in = challenge_raw.get("bosses")
    if isinstance(bosses_in, list) and bosses_in:
        resolved_bosses = []
        for boss in bosses_in:
            team = list(boss.get("team") or [])
            if not team and boss.get("team_imgs"):
                for img_url in boss["team_imgs"]:
                    fname = icon_filename(img_url)
                    team.append(icon_to_name.get(fname, fname or "Unknown"))
            resolved_bosses.append(
                {
                    "name": boss.get("name", ""),
                    "time_sec": int(boss.get("time_sec", 0)),
                    "max_single_hit": int(boss.get("max_single_hit", 0)),
                    "total_damage": int(boss.get("total_damage", 0)),
                    "team": team,
                }
            )
        best_time = challenge_raw.get("best_time_sec")
        if best_time is None:
            best_time = sum(b["time_sec"] for b in resolved_bosses)
        return {
            "cycle": challenge_raw.get("cycle") or (existing_stygian or {}).get("cycle", ""),
            "difficulty": challenge_raw.get("difficulty") or (existing_stygian or {}).get("difficulty", ""),
            "mode": challenge_raw.get("mode") or "Single Player",
            "best_time_sec": int(best_time),
            "bosses": resolved_bosses,
        }

    # Handle legacy challenge.json {"current": {"imgs": [...]}} if provided
    cur = challenge_raw.get("current") or {}
    if cur.get("imgs") and existing_stygian and len(existing_stygian.get("bosses") or []) == 3:
        names = [icon_to_name.get(icon_filename(u), "") for u in cur["imgs"]]
        updated = dict(existing_stygian)
        updated["bosses"] = [
            {**b, "team": names[idx * 4 : (idx + 1) * 4] or b.get("team", [])}
            for idx, b in enumerate(existing_stygian["bosses"])
        ]
        return updated

    return existing_stygian


def build_master_json(
    raw_bundle: dict[str, Any],
    uid: str,
    server: str = "os_asia",
    existing_master: dict[str, Any] | None = None,
) -> dict[str, Any]:
    """Build complete dashboard dataset JSON from raw HoYoLAB crawl payload."""
    overview = raw_bundle.get("overview") or {}
    pd = overview.get("pageData") or {}
    if not pd:
        raise ValueError("Missing overview.pageData in raw HoYoLAB crawl payload.")

    prop_map = raw_bundle.get("property_map") or {}
    chars_by_id = raw_bundle.get("characters_by_id") or {}

    id_to_name, icon_to_name = build_name_lookups(pd, chars_by_id, existing_master)
    chars = transform_characters(pd, chars_by_id, prop_map)

    abyss_clean = resolve_abyss(overview.get("abyssData") or [], id_to_name, icon_to_name)
    if not abyss_clean and existing_master:
        abyss_clean = existing_master.get("spiral_abyss") or []

    stygian = resolve_stygian_onslaught(
        raw_bundle.get("challenge") or raw_bundle.get("hardChallenge"),
        icon_to_name,
        existing_master.get("stygian_onslaught") if existing_master else None,
    )

    game_records = (overview.get("rootData") or {}).get("gameRecords") or []
    first_record = game_records[0] if game_records and isinstance(game_records[0], dict) else {}
    old_account = (existing_master or {}).get("account") or {}
    role = pd.get("role") or {}
    stats = pd.get("stats") or {}

    tcg = overview.get("tcgData")
    if tcg is None and existing_master:
        tcg = existing_master.get("tcg")

    theater = stats.get("role_combat") or overview.get("roleCombatData")
    if theater is None and existing_master:
        theater = existing_master.get("imaginarium_theater")

    return {
        "crawled_at": datetime.datetime.now().astimezone().isoformat(),
        "account": {
            "uid": str(uid),
            "nickname": role.get("nickname") or old_account.get("nickname", ""),
            "adventure_rank": role.get("level") or old_account.get("adventure_rank", 0),
            "server": format_server_label(server),
            "stats": stats,
            "banner": first_record.get("background_image") or old_account.get("banner", ""),
            "logo": first_record.get("logo") or old_account.get("logo", ""),
        },
        "world_explorations": pd.get("world_explorations") or [],
        "serenitea_pot": pd.get("homes") or [],
        "tcg": tcg,
        "spiral_abyss": abyss_clean,
        "stygian_onslaught": stygian,
        "imaginarium_theater": theater,
        "characters_count": len(chars),
        "characters": chars,
    }


def load_legacy_dir(in_dir: Path) -> dict[str, Any]:
    """Load legacy 3-file directory (overview_data.json, characters_full.json, challenge.json)."""
    ov = json.loads((in_dir / "overview_data.json").read_text(encoding="utf-8"))
    cf = json.loads((in_dir / "characters_full.json").read_text(encoding="utf-8"))
    ch_path = in_dir / "challenge.json"
    ch = json.loads(ch_path.read_text(encoding="utf-8")) if ch_path.is_file() else None
    return {
        "overview": ov,
        "property_map": cf.get("property_map") or {},
        "characters_by_id": cf.get("characters_by_id") or {},
        "challenge": ch,
    }


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Build genshin_uid_<uid>_data.json from raw HoYoLAB crawl JSON."
    )
    src = parser.add_mutually_exclusive_group(required=True)
    src.add_argument("--raw", type=Path, help="Single raw crawl JSON bundle path")
    src.add_argument("--in-dir", type=Path, help="Legacy directory with overview_data.json & characters_full.json")
    parser.add_argument("--uid", default="802472241", help="Genshin Impact UID (default: 802472241)")
    parser.add_argument("--server", default="os_asia", help="Server region code (default: os_asia)")
    parser.add_argument(
        "--out",
        type=Path,
        default=None,
        help="Output JSON path (default: <repo>/data/genshin_uid_<uid>_data.json)",
    )
    parser.add_argument(
        "--existing",
        type=Path,
        default=None,
        help="Optional existing dashboard JSON for fallback fields (defaults to --out if present)",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    out_path = args.out or (REPO_ROOT / "data" / f"genshin_uid_{args.uid}_data.json")
    existing_path = args.existing or out_path

    existing_master: dict[str, Any] | None = None
    if existing_path.is_file():
        existing_master = json.loads(existing_path.read_text(encoding="utf-8"))

    if args.raw:
        raw_bundle = json.loads(args.raw.read_text(encoding="utf-8"))
    else:
        raw_bundle = load_legacy_dir(args.in_dir)

    master = build_master_json(
        raw_bundle=raw_bundle,
        uid=args.uid,
        server=args.server,
        existing_master=existing_master,
    )

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(master, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {master['characters_count']} characters to {out_path}")


if __name__ == "__main__":
    main()
