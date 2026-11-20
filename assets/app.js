const DATA_URL = "./data/genshin_uid_802472241_data.json?v=7";
const STORAGE_KEY = "genshin_uid_802472241_done_v1";

const WEAPON_SWAPS = [
  { id: "sw_navia", priority: "bad", from: "Xinyan", to: "Navia", reason: "Kiếm Li Cốt (27.6% CR) kéo CR Navia 29% → 57% (hoặc Kiếm Vô Công từ Chongyun)" },
  { id: "sw_fischl", priority: "bad", from: "Yelan", to: "Fischl", reason: "Tuyệt Huyền R5 thay Cung Rỉ Sét → +48% ST Oz" },
  { id: "sw_yelan", priority: "bad", from: "Kujou Sara", to: "Yelan", reason: "Cung Tây Phong (nâng 90) bù thiếu ER 140.7%" },
  { id: "sw_xl", priority: "bad", from: "Chevreuse", to: "Xiangling", reason: "Lao Xiên Cá R5 mạnh hơn Xương Sống cho Nộ XL" },
  { id: "sw_chev", priority: "bad", from: "Candace", to: "Chevreuse", reason: "Hắc Anh Thương R5 (46.9% HP) kéo Chev lên 40k HP" },
  { id: "sw_noelle", priority: "warn", from: "Sayu", to: "Noelle", reason: "Kiếm Bạch Ảnh R5 DEF% thay Vũ Tài Lv.1 (Nhà Hát)" },
  { id: "sw_jean", priority: "warn", from: "Nhà Lữ Hành", to: "Jean", reason: "Tây Phong Kiếm R5 bù ER 105% cho Jean / Layla" },
  { id: "sw_nilou", priority: "warn", from: "Lynette", to: "Nilou", reason: "Kiếm Bến Tàu HP% (nâng 90) tăng Hạt Sum Suê" },
  { id: "sw_kuki", priority: "warn", from: "Nilou", to: "Kuki Shinobu", reason: "Thiết Phong Kích R3 (+165 EM) khi không dùng Nilou" },
  { id: "sw_ning", priority: "warn", from: "Shikanoin Heizou", to: "Ningguang", reason: "Mượn Chương Nhạc R5 thay sách 1★ Lv.1 (Nhà Hát)" },
];

const SET_META = {
  mh: {
    name: "4pc Thợ Săn Marechaussee",
    where: "Kết Cục Của Tội Lỗi (Fontaine)",
    icon: "https://enka.network/ui/UI_RelicIcon_15031_4.png",
  },
  gt: {
    name: "4pc Đoàn Kịch Hoàng Kim",
    where: "Kết Cục Của Tội Lỗi (Fontaine)",
    icon: "https://enka.network/ui/UI_RelicIcon_15032_4.png",
  },
  nw: {
    name: "4pc Tiếng Đêm Trong Rừng Vang",
    where: "Thành Cổ Rơi Vào Khúc Nhạc (Fontaine) / Tráp Thánh",
    icon: "https://enka.network/ui/UI_RelicIcon_15034_4.png",
  },
  gd: {
    name: "4pc Giấc Mộng Hoàng Kim",
    where: "Tháp Hôn Thần (Sumeru) / Tráp Thánh",
    icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/857d990ee0b5c27e926f5e3fc642f8ca.png",
  },
  dw: {
    name: "4pc Ký Ức Rừng Sâu",
    where: "Tháp Hôn Thần (Sumeru) / Tráp Thánh",
    icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/6e1a599dabaefe12d191547469d753cd.png",
  },
  no: {
    name: "4pc Nghi Thức Tông Thất Cổ",
    where: "Tráp Thánh (Strongbox) / Liyue",
    icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/bd80c45d24f484036927eda40339f730.png",
  },
  vv: {
    name: "4pc Bóng Hình Màu Xanh",
    where: "Vương Quốc Vô Tận (Mondstadt) / Tráp Thánh",
    icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/79119f6a441fc37f39b08f225d63034b.png",
  },
  glad: {
    name: "4pc Giác Đấu Sĩ (đổi Nón CR%)",
    where: "Tráp Thánh (Strongbox) / Boss",
    icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/f5a1fb5232b2985617002eac1bfea8e6.png",
  },
  husk: {
    name: "4pc Giấc Mộng Phù Hoa / Đoàn Kịch",
    where: "Đình Ngủ Say (Inazuma) / Tráp Thánh",
    icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/7d2a0cb19ab89de53c88937d6c4648a1.png",
  },
  silken: {
    name: "4pc Khúc Ca Trăng Lụa",
    where: "Frostladen Machinery (Nod-Krai)",
    icon: "https://enka.network/ui/UI_RelicIcon_15042_4.png",
  },
  dids: {
    name: "4pc Ảo Tưởng Vụn Vỡ (hoặc Giấc Mộng)",
    where: "Thorny Crown (Mondstadt) / Tráp Thánh",
    icon: "https://enka.network/ui/UI_RelicIcon_15046_4.png",
  },
  furnace: {
    name: "4pc Trái Tim Lửa Nung (tạm Tông Thất)",
    where: "Inverted Glacier (Snezhnaya) / Tráp Thánh",
    icon: "https://enka.network/ui/UI_RelicIcon_15048_4.png",
  },
  totm: {
    name: "4pc Thiên Nham Vững Chắc",
    where: "Kính Nham (Liyue) / Tráp Thánh",
    icon: "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/e52f0d8928f3982864ecc8ea13165ebf.png",
  },
};

const FIX_NODES = [
  { id: "neuv", name: "Neuvillette", level: "bad", label: "CR 26% → Nón CR% · Đổi bộ Marechaussee", setKey: "mh" },
  { id: "navia", name: "Navia", level: "bad", label: "Cát HP% → ATK% + Nón CR% · Vua Biển 90", setKey: "nw" },
  { id: "kuki", name: "Kuki Shinobu", level: "bad", label: "EM 318 → 3 món EM + Lv.90", setKey: "gd" },
  { id: "chiori", name: "Chiori", level: "bad", label: "E 1→8 + Cát ATK% → DEF%", setKey: "gt" },
  { id: "fischl", name: "Fischl", level: "bad", label: "CR 31.8% → Tuyệt Huyền + Nón CR%", setKey: "gt" },
  { id: "chev", name: "Chevreuse", level: "bad", label: "HP 21.5k → 3 món HP% (mốc 40k)", setKey: "no" },
  { id: "ayato", name: "Kamisato Ayato", level: "warn", label: "CR 31.4% → đổi Nón CR%", setKey: "glad" },
  { id: "nahida", name: "Nahida", level: "warn", label: "Team Thảo cần 1 người cầm Rừng Sâu", setKey: "dw" },
  { id: "aino", name: "Aino", level: "warn", label: "Lv.1 → 80 · Cát ER (190–250%)", setKey: "silken" },
  { id: "mitya", name: "Mitya", level: "warn", label: "Chờ Snezhnaya · Cát/Ly EM + Trấn", setKey: "dids" },
  { id: "valeriy", name: "Valeriy", level: "warn", label: "Chờ Snezhnaya · 3 món ATK% / Tây Phong", setKey: "furnace" },
  { id: "jean", name: "Jean", level: "warn", label: "Thiếu Ly + Hoa/Nón +0 · đẩy ER 160%", setKey: "vv" },
  { id: "venti", name: "Venti", level: "warn", label: "4 món trên HoYoLAB đang +0 (check/sync)", setKey: "vv" },
  { id: "mika", name: "Mika", level: "warn", label: "Thiếu Hoa · đổi Ly/Nón HP/Trị Liệu", setKey: "no" },
  { id: "itgear", name: "Ningguang", level: "warn", label: "Lắp đồ tạm cho Ningguang, Beidou, Noelle, Gorou", setKey: "totm" },
];

const FARM_DAYS = [
  { key: 1, short: "T2", title: "Thứ 2", chars: ["Chiori", "Aino"], tasks: ["3× Boss Tuần (Narwhal + Quick Silken Feather)", "Sách Aino / Địa Mạch"] },
  { key: 2, short: "T3", title: "Thứ 3", chars: ["Aino", "Kuki Shinobu", "Chevreuse"], tasks: ["Boss Knuckle Duckle (Nod-Krai)", "Mãng Xà (Kuki) · Hải Mã (Chev)"] },
  { key: 3, short: "T4", title: "Thứ 4", chars: ["Chiori", "Navia", "Aino"], tasks: ["Sách Ánh Sáng (Chiori)", "Vũ khí Vua Biển & Tây Phong"] },
  { key: 4, short: "T5", title: "Thứ 5", chars: ["Neuvillette", "Fischl"], tasks: ["Full TDV Thợ Săn Marechaussee / Đoàn Kịch (Fontaine)"] },
  { key: 5, short: "T6", title: "Thứ 6", chars: ["Neuvillette", "Fischl", "Aino"], tasks: ["Check Ảo Cảnh (10 ngày đầu → +1 TDV/120 Nhựa)", "Hoặc Boss + TDV Fontaine"] },
  { key: 6, short: "T7", title: "Thứ 7", chars: ["Chiori", "Navia"], tasks: ["Chốt Sách Ánh Sáng (E 8–9)", "Vua Biển Lv.90"] },
  { key: 0, short: "CN", title: "CN", chars: ["Neuvillette", "Chiori", "Aino"], tasks: ["Bù sách/vũ khí thiếu", "Dư chạy TDV Thợ Săn / Đoàn Kịch"] },
];

const MODES = {
  teams: {
    label: "Đội Hình",
    items: [
      { title: "Raiden National", sub: "Ổn định #1 Boss đơn · ER 236–276%", note: "Sẵn sàng 100% · Không trùng đồ", status: "ok", members: ["Raiden Shogun", "Bennett", "Xiangling", "Yelan"] },
      { title: "Keqing Tăng Cường", sub: "Chỉ số đẹp nhất · 70/231", note: "Sẵn sàng 100% · Kazuha 1,011 EM", status: "ok", members: ["Keqing", "Nahida", "Yae Miko", "Kaedehara Kazuha"] },
      { title: "Ayaka Đóng Băng", sub: "Ayaka 10/10/10 · Mona 8/8/13", note: "Sẵn sàng 100% · ~95% CR thực", status: "ok", members: ["Kamisato Ayaka", "Mona", "Kaedehara Kazuha", "Sangonomiya Kokomi"] },
      { title: "Hu Tao Bốc Hơi", sub: "2 Thủy + Khiên Zhongli", note: "Sẵn sàng 100% · 2 Hòa Phác Diên riêng", status: "ok", members: ["Hu Tao", "Yelan", "Xingqiu", "Zhongli"] },
      { title: "Yoimiya Đánh Thường", sub: "Yoimiya 74/203 · Yun Jin C6", note: "Sẵn sàng 100% · 2,160 DEF Yun Jin", status: "ok", members: ["Yoimiya", "Yelan", "Yun Jin", "Zhongli"] },
      { title: "Ganyu Tan Chảy", sub: "Ganyu 10/10/10 · 4pc Đoàn Hát", note: "Sẵn sàng 100%", status: "ok", members: ["Ganyu", "Bennett", "Xiangling", "Zhongli"] },
      { title: "Nilou Sum Suê", sub: "51.5k HP · Collei 4pc Rừng Sâu", note: "Sẵn sàng 100%", status: "ok", members: ["Nilou", "Nahida", "Sangonomiya Kokomi", "Collei"] },
      { title: "Eula Vật Lý", sub: "C2 10/10/10 · Rosaria C6 bù CR", note: "Tình huống / Siêu Dẫn · CR 51.7%", status: "warn", members: ["Eula", "Raiden Shogun", "Rosaria", "Zhongli"] },
      { title: "Neuvillette Carry", sub: "Chờ Nón CR% / 4pc Thợ Săn", note: "Sửa Neuvillette CR 26% · Hoặc Nahida + Kuki", status: "bad", members: ["Neuvillette", "Kaedehara Kazuha", "Zhongli", "Yae Miko"] },
      { title: "Navia 2 Nham", sub: "Chờ Cát ATK% + Chiori E 8–9", note: "Sửa Navia Cát ATK% & Chiori E 1→8", status: "bad", members: ["Navia", "Chiori", "Bennett", "Xiangling"] },
      { title: "Mitya Meta 7.2", sub: "Chờ Snezhnaya (Aino farm trước)", note: "Đã có Trấn Mitya + Valeriy C1", status: "warn", members: ["Mitya", "Valeriy", "Kaedehara Kazuha", "Aino"] },
    ],
  },
  abyss: {
    label: "La Hoàn",
    items: [
      { title: "12 · Nửa 1 — Navia Phá Khiên", sub: "+75% Lunar-Crystallize · 12-3 Moongecko", note: "Sửa Navia Cát ATK% + Chiori E 1→8", status: "bad", members: ["Navia", "Zhongli", "Chiori", "Xianyun"] },
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
  mode: "teams",
  index: 0,
  dayKey: new Date().getDay(),
  focusChar: null,
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

function charNode(name) {
  const c = byName(name);
  if (!c) return { level: "warn", text: "Mục tiêu roll / Trial" };
  const cr = parseFloat(stat(c, "Tỷ Lệ Bạo Kích"));
  const em = parseFloat(stat(c, "Tinh Thông Nguyên Tố"));
  const hp = parseFloat(stat(c, "Giới Hạn HP"));
  const er = parseFloat(stat(c, "Hiệu Quả Nạp Nguyên Tố"));

  if (name === "Neuvillette" && cr < 45) return { level: "bad", text: `CR ${cr}% → Nón CR% / 4pc Thợ Săn` };
  if (name === "Navia" && cr < 45) return { level: "bad", text: `Cát HP% · CR ${cr}% → ATK% + CR%` };
  if (name === "Kuki Shinobu" && em < 500) return { level: "bad", text: `EM ${em} → 3 món EM + Lv.90` };
  if (name === "Chiori" && c.talent_levels === "1/1/1") return { level: "bad", text: "E 1→8 + Cát DEF%" };
  if (name === "Chevreuse" && hp < 32000) return { level: "bad", text: `HP ${Math.round(hp / 1000)}k → 40k HP` };
  if (name === "Fischl" && cr < 45) return { level: "bad", text: `CR ${cr}% → Tuyệt Huyền + Nón CR` };
  if (name === "Kamisato Ayato" && cr < 45) return { level: "warn", text: `CR ${cr}% → Nón CR%` };
  if (name === "Yelan") return { level: "warn", text: `68.9/152.6 · ER ${er}% (1 Thủy hơi thiếu)` };
  if (name === "Xianyun") return { level: "warn", text: `2,647 ATK · ER ${er}%` };
  if (name === "Mitya") return { level: "warn", text: "Có Trấn · Chờ Snezhnaya" };
  if (name === "Valeriy") return { level: "warn", text: "C1 · Chờ Snezhnaya" };
  if (name === "Aino") return { level: "warn", text: "Lv.1→80 (Nod-Krai)" };
  if (name === "Eula") return { level: "warn", text: `C2 10/10/10 · CR ${cr}%` };
  if (name === "Mona") return { level: "ok", text: `C4 · 8/8/13 · ${er}% ER` };
  if (name === "Raiden Shogun") return { level: "ok", text: `Đoạn Thảo R1 · ${er}% ER` };
  if (name === "Bennett") return { level: "ok", text: `C6 · ${er}% ER · 4pc Tông Thất` };
  if (name === "Kamisato Ayaka") return { level: "ok", text: "10/10/10 · ~95% CR thực" };
  if (name === "Keqing") return { level: "ok", text: `${cr}% / ${stat(c, "Sát Thương Bạo Kích")}` };
  if (name === "Kaedehara Kazuha") return { level: "ok", text: `${em} EM + Trấn` };
  if (name === "Zhongli") return { level: "ok", text: `${Math.round(hp / 1000)}k HP · 4pc Thiên Nham` };
  return { level: "ok", text: `Lv.${c.level} · ${c.talent_levels}` };
}

function renderRadar() {
  const day = FARM_DAYS.find((d) => d.key === APP.dayKey) || FARM_DAYS[0];
  const isToday = APP.dayKey === new Date().getDay();
  const faces = day.chars
    .map((n) => {
      const c = byName(n);
      return c?.icon ? `<img src="${esc(c.icon)}" alt="${esc(n)}" title="${esc(n)}" referrerpolicy="no-referrer" />` : "";
    })
    .join("");

  return `
    <section class="radar-bar">
      <div class="radar-info">
        <span class="radar-day-label">${isToday ? "Hôm nay" : "Lịch"} · ${esc(day.title)}</span>
        <div class="radar-faces">${faces}</div>
        <div class="radar-tasks">${day.tasks.map(esc).join('<span class="sep">·</span>')}</div>
      </div>
      <div class="weekday-switch">
        ${FARM_DAYS.map((d) => `<button class="weekday-btn ${d.key === APP.dayKey ? "active" : ""}" data-day="${d.key}">${esc(d.short)}</button>`).join("")}
      </div>
    </section>
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
              (c) => `
              <span class="t-face ${needGear.has(c.name) ? "warn" : ""}" title="${esc(c.name)} Lv.${c.level} C${c.constellation}">
                <img src="${esc(c.icon)}" alt="${esc(c.name)}" loading="lazy" referrerpolicy="no-referrer" />
                ${esc(c.name)}
              </span>`
            )
            .join("")}
        </div>
      </div>
    `;
  }
  if (APP.mode === "meta") {
    return `
      <div class="stage-foot">
        <div class="foot-title">
          <span><strong>Snezhnaya 0%</strong> (tạm gác Mitya &amp; Valeriy) · Farm ngay ở Nod-Krai (7%) &amp; Fontaine (64%)</span>
          <span>Ảo Cảnh Hiểm Ác (10 ngày đầu kỳ 11.11–15.12): 120 Nhựa = +1 TDV 5★</span>
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

function renderStage() {
  const items = MODES[APP.mode].items;
  const active = items[APP.index] || items[0];

  const rowsHtml = items
    .map((it, idx) => {
      const impacted = APP.focusChar && it.members.includes(APP.focusChar);
      const faces = it.members
        .map((n) => {
          const c = byName(n);
          return c?.icon
            ? `<img src="${esc(c.icon)}" alt="${esc(n)}" referrerpolicy="no-referrer" />`
            : `<span class="face-ghost">${esc(n.slice(0, 2).toUpperCase())}</span>`;
        })
        .join("");

      return `
        <button class="roster-row ${idx === APP.index ? "active" : ""} ${impacted ? "impacted" : ""}" data-idx="${idx}">
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
      const node = charNode(name);
      const isFocus = APP.focusChar === name;
      const el = c?.element || "Geo";
      const artUrl = c?.splash || c?.icon || "";
      const wIcon = c?.weapon?.icon;
      const artIcons = (c?.artifacts || []).slice(0, 3).map((a) => a.icon).filter(Boolean);
      const fixDef = FIX_NODES.find((f) => f.name === name);
      const recSet = fixDef ? SET_META[fixDef.setKey] : null;

      return `
        <article class="character-pillar ${isFocus ? "is-focus" : ""}" style="--el: var(--el-${esc(el)}, 211,188,142);">
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
            <div class="pillar-note note-${esc(node.level)}">${esc(node.text)}</div>
            ${
              recSet
                ? `<div class="pillar-set" title="${esc(recSet.name)} — ${esc(recSet.where)}">
                    <img src="${esc(recSet.icon)}" alt="${esc(recSet.name)}" referrerpolicy="no-referrer" />
                    <span>${esc(recSet.where)}</span>
                  </div>`
                : ""
            }
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

function renderChecklist() {
  const doneCount = FIX_NODES.filter((n) => APP.done[n.id]).length;
  return `
    <section class="checklist-section">
      <div class="checklist-head">
        <strong>Node Build · Bộ Thánh Di Vật &amp; Chỗ Farm (${doneCount}/${FIX_NODES.length})</strong>
        <span>Bấm nhân vật để sáng các đội liên quan · Tick ô vuông để lưu</span>
      </div>
      <div class="check-columns">
        ${FIX_NODES.map((n) => {
          const c = byName(n.name);
          const s = SET_META[n.setKey];
          const isDone = !!APP.done[n.id];
          const focused = APP.focusChar === n.name;
          return `
            <div class="check-row ${isDone ? "done" : ""} ${focused ? "focused" : ""}" data-char="${esc(n.name)}">
              <div class="check-left">
                <input type="checkbox" data-fix-id="${esc(n.id)}" ${isDone ? "checked" : ""} aria-label="${esc(n.name)}" />
                <span class="status-dot dot-${n.level === "bad" ? "bad" : "warn"}"></span>
                ${c?.icon ? `<img src="${esc(c.icon)}" alt="${esc(n.name)}" referrerpolicy="no-referrer" />` : ""}
                <div class="check-row-text">
                  <b>${esc(n.name)}</b>
                  <span>${esc(n.label)}</span>
                </div>
              </div>
              ${
                s
                  ? `<div class="check-farm" title="${esc(s.name)} — ${esc(s.where)}">
                      <div class="check-farm-meta">
                        <strong>${esc(s.name)}</strong>
                        <small>${esc(s.where)}</small>
                      </div>
                      <img src="${esc(s.icon)}" alt="${esc(s.name)}" loading="lazy" referrerpolicy="no-referrer" />
                    </div>`
                  : ""
              }
            </div>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderWeaponSwaps() {
  const doneCount = WEAPON_SWAPS.filter((s) => APP.done[s.id]).length;
  return `
    <section class="checklist-section">
      <div class="checklist-head">
        <strong>Đổi Vũ Khí Sẵn Có (${doneCount}/${WEAPON_SWAPS.length} đã đổi)</strong>
        <span>0 tốn Nhựa · Chuyển vũ khí đang nằm ở nhân vật dự bị sang chủ lực</span>
      </div>
      <div class="swap-grid">
        ${WEAPON_SWAPS.map((s) => {
          const fromC = byName(s.from);
          const toC = byName(s.to);
          const w = fromC?.weapon;
          const isDone = !!APP.done[s.id];
          const focused = APP.focusChar === s.to;
          return `
            <div class="swap-row ${isDone ? "done" : ""} ${focused ? "focused" : ""}" data-char="${esc(s.to)}">
              <div class="swap-transfer">
                <input type="checkbox" data-fix-id="${esc(s.id)}" ${isDone ? "checked" : ""} aria-label="Đổi ${esc(w?.name || "")} cho ${esc(s.to)}" />
                <span class="status-dot dot-${s.priority === "bad" ? "bad" : "warn"}"></span>
                <span class="swap-char" title="Từ ${esc(s.from)}">
                  ${fromC?.icon ? `<img src="${esc(fromC.icon)}" alt="${esc(s.from)}" referrerpolicy="no-referrer" />` : ""}
                  <span>${esc(s.from)}</span>
                </span>
                <span class="swap-arrow">→</span>
                <span class="swap-weapon" title="${esc(w?.name || "")} R${esc(w?.refinement || 1)} Lv.${esc(w?.level || 1)}">
                  ${w?.icon ? `<img src="${esc(w.icon)}" alt="${esc(w.name)}" referrerpolicy="no-referrer" />` : ""}
                  <strong>${esc(w?.name || "")}</strong>
                </span>
                <span class="swap-arrow">→</span>
                <span class="swap-char" title="Sang ${esc(s.to)}">
                  ${toC?.icon ? `<img src="${esc(toC.icon)}" alt="${esc(s.to)}" referrerpolicy="no-referrer" />` : ""}
                  <span>${esc(s.to)}</span>
                </span>
              </div>
              <div class="swap-reason" title="${esc(s.reason)}">${esc(s.reason)}</div>
            </div>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function render() {
  document.getElementById("app-root").innerHTML = [
    renderRadar(),
    renderStage(),
    renderWeaponSwaps(),
    renderChecklist(),
  ].join("");

  document.querySelectorAll(".weekday-btn").forEach((b) => {
    b.addEventListener("click", () => {
      APP.dayKey = Number(b.getAttribute("data-day"));
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
  document.querySelectorAll("input[type=checkbox][data-fix-id]").forEach((cb) => {
    cb.addEventListener("click", (e) => {
      e.stopPropagation();
      APP.done[cb.getAttribute("data-fix-id")] = cb.checked;
      saveDone();
      render();
    });
  });
  document.querySelectorAll(".check-row, .swap-row").forEach((el) => {
    el.addEventListener("click", () => {
      const ch = el.getAttribute("data-char");
      APP.focusChar = APP.focusChar === ch ? null : ch;
      if (APP.focusChar) {
        const idx = MODES[APP.mode].items.findIndex((it) => it.members.includes(APP.focusChar));
        if (idx !== -1) APP.index = idx;
      }
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
