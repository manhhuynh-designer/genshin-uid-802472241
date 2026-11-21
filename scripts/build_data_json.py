import json
from collections import Counter

with open("/Users/huynhducmanh/.gemini/antigravity/brain/0e512e4a-880d-47af-9caa-aacd2664d910/scratch/overview_data.json") as f:
    ov = json.load(f)
with open("/Users/huynhducmanh/.gemini/antigravity/brain/0e512e4a-880d-47af-9caa-aacd2664d910/scratch/characters_full.json") as f:
    cf = json.load(f)
with open("/Users/huynhducmanh/.gemini/antigravity/brain/0e512e4a-880d-47af-9caa-aacd2664d910/scratch/challenge.json") as f:
    ch = json.load(f)

pd = ov["pageData"]
prop_map = cf["property_map"]

# Map icon filename & avatar_id -> name
id_to_name = {}
icon_to_name = {}
for a in pd["avatars"]:
    id_to_name[a["id"]] = a["name"]
    icon_to_name[a["image"].split("/")[-1].split("?")[0]] = a["name"]
for cid, c in cf["characters_by_id"].items():
    b = c["base"]
    id_to_name[b["id"]] = b["name"]
    if b.get("icon"):
        icon_to_name[b["icon"].split("/")[-1].split("?")[0]] = b["name"]

def prop_name(ptype):
    return prop_map.get(str(ptype), {}).get("filter_name") or prop_map.get(str(ptype), {}).get("name") or str(ptype)

# Build clean character records sorted by level desc, rarity desc, id asc
chars = []
for cid, c in cf["characters_by_id"].items():
    b = c["base"]
    w = c.get("weapon") or {}
    props = {}
    for p in c.get("selected_properties", []):
        props[prop_name(p["property_type"])] = {
            "base": p.get("base", ""),
            "add": p.get("add", ""),
            "final": p.get("final", "")
        }
    active_skills = [s for s in c.get("skills", []) if s.get("skill_type") == 1]
    relics = []
    set_counts = Counter()
    for r in c.get("relics", []):
        sname = (r.get("set") or {}).get("name", "")
        if sname:
            set_counts[sname] += 1
        relics.append({
            "slot": r.get("pos_name"),
            "name": r.get("name"),
            "set": sname,
            "rarity": r.get("rarity"),
            "level": r.get("level"),
            "main_stat": {
                "name": prop_name((r.get("main_property") or {}).get("property_type")),
                "value": (r.get("main_property") or {}).get("value")
            },
            "substats": [
                {
                    "name": prop_name(sp.get("property_type")),
                    "value": sp.get("value"),
                    "rolls": sp.get("times", 0)
                }
                for sp in r.get("sub_property_list", [])
            ]
        })
    set_summary = ", ".join(f"{cnt}pc {name}" for name, cnt in set_counts.most_common())
    chars.append({
        "id": b["id"],
        "name": b["name"],
        "element": b["element"],
        "rarity": 5 if b["rarity"] in (5, 105) else b["rarity"],
        "rarity_raw": b["rarity"],
        "level": b["level"],
        "constellation": b["actived_constellation_num"],
        "friendship": b["fetter"],
        "talents": [f"{s['name']}: {s['level']}" for s in active_skills],
        "talent_levels": "/".join(str(s["level"]) for s in active_skills[:3]),
        "weapon": {
            "name": w.get("name"),
            "rarity": w.get("rarity"),
            "level": w.get("level"),
            "refinement": w.get("affix_level"),
            "base_atk": (w.get("main_property") or {}).get("final"),
            "substat_name": prop_name((w.get("sub_property") or {}).get("property_type")) if w.get("sub_property") else None,
            "substat_val": (w.get("sub_property") or {}).get("final") if w.get("sub_property") else None,
        },
        "stats": props,
        "artifact_sets": set_summary,
        "artifacts": relics,
    })

chars.sort(key=lambda x: (-x["level"], -x["rarity"], -x["constellation"], x["name"]))

# Resolve Abyss
abyss_clean = []
for ab in ov.get("abyssData", []):
    d = ab.get("data", {})
    floors = []
    for fl in d.get("floors", []):
        chambers = []
        for lv in fl.get("levels", []):
            battles = []
            for bt in lv.get("battles", []):
                battles.append({
                    "half": bt.get("index"),
                    "timestamp": bt.get("timestamp"),
                    "team": [
                        {
                            "name": id_to_name.get(av["id"]) or icon_to_name.get(av.get("icon", "").split("/")[-1].split("?")[0], str(av["id"])),
                            "level": av.get("level"),
                            "rarity": av.get("rarity")
                        }
                        for av in bt.get("avatars", [])
                    ]
                })
            chambers.append({
                "chamber": lv.get("index"),
                "stars": f"{lv.get('star')}/{lv.get('max_star')}",
                "battles": battles
            })
        floors.append({
            "floor": fl.get("index"),
            "stars": f"{fl.get('star')}/{fl.get('max_star')}",
            "chambers": chambers
        })
    def resolve_rank(arr):
        return [{"name": id_to_name.get(x["avatar_id"], str(x["avatar_id"])), "value": x["value"]} for x in (arr or [])]
    abyss_clean.append({
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
        "floors": floors
    })

ch_chars = [icon_to_name[u.split("/")[-1].split("?")[0]] for u in ch["current"]["imgs"] if u.split("/")[-1].split("?")[0] in icon_to_name]
stygian = {
    "cycle": "2026.11.11-2026.12.15",
    "difficulty": "III",
    "mode": "Single Player",
    "best_time_sec": 335,
    "bosses": [
        {"name": "Kẻ Neo Sóng: Thường", "time_sec": 133, "max_single_hit": 127964, "total_damage": 1378423, "team": ch_chars[0:4]},
        {"name": "Hoàng Đế Thép Lửa: Thường", "time_sec": 101, "max_single_hit": 34831, "total_damage": 542014, "team": ch_chars[4:8]},
        {"name": "Thằn Lằn Ánh Trăng Bức Xạ: Thường", "time_sec": 101, "max_single_hit": 42517, "total_damage": 519894, "team": ch_chars[8:12]},
    ]
}

master = {
    "crawled_at": "2026-11-20T10:59:00+07:00",
    "account": {
        "uid": "802472241",
        "nickname": pd["role"]["nickname"],
        "adventure_rank": pd["role"]["level"],
        "server": "Asia Server (os_asia)",
        "stats": pd["stats"]
    },
    "world_explorations": pd["world_explorations"],
    "serenitea_pot": pd["homes"],
    "tcg": ov.get("tcgData"),
    "spiral_abyss": abyss_clean,
    "stygian_onslaught": stygian,
    "imaginarium_theater": pd["stats"].get("role_combat"),
    "characters_count": len(chars),
    "characters": chars
}

out_json = "/Users/huynhducmanh/.gemini/antigravity/brain/0e512e4a-880d-47af-9caa-aacd2664d910/scratch/genshin_uid_802472241_data.json"
with open(out_json, "w", encoding="utf-8") as f:
    json.dump(master, f, ensure_ascii=False, indent=2)

print("Wrote:", out_json)
print("Abyss 0 max_floor:", abyss_clean[0]["max_floor"], "stars:", abyss_clean[0]["total_star"], "most_played:", abyss_clean[0]["most_played"])
if len(abyss_clean) > 1:
    print("Abyss 1 max_floor:", abyss_clean[1]["max_floor"], "stars:", abyss_clean[1]["total_star"])
print("Stygian bosses:", json.dumps(stygian["bosses"], ensure_ascii=False))