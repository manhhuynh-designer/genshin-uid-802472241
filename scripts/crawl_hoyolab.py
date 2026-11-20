#!/usr/bin/env python3
"""Crawl HoYoLAB Genshin Impact Battle Chronicle data via macOS Chrome AppleScript.

Prerequisites (macOS):
- Google Chrome signed in to HoYoLAB on the target profile (default: "Default")
- Chrome menu: View > Developer > Allow JavaScript from Apple Events enabled
"""

import argparse
import base64
import json
import os
import subprocess
import time
from collections import Counter

DEFAULT_CHROME_APP = os.path.expanduser("~/Applications/Google Chrome.app")
if not os.path.exists(DEFAULT_CHROME_APP):
    DEFAULT_CHROME_APP = "/Applications/Google Chrome.app"


def run_js(js_code: str, app: str = DEFAULT_CHROME_APP, url_substr: str = "act.hoyolab.com") -> str:
    b64 = base64.b64encode(js_code.encode("utf-8")).decode("ascii")
    wrapper = (
        '(function(){'
        'var b=atob("' + b64 + '");'
        'var bytes=new Uint8Array(b.length);'
        'for(var i=0;i<b.length;i++)bytes[i]=b.charCodeAt(i);'
        'var code=new TextDecoder("utf-8").decode(bytes);'
        'return (0,eval)("(function(){"+code+"})()");'
        '})()'
    )
    applescript = f'''
tell application "{app}"
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


def run_js_main(js_code: str, app: str = DEFAULT_CHROME_APP, url_substr: str = "act.hoyolab.com") -> str:
    b64 = base64.b64encode(js_code.encode("utf-8")).decode("ascii")
    wrapper = (
        'var resAttr="data-mw-"+Math.random().toString(36).slice(2,8);'
        'var s=document.createElement("script");'
        's.textContent="(function(){try{'
        'var b=atob(\\"' + b64 + '\\");'
        'var bytes=new Uint8Array(b.length);'
        'for(var i=0;i<b.length;i++)bytes[i]=b.charCodeAt(i);'
        'var code=new TextDecoder(\\"utf-8\\").decode(bytes);'
        'var val=(0,eval)(\\"(function(){\\"+code+\\"})()\\");'
        'document.body.setAttribute(\\""+resAttr+"\\",JSON.stringify(val));'
        '}catch(e){'
        'document.body.setAttribute(\\""+resAttr+"\\",JSON.stringify({__err:e.message}));'
        '}})()";'
        'document.head.appendChild(s);'
        'var out=document.body.getAttribute(resAttr);'
        's.remove();document.body.removeAttribute(resAttr);'
        'return out;'
    )
    return run_js(wrapper, app=app, url_substr=url_substr)


def open_url(url: str, profile_dir: str = "Default", app: str = DEFAULT_CHROME_APP) -> None:
    subprocess.run(
        ["/usr/bin/open", "-a", app, "--args", f"--profile-directory={profile_dir}", url],
        check=True,
    )


def main() -> None:
    parser = argparse.ArgumentParser(description="Crawl HoYoLAB Genshin Battle Chronicle on macOS Chrome.")
    parser.add_argument("--uid", required=True, help="Genshin Impact UID (e.g. 802472241)")
    parser.add_argument("--server", default="os_asia", help="Server region (default: os_asia)")
    parser.add_argument("--profile-dir", default="Default", help="Chrome profile directory (default: Default)")
    parser.add_argument("--out", default="data/genshin_data.json", help="Output JSON path")
    args = parser.parse_args()

    url = f"https://act.hoyolab.com/app/community-game-records-sea/index.html?gid=2#/ys?role_id={args.uid}&server={args.server}"
    open_url(url, profile_dir=args.profile_dir)
    time.sleep(3.0)

    overview = json.loads(run_js_main("""
    var root = document.querySelector(".pc-root-layout").__vue__;
    function findComp(node, depth) {
        if (!node || depth > 6) return null;
        if (node.$data && node.$data.pageData) return node;
        for (var i = 0; i < (node.$children || []).length; i++) {
            var found = findComp(node.$children[i], depth + 1);
            if (found) return found;
        }
        return null;
    }
    var comp = findComp(root, 0);
    return {
        pageData: comp ? comp.pageData : null,
        abyssData: comp ? comp.abyssData : null,
        roleCombatData: comp ? comp.roleCombatData : null
    };
    """))

    total = int(run_js_main("""
    var root = document.querySelector(".pc-root-layout").__vue__;
    function findByTag(node, tag, depth) {
        if (!node || depth > 7) return null;
        if (node.$options && node.$options._componentTag === tag) return node;
        for (var i = 0; i < (node.$children || []).length; i++) {
            var found = findByTag(node.$children[i], tag, depth + 1);
            if (found) return found;
        }
        return null;
    }
    return findByTag(root, "RoleDetail", 0).$children[2].$el.querySelectorAll(".tw-relative.avatar").length;
    """))

    chars_by_id = {}
    prop_map = None
    prev_id = None
    for idx in range(total):
        run_js_main(f"""
        var root = document.querySelector(".pc-root-layout").__vue__;
        function findByTag(node, tag, depth) {{
            if (!node || depth > 7) return null;
            if (node.$options && node.$options._componentTag === tag) return node;
            for (var i = 0; i < (node.$children || []).length; i++) {{
                var found = findByTag(node.$children[i], tag, depth + 1);
                if (found) return found;
            }}
            return null;
        }}
        var avatars = findByTag(root, "RoleDetail", 0).$children[2].$el.querySelectorAll(".tw-relative.avatar");
        avatars[{idx}].scrollIntoView({{inline: "center", block: "nearest"}});
        avatars[{idx}].click();
        return "OK";
        """)
        for _ in range(25):
            time.sleep(0.25)
            raw = run_js_main("""
            var root = document.querySelector(".pc-root-layout").__vue__;
            function findByTag(node, tag, depth) {
                if (!node || depth > 7) return null;
                if (node.$options && node.$options._componentTag === tag) return node;
                for (var i = 0; i < (node.$children || []).length; i++) {
                    var found = findByTag(node.$children[i], tag, depth + 1);
                    if (found) return found;
                }
                return null;
            }
            var d = findByTag(root, "RoleDetail", 0).$children[3].data;
            if (!d || !d.list || !d.list[0]) return null;
            return { item: d.list[0], property_map: d.property_map };
            """)
            if not raw or raw == "null":
                continue
            obj = json.loads(raw)
            cid = str(obj["item"]["base"]["id"])
            if idx == 0 or cid != prev_id or cid not in chars_by_id:
                chars_by_id[cid] = obj["item"]
                prev_id = cid
                if not prop_map:
                    prop_map = obj.get("property_map")
                print(f"[{idx+1}/{total}] {obj['item']['base']['name']}")
                break

    os.makedirs(os.path.dirname(args.out) or ".", exist_ok=True)
    with open(args.out, "w", encoding="utf-8") as f:
        json.dump(
            {
                "overview": overview,
                "property_map": prop_map,
                "characters_by_id": chars_by_id,
            },
            f,
            ensure_ascii=False,
            indent=2,
        )
    print(f"Saved {len(chars_by_id)} characters to {args.out}")


if __name__ == "__main__":
    main()
