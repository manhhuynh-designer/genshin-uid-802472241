const DATA_URL = "./data/genshin_uid_802472241_data.json?v=17";
const STORAGE_KEY = "genshin_uid_802472241_done_v4";

const SET_META = {
  mh: { name: "4pc Thợ Săn Marechaussee", short: "4pc Thợ Săn", where: "Kết Cục Của Tội Lỗi (Fontaine)", icon: "https://enka.network/ui/UI_RelicIcon_15031_4.png" },
  gt: { name: "4pc Đoàn Kịch Hoàng Kim", short: "4pc Đoàn Kịch", where: "Kết Cục Của Tội Lỗi (Fontaine)", icon: "https://enka.network/ui/UI_RelicIcon_15032_4.png" },
  nw: { name: "4pc Tiếng Đêm Trong Rừng Vang", short: "4pc Tiếng Đêm", where: "Thành Cổ Rơi Vào Khúc Nhạc (Fontaine) / Tráp Thánh", icon: "https://enka.network/ui/UI_RelicIcon_15034_4.png" },
  esf: { name: "4pc Dấu Ấn Ngăn Cách", short: "4pc Dấu Ấn", where: "Sân Vườn Momiji (Inazuma) / Tráp Thánh", icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/16879d66028f85addecf5a7208f6bffb.png" },
  gd: { name: "4pc Giấc Mộng Hoàng Kim", short: "4pc Giấc Mộng", where: "Tháp Hôn Thần (Sumeru) / Tráp Thánh", icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/857d990ee0b5c27e926f5e3fc642f8ca.png" },
  dw: { name: "4pc Ký Ức Rừng Sâu", short: "4pc Rừng Sâu", where: "Tháp Hôn Thần (Sumeru) / Tráp Thánh", icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/6e1a599dabaefe12d191547469d753cd.png" },
  no: { name: "4pc Nghi Thức Tông Thất Cổ", short: "4pc Tông Thất", where: "Tráp Thánh (Strongbox) / Liyue", icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/bd80c45d24f484036927eda40339f730.png" },
  vv: { name: "4pc Bóng Hình Màu Xanh", short: "4pc Bóng Hình", where: "Vương Quốc Vô Tận (Mondstadt) / Tráp Thánh", icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/79119f6a441fc37f39b08f225d63034b.png" },
  glad: { name: "4pc Giác Đấu Sĩ", short: "4pc Giác Đấu", where: "Tráp Thánh / Boss Thế Giới", icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/f5a1fb5232b2985617002eac1bfea8e6.png" },
  silken: { name: "4pc Khúc Ca Trăng Lụa", short: "4pc Khúc Ca", where: "Frostladen Machinery (Nod-Krai)", icon: "https://enka.network/ui/UI_RelicIcon_15042_4.png" },
  dids: { name: "4pc Ảo Tưởng Vụn Vỡ (hoặc Giấc Mộng)", short: "4pc Ảo Tưởng", where: "Thorny Crown (Mondstadt) / Tráp Thánh", icon: "https://enka.network/ui/UI_RelicIcon_15046_4.png" },
  furnace: { name: "4pc Trái Tim Lửa Nung (tạm Tông Thất)", short: "4pc Lửa Nung", where: "Inverted Glacier (Snezhnaya) / Tráp Thánh", icon: "https://enka.network/ui/UI_RelicIcon_15048_4.png" },
  totm: { name: "4pc Thiên Nham Vững Chắc", short: "4pc Thiên Nham", where: "Kính Nham (Liyue) / Tráp Thánh", icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/e52f0d8928f3982864ecc8ea13165ebf.png" },
  hp2: { name: "2pc Thiên Nham + 2pc Vầng Sáng (HP%)", short: "2+2 HP%", where: "Tráp Thánh Thiên Nham / Bí cảnh Sumeru", icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/e52f0d8928f3982864ecc8ea13165ebf.png" },
};

// Unified per-character action dossier (synced with crawl 25/11/2026 — Furina Ống Đồng/35.6k HP, Mitya Lv.70, Aino Lv.80, Snezhnaya 7%)
const ACTIONS = [
  // Bucket 1: Do now in-game (0 Resin or quick swap / artifact mainstat fix)
  { id: "a_ning", bucket: "now", tag: "Nhà Hát", shortFix: "Nâng Ly Nham +20 · Đổi Nón CR%", name: "Ningguang", swapFrom: null, swapNote: "✓ Đã gắn Quyển Thiên Không R2 (2,501 ATK)", fixTitle: "Nâng Ly Nham (+0 → +20) & đổi Nón → CR%", fixSub: "CR đang 14.7% / 169.7% CD · Chỉnh xong sẵn sàng Nhà Hát Màn 8", setKey: null },
  { id: "a_beidou", bucket: "now", tag: "Nhà Hát", shortFix: "Tháo kiếm 1★ · Đủ 5 TDV (Cát ER)", name: "Beidou", swapFrom: "Xinyan", swapNote: "Hoặc Kiếm Vô Công 5★ từ Chongyun", fixTitle: "Bỏ kiếm 1★ & lắp đủ 5 món TDV (có Cát ER)", fixSub: "Đang mới 3 món TDV, 111% ER · Cần gấp trước hạn Nhà Hát 01/12", setKey: "esf" },
  { id: "a_fischl", bucket: "now", tag: "0 Nhựa", shortFix: "Đổi Nón STBK → Nón CR%", name: "Fischl", swapFrom: null, swapNote: "✓ Đã gắn Tuyệt Huyền R5 (224 EM · +48% ST Oz)", fixTitle: "Đổi Nón STBK → Nón CR% (đang 31.8% CR)", fixSub: "Giữ 2 Lôi 2 ATK tạm rồi farm dần 4pc Đoàn Kịch ở Fontaine", setKey: "gt" },
  { id: "a_chev", bucket: "now", tag: "0 Nhựa", shortFix: "Đổi 3 món HP% · Kéo Lv.80 (40k HP)", name: "Chevreuse", swapFrom: null, swapNote: "✓ Đã gắn Hắc Anh Thương R5 · HP tụt còn 21.6k (Cát ER +0)", fixTitle: "Đổi Cát ER +0, Ly Hỏa & Nón CR → Full HP% + lên Lv.80", fixSub: "Kéo từ 21.6k → mốc 40,000 HP để mở trọn +40% ATK Quá Tải", setKey: "no" },
  { id: "a_kuki", bucket: "now", tag: "0 Nhựa", shortFix: "Đổi 3 món EM · Kéo Lv.90 (900+ EM)", name: "Kuki Shinobu", swapFrom: null, swapNote: "✓ Đã gắn Thiết Phong Kích R3 (EM lên 483)", fixTitle: "Đổi Cát ATK / Ly HP / Nón CR → 3 món EM", fixSub: "Kéo từ 483 → ~900+ EM & nâng Lv.80 → 90 tối ưu Nở Rộ", setKey: "gd" },
  { id: "a_raiden", bucket: "now", tag: "Ổn định", shortFix: "Đã ổn · Đưa Kiếm Gỗ cho Bennett", name: "Raiden Shogun", swapFrom: null, swapNote: "✓ Đã đổi Nón CR% (69.9/132.4 · 258.9% ER · Clear Boss 1 trong 56s)", fixTitle: "Đã ổn định (tùy chọn giữ Trấn Đoạn Thảo R1)", fixSub: "Đổi Kiếm Gỗ cho Bennett từ Nilou để kéo thêm ATK trong Nộ", setKey: null },
  { id: "a_yae", bucket: "now", tag: "Ma Nữ ✓", shortFix: "Đổi Nón CR% (~75/204)", name: "Yae Miko", swapFrom: null, swapNote: "✓ Đã mở Ma Nữ (Edict of Cleansing) · Giữ Trấn Kagura R1 · 2,238 ATK · 51.0/252.2", fixTitle: "Đổi Nón STBK → Nón CR% (51/252 → ~75/204)", fixSub: "✓ Đã có trụ 24s, Q không phá trụ, +80%/200% ATK · Đổi Nón CR% ổn định CRIT rồi farm 4pc Ảo Tưởng chung Mitya", setKey: "dids" },
  { id: "a_keqing", bucket: "now", tag: "0 Nhựa", shortFix: "Trả Bàn Nham · Bến Tàu → Nilou", name: "Keqing", swapFrom: null, swapNote: "Bàn Nham Kết Lục R1 đã rảnh (Furina vừa tháo sang Ống Đồng) · Đang cầm Kiếm Bến Tàu Lv.60", fixTitle: "Lắp lại Bàn Nham Kết Lục R1 · Chuyển Kiếm Bến Tàu sang Nilou", fixSub: "CR Keqing nhảy ngay 26.0% → 70.1% / 231.4% CD (0 Nhựa)", setKey: null },
  { id: "a_nilou", bucket: "now", tag: "0 Nhựa", shortFix: "Đeo Bến Tàu 90 · Đổi 2+2 HP%", name: "Nilou", swapFrom: "Keqing", swapNote: "Nhận Kiếm Bến Tàu (HP%) từ Keqing · Chuyển Kiếm Gỗ Lv.90 sang Bennett", fixTitle: "Đổi sang Kiếm Bến Tàu Lv.90 (41.3% HP) · Đổi 2pc+2pc HP%", fixSub: "Đang 51.5k HP (4pc Giấc Mộng) → kéo lên 68k+ HP tối ưu trần Sum Suê 70k+", setKey: "hp2" },
  { id: "a_yelan", bucket: "now", tag: "Nâng VK", shortFix: "Nâng Cung Tây Phong Lv.70 → 90", name: "Yelan", swapFrom: null, swapNote: "✓ Đã gắn Cung Tây Phong R5 (ER lên 191.2%)", fixTitle: "Nâng Cung Tây Phong Lv.70 → Lv.90", fixSub: "68.9/152.6 · 28.8k HP đã đẹp · Lên 90 thêm ~11% ER là chốt", setKey: null },
  { id: "a_gorou", bucket: "now", tag: "Nhà Hát", shortFix: "Bỏ cung 1★ · Lắp cung Nạp + Ly", name: "Gorou", swapFrom: null, swapNote: "Đang cầm Cung Săn Bắn 1★ Lv.1", fixTitle: "Lắp cung Nạp tạm & thêm Ly (đang 4 món)", fixSub: "Đủ đồ dự bị slot Nham cho Nhà Hát Giả Tưởng 7.2", setKey: null },

  // Bucket 2: Farm in unlocked regions (Fontaine 64%, Nod-Krai 10%, Inazuma 100%, Sumeru 100%)
  { id: "a_furina", bucket: "farm", tag: "Fontaine", shortFix: "Đổi Răng Nanh R5 · Kéo Lv.90 & Q10", name: "Furina", swapFrom: "Bennett", swapNote: "✓ Đã có Ống Đồng Lv.50 R2 & Cát HP% +20 (35.6k HP · 41.6/180.6) → Nên đổi Răng Nanh R5 (+32% ST E)", fixTitle: "Đổi Răng Nanh R5 (Bennett) · Kéo Lv.90 & Q10 · Farm 4pc Đoàn Kịch", fixSub: "Răng Nanh R5 mạnh hơn Ống Đồng ~6–10% (151.7% ER với Cát HP%, gắn Cát ER nếu đi 1 Thủy)", setKey: "gt" },
  { id: "a_neuv", bucket: "farm", tag: "Fontaine", shortFix: "Farm 4pc Thợ Săn Marechaussee", name: "Neuvillette", swapFrom: null, swapNote: "Giữ Trấn Nghi Thức R1 · Tạm 4pc Trầm Luân (52.8/234.9 · Clear Boss 2 34s)", fixTitle: "Farm tiếp 4pc Thợ Săn Marechaussee (Fontaine)", fixSub: "Đã sửa CR từ 26% → 52.8% (+35.2% Crit) · Qua Thợ Săn nhảy lên ~88.8% CR", setKey: "mh" },
  { id: "a_chiori", bucket: "farm", tag: "Inazuma", shortFix: "Nâng E 1→8–9 · Ly Nham +20", name: "Chiori", swapFrom: null, swapNote: "✓ Đã đủ Cát DEF% (2,163 DEF · 60.2/71.0)", fixTitle: "Nâng E từ 1 → 8–9 · Nâng Ly Nham (+14 → +20)", fixSub: "Sách Ánh Sáng (Inazuma T4/T7) + tìm thêm dòng phụ STBK", setKey: "gt" },
  { id: "a_aino", bucket: "farm", tag: "Nod-Krai", shortFix: "Thiên phú 1/5/4 → 1/6/8 · Khúc Ca", name: "Aino", swapFrom: null, swapNote: "✓ Đã lên Lv.80 C1 · 1/5/4 · Đại Kiếm Tây Phong Lv.90 R5 (464 EM)", fixTitle: "Nâng Thiên phú 1/5/4 → 1/6/8 · Farm 4pc Khúc Ca Trăng Lụa", fixSub: "Boss Vịt Nắm Đấm + bí cảnh Nod-Krai (10%)", setKey: "silken" },
  { id: "a_jean", bucket: "farm", tag: "Tráp TDV", shortFix: "Ly ATK +20 · Ép 4pc Bóng Hình", name: "Jean", swapFrom: null, swapNote: "Đang cầm Tây Phong Kiếm R5 (215.4% ER) · PA A: nhận Ống Đồng để dư Tây Phong cho Layla/Qiqi", fixTitle: "Nâng Ly ATK% (+0 → +20) · Ép 4pc Bóng Hình · (PA A: đổi sang Ống Đồng)", fixSub: "Hoàn thiện bộ 4pc VV trừ 40% kháng & xoay Tây Phong R5 cho Layla (34.9k HP)", setKey: "vv" },
  { id: "a_venti", bucket: "farm", tag: "Cường hóa", shortFix: "Nâng 4 món TDV +0 → +20", name: "Venti", swapFrom: null, swapNote: "Giữ Trấn Tiếng Thở Dài Vô Tận R1 (196.6% ER)", fixTitle: "4 món TDV trên HoYoLAB vẫn ở +0", fixSub: "Nâng Lông/Cát EM/Ly Phong/Nón lên +20 (đã đủ 4pc Bóng Hình)", setKey: "vv" },
  { id: "a_navia", bucket: "farm", tag: "Ổn định", shortFix: "Đã chốt 80/180 · 4pc Tiếng Đêm sau", name: "Navia", swapFrom: null, swapNote: "✓ Đã chốt 80.0/180.1 · Vương miện E10/Q9 · Kiếm Li Cốt R1", fixTitle: "Tùy chọn: Farm dần 4pc Tiếng Đêm Trong Rừng Vang", fixSub: "Bộ 4pc Phiến Đá hiện tại đã rất khỏe (+29.2% DPS) · Ưu tiên sau Neuvillette", setKey: "nw" },

  // Bucket 3: Snezhnaya unlocked (7%, 10 Iceculus) — start farming!
  { id: "a_mitya", bucket: "later", tag: "Snezhnaya", shortFix: "Ly EM +20 · Kéo Lv.90 + Trấn 90", name: "Mitya", swapFrom: null, swapNote: "✓ Đã lên Lv.70 (2/3/4 · 67.2/188.5 · 516 EM) · Trấn Lv.50 · 2pc Đoàn Hát", fixTitle: "Nâng Ly EM +0 → +20 · Kéo Trấn & Mitya lên Lv.90", fixSub: "Farm 4pc Ảo Tưởng Vụn Vỡ chung cho Mitya & Yae (Ma Nữ) · Lõi Tinh-Siêu Dẫn Mitya + Yae + Rosaria/NLH Băng + Valeriy", setKey: "dids" },
  { id: "a_valeriy", bucket: "later", tag: "Snezhnaya", shortFix: "Rèn Nhạc Khúc · Khiên ATK% (Mitya)", name: "Valeriy", swapFrom: null, swapNote: "✓ Đã lên C3 · Rèn sẵn Nhạc Khúc Biển Sâu (ATK%)", fixTitle: "Khiên chống gián đoạn + Buff lõi Mitya + Yae (Ma Nữ) Tinh-Siêu Dẫn", fixSub: "Cát/Ly/Nón ATK% · Sách Charity chung Mitya (ưu tiên hơn Alyosha vì khiên giữ Trọng Kích Mitya)", setKey: "furnace" },
  { id: "a_alyosha", bucket: "later", tag: "Snezhnaya", shortFix: "Gắn Tây Phong · Buffer hồi máu", name: "Alyosha", swapFrom: null, swapNote: "Nhân vật mới (4★ Thương Lôi) · Hợp Thương Tây Phong", fixTitle: "Healer + Buff ATK thay Valeriy khi cần hồi máu (team Tinh-Siêu Dẫn)", fixSub: "Cát ER/ATK% · Ly ATK% · Nón ATK%/Trị Liệu · Buff ATK của Alyosha scale tốt vào +80%/200% ATK của Yae Ma Nữ", setKey: "no" },
];

const CHAR_GUIDES = {
  Ningguang: {
    mainStats: "Cát ATK% · Ly ST Nham · Nón CR%",
    targets: "Mục tiêu: ≥60% CR · Ly Nham Lv.20 · Giữ 2 Giác Đấu + 2 Phiến Đá",
    steps: [
      "Nâng ngay Ly Tăng ST Nguyên Tố Nham từ Lv.0 lên Lv.20.",
      "Đổi Nón STBK hiện tại sang Nón Tỷ Lệ Bạo Kích (hiện CR mới 14.7%).",
      "Giữ nguyên Quyển Thiên Không Lv.90 R2 (2,501 ATK) để sẵn sàng đi Nhà Hát Màn 8.",
    ],
  },
  Beidou: {
    mainStats: "Cát ER% · Ly ST Lôi · Nón CR%",
    targets: "Mục tiêu: 160–180% ER · 60% CR / 120% CD",
    steps: [
      "Tháo Kiếm Huấn Luyện 1★ Lv.1 — gắn Vua Biển Hàng Hiệu R5 (từ Xinyan) hoặc Kiếm Vô Công 5★ (từ Chongyun).",
      "Lắp đủ 5 món TDV (hiện mới đeo 3 món), ưu tiên bộ 4pc Dấu Ấn Ngăn Cách.",
      "Dùng Cát Hiệu Quả Nạp (ER) để kéo từ 111.0% lên 160–180% giúp xoay Nộ đều trong Nhà Hát.",
    ],
  },
  Fischl: {
    mainStats: "Cát ATK%/EM · Ly ST Lôi · Nón CR%",
    targets: "Mục tiêu: 60%+ CR / 130%+ CD · 4pc Đoàn Kịch Hoàng Kim",
    steps: [
      "Giữ nguyên Tuyệt Huyền Lv.90 R5 (+224 EM & +48% sát thương Oz).",
      "Đổi Nón STBK sang Nón Tỷ Lệ Bạo Kích (CR đang 31.8% quá thấp).",
      "Farm dần bộ 4pc Đoàn Kịch Hoàng Kim chung bí cảnh với Neuvillette tại Fontaine.",
    ],
  },
  Chevreuse: {
    mainStats: "Cát HP% · Ly HP% · Nón HP%",
    targets: "Mục tiêu: Chạm mốc 40,000 HP (+40% ATK toàn đội Quá Tải) · ~140% ER",
    steps: [
      "Giữ Hắc Anh Thương R5 (+46.9% HP).",
      "Cát HP% +20 cũ vừa chuyển sang Furina nên HP tụt còn 21.6k — thay Cát ER +0, Ly ST Hỏa & Nón CR sang 3 món HP%.",
      "Nâng Chevreuse lên Lv.80 và dùng dần 4pc Tông Thất Cổ (hoặc mix 2pc HP để chạm 40k HP trước).",
    ],
  },
  "Kuki Shinobu": {
    mainStats: "Cát EM · Ly EM · Nón EM",
    targets: "Mục tiêu: ~900+ EM · Nâng Lv.80 → Lv.90 (tăng thẳng ~30% sát thương Nở Rộ)",
    steps: [
      "Giữ Thiết Phong Kích Lv.90 R3 (+165 EM).",
      "Đổi toàn bộ Cát ATK% / Ly HP% / Nón CR% sang 3 món Tinh Thông Nguyên Tố (EM đang mới 483).",
      "Nâng cấp nhân vật lên Lv.90 vì sát thương Nở Rộ phụ thuộc trực tiếp vào Level và EM.",
    ],
  },
  "Raiden Shogun": {
    mainStats: "Cát ER% · Ly ST Lôi · Nón CR%",
    targets: "✓ Đã ổn định: 69.9% CR / 132.4% CD · 258.9% ER · Clear Ảo Cảnh Boss 1 trong 56s",
    steps: [
      "✓ Đã đổi sang Nón CR% 31.1% (bỏ Nón STBK dính 3 roll HP phẳng cũ).",
      "Giữ nguyên Trấn Đoạn Thảo Trường Đao R1 (258.9% ER ngoài trận rất đẹp).",
      "Tối ưu thêm buff từ đội: đổi Kiếm Gỗ (Base ATK 565) cho Bennett thay Răng Nanh Rỉ Sét (510).",
    ],
  },
  "Yae Miko": {
    mainStats: "Cát ATK% · Ly ATK% (Tinh-Siêu Dẫn) hoặc ST Lôi (Tăng Cường/Hyper) · Nón CR%",
    targets: "✓ Đã mở Ma Nữ (Edict of Cleansing) · Mục tiêu: ~75%+ CR / ~190–205% CD (90%+ CR với 4pc Ảo Tưởng) · ≥2,200 ATK",
    steps: [
      "✓ Đã hoàn thành quest Chỉ Dụ Của Ma Nữ (Edict of Cleansing): trụ Sesshou Sakura 14s → 24s, Q không phá trụ, kích Siêu Dẫn/Tinh-Siêu Dẫn cộng +80% ATK (CD 2.5s) và trong Polestar Field nổ thêm +200% ATK Sát Thương Tinh-Siêu Dẫn (CRIT được).",
      "Đổi Nón STBK 62.2% hiện tại sang Nón CR% (51.0/252.2 → ~75/204, +10.8% DPS trung bình) để ổn định bạo kích cho đòn +200% ATK.",
      "Đi đội Tinh-Siêu Dẫn với Mitya: farm chung 4pc Ảo Tưởng Vụn Vỡ (Thorny Crown — Mondstadt, +ATK%, +ST Tinh-Siêu Dẫn, +16% CR) & cân nhắc Ly ATK% (vì ST Tinh-Siêu Dẫn không ăn %ST Lôi hay 4pc Đoàn Kịch).",
      "Cung Mệnh sau nâng cấp (nếu roll thêm): C1 +50% DMG Lôi/Tinh-Siêu Dẫn toàn đội 10s; C2 +60/90/120/200 EM; C4 hồi 8 Năng lượng/5s & +100% Burst DMG; C6 +200% CRIT DMG Tinh-Siêu Dẫn.",
    ],
  },
  Keqing: {
    mainStats: "Cát ATK% · Ly ST Lôi · Nón STBK",
    targets: "Mục tiêu: Lắp lại Bàn Nham Kết Lục từ túi đồ (~70.1% CR / 231.4% CD) · Chuyển Kiếm Bến Tàu sang Nilou",
    steps: [
      "✓ Furina vừa tháo Bàn Nham Kết Lục sang Ống Đồng — lắp ngay Bàn Nham về Keqing để CR nhảy 26.0% → 70.1%.",
      "Chuyển Kiếm Bến Tàu Lv.60 (HP%) sang cho Nilou Sum Suê (thay vì giữ trên Keqing hoặc đưa Layla).",
      "Giữ bộ 2pc Giác Đấu + 2pc Như Sấm (chú ý đang đeo 1 Lông Vũ Lửa Trắng Xám + 1 Nón Như Sấm đã đủ 2+2).",
    ],
  },
  Furina: {
    mainStats: "Cát HP% (hoặc ER% khi đi 1 Thủy) · Ly HP% · Nón STBK/CR%",
    targets: "Mục tiêu: Đổi sang Răng Nanh Rỉ Sét R5 (Bennett) · Lv.90 · 4/9/10 · ~35k–40k HP · 4pc Đoàn Kịch Hoàng Kim",
    steps: [
      "✓ Đã lên 35,626 HP (Cát HP% +20) và đang cầm Ống Đồng Lv.50 R2 (41.6/180.6 · 135.6% ER).",
      "Đổi sang Răng Nanh Rỉ Sét Lv.90 R5 từ Bennett (+32% ST E & +12% CR E, mạnh hơn Ống Đồng R5 ~6–10% DPS; giữ Ống Đồng sang Jean/Lynette hoặc dự phòng khi cần nhiều ER).",
      "Kéo Furina Lv.80 → Lv.90, nâng Q (8 → 10) + E (8 → 9–10), và farm 4pc Đoàn Kịch Hoàng Kim chung bí cảnh với Neuvillette (hiện vẫn đeo 4pc Thiên Nham).",
    ],
  },
  Nilou: {
    mainStats: "Cát HP% · Ly HP% · Nón HP% (substat ưu tiên HP%, EM, ER%)",
    targets: "Mục tiêu: 68,000+ HP (hiện 51,545 HP) · Kiếm Bến Tàu Lv.90 (41.3% HP) · 2pc+2pc HP%",
    steps: [
      "Chuyển Kiếm Gỗ Lv.90 R2 sang Bennett (tăng Base ATK 510 → 565 cho Nộ).",
      "Nhận Kiếm Bến Tàu từ Keqing & nâng lên Lv.90 (+41.3% HP từ dòng phụ + cộng thêm EM khi kích nội tại).",
      "Đổi dần 4pc Giấc Mộng Hoàng Kim sang 2pc Thiên Nham + 2pc Vầng Sáng Vourukasha (HP%+HP%) để chạm mốc 68k+ HP.",
    ],
  },
  Yelan: {
    mainStats: "Cát HP% · Ly ST Thủy · Nón CR/CD",
    targets: "Mục tiêu: ~200% ER · Giữ 68.9/152.6 & 28.8k HP",
    steps: [
      "Nâng Cung Tây Phong R5 từ Lv.70 → Lv.90 để lấy thêm ~11% ER (hiện 191.2% ER).",
      "Giữ nguyên bộ 4pc Dấu Ấn Ngăn Cách và các chỉ số 68.9% CR / 152.6% CD hiện tại.",
    ],
  },
  Gorou: {
    mainStats: "Cát ER% · Ly phòng ngự/Nham · Nón CR% (nếu cầm Tây Phong)",
    targets: "Mục tiêu: ≥180% ER · Đủ 5 món TDV cho Nhà Hát",
    steps: [
      "Tháo Cung Săn Bắn 1★ Lv.1 — gắn cung Nạp bất kỳ (Cung Tây Phong / Cung Tế Lễ dư).",
      "Lắp thêm mảnh Ly (hiện mới 4 món TDV) để đủ bộ dự bị Nham cho Nhà Hát Giả Tưởng 7.2.",
    ],
  },
  Neuvillette: {
    mainStats: "Cát HP% · Ly HP% hoặc ST Thủy · Nón CR% (sau sang Thợ Săn dùng Nón CD%)",
    targets: "Mục tiêu: 55–64% CR trước buff (91–100% CR sau 4pc Thợ Săn) · 35k–40k HP",
    steps: [
      "Tạm giữ bộ 4pc Trái Tim Trầm Luân + Ly Thủy vừa đổi (52.8% CR / 234.9% CD, đã bỏ 3 món HP% cũ).",
      "Dồn Nhựa farm bí cảnh Kết Cục Của Tội Lỗi (Fontaine) lấy bộ 4pc Thợ Săn Marechaussee.",
      "Giữ lại Nón/Cát nhiều CR hoặc CD để chuyển qua Thợ Săn (với CR hiện tại lên Thợ Săn đạt ~88.8% CR).",
    ],
  },
  Chiori: {
    mainStats: "Cát DEF% · Ly ST Nham · Nón CR%/CD%",
    targets: "Mục tiêu: E Lv.8–9 · ≥60% CR / ≥120% CD · >2,000 DEF",
    steps: [
      "Cát DEF% đã chuẩn (2,163 DEF) và đang cầm Con Thoi Chu Sa R5 Lv.90.",
      "Ưu tiên nâng Thiên phú E (Búp Bê Tamoto) từ Lv.1 → Lv.8–9 bằng Sách Ánh Sáng (Inazuma T4/T7).",
      "Nâng Ly Nham từ +14 → +20 và tìm dần mảnh hoa/lông/nón có dòng phụ STBK (hiện mới 71.0% CD).",
    ],
  },
  Aino: {
    mainStats: "Cát ER% hoặc EM · Ly EM/Thủy · Nón EM/CR%",
    targets: "✓ Đã lên Lv.80 C1 · Mục tiêu: Thiên phú 1/6/8 (hiện 1/5/4) · ≥180% ER · 4pc Khúc Ca",
    steps: [
      "Đại Kiếm Tây Phong Lv.90 R5 (191.6% ER · 464 EM) đã rất mượt — cân nhắc rèn Chìa Khóa Vạn Năng khi dư Phôi.",
      "Đánh Boss Vịt Nắm Đấm (Nod-Krai 10%) nâng tiếp E/Q từ 5/4 → 6/8.",
      "Farm dần bộ 4pc Khúc Ca Trăng Lụa tại Nod-Krai (10%) để tối ưu buff Moonsign.",
    ],
  },
  Jean: {
    mainStats: "Cát ATK%/ER% · Ly ATK% · Nón CR% hoặc Tăng Trị Liệu",
    targets: "Mục tiêu: ≥180% ER · Đủ bộ 4pc Bóng Hình Màu Xanh · PA A: nhận Ống Đồng",
    steps: [
      "PA A (khuyên dùng): đổi sang Ống Đồng Fleuve Cendre (bấm E CD ngắn ăn hạt đúng 5s +32% ER) để giải phóng Tây Phong Kiếm R5 cho Layla (34.9k HP) hoặc Qiqi C4 Ma Nữ.",
      "Nâng Ly ATK% hiện đang Lv.0 lên Lv.20 để tăng lượng hồi máu của Nộ.",
      "Ép Tráp Thánh lấy đủ bộ 4pc Bóng Hình Màu Xanh (-40% kháng nguyên tố).",
    ],
  },
  Venti: {
    mainStats: "Cát EM · Ly EM hoặc ST Phong · Nón EM/Crit",
    targets: "Mục tiêu: Toàn bộ 5 món TDV +20 · Giữ 4pc Bóng Hình + Trấn R1",
    steps: [
      "4/5 mảnh TDV trên HoYoLAB (Lông, Cát EM, Ly Phong, Nón) hiện đang ở Lv.0.",
      "Kiểm tra & nâng đủ 4 món lên Lv.20 (nếu đã dùng Cát/Ly EM cho phản ứng Khuếch Tán càng tốt).",
    ],
  },
  Navia: {
    mainStats: "Cát ATK% · Ly ST Nham · Nón CR%",
    targets: "Đã chốt đẹp: 80.0% CR / 180.1% CD · 1,755 ATK · 6/10/9 (Vương miện E) · Kiếm Li Cốt R1",
    steps: [
      "Đã hoàn thành nâng cấp cốt lõi (+29.2% sát thương + vừa vương miện E Lv.10 & Q Lv.9).",
      "Bước tùy chọn dài hạn: farm thêm 4pc Tiếng Đêm Trong Rừng Vang sau khi xong bộ Thợ Săn cho Neuvillette.",
    ],
  },
  Mitya: {
    mainStats: "Cát EM · Ly EM hoặc ST Lôi · Nón CR/CD",
    targets: "Mục tiêu: Lv.90 (✓ vừa lên Lv.70 · 2/3/4 · 67.2/188.5 · 516 EM) · Nâng Trấn Lv.90 · Đi cặp Yae (Ma Nữ) + Valeriy C3",
    steps: [
      "✓ Đã kéo Mitya Lv.60 → Lv.70 (2/3/4) & Trấn Lv.20 → Lv.50 — nâng nốt Ly EM (Niềm Kiêu Hãnh Băng Giá) từ Lv.0 → Lv.20.",
      "Kéo tiếp Trấn 5★ Sắc Lệnh Tinh Tú Lv.50 → Lv.90 và Mitya Lv.70 → Lv.90 kèm thiên phú (sách Charity tại Snezhnaya 7%).",
      "Farm chung bộ 4pc Ảo Tưởng Vụn Vỡ cho cả Mitya lẫn Yae Miko (Ma Nữ); ghép cùng Rosaria C6 / NLH Băng (sau nâng lên Odette) & Valeriy C3.",
    ],
  },
  Valeriy: {
    mainStats: "Cát ATK% · Ly ATK% · Nón ATK%",
    targets: "Đã lên C3 · Mục tiêu: Rèn Nhạc Khúc Biển Sâu · Sách Charity (Snezhnaya) · Khiên cho Mitya + Yae",
    steps: [
      "Tháo Vô Phong Kiếm 1★ — rèn Nhạc Khúc Biển Sâu (Fontaine) vì khiên & buff quill của Valeriy scale thuần ATK.",
      "Farm chung sách Charity tại Snezhnaya cùng Mitya, giữ slot bền vững cho lõi Mitya + Yae (Ma Nữ) thay vì kẹp trùng Alyosha.",
      "Lắp 3 món chính ATK% trên bộ 4pc Trái Tim Lửa Nung (hoặc tạm 4pc Tông Thất Cổ).",
    ],
  },
  Alyosha: {
    mainStats: "Cát ER%/ATK% · Ly ATK% · Nón ATK%/Trị Liệu (hoặc CR% nếu Tây Phong)",
    targets: "Nhân vật mới 4★ Lôi · Ưu tiên E > Q · ~180%+ ER · Slot hồi máu thay Valeriy",
    steps: [
      "Tháo Thương Tân Thủ 1★ — gắn Thương Tây Phong (hoặc rèn Song of the Vigil tại Snezhnaya).",
      "Ưu tiên nâng Thiên phú E → Q; trùng slot hỗ trợ với Valeriy nhưng khi cần hồi máu, buff ATK của Alyosha scale cực hợp đòn +80%/200% ATK của Yae Ma Nữ.",
      "Lắp bộ 4pc Nghi Thức Tông Thất Cổ (hoặc Heart of the Furnace nếu team đã có Tông Thất).",
    ],
  },
};

const SURPLUS_WEAPONS = [
  {
    id: "s_widsith",
    from: null,
    fromLabel: "Trong túi đồ",
    customWeapon: { name: "Chương Nhạc Lang Thang", rarity: 4, level: 90, refinement: 5, substat_name: "STBK", substat_val: "55.1%", icon: "https://gi.yatta.moe/assets/UI/UI_EquipIcon_Catalyst_Troupe.png" },
    to: "Mona",
    shortAction: "Lắp Mona Nuke Nộ (trả lại Heizou)",
    action: "Gắn cho Mona Nuke Nộ (hoặc trả lại Heizou)",
    plan: "Ningguang đã cầm Quyển Thiên Không R2 → Chương Nhạc R5 đang rảnh, lắp Mona đẩy lên 53.2/204.6 (Heizou hiện đang cầm sách 1★).",
  },
  {
    id: "s_fish",
    from: "Xinyan",
    to: "Beidou",
    shortAction: "Đưa Beidou thay kiếm 1★ (Nhà Hát)",
    action: "Chuyển từ Xinyan → Beidou Lv.80 C6",
    plan: "Beidou đang cầm kiếm 1★ Lv.1 → nhận Vua Biển R5 (hoặc Kiếm Vô Công 5★ từ Chongyun kèm Cát ER) để đi Nhà Hát 7.2.",
  },
  {
    id: "s_fading",
    from: "Collei",
    to: "Kujou Sara",
    shortAction: "Đưa Kujou Sara tăng Base ATK + ER",
    action: "Đổi Lạc Hà R5 cho Kujou Sara thay Cung Rỉ Sét",
    plan: "Sara đang cầm Cung Rỉ Sét (39.2/158.8 · thiếu ER 136.2%) → Lạc Hà Base ATK 565 · 30.6% ER giữ trọn buff ATK & nạp mượt hơn.",
  },
  {
    id: "s_rust",
    from: "Kujou Sara",
    to: null,
    shortAction: "Cất kho sau khi Sara nhận Lạc Hà",
    action: "Cất kho dự phòng sau khi Sara lấy Lạc Hà",
    plan: "Yoimiya đã có Cánh Thiên Không 5★ mạnh hơn nên Cung Rỉ Sét R4 tạm cất kho.",
  },
  {
    id: "s_festering",
    from: "Bennett",
    to: "Furina",
    shortAction: "Chuyển Furina (+32% ST E · +12% CR)",
    action: "Chuyển Răng Nanh Rỉ Sét R5 → Furina",
    plan: "Răng Nanh Rỉ Sét Lv.90 R5 (+32% ST E, +12% CR E) mạnh hơn Ống Đồng R5 ~6–10% DPS cho Furina (151.7% ER với Cát HP%, gắn Cát ER nếu đi 1 Thủy).",
  },
  {
    id: "s_sapwood",
    from: "Nilou",
    to: "Bennett",
    shortAction: "Chuyển Bennett (Base 510 → 565)",
    action: "Chuyển Kiếm Gỗ R2 → Bennett (Base ATK 510 → 565)",
    plan: "Nilou scale HP% (51.5k HP) không tận dụng Base ATK → đưa Bennett buff ATK to hơn Răng Nanh Rỉ Sét (vẫn giữ ~249.3% ER).",
  },
  {
    id: "s_dockhand",
    from: "Keqing",
    to: "Nilou",
    shortAction: "Trả Bàn Nham Keqing · Bến Tàu → Nilou",
    action: "Trả Bàn Nham cho Keqing · Chuyển Kiếm Bến Tàu sang Nilou",
    plan: "Bàn Nham Kết Lục đã rảnh sau khi Furina tháo sang Ống Đồng → lắp ngay về Keqing (CR 26.0% → 70.1%) & đưa Kiếm Bến Tàu (kéo Lv.90 lấy 41.3% HP) cho Nilou.",
  },
  {
    id: "s_fleuve",
    from: "Furina",
    to: "Jean",
    shortAction: "Đưa Jean (PA A) hoặc Lynette (PA B)",
    action: "Chuyển Ống Đồng → Jean (PA A) hoặc Lynette (PA B)",
    plan: "✓ Đã có Ống Đồng (đang Lv.50 R2 trên Furina) → khi Furina lấy Răng Nanh R5, đưa Ống Đồng cho Jean (PA A: bấm E ăn hạt 5s +32% ER) hoặc Lynette (PA B: bỏ kiếm 1★).",
  },
  {
    id: "s_favsword",
    from: "Jean",
    to: "Layla",
    shortAction: "Dư từ Jean → lắp Layla 34.9k HP",
    action: "PA A: Chuyển Tây Phong Kiếm R5 → Layla (hoặc Qiqi)",
    plan: "Khi Jean nhận Ống Đồng, chuyển Tây Phong Kiếm Lv.80 R5 sang Layla (34.9k HP, thay Narzissenkreuz ATK%) hoặc Qiqi C4 Ma Nữ để bơm năng lượng cả đội.",
  },
];

const COLLECT_WEAPONS = [
  {
    id: "c_masterkey",
    name: "Chìa Khóa Vạn Năng",
    type: "Trọng Kiếm 4★ · 61.3% ER · +EM",
    icon: "https://gi.yatta.moe/assets/UI/UI_EquipIcon_Claymore_Ilmarinen.png",
    source: "Rèn Nod-Krai (10%)",
    chars: ["Aino"],
    extraTarget: null,
    shortWhy: "61.3% ER + tự tăng EM ngoài sân cho Aino",
    why: "Nâng cấp rèn F2P cho Aino (hiện đang cầm Đại Kiếm Tây Phong): 61.3% ER + tự cộng EM ngoài sân.",
  },
  {
    id: "c_finale",
    name: "Nhạc Khúc Biển Sâu",
    type: "Kiếm Đơn 4★ · 565 ATK · 27.6% ATK",
    icon: "https://gi.yatta.moe/assets/UI/UI_EquipIcon_Sword_Vorpal.png",
    source: "Rèn Fontaine",
    chars: ["Valeriy", "Kamisato Ayaka"],
    extraTarget: null,
    shortWhy: "BiS rèn ATK% tăng khiên/buff Valeriy",
    why: "Tốt nhất cho Valeriy (buff quill & khiên scale thuần theo Tổng ATK), thay cho kiếm 1★ hiện tại.",
  },
  {
    id: "c_amber",
    name: "Mẫu Kim Phách",
    type: "Pháp Khí 4★ · 41.3% HP · Hồi máu",
    icon: "https://gi.yatta.moe/assets/UI/UI_EquipIcon_Catalyst_Proto.png",
    source: "Rèn Liyue / Mond",
    chars: ["Mona", "Sucrose", "Charlotte"],
    extraTarget: null,
    shortWhy: "Hồi máu + hồi Nộ cho Mona / Sucrose",
    why: "Cả acc chưa có cây nào: biến Mona/Sucrose thành Healer phụ kiêm hồi Năng Lượng khi Nộ.",
  },
  {
    id: "c_hakushin",
    name: "Vòng Bạch Thần",
    type: "Pháp Khí 4★ · 30.6% ER · Buff Lôi",
    icon: "https://gi.yatta.moe/assets/UI/UI_EquipIcon_Catalyst_Bakufu.png",
    source: "Quest Inazuma",
    chars: ["Sucrose", "Mona", "Lisa"],
    extraTarget: null,
    shortWhy: "Buff ST nguyên tố cho team Lôi",
    why: "Bản vẽ từ chuỗi quest Anh Đào Thần: buff thẳng ST nguyên tố cho team Keqing / Mitya khi kích phản ứng Lôi.",
  },
  {
    id: "c_moonweaver",
    name: "Bình Minh Của Người Dệt Trăng",
    type: "Kiếm Đơn 4★ · 565 ATK · +ST Nộ",
    icon: "https://gi.yatta.moe/assets/UI/UI_EquipIcon_Sword_Miekka.png",
    source: "Quest Nod-Krai (Hiisi)",
    chars: ["Lynette", "Keqing", "Kaeya"],
    extraTarget: "Free 100%",
    shortWhy: "Nhận free · hợp nhân vật Nộ 40–60 NL",
    why: "Nhận trực tiếp sau chuỗi quest Polkka Beneath the Moon's Oracle — cực mạnh cho nhân vật Nộ 40–60 năng lượng.",
  },
  {
    id: "c_ezpitzal",
    name: "Sáo Ezpitzal",
    type: "Kiếm Đơn 4★ · 69.0% DEF · +DEF E",
    icon: "https://gi.yatta.moe/assets/UI/UI_EquipIcon_Sword_Isikhulu.png",
    source: "Giải đố Natlan (4%)",
    chars: [],
    extraTarget: "Free · Chờ Xilonen",
    shortWhy: "Nhận free ở Natlan · BiS F2P Xilonen",
    why: "Làm giải đố Furnace of Fiery Embers nhận free 1 cây (BiS F2P cho Xilonen trong danh sách roll sắp tới).",
  },
];

const FARM_DAYS = [
  { key: 1, short: "T2", title: "Thứ 2", chars: ["Chiori", "Aino", "Furina"], resinChips: ["3× Boss Tuần", "Narwhal", "Sách Aino"], extra: "Cỏ Naku · Lumidouce · Hồ Lô" },
  { key: 2, short: "T3", title: "Thứ 3", chars: ["Furina", "Nilou", "Aino"], resinChips: ["Sách Chính Nghĩa (Furina)", "Boss Vịt (Aino)"], extra: "Xoay kiếm: Răng Nanh · Bàn Nham · Kiếm Gỗ" },
  { key: 3, short: "T4", title: "Thứ 4", chars: ["Chiori", "Yelan", "Aino"], resinChips: ["Sách Ánh Sáng (Chiori)", "Tây Phong Yelan → 90"], extra: "Ép Tráp: 4pc VV / Tông Thất" },
  { key: 4, short: "T5", title: "Thứ 5", chars: ["Neuvillette", "Furina", "Fischl"], resinChips: ["Bí cảnh Tội Lỗi (Fontaine)", "4pc Thợ Săn & Đoàn Kịch"], extra: "Nhặt đặc sản hồi 48h" },
  { key: 5, short: "T6", title: "Thứ 6", chars: ["Furina", "Neuvillette", "Aino"], resinChips: ["Sách Chính Nghĩa (Furina)", "TDV Fontaine / Ảo Cảnh"], extra: "Chốt Beidou / Gorou / Ningguang (01/12)" },
  { key: 6, short: "T7", title: "Thứ 7", chars: ["Chiori", "Yelan", "Mitya"], resinChips: ["Sách Ánh Sáng (Chiori E)", "Chốt Tây Phong 90"], extra: "Leo lại La Hoàn 11-3 & 12" },
  { key: 0, short: "CN", title: "Chủ Nhật", chars: ["Mitya", "Yae Miko", "Valeriy"], resinChips: ["Sách Charity (Mitya)", "4pc Ảo Tưởng (Mitya + Yae)"], extra: "Boss Snezhnaya (7%) · Bù sách thiếu" },
];

const MODES = {
  teams: {
    label: "Đội Hình",
    items: [
      {
        title: "Neuvillette + Furina",
        sub: "Ảo Cảnh 34s · 64k → 92k (S+)",
        note: "Chung 1 bí cảnh Fontaine · Nâng Lv.90 Q10 & farm Thợ Săn / Đoàn Kịch",
        status: "ok",
        members: ["Neuvillette", "Furina", "Kaedehara Kazuha", "Zhongli"],
        power: {
          cur: 64, proj: 92, curTier: "A+", projTier: "S+",
          role: "AOE · Đơn", tags: ["st", "aoe", "upgrade"], badge: "Ảo Cảnh 34s",
          short: "Neuv+Furina", labelPos: "left", cost: "1 bí cảnh",
          chips: ["Neuv 4pc Thợ Săn", "Furina Răng Nanh R5 · Q10", "4pc Đoàn Kịch"],
          upgrade: "Neuv 4pc Thợ Săn + Furina Lv.90 Q10 / Răng Nanh R5 / 4pc Đoàn Kịch (chung 1 bí cảnh Fontaine)",
        },
      },
      {
        title: "Raiden + Furina",
        sub: "Ảo Cảnh 56s · 62k → 81k (S)",
        note: "Raiden 69.9/132.4 ổn định · Yae Ma Nữ trụ 24s · Đổi Răng Nanh R5 cho Furina",
        status: "ok",
        members: ["Raiden Shogun", "Furina", "Yae Miko", "Yelan"],
        power: {
          cur: 62, proj: 81, curTier: "A+", projTier: "S",
          role: "Đơn mục tiêu", tags: ["st", "upgrade"], badge: "Ảo Cảnh 56s",
          short: "Raiden+Furina", labelPos: "top", cost: "Trung bình",
          chips: ["Furina Răng Nanh R5 · Q10", "Yae Nón CR%", "Yelan Tây Phong 90"],
          upgrade: "Furina Lv.90 Q10 + Răng Nanh R5/4pc Đoàn Kịch · Yae (✓ Ma Nữ) đổi Nón CR% · Yelan Tây Phong 90",
        },
      },
      {
        title: "Raiden National",
        sub: "Sẵn sàng · 61k → 68k (A+)",
        note: "Sẵn sàng 100% · Chuyển Kiếm Gỗ sang Bennett",
        status: "ok",
        members: ["Raiden Shogun", "Bennett", "Xiangling", "Yelan"],
        power: {
          cur: 61, proj: 68, curTier: "A+", projTier: "A+",
          role: "Đơn mục tiêu", tags: ["st"], badge: "Sẵn sàng",
          short: "National", labelPos: "right", cost: "Thấp",
          chips: ["Bennett Kiếm Gỗ", "Yelan Tây Phong 90", "Tối ưu Crit XL"],
          upgrade: "Bennett đổi Kiếm Gỗ (565 Base ATK) · Yelan Tây Phong 90 · Tối ưu nhẹ Crit Xiangling",
        },
      },
      {
        title: "Keqing Tăng Cường",
        sub: "Trả Bàn Nham · 45k → 68k (A+)",
        note: "Lắp lại Bàn Nham (70/231) · Đưa Bến Tàu → Nilou · Yae Nón CR%",
        status: "warn",
        members: ["Keqing", "Nahida", "Yae Miko", "Kaedehara Kazuha"],
        power: {
          cur: 45, proj: 68, curTier: "B", projTier: "A+",
          role: "Đơn · AOE nhanh", tags: ["st", "aoe", "upgrade"], badge: "0 Nhựa",
          short: "Keqing", labelPos: "top", cost: "0 Nhựa",
          chips: ["Trả Bàn Nham (CR 70%)", "Yae Nón CR%"],
          upgrade: "Trả Bàn Nham từ túi đồ về Keqing (CR 26% → 70%) · Yae (✓ Ma Nữ) đổi Nón CR%",
        },
      },
      {
        title: "Ayaka Đóng Băng",
        sub: "Sẵn sàng · 54k → 67k (A+)",
        note: "Ayaka 10/10/10 · ~95% CR thực · Đổi Rosaria C6 + Kokomi Thiên Nham nếu cần",
        status: "ok",
        members: ["Kamisato Ayaka", "Mona", "Kaedehara Kazuha", "Sangonomiya Kokomi"],
        power: {
          cur: 54, proj: 67, curTier: "A", projTier: "A+",
          role: "AOE Đóng Băng", tags: ["aoe"], badge: "~95% CR thực",
          short: "Ayaka", labelPos: "left", cost: "Thấp",
          chips: ["Thử Furina + Charlotte", "Rosaria C6 / Amenoma R5"],
          upgrade: "Thử ghép Furina + Kokomi/Charlotte hoặc Rosaria C6 + Kokomi Thiên Nham · Amenoma R5",
        },
      },
      {
        title: "Hu Tao Bốc Hơi",
        sub: "2 Thủy · 59k → 72k (S)",
        note: "2 Hòa Phác Diên · Kéo nhẹ CR Hu Tao 70%+ & Tây Phong Yelan 90",
        status: "ok",
        members: ["Hu Tao", "Yelan", "Xingqiu", "Zhongli"],
        power: {
          cur: 59, proj: 72, curTier: "A+", projTier: "S",
          role: "Đơn mục tiêu", tags: ["st"], badge: "2 Thủy",
          short: "Hu Tao", labelPos: "right", cost: "Thấp",
          chips: ["Yelan Tây Phong 90", "Hu Tao CR 70%+", "Thử Furina + Xianyun"],
          upgrade: "Yelan Tây Phong 70→90 · Kéo nhẹ CR Hu Tao (54%→70%+) · Thử ghép Furina + Xianyun",
        },
      },
      {
        title: "Yoimiya Đánh Thường",
        sub: "Sẵn sàng · 55k → 62k (A)",
        note: "Yoimiya 74/203 · Yun Jin C6 (2,160 DEF)",
        status: "ok",
        members: ["Yoimiya", "Yelan", "Yun Jin", "Zhongli"],
        power: {
          cur: 55, proj: 62, curTier: "A", projTier: "A",
          role: "Boss bay · Đơn", tags: ["st"], badge: "Sẵn sàng",
          short: "Yoimiya", labelPos: "right", cost: "Thấp",
          chips: ["Yelan Tây Phong 90", "Bổ sung ~100 EM"],
          upgrade: "Yelan Tây Phong 70→90 · Bổ sung ~100 EM cho Yoimiya để tối ưu Bốc Hơi",
        },
      },
      {
        title: "Ganyu Tan Chảy",
        sub: "Sẵn sàng · 52k → 60k (A)",
        note: "Ganyu 10/10/10 · Đổi Cát EM (~220+) & Kiếm Gỗ Bennett",
        status: "ok",
        members: ["Ganyu", "Bennett", "Xiangling", "Zhongli"],
        power: {
          cur: 52, proj: 60, curTier: "A", projTier: "A",
          role: "Đơn · Nuke", tags: ["st"], badge: "Sẵn sàng",
          short: "Ganyu", labelPos: "left", cost: "Thấp",
          chips: ["Đổi Cát EM (~220+)", "Bennett Kiếm Gỗ"],
          upgrade: "Đổi Cát EM (~220+ EM) cho Ganyu · Bennett đổi Kiếm Gỗ tăng buff ATK",
        },
      },
      {
        title: "Nilou Sum Suê",
        sub: "AOE 78k+ · 56k → 70k (S)",
        note: "Đổi Kiếm Bến Tàu 90 + 2pc+2pc HP% (51.5k → 68k+ HP) · Kiếm Gỗ → Bennett",
        status: "ok",
        members: ["Nilou", "Nahida", "Sangonomiya Kokomi", "Collei"],
        power: {
          cur: 56, proj: 70, curTier: "A+", projTier: "S",
          role: "Vua AOE", tags: ["aoe", "upgrade"], badge: "AOE 78k+",
          short: "Nilou", labelPos: "top", cost: "Thấp",
          chips: ["Bến Tàu 90 + 2+2 HP%", "Thêm EM cho Kokomi"],
          upgrade: "Chuyển Kiếm Gỗ → Bennett & nhận Kiếm Bến Tàu Lv.90 · Đổi Nilou sang 2pc+2pc HP% (51.5k → 68k+ HP)",
        },
      },
      {
        title: "Eula Vật Lý",
        sub: "Tình huống · 48k → 56k (A)",
        note: "C2 10/10/10 · Rosaria C6 bù CR · Có thể thay Raiden bằng Yae Ma Nữ",
        status: "warn",
        members: ["Eula", "Raiden Shogun", "Rosaria", "Zhongli"],
        power: {
          cur: 48, proj: 56, curTier: "B+", projTier: "A",
          role: "Nuke Vật Lý", tags: ["st"], badge: "Tình huống",
          short: "Eula", labelPos: "bottom", cost: "Thấp",
          chips: ["Đẩy CR 70%+", "Thử Furina + Mika C4"],
          upgrade: "Đẩy CR Eula (51.7%→70%+) giảm hụt Nộ · Hoặc ghép Furina + Raiden + Mika C4",
        },
      },
      {
        title: "Navia 2 Nham",
        sub: "80/180 · 58k → 76k (S)",
        note: "Navia đã chốt 6/10/9 (Li Cốt R1) · Còn nâng E Chiori 1 → 8–9",
        status: "ok",
        members: ["Navia", "Chiori", "Bennett", "Xiangling"],
        power: {
          cur: 58, proj: 76, curTier: "A+", projTier: "S",
          role: "Phá khiên · Đơn", tags: ["st", "upgrade"], badge: "12 Nửa 1",
          short: "Navia", labelPos: "left", cost: "Trung bình",
          chips: ["Chiori E 1→9", "Ly Nham +20 & STBK", "Bennett Kiếm Gỗ"],
          upgrade: "Nâng E Chiori 1→9 + Ly Nham +20 + tìm STBK (hiện 71%) · Bennett đổi Kiếm Gỗ",
        },
      },
      {
        title: "Mitya + Yae Tinh-Siêu Dẫn",
        sub: "Meta 7.2 · 42k → 98k (S+)",
        note: "Lõi Tinh-Siêu Dẫn mạnh nhất 7.2 · Yae Ma Nữ + Valeriy C3 · Đổi Rosaria → Odette vượt 100k+",
        status: "warn",
        members: ["Mitya", "Yae Miko", "Rosaria", "Valeriy"],
        power: {
          cur: 42, proj: 98, curTier: "B", projTier: "S+",
          role: "Meta 7.2", tags: ["st", "aoe", "upgrade"], badge: "Trần #1 7.2",
          short: "Mitya+Yae", labelPos: "right", cost: "Cao",
          chips: ["Mitya 90 + Trấn 90", "Yae Nón CR% + 4pc Ảo Tưởng", "Valeriy C3 80"],
          upgrade: "Mitya Lv.70→90 + Trấn 50→90 + Ly EM +20 · Yae (✓ Ma Nữ) đổi Nón CR% + 4pc Ảo Tưởng · Valeriy C3 Lv.80 (đổi Rosaria → Odette vượt 100k+)",
        },
      },
    ],
  },
  abyss: {
    label: "La Hoàn",
    items: [
      { title: "12 · Nửa 1 — Navia", sub: "+75% Lunar-Crystallize", note: "Navia 80/180 (6/10/9) · Nâng thêm E Chiori để vượt 12-3 mượt", status: "ok", members: ["Navia", "Zhongli", "Chiori", "Xianyun"] },
      { title: "12 · Nửa 2 — Neuv + Furina", sub: "+200 EM · Ảo Cảnh 34s", note: "Đội hình 34s mạnh nhất hiện tại (hoặc dùng Raiden National)", status: "ok", members: ["Neuvillette", "Furina", "Kaedehara Kazuha", "Zhongli"] },
      { title: "12 · Nửa 2 — National", sub: "+200 EM · Wavebinder", note: "Raiden 69.9/132.4 sẵn sàng đánh ngay", status: "ok", members: ["Raiden Shogun", "Bennett", "Xiangling", "Yelan"] },
      { title: "12 · Nửa 1 — Eula", sub: "12-2 Frostnight Herra", note: "Rosaria C6 bù CR · Có thể thay Raiden bằng Yae Ma Nữ", status: "warn", members: ["Eula", "Raiden Shogun", "Rosaria", "Zhongli"] },
    ],
  },
  theater: {
    label: "Nhà Hát",
    items: [
      { title: "Màn 3 · Terrorshroom", sub: "Kích Lôi nhanh", note: "Mở màn bằng Lôi + Thủy", status: "ok", members: ["Keqing", "Fischl", "Xingqiu", "Barbara"] },
      { title: "Màn 6 · Nightmares", sub: "Phá khiên Thủy + Lôi", note: "Ayato · Aino Lv.80 · Yae Ma Nữ giữ trụ 24s rất mượt", status: "ok", members: ["Kamisato Ayato", "Yae Miko", "Yelan", "Kuki Shinobu"] },
      { title: "Màn 8 · Samachurl", sub: "Giữ Nham + Thủy", note: "Navia 80/180 gánh · Cần lắp đồ Beidou/Gorou & Ningguang", status: "warn", members: ["Navia", "Zhongli", "Chiori", "Xingqiu"] },
      { title: "Màn 10 · Moonfly", sub: "Cần Healer + Buff mạnh", note: "✓ Đã có Furina Lv.80 (35.6k HP) · Mượn thêm Xilonen từ bạn", status: "ok", members: ["Neuvillette", "Furina", "Raiden Shogun", "Sangonomiya Kokomi"] },
    ],
  },
  meta: {
    label: "Meta 7.2",
    items: [
      { title: "Build Ngay (Vùng Mở)", sub: "Fontaine 64% · Nod-Krai 10%", note: "Xoay Răng Nanh/Bàn Nham/Kiếm Gỗ/Bến Tàu & farm bí cảnh Tội Lỗi", status: "ok", members: ["Furina", "Neuvillette", "Aino", "Chiori"] },
      { title: "Snezhnaya (7%)", sub: "Lõi Tinh-Siêu Dẫn 7.2", note: "Farm 4pc Ảo Tưởng cho Mitya & Yae · Valeriy C3 tạo khiên · Alyosha hồi máu", status: "warn", members: ["Mitya", "Yae Miko", "Valeriy", "Alyosha"] },
      { title: "Mục Tiêu Roll Tiếp", sub: "Pity 5★: 0 (sau Furina)", note: "Chờ Băng Thần Anastasya (7.3) · Xilonen · Odette", status: "ok", members: ["Furina", "Xilonen", "Odette", "Columbina"] },
    ],
  },
};

const CHAR_BENCHMARKS = {
  // Core & Meta 7.2
  Neuvillette: { role: "Carry Thủy", group: "core", stats: [{ key: "Giới Hạn HP", label: "HP", target: 38000, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 60, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 240, unit: "%" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 120, unit: "%" }] },
  Furina: { role: "Buffer / Sub Thủy", group: "core", stats: [{ key: "Giới Hạn HP", label: "HP", target: 40000, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 70, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 160, unit: "%" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 170, unit: "%" }] },
  Mitya: { role: "Carry Tinh-Siêu Dẫn", group: "core", stats: [{ key: "Tinh Thông Nguyên Tố", label: "EM", target: 800, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 70, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 180, unit: "%" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 110, unit: "%" }] },
  "Yae Miko": { role: "Sub Lôi (Ma Nữ)", group: "core", stats: [{ key: "Tấn Công", label: "ATK", target: 2200, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 75, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 200, unit: "%" }, { key: "Tinh Thông Nguyên Tố", label: "EM", target: 150, unit: "" }] },
  Navia: { role: "Carry Nham", group: "core", stats: [{ key: "Tấn Công", label: "ATK", target: 2000, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 75, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 175, unit: "%" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 120, unit: "%" }] },
  "Raiden Shogun": { role: "Carry / Nạp Lôi", group: "core", stats: [{ key: "Tấn Công", label: "ATK", target: 1600, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 70, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 140, unit: "%" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 260, unit: "%" }] },
  Yelan: { role: "Sub Thủy", group: "core", stats: [{ key: "Giới Hạn HP", label: "HP", target: 32000, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 70, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 160, unit: "%" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 200, unit: "%" }] },
  Chiori: { role: "Sub Nham", group: "core", stats: [{ key: "Phòng Ngự", label: "DEF", target: 2200, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 70, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 140, unit: "%" }] },
  Aino: { role: "Support Nod-Krai", group: "core", stats: [{ key: "Tinh Thông Nguyên Tố", label: "EM", target: 500, unit: "" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 185, unit: "%" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 50, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 130, unit: "%" }] },
  "Kaedehara Kazuha": { role: "Buffer Phong", group: "core", stats: [{ key: "Tinh Thông Nguyên Tố", label: "EM", target: 950, unit: "" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 145, unit: "%" }] },
  Nahida: { role: "Sub Thảo", group: "core", stats: [{ key: "Tinh Thông Nguyên Tố", label: "EM", target: 950, unit: "" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 120, unit: "%" }] },
  Zhongli: { role: "Khiên Nham", group: "core", stats: [{ key: "Giới Hạn HP", label: "HP", target: 40000, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 60, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 120, unit: "%" }] },
  Bennett: { role: "Buffer Hỏa", group: "core", stats: [{ key: "Giới Hạn HP", label: "HP", target: 25000, unit: "" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 240, unit: "%" }] },
  Nilou: { role: "Sum Suê Thủy", group: "core", stats: [{ key: "Giới Hạn HP", label: "HP", target: 68000, unit: "" }, { key: "Tinh Thông Nguyên Tố", label: "EM", target: 150, unit: "" }] },
  Valeriy: { role: "Khiên / Buffer 7.2", group: "core", stats: [{ key: "Tấn Công", label: "ATK", target: 2200, unit: "" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 160, unit: "%" }] },
  Alyosha: { role: "Healer / Buffer 7.2", group: "core", stats: [{ key: "Tấn Công", label: "ATK", target: 2000, unit: "" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 180, unit: "%" }] },

  // DPS
  Keqing: { role: "Carry Lôi", group: "dps", stats: [{ key: "Tấn Công", label: "ATK", target: 2000, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 70, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 200, unit: "%" }, { key: "Tinh Thông Nguyên Tố", label: "EM", target: 120, unit: "" }] },
  "Hu Tao": { role: "Carry Hỏa", group: "dps", stats: [{ key: "Giới Hạn HP", label: "HP", target: 32000, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 75, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 200, unit: "%" }, { key: "Tinh Thông Nguyên Tố", label: "EM", target: 200, unit: "" }] },
  "Kamisato Ayaka": { role: "Carry Băng", group: "dps", stats: [{ key: "Tấn Công", label: "ATK", target: 2100, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 40, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 220, unit: "%" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 135, unit: "%" }] },
  Yoimiya: { role: "Carry Hỏa", group: "dps", stats: [{ key: "Tấn Công", label: "ATK", target: 2100, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 75, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 190, unit: "%" }, { key: "Tinh Thông Nguyên Tố", label: "EM", target: 100, unit: "" }] },
  Ganyu: { role: "Carry Băng", group: "dps", stats: [{ key: "Tấn Công", label: "ATK", target: 2000, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 60, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 200, unit: "%" }, { key: "Tinh Thông Nguyên Tố", label: "EM", target: 200, unit: "" }] },
  "Kamisato Ayato": { role: "Carry Thủy", group: "dps", stats: [{ key: "Tấn Công", label: "ATK", target: 2000, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 70, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 170, unit: "%" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 130, unit: "%" }] },
  Eula: { role: "Carry Vật Lý", group: "dps", stats: [{ key: "Tấn Công", label: "ATK", target: 2200, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 70, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 185, unit: "%" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 125, unit: "%" }] },
  Tighnari: { role: "Carry Thảo", group: "dps", stats: [{ key: "Tấn Công", label: "ATK", target: 1600, unit: "" }, { key: "Tinh Thông Nguyên Tố", label: "EM", target: 300, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 70, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 160, unit: "%" }] },
  Diluc: { role: "Carry Hỏa", group: "dps", stats: [{ key: "Tấn Công", label: "ATK", target: 2200, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 70, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 170, unit: "%" }, { key: "Tinh Thông Nguyên Tố", label: "EM", target: 120, unit: "" }] },
  Ningguang: { role: "DPS Nham", group: "dps", stats: [{ key: "Tấn Công", label: "ATK", target: 2100, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 65, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 150, unit: "%" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 120, unit: "%" }] },

  // Sub-DPS & Support
  Fischl: { role: "Sub Lôi", group: "support", stats: [{ key: "Tấn Công", label: "ATK", target: 1800, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 65, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 140, unit: "%" }, { key: "Tinh Thông Nguyên Tố", label: "EM", target: 150, unit: "" }] },
  Xiangling: { role: "Sub Hỏa", group: "support", stats: [{ key: "Tỷ Lệ Bạo Kích", label: "CR", target: 60, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 120, unit: "%" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 220, unit: "%" }, { key: "Tinh Thông Nguyên Tố", label: "EM", target: 150, unit: "" }] },
  Xingqiu: { role: "Sub Thủy", group: "support", stats: [{ key: "Tấn Công", label: "ATK", target: 1500, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 60, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 130, unit: "%" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 200, unit: "%" }] },
  Beidou: { role: "Sub Lôi", group: "support", stats: [{ key: "Tấn Công", label: "ATK", target: 1600, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 60, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 120, unit: "%" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 170, unit: "%" }] },
  "Sangonomiya Kokomi": { role: "Healer Thủy", group: "support", stats: [{ key: "Giới Hạn HP", label: "HP", target: 35000, unit: "" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 150, unit: "%" }] },
  Jean: { role: "Healer Phong", group: "support", stats: [{ key: "Tấn Công", label: "ATK", target: 1800, unit: "" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 190, unit: "%" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 50, unit: "%" }] },
  Xianyun: { role: "Healer / Đáp Phong", group: "support", stats: [{ key: "Tấn Công", label: "ATK", target: 2800, unit: "" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 180, unit: "%" }] },
  Mona: { role: "Buffer Thủy", group: "support", stats: [{ key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 220, unit: "%" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 55, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 130, unit: "%" }] },
  Venti: { role: "Gom quái Phong", group: "support", stats: [{ key: "Tinh Thông Nguyên Tố", label: "EM", target: 600, unit: "" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 180, unit: "%" }] },
  "Kuki Shinobu": { role: "Nở Rộ Lôi", group: "support", stats: [{ key: "Tinh Thông Nguyên Tố", label: "EM", target: 900, unit: "" }, { key: "Giới Hạn HP", label: "HP", target: 25000, unit: "" }] },
  Chevreuse: { role: "Buffer Quá Tải", group: "support", stats: [{ key: "Giới Hạn HP", label: "HP", target: 40000, unit: "" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 140, unit: "%" }] },
  Rosaria: { role: "Sub / Buff CR Băng", group: "support", stats: [{ key: "Tỷ Lệ Bạo Kích", label: "CR", target: 75, unit: "%" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 160, unit: "%" }, { key: "Tấn Công", label: "ATK", target: 1700, unit: "" }] },
  "Yun Jin": { role: "Buffer Đánh Thường", group: "support", stats: [{ key: "Phòng Ngự", label: "DEF", target: 2300, unit: "" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 190, unit: "%" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 45, unit: "%" }] },
  Layla: { role: "Khiên Băng", group: "support", stats: [{ key: "Giới Hạn HP", label: "HP", target: 38000, unit: "" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 140, unit: "%" }] },
  Noelle: { role: "Khiên / DPS Nham", group: "support", stats: [{ key: "Phòng Ngự", label: "DEF", target: 2400, unit: "" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 55, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 110, unit: "%" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 130, unit: "%" }] },
  Sucrose: { role: "Buffer EM Phong", group: "support", stats: [{ key: "Tinh Thông Nguyên Tố", label: "EM", target: 750, unit: "" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 150, unit: "%" }] },
  "Kujou Sara": { role: "Buffer Lôi", group: "support", stats: [{ key: "Tấn Công", label: "ATK", target: 1800, unit: "" }, { key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 180, unit: "%" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 55, unit: "%" }, { key: "Sát Thương Bạo Kích", label: "CD", target: 120, unit: "%" }] },
  Gorou: { role: "Buffer Nham", group: "support", stats: [{ key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 180, unit: "%" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 45, unit: "%" }] },
};

let APP = {
  data: null,
  view: "tracker",      // tracker | bench | stage | power | week
  trackerTab: "chars",  // chars | now | farm | weapons
  filter: "pending",    // pending | all
  benchGroup: "all",    // all | core | dps | support
  benchStatus: "all",   // all | bad | warn | ok
  benchSort: "score_asc", // score_asc | score_desc | level
  mode: "teams",
  index: 0,
  powerTab: "chart",    // chart | matrix | vs
  powerSort: "proj",    // proj | cur | gain
  powerTag: "all",      // all | st | aoe | upgrade
  matrixActive: 0,
  vsA: 0,
  vsB: 11,
  modalChar: null,
  done: loadDone(),
};

function loadDone() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch { return {}; }
}
function saveDone() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(APP.done)); } catch {}
}

function esc(v) {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function byName(name) {
  return APP.data.characters.find((c) => c.name === name) || null;
}

function stat(c, key) {
  return (c && c.stats && c.stats[key] && c.stats[key].final) || "-";
}

function compactStats(c) {
  if (!c) return "";
  const hpSet = new Set(["Furina", "Neuvillette", "Chevreuse", "Nilou", "Yelan", "Layla", "Sangonomiya Kokomi", "Zhongli"]);
  const defSet = new Set(["Chiori", "Noelle", "Gorou", "Kachina", "Yun Jin"]);
  const emSet = new Set(["Mitya", "Nahida", "Kuki Shinobu", "Aino", "Kaedehara Kazuha", "Sucrose"]);
  const cr = stat(c, "Tỷ Lệ Bạo Kích");
  const cd = stat(c, "Sát Thương Bạo Kích");
  const er = stat(c, "Hiệu Quả Nạp Nguyên Tố");
  const parts = [];
  if (hpSet.has(c.name)) parts.push(`${stat(c, "Giới Hạn HP")} HP`);
  if (defSet.has(c.name)) parts.push(`${stat(c, "Phòng Ngự")} DEF`);
  if (emSet.has(c.name)) parts.push(`${stat(c, "Tinh Thông Nguyên Tố")} EM`);
  if (!hpSet.has(c.name) && !defSet.has(c.name) && !emSet.has(c.name)) parts.push(`${stat(c, "Tấn Công")} ATK`);
  parts.push(`${cr}/${cd}`);
  parts.push(`ER ${er}`);
  return parts.join(" · ");
}

function findActionForChar(name) {
  return ACTIONS.find((a) => a.name === name) || null;
}

function renderFaceStrip(names) {
  return names
    .map((n) => {
      const c = byName(n);
      return c?.icon
        ? `<img class="clickable-face" data-open-char="${esc(n)}" src="${esc(c.icon)}" alt="${esc(n)}" title="${esc(n)} — bấm xem chi tiết" referrerpolicy="no-referrer" />`
        : "";
    })
    .join("");
}

function tagTone(tag) {
  if (!tag) return "";
  if (tag === "0 Nhựa" || tag === "Ổn định" || tag === "Ma Nữ ✓") return "tag-ok";
  if (tag === "Nhà Hát" || tag === "Nâng VK") return "tag-bad";
  if (tag === "Snezhnaya") return "tag-purple";
  return "tag-gold";
}

function renderTodayStrip() {
  const todayKey = new Date().getDay();
  const day = FARM_DAYS.find((d) => d.key === todayKey) || FARM_DAYS[0];
  const chips = (day.resinChips || []).map((t) => `<span class="today-chip">${esc(t)}</span>`).join("");

  return `
    <section class="today-strip">
      <div class="today-left">
        <span class="today-badge">Hôm nay · ${esc(day.short)}</span>
        <div class="today-faces">${renderFaceStrip(day.chars)}</div>
        <div class="today-chips">${chips}</div>
      </div>
      <div class="today-extra">${esc(day.extra)}</div>
    </section>
  `;
}

function parseStatNum(raw) {
  const num = parseFloat(String(raw ?? "").replace(/[^0-9.-]/g, ""));
  return Number.isFinite(num) ? num : 0;
}

function fmtBenchVal(val, unit) {
  if (unit === "%") return `${val.toFixed(val % 1 === 0 ? 0 : 1)}%`;
  if (val >= 10000) return `${(val / 1000).toFixed(1)}k`;
  if (val >= 1000) return Math.round(val).toLocaleString("en-US");
  return String(Math.round(val));
}

function evalCharBenchmark(name) {
  const spec = CHAR_BENCHMARKS[name];
  const c = byName(name);
  if (!spec || !c) return null;
  const items = spec.stats.map((st) => {
    const actual = parseStatNum(stat(c, st.key));
    const ratio = st.target > 0 ? actual / st.target : 1;
    const barPct = Math.max(2, Math.min(100, Math.round(ratio * 100)));
    const tone = ratio >= 0.95 ? "ok" : ratio >= 0.78 ? "warn" : "bad";
    const diff = actual - st.target;
    const deltaText = ratio >= 0.98
      ? (diff > st.target * 0.05 ? `+${fmtBenchVal(diff, st.unit)}` : "Đạt ✓")
      : `-${fmtBenchVal(Math.abs(diff), st.unit)}`;
    return { ...st, actual, ratio, barPct, tone, deltaText };
  });
  const score = Math.round(
    (items.reduce((acc, it) => acc + Math.min(it.ratio, 1.05), 0) / items.length) * 100
  );
  const clampedScore = Math.min(100, score);
  const status = clampedScore >= 90 ? "ok" : clampedScore >= 72 ? "warn" : "bad";
  const weakest = items.reduce((a, b) => (b.ratio < a.ratio ? b : a), items[0]);
  return { name, c, spec, items, score: clampedScore, status, weakest };
}

function renderBenchMeters(items, detailed = false) {
  return `<div class="${detailed ? "modal-bench-grid" : "bench-meters"}">${items
    .map((it) => `
      <div class="b-meter">
        <div class="b-meter-top">
          <span class="b-lbl">${esc(it.label)}</span>
          <span class="b-nums tone-${it.tone}"><strong>${esc(fmtBenchVal(it.actual, it.unit))}</strong><small>/${esc(fmtBenchVal(it.target, it.unit))}</small></span>
          ${detailed ? `<span class="b-delta tone-${it.tone}">${esc(it.deltaText)}</span>` : ""}
        </div>
        <div class="b-track"><div class="b-fill tone-${it.tone}" style="width:${it.barPct}%"></div></div>
      </div>
    `)
    .join("")}</div>`;
}

function renderViewBar() {
  const allTasks = [...ACTIONS, ...SURPLUS_WEAPONS, ...COLLECT_WEAPONS];
  const total = allTasks.length;
  const doneCount = allTasks.filter((a) => APP.done[a.id]).length;
  const pct = Math.round((doneCount / total) * 100);
  const pendingCount = total - doneCount;
  const benchCount = Object.keys(CHAR_BENCHMARKS).length;

  return `
    <div class="view-bar">
      <nav class="view-tabs">
        <button class="view-tab ${APP.view === "tracker" ? "active" : ""}" data-view="tracker">Việc Làm (${pendingCount})</button>
        <button class="view-tab ${APP.view === "bench" ? "active" : ""}" data-view="bench">Chỉ Số (${benchCount})</button>
        <button class="view-tab ${APP.view === "stage" ? "active" : ""}" data-view="stage">Đội Hình</button>
        <button class="view-tab ${APP.view === "power" ? "active" : ""}" data-view="power">Sức Mạnh (${MODES.teams.items.length})</button>
        <button class="view-tab ${APP.view === "week" ? "active" : ""}" data-view="week">Lịch 7 Ngày</button>
      </nav>
      <div class="progress-inline">
        <span><strong>${doneCount}/${total}</strong> xong</span>
        <div class="prog-track"><div class="prog-fill" style="width:${pct}%"></div></div>
      </div>
    </div>
  `;
}

function renderActionBucket(title, sub, cls, items) {
  const filtered = APP.filter === "pending" ? items.filter((a) => !APP.done[a.id]) : items;
  if (filtered.length === 0) return "";

  return `
    <section class="bucket ${cls}">
      <div class="bucket-head">
        <h2>${esc(title)} <em>(${filtered.length})</em></h2>
        <span>${esc(sub)}</span>
      </div>
      <div class="action-table">
        ${filtered
          .map((a) => {
            const c = byName(a.name);
            const fromC = a.swapFrom ? byName(a.swapFrom) : null;
            const w = fromC ? fromC.weapon : c?.weapon;
            const s = a.setKey ? SET_META[a.setKey] : null;
            const isDone = !!APP.done[a.id];

            const weaponChip = `
              <div class="gear-pill">
                ${fromC?.icon ? `<img class="mini-face" src="${esc(fromC.icon)}" title="Từ ${esc(a.swapFrom)}" referrerpolicy="no-referrer" /><span class="swap-arrow">→</span>` : ""}
                ${w?.icon ? `<img class="gear-ico" src="${esc(w.icon)}" alt="${esc(w.name)}" loading="lazy" referrerpolicy="no-referrer" />` : ""}
                <span class="gear-txt">${a.swapFrom ? `Đổi ${esc(w?.name || "")}` : `${esc(w?.name || "-")} · R${esc(w?.refinement || 1)} Lv.${esc(w?.level || 1)}`}</span>
              </div>`;

            const artChip = s
              ? `<div class="gear-pill">
                  <img class="gear-ico" src="${esc(s.icon)}" alt="${esc(s.name)}" loading="lazy" referrerpolicy="no-referrer" />
                  <span class="gear-txt">${esc(s.short || s.name)}</span>
                </div>`
              : `<div class="gear-pill is-ok"><span class="gear-txt">TDV ổn ✓</span></div>`;

            return `
              <div class="action-row ${isDone ? "done" : ""}" data-open-char="${esc(a.name)}">
                <div class="col-char">
                  <input type="checkbox" data-act-id="${esc(a.id)}" ${isDone ? "checked" : ""} aria-label="Hoàn thành ${esc(a.name)}" />
                  ${c?.icon ? `<img src="${esc(c.icon)}" alt="${esc(a.name)}" referrerpolicy="no-referrer" />` : ""}
                  <div class="char-id">
                    <strong>${esc(a.name)}</strong>
                    <small>Lv.${esc(c?.level ?? "-")} · C${esc(c?.constellation ?? "-")} · ${esc(c?.talent_levels ?? "")}</small>
                  </div>
                </div>
                <div class="col-main">
                  <div class="main-top">
                    <strong class="short-fix">${esc(a.shortFix || a.fixTitle)}</strong>
                    ${a.tag ? `<span class="act-tag ${tagTone(a.tag)}">${esc(a.tag)}</span>` : ""}
                  </div>
                  ${c ? `<div class="char-live-stat">${esc(compactStats(c))}</div>` : ""}
                </div>
                <div class="col-gear-compact">
                  ${weaponChip}
                  ${artChip}
                </div>
                <span class="row-chevron" aria-hidden="true">›</span>
              </div>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderSurplusBucket() {
  const filtered = APP.filter === "pending" ? SURPLUS_WEAPONS.filter((s) => !APP.done[s.id]) : SURPLUS_WEAPONS;
  if (filtered.length === 0) return "";

  return `
    <section class="bucket bucket-surplus">
      <div class="bucket-head">
        <h2>Xoay Vòng Vũ Khí <em>(${filtered.length})</em></h2>
        <span>Tận dụng đồ Lv.60–90 đang có giữa các nhân vật</span>
      </div>
      <div class="action-table">
        ${filtered
          .map((s) => {
            const fromC = s.from ? byName(s.from) : null;
            const toC = s.to ? byName(s.to) : null;
            const w = s.customWeapon || fromC?.weapon;
            const isDone = !!APP.done[s.id];

            const fromHtml = fromC
              ? `<span class="sflow-char clickable-face" data-open-char="${esc(s.from)}" title="${esc(s.from)}">
                  ${fromC.icon ? `<img src="${esc(fromC.icon)}" alt="${esc(s.from)}" loading="lazy" referrerpolicy="no-referrer" />` : ""}
                  <span>${esc(s.from)}</span>
                </span>`
              : `<span class="sflow-vault">${esc(s.fromLabel || "Túi đồ")}</span>`;

            const destHtml = toC
              ? `<span class="sflow-char clickable-face" data-open-char="${esc(s.to)}" title="${esc(s.to)}">
                  <img src="${esc(toC.icon)}" alt="${esc(s.to)}" loading="lazy" referrerpolicy="no-referrer" />
                  <strong>${esc(s.to)}</strong>
                </span>`
              : `<span class="sflow-vault">Kho dự phòng</span>`;

            return `
              <div class="surplus-row ${isDone ? "done" : ""}">
                <div class="col-sw">
                  <input type="checkbox" data-act-id="${esc(s.id)}" ${isDone ? "checked" : ""} aria-label="Xử lý ${esc(w?.name || s.id)}" />
                  ${w?.icon ? `<img class="w-pic" src="${esc(w.icon)}" alt="${esc(w.name)}" loading="lazy" referrerpolicy="no-referrer" />` : ""}
                  <div>
                    <strong>${esc(w?.name || "-")}</strong>
                    <small>${esc(w?.rarity || 4)}★ Lv.${esc(w?.level || 1)} · R${esc(w?.refinement || 1)}</small>
                  </div>
                </div>
                <div class="col-sflow">
                  ${fromHtml}
                  <span class="swap-arrow">→</span>
                  ${destHtml}
                </div>
                <div class="col-splan">
                  <b>${esc(s.shortAction || s.action)}</b>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderCollectBucket() {
  const filtered = APP.filter === "pending" ? COLLECT_WEAPONS.filter((w) => !APP.done[w.id]) : COLLECT_WEAPONS;
  if (filtered.length === 0) return "";

  return `
    <section class="bucket bucket-collect">
      <div class="bucket-head">
        <h2>Vũ Khí Rèn / Miễn Phí <em>(${filtered.length})</em></h2>
        <span>Làm quest hoặc rèn khi dư Phôi</span>
      </div>
      <div class="action-table">
        ${filtered
          .map((w) => {
            const isDone = !!APP.done[w.id];
            const faces = w.chars
              .map((n) => {
                const c = byName(n);
                return `<span class="sflow-char clickable-face" data-open-char="${esc(n)}" title="${esc(n)}">
                  ${c?.icon ? `<img src="${esc(c.icon)}" alt="${esc(n)}" loading="lazy" referrerpolicy="no-referrer" />` : ""}
                  <strong>${esc(n)}</strong>
                </span>`;
              })
              .join("");

            return `
              <div class="surplus-row ${isDone ? "done" : ""}">
                <div class="col-sw">
                  <input type="checkbox" data-act-id="${esc(w.id)}" ${isDone ? "checked" : ""} aria-label="Thu thập ${esc(w.name)}" />
                  <img class="w-pic" src="${esc(w.icon)}" alt="${esc(w.name)}" loading="lazy" referrerpolicy="no-referrer" />
                  <div>
                    <strong>${esc(w.name)}</strong>
                    <small>${esc(w.type)}</small>
                  </div>
                </div>
                <div class="col-cfor">
                  <span class="csource">${esc(w.source)}</span>
                  <div class="cfaces">
                    ${faces}
                    ${w.extraTarget ? `<span class="sflow-vault">${esc(w.extraTarget)}</span>` : ""}
                  </div>
                </div>
                <div class="col-splan">
                  <b>${esc(w.shortWhy || w.why)}</b>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderTrackerView() {
  const nowItems = ACTIONS.filter((a) => a.bucket === "now");
  const farmItems = ACTIONS.filter((a) => a.bucket === "farm");
  const laterItems = ACTIONS.filter((a) => a.bucket === "later");
  const weaponItems = [...SURPLUS_WEAPONS, ...COLLECT_WEAPONS];
  const countOpen = (arr) => arr.filter((x) => !APP.done[x.id]).length;
  const totalCount = ACTIONS.length + weaponItems.length;

  const tabs = [
    ["chars", `Nhân vật (${countOpen(ACTIONS)})`],
    ["now", `Làm ngay (${countOpen(nowItems)})`],
    ["farm", `Cần farm (${countOpen([...farmItems, ...laterItems])})`],
    ["weapons", `Vũ khí (${countOpen(weaponItems)})`],
  ];

  const blocks = [];
  if (APP.trackerTab === "chars" || APP.trackerTab === "now") {
    blocks.push(renderActionBucket("1. Chỉnh Ngay · 0 Nhựa", "Đổi đồ có sẵn · Nón CR% · Slot Nhà Hát", "bucket-now", nowItems));
  }
  if (APP.trackerTab === "chars" || APP.trackerTab === "farm") {
    blocks.push(renderActionBucket("2. Cần Farm · Vùng Đã Mở", "Fontaine 64% · Nod-Krai 10% · Inazuma 100%", "bucket-farm", farmItems));
    blocks.push(renderActionBucket("3. Snezhnaya (7%)", "10 Băng Thần Đồng · Sách Charity & Boss", "bucket-later", laterItems));
  }
  if (APP.trackerTab === "weapons") {
    blocks.push(renderSurplusBucket());
    blocks.push(renderCollectBucket());
  }

  const body = blocks.join("");

  return `
    <div class="tracker-controls">
      <div class="power-subtabs">
        ${tabs.map(([k, label]) => `<button type="button" class="subtab-btn ${APP.trackerTab === k ? "active" : ""}" data-tracker-tab="${k}">${esc(label)}</button>`).join("")}
      </div>
      <div class="filter-group">
        <button class="filter-btn ${APP.filter === "pending" ? "active" : ""}" data-filter="pending">Chưa xong</button>
        <button class="filter-btn ${APP.filter === "all" ? "active" : ""}" data-filter="all">Tất cả (${totalCount})</button>
      </div>
    </div>
    ${body || `<div class="empty-done">✓ Đã hoàn thành toàn bộ mục trong tab này!</div>`}
  `;
}

function powerGainPct(p) {
  if (!p || !p.cur) return 0;
  return Math.round(((p.proj - p.cur) / p.cur) * 100);
}

function tierClass(tier) {
  const t = String(tier || "").toLowerCase();
  if (t === "s+") return "tier-s-plus";
  if (t === "s") return "tier-s";
  if (t === "a+") return "tier-a-plus";
  if (t === "a") return "tier-a";
  if (t.startsWith("b")) return "tier-b";
  return "tier-c";
}

function renderFoot() {
  if (APP.mode === "teams") {
    const items = MODES.teams.items;
    const active = items[APP.index] || items[0];
    const p = active?.power;
    if (!p) return "";
    const maxProj = Math.max(...items.map((it) => it.power?.proj || 0), 1);
    const curW = Math.round((p.cur / maxProj) * 100);
    const projW = Math.round((p.proj / maxProj) * 100);
    const gain = powerGainPct(p);
    const chipsHtml = (p.chips || []).map((ch) => `<span class="up-chip">${esc(ch)}</span>`).join("");
    return `
      <div class="stage-foot stage-power-foot">
        <div class="stage-power-top">
          <div class="stage-power-meta">
            <span><strong>${p.cur}k</strong> <em class="tier-pill ${tierClass(p.curTier)}">${esc(p.curTier)}</em></span>
            <span class="swap-arrow">→</span>
            <span><strong class="proj-val">${p.proj}k DPS</strong> <em class="tier-pill ${tierClass(p.projTier)}">${esc(p.projTier)}</em></span>
            <span class="power-gain">+${gain}%</span>
          </div>
          <button class="power-jump-btn" type="button" data-view-jump="power">So sánh ${items.length} đội →</button>
        </div>
        <div class="power-bar-track">
          <div class="power-bar-proj" style="width:${projW}%"></div>
          <div class="power-bar-cur" style="width:${curW}%"></div>
        </div>
        <div class="stage-foot-chips">
          <span class="cost-pill ${costClass(p.cost)}">${esc(p.cost)}</span>
          ${chipsHtml}
        </div>
      </div>
    `;
  }
  if (APP.mode === "theater") {
    const elig = APP.data.characters.filter(
      (c) => c.level >= 70 && (["Hydro", "Electro", "Geo"].includes(c.element) || c.name === "Qiqi")
    );
    const needGear = new Set(["Beidou", "Gorou", "Ningguang"]);
    return `
      <div class="stage-foot">
        <div class="foot-title">
          <span><strong>${elig.length}+3</strong> nhân vật đủ cấp · Hạn 01/12</span>
          <span style="color:var(--bad);">Đỏ = Cần lắp VK / TDV</span>
        </div>
        <div class="theater-faces">
          ${elig
            .map(
              (c) => `<span class="t-face ${needGear.has(c.name) ? "warn" : ""}" data-open-char="${esc(c.name)}" title="${esc(c.name)} Lv.${c.level} C${c.constellation}">
                <img src="${esc(c.icon)}" alt="${esc(c.name)}" loading="lazy" referrerpolicy="no-referrer" />
                ${esc(c.name)}
              </span>`
            )
            .join("")}
        </div>
      </div>
    `;
  }
  if (APP.mode === "abyss") {
    return `
      <div class="stage-foot">
        <div class="foot-title">
          <span><strong>La Hoàn 16.11–16.12</strong> · 11-3 (25/36★)</span>
          <span>Tầng 12: Nửa 1 +75% Lunar-Crystallize · Nửa 2 +200 EM</span>
        </div>
      </div>
    `;
  }
  return "";
}

function renderStageView() {
  const items = MODES[APP.mode].items;
  const active = items[APP.index] || items[0];

  const rowsHtml = items
    .map((it, idx) => {
      const faces = it.members
        .map((n) => {
          const c = byName(n);
          return c?.icon ? `<img src="${esc(c.icon)}" alt="${esc(n)}" referrerpolicy="no-referrer" />` : `<span class="face-ghost">${esc(n.slice(0, 2).toUpperCase())}</span>`;
        })
        .join("");

      return `
        <button class="roster-row ${idx === APP.index ? "active" : ""}" data-idx="${idx}">
          <span class="status-dot dot-${esc(it.status)}"></span>
          <div class="row-faces">${faces}</div>
          <div class="row-text">
            <strong>${esc(it.title)}</strong>
            <span>${esc(it.sub)}</span>
          </div>
        </button>
      `;
    })
    .join("");

  const pillarsHtml = active.members
    .map((name) => {
      const c = byName(name);
      const act = findActionForChar(name);
      const isPending = act && !APP.done[act.id];
      const el = c?.element || "Geo";
      const artUrl = c?.splash || c?.icon || "";
      const wIcon = c?.weapon?.icon;
      const artIcons = (c?.artifacts || []).slice(0, 3).map((a) => a.icon).filter(Boolean);

      let noteClass = "note-ok";
      let noteText = c ? "Ổn định ✓" : "Chưa có";
      if (isPending) {
        noteClass = act.bucket === "now" ? "note-bad" : "note-warn";
        noteText = act.shortFix || act.fixTitle;
      } else if (act && APP.done[act.id]) {
        noteText = "Đã xong ✓";
      }

      return `
        <article class="character-pillar" style="--el: var(--el-${esc(el)}, 211,188,142);" ${c ? `data-open-char="${esc(name)}" title="Bấm xem chi tiết & 5 món TDV"` : ""}>
          <div class="splash-wrap">
            ${artUrl ? `<img class="splash-img" src="${esc(artUrl)}" alt="${esc(name)}" referrerpolicy="no-referrer" />` : `<div class="splash-ghost">${esc(name.slice(0, 2).toUpperCase())}</div>`}
          </div>
          <div class="pillar-meta">
            <div class="pillar-name-row">
              <strong>${esc(name)}</strong>
              <span>${c ? `Lv.${esc(c.level)} C${esc(c.constellation)}` : "Target"}</span>
            </div>
            ${
              c
                ? `<div class="pillar-gear">
                    ${wIcon ? `<img src="${esc(wIcon)}" title="${esc(c.weapon?.name || "")}" referrerpolicy="no-referrer" />` : ""}
                    ${artIcons.map((u) => `<img src="${esc(u)}" referrerpolicy="no-referrer" />`).join("")}
                    <span class="talent-txt">${esc(c.talent_levels)}</span>
                  </div>`
                : `<div class="pillar-gear"><span class="talent-txt">Mục tiêu</span></div>`
            }
            ${c ? `<div class="pillar-stats">${esc(compactStats(c))}</div>` : ""}
            <div class="pillar-note ${noteClass}">${esc(noteText)}</div>
          </div>
        </article>
      `;
    })
    .join("");

  const headerSub = active.power?.badge
    ? `<span class="power-badge status-${esc(active.status)}">${esc(active.power.badge)}</span>`
    : `<span class="showcase-sub">${esc(active.note)}</span>`;

  return `
    <section class="stage-layout">
      <aside>
        <nav class="mode-nav">
          ${Object.entries(MODES)
            .map(([k, m]) => `<button class="mode-tab ${APP.mode === k ? "active" : ""}" data-mode="${k}">${esc(m.label)}</button>`)
            .join("")}
        </nav>
        <div class="roster-list">${rowsHtml}</div>
      </aside>

      <section>
        <div class="showcase-header">
          <h2>${esc(active.title)}</h2>
          ${headerSub}
        </div>
        <div class="party-stage">${pillarsHtml}</div>
        ${renderFoot()}
      </section>
    </section>
  `;
}

const EL_HEX = {
  Hydro: "#4ea8f5",
  Electro: "#b07af5",
  Geo: "#e5b556",
  Pyro: "#eb6c4a",
  Cryo: "#7adaf5",
  Anemo: "#5edab2",
  Dendro: "#8ad452",
};

function calcTeamReadiness(members) {
  if (!members || !members.length) return { pct: 0, avgLv: 0, maxArts: 0, maxWeapons: 0 };
  let scoreSum = 0;
  let lvSum = 0;
  let maxArts = 0;
  let maxWeapons = 0;
  members.forEach((n) => {
    const c = byName(n);
    if (!c) return;
    const lv = Number(c.level || 0);
    const wLv = Number(c.weapon?.level || 0);
    const arts = (c.artifacts || []).slice(0, 5);
    const artSum = arts.reduce((acc, a) => acc + Math.min(Number(a.level || 0), 20), 0);
    const talSum = String(c.talent_levels || "1/1/1")
      .split("/")
      .slice(0, 3)
      .reduce((acc, v) => acc + (Number(v) || 1), 0);
    scoreSum +=
      (Math.min(lv, 90) / 90) * 0.35 +
      (Math.min(wLv, 90) / 90) * 0.25 +
      (Math.min(artSum, 100) / 100) * 0.25 +
      (Math.min(talSum, 24) / 24) * 0.15;
    lvSum += lv;
    maxArts += arts.filter((a) => Number(a.level || 0) >= 20).length;
    if (wLv >= 90) maxWeapons += 1;
  });
  return {
    pct: Math.round((scoreSum / members.length) * 100),
    avgLv: Math.round(lvSum / members.length),
    maxArts,
    maxWeapons,
  };
}

function costClass(cost) {
  if (cost === "0 Nhựa" || cost === "Thấp") return "cost-low";
  if (cost === "Cao") return "cost-high";
  return "cost-mid";
}

function renderTeamFaces(members, sizeCls = "power-faces") {
  return `<div class="${sizeCls}">${members
    .map((n) => {
      const c = byName(n);
      return c?.icon
        ? `<button type="button" class="power-face-btn" data-open-char="${esc(n)}" title="${esc(n)} Lv.${esc(c.level)} C${esc(c.constellation)} — bấm xem chi tiết"><img src="${esc(c.icon)}" alt="${esc(n)}" loading="lazy" referrerpolicy="no-referrer" /></button>`
        : `<span class="face-ghost" title="${esc(n)}">${esc(n.slice(0, 2).toUpperCase())}</span>`;
    })
    .join("")}</div>`;
}

function renderPowerPodium(allTeams) {
  const topCur = allTeams.reduce((a, b) => (b.power.cur > a.power.cur ? b : a), allTeams[0]);
  const topProj = allTeams.reduce((a, b) => (b.power.proj > a.power.proj ? b : a), allTeams[0]);
  const keqingTeam = allTeams.find((t) => t.title.startsWith("Keqing")) || allTeams[0];

  const cards = [
    {
      label: "#1 Đánh Ngay",
      team: topCur,
      metric: `~${topCur.power.cur}k DPS`,
      sub: `${topCur.power.curTier} → ${topCur.power.projTier} · ${topCur.power.badge}`,
      tone: "podium-cur",
    },
    {
      label: "#1 Trần 7.2",
      team: topProj,
      metric: `~${topProj.power.proj}k DPS`,
      sub: `Tier ${topProj.power.projTier} · +${powerGainPct(topProj.power)}%`,
      tone: "podium-proj",
    },
    {
      label: "#1 ROI Nhựa",
      team: keqingTeam,
      metric: `+${powerGainPct(keqingTeam.power)}% · 0 Nhựa`,
      sub: `${topCur.power.short} +${powerGainPct(topCur.power)}% (1 bí cảnh)`,
      tone: "podium-roi",
    },
  ];

  return `
    <div class="power-podium">
      ${cards
        .map((card) => {
          const lead = byName(card.team.members[0]);
          const el = lead?.element || "Geo";
          const faces = card.team.members
            .map((n) => {
              const c = byName(n);
              return c?.icon ? `<img src="${esc(c.icon)}" alt="${esc(n)}" referrerpolicy="no-referrer" />` : "";
            })
            .join("");
          return `
            <div class="podium-card ${card.tone}" style="--el: var(--el-${esc(el)}, 211,188,142);" data-jump-team="${card.team.idx}">
              ${lead?.splash ? `<img class="podium-splash" src="${esc(lead.splash)}" alt="" referrerpolicy="no-referrer" />` : ""}
              <div class="podium-body">
                <span class="podium-label">${esc(card.label)}</span>
                <div class="podium-title-row">
                  <strong>${esc(card.team.title)}</strong>
                  <span class="podium-metric">${esc(card.metric)}</span>
                </div>
                <div class="podium-foot">
                  <div class="podium-faces">${faces}</div>
                  <small>${esc(card.sub)}</small>
                </div>
              </div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderPowerChart(allTeams) {
  const filtered = allTeams.filter((t) => APP.powerTag === "all" || t.power.tags.includes(APP.powerTag));
  const sorted = [...filtered].sort((a, b) => {
    if (APP.powerSort === "cur") return b.power.cur - a.power.cur || b.power.proj - a.power.proj;
    if (APP.powerSort === "gain") return powerGainPct(b.power) - powerGainPct(a.power) || b.power.proj - a.power.proj;
    return b.power.proj - a.power.proj || b.power.cur - a.power.cur;
  });

  const rowsHtml = sorted
    .map((t, rankIdx) => {
      const p = t.power;
      const ready = calcTeamReadiness(t.members);
      const gain = powerGainPct(p);
      const chipsHtml = (p.chips || [])
        .map((ch) => `<span class="up-chip">${esc(ch)}</span>`)
        .join("");

      return `
        <div class="bullet-row">
          <div class="bullet-team">
            <div class="bullet-head">
              <span class="rank-num">#${rankIdx + 1}</span>
              <button type="button" class="power-team-link" data-jump-team="${t.idx}">${esc(t.title)}</button>
            </div>
            <div class="bullet-sub">
              <span class="power-badge status-${esc(t.status)}">${esc(p.badge)}</span>
              <span class="ready-pill" title="Mức hoàn thiện (Lv/VK/TDV/TP)">Build ${ready.pct}%</span>
            </div>
            ${renderTeamFaces(t.members)}
          </div>

          <div class="bullet-viz">
            <div class="bullet-bar-line">
              <div class="bullet-track" title="Hiện tại ~${p.cur}k · Dự tính ~${p.proj}k DPS">
                <i class="tick-line" style="left:55%"></i>
                <i class="tick-line" style="left:75%"></i>
                <i class="tick-line" style="left:90%"></i>
                <div class="bullet-proj" style="width:${p.proj}%"></div>
                <div class="bullet-cur" style="width:${p.cur}%"></div>
              </div>
              <div class="bullet-nums">
                <span class="dps-pair"><strong>${p.cur}k</strong> → <b class="proj-val">${p.proj}k</b></span>
                <span class="power-gain">+${gain}%</span>
                <span class="tier-shift">
                  <em class="tier-pill ${tierClass(p.curTier)}">${esc(p.curTier)}</em>
                  <span class="swap-arrow">→</span>
                  <em class="tier-pill ${tierClass(p.projTier)}">${esc(p.projTier)}</em>
                </span>
                <button type="button" class="vs-mini-btn" data-vs-pick="${t.idx}" title="So Kè 1v1">VS</button>
              </div>
            </div>

            <div class="bullet-chips">
              <span class="cost-pill ${costClass(p.cost)}">${esc(p.cost)}</span>
              ${chipsHtml}
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <div class="bullet-legend-row">
      <span><i class="leg-cur"></i> Hiện tại (25/11)</span>
      <span><i class="leg-proj"></i> Dự tính</span>
      <span><i class="leg-tick"></i> 55k (36★) · 75k (Nhanh) · 90k (S+)</span>
    </div>

    <div class="bullet-board">
      <div class="bullet-axis-head">
        <div class="bullet-axis-title">Đội hình</div>
        <div class="bullet-axis-scale">
          <span style="left:0%">0k</span>
          <span style="left:55%">55k</span>
          <span style="left:75%">75k</span>
          <span style="left:90%">90k</span>
        </div>
      </div>
      ${rowsHtml}
    </div>
  `;
}

function renderPowerMatrix(allTeams) {
  const padL = 62;
  const padR = 26;
  const padT = 28;
  const padB = 46;
  const W = 820;
  const H = 430;
  const xMin = 22;
  const xMax = 69;
  const yMin = 50;
  const yMax = 102;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const pxX = (v) => padL + ((v - xMin) / (xMax - xMin)) * plotW;
  const pxY = (v) => padT + ((yMax - v) / (yMax - yMin)) * plotH;

  const xMid = pxX(52);
  const yMid = pxY(70);

  const xTicks = [30, 40, 50, 60];
  const yTicks = [60, 70, 80, 90, 100];

  const clips = allTeams
    .map((t) => {
      const cx = pxX(t.power.cur).toFixed(1);
      const cy = pxY(t.power.proj).toFixed(1);
      return `<clipPath id="mx-clip-${t.idx}"><circle cx="${cx}" cy="${cy}" r="14" /></clipPath>`;
    })
    .join("");

  const nodes = allTeams
    .map((t) => {
      const p = t.power;
      const cx = pxX(p.cur);
      const cy = pxY(p.proj);
      const lead = byName(t.members[0]);
      const stroke = EL_HEX[lead?.element || "Geo"] || "#d3bc8e";
      const isAct = t.idx === APP.matrixActive;

      let lx = cx;
      let ly = cy - 20;
      let anchor = "middle";
      if (p.labelPos === "right") {
        lx = cx + 19;
        ly = cy + 4;
        anchor = "start";
      } else if (p.labelPos === "left") {
        lx = cx - 19;
        ly = cy + 4;
        anchor = "end";
      } else if (p.labelPos === "bottom") {
        lx = cx;
        ly = cy + 28;
        anchor = "middle";
      }

      return `
        <g class="matrix-node ${isAct ? "is-active" : ""}" data-matrix-pick="${t.idx}">
          <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="20" fill="transparent" />
          ${isAct ? `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="19" fill="none" stroke="#f1ece1" stroke-width="1.5" stroke-dasharray="3 2" />` : ""}
          <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="15" fill="#181520" stroke="${stroke}" stroke-width="${isAct ? 2.5 : 1.7}" />
          ${lead?.icon ? `<image href="${esc(lead.icon)}" x="${(cx - 14).toFixed(1)}" y="${(cy - 14).toFixed(1)}" width="28" height="28" clip-path="url(#mx-clip-${t.idx})" preserveAspectRatio="xMidYMid slice" />` : ""}
          <text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="${anchor}" class="matrix-lbl">${esc(p.short)}</text>
        </g>
      `;
    })
    .join("");

  const act = allTeams[APP.matrixActive] || allTeams[0];
  const actP = act.power;
  const actReady = calcTeamReadiness(act.members);
  const actLead = byName(act.members[0]);

  return `
    <div class="matrix-layout">
      <div class="matrix-canvas-card">
        <svg viewBox="0 0 ${W} ${H}" class="matrix-svg" role="img" aria-label="Bản đồ 2D sức mạnh hiện tại và dự tính">
          <defs>${clips}</defs>

          <!-- Quadrants -->
          <rect x="${padL}" y="${padT}" width="${(xMid - padL).toFixed(1)}" height="${(yMid - padT).toFixed(1)}" fill="rgba(176, 122, 245, 0.06)" />
          <rect x="${xMid.toFixed(1)}" y="${padT}" width="${(W - padR - xMid).toFixed(1)}" height="${(yMid - padT).toFixed(1)}" fill="rgba(108, 212, 165, 0.08)" />
          <rect x="${padL}" y="${yMid.toFixed(1)}" width="${(xMid - padL).toFixed(1)}" height="${(H - padB - yMid).toFixed(1)}" fill="rgba(232, 114, 114, 0.04)" />
          <rect x="${xMid.toFixed(1)}" y="${yMid.toFixed(1)}" width="${(W - padR - xMid).toFixed(1)}" height="${(H - padB - yMid).toFixed(1)}" fill="rgba(211, 188, 142, 0.05)" />

          <!-- Quadrant Titles -->
          <text x="${padL + 10}" y="${padT + 18}" class="q-title q-purple">⚡ TIỀM NĂNG LỚN</text>
          <text x="${W - padR - 10}" y="${padT + 18}" text-anchor="end" class="q-title q-green">★ ƯU TIÊN #1</text>
          <text x="${padL + 10}" y="${H - padB - 10}" class="q-title q-muted">↻ TÌNH HUỐNG</text>
          <text x="${W - padR - 10}" y="${H - padB - 10}" text-anchor="end" class="q-title q-gold">✓ ỔN ĐỊNH</text>

          <!-- Grid lines & ticks -->
          ${xTicks
            .map((xv) => {
              const x = pxX(xv).toFixed(1);
              return `<line x1="${x}" y1="${padT}" x2="${x}" y2="${H - padB}" class="mx-grid" />
                      <text x="${x}" y="${H - padB + 18}" text-anchor="middle" class="mx-tick">${xv}k</text>`;
            })
            .join("")}
          ${yTicks
            .map((yv) => {
              const y = pxY(yv).toFixed(1);
              return `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" class="mx-grid" />
                      <text x="${padL - 8}" y="${Number(y) + 4}" text-anchor="end" class="mx-tick">${yv}k</text>`;
            })
            .join("")}

          <!-- Threshold dividers -->
          <line x1="${xMid.toFixed(1)}" y1="${padT}" x2="${xMid.toFixed(1)}" y2="${H - padB}" class="mx-divider" />
          <line x1="${padL}" y1="${yMid.toFixed(1)}" x2="${W - padR}" y2="${yMid.toFixed(1)}" class="mx-divider" />

          <!-- Y=X diagonal reference -->
          <line x1="${pxX(50).toFixed(1)}" y1="${pxY(50).toFixed(1)}" x2="${pxX(69).toFixed(1)}" y2="${pxY(69).toFixed(1)}" class="mx-diag" />

          <!-- Axis labels -->
          <text x="${((padL + W - padR) / 2).toFixed(1)}" y="${H - 8}" text-anchor="middle" class="mx-axis">Hiện tại (k DPS) →</text>
          <text x="16" y="${((padT + H - padB) / 2).toFixed(1)}" text-anchor="middle" transform="rotate(-90 16 ${((padT + H - padB) / 2).toFixed(1)})" class="mx-axis">Dự tính (k DPS) →</text>

          ${nodes}
        </svg>
      </div>

      <aside class="matrix-inspector" style="--el: var(--el-${esc(actLead?.element || "Geo")}, 211,188,142);">
        ${actLead?.splash ? `<img class="inspector-splash" src="${esc(actLead.splash)}" alt="" referrerpolicy="no-referrer" />` : ""}
        <div class="inspector-inner">
          <div class="inspector-eyebrow">Chi tiết đội</div>
          <h3>${esc(act.title)}</h3>
          <div class="inspector-badges">
            <span class="power-badge status-${esc(act.status)}">${esc(actP.badge)}</span>
            <span class="cost-pill ${costClass(actP.cost)}">${esc(actP.cost)}</span>
          </div>

          ${renderTeamFaces(act.members)}

          <div class="inspector-meter">
            <div class="bullet-track">
              <div class="bullet-proj" style="width:${actP.proj}%"></div>
              <div class="bullet-cur" style="width:${actP.cur}%"></div>
            </div>
            <div class="power-nums">
              <span><strong>${actP.cur}k</strong> → <strong class="proj-val">${actP.proj}k DPS</strong></span>
              <span class="power-gain">+${powerGainPct(actP)}%</span>
            </div>
          </div>

          <div class="inspector-stats">
            <div><span>Tier</span><strong>${esc(actP.curTier)} → ${esc(actP.projTier)}</strong></div>
            <div><span>Build</span><strong>${actReady.pct}% (Lv.${actReady.avgLv})</strong></div>
            <div><span>TDV +20</span><strong>${actReady.maxArts}/${act.members.length * 5}</strong></div>
          </div>

          <div class="inspector-chips">
            ${(actP.chips || []).map((ch) => `<span class="up-chip">${esc(ch)}</span>`).join("")}
          </div>

          <div class="inspector-actions">
            <button type="button" class="power-jump-btn" data-jump-team="${act.idx}">Đội Hình →</button>
            <button type="button" class="vs-mini-btn" data-vs-pick="${act.idx}">So kè 1v1 →</button>
          </div>
        </div>
      </aside>
    </div>
  `;
}

function renderPowerVs(allTeams) {
  const a = allTeams[APP.vsA] || allTeams[0];
  const b = allTeams[APP.vsB] || allTeams[11] || allTeams[1];
  const rA = calcTeamReadiness(a.members);
  const rB = calcTeamReadiness(b.members);
  const gA = powerGainPct(a.power);
  const gB = powerGainPct(b.power);

  const presets = [
    [0, 11, "Neuv+Furina vs Mitya+Yae"],
    [1, 2, "Raiden+Furina vs National"],
    [10, 5, "Navia vs Hu Tao"],
    [8, 4, "Nilou vs Ayaka"],
  ];

  const metrics = [
    { label: "Hiện tại", vA: a.power.cur, vB: b.power.cur, fmtA: `${a.power.cur}k`, fmtB: `${b.power.cur}k`, max: 100 },
    { label: "Dự tính", vA: a.power.proj, vB: b.power.proj, fmtA: `${a.power.proj}k`, fmtB: `${b.power.proj}k`, max: 100 },
    { label: "Tiềm năng", vA: gA, vB: gB, fmtA: `+${gA}%`, fmtB: `+${gB}%`, max: Math.max(gA, gB, 100) },
    { label: "Hoàn thiện", vA: rA.pct, vB: rB.pct, fmtA: `${rA.pct}%`, fmtB: `${rB.pct}%`, max: 100 },
  ];

  const renderHeaderCard = (team, ready, side) => {
    const lead = byName(team.members[0]);
    const el = lead?.element || "Geo";
    const opts = allTeams
      .map((t) => `<option value="${t.idx}" ${t.idx === team.idx ? "selected" : ""}>${esc(t.title)} (${t.power.cur}k→${t.power.proj}k)</option>`)
      .join("");
    return `
      <div class="vs-card vs-side-${side}" style="--el: var(--el-${esc(el)}, 211,188,142);">
        ${lead?.splash ? `<img class="vs-splash" src="${esc(lead.splash)}" alt="" referrerpolicy="no-referrer" />` : ""}
        <div class="vs-card-inner">
          <select class="vs-select" data-vs-select="${side}" aria-label="Chọn đội ${side.toUpperCase()}">${opts}</select>
          <div class="vs-meta-row">
            <span class="tier-pill ${tierClass(team.power.curTier)}">${esc(team.power.curTier)}</span>
            <span class="swap-arrow">→</span>
            <span class="tier-pill ${tierClass(team.power.projTier)}">${esc(team.power.projTier)}</span>
            <span class="cost-pill ${costClass(team.power.cost)}">${esc(team.power.cost)}</span>
          </div>
          ${renderTeamFaces(team.members)}
          <div class="vs-chips">
            ${(team.power.chips || []).map((ch) => `<span class="up-chip">${esc(ch)}</span>`).join("")}
          </div>
          <div class="vs-sub-info">Build ${ready.pct}% · TDV +20: ${ready.maxArts}/20 · VK 90: ${ready.maxWeapons}/4</div>
        </div>
      </div>
    `;
  };

  const barsHtml = metrics
    .map((m) => {
      const wA = Math.round((m.vA / m.max) * 100);
      const wB = Math.round((m.vB / m.max) * 100);
      const winA = m.vA > m.vB;
      const winB = m.vB > m.vA;
      return `
        <div class="vs-metric-row">
          <div class="vs-val vs-val-a ${winA ? "is-win" : ""}">${esc(m.fmtA)}</div>
          <div class="vs-bar-a"><div class="vs-fill vs-fill-a ${winA ? "is-win" : ""}" style="width:${wA}%"></div></div>
          <div class="vs-metric-lbl">${esc(m.label)}</div>
          <div class="vs-bar-b"><div class="vs-fill vs-fill-b ${winB ? "is-win" : ""}" style="width:${wB}%"></div></div>
          <div class="vs-val vs-val-b ${winB ? "is-win" : ""}">${esc(m.fmtB)}</div>
        </div>
      `;
    })
    .join("");

  const curWinner = a.power.cur >= b.power.cur ? a : b;
  const projWinner = a.power.proj >= b.power.proj ? a : b;

  return `
    <div class="vs-presets">
      <span class="power-sort-lbl">Kèo nhanh:</span>
      ${presets
        .map(([ia, ib, label]) => `<button type="button" class="filter-btn ${APP.vsA === ia && APP.vsB === ib ? "active" : ""}" data-vs-preset="${ia},${ib}">${esc(label)}</button>`)
        .join("")}
    </div>

    <div class="vs-grid">
      ${renderHeaderCard(a, rA, "a")}
      <div class="vs-badge-mid">VS</div>
      ${renderHeaderCard(b, rB, "b")}
    </div>

    <div class="vs-bars-card">
      ${barsHtml}
    </div>

    <div class="onslaught-banner vs-verdict">
      <strong>Chốt kèo:</strong>
      Đánh ngay → <strong>${esc(curWinner.title)}</strong> (${curWinner.power.cur}k)
      · Trần dài hạn → <strong>${esc(projWinner.title)}</strong> (${projWinner.power.proj}k · ${esc(projWinner.power.projTier)}).
    </div>
  `;
}

function renderPowerView() {
  const allTeams = MODES.teams.items.map((it, idx) => ({ ...it, idx }));

  const subTabs = [
    ["chart", "Biểu Đồ DPS"],
    ["matrix", "Bản Đồ 2D"],
    ["vs", "So Kè 1v1"],
  ];
  const tagButtons = [
    ["all", `Tất cả (${allTeams.length})`],
    ["st", "Đơn"],
    ["aoe", "AOE"],
    ["upgrade", "Tăng mạnh"],
  ];
  const sortButtons = [
    ["proj", "Dự tính ↓"],
    ["cur", "Hiện tại ↓"],
    ["gain", "Tăng % ↓"],
  ];

  let body = "";
  if (APP.powerTab === "matrix") body = renderPowerMatrix(allTeams);
  else if (APP.powerTab === "vs") body = renderPowerVs(allTeams);
  else body = renderPowerChart(allTeams);

  return `
    ${renderPowerPodium(allTeams)}

    <div class="power-subbar">
      <div class="power-subtabs">
        ${subTabs
          .map(([k, label]) => `<button type="button" class="subtab-btn ${APP.powerTab === k ? "active" : ""}" data-power-tab="${k}">${esc(label)}</button>`)
          .join("")}
      </div>

      ${
        APP.powerTab === "chart"
          ? `<div class="power-chart-tools">
              <div class="filter-group">
                ${tagButtons
                  .map(([k, label]) => `<button type="button" class="filter-btn ${APP.powerTag === k ? "active" : ""}" data-power-tag="${k}">${esc(label)}</button>`)
                  .join("")}
              </div>
              <div class="filter-group">
                <span class="power-sort-lbl">Xếp:</span>
                ${sortButtons
                  .map(([k, label]) => `<button type="button" class="filter-btn ${APP.powerSort === k ? "active" : ""}" data-power-sort="${k}">${esc(label)}</button>`)
                  .join("")}
              </div>
            </div>`
          : `<span class="power-hint">${APP.powerTab === "matrix" ? "Bấm từng icon trên bản đồ" : "Chọn 2 đội để so trực diện"}</span>`
      }
    </div>

    ${body}
  `;
}

function renderWeekView() {
  const todayKey = new Date().getDay();
  return `
    <div class="onslaught-banner">
      <strong>Ảo Cảnh Hiểm Ác (11.11–15.12):</strong>
      10 ngày đầu kỳ: <strong>120 Nhựa = +1 TDV 5★</strong> · Mốc <strong>1,200</strong> nhận <em>Dust of Enlightenment</em>.
    </div>
    <div class="week-list">
      ${FARM_DAYS.map((d) => {
        const isToday = d.key === todayKey;
        const chips = (d.resinChips || []).map((t) => `<span class="week-chip">${esc(t)}</span>`).join("");
        return `
          <div class="week-row ${isToday ? "is-today" : ""}">
            <div class="week-day">
              <strong>${esc(d.title)}</strong>
              ${isToday ? `<small>Hôm nay</small>` : ""}
            </div>
            <div class="week-faces">${renderFaceStrip(d.chars)}</div>
            <div class="week-tasks">
              <div class="week-chips">${chips}</div>
              <small>${esc(d.extra)}</small>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderBenchmarksView() {
  const allEval = Object.keys(CHAR_BENCHMARKS)
    .map((n) => evalCharBenchmark(n))
    .filter(Boolean);

  const countByStatus = (st) => allEval.filter((x) => x.status === st).length;
  const groups = [
    ["all", `Tất cả (${allEval.length})`],
    ["core", "Ưu tiên"],
    ["dps", "DPS"],
    ["support", "Support"],
  ];
  const sorts = [
    ["score_asc", "Thiếu nhất ↑"],
    ["score_desc", "Đạt chuẩn ↓"],
    ["level", "Level ↓"],
  ];

  const list = allEval
    .filter((x) => APP.benchGroup === "all" || x.spec.group === APP.benchGroup)
    .filter((x) => APP.benchStatus === "all" || x.status === APP.benchStatus)
    .sort((a, b) => {
      if (APP.benchSort === "score_desc") return b.score - a.score || b.c.level - a.c.level;
      if (APP.benchSort === "level") return b.c.level - a.c.level || b.score - a.score;
      return a.score - b.score || b.c.level - a.c.level;
    });

  return `
    <div class="bench-summary">
      <button type="button" class="bench-kpi kpi-ok ${APP.benchStatus === "ok" ? "active" : ""}" data-bench-status="ok">
        <span>Đạt chuẩn (≥90%)</span>
        <strong>${countByStatus("ok")}</strong>
      </button>
      <button type="button" class="bench-kpi kpi-warn ${APP.benchStatus === "warn" ? "active" : ""}" data-bench-status="warn">
        <span>Gần đạt (72–89%)</span>
        <strong>${countByStatus("warn")}</strong>
      </button>
      <button type="button" class="bench-kpi kpi-bad ${APP.benchStatus === "bad" ? "active" : ""}" data-bench-status="bad">
        <span>Cần nâng (&lt;72%)</span>
        <strong>${countByStatus("bad")}</strong>
      </button>
    </div>

    <div class="tracker-controls">
      <div class="power-subtabs">
        ${groups.map(([k, label]) => `<button type="button" class="subtab-btn ${APP.benchGroup === k ? "active" : ""}" data-bench-group="${k}">${esc(label)}</button>`).join("")}
      </div>
      <div class="filter-group">
        ${sorts.map(([k, label]) => `<button type="button" class="filter-btn ${APP.benchSort === k ? "active" : ""}" data-bench-sort="${k}">${esc(label)}</button>`).join("")}
      </div>
    </div>

    <div class="bench-list">
      ${list
        .map(
          (b) => `
          <div class="bench-row" data-open-char="${esc(b.name)}">
            <div class="col-char">
              ${b.c.icon ? `<img src="${esc(b.c.icon)}" alt="${esc(b.name)}" loading="lazy" referrerpolicy="no-referrer" />` : ""}
              <div class="char-id">
                <strong>${esc(b.name)}</strong>
                <small>Lv.${esc(b.c.level)} C${esc(b.c.constellation)} · ${esc(b.spec.role)}</small>
              </div>
            </div>
            <div class="bench-score score-${b.status}">${b.score}%</div>
            ${renderBenchMeters(b.items, false)}
            <span class="row-chevron" aria-hidden="true">›</span>
          </div>
        `
        )
        .join("") || `<div class="empty-done">Không có nhân vật nào trong nhóm lọc này.</div>`}
    </div>
  `;
}

function openCharModal(name) {
  if (!name) return;
  APP.modalChar = name;
  document.body.classList.add("modal-open");
  renderModal();
}

function closeCharModal() {
  if (!APP.modalChar) return;
  APP.modalChar = null;
  document.body.classList.remove("modal-open");
  const root = document.getElementById("modal-root");
  if (root) root.innerHTML = "";
}

function renderModal() {
  const root = document.getElementById("modal-root");
  if (!root) return;
  const name = APP.modalChar;
  if (!name) {
    root.innerHTML = "";
    return;
  }

  const c = byName(name);
  const act = findActionForChar(name);
  const guide = CHAR_GUIDES[name] || null;
  if (!c && !act) {
    closeCharModal();
    return;
  }

  const el = c?.element || "Geo";
  const isDone = act ? !!APP.done[act.id] : false;
  const setMeta = act?.setKey ? SET_META[act.setKey] : null;
  const fromC = act?.swapFrom ? byName(act.swapFrom) : null;
  const w = c?.weapon;

  // Stat cards (core + non-zero elemental/physical DMG)
  const coreStats = [
    ["HP tối đa", stat(c, "Giới Hạn HP")],
    ["Tấn công", stat(c, "Tấn Công")],
    ["Phòng ngự", stat(c, "Phòng Ngự")],
    ["Tỷ lệ Bạo kích", stat(c, "Tỷ Lệ Bạo Kích")],
    ["ST Bạo kích", stat(c, "Sát Thương Bạo Kích")],
    ["Hiệu quả Nạp", stat(c, "Hiệu Quả Nạp Nguyên Tố")],
    ["Tinh thông", stat(c, "Tinh Thông Nguyên Tố")],
  ];
  const dmgEntries = Object.entries(c?.stats || {})
    .filter(([k, v]) => k.startsWith("Tăng Sát Thương ") && v?.final && v.final !== "0.0%" && v.final !== "-")
    .map(([k, v]) => [k.replace("Tăng Sát Thương Nguyên Tố ", "ST ").replace("Tăng Sát Thương ", "ST "), v.final]);

  // Related surplus / collect suggestions
  const relatedSurplus = SURPLUS_WEAPONS.filter((s) => s.from === name || s.to === name);
  const relatedCollect = COLLECT_WEAPONS.filter((cw) => (cw.chars || []).includes(name));
  const weaponNotes = [];
  if (act?.swapNote) {
    weaponNotes.push({
      title: fromC ? `Gợi ý đổi từ ${act.swapFrom}: ${fromC.weapon?.name || ""}` : "Ghi chú vũ khí hiện tại",
      desc: act.swapNote,
    });
  }
  relatedSurplus.forEach((s) => {
    const wn = s.customWeapon?.name || (s.from ? byName(s.from)?.weapon?.name : "") || "Vũ khí dư";
    weaponNotes.push({ title: `${wn} — ${s.action}`, desc: s.plan });
  });
  relatedCollect.forEach((cw) => {
    weaponNotes.push({ title: `Thu thập: ${cw.name} (${cw.source})`, desc: cw.why });
  });

  const arts = c?.artifacts || [];
  const artMissingWarn = arts.length < 5 ? ` · Đang thiếu ${5 - arts.length} món` : "";
  const bench = c ? evalCharBenchmark(name) : null;

  root.innerHTML = `
    <div class="char-modal-backdrop" id="char-modal-backdrop">
      <div class="char-modal" role="dialog" aria-modal="true" aria-labelledby="modal-char-name" style="--el: var(--el-${esc(el)}, 211,188,142);">
        <div class="modal-head">
          ${c?.splash ? `<img class="modal-splash" src="${esc(c.splash)}" alt="" referrerpolicy="no-referrer" />` : ""}
          <div class="modal-head-left">
            ${c?.icon ? `<img class="modal-avatar" src="${esc(c.icon)}" alt="${esc(name)}" referrerpolicy="no-referrer" />` : ""}
            <div class="modal-title-wrap">
              <h2 id="modal-char-name">
                ${esc(name)}
                <span class="modal-el-pill">${esc(el)}</span>
              </h2>
              <div class="modal-sub">${c ? `Lv.${esc(c.level)} · C${esc(c.constellation)} · Thiên phú ${esc(c.talent_levels)}` : "Nhân vật mục tiêu"}</div>
            </div>
          </div>
          <div class="modal-head-actions">
            ${act ? `<button class="modal-done-btn ${isDone ? "is-done" : ""}" data-modal-done="${esc(act.id)}">${isDone ? "✓ Đã hoàn thành" : "Đánh dấu đã xong"}</button>` : ""}
            <button class="modal-close" data-modal-close="1" aria-label="Đóng">×</button>
          </div>
        </div>

        <section class="modal-section">
          <h3 class="modal-section-title">Kế hoạch &amp; Dòng chính</h3>
          ${
            act
              ? `
                <div class="modal-fix-summary">
                  <strong>${esc(act.fixTitle)}</strong>
                  <span class="fix-badge ${act.bucket === "now" ? "" : "warn"}">${act.bucket === "now" ? "● Làm ngay" : act.bucket === "farm" ? "● Cần farm" : "● Snezhnaya"}</span>
                </div>
                <div class="modal-mainstats">
                  ${guide ? `<div><strong>Dòng chính:</strong> ${esc(guide.mainStats)}</div><div><strong>Ngưỡng đẹp:</strong> ${esc(guide.targets)}</div>` : `<div>${esc(act.fixSub)}</div>`}
                </div>
                ${
                  guide?.steps?.length
                    ? `<ol class="modal-steps">${guide.steps.map((st) => `<li>${esc(st)}</li>`).join("")}</ol>`
                    : ""
                }
                ${
                  setMeta
                    ? `<div class="modal-set-target">
                        <img src="${esc(setMeta.icon)}" alt="${esc(setMeta.name)}" referrerpolicy="no-referrer" />
                        <div>
                          <strong>${esc(setMeta.name)}</strong>
                          <small>Nơi farm: ${esc(setMeta.where)}</small>
                        </div>
                      </div>`
                    : ""
                }
              `
              : `<strong style="color:var(--ok); font-size:13.5px;">✓ Build hiện tại đã ổn định — không có hạng mục cần sửa gấp.</strong>`
          }
        </section>

        ${
          c
            ? `<section class="modal-section">
                <div class="modal-section-head">
                  <h3 class="modal-section-title">${bench ? "So sánh chỉ số lý tưởng (25/11)" : "Chỉ số thực tế (25/11)"}</h3>
                  ${bench ? `<span class="bench-score score-${bench.status}">Đạt ${bench.score}%</span>` : ""}
                </div>
                ${
                  bench
                    ? `${renderBenchMeters(bench.items, true)}
                       ${dmgEntries.length ? `<div class="modal-extra-stats">${dmgEntries.map(([label, val]) => `<span>${esc(label)}: <strong>${esc(val)}</strong></span>`).join("")}</div>` : ""}`
                    : `<div class="modal-stats-grid">
                        ${[...coreStats, ...dmgEntries]
                          .map(([label, val]) => `<div class="modal-stat-item"><span>${esc(label)}</span><strong>${esc(val)}</strong></div>`)
                          .join("")}
                      </div>`
                }
              </section>`
            : ""
        }

        <section class="modal-section">
          <h3 class="modal-section-title">Vũ khí &amp; Hoán đổi</h3>
          ${
            w?.name
              ? `<div class="modal-weapon-box">
                  ${w.icon ? `<img src="${esc(w.icon)}" alt="${esc(w.name)}" referrerpolicy="no-referrer" />` : ""}
                  <div>
                    <strong>${esc(w.name)} (${esc(w.rarity || 4)}★ · Lv.${esc(w.level || 1)} · R${esc(w.refinement || 1)})</strong>
                    <small>${w.base_atk ? `Base ATK ${esc(w.base_atk)}` : ""}${w.substat_name ? ` · ${esc(w.substat_name)} ${esc(w.substat_val)}` : ""}</small>
                  </div>
                </div>`
              : `<div class="modal-sub">Chưa có dữ liệu vũ khí.</div>`
          }
          ${
            weaponNotes.length
              ? `<div class="modal-swap-note">
                  ${weaponNotes.map((n) => `<div><strong>${esc(n.title)}:</strong> <small>${esc(n.desc)}</small></div>`).join("")}
                </div>`
              : ""
          }
        </section>

        ${
          c
            ? `<section class="modal-section">
                <h3 class="modal-section-title">Thánh Di Vật (${arts.length}/5)${artMissingWarn ? `<span style="color:var(--bad);">${esc(artMissingWarn)}</span>` : ""} ${c.artifact_sets ? `· <span style="color:var(--muted); text-transform:none; font-weight:500;">${esc(c.artifact_sets)}</span>` : ""}</h3>
                ${
                  arts.length
                    ? `<div class="modal-art-list">
                        ${arts
                          .map((ar) => {
                            const lvl = Number(ar.level ?? 0);
                            const isLow = lvl < 20;
                            return `
                              <div class="modal-art-row">
                                ${ar.icon ? `<img src="${esc(ar.icon)}" alt="${esc(ar.slot || "")}" loading="lazy" referrerpolicy="no-referrer" />` : "<div></div>"}
                                <div class="modal-art-main">
                                  <strong>${esc(ar.main_stat)} ${esc(ar.main_val)}</strong>
                                  <small>${esc(ar.slot)} · ${esc(ar.set)} · <span class="${isLow ? "art-lvl-low" : ""}">Lv.+${esc(lvl)}</span></small>
                                </div>
                                <div class="modal-art-subs">
                                  ${(ar.substats || [])
                                    .map((sp) => `<span>${esc(sp.name)} +${esc(sp.value)}${sp.rolls > 0 ? `<span class="sub-roll">(+${esc(sp.rolls)})</span>` : ""}</span>`)
                                    .join("")}
                                </div>
                              </div>
                            `;
                          })
                          .join("")}
                      </div>`
                    : `<div class="modal-sub">Chưa lắp mảnh Thánh Di Vật nào.</div>`
                }
              </section>`
            : ""
        }
      </div>
    </div>
  `;

  const backdrop = document.getElementById("char-modal-backdrop");
  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeCharModal();
    });
  }
  root.querySelectorAll("[data-modal-close]").forEach((btn) => {
    btn.addEventListener("click", closeCharModal);
  });
  root.querySelectorAll("[data-modal-done]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-modal-done");
      APP.done[id] = !APP.done[id];
      saveDone();
      render();
      renderModal();
    });
  });
}

function render() {
  let content = "";
  if (APP.view === "tracker") content = renderTrackerView();
  else if (APP.view === "bench") content = renderBenchmarksView();
  else if (APP.view === "stage") content = renderStageView();
  else if (APP.view === "power") content = renderPowerView();
  else content = renderWeekView();

  document.getElementById("app-root").innerHTML = [
    renderTodayStrip(),
    renderViewBar(),
    content,
  ].join("");

  document.querySelectorAll(".view-tab").forEach((b) => {
    b.addEventListener("click", () => {
      APP.view = b.getAttribute("data-view");
      render();
    });
  });

  document.querySelectorAll("[data-view-jump]").forEach((b) => {
    b.addEventListener("click", () => {
      APP.view = b.getAttribute("data-view-jump");
      render();
    });
  });

  document.querySelectorAll(".filter-btn[data-filter]").forEach((b) => {
    b.addEventListener("click", () => {
      APP.filter = b.getAttribute("data-filter");
      render();
    });
  });

  document.querySelectorAll("[data-tracker-tab]").forEach((b) => {
    b.addEventListener("click", () => {
      APP.trackerTab = b.getAttribute("data-tracker-tab");
      render();
    });
  });

  document.querySelectorAll("[data-bench-group]").forEach((b) => {
    b.addEventListener("click", () => {
      APP.benchGroup = b.getAttribute("data-bench-group");
      render();
    });
  });

  document.querySelectorAll("[data-bench-status]").forEach((b) => {
    b.addEventListener("click", () => {
      const st = b.getAttribute("data-bench-status");
      APP.benchStatus = APP.benchStatus === st ? "all" : st;
      render();
    });
  });

  document.querySelectorAll("[data-bench-sort]").forEach((b) => {
    b.addEventListener("click", () => {
      APP.benchSort = b.getAttribute("data-bench-sort");
      render();
    });
  });

  document.querySelectorAll("[data-power-tab]").forEach((b) => {
    b.addEventListener("click", () => {
      APP.powerTab = b.getAttribute("data-power-tab");
      render();
    });
  });

  document.querySelectorAll("[data-power-tag]").forEach((b) => {
    b.addEventListener("click", () => {
      APP.powerTag = b.getAttribute("data-power-tag");
      render();
    });
  });

  document.querySelectorAll("[data-power-sort]").forEach((b) => {
    b.addEventListener("click", () => {
      APP.powerSort = b.getAttribute("data-power-sort");
      render();
    });
  });

  document.querySelectorAll("[data-matrix-pick]").forEach((el) => {
    el.addEventListener("click", () => {
      APP.matrixActive = Number(el.getAttribute("data-matrix-pick"));
      render();
    });
  });

  document.querySelectorAll("[data-vs-pick]").forEach((b) => {
    b.addEventListener("click", () => {
      const picked = Number(b.getAttribute("data-vs-pick"));
      APP.vsA = picked;
      APP.vsB = picked === 0 ? 11 : 0;
      APP.powerTab = "vs";
      render();
    });
  });

  document.querySelectorAll("[data-vs-preset]").forEach((b) => {
    b.addEventListener("click", () => {
      const [ia, ib] = b.getAttribute("data-vs-preset").split(",").map(Number);
      APP.vsA = ia;
      APP.vsB = ib;
      render();
    });
  });

  document.querySelectorAll("[data-vs-select]").forEach((sel) => {
    sel.addEventListener("change", () => {
      const side = sel.getAttribute("data-vs-select");
      const val = Number(sel.value);
      if (side === "a") APP.vsA = val;
      else APP.vsB = val;
      render();
    });
  });

  document.querySelectorAll("[data-jump-team]").forEach((b) => {
    b.addEventListener("click", (e) => {
      if (e.target.closest("[data-open-char]")) return;
      APP.view = "stage";
      APP.mode = "teams";
      APP.index = Number(b.getAttribute("data-jump-team"));
      render();
    });
  });

  document.querySelectorAll("input[type=checkbox][data-act-id]").forEach((cb) => {
    cb.addEventListener("change", () => {
      APP.done[cb.getAttribute("data-act-id")] = cb.checked;
      saveDone();
      render();
    });
  });

  document.querySelectorAll(".mode-tab").forEach((b) => {
    b.addEventListener("click", () => {
      APP.mode = b.getAttribute("data-mode");
      APP.index = 0;
      render();
    });
  });

  document.querySelectorAll(".roster-row").forEach((b) => {
    b.addEventListener("click", () => {
      APP.index = Number(b.getAttribute("data-idx"));
      render();
    });
  });

  document.querySelectorAll("[data-open-char]").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.closest('input[type="checkbox"]')) return;
      e.stopPropagation();
      openCharModal(el.getAttribute("data-open-char"));
    });
  });
}

async function init() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && APP.modalChar) closeCharModal();
  });
  try {
    const res = await fetch(DATA_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    APP.data = await res.json();
    if (APP.data.account.banner) {
      document.getElementById("hero-bg").style.backgroundImage = `url('${APP.data.account.banner}')`;
    }
    if (APP.data.account.logo) {
      document.getElementById("hero-logo").src = APP.data.account.logo;
    }
    document.getElementById("player-title").textContent = APP.data.account.nickname;
    render();
  } catch (err) {
    document.getElementById("app-root").innerHTML = `<div class="loading">Không tải được dữ liệu: ${esc(err.message)}</div>`;
  }
}

init();
