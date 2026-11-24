#!/usr/bin/env python3
"""Cross-platform HoYoLAB Genshin Impact Battle Chronicle crawler.

Supports:
- Windows / Linux / macOS via Chrome DevTools Protocol (`--backend cdp`, default on Windows/Linux)
- macOS Chrome AppleScript (`--backend applescript`, default on macOS)

Automatically transforms crawled data into `data/genshin_uid_<uid>_data.json` via `build_data_json.py`.
"""

from __future__ import annotations

import argparse
import base64
import json
import os
import shutil
import socket
import subprocess
import sys
import time
from pathlib import Path
from typing import Any

import requests
import websocket

SCRIPT_DIR = Path(__file__).resolve().parent
REPO_ROOT = SCRIPT_DIR.parent
if str(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPT_DIR))

from build_data_json import build_master_json  # noqa: E402

DEFAULT_MAC_CHROME = (
    os.path.expanduser("~/Applications/Google Chrome.app")
    if os.path.exists(os.path.expanduser("~/Applications/Google Chrome.app"))
    else "/Applications/Google Chrome.app"
)

JS_EXTRACT_OVERVIEW = """
var root = document.querySelector(".pc-root-layout");
root = root && root.__vue__;
if (!root) return null;
var out = { pageData: null, abyssData: null, roleCombatData: null, tcgData: null, rootData: null };
var seen = [];
function visit(node, depth) {
  if (!node || depth > 10 || seen.indexOf(node) !== -1) return;
  seen.push(node);
  var srcs = [node, node.$data];
  for (var s = 0; s < srcs.length; s++) {
    var src = srcs[s];
    if (!src) continue;
    if (!out.pageData && src.pageData && src.pageData.role) out.pageData = src.pageData;
    if (!out.abyssData && Array.isArray(src.abyssData) && src.abyssData.length) out.abyssData = src.abyssData;
    if (!out.roleCombatData && src.roleCombatData) out.roleCombatData = src.roleCombatData;
    if (!out.tcgData && src.tcgData) out.tcgData = src.tcgData;
    if (!out.rootData && src.rootData && src.rootData.gameRecords) out.rootData = src.rootData;
    if (!out.rootData && src.gameRecords) out.rootData = { gameRecords: src.gameRecords };
  }
  var ch = node.$children || [];
  for (var i = 0; i < ch.length; i++) visit(ch[i], depth + 1);
}
visit(root, 0);
if (!out.pageData) return null;
return out;
"""

JS_CHECK_ROLE_DETAIL = """
var root = document.querySelector(".pc-root-layout");
root = root && root.__vue__;
if (!root) return { ready: false, count: 0 };
function findByTag(node, tag, depth) {
  if (!node || depth > 9) return null;
  if (node.$options && node.$options._componentTag === tag) return node;
  var ch = node.$children || [];
  for (var i = 0; i < ch.length; i++) {
    var f = findByTag(ch[i], tag, depth + 1);
    if (f) return f;
  }
  return null;
}
var rd = findByTag(root, "RoleDetail", 0);
if (!rd || !rd.$el) return { ready: false, count: 0 };
var avatars = rd.$el.querySelectorAll(".tw-relative.avatar");
return { ready: avatars.length > 0, count: avatars.length };
"""

JS_OPEN_ROLE_DETAIL = """
var candidates = document.querySelectorAll(
  ".role-list .role-card, .avatar-card, [class*='role'] [class*='avatar'], .tw-relative.avatar"
);
for (var i = 0; i < candidates.length; i++) {
  if (candidates[i].offsetParent !== null) {
    candidates[i].click();
    return true;
  }
}
return false;
"""

JS_CLICK_AVATAR_TMPL = """
var root = document.querySelector(".pc-root-layout");
root = root && root.__vue__;
function findByTag(node, tag, depth) {{
  if (!node || depth > 9) return null;
  if (node.$options && node.$options._componentTag === tag) return node;
  var ch = node.$children || [];
  for (var i = 0; i < ch.length; i++) {{
    var f = findByTag(ch[i], tag, depth + 1);
    if (f) return f;
  }}
  return null;
}}
var rd = findByTag(root, "RoleDetail", 0);
if (!rd || !rd.$el) return "NO_ROLE_DETAIL";
var avatars = rd.$el.querySelectorAll(".tw-relative.avatar");
if (!avatars[{idx}]) return "NO_AVATAR";
avatars[{idx}].scrollIntoView({{ inline: "center", block: "nearest" }});
avatars[{idx}].click();
return "OK";
"""

JS_READ_ACTIVE_CHAR = """
var root = document.querySelector(".pc-root-layout");
root = root && root.__vue__;
if (!root) return null;
function findByTag(node, tag, depth) {
  if (!node || depth > 9) return null;
  if (node.$options && node.$options._componentTag === tag) return node;
  var ch = node.$children || [];
  for (var i = 0; i < ch.length; i++) {
    var f = findByTag(ch[i], tag, depth + 1);
    if (f) return f;
  }
  return null;
}
function findDetail(node, depth) {
  if (!node || depth > 6) return null;
  var d = node.data || (node.$data && node.$data.data);
  if (d && Array.isArray(d.list) && d.list[0] && d.list[0].base) {
    return { item: d.list[0], property_map: d.property_map || null };
  }
  var ch = node.$children || [];
  for (var i = 0; i < ch.length; i++) {
    var f = findDetail(ch[i], depth + 1);
    if (f) return f;
  }
  return null;
}
var rd = findByTag(root, "RoleDetail", 0);
if (!rd) return null;
return findDetail(rd, 0);
"""

JS_EXTRACT_CHALLENGE = """
var txt = (document.body && document.body.innerText) || "";
if (txt.indexOf("Kẻ") === -1 && txt.indexOf("Thường") === -1 && txt.indexOf("Giây") === -1 && txt.indexOf("Seconds") === -1) {
  return null;
}
var cycleMatch = txt.match(/(\\d{4}\\.\\d{2}\\.\\d{2}\\s*-\\s*\\d{4}\\.\\d{2}\\.\\d{2})/);
var diffMatch = txt.match(/(?:Độ Khó|Difficulty)[:\\s]*([IVX]+|\\d+)/i);
var totalMatch = txt.match(/(\\d+)\\s*(?:Giây|s|Seconds)/i);
var cards = document.querySelectorAll("[class*='boss'], [class*='challenge'] [class*='item'], [class*='card']");
var bosses = [];
for (var i = 0; i < cards.length; i++) {
  var ctxt = cards[i].innerText || "";
  var tm = ctxt.match(/(\\d+)\\s*(?:Giây|s|Seconds)/i);
  var imgs = [];
  var imgEls = cards[i].querySelectorAll("img");
  for (var j = 0; j < imgEls.length; j++) {
    var src = imgEls[j].getAttribute("src") || "";
    if (src && src.indexOf("item_icon") !== -1) imgs.push(src);
  }
  if (tm && imgs.length === 4) {
    var lines = ctxt.split("\\n").map(function(s){ return s.trim(); }).filter(Boolean);
    var nums = ctxt.match(/\\d{4,}/g) || [];
    bosses.push({
      name: lines[0] || "",
      time_sec: parseInt(tm[1], 10),
      max_single_hit: nums.length >= 1 ? parseInt(nums[0], 10) : 0,
      total_damage: nums.length >= 2 ? parseInt(nums[1], 10) : 0,
      team_imgs: imgs
    });
  }
}
if (!bosses.length) return null;
return {
  cycle: cycleMatch ? cycleMatch[1].replace(/\\s+/g, "") : "",
  difficulty: diffMatch ? diffMatch[1] : "III",
  mode: "Single Player",
  best_time_sec: totalMatch ? parseInt(totalMatch[1], 10) : null,
  bosses: bosses.slice(0, 3)
};
"""


def default_user_data_dir() -> Path:
    """Return persistent isolated browser profile dir outside the git repository."""
    if os.name == "nt":
        base = Path(os.environ.get("LOCALAPPDATA") or (Path.home() / "AppData" / "Local"))
    elif sys.platform == "darwin":
        base = Path.home() / "Library" / "Application Support"
    else:
        base = Path(os.environ.get("XDG_CACHE_HOME") or (Path.home() / ".cache"))
    return base / "genshin-hoyolab-crawler" / "chrome-profile"


def find_browser_executable(override: Path | None = None) -> Path:
    """Locate Chrome (preferred) or Edge executable without touching user defaults."""
    if override:
        if not override.is_file():
            raise FileNotFoundError(f"Browser executable not found: {override}")
        return override

    candidates: list[str] = []
    if os.name == "nt":
        candidates.extend(
            [
                r"C:\Program Files\Google\Chrome\Application\chrome.exe",
                r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
                os.path.expandvars(r"%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe"),
                r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
                r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
            ]
        )
    elif sys.platform == "darwin":
        candidates.extend(
            [
                "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
                os.path.expanduser("~/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"),
            ]
        )
    else:
        for cmd in ("google-chrome", "chromium", "chromium-browser", "microsoft-edge"):
            found = shutil.which(cmd)
            if found:
                candidates.append(found)

    for cand in candidates:
        if cand and Path(cand).is_file():
            return Path(cand)

    raise FileNotFoundError(
        "Không tìm thấy Google Chrome hoặc Microsoft Edge. Dùng --chrome-path để chỉ định đường dẫn."
    )


def find_free_port() -> int:
    """Bind ephemeral localhost port and return its port number."""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.bind(("127.0.0.1", 0))
        return int(sock.getsockname()[1])


class CdpSession:
    """Minimal synchronous Chrome DevTools Protocol WebSocket client."""

    def __init__(self, ws_url: str, timeout: float = 30.0) -> None:
        self.ws = websocket.create_connection(ws_url, timeout=timeout, suppress_origin=True)
        self._msg_id = 0

    def call(self, method: str, params: dict[str, Any] | None = None) -> dict[str, Any]:
        self._msg_id += 1
        req_id = self._msg_id
        self.ws.send(json.dumps({"id": req_id, "method": method, "params": params or {}}))
        while True:
            raw = self.ws.recv()
            msg = json.loads(raw)
            if msg.get("id") != req_id:
                continue
            if "error" in msg:
                raise RuntimeError(f"CDP {method} failed: {msg['error']}")
            return msg.get("result") or {}

    def eval_js(self, body_js: str) -> Any:
        wrapped = f"(function(){{\n{body_js}\n}})()"
        res = self.call(
            "Runtime.evaluate",
            {
                "expression": wrapped,
                "returnByValue": True,
                "awaitPromise": True,
            },
        )
        if "exceptionDetails" in res:
            exc = res["exceptionDetails"]
            raise RuntimeError(f"Page JS error: {exc.get('text')} {exc.get('exception', {}).get('description', '')}")
        return (res.get("result") or {}).get("value")

    def close(self) -> None:
        try:
            self.ws.close()
        except Exception:
            pass


class CdpBrowserDriver:
    """Manage dedicated or attached Chrome CDP session non-destructively."""

    def __init__(
        self,
        start_url: str,
        cdp_url: str | None = None,
        chrome_path: Path | None = None,
        user_data_dir: Path | None = None,
    ) -> None:
        self.start_url = start_url
        self.cdp_url = cdp_url.rstrip("/") if cdp_url else None
        self.chrome_path = chrome_path
        self.user_data_dir = user_data_dir or default_user_data_dir()
        self.proc: subprocess.Popen[Any] | None = None
        self.browser_ws: CdpSession | None = None
        self.page_ws: CdpSession | None = None
        self.created_target_id: str | None = None
        self.base_http: str = ""

    def __enter__(self) -> CdpBrowserDriver:
        if self.cdp_url:
            self.base_http = self.cdp_url
            ver = requests.get(f"{self.base_http}/json/version", timeout=5).json()
            self.browser_ws = CdpSession(ver["webSocketDebuggerUrl"])
            created = self.browser_ws.call("Target.createTarget", {"url": self.start_url})
            self.created_target_id = created["targetId"]
            page_ws_url = self._wait_for_target_ws(self.created_target_id)
            self.page_ws = CdpSession(page_ws_url)
        else:
            exe = find_browser_executable(self.chrome_path)
            port = find_free_port()
            self.base_http = f"http://127.0.0.1:{port}"
            self.user_data_dir.mkdir(parents=True, exist_ok=True)
            cmd = [
                str(exe),
                f"--remote-debugging-port={port}",
                "--remote-allow-origins=*",
                f"--user-data-dir={self.user_data_dir}",
                "--no-first-run",
                "--no-default-browser-check",
                self.start_url,
            ]
            self.proc = subprocess.Popen(
                cmd,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
            )
            ver = self._wait_for_cdp_ready()
            self.browser_ws = CdpSession(ver["webSocketDebuggerUrl"])
            page_ws_url = self._wait_for_first_page_ws()
            self.page_ws = CdpSession(page_ws_url)
        return self

    def _wait_for_cdp_ready(self, timeout: float = 20.0) -> dict[str, Any]:
        deadline = time.monotonic() + timeout
        while time.monotonic() < deadline:
            try:
                resp = requests.get(f"{self.base_http}/json/version", timeout=2)
                if resp.ok:
                    data = resp.json()
                    if data.get("webSocketDebuggerUrl"):
                        return data
            except requests.RequestException:
                pass
            time.sleep(0.3)
        raise RuntimeError("Hết thời gian chờ Chrome khởi động cổng CDP.")

    def _wait_for_target_ws(self, target_id: str, timeout: float = 15.0) -> str:
        deadline = time.monotonic() + timeout
        while time.monotonic() < deadline:
            try:
                targets = requests.get(f"{self.base_http}/json/list", timeout=2).json()
                for t in targets:
                    if t.get("id") == target_id and t.get("webSocketDebuggerUrl"):
                        return str(t["webSocketDebuggerUrl"])
            except requests.RequestException:
                pass
            time.sleep(0.25)
        raise RuntimeError(f"Không tìm thấy WebSocket của tab mới ({target_id}).")

    def _wait_for_first_page_ws(self, timeout: float = 15.0) -> str:
        deadline = time.monotonic() + timeout
        while time.monotonic() < deadline:
            try:
                targets = requests.get(f"{self.base_http}/json/list", timeout=2).json()
                for t in targets:
                    if t.get("type") == "page" and t.get("webSocketDebuggerUrl"):
                        return str(t["webSocketDebuggerUrl"])
            except requests.RequestException:
                pass
            time.sleep(0.25)
        raise RuntimeError("Không tìm thấy page target trong Chrome CDP.")

    def eval_js(self, body_js: str) -> Any:
        assert self.page_ws is not None
        return self.page_ws.eval_js(body_js)

    def navigate(self, url: str) -> None:
        assert self.page_ws is not None
        self.page_ws.call("Page.navigate", {"url": url})

    def __exit__(self, exc_type: Any, exc: Any, tb: Any) -> None:
        if self.page_ws:
            self.page_ws.close()
        if self.browser_ws:
            try:
                if self.created_target_id:
                    self.browser_ws.call("Target.closeTarget", {"targetId": self.created_target_id})
                elif self.proc is not None:
                    self.browser_ws.call("Browser.close")
            except Exception:
                pass
            self.browser_ws.close()
        if self.proc is not None:
            try:
                self.proc.wait(timeout=5)
            except subprocess.TimeoutExpired:
                self.proc.terminate()


class AppleScriptBrowserDriver:
    """macOS Chrome AppleScript automation driver (preserves original macOS workflow)."""

    def __init__(self, start_url: str, profile_dir: str = "Default", app: str = DEFAULT_MAC_CHROME) -> None:
        self.start_url = start_url
        self.profile_dir = profile_dir
        self.app = app

    def __enter__(self) -> AppleScriptBrowserDriver:
        subprocess.run(
            ["/usr/bin/open", "-a", self.app, "--args", f"--profile-directory={self.profile_dir}", self.start_url],
            check=True,
        )
        time.sleep(3.0)
        return self

    def _run_js_raw(self, js_code: str, url_substr: str = "act.hoyolab.com") -> str:
        b64 = base64.b64encode(js_code.encode("utf-8")).decode("ascii")
        wrapper = (
            "(function(){"
            'var b=atob("' + b64 + '");'
            "var bytes=new Uint8Array(b.length);"
            "for(var i=0;i<b.length;i++)bytes[i]=b.charCodeAt(i);"
            'var code=new TextDecoder("utf-8").decode(bytes);'
            'return (0,eval)("(function(){"+code+"})()");'
            "})()"
        )
        applescript = f'''
tell application "{self.app}"
    repeat with w in windows
        repeat with t in tabs of w
            if (URL of t) contains "{url_substr}" then
                return execute t javascript {json.dumps(wrapper)}
            end if
        end repeat
    end repeat
    return "TAB_NOT_FOUND"
end tell
'''
        p = subprocess.run(["osascript", "-e", applescript], capture_output=True, text=True)
        if p.returncode != 0:
            raise RuntimeError(f"osascript error ({p.returncode}): {p.stderr.strip()}")
        return p.stdout.strip()

    def eval_js(self, body_js: str) -> Any:
        b64 = base64.b64encode(body_js.encode("utf-8")).decode("ascii")
        wrapper = (
            'var resAttr="data-mw-"+Math.random().toString(36).slice(2,8);'
            'var s=document.createElement("script");'
            's.textContent="(function(){try{'
            'var b=atob(\\"' + b64 + '\\");'
            "var bytes=new Uint8Array(b.length);"
            "for(var i=0;i<b.length;i++)bytes[i]=b.charCodeAt(i);"
            'var code=new TextDecoder(\\"utf-8\\").decode(bytes);'
            'var val=(0,eval)(\\"(function(){\\"+code+\\"})()\\");'
            'document.body.setAttribute(\\""+resAttr+"\\",JSON.stringify({v:val}));'
            "}catch(e){"
            'document.body.setAttribute(\\""+resAttr+"\\",JSON.stringify({__err:e.message}));'
            '}})()";'
            "document.head.appendChild(s);"
            "var out=document.body.getAttribute(resAttr);"
            "s.remove();document.body.removeAttribute(resAttr);"
            "return out;"
        )
        raw = self._run_js_raw(wrapper)
        if not raw or raw == "null" or raw == "TAB_NOT_FOUND":
            return None
        parsed = json.loads(raw)
        if "__err" in parsed:
            raise RuntimeError(f"Page JS error: {parsed['__err']}")
        return parsed.get("v")

    def navigate(self, url: str) -> None:
        self.eval_js(f"window.location.href = {json.dumps(url)}; return true;")

    def __exit__(self, exc_type: Any, exc: Any, tb: Any) -> None:
        pass


def wait_for_overview(driver: Any, timeout: int) -> dict[str, Any]:
    """Poll until user is signed in and Vue pageData is loaded."""
    deadline = time.monotonic() + timeout
    prompted = False
    start = time.monotonic()

    while time.monotonic() < deadline:
        ov = driver.eval_js(JS_EXTRACT_OVERVIEW)
        if ov and ov.get("pageData") and ov["pageData"].get("role"):
            return ov
        if not prompted and (time.monotonic() - start) >= 5.0:
            print(
                f"Chưa thấy dữ liệu HoYoLAB (có thể cần đăng nhập). "
                f"Vui lòng đăng nhập trên cửa sổ trình duyệt đang mở (chờ tối đa {timeout}s)..."
            )
            prompted = True
        time.sleep(1.5)

    raise TimeoutError("Hết thời gian chờ đăng nhập / tải HoYoLAB Battle Chronicle.")


def scrape_challenge(driver: Any, uid: str, server: str, base_url: str) -> dict[str, Any] | None:
    """Temporarily visit #/ys/challenge to capture Stygian Onslaught stats if unlocked."""
    challenge_url = (
        f"https://act.hoyolab.com/app/community-game-records-sea/index.html?gid=2"
        f"#/ys/challenge?role_id={uid}&server={server}"
    )
    driver.navigate(challenge_url)
    challenge_data = None
    for _ in range(16):
        time.sleep(0.5)
        challenge_data = driver.eval_js(JS_EXTRACT_CHALLENGE)
        if challenge_data:
            break

    driver.navigate(base_url)
    for _ in range(20):
        time.sleep(0.5)
        if driver.eval_js(JS_EXTRACT_OVERVIEW):
            break
    return challenge_data


def ensure_role_detail_mounted(driver: Any, uid: str, server: str) -> int:
    """Ensure RoleDetail component is mounted and return avatar strip length."""
    state = driver.eval_js(JS_CHECK_ROLE_DETAIL)
    if state and state.get("ready"):
        return int(state["count"])

    driver.eval_js(JS_OPEN_ROLE_DETAIL)
    for _ in range(20):
        time.sleep(0.4)
        state = driver.eval_js(JS_CHECK_ROLE_DETAIL)
        if state and state.get("ready"):
            return int(state["count"])

    # Fallback: navigate directly to all-roles list and open first avatar
    all_url = (
        f"https://act.hoyolab.com/app/community-game-records-sea/index.html?gid=2"
        f"#/ys/role/all?role_id={uid}&server={server}"
    )
    driver.navigate(all_url)
    for _ in range(15):
        time.sleep(0.5)
        if driver.eval_js(JS_OPEN_ROLE_DETAIL):
            break
    for _ in range(20):
        time.sleep(0.4)
        state = driver.eval_js(JS_CHECK_ROLE_DETAIL)
        if state and state.get("ready"):
            return int(state["count"])

    raise RuntimeError("Không mở được màn hình chi tiết nhân vật (RoleDetail) trên HoYoLAB.")


def crawl_all_characters(driver: Any, total: int) -> tuple[dict[str, Any], dict[str, Any] | None]:
    """Iterate through every character in RoleDetail strip and capture full stats/artifacts."""
    chars_by_id: dict[str, Any] = {}
    prop_map: dict[str, Any] | None = None
    prev_id: str | None = None

    for idx in range(total):
        status = driver.eval_js(JS_CLICK_AVATAR_TMPL.format(idx=idx))
        if status != "OK":
            raise RuntimeError(f"Failed clicking avatar index {idx}: {status}")

        for _ in range(25):
            time.sleep(0.25)
            obj = driver.eval_js(JS_READ_ACTIVE_CHAR)
            if not obj or not obj.get("item"):
                continue
            cid = str(obj["item"]["base"]["id"])
            if idx == 0 or cid != prev_id or cid not in chars_by_id:
                chars_by_id[cid] = obj["item"]
                prev_id = cid
                if not prop_map and obj.get("property_map"):
                    prop_map = obj["property_map"]
                print(f"[{idx + 1}/{total}] {obj['item']['base']['name']}")
                break

    return chars_by_id, prop_map


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Crawl HoYoLAB Genshin Battle Chronicle (Windows Chrome CDP & macOS AppleScript)."
    )
    parser.add_argument("--uid", default="802472241", help="Genshin Impact UID (default: 802472241)")
    parser.add_argument("--server", default="os_asia", help="Server region (default: os_asia)")
    parser.add_argument(
        "--backend",
        choices=("auto", "cdp", "applescript"),
        default="auto",
        help="Browser control backend (default: auto -> cdp on Windows/Linux, applescript on macOS)",
    )
    parser.add_argument(
        "--cdp-url",
        default=None,
        help="Attach to an existing Chrome remote debugging endpoint (e.g. http://127.0.0.1:9222)",
    )
    parser.add_argument(
        "--chrome-path",
        type=Path,
        default=None,
        help="Custom Chrome/Edge executable path when launching a dedicated CDP browser",
    )
    parser.add_argument(
        "--user-data-dir",
        type=Path,
        default=None,
        help="Persistent Chrome profile directory for CDP login session (default: OS local app data)",
    )
    parser.add_argument("--profile-dir", default="Default", help="macOS AppleScript Chrome profile (default: Default)")
    parser.add_argument("--login-timeout", type=int, default=300, help="Seconds to wait for login (default: 300)")
    parser.add_argument(
        "--out",
        type=Path,
        default=None,
        help="Output dashboard JSON path (default: <repo>/data/genshin_uid_<uid>_data.json)",
    )
    parser.add_argument("--raw-out", type=Path, default=None, help="Optional path to also save raw crawl JSON")
    parser.add_argument("--raw-only", action="store_true", help="Write raw crawl JSON without dashboard transform")
    parser.add_argument(
        "--check-cdp",
        action="store_true",
        help="Smoke-test Windows/cross-platform Chrome CDP connectivity on about:blank and exit",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    backend = args.backend
    if backend == "auto":
        backend = "applescript" if sys.platform == "darwin" and not args.cdp_url else "cdp"

    if args.check_cdp:
        with CdpBrowserDriver(
            start_url="about:blank",
            cdp_url=args.cdp_url,
            chrome_path=args.chrome_path,
            user_data_dir=args.user_data_dir,
        ) as driver:
            val = driver.eval_js("return { ok: (1 + 1) === 2, ua: navigator.userAgent };")
            if not val or not val.get("ok"):
                raise RuntimeError(f"CDP smoke check failed: {val}")
            print(f"CDP_CHECK_OK: ua={val.get('ua')}")
        return

    base_url = (
        f"https://act.hoyolab.com/app/community-game-records-sea/index.html?gid=2"
        f"#/ys?role_id={args.uid}&server={args.server}"
    )

    if backend == "applescript":
        driver_ctx: Any = AppleScriptBrowserDriver(start_url=base_url, profile_dir=args.profile_dir)
    else:
        driver_ctx = CdpBrowserDriver(
            start_url=base_url,
            cdp_url=args.cdp_url,
            chrome_path=args.chrome_path,
            user_data_dir=args.user_data_dir,
        )

    with driver_ctx as driver:
        overview = wait_for_overview(driver, timeout=args.login_timeout)
        challenge = scrape_challenge(driver, uid=args.uid, server=args.server, base_url=base_url)
        total = ensure_role_detail_mounted(driver, uid=args.uid, server=args.server)
        chars_by_id, prop_map = crawl_all_characters(driver, total=total)

    raw_bundle = {
        "overview": overview,
        "property_map": prop_map,
        "characters_by_id": chars_by_id,
        "challenge": challenge,
    }

    out_path = args.out or (REPO_ROOT / "data" / f"genshin_uid_{args.uid}_data.json")
    if args.raw_out:
        args.raw_out.parent.mkdir(parents=True, exist_ok=True)
        args.raw_out.write_text(json.dumps(raw_bundle, ensure_ascii=False, indent=2), encoding="utf-8")
        print(f"Saved raw bundle ({len(chars_by_id)} chars) to {args.raw_out}")

    if args.raw_only:
        if not args.raw_out:
            out_path.parent.mkdir(parents=True, exist_ok=True)
            out_path.write_text(json.dumps(raw_bundle, ensure_ascii=False, indent=2), encoding="utf-8")
            print(f"Saved raw bundle ({len(chars_by_id)} chars) to {out_path}")
        return

    existing_master: dict[str, Any] | None = None
    if out_path.is_file():
        existing_master = json.loads(out_path.read_text(encoding="utf-8"))

    master = build_master_json(
        raw_bundle=raw_bundle,
        uid=args.uid,
        server=args.server,
        existing_master=existing_master,
    )
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(master, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Saved {master['characters_count']} characters to {out_path}")


if __name__ == "__main__":
    main()
