# Genshin Impact Battle Chronicle — `UID 802472241` (`Mahyh`, Asia)

Static dashboard, structured JSON dataset, analysis notes, and macOS Chrome crawler for HoYoLAB Battle Chronicle data (crawled **2026-11-20**, Version **7.2**).

- **GitHub Pages Dashboard:** `https://manhhuynh.work/genshin-uid-802472241/`
- **Raw Dataset:** [`data/genshin_uid_802472241_data.json`](./data/genshin_uid_802472241_data.json) (all 70 characters, weapons, refinements, talents, stats, artifacts + substats & roll counts, Spiral Abyss, Stygian Onslaught, World Exploration, Serenitea Pot, TCG)
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
    ├── crawl_hoyolab.py          # Reusable macOS Chrome AppleScript crawler
    └── export_genshin_wishes.py  # Windows local webCaches wish history exporter
```

## Re-crawling Data (macOS Chrome)

Enable `View > Developer > Allow JavaScript from Apple Events` in Google Chrome, make sure HoYoLAB is signed in on your Chrome profile, and run:

```bash
python3 scripts/crawl_hoyolab.py --uid 802472241 --server os_asia --profile-dir Default --out data/genshin_uid_802472241_data.json
```

## Re-exporting Wish History (Windows)

Open Wish History in Genshin Impact once so the local `webCaches` token is fresh, then run:

```powershell
python scripts/export_genshin_wishes.py
```
