const DATA_URL = "./data/genshin_uid_802472241_data.json";
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

// Unified per-character action dossier (synced with crawl 26/11/2026 09:45 — Furina Lv.90 4/9/9, 39.7k HP)
const ACTIONS = [
  // Bucket 1: Do now in-game (0 Resin or quick swap / artifact mainstat fix)
  { id: "a_ning", bucket: "now", tag: "Nhà Hát", shortFix: "Nâng Ly Nham +20 · Đổi Nón CR%", name: "Ningguang", swapFrom: null, swapNote: "✓ Đã gắn Quyển Thiên Không R2 (2,501 ATK)", fixTitle: "Nâng Ly Nham (+0 → +20) & đổi Nón → CR%", fixSub: "CR đang 14.7% / 169.7% CD · Chỉnh xong sẵn sàng Nhà Hát Màn 8", setKey: null },
  { id: "a_beidou", bucket: "now", tag: "Nhà Hát", shortFix: "✓ Đã Vua Biển · Đủ 5 TDV (Cát ER)", name: "Beidou", swapFrom: null, swapNote: "✓ Đã chuyển Vua Biển Hàng Hiệu Lv.80 R5 (1,559 ATK)", fixTitle: "✓ Đã gắn Vua Biển R5 · Lắp đủ 5 món TDV (Cát ER)", fixSub: "Đang mới 3 món TDV, 111% ER · Thêm 2 món đủ Cát ER trước hạn Nhà Hát 01/12", setKey: "esf" },
  { id: "a_fischl", bucket: "now", tag: "0 Nhựa", shortFix: "Đổi Nón STBK → Nón CR%", name: "Fischl", swapFrom: null, swapNote: "✓ Đã gắn Tuyệt Huyền R5 (224 EM · +48% ST Oz)", fixTitle: "Đổi Nón STBK → Nón CR% (đang 31.8% CR)", fixSub: "Giữ 2 Lôi 2 ATK tạm rồi farm dần 4pc Đoàn Kịch ở Fontaine", setKey: "gt" },
  { id: "a_kuki", bucket: "now", tag: "0 Nhựa", shortFix: "Đổi 3 món EM · Kéo Lv.90 (900+ EM)", name: "Kuki Shinobu", swapFrom: null, swapNote: "✓ Đã gắn Thiết Phong Kích R3 (EM lên 483)", fixTitle: "Đổi Cát ATK / Ly HP / Nón CR → 3 món EM", fixSub: "Kéo từ 483 → ~900+ EM & nâng Lv.80 → 90 tối ưu Nở Rộ", setKey: "gd" },
  { id: "a_raiden", bucket: "now", tag: "Ổn định", shortFix: "✓ Đã chốt (Bennett đã Kiếm Gỗ)", name: "Raiden Shogun", swapFrom: null, swapNote: "✓ Đã đổi Nón CR% (69.9/132.4 · 258.9% ER) & Bennett đã gắn Kiếm Gỗ", fixTitle: "✓ Đã hoàn thiện (Trấn Đoạn Thảo R1 · 69.9/132.4)", fixSub: "Sẵn sàng hoàn toàn cho cả La Hoàn & Ảo Cảnh", setKey: null },
  { id: "a_yae", bucket: "now", tag: "Ma Nữ ✓", shortFix: "Đổi Nón CR% (~75/204)", name: "Yae Miko", swapFrom: null, swapNote: "✓ Đã mở Ma Nữ (Edict of Cleansing) · Giữ Trấn Kagura R1 · 2,238 ATK · 51.0/252.2", fixTitle: "Đổi Nón STBK → Nón CR% (51/252 → ~75/204)", fixSub: "✓ Đã có trụ 24s, Q không phá trụ, +80%/200% ATK · Đổi Nón CR% ổn định CRIT rồi farm 4pc Ảo Tưởng chung Mitya", setKey: "dids" },
  { id: "a_keqing", bucket: "now", tag: "Ổn định", shortFix: "✓ Đã trả Bàn Nham (70.1/231.4)", name: "Keqing", swapFrom: null, swapNote: "✓ Đã lắp lại Bàn Nham Kết Lục Lv.90 R1 (1,800 ATK · 70.1/231.4) & đưa Bến Tàu → Nilou", fixTitle: "✓ Đã trả Bàn Nham Kết Lục R1 (70.1% CR / 231.4% CD)", fixSub: "Hoàn tất 0 Nhựa · Sẵn sàng đi Nhà Hát & Tăng Cường", setKey: null },
  { id: "a_nilou", bucket: "now", tag: "0 Nhựa", shortFix: "✓ Đeo Bến Tàu · Kéo 90 & 2+2 HP%", name: "Nilou", swapFrom: null, swapNote: "✓ Đã nhận Kiếm Bến Tàu Lv.60 (56.2k HP) & chuyển Kiếm Gỗ → Bennett", fixTitle: "Nâng Kiếm Bến Tàu 60 → 90 (41.3% HP) · Đổi 2+2 HP%", fixSub: "HP đã tăng 51.5k → 56.2k · Kéo kiếm lên 90 + 2pc+2pc HP% để chạm 68k+ HP", setKey: "hp2" },
  { id: "a_yelan", bucket: "now", tag: "Ổn định", shortFix: "✓ Đã chốt Tây Phong Lv.90 R5 (202% ER)", name: "Yelan", swapFrom: null, swapNote: "✓ Đã nâng Cung Tây Phong Lv.90 R5 (202.0% ER · 68.9/152.6)", fixTitle: "✓ Đã hoàn thiện Yelan (Tây Phong Lv.90 R5 · 202% ER)", fixSub: "Đã đạt trọn ngưỡng ER + Crit · Sẵn sàng mọi đội hình", setKey: null },
  { id: "a_gorou", bucket: "now", tag: "Nhà Hát", shortFix: "Bỏ cung 1★ · Lắp cung Nạp + Ly", name: "Gorou", swapFrom: null, swapNote: "Đang cầm Cung Săn Bắn 1★ Lv.1", fixTitle: "Lắp cung Nạp tạm & thêm Ly (đang 4 món)", fixSub: "Đủ đồ dự bị slot Nham cho Nhà Hát Giả Tưởng 7.2", setKey: null },
  { id: "a_aino", bucket: "now", tag: "0 Nhựa", shortFix: "Đổi Nón CR% nổ Tây Phong · Dừng farm", name: "Aino", swapFrom: null, swapNote: "✓ Đã Lv.80 C1 · 1/5/4 · Tây Phong Lv.90 R5 (40.0% CR · 191.6% ER · 464 EM)", fixTitle: "Đổi Nón STBK → Nón CR% (~60%+ nổ Tây Phong) · Dừng tốn nhựa", fixSub: "Chưa có đồng đội Nod-Krai 5★ · Giữ Lv.80 (1/5/4) đi Nhà Hát, tạm hoãn 4pc Khúc Ca (tùy chọn 4pc Giáo Quan)", setKey: null },

  // Bucket 2: Farm in unlocked regions (Fontaine 64%, Inazuma 100%, Sumeru 100%)
  { id: "a_furina", bucket: "farm", tag: "Fontaine", shortFix: "✓ Đã Lv.90 4/9/9 · Q10 & 4pc Đoàn Kịch", name: "Furina", swapFrom: null, swapNote: "✓ Đã lên Lv.90 (4/9/9 · 39.7k HP · 151.8% ER · 46.4/180.6) · Răng Nanh R5", fixTitle: "Nâng Q (9 → 10) · Farm 4pc Đoàn Kịch", fixSub: "✓ Đã lên Lv.90 (39,678 HP) & Răng Nanh R5 (+32% ST E, +12% CR E) · Farm chung Neuvillette", setKey: "gt" },
  { id: "a_neuv", bucket: "farm", tag: "Fontaine", shortFix: "Farm 4pc Thợ Săn Marechaussee", name: "Neuvillette", swapFrom: null, swapNote: "Giữ Trấn Nghi Thức R1 · Tạm 4pc Trầm Luân (52.8/234.9 · Clear Boss 2 34s)", fixTitle: "Farm tiếp 4pc Thợ Săn Marechaussee (Fontaine)", fixSub: "Đã sửa CR từ 26% → 52.8% (+35.2% Crit) · Qua Thợ Săn nhảy lên ~88.8% CR", setKey: "mh" },
  { id: "a_chiori", bucket: "farm", tag: "Inazuma", shortFix: "Nâng E 1→8–9 · Ly Nham +20", name: "Chiori", swapFrom: null, swapNote: "✓ Đã đủ Cát DEF% (2,163 DEF · 60.2/71.0)", fixTitle: "Nâng E từ 1 → 8–9 · Nâng Ly Nham (+14 → +20)", fixSub: "Sách Ánh Sáng (Inazuma T4/T7) + tìm thêm dòng phụ STBK", setKey: "gt" },
  { id: "a_jean", bucket: "farm", tag: "Tráp TDV", shortFix: "Nâng Ống Đồng 90 · Ly ATK +20 · VV", name: "Jean", swapFrom: null, swapNote: "✓ Đã nhận Ống Đồng Lv.50 R2 (189.3% ER) · Trả Tây Phong R5 cho Layla", fixTitle: "Nâng Ống Đồng 50 → 90 · Ly ATK +20 · Ép 4pc Bóng Hình", fixSub: "Hoàn thiện bộ 4pc VV trừ 40% kháng & lên Ống Đồng đủ Nạp >200%", setKey: "vv" },
  { id: "a_venti", bucket: "farm", tag: "Cường hóa", shortFix: "Nâng 4 món TDV +0 → +20", name: "Venti", swapFrom: null, swapNote: "Giữ Trấn Tiếng Thở Dài Vô Tận R1 (196.6% ER)", fixTitle: "4 món TDV trên HoYoLAB vẫn ở +0", fixSub: "Nâng Lông/Cát EM/Ly Phong/Nón lên +20 (đã đủ 4pc Bóng Hình)", setKey: "vv" },
  { id: "a_navia", bucket: "farm", tag: "Tối ưu", shortFix: "✓ 6/10/10 · Đẩy lại CR ~70%+ (56.7%)", name: "Navia", swapFrom: null, swapNote: "✓ Đã vương miện Q10 (6/10/10 · Kiếm Li Cốt R1 · 1,980 ATK · 142.7% ER)", fixTitle: "Kéo lại CR 56.7% → 70%+ (đổi lại Nón/mảnh 4pc)", fixSub: "Vừa chuyển 2 Phiến Đá + 2 Giác Đấu nên ER lên 142.7% nhưng CR tụt từ 80% → 56.7%", setKey: "nw" },

  // Bucket 3: Snezhnaya unlocked (7%, 10 Iceculus) — start farming!
  { id: "a_mitya", bucket: "later", tag: "Snezhnaya", shortFix: "Ly EM +20 · Kéo Lv.90 + Trấn 90", name: "Mitya", swapFrom: null, swapNote: "✓ Đã lên Lv.80 (2/3/4 · 67.2/213.6 · 516 EM) · 2pc Giấc Mộng + 2pc Đoàn Hát · Trấn Lv.70", fixTitle: "Nâng Ly EM +0 → +20 · Kéo Trấn (70→90) & Mitya (80→90)", fixSub: "Đã lên Lv.80 & Trấn Lv.70 · Farm dần 4pc Ảo Tưởng chung Yae (Ma Nữ)", setKey: "dids" },
  { id: "a_valeriy", bucket: "later", tag: "Snezhnaya", shortFix: "✓ Đeo Isshin 80 · Làm sau Mitya (Lv.70/80)", name: "Valeriy", swapFrom: null, swapNote: "✓ C3 (+100 EM từ C2) · Đã gắn Isshin Lv.80 R1 (647 ATK)", fixTitle: "Build gọn Lv.70/80 (sau Mitya 90) · E6–8 · Full ATK%", fixSub: "C3 đã mở C2 +100 EM & khiên giữ nhịp Mitya; trần thật nằm ở C6 nên ưu tiên Mitya & Yae trước", setKey: "furnace" },
  { id: "a_alyosha", bucket: "later", tag: "Snezhnaya", shortFix: "✓ Đeo Mũi Nhọn 70 · Kéo Lv / Xương Sống", name: "Alyosha", swapFrom: null, swapNote: "✓ Đã gắn Mũi Nhọn Của Gió Lv.70 R5 (550 ATK) · Hoặc lấy Xương Sống 5★ Lv.90 đang rảnh", fixTitle: "Kéo Lv.1 → 80 · Nâng E > Q · Dùng Mũi Nhọn R5 hoặc Xương Sống 90", fixSub: "Healer + Buff ATK team Tinh-Siêu Dẫn · Cân nhắc chuyển Xương Sống 5★ (Yaoyao vừa trả)", setKey: "no" },
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
      "✓ Đã gắn Vua Biển Hàng Hiệu Lv.80 R5 (ATK nhảy 486 → 1,559).",
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
    targets: "✓ Đã chốt đẹp: 69.9% CR / 132.4% CD · 258.9% ER · Clear Boss 1 trong 56s",
    steps: [
      "✓ Đã đổi sang Nón CR% 31.1% và Bennett đã chuyển sang Kiếm Gỗ (565 Base ATK).",
      "Giữ nguyên Trấn Đoạn Thảo Trường Đao R1 (258.9% ER ngoài trận rất đẹp).",
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
    targets: "✓ Đã chốt: Bàn Nham Kết Lục Lv.90 R1 (70.1% CR / 231.4% CD · 1,800 ATK)",
    steps: [
      "✓ Đã lắp lại Bàn Nham Kết Lục Lv.90 R1 (CR nhảy 26.0% → 70.1%) & chuyển Kiếm Bến Tàu sang Nilou.",
      "Giữ bộ 2pc Giác Đấu + 2pc Như Sấm (tùy chọn farm/ép Tráp 4pc Như Sấm về sau nếu muốn dùng lâu dài).",
    ],
  },
  Furina: {
    mainStats: "Cát HP% (hoặc ER% khi đi 1 Thủy) · Ly HP% · Nón STBK/CR%",
    targets: "✓ Đã Lv.90 · 4/9/9 · Răng Nanh R5 (39,678 HP · 46.4/180.6 · 151.8% ER) · Mục tiêu: Q10 & 4pc Đoàn Kịch",
    steps: [
      "✓ Đã nâng Furina lên Lv.90 (39,678 HP, 46.4% CR) và nâng thiên phú lên 4/9/9.",
      "Vương miện Q (9 → 10) vào T3/T6/CN để tối đa % tăng sát thương cả đội.",
      "Farm dần bộ 4pc Đoàn Kịch Hoàng Kim chung bí cảnh với Neuvillette (hiện vẫn đeo 4pc Thiên Nham; giữ Cát ER dự phòng nếu đi 1 Thủy).",
    ],
  },
  Nilou: {
    mainStats: "Cát HP% · Ly HP% · Nón HP% (substat ưu tiên HP%, EM, ER%)",
    targets: "✓ Đã đeo Kiếm Bến Tàu (56,168 HP) · Mục tiêu: Bến Tàu Lv.90 · 68,000+ HP (2+2 HP%)",
    steps: [
      "✓ Đã chuyển Kiếm Gỗ R2 → Bennett và gắn Kiếm Bến Tàu Lv.60 (HP nhảy 51.5k → 56.2k).",
      "Nâng Kiếm Bến Tàu từ Lv.60 → Lv.90 để lấy trọn 41.3% HP.",
      "Đổi dần 4pc Giấc Mộng Hoàng Kim sang 2pc Thiên Nham + 2pc Vầng Sáng Vourukasha (HP%+HP%) để chạm mốc 68k+ HP.",
    ],
  },
  Yelan: {
    mainStats: "Cát HP% · Ly ST Thủy · Nón CR/CD",
    targets: "✓ Đã chốt đẹp: Cung Tây Phong Lv.90 R5 · 202.0% ER · 68.9/152.6 · 28.8k HP",
    steps: [
      "✓ Đã nâng Cung Tây Phong R5 lên Lv.90 (ER chạm mốc 202.0%).",
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
    mainStats: "Cát ER%/EM · Ly EM/Thủy · Nón CR% (ưu tiên nổ Tây Phong)",
    targets: "✓ Đã Lv.80 C1 · Tây Phong R5 (191.6% ER) · Mục tiêu: ≥60% CR nổ Tây Phong · Dừng nâng TP",
    steps: [
      "Đổi Nón STBK 62.2% → Nón CR% (kéo 40.0% → ~60–70% CR) để Đại Kiếm Tây Phong R5 tạo hạt ổn định (0 nhựa).",
      "Giữ nguyên Lv.80 C1 · 1/5/4 làm slot Thủy dự bị cho Nhà Hát; tùy chọn lắp 4pc Giáo Quan (+200 EM cùng C1) khi đi đội phản ứng.",
      "Tạm dừng tốn nhựa nâng thiên phú & farm 4pc Khúc Ca Trăng Lụa cho tới khi roll thêm ít nhất 1 nhân vật Nod-Krai 5★ (ví dụ Columbina).",
    ],
  },
  Jean: {
    mainStats: "Cát ATK%/ER% · Ly ATK% · Nón CR% hoặc Tăng Trị Liệu",
    targets: "✓ Đã chuyển sang Ống Đồng (189.3% ER) · Mục tiêu: Ống Đồng Lv.90 · 4pc Bóng Hình · Ly ATK% +20",
    steps: [
      "✓ Đã nhận Ống Đồng Fleuve Cendre Lv.50 R2 & trả Tây Phong Kiếm R5 cho Layla (179.2% ER).",
      "Nâng Ống Đồng Lv.50 → Lv.90 (lấy 45.9% ER nền → tổng >205% ER) & nâng Ly ATK% +0 → +20.",
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
    targets: "✓ Đã vương miện Q10 (6/10/10 · 1,980 ATK · 142.7% ER) · Cần đẩy lại CR 56.7% → ≥70%",
    steps: [
      "✓ Đã nâng Q lên Lv.10 (6/10/10 · Kiếm Li Cốt R1) và đổi sang 2 Phiến Đá + 2 Giác Đấu (ER tăng đẹp 142.7%).",
      "Chú ý CR vừa tụt từ 80.0% → 56.7% do đổi mảnh — kiểm tra lại Nón CR% / dòng phụ để giữ ≥70% CR ổn định phát bắn E.",
      "Dài hạn: farm 4pc Tiếng Đêm Trong Rừng Vang sau khi xong Thợ Săn & Đoàn Kịch cho Neuvillette/Furina.",
    ],
  },
  Mitya: {
    mainStats: "Cát EM · Ly EM hoặc ST Lôi · Nón CR/CD",
    targets: "✓ Đã lên Lv.80 · Trấn Lv.70 (2/3/4 · 516 EM · 67.2/213.6) · Mục tiêu: Lv.90 & Trấn Lv.90",
    steps: [
      "✓ Đã kéo Mitya lên Lv.80 & Trấn Lv.70 (CD tăng lên 213.6%) — nâng nốt Ly EM từ Lv.0 → Lv.20.",
      "Kéo tiếp Trấn 5★ Sắc Lệnh Tinh Tú Lv.70 → Lv.90 và Mitya Lv.80 → Lv.90 kèm thiên phú (sách Charity tại Snezhnaya).",
      "Farm chung bộ 4pc Ảo Tưởng Vụn Vỡ cho cả Mitya lẫn Yae Miko (Ma Nữ); ghép cùng Rosaria C6 / NLH Băng (sau nâng lên Odette) & Valeriy C3.",
    ],
  },
  Valeriy: {
    mainStats: "Cát ATK% · Ly ATK% · Nón ATK%",
    targets: "✓ C3 (đã mở C2 +100 EM) · Isshin Lv.80 · Build gọn Lv.70/80 sau khi xong Mitya 90",
    steps: [
      "✓ C3 đã mở buff +100 EM toàn đội (C2) & khiên giữ nhịp Trọng Kích Mitya; gắn sẵn Kagotsurube Isshin Lv.80 R1 không cần tốn Phôi.",
      "Làm SAU khi kéo xong Mitya Lv.90 + Trấn 90: nâng Valeriy gọn lên Lv.70/80, ưu tiên E Lv.6–8, không cần kéo tối đa vì trần thật nằm ở C6.",
      "Lắp 3 món chính ATK% trên bộ 4pc Nghi Thức Tông Thất Cổ (hoặc 4pc Trái Tim Lửa Nung / 2+2 ATK%).",
    ],
  },
  Alyosha: {
    mainStats: "Cát ER%/ATK% · Ly ATK% · Nón ATK%/Trị Liệu",
    targets: "✓ Đã gắn Mũi Nhọn Của Gió Lv.70 R5 (hoặc Xương Sống 5★ Lv.90 đang rảnh)",
    steps: [
      "✓ Đã gắn Mũi Nhọn Của Gió Lv.70 R5 (+ATK% & EM); khi cần nhiều Nạp hơn có thể chuyển Xương Sống Thiên Không Lv.90 (Yaoyao vừa trả vào kho).",
      "Ưu tiên nâng Thiên phú E → Q; đóng vai hồi máu + buffer ATK cho đội Tinh-Siêu Dẫn khi thay Valeriy.",
      "Lắp bộ 4pc Nghi Thức Tông Thất Cổ (hoặc Heart of the Furnace nếu team đã có Tông Thất).",
    ],
  },
  "Hu Tao": {
    mainStats: "Cát HP% (4pc Hồi Ức) hoặc Cát EM (4pc Thợ Săn + Furina) · Ly ST Hỏa · Nón CR% (Hồi Ức) / STBK (Thợ Săn)",
    targets: "Hiện tại: 4pc Hồi Ức (54.3/221.3 · 117 EM · 9/10/10) · Chưa farm 4pc Thợ Săn",
    steps: [
      "Nếu giữ đi đội truyền thống (Yelan + Xingqiu + Zhongli): đổi Nón STBK → Nón CR% (kéo 54.3% → 70%+) để giảm hụt crit Trọng Kích.",
      "Nâng Đánh Thường 9 → 10 vì Trọng Kích và Đánh Đáp đều ăn theo kỹ năng này.",
      "Khi đi cặp Furina + Yelan + Xianyun: có thể đánh tạm bằng bộ 4pc Hồi Ức ngay; sau này farm Fontaine cho Neuvillette/Furina thì giữ mảnh 4pc Thợ Săn dư + Cát EM (giữ CR trước buff ≤64% trên Hòa Phác Diên).",
    ],
  },
  Xianyun: {
    mainStats: "Cát ER% (160–180% ER) · Ly ATK% · Nón ATK% (4pc Bóng Hình Màu Xanh)",
    targets: "Hiện tại: 2,647 ATK · 122.7% ER · Quyển Thiên Không Lv.90 · Cần kéo ER ≥160% & 3,000+ ATK",
    steps: [
      "Đổi ngay Cát ATK% sang Cát Hiệu Quả Nạp (ER%) để kéo 122.7% → 160–180% ER, bảo đảm bật Nộ đều mỗi vòng.",
      "Đổi Ly ST Phong & Nón Tăng Trị Liệu sang Ly ATK% + Nón ATK% vì cả buff Đánh Đáp (A4) và hồi máu toàn đội đều scale theo ATK.",
      "Giữ nguyên Quyển Thiên Không Lv.90 R1 và bộ 4pc Bóng Hình Màu Xanh (-40% kháng Thủy/Hỏa).",
    ],
  },
  Illuga: {
    mainStats: "Cát ER%/EM · Ly EM · Nón EM",
    targets: "4★ Nham Nod-Krai (mới Lv.1 C0) · Mục tiêu khi build: ≥180% ER · Full EM · Tai Ương / Tây Phong",
    steps: [
      "Hỗ trợ Nguyệt-Kết Tinh (Lunar-Crystallize) từ Nod-Krai: buff E/Q cộng sát thương phẳng cho đội Nham-Thủy theo Tinh Thông Nguyên Tố (EM).",
      "Đang Lv.1 C0 — ưu tiên giữ nhựa cho Fontaine & Mitya + Yae trước; chưa cần nâng vội.",
      "Về sau có thể ghép với Navia + Aino (+ Zhongli/Columbina) để mở Nguyệt Triệu cấp 2 và kích bộ 4pc Khúc Ca Trăng Lụa.",
    ],
  },
};

const SURPLUS_WEAPONS = [
  {
    id: "s_widsith",
    from: null,
    fromLabel: "✓ Đã lắp",
    customWeapon: { name: "Chương Nhạc Lang Thang", rarity: 4, level: 90, refinement: 5, substat_name: "STBK", substat_val: "55.1%", icon: "https://gi.yatta.moe/assets/UI/UI_EquipIcon_Catalyst_Troupe.png" },
    to: "Mona",
    shortAction: "✓ Đã gắn cho Mona (204.6% CD)",
    action: "✓ Đã gắn cho Mona Nuke Nộ",
    plan: "✓ Đã lắp Chương Nhạc Lv.90 R5 cho Mona (STBK nhảy 149.5% → 204.6%).",
  },
  {
    id: "s_fish",
    from: "Xinyan",
    to: "Beidou",
    shortAction: "✓ Đã đưa Beidou (1,559 ATK)",
    action: "✓ Đã chuyển sang Beidou Lv.80 C6",
    plan: "✓ Đã tháo kiếm 1★ trên Beidou và gắn Vua Biển Hàng Hiệu Lv.80 R5 (ATK 486 → 1,559).",
  },
  {
    id: "s_fading",
    from: "Collei",
    to: "Kujou Sara",
    shortAction: "✓ Đã đưa Sara (166.8% ER)",
    action: "✓ Đã chuyển Lạc Hà R5 → Kujou Sara",
    plan: "✓ Sara đã nhận Lạc Hà Lv.90 R5 (Base ATK 565 · ER nhảy 136.2% → 166.8%).",
  },
  {
    id: "s_rust",
    from: "Kujou Sara",
    to: "Collei",
    shortAction: "✓ Collei cầm tạm (hoặc đổi Tây Phong)",
    action: "Collei đang cầm tạm Cung Rỉ Sét R4",
    plan: "Collei đang giữ tạm Cung Rỉ Sét R4 sau khi nhường Lạc Hà cho Sara (có thể đổi cung ER sau nếu đi team Sum Suê).",
  },
  {
    id: "s_festering",
    from: "Bennett",
    to: "Furina",
    shortAction: "✓ Đã chuyển Furina (151.8% ER)",
    action: "✓ Đã chuyển Răng Nanh Rỉ Sét R5 → Furina",
    plan: "✓ Đã hoàn tất: Furina cầm Răng Nanh R5 (+32% ST E, +12% CR E, ER lên 151.8%).",
  },
  {
    id: "s_sapwood",
    from: "Nilou",
    to: "Bennett",
    shortAction: "✓ Đã chuyển Bennett (565 Base)",
    action: "✓ Đã chuyển Kiếm Gỗ R2 → Bennett",
    plan: "✓ Bennett đã nhận Kiếm Gỗ Lv.90 R2 (565 Base ATK · ER vẫn dư 249.3%).",
  },
  {
    id: "s_dockhand",
    from: "Keqing",
    to: "Nilou",
    shortAction: "✓ Đã trả Bàn Nham · Bến Tàu → Nilou",
    action: "✓ Đã trả Bàn Nham Keqing & Bến Tàu → Nilou",
    plan: "✓ Keqing đã nhận lại Bàn Nham Lv.90 R1 (70.1% CR) & Nilou nhận Kiếm Bến Tàu (56.2k HP, kéo kiếm 60 → 90).",
  },
  {
    id: "s_fleuve",
    from: "Furina",
    to: "Jean",
    shortAction: "✓ Đã chuyển Jean (kéo Lv.50 → 90)",
    action: "✓ Đã chuyển Ống Đồng → Jean",
    plan: "✓ Jean đã nhận Ống Đồng Lv.50 R2 (189.3% ER) — kéo lên Lv.90 để dư >205% ER.",
  },
  {
    id: "s_favsword",
    from: "Jean",
    to: "Layla",
    shortAction: "✓ Đã chuyển Layla (179.2% ER)",
    action: "✓ Đã chuyển Tây Phong Kiếm R5 → Layla",
    plan: "✓ Layla đã nhận Tây Phong Kiếm Lv.80 R5 (ER nhảy 123.3% → 179.2% · 34.9k HP).",
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
    extraTarget: "Tùy chọn (Valeriy đã có Isshin)",
    shortWhy: "Valeriy đã gắn Isshin Lv.80 · rèn sau nếu thiếu cây ATK%",
    why: "Valeriy đã gắn Kagotsurube Isshin Lv.80 nên chưa cần tốn Phôi ngay; rèn sau nếu muốn dự bị cho Ayaka hoặc tăng Base ATK nhẹ.",
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
  { key: 1, short: "T2", title: "Thứ 2", chars: ["Furina", "Mitya", "Chiori"], resinChips: ["3× Boss Tuần", "Narwhal (Furina)", "Boss Snezhnaya (Mitya)"], extra: "Đặt lịch tuần · Nhặt đặc sản hồi 48h" },
  { key: 2, short: "T3", title: "Thứ 3", chars: ["Furina", "Nilou", "Neuvillette"], resinChips: ["Sách Chính Nghĩa (Furina Q10)", "Kiếm Bến Tàu 60→90 (Nilou)"], extra: "Dư nhựa → Bí cảnh Tội Lỗi (Fontaine)" },
  { key: 3, short: "T4", title: "Thứ 4", chars: ["Chiori", "Mitya", "Neuvillette"], resinChips: ["Sách Ánh Sáng (Chiori E)", "Trấn Mitya 70→90", "TDV Fontaine"], extra: "Ép Tráp: 4pc Tông Thất / Dấu Ấn / Tiếng Đêm" },
  { key: 4, short: "T5", title: "Thứ 5", chars: ["Neuvillette", "Furina", "Fischl"], resinChips: ["Bí cảnh Tội Lỗi (Fontaine)", "4pc Thợ Săn & Đoàn Kịch"], extra: "1 bí cảnh nuôi chung Neuv + Furina + Fischl" },
  { key: 5, short: "T6", title: "Thứ 6", chars: ["Furina", "Neuvillette", "Nilou"], resinChips: ["Sách Chính Nghĩa (Furina Q10)", "Chốt Bến Tàu 90 / TDV Fontaine"], extra: "Chốt Beidou / Gorou / Ningguang trước hạn Nhà Hát 01/12" },
  { key: 6, short: "T7", title: "Thứ 7", chars: ["Chiori", "Mitya", "Yae Miko"], resinChips: ["Sách Ánh Sáng (Chiori E)", "4pc Ảo Tưởng (Mitya + Yae)"], extra: "Leo lại La Hoàn 11-3 & 12" },
  { key: 0, short: "CN", title: "Chủ Nhật", chars: ["Mitya", "Yae Miko", "Valeriy"], resinChips: ["Sách Charity (Mitya)", "4pc Ảo Tưởng (Mitya + Yae)"], extra: "Kéo Mitya Lv.90 + Trấn 90 trước, Valeriy làm sau" },
];

const MODES = {
  teams: {
    label: "Đội Hình",
    items: [
      {
        title: "Neuvillette + Furina",
        sub: "✓ Furina Lv.90 · Răng Nanh R5 · 67k → 92k (S+)",
        note: "Chung 1 bí cảnh Fontaine · Furina đã Lv.90 (4/9/9), còn Q9→10 & farm Thợ Săn / Đoàn Kịch (tùy chọn kẹp Jean C3/Xianyun nếu cần hồi máu toàn đội)",
        status: "ok",
        members: ["Neuvillette", "Furina", "Kaedehara Kazuha", "Zhongli"],
        power: {
          cur: 67, proj: 92, curTier: "A+", projTier: "S+",
          role: "AOE · Đơn", tags: ["st", "aoe", "upgrade"], badge: "Ảo Cảnh 34s",
          short: "Neuv+Furina", labelPos: "left", cost: "1 bí cảnh",
          chips: ["Neuv 4pc Thợ Săn", "Furina Q9→10", "4pc Đoàn Kịch"],
          upgrade: "Neuv 4pc Thợ Săn + Furina Q9→10 / 4pc Đoàn Kịch (đã Lv.90 & Răng Nanh R5 · chung 1 bí cảnh Fontaine)",
        },
      },
      {
        title: "Raiden + Furina",
        sub: "✓ Đã bổ sung Healer Jean C3 · 64k → 81k (S)",
        note: "Thêm Healer Jean C3 kích Náo Nhiệt Furina C0 + 4pc VV (hoặc thay bằng Xianyun) · Yelan đã Tây Phong 90",
        status: "ok",
        members: ["Raiden Shogun", "Furina", "Yelan", "Jean"],
        power: {
          cur: 64, proj: 81, curTier: "A+", projTier: "S",
          role: "Đơn mục tiêu", tags: ["st", "upgrade"], badge: "Ảo Cảnh 56s",
          short: "Raiden+Furina", labelPos: "top", cost: "Trung bình",
          chips: ["Furina Q9→10 · 4pc Đoàn Kịch", "Jean 4pc Bóng Hình + Ống Đồng 90"],
          upgrade: "Furina Q9→10 + 4pc Đoàn Kịch · Jean C3 lắp đủ 4pc Bóng Hình + kéo Ống Đồng 90 (✓ Yelan Tây Phong 90)",
        },
      },
      {
        title: "Raiden National",
        sub: "✓ Kiếm Gỗ · Tây Phong 90 · 63k → 68k (A+)",
        note: "Raiden 69.9/132.4 · Bennett Kiếm Gỗ · Yelan đã Tây Phong 90 — Sẵn sàng 100%",
        status: "ok",
        members: ["Raiden Shogun", "Bennett", "Xiangling", "Yelan"],
        power: {
          cur: 63, proj: 68, curTier: "A+", projTier: "A+",
          role: "Đơn mục tiêu", tags: ["st"], badge: "Sẵn sàng 100%",
          short: "National", labelPos: "right", cost: "Thấp",
          chips: ["Tối ưu nhẹ Crit XL"],
          upgrade: "Tối ưu nhẹ Crit Xiangling (✓ Bennett Kiếm Gỗ · ✓ Yelan Tây Phong Lv.90 R5)",
        },
      },
      {
        title: "Keqing Tăng Cường",
        sub: "✓ Bàn Nham 70/231 · 60k → 68k (A+)",
        note: "Đã trả Bàn Nham (1,800 ATK · 70.1/231.4) · Còn đổi Nón CR% cho Yae Ma Nữ",
        status: "ok",
        members: ["Keqing", "Nahida", "Yae Miko", "Kaedehara Kazuha"],
        power: {
          cur: 60, proj: 68, curTier: "A+", projTier: "A+",
          role: "Đơn · AOE nhanh", tags: ["st", "aoe"], badge: "✓ Đã trả Bàn Nham",
          short: "Keqing", labelPos: "top", cost: "0 Nhựa",
          chips: ["Yae Nón CR%", "Tùy chọn 4pc Như Sấm"],
          upgrade: "Đã trả Bàn Nham (CR 26% → 70.1%) · Yae (✓ Ma Nữ) đổi Nón CR%",
        },
      },
      {
        title: "Ayaka Đóng Băng",
        sub: "Sẵn sàng · 54k → 67k (A+)",
        note: "Ayaka 10/10/10 · ~95% CR thực · Mona đã gắn Chương Nhạc 204.6% CD",
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
        sub: "2 Thủy An Toàn · 59k → 72k (S)",
        note: "Bản không tranh Furina · Yelan đã Tây Phong 90 · Đổi Nón CR% Hu Tao (54%→70%+) & nâng Đánh Thường 9→10",
        status: "ok",
        members: ["Hu Tao", "Yelan", "Xingqiu", "Zhongli"],
        power: {
          cur: 59, proj: 72, curTier: "A+", projTier: "S",
          role: "Đơn mục tiêu", tags: ["st"], badge: "Không tranh Furina",
          short: "Hu Tao 2 Thủy", labelPos: "right", cost: "Thấp",
          chips: ["Hu Tao CR 70%+", "Đánh Thường 9→10"],
          upgrade: "Đổi Nón CR% cho Hu Tao (54.3%→70%+) · Nâng Đánh Thường 9→10 (✓ Yelan Tây Phong 90)",
        },
      },
      {
        title: "Hu Tao Đánh Đáp",
        sub: "Tạm 4pc Hồi Ức · 62k → 82k (S)",
        note: "Chưa farm Thợ Săn vẫn đánh tạm 4pc Hồi Ức được · Chỉnh Xianyun 160%+ ER & farm ké 4pc Thợ Săn (Fontaine) sau",
        status: "warn",
        members: ["Hu Tao", "Furina", "Yelan", "Xianyun"],
        power: {
          cur: 62, proj: 82, curTier: "A+", projTier: "S",
          role: "Đơn · Đánh Đáp", tags: ["st", "upgrade"], badge: "Trần Hu Tao C0",
          short: "Hu Tao Plunge", labelPos: "right", cost: "1 bí cảnh",
          chips: ["Xianyun Cát ER (160%+)", "Farm ké 4pc Thợ Săn + Cát EM", "Furina Q9→10 · 4pc Đoàn Kịch"],
          upgrade: "Chỉnh 0 nhựa Xianyun sang Cát ER (160%+) + Ly/Nón ATK% · Farm ké 4pc Thợ Săn + Cát EM khi farm Fontaine cho Neuv/Furina",
        },
      },
      {
        title: "Yoimiya Đánh Thường",
        sub: "Sẵn sàng · 55k → 62k (A)",
        note: "Yoimiya 74/203 · Yun Jin C6 (2,160 DEF) · Yelan đã Tây Phong 90",
        status: "ok",
        members: ["Yoimiya", "Yelan", "Yun Jin", "Zhongli"],
        power: {
          cur: 55, proj: 62, curTier: "A", projTier: "A",
          role: "Boss bay · Đơn", tags: ["st"], badge: "Sẵn sàng",
          short: "Yoimiya", labelPos: "right", cost: "Thấp",
          chips: ["Bổ sung ~100 EM"],
          upgrade: "Bổ sung ~100 EM cho Yoimiya để tối ưu Bốc Hơi (✓ Yelan Tây Phong 90)",
        },
      },
      {
        title: "Ganyu Tan Chảy",
        sub: "✓ Kiếm Gỗ Bennett · 54k → 60k (A)",
        note: "Bennett đã gắn Kiếm Gỗ · Đổi Cát EM (~220+) cho Ganyu",
        status: "ok",
        members: ["Ganyu", "Bennett", "Xiangling", "Zhongli"],
        power: {
          cur: 54, proj: 60, curTier: "A", projTier: "A",
          role: "Đơn · Nuke", tags: ["st"], badge: "Sẵn sàng",
          short: "Ganyu", labelPos: "left", cost: "Thấp",
          chips: ["Đổi Cát EM (~220+)"],
          upgrade: "Đổi Cát EM (~220+ EM) cho Ganyu (Bennett đã chuyển Kiếm Gỗ 565 Base ATK)",
        },
      },
      {
        title: "Nilou Sum Suê",
        sub: "✓ Bến Tàu 56.2k HP · 60k → 70k (S)",
        note: "Đã gắn Kiếm Bến Tàu · Nâng kiếm Lv.90 & đổi 2+2 HP% (68k+ HP)",
        status: "ok",
        members: ["Nilou", "Nahida", "Sangonomiya Kokomi", "Collei"],
        power: {
          cur: 60, proj: 70, curTier: "A+", projTier: "S",
          role: "Vua AOE", tags: ["aoe", "upgrade"], badge: "AOE 78k+",
          short: "Nilou", labelPos: "top", cost: "Thấp",
          chips: ["Bến Tàu 60→90", "Đổi 2+2 HP%", "EM cho Kokomi"],
          upgrade: "Nâng Kiếm Bến Tàu 60→90 · Đổi Nilou sang 2pc+2pc HP% (56.2k → 68k+ HP)",
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
        sub: "✓ 6/10/10 · Zhongli C1 · 58k → 76k (S)",
        note: "Đổi Zhongli thay Chiori C0 (tránh thiếu Vật Tạo Nham mất 1 búp bê) · Đẩy lại CR Navia 56.7% → 70%+",
        status: "warn",
        members: ["Navia", "Zhongli", "Bennett", "Xiangling"],
        power: {
          cur: 58, proj: 76, curTier: "A+", projTier: "S",
          role: "Phá khiên · Đơn", tags: ["st", "upgrade"], badge: "12 Nửa 1",
          short: "Navia", labelPos: "left", cost: "Trung bình",
          chips: ["Navia CR 70%+", "4pc Tiếng Đêm (Tráp)"],
          upgrade: "Đẩy lại CR Navia (56.7% → 70%+) · Ép Tráp 4pc Tiếng Đêm (đã đổi Zhongli hỗ trợ ấn & trừ 20% kháng)",
        },
      },
      {
        title: "Mitya + Yae Tinh-Siêu Dẫn",
        sub: "✓ Mitya Lv.80 · Trấn 70 · 53k → 98k (S+)",
        note: "Mitya đã Lv.80 + Trấn Lv.70 (Valeriy Isshin 80) · Kéo 90 + 4pc Ảo Tưởng · Đổi Rosaria (hoặc NLH Băng 90) → Odette vượt 100k+",
        status: "warn",
        members: ["Mitya", "Yae Miko", "Rosaria", "Valeriy"],
        power: {
          cur: 53, proj: 98, curTier: "A", projTier: "S+",
          role: "Meta 7.2", tags: ["st", "aoe", "upgrade"], badge: "Trần #1 7.2",
          short: "Mitya+Yae", labelPos: "right", cost: "Cao",
          chips: ["Mitya 90 + Trấn 90", "Yae Nón CR% + 4pc Ảo Tưởng", "Valeriy Lv.80"],
          upgrade: "Mitya Lv.80→90 + Trấn 70→90 + Ly EM +20 · Yae (✓ Ma Nữ) đổi Nón CR% + 4pc Ảo Tưởng · Valeriy C3 Lv.80 (đổi Rosaria/NLH Băng → Odette vượt 100k+)",
        },
      },
    ],
  },
  abyss: {
    label: "La Hoàn",
    items: [
      { title: "12 · Nửa 1 — Navia", sub: "+75% Lunar-Crystallize", note: "Navia 6/10/10 + Zhongli kích đủ 2 búp bê Chiori C0 · Bennett cấp Hỏa Kết Tinh & buff ATK", status: "warn", members: ["Navia", "Zhongli", "Chiori", "Bennett"] },
      { title: "12 · Nửa 2 — Neuv + Furina", sub: "+200 EM · Ảo Cảnh 34s", note: "Furina đã Lv.90 Răng Nanh R5 — đội hình Ảo Cảnh 34s mạnh nhất hiện tại", status: "ok", members: ["Neuvillette", "Furina", "Kaedehara Kazuha", "Zhongli"] },
      { title: "12 · Nửa 2 — National", sub: "+200 EM · Wavebinder", note: "Raiden 69.9/132.4 + Bennett Kiếm Gỗ + Yelan Tây Phong 90 sẵn sàng đánh ngay", status: "ok", members: ["Raiden Shogun", "Bennett", "Xiangling", "Yelan"] },
      { title: "12 · Nửa 1 — Eula", sub: "12-2 Frostnight Herra", note: "Rosaria C6 bù CR · Có thể thay Raiden bằng Yae Ma Nữ", status: "warn", members: ["Eula", "Raiden Shogun", "Rosaria", "Zhongli"] },
    ],
  },
  theater: {
    label: "Nhà Hát",
    items: [
      { title: "Màn 3 · Terrorshroom", sub: "Kích Lôi nhanh", note: "✓ Keqing vừa nhận lại Bàn Nham (70/231) gánh mượt", status: "ok", members: ["Keqing", "Fischl", "Xingqiu", "Barbara"] },
      { title: "Màn 6 · Nightmares", sub: "Phá khiên Thủy + Lôi", note: "Ayato · Aino Lv.80 · Yae Ma Nữ giữ trụ 24s rất mượt", status: "ok", members: ["Kamisato Ayato", "Yae Miko", "Yelan", "Kuki Shinobu"] },
      { title: "Màn 8 · Samachurl", sub: "Giữ Nham + Thủy", note: "✓ Navia 6/10/10 gánh · Beidou đã có Vua Biển · Còn Gorou & Ningguang", status: "warn", members: ["Navia", "Zhongli", "Chiori", "Xingqiu"] },
      { title: "Màn 10 · Moonfly", sub: "Cần Healer + Buff mạnh", note: "✓ Furina Lv.90 Răng Nanh R5 (39.7k HP) · Mượn thêm Xilonen từ bạn", status: "ok", members: ["Neuvillette", "Furina", "Raiden Shogun", "Sangonomiya Kokomi"] },
    ],
  },
  meta: {
    label: "Meta 7.2",
    items: [
      { title: "Build Ngay (Vùng Mở)", sub: "Fontaine 64% · Inazuma 100%", note: "✓ Furina đã lên Lv.90 (4/9/9) · Farm bí cảnh Tội Lỗi (Thợ Săn + Đoàn Kịch) · Aino dừng ở Lv.80", status: "ok", members: ["Furina", "Neuvillette", "Chiori", "Nilou"] },
      { title: "Snezhnaya (10%)", sub: "Lõi Tinh-Siêu Dẫn 7.2", note: "✓ Mitya Lv.80 + Trấn 70 · Valeriy Isshin Lv.80 · Alyosha Mũi Nhọn Lv.70 · Mới roll Illuga C0 (chưa cần nâng vội)", status: "warn", members: ["Mitya", "Yae Miko", "Valeriy", "Alyosha"] },
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
  Aino: { role: "Support Nod-Krai (Tây Phong)", group: "core", stats: [{ key: "Hiệu Quả Nạp Nguyên Tố", label: "ER", target: 185, unit: "%" }, { key: "Tỷ Lệ Bạo Kích", label: "CR", target: 60, unit: "%" }, { key: "Tinh Thông Nguyên Tố", label: "EM", target: 400, unit: "" }] },
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
  view: "tracker",      // tracker | bench | artifacts | stage | power | week
  trackerTab: "chars",  // chars | now | farm | weapons
  filter: "pending",    // pending | all
  benchGroup: "all",    // all | core | dps | support
  benchStatus: "all",   // all | bad | warn | ok
  benchSort: "score_asc", // score_asc | score_desc | level
  artTab: "swap",       // swap | audit | domains | vault
  artSwapFilter: "all", // all | same | offset | fix
  artAuditFilter: "issues", // issues | core
  artVaultMode: "all",  // all | go | reroll | four
  artSlot: "all",       // all | Hoa | Lông | Cát | Ly | Nón
  artSet: "all",
  artChar: "all",
  artSort: "cv_desc",   // cv_desc | rv_desc | rolls_desc | lvl_asc
  artLimit: 36,
  mode: "teams",
  index: 0,
  powerTab: "chart",    // chart | matrix | vs
  powerSort: "proj",    // proj | cur | gain
  powerTag: "all",      // all | st | aoe | upgrade
  matrixActive: 0,
  vsA: 0,
  vsB: 12,
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

function formatCrawlDate(withTime = false) {
  const raw = APP.data?.crawled_at || "";
  const m = String(raw).match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
  if (!m) return "Mới nhất";
  return withTime ? `${m[3]}/${m[2]} ${m[4]}:${m[5]}` : `${m[3]}/${m[2]}`;
}

function regionPct(name) {
  const list = APP.data?.world_explorations || [];
  const q = String(name || "").toLowerCase();
  const r = list.find((it) => String(it.name || "").toLowerCase().includes(q));
  return r ? Math.round(Number(r.exploration_percentage || 0) / 10) : 0;
}

function parseTalents(c) {
  return String(c?.talent_levels || "1/1/1")
    .split("/")
    .slice(0, 3)
    .map((v) => Number(v) || 1);
}

function dpsToTier(dps) {
  if (dps >= 90) return "S+";
  if (dps >= 70) return "S";
  if (dps >= 58) return "A+";
  if (dps >= 50) return "A";
  if (dps >= 46) return "B+";
  return "B";
}

function evalTheaterStatus() {
  const chars = APP.data?.characters || [];
  const elig = chars.filter(
    (c) => c.level >= 70 && (["Hydro", "Electro", "Geo"].includes(c.element) || c.name === "Qiqi")
  );
  const needGear = new Set();
  elig.forEach((c) => {
    const wRar = Number(c.weapon?.rarity || 1);
    const arts = c.artifacts || [];
    const hasZeroArt = arts.some((a) => Number(a.level || 0) === 0);
    const b = evalCharBenchmark(c.name);
    if (wRar <= 2 || arts.length < 5 || hasZeroArt || (b && b.score < 70)) {
      needGear.add(c.name);
    }
  });
  return { elig, needGear };
}

function getActionShortFix(a, c) {
  if (!a) return "";
  if (!c) return a.shortFix || a.fixTitle;
  const lv = Number(c.level || 1);
  const wLv = Number(c.weapon?.level || 1);
  const wRar = Number(c.weapon?.rarity || 1);
  const [na, e, q] = parseTalents(c);
  const sets = c.artifact_sets || "";
  const arts = c.artifacts || [];
  const zeroArts = arts.filter((ar) => Number(ar.level || 0) === 0).length;
  const cr = parseStatNum(stat(c, "Tỷ Lệ Bạo Kích"));
  const hp = parseStatNum(stat(c, "Giới Hạn HP"));
  const em = parseStatNum(stat(c, "Tinh Thông Nguyên Tố"));
  const er = parseStatNum(stat(c, "Hiệu Quả Nạp Nguyên Tố"));

  switch (a.name) {
    case "Furina": {
      const hasSet = /4pc\s+Đoàn Kịch/i.test(sets);
      if (lv >= 90 && q >= 10 && hasSet) return "✓ Đã hoàn thiện Lv.90 Q10 · 4pc Đoàn Kịch";
      const parts = [];
      if (lv < 90) parts.push(`Kéo Lv.${lv}→90`);
      if (q < 10) parts.push(`Q${q}→10`);
      if (!hasSet) parts.push("4pc Đoàn Kịch");
      return `✓ Lv.${lv} ${na}/${e}/${q} · Còn ${parts.join(" & ")}`;
    }
    case "Neuvillette":
      return /4pc\s+Thợ Săn/i.test(sets)
        ? "✓ Đã đủ 4pc Thợ Săn Marechaussee"
        : `Farm 4pc Thợ Săn (${cr.toFixed(1)}% CR trước buff)`;
    case "Chiori": {
      const doneE = e >= 8;
      const doneAll = doneE && zeroArts === 0 && cr >= 65;
      if (doneAll) return "✓ Đã xong Chiori (E8+ · Đủ Crit)";
      const parts = [];
      if (!doneE) parts.push(`Nâng E ${e}→8–9`);
      parts.push("Ly Nham +20 / STBK");
      return parts.join(" · ");
    }
    case "Aino":
      return cr < 55
        ? `Đổi Nón CR% nổ Tây Phong (đang ${cr.toFixed(0)}%) · Dừng farm`
        : "✓ Đã ổn định Nhà Hát · Chờ đồng đội Nod-Krai";
    case "Jean": {
      const hasVV = /4pc\s+Bóng Hình/i.test(sets);
      if (wLv >= 90 && hasVV && zeroArts === 0) return "✓ Đã xong Jean 90 · 4pc Bóng Hình";
      return `Ống Đồng Lv.${wLv}→90 · ${hasVV ? "✓ VV" : "Ép 4pc Bóng Hình"}`;
    }
    case "Venti":
      return zeroArts > 0 ? `Nâng ${zeroArts} món TDV +0 → +20` : "✓ Đã cường hóa đủ 5 món TDV";
    case "Navia":
      return cr < 70 ? `✓ ${na}/${e}/${q} · Đẩy lại CR ${cr.toFixed(1)}% → 70%+` : `✓ ${na}/${e}/${q} · Đã đủ ${cr.toFixed(1)}% CR`;
    case "Nilou": {
      const hasSet = /2pc\s+Thiên Nham.*2pc\s+Vầng Sáng|2pc\s+Vầng Sáng.*2pc\s+Thiên Nham/i.test(sets);
      if (wLv >= 90 && hasSet && hp >= 68000) return `✓ Đã hoàn thiện Nilou (${fmtBenchVal(hp, "")} HP)`;
      const todo = [];
      if (wLv < 90) todo.push(`Bến Tàu ${wLv}→90`);
      if (!hasSet) todo.push("2+2 HP%");
      return `✓ ${(hp / 1000).toFixed(1)}k HP · Còn ${todo.join(" & ")}`;
    }
    case "Yelan":
      return wLv >= 90 ? `✓ Tây Phong 90 (${er.toFixed(1)}% ER)` : `Nâng Cung Tây Phong Lv.${wLv} → 90`;
    case "Ningguang":
      return cr < 55 ? `Ly Nham +20 · Đổi Nón CR% (đang ${cr.toFixed(1)}%)` : "✓ Đã đủ CR · Sẵn sàng Nhà Hát";
    case "Beidou":
      return arts.length < 5 || er < 155
        ? `✓ ${c.weapon?.name || "Vua Biển"} · Đủ 5 TDV (ER ${er.toFixed(0)}%)`
        : "✓ Đã đủ đồ đi Nhà Hát";
    case "Fischl":
      return cr < 55 ? `Đổi Nón CR% (đang ${cr.toFixed(1)}% CR)` : "✓ Đã ổn Crit · Tùy chọn 4pc Đoàn Kịch";
    case "Chevreuse":
      return hp < 38000 ? `Đổi 3 món HP% · Kéo Lv.${lv}→80 (${(hp / 1000).toFixed(1)}k HP)` : `✓ Đã chạm ${(hp / 1000).toFixed(1)}k HP`;
    case "Kuki Shinobu":
      return em < 800 || lv < 90 ? `Đổi 3 món EM (${Math.round(em)}) · Kéo Lv.${lv}→90` : `✓ Đã đạt ${Math.round(em)} EM Lv.${lv}`;
    case "Yae Miko":
      return /4pc\s+Ảo Tưởng/i.test(sets) && cr >= 70
        ? "✓ Yae Ma Nữ · 4pc Ảo Tưởng"
        : cr < 68
          ? `Đổi Nón CR% (${cr.toFixed(1)}%→~75%)`
          : "Farm 4pc Ảo Tưởng chung Mitya";
    case "Gorou":
      return wRar <= 2 || arts.length < 5 ? "Bỏ cung 1★ · Lắp cung Nạp + đủ 5 TDV" : "✓ Đã đủ đồ dự bị Nham";
    case "Mitya": {
      const hasSet = /4pc\s+Ảo Tưởng/i.test(sets);
      if (lv >= 90 && wLv >= 90 && zeroArts === 0 && hasSet) return "✓ Đã hoàn thiện Mitya Lv.90";
      const todo = [];
      if (zeroArts > 0) todo.push("Ly EM +20");
      if (lv < 90 || wLv < 90) todo.push(`Lv.${lv}/VK ${wLv}→90`);
      if (!hasSet) todo.push("4pc Ảo Tưởng");
      return todo.join(" · ");
    }
    case "Valeriy":
      return lv < 80 ? `✓ ${c.weapon?.name || "VK"} Lv.${wLv} · Build gọn Lv.70/80 (sau Mitya)` : `✓ Đã Lv.${lv} · Tối ưu TDV ATK%`;
    case "Alyosha":
      return lv < 80 ? `✓ ${c.weapon?.name || "VK"} Lv.${wLv} · Kéo Lv.${lv}→80` : `✓ Đã Lv.${lv} · Sẵn sàng Tinh-Siêu Dẫn`;
    default:
      return a.shortFix || a.fixTitle;
  }
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

const SLOT_SHORT_MAP = {
  "Hoa Sự Sống": "Hoa",
  "Lông Vũ Tử Vong": "Lông",
  "Cát Thời Gian": "Cát",
  "Ly Không Gian": "Ly",
  "Nón Lý Trí": "Nón",
};

const STAT_SHORT_MAP = {
  "Tỷ Lệ Bạo Kích": "CR",
  "Sát Thương Bạo Kích": "CD",
  "Hiệu Quả Nạp Nguyên Tố": "ER",
  "Tinh Thông Nguyên Tố": "EM",
  "Tỷ Lệ Tấn Công": "ATK%",
  "Tấn Công": "ATK",
  "Tỷ Lệ HP": "HP%",
  HP: "HP",
  "Tỷ Lệ Phòng Ngự": "DEF%",
  "Phòng Ngự": "DEF",
  "Tăng Trị Liệu": "Trị Liệu",
  "Tăng Sát Thương Nguyên Tố Thủy": "ST Thủy",
  "Tăng Sát Thương Nguyên Tố Hỏa": "ST Hỏa",
  "Tăng Sát Thương Nguyên Tố Lôi": "ST Lôi",
  "Tăng Sát Thương Nguyên Tố Băng": "ST Băng",
  "Tăng Sát Thương Nguyên Tố Phong": "ST Phong",
  "Tăng Sát Thương Nguyên Tố Nham": "ST Nham",
  "Tăng Sát Thương Nguyên Tố Thảo": "ST Thảo",
  "Tăng Sát Thương Vật Lý": "ST Vật Lý",
};

function shortStatName(name) {
  return STAT_SHORT_MAP[name] || name || "-";
}

const ART_BUILD_SPECS = {
  Neuvillette: { role: "crit", wantSubs: ["CR", "CD", "HP%", "ER"], main: { Cát: ["HP%"], Ly: ["ST Thủy", "HP%"], Nón: ["CR", "CD", "HP%"] } },
  Furina: { role: "crit", wantSubs: ["CR", "CD", "HP%", "ER"], main: { Cát: ["HP%", "ER"], Ly: ["HP%", "ST Thủy"], Nón: ["CR", "CD", "HP%"] } },
  Mitya: { role: "crit", wantSubs: ["CR", "CD", "EM", "ATK%", "ER"], main: { Cát: ["EM"], Ly: ["EM", "ST Lôi"], Nón: ["CR", "CD", "EM"] } },
  "Yae Miko": { role: "crit", wantSubs: ["CR", "CD", "ATK%", "EM"], main: { Cát: ["ATK%", "EM"], Ly: ["ST Lôi", "ATK%"], Nón: ["CR", "CD"] }, preferCR: true },
  "Hu Tao": { role: "crit", wantSubs: ["CR", "CD", "HP%", "EM"], main: { Cát: ["HP%", "EM"], Ly: ["ST Hỏa"], Nón: ["CR", "CD"] }, preferCR: true },
  Navia: { role: "crit", wantSubs: ["CR", "CD", "ATK%", "ER"], main: { Cát: ["ATK%"], Ly: ["ST Nham"], Nón: ["CR", "CD"] }, preferCR: true },
  "Raiden Shogun": { role: "crit", wantSubs: ["CR", "CD", "ER", "ATK%"], main: { Cát: ["ER", "ATK%"], Ly: ["ST Lôi", "ATK%"], Nón: ["CR", "CD"] } },
  Yelan: { role: "crit", wantSubs: ["CR", "CD", "HP%", "ER"], main: { Cát: ["HP%", "ER"], Ly: ["ST Thủy"], Nón: ["CR", "CD", "HP%"] } },
  Chiori: { role: "crit", wantSubs: ["CR", "CD", "DEF%"], main: { Cát: ["DEF%"], Ly: ["ST Nham"], Nón: ["CR", "CD"] } },
  Keqing: { role: "crit", wantSubs: ["CR", "CD", "ATK%", "EM"], main: { Cát: ["ATK%", "EM"], Ly: ["ST Lôi"], Nón: ["CR", "CD"] } },
  "Kamisato Ayaka": { role: "crit", wantSubs: ["CR", "CD", "ATK%", "ER"], main: { Cát: ["ATK%"], Ly: ["ST Băng"], Nón: ["CD", "ATK%"] } },
  Yoimiya: { role: "crit", wantSubs: ["CR", "CD", "ATK%", "EM"], main: { Cát: ["ATK%", "EM"], Ly: ["ST Hỏa"], Nón: ["CR", "CD"] } },
  Ganyu: { role: "crit", wantSubs: ["CR", "CD", "EM", "ATK%"], main: { Cát: ["EM", "ATK%"], Ly: ["ST Băng"], Nón: ["CR", "CD"] }, preferEM: 150 },
  Fischl: { role: "crit", wantSubs: ["CR", "CD", "ATK%", "EM"], main: { Cát: ["ATK%", "EM"], Ly: ["ST Lôi"], Nón: ["CR", "CD"] }, preferCR: true },
  Xiangling: { role: "crit", wantSubs: ["CR", "CD", "ER", "EM", "ATK%"], main: { Cát: ["ER", "EM", "ATK%"], Ly: ["ST Hỏa"], Nón: ["CR", "CD"] } },
  Xingqiu: { role: "crit", wantSubs: ["CR", "CD", "ATK%", "ER"], main: { Cát: ["ATK%", "ER"], Ly: ["ST Thủy"], Nón: ["CR", "CD"] } },
  Beidou: { role: "crit", wantSubs: ["CR", "CD", "ER", "ATK%"], main: { Cát: ["ER", "ATK%"], Ly: ["ST Lôi"], Nón: ["CR", "CD"] }, preferER: 155 },
  Ningguang: { role: "crit", wantSubs: ["CR", "CD", "ATK%"], main: { Cát: ["ATK%"], Ly: ["ST Nham"], Nón: ["CR", "CD"] }, preferCR: true },
  Eula: { role: "crit", wantSubs: ["CR", "CD", "ATK%", "ER"], main: { Cát: ["ATK%"], Ly: ["ST Vật Lý"], Nón: ["CR", "CD"] }, preferCR: true },
  Xianyun: { role: "support", wantSubs: ["ATK%", "ER"], main: { Cát: ["ER", "ATK%"], Ly: ["ATK%"], Nón: ["ATK%"] }, preferER: 155 },
  "Kuki Shinobu": { role: "support", wantSubs: ["EM", "HP%"], main: { Cát: ["EM"], Ly: ["EM"], Nón: ["EM"] } },
  Nilou: { role: "support", wantSubs: ["HP%", "EM", "ER"], main: { Cát: ["HP%"], Ly: ["HP%"], Nón: ["HP%"] } },
  Aino: { role: "support", wantSubs: ["CR", "ER", "EM"], main: { Cát: ["ER", "EM"], Ly: ["EM", "ST Thủy"], Nón: ["CR"] }, preferCR: true },
  Jean: { role: "support", wantSubs: ["ATK%", "ER", "CR"], main: { Cát: ["ER", "ATK%"], Ly: ["ATK%"], Nón: ["ATK%", "Trị Liệu", "CR"] } },
  "Kaedehara Kazuha": { role: "support", wantSubs: ["EM", "ER"], main: { Cát: ["EM", "ER"], Ly: ["EM"], Nón: ["EM"] } },
  Nahida: { role: "support", wantSubs: ["EM", "CR", "CD", "ER"], main: { Cát: ["EM"], Ly: ["EM", "ST Thảo"], Nón: ["EM", "CR", "CD"] } },
  Zhongli: { role: "support", wantSubs: ["HP%", "CR", "CD"], main: { Cát: ["HP%"], Ly: ["HP%", "ST Nham"], Nón: ["HP%", "CR"] } },
  Bennett: { role: "support", wantSubs: ["ER", "HP%"], main: { Cát: ["ER", "HP%"], Ly: ["HP%"], Nón: ["Trị Liệu", "HP%"] } },
  "Sangonomiya Kokomi": { role: "support", wantSubs: ["HP%", "ER", "EM"], main: { Cát: ["HP%", "EM"], Ly: ["HP%", "EM"], Nón: ["Trị Liệu", "EM", "HP%"] } },
  Rosaria: { role: "crit", wantSubs: ["CR", "ER", "ATK%", "CD"], main: { Cát: ["ER", "ATK%"], Ly: ["ST Băng", "ATK%"], Nón: ["CR"] } },
};

const SWAP_TARGETS = [
  "Neuvillette", "Furina", "Mitya", "Yae Miko", "Navia", "Raiden Shogun", "Yelan",
  "Hu Tao", "Kamisato Ayaka", "Yoimiya", "Ganyu", "Keqing", "Chiori", "Xianyun",
  "Nilou", "Kuki Shinobu", "Fischl", "Jean", "Xingqiu", "Xiangling", "Bennett",
];

const PROTECTED_OWNERS = new Set([
  ...SWAP_TARGETS,
  "Kaedehara Kazuha", "Nahida", "Zhongli", "Sangonomiya Kokomi",
  "Mona", "Rosaria", "Yun Jin", "Collei", "Eula",
  "Barbara", "Gorou", "Kujou Sara", "Aino", "Beidou", "Ningguang", "Noelle", "Lisa", "Sucrose",
]);

function isSafeDonor(c) {
  if (!c) return false;
  if (PROTECTED_OWNERS.has(c.name)) return false;
  if (c.rarity === 5 && (c.level || 0) >= 80) return false;
  return true;
}

const ER_FLOOR = {
  Neuvillette: 118,
  Furina: 148,
  "Raiden Shogun": 250,
  Yelan: 195,
  Xiangling: 220,
  Xingqiu: 200,
  Bennett: 235,
  Xianyun: 160,
  Jean: 185,
  "Kamisato Ayaka": 130,
  Navia: 120,
};

const KEY_STAT = {
  Nilou: "HP%",
  "Kuki Shinobu": "EM",
  Xianyun: "ER",
  Jean: "ER",
  Bennett: "ER",
};

function getPieceStatVal(ar, shortK) {
  if (!ar) return 0;
  let val = 0;
  if (shortStatName(ar.main_stat) === shortK) val += parseStatNum(ar.main_val);
  (ar.substats || []).forEach((s) => {
    if (shortStatName(s.name) === shortK) val += parseStatNum(s.value);
  });
  return val;
}

const DOMAIN_PLANS = [
  {
    title: "Kết Cục Của Tội Lỗi (Fontaine)",
    tag: "Ưu tiên #1 · Nhựa",
    tone: "tag-gold",
    note: "Farm 1 bí cảnh nuôi đồng thời Neuvillette + Furina + Fischl/Chiori (mảnh Thợ Săn dư có EM/STBK giữ cho Hu Tao đi Furina)",
    targets: [
      { char: "Neuvillette", setKey: "mh", match: "Thợ Săn" },
      { char: "Furina", setKey: "gt", match: "Đoàn Kịch" },
      { char: "Fischl", setKey: "gt", match: "Đoàn Kịch" },
      { char: "Chiori", setKey: "gt", match: "Đoàn Kịch" },
    ],
    lootRules: {
      keep: [
        { set: "Thợ Săn", text: "Cát HP% (Neuv) · Cát EM (Hu Tao) · Ly Thủy/Hỏa/HP% · Nón STBK/CR (trần CR Hu Tao ≤64%)" },
        { set: "Đoàn Kịch", text: "Cát HP%/ER% (Furina) · Cát ATK%/EM (Fischl) · Cát DEF% (Chiori) · Ly HP%/Lôi/Nham · Nón CR/STBK" },
      ],
      trash: "Đốt ép Tráp: Cát/Ly DEF% trên Thợ Săn · Cát ATK% không Crit kép · Mảnh 3 dòng không có Crit/HP%/ER/EM.",
    },
  },
  {
    title: "Thorny Crown (Mondstadt)",
    tag: "Ưu tiên #2 · Nhựa",
    tone: "tag-purple",
    note: "Farm chung bộ 4pc Ảo Tưởng cho cả cặp lõi Tinh-Siêu Dẫn Mitya + Yae Miko",
    targets: [
      { char: "Mitya", setKey: "dids", match: "Ảo Tưởng" },
      { char: "Yae Miko", setKey: "dids", match: "Ảo Tưởng" },
    ],
    lootRules: {
      keep: [
        { set: "Ảo Tưởng", text: "Cát EM (Mitya) & ATK% (Yae) · Ly EM/Lôi/ATK% · Nón CR/STBK (ưu tiên Nón CR cho Yae Ma Nữ)" },
      ],
      trash: "Đốt ép Tráp: Cát/Ly HP% & DEF% · Nón Trị Liệu · Mảnh 3 dòng không có Crit/EM/ATK%.",
    },
  },
  {
    title: "Tráp Thánh (Strongbox · 0 Nhựa bí cảnh)",
    tag: "0 Nhựa · Ép Tráp",
    tone: "tag-ok",
    note: "Đổi phôi rác 5★ thành các bộ cũ — không tốn nhựa đi bí cảnh",
    targets: [
      { char: "Jean", setKey: "vv", match: "Bóng Hình" },
      { char: "Beidou", setKey: "esf", match: "Dấu Ấn" },
      { char: "Navia", setKey: "nw", match: "Tiếng Đêm" },
      { char: "Nilou", setKey: "hp2", match: "Thiên Nham|Vầng Sáng", need: 2 },
    ],
    lootRules: {
      keep: [
        { set: "Bóng Hình", text: "Cát ER% + Ly/Nón ATK% (Xianyun/Jean) · Hoặc giữ mọi mảnh EM cho hệ Phong" },
        { set: "Tông Thất / Tiếng Đêm", text: "3 món ATK% (Valeriy/Alyosha) · Cát ATK% + Ly Nham + Nón CR% (Navia)" },
      ],
      trash: "Chỉ đổ phôi rác 5★ từ Fontaine / Mondstadt — tuyệt đối không tốn nhựa đi bí cảnh cũ.",
    },
  },
  {
    title: "Nod-Krai · Tạm Hoãn",
    tag: "Tạm dừng",
    tone: "tag-bad",
    note: "Chờ roll thêm đồng đội Nod-Krai 5★ (Columbina) mới đáng quay lại farm",
    targets: [
      { char: "Aino", setKey: "silken", match: "Khúc Ca" },
    ],
    lootRules: {
      keep: [
        { set: "Khúc Ca", text: "Tạm chưa farm · Chờ roll 5★ Nod-Krai (Columbina) mới giữ Cát ER%/EM & Nón CR%." },
      ],
      trash: "Hiện tại giữ Aino Lv.80 với đồ sẵn có hoặc 4pc Giáo Quan nếu đi đội phản ứng.",
    },
  },
];

function calcUsefulRolls(ar, charName) {
  const spec = ART_BUILD_SPECS[charName];
  const want = new Set(spec?.wantSubs || ["CR", "CD", "ATK%", "ER", "EM"]);
  let total = 0;
  (ar?.substats || []).forEach((s) => {
    const k = shortStatName(s.name);
    if (want.has(k)) total += 1 + Number(s.rolls || 0);
  });
  return total;
}

function getSlotMainIssue(ar, ownerChar) {
  const name = ownerChar?.name || "";
  const spec = ART_BUILD_SPECS[name];
  if (!spec || !ar) return null;
  const slotShort = SLOT_SHORT_MAP[ar.slot] || ar.slot || "";
  if (!["Cát", "Ly", "Nón"].includes(slotShort)) return null;
  const mainShort = shortStatName(ar.main_stat);
  const allowed = spec.main?.[slotShort];
  if (allowed && !allowed.includes(mainShort)) {
    return `${slotShort} ${mainShort} → ${allowed.join("/")}`;
  }
  if (spec.preferCR && slotShort === "Nón" && mainShort === "CD") {
    const isHuTaoMH = name === "Hu Tao" && /4pc\s+Thợ Săn/i.test(ownerChar?.artifact_sets || "");
    if (!isHuTaoMH && parseStatNum(stat(ownerChar, "Tỷ Lệ Bạo Kích")) < 62) {
      return `Nón STBK → CR%`;
    }
  }
  if (spec.preferER && slotShort === "Cát" && mainShort !== "ER") {
    if (parseStatNum(stat(ownerChar, "Hiệu Quả Nạp Nguyên Tố")) < spec.preferER) {
      return `Cát ${mainShort} → ER%`;
    }
  }
  if (spec.preferEM && slotShort === "Cát" && mainShort !== "EM") {
    if (parseStatNum(stat(ownerChar, "Tinh Thông Nguyên Tố")) < spec.preferEM) {
      return `Cát ${mainShort} → EM`;
    }
  }
  return null;
}

function evalArtifact(ar, ownerChar) {
  const subs = ar?.substats || [];
  let cr = 0;
  let cd = 0;
  let crRolls = 0;
  let cdRolls = 0;
  let totRolls = 0;
  let hasCR = false;
  let hasCD = false;
  subs.forEach((s) => {
    const r = Number(s.rolls || 0);
    totRolls += r;
    const val = parseStatNum(s.value);
    if (s.name === "Tỷ Lệ Bạo Kích") {
      hasCR = true;
      cr += val;
      crRolls += r;
    } else if (s.name === "Sát Thương Bạo Kích") {
      hasCD = true;
      cd += val;
      cdRolls += r;
    }
  });
  const rarity = Number(ar?.rarity || 0);
  const level = Number(ar?.level || 0);
  const cv = +(cr * 2 + cd).toFixed(1);
  const critRolls = crRolls + cdRolls;
  const badRolls = Math.max(0, totRolls - critRolls);
  const is4Liner = rarity === 5 && level >= 20 && totRolls >= 5;
  const hasDoubleCrit = hasCR && hasCD;
  const slotShort = SLOT_SHORT_MAP[ar?.slot] || ar?.slot || "-";
  const isRareSlot = slotShort === "Cát" || slotShort === "Ly" || slotShort === "Nón";
  const ownerName = ownerChar?.name || "";
  const isCore = CHAR_BENCHMARKS[ownerName]?.group === "core";
  const isTempSet = Boolean(TARGET_SET_CHECK[ownerName] && !TARGET_SET_CHECK[ownerName](ownerChar?.artifact_sets || ""));
  const cvTier = cv >= 40 ? "god" : cv >= 30 ? "high" : cv >= 20 ? "mid" : "low";
  const spec = ART_BUILD_SPECS[ownerName];
  const role = spec?.role || "crit";
  const rvRolls = calcUsefulRolls(ar, ownerName);
  const rvTier = rvRolls >= 7 ? "god" : rvRolls >= 5 ? "high" : rvRolls >= 3 ? "mid" : "low";
  const mainIssue = getSlotMainIssue(ar, ownerChar);

  let rerollVerdict = "none";
  let rerollReason = "";
  const rerollCost = isRareSlot ? 2 : 1;
  if (rarity === 5 && level >= 20 && hasDoubleCrit && badRolls >= 3) {
    if (isRareSlot && is4Liner && !isTempSet) {
      rerollVerdict = "go";
      rerollReason = "Đáng cứu ★";
    } else {
      rerollVerdict = "hold";
      if (isTempSet) rerollReason = "Bộ tạm · Giữ Bụi";
      else if (!isRareSlot) rerollReason = "Hoa/Lông · Farm mới";
      else rerollReason = "3 dòng gốc · Cân nhắc";
    }
  }

  return {
    ar,
    owner: ownerChar,
    slotShort,
    isRareSlot,
    rarity,
    level,
    cr,
    cd,
    cv,
    cvTier,
    role,
    rvRolls,
    rvTier,
    mainIssue,
    totRolls,
    crRolls,
    cdRolls,
    critRolls,
    badRolls,
    is4Liner,
    hasDoubleCrit,
    isCore,
    isTempSet,
    rerollVerdict,
    rerollReason,
    rerollCost,
  };
}

function evalAllArtifacts() {
  const out = [];
  (APP.data?.characters || []).forEach((c) => {
    (c.artifacts || []).forEach((ar) => {
      out.push(evalArtifact(ar, c));
    });
  });
  return out;
}

function findZeroResinSwaps(allArts) {
  const donors = allArts.filter((x) => x.rarity === 5 && x.level >= 20 && isSafeDonor(x.owner));
  const candidates = [];

  SWAP_TARGETS.forEach((targetName) => {
    const target = byName(targetName);
    const spec = ART_BUILD_SPECS[targetName];
    if (!target || !spec) return;
    const arts = target.artifacts || [];
    const setCounts = {};
    arts.forEach((a) => {
      const s = a.set || "";
      setCounts[s] = (setCounts[s] || 0) + 1;
    });
    const hasFiveSet = Object.values(setCounts).some((v) => v >= 5);
    const curER = parseStatNum(stat(target, "Hiệu Quả Nạp Nguyên Tố"));
    const erFloor = ER_FLOOR[targetName] || 0;
    const keyStat = KEY_STAT[targetName];

    arts.forEach((rawCur) => {
      const cur = evalArtifact(rawCur, target);
      const isOffSet = (setCounts[cur.ar.set] || 0) <= 1 || hasFiveSet;
      const curMain = shortStatName(cur.ar.main_stat);
      const curMainIssue = getSlotMainIssue(cur.ar, target);

      donors.forEach((cand) => {
        if (cand.slotShort !== cur.slotShort) return;
        const sameSet = cand.ar.set === cur.ar.set;
        if (!sameSet && !isOffSet) return;
        if (["Cát", "Ly", "Nón"].includes(cur.slotShort)) {
          const candMain = shortStatName(cand.ar.main_stat);
          if (!curMainIssue && candMain !== curMain) return;
          const allowed = spec.main?.[cur.slotShort];
          if (allowed && !allowed.includes(candMain)) return;
          if (getSlotMainIssue(cand.ar, { ...target, artifact_sets: target.artifact_sets || "" })) return;
        }

        const dCR = +(getPieceStatVal(cand.ar, "CR") - getPieceStatVal(cur.ar, "CR")).toFixed(1);
        const dCD = +(getPieceStatVal(cand.ar, "CD") - getPieceStatVal(cur.ar, "CD")).toFixed(1);
        const dER = +(getPieceStatVal(cand.ar, "ER") - getPieceStatVal(cur.ar, "ER")).toFixed(1);
        const dHP = +(getPieceStatVal(cand.ar, "HP%") - getPieceStatVal(cur.ar, "HP%")).toFixed(1);
        const dATK = +(getPieceStatVal(cand.ar, "ATK%") - getPieceStatVal(cur.ar, "ATK%")).toFixed(1);
        const dDEF = +(getPieceStatVal(cand.ar, "DEF%") - getPieceStatVal(cur.ar, "DEF%")).toFixed(1);
        const dEM = Math.round(getPieceStatVal(cand.ar, "EM") - getPieceStatVal(cur.ar, "EM"));

        if (erFloor > 0 && curER + dER < erFloor && dER < 0) return;
        if (keyStat && !curMainIssue) {
          const dKs = getPieceStatVal(cand.ar, keyStat) - getPieceStatVal(cur.ar, keyStat);
          if (dKs < 0) return;
        }

        const candRvForTarget = calcUsefulRolls(cand.ar, targetName);
        const cvGain = +(cand.cv - cur.cv).toFixed(1);
        const rvGain = candRvForTarget - cur.rvRolls;

        let kind = null;
        let headline = "";
        let score = 0;
        if (cur.level < 20 && (spec.role === "support" ? candRvForTarget >= 3 : (cand.cv >= 15 || candRvForTarget >= 4))) {
          kind = "fix";
          headline = `Thay +${cur.level} → +20`;
          score = 70 + cand.cv + rvGain * 6 + (sameSet ? 12 : 0);
        } else if (curMainIssue) {
          if (spec.role === "support" ? candRvForTarget >= 2 : (cand.cv >= 12 || candRvForTarget >= 4)) {
            kind = "fix";
            headline = `Sửa ${curMainIssue}`;
            score = 65 + Math.max(0, cvGain) + rvGain * 7 + (sameSet ? 10 : 0);
          }
        } else if (spec.role === "crit" && cvGain >= 10 && rvGain >= 0) {
          kind = sameSet ? "same" : "offset";
          headline = `+${cvGain.toFixed(1)} CV`;
          score = cvGain * 2 + (sameSet ? 12 : 0) + rvGain * 3;
        } else if (spec.role === "support" && rvGain >= 3) {
          kind = sameSet ? "same" : "offset";
          headline = `+${rvGain} dòng tốt`;
          score = rvGain * 14 + (sameSet ? 10 : 0) + Math.max(0, cvGain) * 0.3;
        }
        if (!kind) return;

        const deltas = [];
        const addDelta = (val, suf, thr) => {
          if (Math.abs(val) < thr) return;
          deltas.push({ text: `${val > 0 ? "+" : ""}${val}${suf}`, pos: val > 0 });
        };
        addDelta(dCR, "% CR", 1);
        addDelta(dCD, "% CD", 1);
        addDelta(dER, "% ER", 2);
        addDelta(dHP, "% HP", 2);
        addDelta(dATK, "% ATK", 2);
        addDelta(dDEF, "% DEF", 3);
        addDelta(dEM, " EM", 15);

        candidates.push({
          target,
          donor: cand.owner,
          cur,
          cand,
          sameSet,
          isOffSet,
          hasFiveSet,
          kind,
          headline,
          cvGain,
          rvGain,
          candRvForTarget,
          deltas,
          score,
        });
      });
    });
  });

  candidates.sort((a, b) => b.score - a.score || b.cvGain - a.cvGain || b.rvGain - a.rvGain);
  const usedDonors = new Set();
  const usedTargets = new Set();
  const perTargetCount = new Map();
  const usedFiveOffset = new Set();
  const picked = [];

  for (const item of candidates) {
    const dk = `${item.donor.name}::${item.cand.slotShort}`;
    const tk = `${item.target.name}::${item.cur.slotShort}`;
    if (usedDonors.has(dk) || usedTargets.has(tk)) continue;
    if ((perTargetCount.get(item.target.name) || 0) >= 2) continue;
    if (item.hasFiveSet && !item.sameSet) {
      if (usedFiveOffset.has(item.target.name)) continue;
      usedFiveOffset.add(item.target.name);
    }
    usedDonors.add(dk);
    usedTargets.add(tk);
    perTargetCount.set(item.target.name, (perTargetCount.get(item.target.name) || 0) + 1);
    picked.push(item);
  }
  return picked;
}

function auditCharArtifactsSmart() {
  const rows = [];
  (APP.data?.characters || []).forEach((c) => {
    const spec = ART_BUILD_SPECS[c.name];
    if ((c.level || 0) < 70 && !spec) return;
    if ((c.level || 0) < 70) return;
    const arts = c.artifacts || [];
    const missing = Math.max(0, 5 - arts.length);
    const lowArts = arts.filter((a) => Number(a.level || 0) < 20);
    const zeroCount = lowArts.filter((a) => Number(a.level || 0) === 0).length;
    const mainIssues = [];
    let weakestSlot = null;
    let weakestScore = Infinity;

    arts.forEach((a) => {
      const ev = evalArtifact(a, c);
      if (ev.mainIssue) mainIssues.push({ slot: ev.slotShort, msg: ev.mainIssue });
      if (spec) {
        const pieceScore = ev.level < 20 || ev.mainIssue
          ? -100 + ev.level
          : spec.role === "support"
            ? ev.rvRolls * 10 + (ev.isCore ? 0 : 0)
            : ev.cv + ev.rvRolls * 2;
        if (pieceScore < weakestScore) {
          weakestScore = pieceScore;
          weakestSlot = ev.slotShort;
        }
      }
    });

    const isCore = CHAR_BENCHMARKS[c.name]?.group === "core" || Boolean(spec);
    const hasIssues = missing > 0 || lowArts.length > 0 || mainIssues.length > 0;
    if (!hasIssues && !spec) return;

    rows.push({
      c,
      spec,
      missing,
      lowArts,
      zeroCount,
      mainIssues,
      weakestSlot,
      hasIssues,
      isCore: CHAR_BENCHMARKS[c.name]?.group === "core",
    });
  });

  rows.sort((a, b) => (
    Number(b.hasIssues) - Number(a.hasIssues) ||
    Number(b.isCore) - Number(a.isCore) ||
    b.mainIssues.length - a.mainIssues.length ||
    b.missing - a.missing ||
    b.zeroCount - a.zeroCount ||
    b.lowArts.length - a.lowArts.length ||
    (b.c.level || 0) - (a.c.level || 0)
  ));
  return rows;
}

function evalDomainPlans() {
  return DOMAIN_PLANS.map((dom) => ({
    ...dom,
    rows: dom.targets.map((tg) => {
      const c = byName(tg.char);
      const re = new RegExp(tg.match, "i");
      const need = tg.need || 4;
      const count = (c?.artifacts || []).filter((a) => re.test(a.set || "")).length;
      const clamped = Math.min(need, count);
      const tone = clamped >= need ? "ok" : clamped >= Math.ceil(need / 2) ? "warn" : "bad";
      return { ...tg, c, count, need, pct: Math.round((clamped / need) * 100), tone, setMeta: SET_META[tg.setKey] };
    }),
  }));
}

function renderRingGauge(pct, colorVar, label, size = 44) {
  const r = (size / 2) - 4;
  const circ = +(2 * Math.PI * r).toFixed(2);
  const clamped = Math.max(0, Math.min(100, Number(pct) || 0));
  const offset = +(circ * (1 - clamped / 100)).toFixed(2);
  const cx = size / 2;
  return `
    <div class="ring-wrap" style="width:${size}px;height:${size}px;">
      <svg viewBox="0 0 ${size} ${size}" class="ring-svg" aria-hidden="true">
        <circle cx="${cx}" cy="${cx}" r="${r}" class="ring-bg" />
        <circle cx="${cx}" cy="${cx}" r="${r}" class="ring-fg" style="stroke:${colorVar};stroke-dasharray:${circ};stroke-dashoffset:${offset};" />
      </svg>
      <span class="ring-lbl">${esc(label)}</span>
    </div>
  `;
}

function renderSubstatMiniGrid(subs) {
  return `<div class="rc-subs">${(subs || [])
    .map((sp) => {
      const label = shortStatName(sp.name);
      const isCrit = label === "CR" || label === "CD";
      const isGood = isCrit || label === "ER" || label === "EM" || label.endsWith("%");
      const cls = isCrit ? "is-crit" : isGood ? "is-good" : "is-flat";
      const rolls = Math.max(0, Number(sp.rolls || 0));
      const pips = Array.from({ length: Math.min(5, rolls + 1) }, (_, i) => `<i class="rc-pip ${i === 0 ? "pip-base" : "pip-up"}"></i>`).join("");
      return `
        <div class="rc-sub ${cls}">
          <div class="rc-sub-top">
            <span class="rc-sub-k">${esc(label)}</span>
            <strong class="rc-sub-v">+${esc(sp.value)}</strong>
          </div>
          <div class="rc-ticks" title="${rolls} lần nâng">${pips}</div>
        </div>
      `;
    })
    .join("")}</div>`;
}

function renderRollDots(critRolls, badRolls) {
  const dots = [];
  for (let i = 0; i < critRolls; i++) dots.push(`<i class="roll-dot dot-crit"></i>`);
  for (let i = 0; i < badRolls; i++) dots.push(`<i class="roll-dot dot-bad"></i>`);
  const tot = critRolls + badRolls;
  return `<div class="roll-meter" title="${critRolls} lần vào CR/CD · ${badRolls} lần lệch"><span class="roll-dots">${dots.join("")}</span><small>${critRolls}/${tot} Crit</small></div>`;
}

const FIVE_SLOT_ORDER = ["Hoa", "Lông", "Cát", "Ly", "Nón"];

function renderVisualSlotTiles(char, auditRow) {
  const bySlot = new Map();
  (char?.artifacts || []).forEach((ar) => {
    bySlot.set(SLOT_SHORT_MAP[ar.slot] || ar.slot, ar);
  });
  const weakSlot = auditRow?.weakestSlot;
  const spec = auditRow?.spec;
  return `<div class="slot-tile-strip">${FIVE_SLOT_ORDER.map((sl) => {
    const ar = bySlot.get(sl);
    if (!ar) {
      return `
        <div class="slot-tile tile-miss" title="Thiếu ${sl}">
          <span class="st-empty">+</span>
          <span class="st-slot">${sl}</span>
        </div>
      `;
    }
    const lvl = Number(ar.level || 0);
    const isLow = lvl < 20;
    const ev = evalArtifact(ar, char);
    const isWrong = Boolean(ev.mainIssue);
    const isWeak = !isWrong && !isLow && weakSlot === sl;
    const cls = isWrong ? "tile-wrong" : isLow ? "tile-low" : isWeak ? "tile-weak" : "tile-ok";
    const metric = spec?.role === "support" ? `${ev.rvRolls}d` : `${ev.cv.toFixed(0)}cv`;
    const tip = [
      `${sl} ${shortStatName(ar.main_stat)} (${ar.set})`,
      `+${lvl}`,
      `${ev.cv.toFixed(1)} CV`,
      `${ev.rvRolls} dòng hữu ích`,
      ev.mainIssue ? `⚠ ${ev.mainIssue}` : isWeak ? "Khe yếu nhất" : "",
    ].filter(Boolean).join(" · ");
    return `
      <div class="slot-tile ${cls}" title="${esc(tip)}">
        ${ar.icon ? `<img src="${esc(ar.icon)}" alt="${esc(sl)}" loading="lazy" referrerpolicy="no-referrer" />` : `<span class="st-empty">${sl}</span>`}
        <span class="st-lv ${isWrong ? "lv-wrong" : isLow ? "lv-bad" : ""}">${isWrong ? "!" : `+${lvl}`}</span>
        <span class="st-slot">${sl} <em class="st-metric">${metric}</em></span>
      </div>
    `;
  }).join("")}</div>`;
}

function renderCvDistBar(allArts) {
  const tot = allArts.length || 1;
  const bGod = allArts.filter((x) => x.cv >= 40).length;
  const bHigh = allArts.filter((x) => x.cv >= 30 && x.cv < 40).length;
  const bMid = allArts.filter((x) => x.cv >= 20 && x.cv < 30).length;
  const bLow = allArts.filter((x) => x.cv < 20).length;
  const segs = [
    { cls: "seg-god", cnt: bGod, label: "40+ CV", pct: (bGod / tot) * 100 },
    { cls: "seg-high", cnt: bHigh, label: "30–39 CV", pct: (bHigh / tot) * 100 },
    { cls: "seg-mid", cnt: bMid, label: "20–29 CV", pct: (bMid / tot) * 100 },
    { cls: "seg-low", cnt: bLow, label: "<20 CV", pct: (bLow / tot) * 100 },
  ];
  const slotAvgs = FIVE_SLOT_ORDER.map((sl) => {
    const sub = allArts.filter((x) => x.slotShort === sl && x.level >= 20);
    const avg = sub.length ? (sub.reduce((a, b) => a + b.cv, 0) / sub.length).toFixed(1) : "0.0";
    return `<span class="slot-avg-pill"><b>${sl}</b> ${avg}</span>`;
  }).join("");

  return `
    <div class="cv-dist-card">
      <div class="cv-dist-top">
        <div class="cv-dist-legend">
          ${segs.map((s) => `<span class="cv-leg-item"><i class="${s.cls}"></i>${s.label} <b>${s.cnt}</b></span>`).join("")}
        </div>
        <div class="slot-avg-strip" title="CV trung bình mảnh +20 theo khe">${slotAvgs}</div>
      </div>
      <div class="cv-stacked-bar">
        ${segs.map((s) => (s.cnt > 0 ? `<div class="cv-seg ${s.cls}" style="width:${s.pct.toFixed(2)}%" title="${s.label}: ${s.cnt} món (${Math.round(s.pct)}%)"></div>` : "")).join("")}
      </div>
    </div>
  `;
}

function renderRelicCard(x, mode = "vault") {
  const isSup = x.role === "support" && mode !== "reroll";
  const tierAura = mode === "reroll"
    ? (x.rerollVerdict === "go" ? "rc-go" : "rc-hold")
    : `rc-${isSup ? x.rvTier : x.cvTier}`;
  const mainPill = isSup
    ? `<span class="cv-pill cv-${x.rvTier}">${x.rvRolls} dòng tốt</span>`
    : `<span class="cv-pill cv-${x.cvTier}">${x.cv.toFixed(1)} CV</span>`;
  const subPill = x.is4Liner
    ? `<span class="four-pill is-4">4 dòng</span>`
    : mode === "reroll"
      ? `<span class="four-pill">3 dòng</span>`
      : isSup
        ? `<span class="four-pill">${x.cv.toFixed(0)} CV</span>`
        : `<span class="four-pill">${x.rvRolls} dòng tốt</span>`;
  return `
    <article class="relic-card ${tierAura}" data-open-char="${esc(x.owner.name)}">
      <div class="rc-head">
        <div class="rc-ico-wrap">
          ${x.ar.icon ? `<img class="rc-ico" src="${esc(x.ar.icon)}" alt="${esc(x.slotShort)}" loading="lazy" referrerpolicy="no-referrer" />` : ""}
          ${x.owner.icon ? `<img class="rc-owner" src="${esc(x.owner.icon)}" alt="${esc(x.owner.name)}" title="${esc(x.owner.name)}" loading="lazy" referrerpolicy="no-referrer" />` : ""}
        </div>
        <div class="rc-title">
          <div class="rc-main-row">
            <strong>${esc(shortStatName(x.ar.main_stat))} ${esc(x.ar.main_val)}</strong>
            <span class="rc-lvl ${x.level < 20 ? "is-low" : ""}">+${esc(x.level)}</span>
          </div>
          <small>${esc(x.owner.name)} · ${esc(x.slotShort)} · ${esc(x.ar.set)}</small>
        </div>
        <div class="rc-badges">
          ${mainPill}
          ${subPill}
        </div>
      </div>
      ${mode === "reroll" ? `<div class="rc-roll-strip">${renderRollDots(x.critRolls, x.badRolls)}<span class="rc-leak-tag">Lệch ${x.badRolls}</span></div>` : ""}
      ${renderSubstatMiniGrid(x.ar.substats)}
      ${mode === "reroll" ? `<div class="rc-footer ${x.rerollVerdict === "go" ? "is-go" : "is-hold"}"><span>${esc(x.rerollReason)}</span><b>${x.rerollCost} Bụi</b></div>` : ""}
    </article>
  `;
}

function renderSwapSubLine(subs, wantList) {
  const want = new Set(wantList || ["CR", "CD", "ATK%", "ER", "EM"]);
  return (subs || [])
    .map((s) => {
      const k = shortStatName(s.name);
      const cls = (k === "CR" || k === "CD") ? "is-crit" : want.has(k) ? "is-good" : "is-flat";
      return `<span class="sw-sub ${cls}">${esc(k)} +${esc(s.value)}</span>`;
    })
    .join("");
}

function renderSwapCard(sw) {
  const el = sw.target.element || "Geo";
  const spec = ART_BUILD_SPECS[sw.target.name];
  const scopeTag = sw.kind === "fix"
    ? `<span class="art-flag flag-bad">Sửa lỗi</span>`
    : sw.sameSet
      ? `<span class="art-flag flag-ok">Cùng bộ</span>`
      : `<span class="art-flag flag-warn">Off-set</span>`;
  const curMetric = spec?.role === "support" ? `${sw.cur.rvRolls} dòng` : `${sw.cur.cv.toFixed(1)} CV`;
  const newMetric = spec?.role === "support" ? `${sw.candRvForTarget} dòng` : `${sw.cand.cv.toFixed(1)} CV`;

  return `
    <article class="swap-card" style="--el: var(--el-${esc(el)}, 211,188,142);">
      <div class="swap-head">
        <div class="swap-target" data-open-char="${esc(sw.target.name)}">
          ${sw.target.icon ? `<img class="swap-face" src="${esc(sw.target.icon)}" alt="${esc(sw.target.name)}" loading="lazy" referrerpolicy="no-referrer" />` : ""}
          <div>
            <strong>${esc(sw.target.name)} · ${esc(sw.cur.slotShort)}</strong>
            <small>${sw.sameSet ? `Giữ nguyên bộ ${esc(sw.cand.ar.set)}` : sw.hasFiveSet ? `Đang 5pc → lắp Off-set giữ nguyên 4pc` : `Khe Off-set tự do`}</small>
          </div>
        </div>
        <div class="swap-head-right">
          ${scopeTag}
          <span class="swap-gain-pill">${esc(sw.headline)}</span>
        </div>
      </div>

      <div class="swap-pair">
        <div class="swap-box is-cur" data-open-char="${esc(sw.target.name)}">
          <div class="sb-top">
            <span class="sb-role">Đang đeo</span>
            <span class="sb-metric">${esc(curMetric)}</span>
          </div>
          <div class="sb-piece">
            ${sw.cur.ar.icon ? `<img src="${esc(sw.cur.ar.icon)}" alt="" loading="lazy" referrerpolicy="no-referrer" />` : ""}
            <div>
              <strong>${esc(shortStatName(sw.cur.ar.main_stat))} ${esc(sw.cur.ar.main_val)} <em>+${sw.cur.level}</em></strong>
              <small>${esc(sw.cur.ar.set)}</small>
            </div>
          </div>
          <div class="swap-subs-line">${renderSwapSubLine(sw.cur.ar.substats, spec?.wantSubs)}</div>
        </div>

        <div class="swap-arrow" aria-hidden="true">→</div>

        <div class="swap-box is-new" data-open-char="${esc(sw.donor.name)}">
          <div class="sb-top">
            <span class="sb-role">Lấy từ <b>${esc(sw.donor.name)}</b> (Lv.${sw.donor.level})</span>
            <span class="sb-metric is-up">${esc(newMetric)}</span>
          </div>
          <div class="sb-piece">
            ${sw.cand.ar.icon ? `<img src="${esc(sw.cand.ar.icon)}" alt="" loading="lazy" referrerpolicy="no-referrer" />` : ""}
            <div>
              <strong>${esc(shortStatName(sw.cand.ar.main_stat))} ${esc(sw.cand.ar.main_val)} <em>+${sw.cand.level}</em></strong>
              <small>${esc(sw.cand.ar.set)}</small>
            </div>
          </div>
          <div class="swap-subs-line">${renderSwapSubLine(sw.cand.ar.substats, spec?.wantSubs)}</div>
        </div>
      </div>
      ${sw.deltas?.length ? `<div class="swap-deltas">${sw.deltas.map((d) => `<span class="sw-delta ${d.pos ? "is-pos" : "is-neg"}">${esc(d.text)}</span>`).join("")}</div>` : ""}
    </article>
  `;
}

function renderArtifactsView() {
  const allArts = evalAllArtifacts();
  const swaps = findZeroResinSwaps(allArts);
  const sameSetCount = swaps.filter((s) => s.sameSet).length;
  const fixSwapCount = swaps.filter((s) => s.kind === "fix").length;

  const auditAll = auditCharArtifactsSmart();
  const issueChars = auditAll.filter((r) => r.hasIssues);
  const wrongMainTotal = issueChars.reduce((acc, r) => acc + r.mainIssues.length, 0);
  const lowPiecesCount = issueChars.reduce((acc, r) => acc + r.lowArts.length + r.missing, 0);
  const cleanPct = auditAll.length ? Math.round(((auditAll.length - issueChars.length) / auditAll.length) * 100) : 100;

  const rerollAll = allArts
    .filter((x) => x.rerollVerdict !== "none")
    .sort((a, b) => (a.rerollVerdict === "go" ? 0 : 1) - (b.rerollVerdict === "go" ? 0 : 1) || b.is4Liner - a.is4Liner || b.badRolls - a.badRolls || b.cv - a.cv);
  const goCount = rerollAll.filter((x) => x.rerollVerdict === "go").length;
  const topCvCount = allArts.filter((x) => x.cv >= 30).length;
  const topCvPct = allArts.length ? Math.round((topCvCount / allArts.length) * 100) : 0;
  const fourLinerCount = allArts.filter((x) => x.is4Liner).length;

  const domains = evalDomainPlans();
  const totalDomainPieces = domains.slice(0, 3).reduce((acc, d) => acc + d.rows.reduce((a, r) => a + r.need, 0), 0);
  const haveDomainPieces = domains.slice(0, 3).reduce((acc, d) => acc + d.rows.reduce((a, r) => a + Math.min(r.need, r.count), 0), 0);
  const domPct = totalDomainPieces ? Math.round((haveDomainPieces / totalDomainPieces) * 100) : 0;
  const pendingDomainChars = domains.slice(0, 3).reduce((acc, d) => acc + d.rows.filter((r) => r.count < r.need).length, 0);

  const tabCards = [
    { key: "swap", cls: "kpi-ok", color: "var(--ok)", pct: Math.min(100, swaps.length * 8), ring: `${swaps.length}`, title: "Tráo Đồ 0 Nhựa", val: `${swaps.length} kèo đổi`, sub: `${sameSetCount} cùng bộ · ${fixSwapCount} sửa lỗi` },
    { key: "audit", cls: "kpi-bad", color: "var(--bad)", pct: cleanPct, ring: `${cleanPct}%`, title: "Lỗi Build & Khe Yếu", val: `${issueChars.length} NV lỗi`, sub: `${wrongMainTotal} sai dòng · ${lowPiecesCount} thiếu/<20` },
    { key: "domains", cls: "kpi-gold", color: "var(--gold)", pct: domPct, ring: `${haveDomainPieces}/${totalDomainPieces}`, title: "Bí Cảnh & Khóa Đồ", val: `${pendingDomainChars} NV chờ`, sub: "Tiến độ x/4 + bảng khóa" },
    { key: "vault", cls: "kpi-warn", color: "var(--warn)", pct: topCvPct, ring: `${topCvPct}%`, title: "Kho & Bụi Khai Sáng", val: `${goCount} đáng cứu`, sub: `${allArts.length} món · ${topCvCount} món ≥30 CV` },
  ];

  let bodyHtml = "";

  if (APP.artTab === "swap") {
    const sFilters = [
      ["all", `Tất cả (${swaps.length})`],
      ["fix", `Sửa lỗi / +0 (${swaps.filter((s) => s.kind === "fix").length})`],
      ["same", `Cùng bộ (${swaps.filter((s) => s.kind !== "fix" && s.sameSet).length})`],
      ["offset", `Khe Off-set (${swaps.filter((s) => s.kind !== "fix" && !s.sameSet).length})`],
    ];
    const shownSwaps = swaps.filter((s) => {
      if (APP.artSwapFilter === "fix") return s.kind === "fix";
      if (APP.artSwapFilter === "same") return s.kind !== "fix" && s.sameSet;
      if (APP.artSwapFilter === "offset") return s.kind !== "fix" && !s.sameSet;
      return true;
    });
    bodyHtml = `
      <div class="art-rule-bar">
        <strong>Tráo Đồ 0 Nhựa:</strong> Chỉ mượn mảnh 5★ +20 từ <b>dự bị bỏ kho</b> (không đụng 5★ Lv.80+ hay NV Nhà Hát), giữ nguyên bộ 4pc, khóa dòng chính hợp lệ và không làm tụt ngưỡng Nạp (ER).
      </div>
      <div class="art-controls">
        <div class="filter-group">
          ${sFilters.map(([k, lbl]) => `<button type="button" class="filter-btn ${APP.artSwapFilter === k ? "active" : ""}" data-art-swap-filter="${k}">${esc(lbl)}</button>`).join("")}
        </div>
      </div>
      ${shownSwaps.length ? `<div class="swap-grid">${shownSwaps.map(renderSwapCard).join("")}</div>` : `<div class="empty-done">Không còn kèo tráo đồ nào khớp bộ lọc này.</div>`}
    `;
  } else if (APP.artTab === "audit") {
    const auditFilters = [
      ["issues", `Có lỗi cần sửa (${issueChars.length})`],
      ["core", `Tất cả NV chính · Soi khe yếu (${auditAll.filter((r) => r.spec).length})`],
    ];
    const shownRows = APP.artAuditFilter === "core" ? auditAll.filter((r) => r.spec) : issueChars;
    const coreAudit = shownRows.filter((r) => r.isCore || r.spec);
    const otherAudit = shownRows.filter((r) => !r.isCore && !r.spec);

    const renderAuditGroup = (title, toneCls, rows) => {
      if (!rows.length) return "";
      return `
        <section class="art-group-block">
          <div class="art-group-head">
            <h3 class="${toneCls}">${esc(title)} <em>(${rows.length})</em></h3>
            <span>Chấm than (!) = sai dòng chính · Viền tím = khe yếu nhất nên thay trước</span>
          </div>
          <div class="art-char-grid">
            ${rows
              .map((r) => {
                const el = r.c.element || "Geo";
                const flags = [];
                if (r.mainIssues.length > 0) flags.push(`<span class="art-flag flag-bad">${r.mainIssues.length} sai dòng</span>`);
                if (r.missing > 0) flags.push(`<span class="art-flag flag-bad">Thiếu ${r.missing}</span>`);
                if (r.zeroCount > 0) flags.push(`<span class="art-flag flag-bad">${r.zeroCount} món +0</span>`);
                const midLow = r.lowArts.filter((a) => Number(a.level || 0) > 0).length;
                if (midLow > 0) flags.push(`<span class="art-flag flag-warn">${midLow} chưa +20</span>`);
                if (!flags.length && r.weakestSlot) flags.push(`<span class="art-flag flag-purple">Yếu: ${esc(r.weakestSlot)}</span>`);
                const issueLine = r.mainIssues.length
                  ? `Cần đổi: ${r.mainIssues.map((m) => m.msg).join(" · ")}`
                  : r.weakestSlot
                    ? `Khe yếu nhất hiện tại: ${r.weakestSlot} (ưu tiên thay/farm trước)`
                    : "";
                return `
                  <article class="art-char-card" style="--el: var(--el-${esc(el)}, 211,188,142);" data-open-char="${esc(r.c.name)}">
                    ${r.c.splash ? `<img class="acc-splash" src="${esc(r.c.splash)}" alt="" loading="lazy" referrerpolicy="no-referrer" />` : ""}
                    <div class="acc-inner">
                      <div class="acc-head">
                        <div class="acc-id">
                          ${r.c.icon ? `<img class="acc-avatar" src="${esc(r.c.icon)}" alt="${esc(r.c.name)}" loading="lazy" referrerpolicy="no-referrer" />` : ""}
                          <div>
                            <strong>${esc(r.c.name)}${r.isCore ? ` <em class="core-dot">★</em>` : ""}</strong>
                            <small>Lv.${esc(r.c.level)} C${esc(r.c.constellation)} · ${esc(r.c.artifact_sets || "Chưa có bộ")}</small>
                          </div>
                        </div>
                        <div class="art-fix-flags">${flags.join("")}</div>
                      </div>
                      ${renderVisualSlotTiles(r.c, r)}
                      ${issueLine ? `<div class="acc-issues-line ${r.mainIssues.length ? "is-bad" : ""}">${esc(issueLine)}</div>` : ""}
                    </div>
                  </article>
                `;
              })
              .join("")}
          </div>
        </section>
      `;
    };

    bodyHtml = `
      <div class="art-controls">
        <div class="filter-group">
          ${auditFilters.map(([k, lbl]) => `<button type="button" class="filter-btn ${APP.artAuditFilter === k ? "active" : ""}" data-art-audit-filter="${k}">${esc(lbl)}</button>`).join("")}
        </div>
      </div>
      ${
        shownRows.length
          ? `${renderAuditGroup("★ Nhân vật ưu tiên & Build chính", "tone-bad-txt", coreAudit)}${renderAuditGroup("Nhân vật Lv.70+ khác (Nhà Hát / Dự bị)", "tone-muted-txt", otherAudit)}`
          : `<div class="empty-done">✓ Toàn bộ nhân vật đã đúng dòng chính và đủ 5 món +20!</div>`
      }
    `;
  } else if (APP.artTab === "domains") {
    bodyHtml = `
      <div class="domain-grid">
        ${domains
          .map((dom) => {
            const uniqIcons = [...new Set(dom.rows.map((r) => r.setMeta?.icon).filter(Boolean))].slice(0, 3);
            const keepHtml = (dom.lootRules?.keep || [])
              .map((k) => `<div class="dl-row"><span class="dl-set-tag">${esc(k.set)}</span><span>${esc(k.text)}</span></div>`)
              .join("");
            return `
              <article class="domain-card">
                <div class="domain-head">
                  <div class="domain-head-left">
                    ${uniqIcons.length ? `<div class="domain-set-icons">${uniqIcons.map((u) => `<img src="${esc(u)}" alt="" loading="lazy" referrerpolicy="no-referrer" />`).join("")}</div>` : ""}
                    <div>
                      <h3>${esc(dom.title)}</h3>
                      <small>${esc(dom.note)}</small>
                    </div>
                  </div>
                  <span class="act-tag ${esc(dom.tone)}">${esc(dom.tag)}</span>
                </div>
                <div class="domain-char-grid">
                  ${dom.rows
                    .map((r) => {
                      const ringCol = r.tone === "ok" ? "var(--ok)" : r.tone === "warn" ? "var(--warn)" : "var(--bad)";
                      return `
                        <div class="domain-tile" data-open-char="${esc(r.char)}">
                          ${r.c?.icon ? `<img class="dt-face" src="${esc(r.c.icon)}" alt="${esc(r.char)}" loading="lazy" referrerpolicy="no-referrer" />` : ""}
                          <div class="dt-info">
                            <strong>${esc(r.char)}</strong>
                            <small>${esc(r.setMeta?.short || r.match)}</small>
                          </div>
                          ${renderRingGauge(r.pct, ringCol, `${r.count}/${r.need}`, 36)}
                        </div>
                      `;
                    })
                    .join("")}
                </div>
                ${
                  dom.lootRules
                    ? `<div class="domain-loot-box">
                        <div class="dl-title">Khóa ngay khi farm xong:</div>
                        ${keepHtml}
                        ${dom.lootRules.trash ? `<div class="dl-trash">${esc(dom.lootRules.trash)}</div>` : ""}
                      </div>`
                    : ""
                }
              </article>
            `;
          })
          .join("")}
      </div>
    `;
  } else {
    const vModes = [
      ["all", `Tất cả kho (${allArts.length})`],
      ["go", `★ Đáng dùng Bụi (${goCount})`],
      ["reroll", `Lệch Crit (${rerollAll.length})`],
      ["four", `4 dòng gốc (${fourLinerCount})`],
    ];
    const slotBtns = [
      ["all", "Tất cả khe"],
      ["Hoa", "Hoa"],
      ["Lông", "Lông"],
      ["Cát", "Cát"],
      ["Ly", "Ly"],
      ["Nón", "Nón"],
    ];
    const sortBtns = [
      ["cv_desc", "CV ↓"],
      ["rv_desc", "Dòng tốt ↓"],
      ["rolls_desc", "4 dòng ↓"],
      ["lvl_asc", "Cấp ↑"],
    ];
    const setCounts = new Map();
    const charCounts = new Map();
    allArts.forEach((x) => {
      const s = x.ar.set || "Khác";
      setCounts.set(s, (setCounts.get(s) || 0) + 1);
      const cn = x.owner.name;
      charCounts.set(cn, (charCounts.get(cn) || 0) + 1);
    });
    const setOpts = [...setCounts.entries()].sort((a, b) => b[1] - a[1]);
    const charOpts = [...charCounts.entries()].sort((a, b) => a[0].localeCompare(b[0]));

    const basePool = APP.artVaultMode === "go"
      ? rerollAll.filter((x) => x.rerollVerdict === "go")
      : APP.artVaultMode === "reroll"
        ? rerollAll
        : APP.artVaultMode === "four"
          ? allArts.filter((x) => x.is4Liner)
          : allArts;

    const filtered = basePool
      .filter((x) => APP.artSlot === "all" || x.slotShort === APP.artSlot)
      .filter((x) => APP.artSet === "all" || x.ar.set === APP.artSet)
      .filter((x) => APP.artChar === "all" || x.owner.name === APP.artChar)
      .sort((a, b) => {
        if (APP.artSort === "rv_desc") return b.rvRolls - a.rvRolls || b.cv - a.cv;
        if (APP.artSort === "rolls_desc") return Number(b.is4Liner) - Number(a.is4Liner) || b.critRolls - a.critRolls || b.cv - a.cv;
        if (APP.artSort === "lvl_asc") return a.level - b.level || b.cv - a.cv;
        return b.cv - a.cv || b.rvRolls - a.rvRolls;
      });
    const visible = filtered.slice(0, APP.artLimit);
    const cardMode = APP.artVaultMode === "go" || APP.artVaultMode === "reroll" ? "reroll" : "vault";

    bodyHtml = `
      ${renderCvDistBar(allArts)}
      <div class="art-controls">
        <div class="filter-group">
          ${vModes.map(([k, lbl]) => `<button type="button" class="filter-btn ${APP.artVaultMode === k ? "active" : ""}" data-art-vmode="${k}">${esc(lbl)}</button>`).join("")}
        </div>
        <div class="filter-group">
          ${sortBtns.map(([k, lbl]) => `<button type="button" class="filter-btn ${APP.artSort === k ? "active" : ""}" data-art-sort="${k}">${esc(lbl)}</button>`).join("")}
        </div>
      </div>
      ${
        cardMode === "reroll"
          ? `<div class="art-rule-bar"><strong>Quy tắc Bụi Khai Sáng:</strong> Chỉ dùng cho <b>Cát / Ly / Nón</b> đúng bộ cuối · <b>4 dòng gốc</b> · lệch ≥3 chấm (2 Bụi). Không tốn Bụi vào bộ tạm!</div>`
          : ""
      }
      <div class="art-controls">
        <div class="filter-group">
          ${slotBtns.map(([k, lbl]) => `<button type="button" class="filter-btn ${APP.artSlot === k ? "active" : ""}" data-art-slot="${esc(k)}">${esc(lbl)}</button>`).join("")}
        </div>
        <div class="filter-group">
          <select class="art-select" data-art-char aria-label="Lọc theo nhân vật">
            <option value="all" ${APP.artChar === "all" ? "selected" : ""}>Tất cả NV (${charOpts.length})</option>
            ${charOpts.map(([name, cnt]) => `<option value="${esc(name)}" ${APP.artChar === name ? "selected" : ""}>${esc(name)} (${cnt})</option>`).join("")}
          </select>
          <select class="art-select" data-art-set aria-label="Lọc theo bộ Thánh Di Vật">
            <option value="all" ${APP.artSet === "all" ? "selected" : ""}>Tất cả bộ (${setOpts.length})</option>
            ${setOpts.map(([name, cnt]) => `<option value="${esc(name)}" ${APP.artSet === name ? "selected" : ""}>${esc(name)} (${cnt})</option>`).join("")}
          </select>
        </div>
      </div>
      ${visible.length ? `<div class="relic-grid">${visible.map((x) => renderRelicCard(x, cardMode)).join("")}</div>` : `<div class="empty-done">Không có Thánh Di Vật nào khớp bộ lọc.</div>`}
      ${filtered.length > APP.artLimit ? `<div class="art-more-wrap"><button type="button" class="art-more-btn" data-art-more="1">Xem thêm (+36 · đang hiện ${visible.length}/${filtered.length})</button></div>` : ""}
    `;
  }

  return `
    <div class="art-tab-cards">
      ${tabCards
        .map(
          (tc) => `
            <button type="button" class="art-tab-card ${tc.cls} ${APP.artTab === tc.key ? "active" : ""}" data-art-tab="${tc.key}">
              ${renderRingGauge(tc.pct, tc.color, tc.ring, 46)}
              <div class="atc-body">
                <span class="atc-title">${esc(tc.title)}</span>
                <strong>${esc(tc.val)}</strong>
                <small>${esc(tc.sub)}</small>
              </div>
            </button>
          `
        )
        .join("")}
    </div>

    ${bodyHtml}
  `;
}

function renderViewBar() {
  const allTasks = [...ACTIONS, ...SURPLUS_WEAPONS, ...COLLECT_WEAPONS];
  const total = allTasks.length;
  const doneCount = allTasks.filter((a) => APP.done[a.id]).length;
  const pct = Math.round((doneCount / total) * 100);
  const pendingCount = total - doneCount;
  const benchCount = Object.keys(CHAR_BENCHMARKS).length;
  const artCount = (APP.data?.characters || []).reduce((acc, c) => acc + (c.artifacts?.length || 0), 0);

  return `
    <div class="view-bar">
      <nav class="view-tabs">
        <button class="view-tab ${APP.view === "tracker" ? "active" : ""}" data-view="tracker">Việc Làm (${pendingCount})</button>
        <button class="view-tab ${APP.view === "bench" ? "active" : ""}" data-view="bench">Chỉ Số (${benchCount})</button>
        <button class="view-tab ${APP.view === "artifacts" ? "active" : ""}" data-view="artifacts">TDV (${artCount})</button>
        <button class="view-tab ${APP.view === "stage" ? "active" : ""}" data-view="stage">Đội Hình</button>
        <button class="view-tab ${APP.view === "power" ? "active" : ""}" data-view="power">Sức Mạnh (${getDynamicTeams().length})</button>
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
                    <strong class="short-fix">${esc(getActionShortFix(a, c))}</strong>
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
    blocks.push(renderActionBucket("2. Cần Farm · Vùng Đã Mở", `Fontaine ${regionPct("Fontaine")}% · Nod-Krai ${regionPct("Nod-Krai")}% · Inazuma ${regionPct("Inazuma")}%`, "bucket-farm", farmItems));
    blocks.push(renderActionBucket(`3. Snezhnaya (${regionPct("Snezhnaya")}%)`, `${APP.data?.account?.stats?.iceculus_number ?? 10} Băng Thần Đồng · Sách Charity & Boss`, "bucket-later", laterItems));
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
    const items = getDynamicTeams();
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
    const { elig, needGear } = evalTheaterStatus();
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
    const ab = APP.data?.spiral_abyss?.[0];
    return `
      <div class="stage-foot">
        <div class="foot-title">
          <span><strong>La Hoàn</strong> · ${esc(ab?.max_floor || "11-3")} (${esc(ab?.total_star ?? 25)}/36★)</span>
          <span>Tầng 12: Nửa 1 +75% Lunar-Crystallize · Nửa 2 +200 EM</span>
        </div>
      </div>
    `;
  }
  return "";
}

function renderStageView() {
  let items = APP.mode === "teams" ? getDynamicTeams() : MODES[APP.mode].items;
  if (APP.mode === "meta" && APP.data) {
    items = items.map((it) => {
      if (it.title.startsWith("Build Ngay")) return { ...it, sub: `Fontaine ${regionPct("Fontaine")}% · Nod-Krai ${regionPct("Nod-Krai")}%` };
      if (it.title.startsWith("Snezhnaya")) return { ...it, title: `Snezhnaya (${regionPct("Snezhnaya")}%)` };
      return it;
    });
  }
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
        noteText = getActionShortFix(act, c);
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

const TARGET_SET_CHECK = {
  Neuvillette: (s) => /4pc\s+Thợ Săn/i.test(s),
  Furina: (s) => /4pc\s+Đoàn Kịch/i.test(s),
  "Hu Tao": (s) => /4pc\s+Thợ Săn/i.test(s),
  Jean: (s) => /4pc\s+Bóng Hình/i.test(s),
  Mitya: (s) => /4pc\s+Ảo Tưởng/i.test(s),
  "Yae Miko": (s) => /4pc\s+Ảo Tưởng/i.test(s),
  Nilou: (s) => /2pc\s+Thiên Nham.*2pc\s+Vầng Sáng|2pc\s+Vầng Sáng.*2pc\s+Thiên Nham/i.test(s),
  Navia: (s) => /4pc\s+Tiếng Đêm/i.test(s),
  Valeriy: (s) => /4pc\s+Trái Tim Lửa Nung|4pc\s+Nghi Thức Tông Thất/i.test(s),
};

const TEAM_POWER_CFG = {
  "Neuvillette + Furina": {
    weights: [0.46, 0.34, 0.11, 0.09],
    setCheck: ["Neuvillette", "Furina"],
    maxCurCap: 92,
    checks: [
      ({ get, sets, statN }) => (sets(get("Neuvillette")).includes("4pc Thợ Săn") ? null : `Neuv 4pc Thợ Săn (${statN(get("Neuvillette"), "Tỷ Lệ Bạo Kích").toFixed(1)}% CR)`),
      ({ get, tals }) => {
        const f = get("Furina");
        if (!f) return null;
        const lv = f.level || 1;
        const q = tals(f)[2];
        if (lv < 90 && q < 10) return `Furina Lv.${lv}→90 · Q${q}→10`;
        if (lv < 90) return `Furina Lv.${lv}→90`;
        if (q < 10) return `Furina Q${q}→10`;
        return null;
      },
      ({ get, sets }) => (sets(get("Furina")).includes("4pc Đoàn Kịch") ? null : "Furina 4pc Đoàn Kịch"),
    ],
  },
  "Raiden + Furina": {
    weights: [0.38, 0.30, 0.22, 0.10],
    setCheck: ["Furina", "Jean"],
    maxCurCap: 81,
    checks: [
      ({ get, tals, sets }) => {
        const f = get("Furina");
        if (!f) return null;
        const lv = f.level || 1;
        const q = tals(f)[2];
        const parts = [];
        if (lv < 90) parts.push(`Lv.${lv}→90`);
        if (q < 10) parts.push(`Q${q}→10`);
        if (!sets(f).includes("4pc Đoàn Kịch")) parts.push("4pc Đoàn Kịch");
        return parts.length ? `Furina ${parts.join(" · ")}` : null;
      },
      ({ get, sets, wLv }) => {
        const j = get("Jean");
        if (!j) return null;
        const parts = [];
        if (!sets(j).includes("4pc Bóng Hình")) parts.push("4pc Bóng Hình");
        if (wLv(j) < 90) parts.push(`Ống Đồng ${wLv(j)}→90`);
        return parts.length ? `Jean ${parts.join(" · ")}` : null;
      },
      ({ get, wLv }) => (wLv(get("Yelan")) >= 90 ? null : `Yelan Tây Phong ${wLv(get("Yelan"))}→90`),
    ],
  },
  "Raiden National": {
    weights: [0.38, 0.20, 0.24, 0.18],
    setCheck: [],
    maxCurCap: 68,
    checks: [
      ({ get, wLv }) => (wLv(get("Yelan")) >= 90 ? null : `Yelan Tây Phong ${wLv(get("Yelan"))}→90`),
      ({ get, statN }) => (statN(get("Xiangling"), "Tỷ Lệ Bạo Kích") >= 65 ? null : `Tối ưu nhẹ Crit XL (${statN(get("Xiangling"), "Tỷ Lệ Bạo Kích").toFixed(0)}% CR)`),
    ],
  },
  "Keqing Tăng Cường": {
    weights: [0.46, 0.20, 0.24, 0.10],
    setCheck: [],
    maxCurCap: 68,
    checks: [
      ({ get, statN }) => (statN(get("Keqing"), "Tỷ Lệ Bạo Kích") >= 65 ? null : "Keqing Bàn Nham 70% CR"),
      ({ get, statN }) => (statN(get("Yae Miko"), "Tỷ Lệ Bạo Kích") >= 68 ? null : `Yae Nón CR% (${statN(get("Yae Miko"), "Tỷ Lệ Bạo Kích").toFixed(0)}%)`),
      ({ get, sets }) => (sets(get("Keqing")).includes("4pc Như Sấm") ? null : "Tùy chọn 4pc Như Sấm"),
    ],
  },
  "Ayaka Đóng Băng": {
    weights: [0.55, 0.18, 0.15, 0.12],
    setCheck: [],
    maxCurCap: 61,
    checks: [
      ({ get, wR }) => (wR(get("Kamisato Ayaka")) >= 5 ? null : "Amenoma R3→R5"),
    ],
    extraChips: ["Thử Furina + Charlotte"],
  },
  "Hu Tao Bốc Hơi": {
    weights: [0.48, 0.24, 0.18, 0.10],
    setCheck: [],
    maxCurCap: 68,
    checks: [
      ({ get, wLv }) => (wLv(get("Yelan")) >= 90 ? null : `Yelan Tây Phong ${wLv(get("Yelan"))}→90`),
      ({ get, statN }) => (statN(get("Hu Tao"), "Tỷ Lệ Bạo Kích") >= 70 ? null : `Hu Tao CR ${statN(get("Hu Tao"), "Tỷ Lệ Bạo Kích").toFixed(0)}%→70%+`),
      ({ get, tals }) => (tals(get("Hu Tao"))[0] >= 10 ? null : "Hu Tao Đánh Thường 9→10"),
    ],
  },
  "Hu Tao Đánh Đáp": {
    weights: [0.44, 0.24, 0.18, 0.14],
    setCheck: ["Hu Tao", "Furina"],
    maxCurCap: 82,
    checks: [
      ({ get, statN }) => {
        const er = statN(get("Xianyun"), "Hiệu Quả Nạp Nguyên Tố");
        return er >= 160 ? null : `Xianyun Cát ER (${er.toFixed(0)}%→160%+)`;
      },
      ({ get, sets }) => (sets(get("Hu Tao")).includes("4pc Thợ Săn") ? null : "Farm ké 4pc Thợ Săn + Cát EM (tạm Hồi Ức)"),
      ({ get, tals, sets }) => {
        const f = get("Furina");
        if (!f) return null;
        const parts = [];
        if (tals(f)[2] < 10) parts.push(`Q${tals(f)[2]}→10`);
        if (!sets(f).includes("4pc Đoàn Kịch")) parts.push("4pc Đoàn Kịch");
        return parts.length ? `Furina ${parts.join(" · ")}` : null;
      },
    ],
  },
  "Yoimiya Đánh Thường": {
    weights: [0.52, 0.24, 0.14, 0.10],
    setCheck: [],
    maxCurCap: 62,
    checks: [
      ({ get, wLv }) => (wLv(get("Yelan")) >= 90 ? null : `Yelan Tây Phong ${wLv(get("Yelan"))}→90`),
      ({ get, statN }) => (statN(get("Yoimiya"), "Tinh Thông Nguyên Tố") >= 90 ? null : `Bổ sung EM (${Math.round(statN(get("Yoimiya"), "Tinh Thông Nguyên Tố"))}→100+)`),
    ],
  },
  "Ganyu Tan Chảy": {
    weights: [0.52, 0.20, 0.18, 0.10],
    setCheck: [],
    maxCurCap: 60,
    checks: [
      ({ get, statN }) => (statN(get("Ganyu"), "Tinh Thông Nguyên Tố") >= 180 ? null : `Đổi Cát EM (${Math.round(statN(get("Ganyu"), "Tinh Thông Nguyên Tố"))}→220+)`),
    ],
  },
  "Nilou Sum Suê": {
    weights: [0.50, 0.24, 0.16, 0.10],
    setCheck: ["Nilou"],
    maxCurCap: 70,
    checks: [
      ({ get, wLv }) => (wLv(get("Nilou")) >= 90 ? null : `Bến Tàu ${wLv(get("Nilou"))}→90`),
      ({ get, sets, statN }) => (/2pc\s+Thiên Nham.*2pc\s+Vầng Sáng|2pc\s+Vầng Sáng.*2pc\s+Thiên Nham/i.test(sets(get("Nilou"))) && statN(get("Nilou"), "Giới Hạn HP") >= 66000 ? null : `Đổi 2+2 HP% (${(statN(get("Nilou"), "Giới Hạn HP") / 1000).toFixed(1)}k→68k+)`),
      ({ get, statN }) => (statN(get("Sangonomiya Kokomi"), "Tinh Thông Nguyên Tố") >= 400 ? null : "EM cho Kokomi"),
    ],
  },
  "Eula Vật Lý": {
    weights: [0.58, 0.18, 0.14, 0.10],
    setCheck: [],
    maxCurCap: 54,
    checks: [
      ({ get, statN }) => (statN(get("Eula"), "Tỷ Lệ Bạo Kích") >= 68 ? null : `Đẩy CR ${statN(get("Eula"), "Tỷ Lệ Bạo Kích").toFixed(1)}%→70%+`),
    ],
    extraChips: ["Thử Furina + Mika C4"],
  },
  "Navia 2 Nham": {
    weights: [0.54, 0.14, 0.16, 0.16],
    setCheck: ["Navia"],
    maxCurCap: 76,
    checks: [
      ({ get, statN }) => (statN(get("Navia"), "Tỷ Lệ Bạo Kích") >= 70 ? null : `Đẩy lại CR ${statN(get("Navia"), "Tỷ Lệ Bạo Kích").toFixed(1)}%→70%+`),
      ({ get, sets }) => (sets(get("Navia")).includes("4pc Tiếng Đêm") ? null : "Navia 4pc Tiếng Đêm (Tráp)"),
    ],
  },
  "Mitya + Yae Tinh-Siêu Dẫn": {
    weights: [0.44, 0.28, 0.10, 0.18],
    setCheck: ["Mitya", "Yae Miko", "Valeriy"],
    maxCurCap: 98,
    checks: [
      ({ get, wLv, art0 }) => {
        const m = get("Mitya");
        if (!m) return null;
        const todo = [];
        if ((m.level || 1) < 90) todo.push(`Mitya ${m.level}→90`);
        if (wLv(m) < 90) todo.push(`Trấn ${wLv(m)}→90`);
        if (art0(m) > 0) todo.push("Ly EM +20");
        return todo.length ? todo.join(" · ") : null;
      },
      ({ get, sets, statN }) => {
        const y = get("Yae Miko");
        const cr = statN(y, "Tỷ Lệ Bạo Kích");
        const hasSet = /4pc\s+Ảo Tưởng/i.test(sets(y));
        if (cr >= 68 && hasSet) return null;
        return [cr < 68 ? "Yae Nón CR%" : null, !hasSet ? "4pc Ảo Tưởng" : null].filter(Boolean).join(" + ");
      },
      ({ get }) => ((get("Valeriy")?.level || 1) >= 80 ? null : `Valeriy Lv.${get("Valeriy")?.level || 1}→80`),
    ],
    extraChips: ["Đổi Rosaria → Odette"],
  },
};

function evalMemberPower(name, checkSet) {
  const c = byName(name);
  if (!c) return 0.25;
  const spec = CHAR_BENCHMARKS[name];
  let statMult = 0.85;
  if (spec && spec.stats.length) {
    let prod = 1;
    for (const st of spec.stats) {
      const actual = parseStatNum(stat(c, st.key));
      const r = st.target > 0 ? Math.max(0.25, Math.min(actual / st.target, 1.04)) : 1;
      prod *= r;
    }
    statMult = Math.min(1.02, Math.pow(prod, 1 / spec.stats.length));
  }
  const lv = Number(c.level || 1);
  const lvMult = 0.35 + 0.65 * (Math.min(lv, 90) / 90);
  const wLv = Number(c.weapon?.level || 1);
  const wRar = Number(c.weapon?.rarity || 1);
  const wpnMult = wRar <= 2 ? 0.55 : 0.72 + 0.28 * (Math.min(wLv, 90) / 90);
  const tals = parseTalents(c).sort((a, b) => b - a);
  const talMult = 0.65 + 0.35 * Math.min((tals[0] + tals[1]) / 19, 1);
  const arts = (c.artifacts || []).slice(0, 5);
  const artSum = arts.reduce((acc, a) => acc + Math.min(Number(a.level || 0), 20), 0);
  const artMult = 0.65 + 0.35 * (artSum / 100);
  const hasSet = !checkSet || !TARGET_SET_CHECK[name] || TARGET_SET_CHECK[name](c.artifact_sets || "");
  const setMult = hasSet ? 1.0 : 0.86;
  return statMult * lvMult * wpnMult * talMult * artMult * setMult;
}

function getDynamicTeams() {
  return MODES.teams.items.map((it, idx) => {
    const p = it.power;
    const cfg = TEAM_POWER_CFG[it.title];
    if (!cfg || !APP.data) return { ...it, idx };

    let sum = 0;
    let wSum = 0;
    it.members.forEach((m, i) => {
      const w = cfg.weights[i] ?? 0.12;
      sum += w * evalMemberPower(m, cfg.setCheck.includes(m));
      wSum += w;
    });
    const eff = sum / (wSum || 1);
    const cur = Math.min(p.proj, Math.round(cfg.maxCurCap * eff));
    const curTier = dpsToTier(cur);
    const projTier = dpsToTier(p.proj);
    const ready = calcTeamReadiness(it.members);

    const ctx = {
      get: (n) => byName(n),
      sets: (c) => c?.artifact_sets || "",
      tals: (c) => parseTalents(c),
      wLv: (c) => Number(c?.weapon?.level || 1),
      wR: (c) => Number(c?.weapon?.refinement || 1),
      art0: (c) => (c?.artifacts || []).filter((a) => Number(a.level || 0) === 0).length,
      statN: (c, k) => parseStatNum(stat(c, k)),
    };
    const liveChips = (cfg.checks || []).map((fn) => fn(ctx)).filter(Boolean);
    const allChips = [...liveChips, ...(cfg.extraChips || [])];
    const chips = allChips.length ? allChips : ["✓ Đã tối ưu đội hình"];
    const status = cur >= 58 && ready.pct >= 85 ? "ok" : "warn";

    return {
      ...it,
      idx,
      status,
      sub: `${cur}k → ${p.proj}k (${projTier}) · Build ${ready.pct}%`,
      power: {
        ...p,
        cur,
        curTier,
        projTier,
        chips,
        upgrade: liveChips.length ? allChips.join(" · ") : p.upgrade,
      },
    };
  });
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
  const bestRoi = allTeams.reduce((a, b) => (powerGainPct(b.power) > powerGainPct(a.power) ? b : a), allTeams[0]);

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
      label: "#1 Tiềm Năng",
      team: bestRoi,
      metric: `+${powerGainPct(bestRoi.power)}%`,
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
      <span><i class="leg-cur"></i> Hiện tại (${esc(formatCrawlDate())})</span>
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
  const curVals = allTeams.map((t) => t.power.cur);
  const projVals = allTeams.map((t) => t.power.proj);
  const minCur = Math.min(...curVals);
  const maxCur = Math.max(...curVals);
  const xMin = Math.min(40, Math.floor((minCur - 8) / 5) * 5);
  const xMax = Math.max(82, Math.ceil((maxCur + 6) / 5) * 5);
  const yMin = Math.min(50, Math.floor((Math.min(...projVals) - 6) / 5) * 5);
  const yMax = Math.max(102, Math.ceil((Math.max(...projVals) + 4) / 5) * 5);
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const pxX = (v) => padL + ((v - xMin) / (xMax - xMin)) * plotW;
  const pxY = (v) => padT + ((yMax - v) / (yMax - yMin)) * plotH;

  const xMid = pxX(Math.min(xMax - 6, Math.max(xMin + 6, 58)));
  const yMid = pxY(70);

  const xTicks = [];
  for (let v = Math.ceil((xMin + 2) / 10) * 10; v <= xMax - 2; v += 10) xTicks.push(v);
  const yTicks = [60, 70, 80, 90, 100];
  const diagStart = Math.max(xMin, yMin);
  const diagEnd = Math.min(xMax, yMax);

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
          ${diagEnd > diagStart ? `<line x1="${pxX(diagStart).toFixed(1)}" y1="${pxY(diagStart).toFixed(1)}" x2="${pxX(diagEnd).toFixed(1)}" y2="${pxY(diagEnd).toFixed(1)}" class="mx-diag" />` : ""}

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
  const allTeams = getDynamicTeams();

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
                  <strong>${esc(getActionShortFix(act, c))}</strong>
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
                  <h3 class="modal-section-title">${bench ? `So sánh chỉ số lý tưởng (${esc(formatCrawlDate())})` : `Chỉ số thực tế (${esc(formatCrawlDate())})`}</h3>
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
                    ? `<div class="modal-relic-grid">
                        ${arts
                          .map((ar) => {
                            const ev = evalArtifact(ar, c);
                            return `
                              <div class="relic-card rc-${ev.cvTier} modal-relic-card">
                                <div class="rc-head">
                                  <div class="rc-ico-wrap">
                                    ${ar.icon ? `<img class="rc-ico" src="${esc(ar.icon)}" alt="${esc(ev.slotShort)}" loading="lazy" referrerpolicy="no-referrer" />` : ""}
                                  </div>
                                  <div class="rc-title">
                                    <div class="rc-main-row">
                                      <strong>${esc(shortStatName(ar.main_stat))} ${esc(ar.main_val)}</strong>
                                      <span class="rc-lvl ${ev.level < 20 ? "is-low" : ""}">+${esc(ev.level)}</span>
                                    </div>
                                    <small>${esc(ev.slotShort)} · ${esc(ar.set)}</small>
                                  </div>
                                  <div class="rc-badges">
                                    ${ev.cv > 0 ? `<span class="cv-pill cv-${ev.cvTier}">${ev.cv.toFixed(1)} CV</span>` : ""}
                                    ${ev.is4Liner ? `<span class="four-pill is-4">4 dòng</span>` : ""}
                                  </div>
                                </div>
                                ${renderSubstatMiniGrid(ar.substats)}
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
  else if (APP.view === "artifacts") content = renderArtifactsView();
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

  document.querySelectorAll("[data-art-tab]").forEach((b) => {
    b.addEventListener("click", () => {
      APP.artTab = b.getAttribute("data-art-tab");
      render();
    });
  });

  document.querySelectorAll("[data-art-swap-filter]").forEach((b) => {
    b.addEventListener("click", () => {
      APP.artSwapFilter = b.getAttribute("data-art-swap-filter");
      render();
    });
  });

  document.querySelectorAll("[data-art-audit-filter]").forEach((b) => {
    b.addEventListener("click", () => {
      APP.artAuditFilter = b.getAttribute("data-art-audit-filter");
      render();
    });
  });

  document.querySelectorAll("[data-art-vmode]").forEach((b) => {
    b.addEventListener("click", () => {
      APP.artVaultMode = b.getAttribute("data-art-vmode");
      APP.artLimit = 36;
      render();
    });
  });

  document.querySelectorAll("[data-art-slot]").forEach((b) => {
    b.addEventListener("click", () => {
      APP.artSlot = b.getAttribute("data-art-slot");
      APP.artLimit = 36;
      render();
    });
  });

  document.querySelectorAll("[data-art-set]").forEach((sel) => {
    sel.addEventListener("change", () => {
      APP.artSet = sel.value;
      APP.artLimit = 36;
      render();
    });
  });

  document.querySelectorAll("[data-art-char]").forEach((sel) => {
    sel.addEventListener("change", () => {
      APP.artChar = sel.value;
      APP.artLimit = 36;
      render();
    });
  });

  document.querySelectorAll("[data-art-sort]").forEach((b) => {
    b.addEventListener("click", () => {
      APP.artSort = b.getAttribute("data-art-sort");
      APP.artLimit = 36;
      render();
    });
  });

  document.querySelectorAll("[data-art-more]").forEach((b) => {
    b.addEventListener("click", () => {
      APP.artLimit += 36;
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

function hydrateHeader() {
  const acc = APP.data?.account;
  if (!acc) return;
  const bg = document.getElementById("hero-bg");
  const logo = document.getElementById("hero-logo");
  const titleEl = document.getElementById("player-title");
  const eyeEl = document.getElementById("account-eyebrow");
  const abEl = document.getElementById("metric-abyss");
  const onEl = document.getElementById("metric-onslaught");
  const thEl = document.getElementById("metric-theater");

  if (acc.banner && bg) bg.style.backgroundImage = `url('${acc.banner}')`;
  if (acc.logo && logo) logo.src = acc.logo;
  if (titleEl) titleEl.textContent = acc.nickname;
  if (eyeEl) eyeEl.textContent = `ASIA · UID ${acc.uid} · AR ${acc.adventure_rank} · Crawl ${formatCrawlDate(true)}`;

  const ab = APP.data?.spiral_abyss?.[0];
  if (abEl && ab) abEl.textContent = `${ab.max_floor} · ${ab.total_star}★`;

  const st = APP.data?.stygian_onslaught;
  if (onEl && st) onEl.textContent = `${st.difficulty} · ${st.best_time_sec}s`;

  const th = APP.data?.imaginarium_theater;
  if (thEl) {
    const { elig } = evalTheaterStatus();
    const round = th?.max_round_id ?? 3;
    thEl.textContent = `Màn ${round} · ${elig.length}+3`;
  }
}

async function init() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && APP.modalChar) closeCharModal();
  });
  try {
    const res = await fetch(DATA_URL, { cache: "no-cache" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    APP.data = await res.json();
    hydrateHeader();
    render();
  } catch (err) {
    document.getElementById("app-root").innerHTML = `<div class="loading">Không tải được dữ liệu: ${esc(err.message)}</div>`;
  }
}

init();
