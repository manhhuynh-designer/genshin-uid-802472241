# Genshin Impact Battle Chronicle — `UID 802472241` (`Mahyh`, Asia)

Static dashboard, structured JSON dataset, analysis notes, and crawlers/exporters for HoYoLAB Battle Chronicle & wish history data (crawled **2026-11-28**, Version **7.2**).

- **GitHub Pages Dashboard:** `https://manhhuynh.work/genshin-uid-802472241/`
- **Raw Dataset:** [`data/genshin_uid_802472241_data.json`](./data/genshin_uid_802472241_data.json) (all 74 characters, weapons, refinements, talents, stats, artifacts + substats & roll counts, Spiral Abyss, Stygian Onslaught, World Exploration, Serenitea Pot, TCG)
- **Wish History:** [`data/wish_history/`](./data/wish_history/) (151 exported pulls in XLSX, UIGF v3.0 JSON, and CSV)
- **Advice & Farming Plan:** [`docs/conversation-notes.md`](./docs/conversation-notes.md)

## Structure

```text
genshin-uid-802472241/
├── index.html                    # Interactive GitHub Pages viewer
├── assets/
│   ├── styles.css
│   └── app.js
├── data/
│   ├── genshin_uid_802472241_data.json
│   └── wish_history/             # Exported wish/roll history (XLSX, UIGF v3.0 JSON, CSV)
├── docs/
│   └── conversation-notes.md     # Abyss, Theater, 7.2 meta & farming schedule
└── scripts/
    ├── build_data_json.py        # Cross-platform raw crawl -> dashboard JSON builder
    ├── crawl_hoyolab.py          # Cross-platform HoYoLAB crawler (Windows Chrome CDP & macOS)
    └── export_genshin_wishes.py  # Windows local webCaches wish history exporter
```

## Re-crawling Data (Windows — Chrome CDP)

Run one command to launch an isolated persistent Chrome profile (sign in to HoYoLAB on first run; subsequent runs reuse the session automatically) and update `data/genshin_uid_802472241_data.json`:

```powershell
python scripts/crawl_hoyolab.py
```

Or attach to an already-running Chrome remote debugging session without touching other tabs:

```powershell
python scripts/crawl_hoyolab.py --cdp-url http://127.0.0.1:9222
```

## Re-crawling Data (macOS — Chrome AppleScript / CDP)

Enable `View > Developer > Allow JavaScript from Apple Events` in Google Chrome, make sure HoYoLAB is signed in on your Chrome profile, and run:

```bash
python3 scripts/crawl_hoyolab.py --uid 802472241 --server os_asia --profile-dir Default --out data/genshin_uid_802472241_data.json
```

## Re-exporting Wish History (Windows)

Open Wish History in Genshin Impact once so the local `webCaches` token is fresh, then run:

```powershell
python scripts/export_genshin_wishes.py
```
