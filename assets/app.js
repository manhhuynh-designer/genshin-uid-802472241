const DATA_URL = "./data/genshin_uid_802472241_data.json?v=16";
const STORAGE_KEY = "genshin_uid_802472241_done_v4";

const SET_META = {
  mh: { name: "4pc Thợ Săn Marechaussee", where: "Kết Cục Của Tội Lỗi (Fontaine)", icon: "https://enka.network/ui/UI_RelicIcon_15031_4.png" },
  gt: { name: "4pc Đoàn Kịch Hoàng Kim", where: "Kết Cục Của Tội Lỗi (Fontaine)", icon: "https://enka.network/ui/UI_RelicIcon_15032_4.png" },
  nw: { name: "4pc Tiếng Đêm Trong Rừng Vang", where: "Thành Cổ Rơi Vào Khúc Nhạc (Fontaine) / Tráp Thánh", icon: "https://enka.network/ui/UI_RelicIcon_15034_4.png" },
  esf: { name: "4pc Dấu Ấn Ngăn Cách", where: "Sân Vườn Momiji (Inazuma) / Tráp Thánh", icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/16879d66028f85addecf5a7208f6bffb.png" },
  gd: { name: "4pc Giấc Mộng Hoàng Kim", where: "Tháp Hôn Thần (Sumeru) / Tráp Thánh", icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/857d990ee0b5c27e926f5e3fc642f8ca.png" },
  dw: { name: "4pc Ký Ức Rừng Sâu", where: "Tháp Hôn Thần (Sumeru) / Tráp Thánh", icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/6e1a599dabaefe12d191547469d753cd.png" },
  no: { name: "4pc Nghi Thức Tông Thất Cổ", where: "Tráp Thánh (Strongbox) / Liyue", icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/bd80c45d24f484036927eda40339f730.png" },
  vv: { name: "4pc Bóng Hình Màu Xanh", where: "Vương Quốc Vô Tận (Mondstadt) / Tráp Thánh", icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/79119f6a441fc37f39b08f225d63034b.png" },
  glad: { name: "4pc Giác Đấu Sĩ", where: "Tráp Thánh / Boss Thế Giới", icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/f5a1fb5232b2985617002eac1bfea8e6.png" },
  silken: { name: "4pc Khúc Ca Trăng Lụa", where: "Frostladen Machinery (Nod-Krai)", icon: "https://enka.network/ui/UI_RelicIcon_15042_4.png" },
  dids: { name: "4pc Ảo Tưởng Vụn Vỡ (hoặc Giấc Mộng)", where: "Thorny Crown (Mondstadt) / Tráp Thánh", icon: "https://enka.network/ui/UI_RelicIcon_15046_4.png" },
  furnace: { name: "4pc Trái Tim Lửa Nung (tạm Tông Thất)", where: "Inverted Glacier (Snezhnaya) / Tráp Thánh", icon: "https://enka.network/ui/UI_RelicIcon_15048_4.png" },
  totm: { name: "4pc Thiên Nham Vững Chắc", where: "Kính Nham (Liyue) / Tráp Thánh", icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/e52f0d8928f3982864ecc8ea13165ebf.png" },
};

// Unified per-character action dossier (synced with crawl 24/11/2026 — Furina Lv.80, Raiden 70/132, Mitya Lv.60, Aino Lv.70 C1, Snezhnaya 6%)
const ACTIONS = [
  // Bucket 1: Do now in-game (0 Resin or quick swap / artifact mainstat fix)
  { id: "a_ning", bucket: "now", name: "Ningguang", swapFrom: null, swapNote: "✓ Đã gắn Quyển Thiên Không R2 (2,501 ATK)", fixTitle: "Nâng Ly Nham (+0 → +20) & đổi Nón → CR%", fixSub: "CR đang 14.7% / 169.7% CD · Chỉnh xong sẵn sàng Nhà Hát Màn 8", setKey: null },
  { id: "a_beidou", bucket: "now", name: "Beidou", swapFrom: "Xinyan", swapNote: "Hoặc Kiếm Vô Công 5★ từ Chongyun", fixTitle: "Bỏ kiếm 1★ & lắp đủ 5 món TDV (có Cát ER)", fixSub: "Đang mới 3 món TDV, 111% ER · Cần gấp trước hạn Nhà Hát 01/12", setKey: "esf" },
  { id: "a_fischl", bucket: "now", name: "Fischl", swapFrom: null, swapNote: "✓ Đã gắn Tuyệt Huyền R5 (224 EM · +48% ST Oz)", fixTitle: "Đổi Nón STBK → Nón CR% (đang 31.8% CR)", fixSub: "Giữ 2 Lôi 2 ATK tạm rồi farm dần 4pc Đoàn Kịch ở Fontaine", setKey: "gt" },
  { id: "a_chev", bucket: "now", name: "Chevreuse", swapFrom: null, swapNote: "✓ Đã gắn Hắc Anh Thương R5 (HP lên 25.9k)", fixTitle: "Đổi Ly Hỏa & Nón CR → Full HP% + lên Lv.80", fixSub: "Kéo từ 25.9k → mốc 40,000 HP để mở trọn +40% ATK Quá Tải", setKey: "no" },
  { id: "a_kuki", bucket: "now", name: "Kuki Shinobu", swapFrom: null, swapNote: "✓ Đã gắn Thiết Phong Kích R3 (EM lên 483)", fixTitle: "Đổi Cát ATK / Ly HP / Nón CR → 3 món EM", fixSub: "Kéo từ 483 → ~900+ EM & nâng Lv.80 → 90 tối ưu Nở Rộ", setKey: "gd" },
  { id: "a_raiden", bucket: "now", name: "Raiden Shogun", swapFrom: null, swapNote: "✓ Đã đổi Nón CR% (69.9/132.4 · 258.9% ER · Clear Boss 1 trong 56s)", fixTitle: "Đã ổn định (tùy chọn giữ Trấn Đoạn Thảo R1)", fixSub: "Đổi Kiếm Gỗ cho Bennett từ Nilou để kéo thêm ATK trong Nộ", setKey: null },
  { id: "a_keqing", bucket: "now", name: "Keqing", swapFrom: "Furina", swapNote: "Đang tạm cầm Kiếm Bến Tàu Lv.60 (CR tụt còn 26.0%)", fixTitle: "Câu Ống Đồng cho Furina để trả Bàn Nham Kết Lục", fixSub: "Hoặc lắp tạm Tiếng Hét Của Rồng R5 + đổi Nón CR% khi Furina chưa xong", setKey: null },
  { id: "a_yelan", bucket: "now", name: "Yelan", swapFrom: null, swapNote: "✓ Đã gắn Cung Tây Phong R5 (ER lên 191.2%)", fixTitle: "Nâng Cung Tây Phong Lv.70 → Lv.90", fixSub: "68.9/152.6 · 28.8k HP đã đẹp · Lên 90 thêm ~11% ER là chốt", setKey: null },
  { id: "a_gorou", bucket: "now", name: "Gorou", swapFrom: null, swapNote: "Đang cầm Cung Săn Bắn 1★ Lv.1", fixTitle: "Lắp cung Nạp tạm & thêm Ly (đang 4 món)", fixSub: "Đủ đồ dự bị slot Nham cho Nhà Hát Giả Tưởng 7.2", setKey: null },

  // Bucket 2: Farm in unlocked regions (Fontaine 64%, Nod-Krai 9%, Inazuma 100%, Sumeru 100%)
  { id: "a_furina", bucket: "farm", name: "Furina", swapFrom: null, swapNote: "Đang mượn Bàn Nham R1 (93.1/158.8 · Cát ER đang +0 · 125.9% ER)", fixTitle: "Nâng Cát ER +0 → +20 · Câu Ống Đồng · Kéo Lv.90 & Q10", fixSub: "4pc Thiên Nham ổn tạm · Farm chung 4pc Đoàn Kịch với Neuvillette", setKey: "gt" },
  { id: "a_neuv", bucket: "farm", name: "Neuvillette", swapFrom: null, swapNote: "Giữ Trấn Nghi Thức R1 · Tạm 4pc Trầm Luân (52.8/234.9 · Clear Boss 2 34s)", fixTitle: "Farm tiếp 4pc Thợ Săn Marechaussee (Fontaine)", fixSub: "Đã sửa CR từ 26% → 52.8% (+35.2% Crit) · Qua Thợ Săn nhảy lên ~88.8% CR", setKey: "mh" },
  { id: "a_chiori", bucket: "farm", name: "Chiori", swapFrom: null, swapNote: "✓ Đã đủ Cát DEF% (2,163 DEF · 60.2/71.0)", fixTitle: "Nâng E từ 1 → 8–9 · Nâng Ly Nham (+14 → +20)", fixSub: "Sách Ánh Sáng (Inazuma T4/T7) + tìm thêm dòng phụ STBK", setKey: "gt" },
  { id: "a_aino", bucket: "farm", name: "Aino", swapFrom: null, swapNote: "✓ Đã lên Lv.70 C1 · 1/5/4 · Đại Kiếm Tây Phong Lv.90 R5 (440 EM)", fixTitle: "Nâng tiếp Lv.70 → 80 · Thiên phú 1/5/4 → 1/6/8", fixSub: "Boss Knuckle Duckle + farm dần 4pc Khúc Ca Trăng Lụa (Nod-Krai 9%)", setKey: "silken" },
  { id: "a_jean", bucket: "farm", name: "Jean", swapFrom: null, swapNote: "✓ Đã gắn Tây Phong Kiếm R5 (ER lên 215.4%)", fixTitle: "Nâng Ly ATK% (+0 → +20) · Ép Tráp 4pc Bóng Hình", fixSub: "Nạp đã dư 215% · Hoàn thiện bộ 4pc VV trừ 40% kháng", setKey: "vv" },
  { id: "a_venti", bucket: "farm", name: "Venti", swapFrom: null, swapNote: "Giữ Trấn Tiếng Thở Dài Vô Tận R1 (196.6% ER)", fixTitle: "4 món TDV trên HoYoLAB vẫn ở +0", fixSub: "Nâng Lông/Cát EM/Ly Phong/Nón lên +20 (đã đủ 4pc Bóng Hình)", setKey: "vv" },
  { id: "a_navia", bucket: "farm", name: "Navia", swapFrom: null, swapNote: "✓ Đã chốt 80.0/180.1 · Vương miện E10/Q9 · Kiếm Li Cốt R1", fixTitle: "Tùy chọn: Farm dần 4pc Tiếng Đêm Trong Rừng Vang", fixSub: "Bộ 4pc Phiến Đá hiện tại đã rất khỏe (+29.2% DPS) · Ưu tiên sau Neuvillette", setKey: "nw" },

  // Bucket 3: Snezhnaya unlocked (6%, 8 Iceculus) — start farming!
  { id: "a_mitya", bucket: "later", name: "Mitya", swapFrom: null, swapNote: "✓ Đã lên Lv.60 (64.5/195.5 · 356 EM) · Trấn Sắc Lệnh Tinh Tú Lv.20", fixTitle: "Nâng Ly EM +0 → +20 · Kéo Trấn & Mitya lên Lv.90", fixSub: "Nâng thiên phú (đang 1/1/1 · sách Charity Snezhnaya 6%) & gom 4pc Ảo Tưởng Vụn Vỡ", setKey: "dids" },
  { id: "a_valeriy", bucket: "later", name: "Valeriy", swapFrom: null, swapNote: "✓ Đã lên C3 · Rèn sẵn Nhạc Khúc Biển Sâu (ATK%)", fixTitle: "Khiên + Buff chuyên cho Mitya · Đã mở Snezhnaya · Bắt đầu farm", fixSub: "Cát/Ly/Nón ATK% · Sách Charity chung với Mitya", setKey: "furnace" },
  { id: "a_alyosha", bucket: "later", name: "Alyosha", swapFrom: null, swapNote: "Nhân vật mới (4★ Thương Lôi) · Hợp Thương Tây Phong", fixTitle: "Healer + Buff ATK team Stellar-Conduct · Đã mở Snezhnaya · Bắt đầu farm", fixSub: "Cát ER/ATK% · Ly ATK% · Nón ATK%/Trị Liệu · Ưu tiên E > Q", setKey: "no" },
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
      "Đổi Ly ST Hỏa & Nón CR hiện tại sang cả 2 món HP% (HP đang 25.9k còn thiếu nhiều).",
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
  Keqing: {
    mainStats: "Cát ATK% · Ly ST Lôi · Nón STBK (khi cầm Bàn Nham) / Nón CR% (khi tạm cầm vũ khí khác)",
    targets: "Mục tiêu: Trả Bàn Nham Kết Lục về (~70% CR / ~231% CD) sau khi câu Ống Đồng cho Furina",
    steps: [
      "Hiện đang tạm cầm Kiếm Bến Tàu Lv.60 R1 (CR tụt còn 26.0% / 231.4% CD) vì Furina đang mượn Bàn Nham Kết Lục.",
      "Ưu tiên câu Ống Đồng Fleuve Cendre (Fontaine) cho Furina để trả ngay Bàn Nham về Keqing.",
      "Nếu chưa câu kịp, gắn tạm Tiếng Hét Của Rồng R5 (hoặc Lê Minh) kèm Nón CR% để đi Nhà Hát/La Hoàn.",
    ],
  },
  Furina: {
    mainStats: "Cát ER% (hoặc HP%) · Ly HP% · Nón CR%/CD%",
    targets: "Mục tiêu: Lv.90 · Thiên phú 4/9/10 · ~35k–40k HP · ≥180% ER · 4pc Đoàn Kịch Hoàng Kim",
    steps: [
      "Nâng ngay Cát Hiệu Quả Nạp (Đồng Hồ Vàng Đồng) từ Lv.0 → Lv.20 (ER hiện mới 125.9% chưa xoay kịp Nộ).",
      "Câu Ống Đồng Fleuve Cendre R5 (Fontaine 64%) để trả Bàn Nham Kết Lục về cho Keqing mà vẫn đủ Nạp.",
      "Kéo Furina Lv.80 → Lv.90, nâng Q (8 → 10) + E (8 → 9–10), và farm 4pc Đoàn Kịch Hoàng Kim chung bí cảnh với Neuvillette.",
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
    targets: "Mục tiêu: Lv.80 (hiện Lv.70 C1) · Thiên phú 1/6/8 (hiện 1/5/4) · ≥180% ER · ≥400 EM",
    steps: [
      "Đại Kiếm Tây Phong Lv.90 R5 (191.6% ER · 440 EM) đã rất mượt — cân nhắc rèn Chìa Khóa Vạn Năng khi dư Phôi.",
      "Đánh Boss Knuckle Duckle (Nod-Krai 9%) kéo tiếp Lv.70 → Lv.80 và E/Q từ 5/4 → 6/8.",
      "Farm dần bộ 4pc Khúc Ca Trăng Lụa tại Nod-Krai (9%) để tối ưu buff Moonsign.",
    ],
  },
  Jean: {
    mainStats: "Cát ATK%/ER% · Ly ATK% · Nón CR% hoặc Tăng Trị Liệu",
    targets: "Mục tiêu: ≥180% ER (đã đạt 215.4%) · Đủ bộ 4pc Bóng Hình Màu Xanh",
    steps: [
      "Giữ Tây Phong Kiếm R5 (ER 215.4% rất thoải mái cho Healer toàn đội).",
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
    targets: "Mục tiêu: Lv.90 (hiện Lv.60 · 64.5/195.5 · 356 EM) · Nâng Trấn Lv.90 · Sách Charity",
    steps: [
      "Snezhnaya đã mở 6% (8 Băng Thần Đồng) — nâng ngay Ly EM (Niềm Kiêu Hãnh Băng Giá) từ Lv.0 → Lv.20.",
      "Nâng Trấn 5★ Sắc Lệnh Tinh Tú từ Lv.20 → Lv.90 và kéo Mitya Lv.60 → Lv.90 kèm thiên phú (hiện 1/1/1).",
      "Sưu tầm dần bộ 4pc Ảo Tưởng Vụn Vỡ (hoặc dùng tạm 4pc Giấc Mộng Hoàng Kim).",
    ],
  },
  Valeriy: {
    mainStats: "Cát ATK% · Ly ATK% · Nón ATK%",
    targets: "Đã lên C3 · Mục tiêu: Rèn Nhạc Khúc Biển Sâu · Sách Charity (Snezhnaya)",
    steps: [
      "Tháo Vô Phong Kiếm 1★ — rèn Nhạc Khúc Biển Sâu (Fontaine) vì khiên & buff quill của Valeriy scale thuần ATK.",
      "Farm chung sách Charity tại Snezhnaya cùng Mitya, nâng E & Q làm khiên/buffer cho Mitya.",
      "Lắp 3 món chính ATK% trên bộ 4pc Trái Tim Lửa Nung (hoặc tạm 4pc Tông Thất Cổ).",
    ],
  },
  Alyosha: {
    mainStats: "Cát ER%/ATK% · Ly ATK% · Nón ATK%/Trị Liệu (hoặc CR% nếu Tây Phong)",
    targets: "Nhân vật mới 4★ Lôi · Ưu tiên E > Q · ~180%+ ER",
    steps: [
      "Tháo Thương Tân Thủ 1★ — gắn Thương Tây Phong (hoặc rèn Song of the Vigil tại Snezhnaya).",
      "Ưu tiên nâng Thiên phú E (buff Precision ATK%) → Q (hồi máu & ATK theo tổng ATK), bỏ qua đánh thường.",
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
    action: "Gắn cho Mona Nuke Nộ (hoặc trả lại Heizou)",
    plan: "Ningguang đã cầm Quyển Thiên Không R2 → Chương Nhạc R5 đang rảnh, lắp Mona đẩy lên 53.2/204.6 (Heizou hiện đang cầm sách 1★).",
  },
  {
    id: "s_fish",
    from: "Xinyan",
    to: "Beidou",
    action: "Chuyển từ Xinyan → Beidou Lv.80 C6",
    plan: "Beidou đang cầm kiếm 1★ Lv.1 → nhận Vua Biển R5 (hoặc Kiếm Vô Công 5★ từ Chongyun kèm Cát ER) để đi Nhà Hát 7.2.",
  },
  {
    id: "s_fading",
    from: "Collei",
    to: "Kujou Sara",
    action: "Đổi Lạc Hà R5 cho Kujou Sara thay Cung Rỉ Sét",
    plan: "Sara đang cầm Cung Rỉ Sét (39.2/158.8 · thiếu ER 136.2%) → Lạc Hà Base ATK 565 · 30.6% ER giữ trọn buff ATK & nạp mượt hơn.",
  },
  {
    id: "s_rust",
    from: "Kujou Sara",
    to: null,
    action: "Cất kho dự phòng sau khi Sara lấy Lạc Hà",
    plan: "Yoimiya đã có Cánh Thiên Không 5★ mạnh hơn nên Cung Rỉ Sét R4 tạm cất kho.",
  },
  {
    id: "s_sapwood",
    from: "Nilou",
    to: "Bennett",
    action: "Chuyển cho Bennett (Base ATK 510 → 565)",
    plan: "Nilou scale HP% (51.5k HP) không tận dụng Base ATK → đưa Bennett buff ATK to hơn Răng Nanh Rỉ Sét (vẫn giữ ~249% ER).",
  },
  {
    id: "s_dockhand",
    from: "Keqing",
    to: "Layla",
    action: "Trả Bàn Nham cho Keqing · Chuyển Kiếm Bến Tàu sang Layla",
    plan: "Kiếm Bến Tàu (HP%) vừa chuyển từ Lynette sang Keqing tạm; khi Furina câu xong Ống Đồng, trả Bàn Nham cho Keqing & đưa Kiếm Bến Tàu cho Layla (36.5k HP).",
  },
];

const COLLECT_WEAPONS = [
  {
    id: "c_fleuve",
    name: "Ống Đồng Fleuve Cendre",
    type: "Kiếm Đơn 4★ · 45.9% ER · +CR% E",
    icon: "https://gi.yatta.moe/assets/UI/UI_EquipIcon_Sword_Machination.png",
    source: "Câu cá Fontaine (64%)",
    chars: ["Furina", "Jean", "Lynette", "Xingqiu"],
    extraTarget: "Ưu tiên #1 cho Furina!",
    why: "Đã roll ra Furina → câu ngay Ống Đồng để giải quyết Nạp cho Furina (hiện 125.9% ER) và trả Bàn Nham Kết Lục về Keqing.",
  },
  {
    id: "c_masterkey",
    name: "Chìa Khóa Vạn Năng",
    type: "Trọng Kiếm 4★ · 61.3% ER · +EM",
    icon: "https://gi.yatta.moe/assets/UI/UI_EquipIcon_Claymore_Ilmarinen.png",
    source: "Rèn Nod-Krai (9%)",
    chars: ["Aino"],
    extraTarget: null,
    why: "Nâng cấp rèn F2P cho Aino (hiện đang cầm Đại Kiếm Tây Phong): 61.3% ER + tự cộng EM ngoài sân.",
  },
  {
    id: "c_finale",
    name: "Nhạc Khúc Biển Sâu",
    type: "Kiếm Đơn 4★ · 565 ATK · 27.6% ATK",
    icon: "https://gi.yatta.moe/assets/UI/UI_EquipIcon_Sword_Vorpal.png",
    source: "Rèn Fontaine (Estelle)",
    chars: ["Valeriy", "Kamisato Ayaka"],
    extraTarget: null,
    why: "Tốt nhất cho Valeriy (buff quill & khiên scale thuần theo Tổng ATK), thay cho kiếm 1★ hiện tại.",
  },
  {
    id: "c_amber",
    name: "Mẫu Kim Phách",
    type: "Pháp Khí 4★ · 41.3% HP · Hồi máu Nộ",
    icon: "https://gi.yatta.moe/assets/UI/UI_EquipIcon_Catalyst_Proto.png",
    source: "Rèn Liyue / Mondstadt (100%)",
    chars: ["Mona", "Sucrose", "Charlotte"],
    extraTarget: null,
    why: "Cả acc chưa có cây nào: biến Mona/Sucrose thành Healer phụ kiêm hồi Năng Lượng khi Nộ.",
  },
  {
    id: "c_hakushin",
    name: "Vòng Bạch Thần",
    type: "Pháp Khí 4★ · 30.6% ER · Buff Lôi",
    icon: "https://gi.yatta.moe/assets/UI/UI_EquipIcon_Catalyst_Bakufu.png",
    source: "Nhiệm vụ Inazuma (100%)",
    chars: ["Sucrose", "Mona", "Lisa"],
    extraTarget: null,
    why: "Bản vẽ từ chuỗi quest Anh Đào Thần: buff thẳng ST nguyên tố cho team Keqing / Mitya khi kích phản ứng Lôi.",
  },
  {
    id: "c_moonweaver",
    name: "Bình Minh Của Người Dệt Trăng",
    type: "Kiếm Đơn 4★ · 565 ATK · +ST Nộ",
    icon: "https://gi.yatta.moe/assets/UI/UI_EquipIcon_Sword_Miekka.png",
    source: "World Quest Nod-Krai (Đảo Hiisi)",
    chars: ["Lynette", "Keqing", "Kaeya"],
    extraTarget: "Free 100% không tốn Phôi",
    why: "Nhận trực tiếp sau chuỗi quest Polkka Beneath the Moon's Oracle — cực mạnh cho nhân vật Nộ 40–60 năng lượng.",
  },
  {
    id: "c_ezpitzal",
    name: "Sáo Ezpitzal",
    type: "Kiếm Đơn 4★ · 69.0% DEF · +DEF E",
    icon: "https://gi.yatta.moe/assets/UI/UI_EquipIcon_Sword_Isikhulu.png",
    source: "Giải đố Natlan (4%)",
    chars: [],
    extraTarget: "Free 1 bản · Để sẵn cho Xilonen",
    why: "Làm giải đố Furnace of Fiery Embers nhận free 1 cây (BiS F2P cho Xilonen trong danh sách roll sắp tới).",
  },
];

const FARM_DAYS = [
  { key: 1, short: "T2", title: "Thứ 2", chars: ["Chiori", "Aino", "Furina"], resin: "3× Boss Tuần (Narwhal cho Furina/Chiori + Aino) · Sách Aino", extra: "Nhặt Cỏ Naku, Hoa Lumidouce, Hoa Hồ Lô Ánh Sáng" },
  { key: 2, short: "T3", title: "Thứ 3", chars: ["Furina", "Aino", "Kuki Shinobu"], resin: "Sách Chính Nghĩa (Fontaine — Q/E Furina) · Boss Vịt Nắm Đấm (Nod-Krai — Aino)", extra: "Câu cá Fontaine lấy Ống Đồng Fleuve Cendre cho Furina" },
  { key: 3, short: "T4", title: "Thứ 4", chars: ["Chiori", "Yelan", "Aino"], resin: "Sách Ánh Sáng (Inazuma — E Chiori) · Nâng Cung Tây Phong (Yelan 70 → 90)", extra: "Ép Tráp Thánh → Bóng Hình Màu Xanh (Jean) / Tông Thất (Chev) / Tiếng Đêm (Navia)" },
  { key: 4, short: "T5", title: "Thứ 5", chars: ["Neuvillette", "Furina", "Fischl"], resin: "Full Nhựa: Kết Cục Của Tội Lỗi (Fontaine) — 4pc Thợ Săn & 4pc Đoàn Kịch", extra: "Nhặt lại đặc sản (hồi 48h)" },
  { key: 5, short: "T6", title: "Thứ 6", chars: ["Furina", "Neuvillette", "Aino"], resin: "Sách Chính Nghĩa (Furina) + Check Ảo Cảnh / TDV Fontaine", extra: "Hoàn tất lắp đồ cho Beidou/Gorou/Ningguang trước Nhà Hát 01/12" },
  { key: 6, short: "T7", title: "Thứ 7", chars: ["Chiori", "Yelan", "Mitya"], resin: "Chốt Sách Ánh Sáng (Chiori E 8–9) · Chốt nâng Cung Tây Phong 90", extra: "Leo lại La Hoàn Tầng 11-3 & Tầng 12 (vừa có Furina!)" },
  { key: 0, short: "CN", title: "Chủ Nhật", chars: ["Furina", "Neuvillette", "Mitya"], resin: "Bù Sách Chính Nghĩa (Furina) / Sách Charity (Mitya) / Kết Cục Của Tội Lỗi", extra: "Farm sách Charity & Boss Snezhnaya (6%) cho Mitya (Lv.60), Valeriy (C3) & Alyosha" },
];

const MODES = {
  teams: {
    label: "Đội Hình",
    items: [
      {
        title: "Neuvillette + Furina Hyper",
        sub: "✓ Clear Ảo Cảnh Boss 2 trong 34s (kỷ lục mới 191s!)",
        note: "Vừa có Furina Lv.80 ghép song Thủy · Nâng Cát ER +20 & farm thêm 4pc Thợ Săn/Đoàn Kịch",
        status: "ok",
        members: ["Neuvillette", "Furina", "Kaedehara Kazuha", "Zhongli"],
        power: { cur: 64, proj: 92, curTier: "A+", projTier: "S+", role: "AOE · Đơn", tags: ["st", "aoe", "upgrade"], badge: "Ảo Cảnh 34s", upgrade: "Neuv 4pc Thợ Săn + Furina Lv.90 Q10 / 4pc Đoàn Kịch / Ống Đồng (chung 1 bí cảnh Fontaine)" },
      },
      {
        title: "Raiden + Furina Hyper",
        sub: "✓ Raiden 69.9/132.4 · Clear Ảo Cảnh Boss 1 trong 56s",
        note: "Raiden vừa đổi Nón CR% cực ổn định · Furina + Yae + Yelan nổ sát thương cực nhanh",
        status: "ok",
        members: ["Raiden Shogun", "Furina", "Yae Miko", "Yelan"],
        power: { cur: 62, proj: 78, curTier: "A+", projTier: "S", role: "Đơn mục tiêu", tags: ["st", "upgrade"], badge: "Ảo Cảnh 56s", upgrade: "Furina Lv.90 Q10 + Cát ER +20/4pc Đoàn Kịch · Yelan Tây Phong 90 · Yae tăng CR (60%+)" },
      },
      {
        title: "Raiden National",
        sub: "Ổn định Boss đơn · XL Lao Xiên Cá (245.6% ER)",
        note: "Sẵn sàng 100% · Chuyển Kiếm Gỗ sang Bennett càng khỏe",
        status: "ok",
        members: ["Raiden Shogun", "Bennett", "Xiangling", "Yelan"],
        power: { cur: 61, proj: 68, curTier: "A+", projTier: "A+", role: "Đơn mục tiêu", tags: ["st"], badge: "Sẵn sàng 100%", upgrade: "Bennett đổi Kiếm Gỗ (565 Base ATK) · Yelan Tây Phong 90 · Tối ưu nhẹ Crit Xiangling" },
      },
      {
        title: "Keqing Tăng Cường",
        sub: "Tạm cầm Kiếm Bến Tàu (26.0/231.4) do Furina mượn Bàn Nham",
        note: "Câu Ống Đồng cho Furina để trả Bàn Nham (70/231) · Nahida 1,012 EM · Kazuha 1,011 EM",
        status: "warn",
        members: ["Keqing", "Nahida", "Yae Miko", "Kaedehara Kazuha"],
        power: { cur: 45, proj: 65, curTier: "B", projTier: "A+", role: "Đơn · AOE nhanh", tags: ["st", "aoe", "upgrade"], badge: "Hồi phục 0 Nhựa", upgrade: "Câu Ống Đồng cho Furina để trả Bàn Nham Kết Lục về Keqing (CR nhảy 26% → 70%)" },
      },
      {
        title: "Ayaka Đóng Băng",
        sub: "Ayaka 10/10/10 · Mona 8/8/13 (có thể thay bằng Furina)",
        note: "Sẵn sàng 100% · ~95% CR thực · Đổi Rosaria C6 + Kokomi Thiên Nham càng khỏe",
        status: "ok",
        members: ["Kamisato Ayaka", "Mona", "Kaedehara Kazuha", "Sangonomiya Kokomi"],
        power: { cur: 54, proj: 67, curTier: "A", projTier: "A+", role: "AOE Đóng Băng", tags: ["aoe"], badge: "~95% CR thực", upgrade: "Thử ghép Furina + Kokomi/Charlotte hoặc Rosaria C6 + Kokomi Thiên Nham · Amenoma R5" },
      },
      {
        title: "Hu Tao Bốc Hơi",
        sub: "2 Thủy + Khiên Zhongli",
        note: "Sẵn sàng 100% · 2 Hòa Phác Diên riêng",
        status: "ok",
        members: ["Hu Tao", "Yelan", "Xingqiu", "Zhongli"],
        power: { cur: 59, proj: 72, curTier: "A+", projTier: "S", role: "Đơn mục tiêu", tags: ["st"], badge: "Ổn định 2 Thủy", upgrade: "Yelan Tây Phong 70→90 · Kéo nhẹ CR Hu Tao (54%→70%+) · Thử ghép Furina + Xianyun" },
      },
      {
        title: "Yoimiya Đánh Thường",
        sub: "Yoimiya 74/203 · Yun Jin C6",
        note: "Sẵn sàng 100% · 2,160 DEF Yun Jin",
        status: "ok",
        members: ["Yoimiya", "Yelan", "Yun Jin", "Zhongli"],
        power: { cur: 55, proj: 62, curTier: "A", projTier: "A", role: "Boss bay · Đơn", tags: ["st"], badge: "Sẵn sàng 100%", upgrade: "Yelan Tây Phong 70→90 · Bổ sung ~100 EM cho Yoimiya để tối ưu Bốc Hơi" },
      },
      {
        title: "Ganyu Tan Chảy",
        sub: "Ganyu 10/10/10 · 4pc Đoàn Hát",
        note: "Sẵn sàng 100%",
        status: "ok",
        members: ["Ganyu", "Bennett", "Xiangling", "Zhongli"],
        power: { cur: 52, proj: 60, curTier: "A", projTier: "A", role: "Đơn · Nuke", tags: ["st"], badge: "Sẵn sàng 100%", upgrade: "Đổi Cát EM (~220+ EM) cho Ganyu · Bennett đổi Kiếm Gỗ tăng buff ATK" },
      },
      {
        title: "Nilou Sum Suê",
        sub: "51.5k HP · Nahida 4pc Rừng Sâu (1,012 EM)",
        note: "Sẵn sàng 100%",
        status: "ok",
        members: ["Nilou", "Nahida", "Sangonomiya Kokomi", "Collei"],
        power: { cur: 56, proj: 70, curTier: "A+", projTier: "S", role: "Vua AOE (2+ quái)", tags: ["aoe", "upgrade"], badge: "AOE 78k+", upgrade: "Đổi Nilou sang 2pc+2pc HP% (51.5k → 68k+ HP) · Bổ sung EM cho Kokomi khi đánh AOE" },
      },
      {
        title: "Eula Vật Lý",
        sub: "C2 10/10/10 · Rosaria C6 bù CR",
        note: "Tình huống / Siêu Dẫn · CR 51.7%",
        status: "warn",
        members: ["Eula", "Raiden Shogun", "Rosaria", "Zhongli"],
        power: { cur: 48, proj: 56, curTier: "B+", projTier: "A", role: "Nuke Vật Lý", tags: ["st"], badge: "Tình huống", upgrade: "Đẩy CR Eula (51.7%→70%+) giảm hụt Nộ · Hoặc ghép Furina + Raiden + Mika C4" },
      },
      {
        title: "Navia 2 Nham",
        sub: "✓ Đã chốt 80.0/180.1 · Vương miện E10/Q9 · Li Cốt R1",
        note: "Navia đã hoàn chỉnh · Còn nâng E Chiori (1 → 8–9)",
        status: "ok",
        members: ["Navia", "Chiori", "Bennett", "Xiangling"],
        power: { cur: 58, proj: 76, curTier: "A+", projTier: "S", role: "Phá khiên · Đơn", tags: ["st", "upgrade"], badge: "La Hoàn 12 Nửa 1", upgrade: "Nâng E Chiori 1→9 + Ly Nham +20 + tìm STBK (hiện 71%) · Bennett đổi Kiếm Gỗ" },
      },
      {
        title: "Mitya Meta 7.2",
        sub: "Snezhnaya 6% · Mitya Lv.60 (64.5/195.5) · Aino Lv.70 C1 · Valeriy C3",
        note: "Nâng Ly EM Mitya +0→+20, kéo Trấn & Lv.90 + farm sách Charity cho bộ 3",
        status: "warn",
        members: ["Mitya", "Valeriy", "Kaedehara Kazuha", "Aino"],
        power: { cur: 28, proj: 96, curTier: "C", projTier: "S+", role: "Meta 7.2 · Đơn/AOE", tags: ["st", "aoe", "upgrade"], badge: "Trần cao nhất 7.2", upgrade: "Mitya Lv.60→90 + Trấn 20→90 + Ly EM +20 + Valeriy C3 Lv.80 + Aino 4pc Khúc Ca" },
      },
    ],
  },
  abyss: {
    label: "La Hoàn",
    items: [
      { title: "12 · Nửa 1 — Navia Phá Khiên", sub: "+75% Lunar-Crystallize · 12-3 Moongecko", note: "✓ Navia đã chốt 80/180 (6/10/9) · Còn nâng E Chiori để vượt 12-3 nhẹ nhàng", status: "ok", members: ["Navia", "Zhongli", "Chiori", "Xianyun"] },
      { title: "12 · Nửa 2 — Neuvillette Furina", sub: "+200 EM · Vừa có Furina · Kỷ lục Ảo Cảnh 34s", note: "Kẹp Neuvillette + Furina + Kazuha + Zhongli hoặc Raiden National (vừa clear 56s)", status: "ok", members: ["Neuvillette", "Furina", "Kaedehara Kazuha", "Zhongli"] },
      { title: "12 · Nửa 2 — Raiden National", sub: "+200 EM · 12-1 Wavebinder · 12-2 Hỏa/Lôi", note: "✓ Raiden vừa đổi Nón CR% (69.9/132.4) sẵn sàng đánh ngay", status: "ok", members: ["Raiden Shogun", "Bennett", "Xiangling", "Yelan"] },
      { title: "12 · Nửa 1 — Eula Siêu Dẫn", sub: "12-2 Frostnight Herra · Blessing Siêu Dẫn", note: "Rosaria C6 (74% CR) đi kèm bù CR", status: "warn", members: ["Eula", "Raiden Shogun", "Rosaria", "Zhongli"] },
    ],
  },
  theater: {
    label: "Nhà Hát",
    items: [
      { title: "Màn 3 · Jadeplume Terrorshroom", sub: "Kích Lôi nhanh", note: "Mở màn bằng Lôi + Thủy", status: "ok", members: ["Keqing", "Fischl", "Xingqiu", "Barbara"] },
      { title: "Màn 6 · Whisperer of Nightmares", sub: "Phá khiên Thủy + Lôi", note: "✓ Ayato 62.5/152.1 & Aino Lv.70 C1 đã mở khóa slot · Sẵn sàng!", status: "ok", members: ["Kamisato Ayato", "Yae Miko", "Yelan", "Kuki Shinobu"] },
      { title: "Màn 8 · Battle-Hardened Samachurl", sub: "Bắt buộc giữ Nham + Thủy", note: "✓ Navia 80/180 sẵn sàng · Lắp đồ Beidou/Gorou & nâng Ly/Nón CR% Ningguang", status: "warn", members: ["Navia", "Zhongli", "Chiori", "Xingqiu"] },
      { title: "Màn 10 · Radiant Moonfly", sub: "Cần Healer + Buff toàn đội mạnh", note: "✓ Đã sở hữu Furina Lv.80! Ưu tiên mượn thêm Xilonen từ bạn", status: "ok", members: ["Neuvillette", "Furina", "Raiden Shogun", "Sangonomiya Kokomi"] },
    ],
  },
  meta: {
    label: "Meta 7.2",
    items: [
      { title: "Build Ngay (Vùng Đã Mở)", sub: "Fontaine (64%) · Nod-Krai (9%) · Inazuma (100%)", note: "✓ Vừa có Furina Lv.80 & Aino Lv.70 C1 · Câu Ống Đồng + farm Kết Cục Của Tội Lỗi", status: "ok", members: ["Furina", "Neuvillette", "Aino", "Chiori"] },
      { title: "Snezhnaya Đã Mở (6%)", sub: "Đã có 8 Băng Thần Đồng · Mitya đã lên Lv.60 (64.5/195.5)", note: "Nâng Trấn Mitya 20→90 · Valeriy C3 · Alyosha (4★ Thương Lôi)", status: "warn", members: ["Mitya", "Valeriy", "Alyosha", "Aino"] },
      { title: "Mục Tiêu Roll Bổ Sung", sub: "✓ Đã sở hữu Furina! (Pity 5★ hiện tại: 0 · 24/11)", note: "Mục tiêu tiếp theo: Xilonen · Odette · Columbina", status: "ok", members: ["Furina", "Xilonen", "Odette", "Columbina"] },
    ],
  },
};

let APP = {
  data: null,
  view: "tracker",   // tracker | stage | power | week
  filter: "pending", // pending | all
  mode: "teams",
  index: 0,
  powerSort: "proj", // proj | cur | gain
  powerTag: "all",   // all | st | aoe | upgrade
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
  const emSet = new Set(["Nahida", "Kuki Shinobu", "Aino", "Kaedehara Kazuha", "Sucrose"]);
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

function renderTodayStrip() {
  const todayKey = new Date().getDay();
  const day = FARM_DAYS.find((d) => d.key === todayKey) || FARM_DAYS[0];
  const faces = day.chars
    .map((n) => {
      const c = byName(n);
      return c?.icon ? `<img src="${esc(c.icon)}" alt="${esc(n)}" title="${esc(n)}" referrerpolicy="no-referrer" />` : "";
    })
    .join("");

  return `
    <section class="today-strip">
      <div class="today-left">
        <span class="today-badge">Hôm nay · ${esc(day.title)}</span>
        <div class="today-faces">${faces}</div>
        <div class="today-text">${esc(day.resin)}<span class="sep">·</span>${esc(day.extra)}</div>
      </div>
    </section>
  `;
}

function renderViewBar() {
  const allTasks = [...ACTIONS, ...SURPLUS_WEAPONS, ...COLLECT_WEAPONS];
  const total = allTasks.length;
  const doneCount = allTasks.filter((a) => APP.done[a.id]).length;
  const pct = Math.round((doneCount / total) * 100);
  const pendingCount = total - doneCount;

  return `
    <div class="view-bar">
      <nav class="view-tabs">
        <button class="view-tab ${APP.view === "tracker" ? "active" : ""}" data-view="tracker">Việc Cần Làm (${pendingCount})</button>
        <button class="view-tab ${APP.view === "stage" ? "active" : ""}" data-view="stage">Sân Khấu Đội Hình</button>
        <button class="view-tab ${APP.view === "power" ? "active" : ""}" data-view="power">So Sánh Sức Mạnh (${MODES.teams.items.length})</button>
        <button class="view-tab ${APP.view === "week" ? "active" : ""}" data-view="week">Lịch Farm 7 Ngày</button>
      </nav>
      <div class="progress-inline">
        <span>Đã xong <strong>${doneCount}/${total}</strong></span>
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
        <h2>${esc(title)} (${filtered.length})</h2>
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

            const weaponCol = a.swapFrom
              ? `<div class="col-weapon">
                  ${fromC?.icon ? `<img class="mini-face" src="${esc(fromC.icon)}" title="Từ ${esc(a.swapFrom)}" referrerpolicy="no-referrer" />` : ""}
                  <span class="swap-arrow">→</span>
                  ${w?.icon ? `<img class="w-pic" src="${esc(w.icon)}" alt="${esc(w.name)}" referrerpolicy="no-referrer" />` : ""}
                  <div>
                    <b>Đổi sang ${esc(w?.name || "")}</b>
                    <span>${esc(a.swapNote)}</span>
                  </div>
                </div>`
              : `<div class="col-weapon">
                  ${w?.icon ? `<img class="w-pic" src="${esc(w.icon)}" alt="${esc(w.name)}" referrerpolicy="no-referrer" />` : ""}
                  <div>
                    <b>${esc(w?.name || "-")} (R${esc(w?.refinement || 1)} · Lv.${esc(w?.level || 1)})</b>
                    <span>${esc(a.swapNote)}</span>
                  </div>
                </div>`;

            const artCol = s
              ? `<div class="col-artifact">
                  <img src="${esc(s.icon)}" alt="${esc(s.name)}" loading="lazy" referrerpolicy="no-referrer" />
                  <div>
                    <strong>${esc(s.name)}</strong>
                    <small>${esc(s.where)}</small>
                  </div>
                </div>`
              : `<div class="col-artifact">
                  <div>
                    <strong style="color:var(--ok);">Bộ TDV hiện tại đã ổn</strong>
                    <small>${esc(c?.artifact_sets || "")}</small>
                  </div>
                </div>`;

            return `
              <div class="action-row ${isDone ? "done" : ""}" data-open-char="${esc(a.name)}">
                <div class="col-char">
                  <input type="checkbox" data-act-id="${esc(a.id)}" ${isDone ? "checked" : ""} aria-label="Hoàn thành ${esc(a.name)}" />
                  ${c?.icon ? `<img src="${esc(c.icon)}" alt="${esc(a.name)}" referrerpolicy="no-referrer" />` : ""}
                  <div>
                    <strong>${esc(a.name)}</strong>
                    <small>Lv.${esc(c?.level ?? "-")} · C${esc(c?.constellation ?? "-")} · ${esc(c?.talent_levels ?? "")}</small>
                    ${c ? `<small class="char-live-stat">${esc(compactStats(c))}</small>` : ""}
                  </div>
                </div>
                ${weaponCol}
                <div class="col-fix">
                  <span class="fix-badge ${a.bucket === "now" ? "" : "warn"}">${a.bucket === "now" ? "● Làm ngay" : a.bucket === "farm" ? "● Cần farm" : "● Snezhnaya"}</span>
                  <span class="fix-detail">${esc(a.fixTitle)}</span>
                  <span class="fix-sub">${esc(a.fixSub)}</span>
                  <span class="row-detail-hint">Chi tiết &amp; 5 món TDV →</span>
                </div>
                ${artCol}
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
        <h2>4. Vũ Khí Dư Sau Chỉnh &amp; Plan Dùng Tiếp (${filtered.length})</h2>
        <span>Tận dụng lại đồ Lv.60–90 vừa tháo ra, tránh bỏ phí hoặc thiếu slot Nhà Hát 7.2</span>
      </div>
      <div class="action-table">
        ${filtered
          .map((s) => {
            const fromC = s.from ? byName(s.from) : null;
            const toC = s.to ? byName(s.to) : null;
            const w = s.customWeapon || fromC?.weapon;
            const isDone = !!APP.done[s.id];

            const fromHtml = fromC
              ? `<span class="sflow-char">
                  ${fromC.icon ? `<img src="${esc(fromC.icon)}" alt="${esc(s.from)}" loading="lazy" referrerpolicy="no-referrer" />` : ""}
                  <span>${esc(s.from)}</span>
                </span>`
              : `<span class="sflow-vault">${esc(s.fromLabel || "Trong túi đồ")}</span>`;

            const destHtml = toC
              ? `<span class="sflow-char">
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
                    <small>${esc(w?.rarity || 4)}★ Lv.${esc(w?.level || 1)} R${esc(w?.refinement || 1)}${w?.substat_name ? ` · ${esc(w.substat_name)} ${esc(w.substat_val)}` : ""}</small>
                  </div>
                </div>
                <div class="col-sflow">
                  ${fromHtml}
                  <span class="swap-arrow">→</span>
                  ${destHtml}
                </div>
                <div class="col-splan">
                  <b>${esc(s.action)}</b>
                  <span>${esc(s.plan)}</span>
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
        <h2>5. Vũ Khí Miễn Phí / Rèn Đáng Thu Thập Sau (${filtered.length})</h2>
        <span>Món acc chưa thấy sở hữu · làm quest, câu cá hoặc rèn khi đủ Phôi</span>
      </div>
      <div class="action-table">
        ${filtered
          .map((w) => {
            const isDone = !!APP.done[w.id];
            const faces = w.chars
              .map((n) => {
                const c = byName(n);
                return `<span class="sflow-char">
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
                  <b>${esc(w.why)}</b>
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
  const totalCount = ACTIONS.length + SURPLUS_WEAPONS.length + COLLECT_WEAPONS.length;

  const body = [
    renderActionBucket("1. Làm Ngay Trong Game — 0 Tốn Nhựa", "Đổi vũ khí đang nằm ở nhân vật dự bị & sửa dòng chính TDV có sẵn", "bucket-now", nowItems),
    renderActionBucket("2. Cần Farm — Vùng Đã Mở", "Fontaine (64%) · Nod-Krai (9%) · Inazuma (100%) · Sumeru (100%)", "bucket-farm", farmItems),
    renderActionBucket("3. Đã Mở Snezhnaya (6%) — Bắt Đầu Farm", "Đã mở 6% map & 8 Băng Thần Đồng · Bắt đầu farm sách Charity & Boss", "bucket-later", laterItems),
    renderSurplusBucket(),
    renderCollectBucket(),
  ].join("");

  return `
    <div class="tracker-controls">
      <div class="filter-group">
        <button class="filter-btn ${APP.filter === "pending" ? "active" : ""}" data-filter="pending">Chỉ hiện việc chưa xong</button>
        <button class="filter-btn ${APP.filter === "all" ? "active" : ""}" data-filter="all">Hiện tất cả (${totalCount})</button>
      </div>
      <span style="font-size:12px; color:var(--muted);">Tick vào ô vuông khi làm xong trong game — tự lưu trên trình duyệt</span>
    </div>
    ${body || `<div style="padding:36px 0; text-align:center; color:var(--ok); font-weight:600;">Bạn đã tick hoàn thành toàn bộ danh sách chỉnh sửa!</div>`}
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
    return `
      <div class="stage-foot stage-power-foot">
        <div class="stage-power-top">
          <div class="stage-power-meta">
            <span>Hiện tại <strong>~${p.cur}k DPS</strong> <em class="tier-pill ${tierClass(p.curTier)}">${esc(p.curTier)}</em></span>
            <span class="swap-arrow">→</span>
            <span>Dự tính <strong>~${p.proj}k DPS</strong> <em class="tier-pill ${tierClass(p.projTier)}">${esc(p.projTier)}</em></span>
            <span class="power-gain">+${gain}%</span>
          </div>
          <button class="power-jump-btn" type="button" data-view-jump="power">Xem bảng so sánh ${items.length} đội →</button>
        </div>
        <div class="power-bar-track">
          <div class="power-bar-proj" style="width:${projW}%"></div>
          <div class="power-bar-cur" style="width:${curW}%"></div>
        </div>
        <div class="stage-power-note"><strong>Nút thắt chính:</strong> ${esc(p.upgrade)}</div>
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
          <span><strong>${elig.length} nhân vật Lv.70+</strong> + 3 Trial (Flins, Aino, Kachina) · Hạn 01/12</span>
          <span style="color:var(--bad);">Đỏ = Beidou/Gorou còn vũ khí 1★ · Ningguang cần nâng Ly +0 &amp; Nón CR%</span>
        </div>
        <div class="theater-faces">
          ${elig
            .map(
              (c) => `<span class="t-face ${needGear.has(c.name) ? "warn" : ""}" data-open-char="${esc(c.name)}" title="${esc(c.name)} Lv.${c.level} C${c.constellation} — bấm xem chi tiết">
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
          <span><strong>La Hoàn 16.11–16.12</strong> · Hiện tại: 11-3 (25/36★)</span>
          <span>Tầng 11: +60% Lôi/Nham · Tầng 12: Nửa 1 +75% Lunar-Crystallize · Nửa 2 +200 EM</span>
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
      let noteText = c ? "Đã ổn định" : "Mục tiêu roll";
      if (isPending) {
        noteClass = act.bucket === "now" ? "note-bad" : "note-warn";
        noteText = act.fixTitle;
      } else if (act && APP.done[act.id]) {
        noteText = "✓ Đã xong";
      }

      return `
        <article class="character-pillar" style="--el: var(--el-${esc(el)}, 211,188,142);" ${c ? `data-open-char="${esc(name)}"` : ""}>
          <div class="splash-wrap">
            ${artUrl ? `<img class="splash-img" src="${esc(artUrl)}" alt="${esc(name)}" referrerpolicy="no-referrer" />` : `<div class="splash-ghost">${esc(name.slice(0, 2).toUpperCase())}</div>`}
          </div>
          <div class="pillar-meta">
            <div class="pillar-name-row">
              <strong>${esc(name)}</strong>
              <span>${c ? `Lv.${esc(c.level)} · C${esc(c.constellation)}` : "Target"}</span>
            </div>
            ${
              c
                ? `<div class="pillar-gear">
                    ${wIcon ? `<img src="${esc(wIcon)}" title="${esc(c.weapon?.name || "")}" referrerpolicy="no-referrer" />` : ""}
                    ${artIcons.map((u) => `<img src="${esc(u)}" referrerpolicy="no-referrer" />`).join("")}
                    <span class="talent-txt">${esc(c.talent_levels)}</span>
                  </div>`
                : `<div class="pillar-gear"><span class="talent-txt">Chưa sở hữu</span></div>`
            }
            ${c ? `<div class="pillar-stats">${esc(compactStats(c))}</div>` : ""}
            <div class="pillar-note ${noteClass}">${esc(noteText)}</div>
            ${c ? `<button class="jump-link" data-open-char="${esc(name)}">${isPending ? "Xem chi tiết sửa →" : "Xem chỉ số &amp; TDV →"}</button>` : ""}
          </div>
        </article>
      `;
    })
    .join("");

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
          <span class="showcase-sub">${esc(active.note)}</span>
        </div>
        <div class="party-stage">${pillarsHtml}</div>
        ${renderFoot()}
      </section>
    </section>
  `;
}

function renderPowerView() {
  const allTeams = MODES.teams.items.map((it, idx) => ({ ...it, idx }));
  const maxProj = Math.max(...allTeams.map((t) => t.power.proj), 1);

  const topCur = allTeams.reduce((a, b) => (b.power.cur > a.power.cur ? b : a), allTeams[0]);
  const topProj = allTeams.reduce((a, b) => (b.power.proj > a.power.proj ? b : a), allTeams[0]);
  const topGain = allTeams.reduce((a, b) => (powerGainPct(b.power) > powerGainPct(a.power) ? b : a), allTeams[0]);

  const filtered = allTeams.filter((t) => APP.powerTag === "all" || t.power.tags.includes(APP.powerTag));
  const sorted = [...filtered].sort((a, b) => {
    if (APP.powerSort === "cur") return b.power.cur - a.power.cur || b.power.proj - a.power.proj;
    if (APP.powerSort === "gain") return powerGainPct(b.power) - powerGainPct(a.power) || b.power.proj - a.power.proj;
    return b.power.proj - a.power.proj || b.power.cur - a.power.cur;
  });

  const tagButtons = [
    ["all", `Tất cả (${allTeams.length})`],
    ["st", "Boss / Đơn"],
    ["aoe", "AOE / Đa mục tiêu"],
    ["upgrade", "Cần nâng cấp lớn"],
  ];
  const sortButtons = [
    ["proj", "Trần dự tính ↓"],
    ["cur", "Hiện tại ↓"],
    ["gain", "Mức tăng % ↓"],
  ];

  const rowsHtml = sorted
    .map((t, rankIdx) => {
      const p = t.power;
      const curW = Math.round((p.cur / maxProj) * 100);
      const projW = Math.round((p.proj / maxProj) * 100);
      const gain = powerGainPct(p);
      const faces = t.members
        .map((n) => {
          const c = byName(n);
          return c?.icon
            ? `<button type="button" class="power-face-btn" data-open-char="${esc(n)}" title="${esc(n)} Lv.${esc(c.level)} C${esc(c.constellation)} — bấm xem chi tiết"><img src="${esc(c.icon)}" alt="${esc(n)}" loading="lazy" referrerpolicy="no-referrer" /></button>`
            : `<span class="face-ghost" title="${esc(n)}">${esc(n.slice(0, 2).toUpperCase())}</span>`;
        })
        .join("");

      return `
        <div class="power-row">
          <div class="power-rank">
            <span class="rank-num">#${rankIdx + 1}</span>
            <div class="tier-shift">
              <span class="tier-pill ${tierClass(p.curTier)}">${esc(p.curTier)}</span>
              <span class="swap-arrow">→</span>
              <span class="tier-pill ${tierClass(p.projTier)}">${esc(p.projTier)}</span>
            </div>
          </div>

          <div class="power-team">
            <div class="power-team-top">
              <button type="button" class="power-team-link" data-jump-team="${t.idx}">${esc(t.title)} →</button>
              <span class="power-role">${esc(p.role)}</span>
              <span class="power-badge status-${esc(t.status)}">${esc(p.badge)}</span>
            </div>
            <div class="power-faces">${faces}</div>
          </div>

          <div class="power-bar-wrap">
            <div class="power-bar-track" title="Hiện tại ~${p.cur}k DPS · Dự tính ~${p.proj}k DPS">
              <div class="power-bar-proj" style="width:${projW}%"></div>
              <div class="power-bar-cur" style="width:${curW}%"></div>
            </div>
            <div class="power-nums">
              <span><strong>${p.cur}k</strong> → <strong class="proj-val">${p.proj}k</strong> DPS</span>
              <span class="power-gain">+${gain}%</span>
            </div>
          </div>

          <div class="power-upgrade">${esc(p.upgrade)}</div>
        </div>
      `;
    })
    .join("");

  return `
    <div class="power-kpi-grid">
      <div class="power-kpi">
        <span>Mạnh nhất Hiện tại</span>
        <strong>${esc(topCur.title)}</strong>
        <small>~${topCur.power.cur}k DPS · Tier ${esc(topCur.power.curTier)} · ${esc(topCur.power.badge)}</small>
      </div>
      <div class="power-kpi">
        <span>Trần Dự tính Cao nhất</span>
        <strong>${esc(topProj.title)}</strong>
        <small>~${topProj.power.proj}k DPS · Tier ${esc(topProj.power.projTier)} · ${esc(topProj.power.badge)}</small>
      </div>
      <div class="power-kpi">
        <span>Tăng trưởng % Cao nhất</span>
        <strong>${esc(topGain.title)}</strong>
        <small>+${powerGainPct(topGain.power)}% · ${topGain.power.cur}k → ${topGain.power.proj}k DPS</small>
      </div>
    </div>

    <div class="power-controls">
      <div class="filter-group">
        ${tagButtons
          .map(([k, label]) => `<button type="button" class="filter-btn ${APP.powerTag === k ? "active" : ""}" data-power-tag="${k}">${esc(label)}</button>`)
          .join("")}
      </div>
      <div class="filter-group">
        <span class="power-sort-lbl">Sắp xếp:</span>
        ${sortButtons
          .map(([k, label]) => `<button type="button" class="filter-btn ${APP.powerSort === k ? "active" : ""}" data-power-sort="${k}">${esc(label)}</button>`)
          .join("")}
      </div>
    </div>

    <div class="onslaught-banner power-method-note">
      <strong>Quy ước ước lượng DPS (chuẩn 1 vòng xoay 20s La Hoàn 12, đơn vị k DPS):</strong>
      Dữ liệu hiện tại tính từ chỉ số thực tế crawl 24/11 và đối chiếu kỷ lục Ảo Cảnh <strong>191s</strong> (Neuv+Furina <strong>34s</strong>, Raiden+Furina <strong>56s</strong>).
      <span class="power-legend"><i class="leg-cur"></i> Hiện tại &nbsp;<i class="leg-proj"></i> Trần dự tính sau nâng cấp (bấm tên đội để xem Sân Khấu · bấm avatar để mở chỉ số).</span>
    </div>

    <div class="power-table">
      <div class="power-head">
        <span>Hạng · Tier</span>
        <span>Đội hình &amp; Vai trò</span>
        <span>Sức mạnh (Hiện tại → Dự tính)</span>
        <span>Đòn bẩy tăng sát thương chính</span>
      </div>
      ${rowsHtml}
    </div>
  `;
}

function renderWeekView() {
  const todayKey = new Date().getDay();
  return `
    <div class="onslaught-banner">
      <strong>Ảo Cảnh Hiểm Ác (Kỳ 11.11 – 15.12 · Reset mỗi 5–6 tuần):</strong>
      10 ngày đầu kỳ (<em>Disturbance Outbreak</em>) cho phép tiêu Nhựa farm TDV tại Bí cảnh Chúc Phúc: <strong>120 Nhựa = +1 mảnh 5★ thưởng</strong> &amp; mốc <strong>1,200 Dire Prestige</strong> nhận <em>Dust of Enlightenment</em>. (Không farm được Boss / Sách / Vũ khí.)
    </div>
    <div class="week-list">
      ${FARM_DAYS.map((d) => {
        const isToday = d.key === todayKey;
        const faces = d.chars
          .map((n) => {
            const c = byName(n);
            return c?.icon ? `<img src="${esc(c.icon)}" alt="${esc(n)}" title="${esc(n)}" referrerpolicy="no-referrer" />` : "";
          })
          .join("");
        return `
          <div class="week-row ${isToday ? "is-today" : ""}">
            <div class="week-day">
              <strong>${esc(d.title)}</strong>
              ${isToday ? `<small>Hôm nay</small>` : ""}
            </div>
            <div class="week-faces">${faces}</div>
            <div class="week-tasks">
              <div>${esc(d.resin)}</div>
              <small>${esc(d.extra)}</small>
            </div>
          </div>
        `;
      }).join("")}
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
          <h3 class="modal-section-title">Kế hoạch chỉnh sửa &amp; Dòng chính mục tiêu</h3>
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
                <h3 class="modal-section-title">Chỉ số thực tế (Crawl 24/11)</h3>
                <div class="modal-stats-grid">
                  ${[...coreStats, ...dmgEntries]
                    .map(([label, val]) => `<div class="modal-stat-item"><span>${esc(label)}</span><strong>${esc(val)}</strong></div>`)
                    .join("")}
                </div>
              </section>`
            : ""
        }

        <section class="modal-section">
          <h3 class="modal-section-title">Vũ khí đang cầm &amp; Hoán đổi liên quan</h3>
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

  document.querySelectorAll("[data-jump-team]").forEach((b) => {
    b.addEventListener("click", () => {
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
