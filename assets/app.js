const DATA_URL = "./data/genshin_uid_802472241_data.json?v=10";
const STORAGE_KEY = "genshin_uid_802472241_done_v2";

const SET_META = {
  mh: { name: "4pc Thợ Săn Marechaussee", where: "Kết Cục Của Tội Lỗi (Fontaine)", icon: "https://enka.network/ui/UI_RelicIcon_15031_4.png" },
  gt: { name: "4pc Đoàn Kịch Hoàng Kim", where: "Kết Cục Của Tội Lỗi (Fontaine)", icon: "https://enka.network/ui/UI_RelicIcon_15032_4.png" },
  nw: { name: "4pc Tiếng Đêm Trong Rừng Vang", where: "Thành Cổ Rơi Vào Khúc Nhạc (Fontaine) / Tráp Thánh", icon: "https://enka.network/ui/UI_RelicIcon_15034_4.png" },
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

// Unified per-character action dossier (Weapon + Artifact Fix + Set + Where to farm in ONE row)
const ACTIONS = [
  // Bucket 1: Do now in-game (0 Resin or quick swap)
  { id: "a_navia", bucket: "now", name: "Navia", swapFrom: "Xinyan", swapNote: "Hoặc Kiếm Vô Công 5★ từ Chongyun", fixTitle: "Cát HP% → ATK% + Nón CR%", fixSub: "Hiện CR 29.1% · Nâng kiếm 90 nếu giữ Vua Biển", setKey: "nw" },
  { id: "a_fischl", bucket: "now", name: "Fischl", swapFrom: "Yelan", swapNote: "Bỏ Cung Rỉ Sét (vô dụng cho Oz)", fixTitle: "Đổi Nón → CR% (đang 31.8% CR)", fixSub: "Gắn Tuyệt Huyền R5 tăng +48% ST Oz", setKey: "gt" },
  { id: "a_yelan", bucket: "now", name: "Yelan", swapFrom: "Kujou Sara", swapNote: "Nâng Cung Tây Phong 70 → 90", fixTitle: "Giải quyết thiếu ER (đang 140.7%)", fixSub: "Giữ Cát HP% + Ly Thủy + Nón CR/CD", setKey: null },
  { id: "a_xl", bucket: "now", name: "Xiangling", swapFrom: "Chevreuse", swapNote: "Lao Xiên Cá R5 mạnh hơn Xương Sống", fixTitle: "Giữ nguyên bộ 4pc Dấu Ấn (236% ER)", fixSub: "Đã chuẩn C6 · 7/11/13", setKey: null },
  { id: "a_chev", bucket: "now", name: "Chevreuse", swapFrom: "Candace", swapNote: "Hắc Anh Thương R5 (+46.9% HP)", fixTitle: "Đổi Ly Hỏa & Nón CR → Full HP%", fixSub: "Đang 21.5k HP → kéo lên mốc 40k HP", setKey: "no" },
  { id: "a_kuki", bucket: "now", name: "Kuki Shinobu", swapFrom: "Nilou", swapNote: "Mượn Thiết Phong Kích R3 nếu Nilou nghỉ", fixTitle: "Đổi Cát/Ly/Nón → 3 món EM", fixSub: "Đang 318 EM → cần ~900+ EM & lên Lv.90", setKey: "gd" },
  { id: "a_ayato", bucket: "now", name: "Kamisato Ayato", swapFrom: null, swapNote: "Giữ Tiếng Hét Của Rồng R5", fixTitle: "Đổi Nón STBK → Nón CR%", fixSub: "Hiện CR 31.4% / CD 208.9% (chuẩn bị Nhà Hát Màn 6)", setKey: "glad" },
  { id: "a_noelle", bucket: "now", name: "Noelle", swapFrom: "Sayu", swapNote: "Kiếm Bạch Ảnh R5 DEF% thay Vũ Tài Lv.1", fixTitle: "Lắp đồ cho Ningguang, Beidou, Noelle, Gorou", fixSub: "Đủ quân số 25+ Lv.70 vào Nhà Hát trước 01/12", setKey: "totm" },
  { id: "a_ning", bucket: "now", name: "Ningguang", swapFrom: "Shikanoin Heizou", swapNote: "Mượn Chương Nhạc R5 thay sách 1★", fixTitle: "Gắn đủ 5 món TDV (hiện mới 2 món)", fixSub: "Chuẩn bị sẵn slot Nham cho Nhà Hát Màn 8", setKey: "nw" },

  // Bucket 2: Farm in unlocked regions (Fontaine, Nod-Krai, Inazuma, Sumeru)
  { id: "a_neuv", bucket: "farm", name: "Neuvillette", swapFrom: null, swapNote: "Giữ Trấn Nghi Thức R1 Lv.90", fixTitle: "Đổi 3 món HP% → Cát HP% + Ly HP/Thủy + Nón CR%", fixSub: "Hiện CR 26% quá thấp · Farm bí cảnh Fontaine", setKey: "mh" },
  { id: "a_chiori", bucket: "farm", name: "Chiori", swapFrom: null, swapNote: "Giữ Con Thoi Chu Sa R5 Lv.90", fixTitle: "Nâng E từ 1 → 8–9 · Đổi Cát ATK% → DEF%", fixSub: "Sách Ánh Sáng (Inazuma T4/7) + nâng Ly Nham +20", setKey: "gt" },
  { id: "a_aino", bucket: "farm", name: "Aino", swapFrom: "Nhà Lữ Hành", swapNote: "Hoặc rèn Master Key · Đại Kiếm Tây Phong", fixTitle: "Nâng Lv.1 → 80 · Thiên phú 1/6/8 · Cát ER", fixSub: "Boss Knuckle Duckle + Đặc sản đều ở Nod-Krai (đã mở)", setKey: "silken" },
  { id: "a_jean", bucket: "farm", name: "Jean", swapFrom: "Nhà Lữ Hành", swapNote: "Mượn Tây Phong Kiếm R5 cho đủ Nạp", fixTitle: "Lắp đủ 5 món +20 (đang thiếu Ly, 2 món +0)", fixSub: "Đẩy ER từ 105% → 160–180% làm Healer toàn đội", setKey: "vv" },
  { id: "a_venti", bucket: "farm", name: "Venti", swapFrom: null, swapNote: "Giữ Trấn Tiếng Thở Dài Vô Tận R1", fixTitle: "4 món trên HoYoLAB đang ở Lv.0", fixSub: "Kiểm tra lại trong game hoặc nâng bộ 4pc Bóng Hình", setKey: "vv" },
  { id: "a_nahida", bucket: "farm", name: "Nahida", swapFrom: null, swapNote: "Giữ Mảnh Chương Tế Lễ R5 (749 EM)", fixTitle: "Team Thảo cần 1 người mặc 4pc Rừng Sâu", fixSub: "Đổi qua Tráp Thánh nếu team không có Collei/Yaoyao cầm", setKey: "dw" },

  // Bucket 3: Waiting for Snezhnaya (0%)
  { id: "a_mitya", bucket: "later", name: "Mitya", swapFrom: null, swapNote: "Nâng Trấn Sắc Lệnh Tinh Tú 20 → 90", fixTitle: "Tier 0 Meta 7.2 · Chờ mở map Snezhnaya", fixSub: "Cát EM · Ly EM/Lôi · Nón CR/CD (sách Charity)", setKey: "dids" },
  { id: "a_valeriy", bucket: "later", name: "Valeriy", swapFrom: null, swapNote: "Chuẩn bị sẵn Tây Phong Kiếm", fixTitle: "Khiên + Buff chuyên cho Mitya · Chờ Snezhnaya", fixSub: "Cát/Ly/Nón ATK% · Sách Charity chung với Mitya", setKey: "furnace" },
];

const SURPLUS_WEAPONS = [
  { id: "s_spine", from: "Xiangling", to: "Kachina", action: "Chuyển cho Kachina (hoặc giữ kho dự phòng 5★)", plan: "Xiangling đổi sang Lao Xiên Cá R5 → Xương Sống thay Lưu Nguyệt Châm (Vật Lý) cho Kachina, hoặc cất dự phòng 5★ Nạp." },
  { id: "s_fish", from: "Navia", to: "Beidou", action: "Gắn ngay cho Beidou Lv.80 C6", plan: "Navia đổi sang Kiếm Li Cốt / Kiếm Vô Công → Beidou bỏ kiếm 1★ Lv.1, dùng luôn để đủ quân đi Nhà Hát 7.2." },
  { id: "s_rust", from: "Fischl", to: null, action: "Cất kho dự phòng (tạm nghỉ)", plan: "Fischl đổi sang Tuyệt Huyền R5 → Yoimiya đã có Cánh Thiên Không 5★ mạnh hơn nên Cung Rỉ Sét R4 chưa cần dùng." },
  { id: "s_fading", from: "Collei", to: "Kujou Sara", action: "Chuyển sang cho Kujou Sara", plan: "Sara nhường Cung Tây Phong cho Yelan → mượn Lạc Hà R5 (Base ATK 565 · 30.6% ER) từ Collei giữ trọn buff ATK." },
  { id: "s_sapwood", from: "Kuki Shinobu", to: "Bennett", action: "Đưa cho Bennett (nếu Kuki cầm Thiết Phong Kích)", plan: "Base ATK 565 cao hơn Răng Nanh Rỉ Sét (510), giúp Bennett buff ATK mạnh hơn · Hoặc đưa Nhà Lữ Hành (Thảo)." },
  { id: "s_isshin", from: "Jean", to: "Lynette", action: "Đổi qua cho Lynette (dư thêm Narzissenkreuz từ Layla)", plan: "Jean mượn Tây Phong Kiếm & Layla cầm Kiếm Bến Tàu HP% → chuyển Isshin Lv.80 cho Lynette (còn Narzissenkreuz R3 tạm cất/chờ Valeriy)." },
];

const COLLECT_WEAPONS = [
  {
    id: "c_fleuve",
    name: "Ống Đồng Fleuve Cendre",
    type: "Kiếm Đơn 4★ · 45.9% ER · +CR% E",
    icon: "https://gi.yatta.moe/assets/UI/UI_EquipIcon_Sword_Machination.png",
    source: "Câu cá Fontaine (64%)",
    chars: ["Jean", "Lynette", "Xingqiu"],
    extraTarget: "BiS F2P cho Furina",
    why: "Giải quyết thiếu Tây Phong Kiếm & để sẵn cho mục tiêu roll Furina (đổi ở NPC Delaroche, không tốn Phôi).",
  },
  {
    id: "c_masterkey",
    name: "Chìa Khóa Vạn Năng",
    type: "Trọng Kiếm 4★ · 61.3% ER · +EM",
    icon: "https://gi.yatta.moe/assets/UI/UI_EquipIcon_Claymore_Ilmarinen.png",
    source: "Rèn Nod-Krai (7%)",
    chars: ["Aino"],
    extraTarget: null,
    why: "Vũ khí rèn F2P số 1 cho Aino (hiện đang cầm kiếm 1★): vừa đủ Nạp 61.3% vừa cộng EM ngoài sân.",
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
    source: "Giải đố Natlan (3%)",
    chars: [],
    extraTarget: "Free 1 bản · Để sẵn cho Xilonen",
    why: "Làm giải đố Furnace of Fiery Embers nhận free 1 cây (BiS F2P cho Xilonen trong danh sách roll sắp tới).",
  },
];

const FARM_DAYS = [
  { key: 1, short: "T2", title: "Thứ 2", chars: ["Chiori", "Aino"], resin: "3× Boss Tuần (Narwhal cho Chiori + Quick Silken Feather cho Aino) · Sách Aino", extra: "Nhặt Cỏ Naku, Hoa Lumidouce, Portable Bearing" },
  { key: 2, short: "T3", title: "Thứ 3", chars: ["Aino", "Kuki Shinobu", "Chevreuse"], resin: "Boss Thế Giới: Knuckle Duckle (Nod-Krai — Aino) · Mãng Xà (Kuki) · Hải Mã (Chev)", extra: "Dọn quái thường lấy nguyên liệu nâng cấp" },
  { key: 3, short: "T4", title: "Thứ 4", chars: ["Chiori", "Navia", "Aino"], resin: "Sách Ánh Sáng (Inazuma — E Chiori) · Vũ khí Vua Biển (Navia) & Tây Phong", extra: "Ép Tráp Thánh → Giấc Mộng Hoàng Kim / Ký Ức Rừng Sâu" },
  { key: 4, short: "T5", title: "Thứ 5", chars: ["Neuvillette", "Fischl"], resin: "Full Nhựa: Kết Cục Của Tội Lỗi (Fontaine) — 4pc Thợ Săn & 4pc Đoàn Kịch", extra: "Nhặt lại đặc sản (hồi 48h)" },
  { key: 5, short: "T6", title: "Thứ 6", chars: ["Neuvillette", "Fischl", "Aino"], resin: "Check Ảo Cảnh Hiểm Ác (10 ngày đầu → +1 TDV/120 Nhựa) · hoặc Boss + TDV Fontaine", extra: "Làm xong các việc Đổi Vũ Khí (0 Nhựa) & đi Nhà Hát trước 01/12" },
  { key: 6, short: "T7", title: "Thứ 7", chars: ["Chiori", "Navia"], resin: "Chốt Sách Ánh Sáng (Chiori E 8–9) · Chốt nâng Vũ khí", extra: "Leo lại La Hoàn Tầng 11-3 & Tầng 12" },
  { key: 0, short: "CN", title: "Chủ Nhật", chars: ["Neuvillette", "Chiori", "Aino"], resin: "Bù Sách / Vũ khí còn thiếu · dư chạy Kết Cục Của Tội Lỗi (Fontaine)", extra: "Kiểm tra đường mở map Snezhnaya cho Mitya & Valeriy" },
];

const MODES = {
  teams: {
    label: "Đội Hình",
    items: [
      { title: "Raiden National", sub: "Ổn định #1 Boss đơn · ER 236–276%", note: "Sẵn sàng 100% · Đưa Lao Xiên Cá cho XL càng mạnh", status: "ok", members: ["Raiden Shogun", "Bennett", "Xiangling", "Yelan"] },
      { title: "Keqing Tăng Cường", sub: "Chỉ số đẹp nhất · 70/231", note: "Sẵn sàng 100% · Kazuha 1,011 EM", status: "ok", members: ["Keqing", "Nahida", "Yae Miko", "Kaedehara Kazuha"] },
      { title: "Ayaka Đóng Băng", sub: "Ayaka 10/10/10 · Mona 8/8/13", note: "Sẵn sàng 100% · ~95% CR thực", status: "ok", members: ["Kamisato Ayaka", "Mona", "Kaedehara Kazuha", "Sangonomiya Kokomi"] },
      { title: "Hu Tao Bốc Hơi", sub: "2 Thủy + Khiên Zhongli", note: "Sẵn sàng 100% · 2 Hòa Phác Diên riêng", status: "ok", members: ["Hu Tao", "Yelan", "Xingqiu", "Zhongli"] },
      { title: "Yoimiya Đánh Thường", sub: "Yoimiya 74/203 · Yun Jin C6", note: "Sẵn sàng 100% · 2,160 DEF Yun Jin", status: "ok", members: ["Yoimiya", "Yelan", "Yun Jin", "Zhongli"] },
      { title: "Ganyu Tan Chảy", sub: "Ganyu 10/10/10 · 4pc Đoàn Hát", note: "Sẵn sàng 100%", status: "ok", members: ["Ganyu", "Bennett", "Xiangling", "Zhongli"] },
      { title: "Nilou Sum Suê", sub: "51.5k HP · Collei 4pc Rừng Sâu", note: "Sẵn sàng 100%", status: "ok", members: ["Nilou", "Nahida", "Sangonomiya Kokomi", "Collei"] },
      { title: "Eula Vật Lý", sub: "C2 10/10/10 · Rosaria C6 bù CR", note: "Tình huống / Siêu Dẫn · CR 51.7%", status: "warn", members: ["Eula", "Raiden Shogun", "Rosaria", "Zhongli"] },
      { title: "Neuvillette Carry", sub: "Chờ Nón CR% / 4pc Thợ Săn", note: "Sửa Neuvillette CR 26% · Hoặc Nahida + Kuki", status: "bad", members: ["Neuvillette", "Kaedehara Kazuha", "Zhongli", "Yae Miko"] },
      { title: "Navia 2 Nham", sub: "Chờ Cát ATK% + Kiếm Li Cốt + Chiori E", note: "Sửa Navia & Chiori để mở khóa sát thương", status: "bad", members: ["Navia", "Chiori", "Bennett", "Xiangling"] },
      { title: "Mitya Meta 7.2", sub: "Chờ Snezhnaya (Aino farm trước)", note: "Đã có Trấn Mitya + Valeriy C1", status: "warn", members: ["Mitya", "Valeriy", "Kaedehara Kazuha", "Aino"] },
    ],
  },
  abyss: {
    label: "La Hoàn",
    items: [
      { title: "12 · Nửa 1 — Navia Phá Khiên", sub: "+75% Lunar-Crystallize · 12-3 Moongecko", note: "Sửa Navia (Kiếm Li Cốt + Cát ATK%) + Chiori E", status: "bad", members: ["Navia", "Zhongli", "Chiori", "Xianyun"] },
      { title: "12 · Nửa 2 — Raiden National", sub: "+200 EM · 12-1 Wavebinder · 12-2 Hỏa/Lôi", note: "Đội hình sẵn sàng đánh ngay", status: "ok", members: ["Raiden Shogun", "Bennett", "Xiangling", "Yelan"] },
      { title: "12 · Nửa 2 — Neuvillette EM", sub: "Tận dụng +200 EM khi sửa xong", note: "Chờ Neuvillette CR% + Kuki 3 món EM", status: "bad", members: ["Neuvillette", "Nahida", "Kuki Shinobu", "Kaedehara Kazuha"] },
      { title: "12 · Nửa 1 — Eula Siêu Dẫn", sub: "12-2 Frostnight Herra · Blessing Siêu Dẫn", note: "Rosaria C6 (74% CR) đi kèm bù CR", status: "warn", members: ["Eula", "Raiden Shogun", "Rosaria", "Zhongli"] },
    ],
  },
  theater: {
    label: "Nhà Hát",
    items: [
      { title: "Màn 3 · Jadeplume Terrorshroom", sub: "Kích Lôi nhanh", note: "Mở màn bằng Lôi + Thủy", status: "ok", members: ["Keqing", "Fischl", "Xingqiu", "Barbara"] },
      { title: "Màn 6 · Whisperer of Nightmares", sub: "Phá khiên Thủy + Lôi", note: "Ayato đổi Nón CR% (đang 31.4%)", status: "warn", members: ["Kamisato Ayato", "Yae Miko", "Yelan", "Kuki Shinobu"] },
      { title: "Màn 8 · Battle-Hardened Samachurl", sub: "Bắt buộc giữ Nham + Thủy", note: "Giữ Navia + Zhongli/Chiori tới Màn 8", status: "bad", members: ["Navia", "Zhongli", "Chiori", "Xingqiu"] },
      { title: "Màn 10 · Radiant Moonfly", sub: "Cần Healer toàn đội mạnh", note: "Mượn bạn: Furina hoặc Xilonen", status: "warn", members: ["Neuvillette", "Raiden Shogun", "Sangonomiya Kokomi", "Yelan"] },
    ],
  },
  meta: {
    label: "Meta 7.2",
    items: [
      { title: "Build Ngay (Vùng Đã Mở)", sub: "Nod-Krai (7%) · Fontaine (64%) · Inazuma (100%)", note: "Farm không cần qua Snezhnaya", status: "ok", members: ["Aino", "Chiori", "Kuki Shinobu", "Fischl"] },
      { title: "Chờ Mở Snezhnaya (0%)", sub: "Sách Charity & Boss nằm ở Snezhnaya", note: "Đã có sẵn Trấn Sắc Lệnh Tinh Tú cho Mitya", status: "warn", members: ["Mitya", "Valeriy", "Kaedehara Kazuha", "Aino"] },
      { title: "Mục Tiêu Roll Bổ Sung", sub: "Support kéo trần toàn đội hình", note: "Ưu tiên Furina & Xilonen", status: "warn", members: ["Furina", "Xilonen", "Odette", "Columbina"] },
    ],
  },
};

let APP = {
  data: null,
  view: "tracker",   // tracker | stage | week
  filter: "pending", // pending | all
  mode: "teams",
  index: 0,
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
              <div class="action-row ${isDone ? "done" : ""}">
                <div class="col-char">
                  <input type="checkbox" data-act-id="${esc(a.id)}" ${isDone ? "checked" : ""} aria-label="Hoàn thành ${esc(a.name)}" />
                  ${c?.icon ? `<img src="${esc(c.icon)}" alt="${esc(a.name)}" referrerpolicy="no-referrer" />` : ""}
                  <div>
                    <strong>${esc(a.name)}</strong>
                    <small>Lv.${esc(c?.level ?? "-")} · C${esc(c?.constellation ?? "-")} · ${esc(c?.talent_levels ?? "")}</small>
                  </div>
                </div>
                ${weaponCol}
                <div class="col-fix">
                  <span class="fix-badge ${a.bucket === "now" ? "" : "warn"}">${a.bucket === "now" ? "● Làm ngay" : a.bucket === "farm" ? "● Cần farm" : "● Chờ map"}</span>
                  <span class="fix-detail">${esc(a.fixTitle)}</span>
                  <span class="fix-sub">${esc(a.fixSub)}</span>
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
            const fromC = byName(s.from);
            const toC = s.to ? byName(s.to) : null;
            const w = fromC?.weapon;
            const isDone = !!APP.done[s.id];

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
                  <span class="sflow-char">
                    ${fromC?.icon ? `<img src="${esc(fromC.icon)}" alt="${esc(s.from)}" loading="lazy" referrerpolicy="no-referrer" />` : ""}
                    <span>${esc(s.from)}</span>
                  </span>
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
    renderActionBucket("2. Cần Farm — Vùng Đã Mở", "Fontaine (64%) · Nod-Krai (7%) · Inazuma (100%) · Sumeru (100%)", "bucket-farm", farmItems),
    renderActionBucket("3. Đợi Mở Snezhnaya (0%)", "Chờ đi tới Snezhnaya mới farm được Sách & Boss", "bucket-later", laterItems),
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

function renderFoot() {
  if (APP.mode === "theater") {
    const elig = APP.data.characters.filter(
      (c) => c.level >= 70 && (["Hydro", "Electro", "Geo"].includes(c.element) || c.name === "Qiqi")
    );
    const needGear = new Set(["Ningguang", "Beidou", "Noelle", "Gorou"]);
    return `
      <div class="stage-foot">
        <div class="foot-title">
          <span><strong>${elig.length} nhân vật Lv.70+</strong> + 3 Trial (Flins, Aino, Kachina) · Hạn 01/12</span>
          <span style="color:var(--bad);">Đỏ = cần lắp vũ khí/TDV tạm trước khi vào</span>
        </div>
        <div class="theater-faces">
          ${elig
            .map(
              (c) => `<span class="t-face ${needGear.has(c.name) ? "warn" : ""}" title="${esc(c.name)} Lv.${c.level} C${c.constellation}">
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
        <article class="character-pillar" style="--el: var(--el-${esc(el)}, 211,188,142);">
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
            <div class="pillar-note ${noteClass}">${esc(noteText)}</div>
            ${isPending ? `<button class="jump-link" data-jump-tracker="1">Xem chi tiết sửa →</button>` : ""}
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

function render() {
  let content = "";
  if (APP.view === "tracker") content = renderTrackerView();
  else if (APP.view === "stage") content = renderStageView();
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

  document.querySelectorAll(".filter-btn").forEach((b) => {
    b.addEventListener("click", () => {
      APP.filter = b.getAttribute("data-filter");
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

  document.querySelectorAll("[data-jump-tracker]").forEach((b) => {
    b.addEventListener("click", () => {
      APP.view = "tracker";
      render();
    });
  });
}

async function init() {
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
