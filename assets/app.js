const DATA_URL = "./data/genshin_uid_802472241_data.json?v=4";
const STORAGE_KEY = "genshin_uid_802472241_done_v1";

const FIX_NODES = [
  { id: "neuv", name: "Neuvillette", level: "bad", label: "CR 26% → Nón CR% / 4pc Thợ Săn" },
  { id: "navia", name: "Navia", level: "bad", label: "Cát HP% → ATK% + Nón CR% · Vua Biển 90" },
  { id: "kuki", name: "Kuki Shinobu", level: "bad", label: "EM 318 → 3 món EM + Lv.90" },
  { id: "chiori", name: "Chiori", level: "bad", label: "E 1→8 + Cát ATK% → DEF%" },
  { id: "chev", name: "Chevreuse", level: "bad", label: "HP 21.5k → 3 món HP% (mốc 40k)" },
  { id: "fischl", name: "Fischl", level: "bad", label: "CR 31.8% → Tuyệt Huyền + Nón CR%" },
  { id: "ayato", name: "Kamisato Ayato", level: "warn", label: "CR 31.4% → đổi Nón CR%" },
  { id: "aino", name: "Aino", level: "warn", label: "Farm Nod-Krai: Lv.80 · 4pc Silken Moon" },
  { id: "itgear", name: "Ningguang", level: "warn", label: "Lắp đồ tạm: Ningguang, Beidou, Noelle, Gorou" },
  { id: "jean", name: "Jean", level: "warn", label: "Thiếu Ly + Hoa/Nón +0 · đẩy ER 160%" },
  { id: "venti", name: "Venti", level: "warn", label: "4 món trên HoYoLAB đang +0 (check/sync)" },
  { id: "mitya", name: "Mitya", level: "warn", label: "Chờ Snezhnaya: Lv.90 + Trấn Sắc Lệnh" },
];

const FARM_DAYS = [
  { key: 1, short: "T2", title: "Thứ 2", chars: ["Chiori", "Aino"], tags: ["3x Boss Tuần (Narwhal + Quick Silken Feather)", "Sách Aino / Địa Mạch"] },
  { key: 2, short: "T3", title: "Thứ 3", chars: ["Aino", "Kuki Shinobu", "Chevreuse"], tags: ["Knuckle Duckle (Nod-Krai)", "Mãng Xà (Kuki) · Hải Mã (Chev)"] },
  { key: 3, short: "T4", title: "Thứ 4", chars: ["Chiori", "Navia", "Aino"], tags: ["Sách Ánh Sáng (Chiori)", "Vua Biển (Navia) & Tây Phong (Aino)"] },
  { key: 4, short: "T5", title: "Thứ 5", chars: ["Neuvillette", "Fischl"], tags: ["Full TDV Thợ Săn Marechaussee / Đoàn Kịch (Fontaine)"] },
  { key: 5, short: "T6", title: "Thứ 6", chars: ["Neuvillette", "Fischl", "Aino"], tags: ["Check Ảo Cảnh (10 ngày đầu → +1 TDV/120 Nhựa)", "Hoặc Boss + TDV Fontaine"] },
  { key: 6, short: "T7", title: "Thứ 7", chars: ["Chiori", "Navia"], tags: ["Chốt Sách Ánh Sáng (E 8–9)", "Chốt Vua Biển Lv.90"] },
  { key: 0, short: "CN", title: "Chủ Nhật", chars: ["Neuvillette", "Chiori", "Aino"], tags: ["Bù sách/vũ khí thiếu", "Dư chạy TDV Thợ Săn / Đoàn Kịch"] },
];

const MODES = {
  teams: {
    label: "Đội Hình (11)",
    items: [
      {
        title: "Raiden National",
        sub: "Ổn định #1 Boss đơn · ER 236–276%",
        status: "ok",
        members: ["Raiden Shogun", "Bennett", "Xiangling", "Yelan"],
        tags: [{ t: "ok", text: "Sẵn sàng 100%" }, { t: "gold", text: "Không trùng đồ" }],
      },
      {
        title: "Keqing Tăng Cường",
        sub: "Chỉ số đẹp nhất acc · 70/231",
        status: "ok",
        members: ["Keqing", "Nahida", "Yae Miko", "Kaedehara Kazuha"],
        tags: [{ t: "ok", text: "Sẵn sàng 100%" }, { t: "warn", text: "Thêm 4pc Rừng Sâu nếu tối ưu" }],
      },
      {
        title: "Ayaka Đóng Băng",
        sub: "Ayaka 10/10/10 · Mona 8/8/13",
        status: "ok",
        members: ["Kamisato Ayaka", "Mona", "Kaedehara Kazuha", "Sangonomiya Kokomi"],
        tags: [{ t: "ok", text: "Sẵn sàng 100%" }, { t: "gold", text: "~95% CR thực" }],
      },
      {
        title: "Hu Tao Bốc Hơi",
        sub: "2 Thủy + Khiên Zhongli",
        status: "ok",
        members: ["Hu Tao", "Yelan", "Xingqiu", "Zhongli"],
        tags: [{ t: "ok", text: "Sẵn sàng 100%" }, { t: "gold", text: "2 Hòa Phác Diên riêng" }],
      },
      {
        title: "Yoimiya Đánh Thường",
        sub: "Yoimiya 74/203 · Yun Jin C6",
        status: "ok",
        members: ["Yoimiya", "Yelan", "Yun Jin", "Zhongli"],
        tags: [{ t: "ok", text: "Sẵn sàng 100%" }],
      },
      {
        title: "Ganyu Tan Chảy",
        sub: "Ganyu 10/10/10 · 4pc Đoàn Hát",
        status: "ok",
        members: ["Ganyu", "Bennett", "Xiangling", "Zhongli"],
        tags: [{ t: "ok", text: "Sẵn sàng 100%" }],
      },
      {
        title: "Nilou Sum Suê",
        sub: "51.5k HP · Collei 4pc Rừng Sâu",
        status: "ok",
        members: ["Nilou", "Nahida", "Sangonomiya Kokomi", "Collei"],
        tags: [{ t: "ok", text: "Sẵn sàng 100%" }],
      },
      {
        title: "Eula Vật Lý",
        sub: "C2 10/10/10 · Rosaria C6 bù CR",
        status: "warn",
        members: ["Eula", "Raiden Shogun", "Rosaria", "Zhongli"],
        tags: [{ t: "warn", text: "Tình huống / Siêu Dẫn" }],
      },
      {
        title: "Neuvillette Carry",
        sub: "Chờ đổi Nón CR% / 4pc Thợ Săn",
        status: "bad",
        members: ["Neuvillette", "Kaedehara Kazuha", "Zhongli", "Yae Miko"],
        tags: [{ t: "bad", text: "Sửa Neuvillette CR 26%" }, { t: "gold", text: "Biến thể EM: Nahida + Kuki" }],
      },
      {
        title: "Navia 2 Nham",
        sub: "Chờ Cát ATK% + Chiori E 8–9",
        status: "bad",
        members: ["Navia", "Chiori", "Bennett", "Xiangling"],
        tags: [{ t: "bad", text: "Sửa Navia & Chiori" }],
      },
      {
        title: "Mitya Meta 7.2",
        sub: "Chờ Snezhnaya (Aino farm trước)",
        status: "warn",
        members: ["Mitya", "Valeriy", "Kaedehara Kazuha", "Aino"],
        tags: [{ t: "warn", text: "Chờ Snezhnaya" }, { t: "gold", text: "Đã có Trấn Mitya" }],
      },
    ],
  },
  abyss: {
    label: "La Hoàn (11-3)",
    items: [
      {
        title: "Tầng 12 · Nửa 1 (Navia)",
        sub: "12-1 Slime · 12-2 Herra · 12-3 Moongecko",
        status: "bad",
        members: ["Navia", "Zhongli", "Chiori", "Xianyun"],
        tags: [{ t: "gold", text: "+75% Lunar-Crystallize" }, { t: "bad", text: "Phá khiên Nham 12-3" }],
      },
      {
        title: "Tầng 12 · Nửa 2 (Raiden Nat)",
        sub: "Sẵn sàng nhất · đủ Hỏa/Lôi cho 12-2",
        status: "ok",
        members: ["Raiden Shogun", "Bennett", "Xiangling", "Yelan"],
        tags: [{ t: "ok", text: "Đánh ngay" }, { t: "gold", text: "+200 EM" }],
      },
      {
        title: "Tầng 12 · Nửa 2 (Neuvillette)",
        sub: "Ăn +200 EM sau khi sửa CR & Kuki",
        status: "bad",
        members: ["Neuvillette", "Nahida", "Kuki Shinobu", "Kaedehara Kazuha"],
        tags: [{ t: "bad", text: "Sửa Neuv CR & Kuki EM" }],
      },
      {
        title: "Tầng 12 · Nửa 1 (Eula Siêu Dẫn)",
        sub: "Chuyên trị 12-2 Herra (nếu dùng)",
        status: "warn",
        members: ["Eula", "Raiden Shogun", "Rosaria", "Zhongli"],
        tags: [{ t: "warn", text: "Tình huống 12-2" }],
      },
    ],
  },
  theater: {
    label: "Nhà Hát (7.2)",
    items: [
      {
        title: "Màn 3 · Jadeplume Terrorshroom",
        sub: "Dùng Lôi kích hoạt nhanh",
        status: "ok",
        members: ["Keqing", "Fischl", "Xingqiu", "Barbara"],
        tags: [{ t: "ok", text: "Boss đầu" }, { t: "gold", text: "Thủy · Lôi · Nham" }],
      },
      {
        title: "Màn 6 · Whisperer of Nightmares",
        sub: "Phá khiên phản ứng Thủy + Lôi",
        status: "warn",
        members: ["Kamisato Ayato", "Yae Miko", "Yelan", "Kuki Shinobu"],
        tags: [{ t: "warn", text: "Cẩn thận CR Ayato 31%" }],
      },
      {
        title: "Màn 8 · Battle-Hardened Samachurl",
        sub: "Bắt buộc giữ Nham + Thủy",
        status: "bad",
        members: ["Navia", "Zhongli", "Chiori", "Xingqiu"],
        tags: [{ t: "bad", text: "Giữ Nham cho Màn 8" }],
      },
      {
        title: "Màn 10 · Radiant Moonfly",
        sub: "Cần Healer toàn đội mạnh",
        status: "bad",
        members: ["Neuvillette", "Raiden Shogun", "Sangonomiya Kokomi", "Yelan"],
        tags: [{ t: "ok", text: "Giữ Kokomi / Qiqi" }, { t: "gold", text: "Mượn bạn: Furina / Xilonen" }],
      },
    ],
  },
  meta: {
    label: "Meta 7.2",
    items: [
      {
        title: "Nhóm Cần Build Ngay (Đã mở map)",
        sub: "Aino (Nod-Krai) · Chiori · Kuki · Fischl",
        status: "warn",
        members: ["Aino", "Chiori", "Kuki Shinobu", "Fischl"],
        tags: [{ t: "ok", text: "Farm được ngay" }, { t: "gold", text: "Không cần Snezhnaya" }],
      },
      {
        title: "Nhóm Chờ Snezhnaya (0%)",
        sub: "Mitya + Trấn · Valeriy C1",
        status: "bad",
        members: ["Mitya", "Valeriy", "Kaedehara Kazuha", "Aino"],
        tags: [{ t: "bad", text: "Snezhnaya 0%" }, { t: "gold", text: "Mitya Tier 0 7.2" }],
      },
      {
        title: "Mục Tiêu Roll Bổ Sung",
        sub: "Kéo trần DPS cả acc",
        status: "warn",
        members: ["Furina", "Xilonen", "Odette", "Columbina"],
        tags: [{ t: "gold", text: "Ưu tiên Furina & Xilonen" }],
      },
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
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveDone() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(APP.done));
  } catch {}
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
  if (!c) return { level: "warn", text: "Chưa sở hữu / Trial" };
  const cr = parseFloat(stat(c, "Tỷ Lệ Bạo Kích"));
  const em = parseFloat(stat(c, "Tinh Thông Nguyên Tố"));
  const hp = parseFloat(stat(c, "Giới Hạn HP"));
  const er = parseFloat(stat(c, "Hiệu Quả Nạp Nguyên Tố"));

  if (name === "Neuvillette" && cr < 45) return { level: "bad", text: `CR ${cr}% → Nón CR% / Thợ Săn` };
  if (name === "Navia" && cr < 45) return { level: "bad", text: `Cát HP% · CR ${cr}% → ATK% + CR%` };
  if (name === "Kuki Shinobu" && em < 500) return { level: "bad", text: `EM ${em} → 3 món EM + Lv.90` };
  if (name === "Chiori" && c.talent_levels === "1/1/1") return { level: "bad", text: "E 1→8 + Cát DEF%" };
  if (name === "Chevreuse" && hp < 32000) return { level: "bad", text: `HP ${Math.round(hp / 1000)}k → 40k HP` };
  if (name === "Fischl" && cr < 45) return { level: "bad", text: `CR ${cr}% → Tuyệt Huyền + Nón CR` };
  if (name === "Kamisato Ayato" && cr < 45) return { level: "warn", text: `CR ${cr}% → Nón CR%` };
  if (name === "Yelan") return { level: "warn", text: `68.9/152.6 · Lưu ý ER ${er}%` };
  if (name === "Xianyun") return { level: "warn", text: `2647 ATK · Lưu ý ER ${er}%` };
  if (name === "Mitya") return { level: "warn", text: "Có Trấn · Chờ Snezhnaya" };
  if (name === "Valeriy") return { level: "warn", text: "C1 · Chờ Snezhnaya" };
  if (name === "Aino") return { level: "warn", text: "Lv.1 → 80 (Nod-Krai)" };
  if (name === "Eula") return { level: "warn", text: `C2 10/10/10 · CR ${cr}%` };
  if (name === "Mona") return { level: "ok", text: `C4 · 8/8/13 · ${er}% ER` };
  if (name === "Raiden Shogun") return { level: "ok", text: `C1 · Đoạn Thảo · ${er}% ER` };
  if (name === "Bennett") return { level: "ok", text: `C6 · 5/9/13 · ${er}% ER` };
  if (name === "Kamisato Ayaka") return { level: "ok", text: "10/10/10 · ~95% CR thực" };
  if (name === "Keqing") return { level: "ok", text: `C1 · ${cr}/${stat(c, "Sát Thương Bạo Kích")}` };
  if (name === "Kaedehara Kazuha") return { level: "ok", text: `${em} EM + Trấn` };
  if (name === "Zhongli") return { level: "ok", text: `C1 · ${Math.round(hp / 1000)}k HP` };
  return { level: "ok", text: `Lv.${c.level} · C${c.constellation} · ${c.talent_levels}` };
}

function renderRadar() {
  const day = FARM_DAYS.find((d) => d.key === APP.dayKey) || FARM_DAYS[0];
  const isRealToday = APP.dayKey === new Date().getDay();
  const avatars = day.chars
    .map((n) => {
      const c = byName(n);
      return c?.icon ? `<img src="${esc(c.icon)}" alt="${esc(n)}" title="${esc(n)}" referrerpolicy="no-referrer" />` : "";
    })
    .join("");

  return `
    <section class="radar">
      <div class="radar-left">
        <span class="pill pill-gold">${isRealToday ? "HÔM NAY" : "XEM TRƯỚC"} · ${esc(day.title.toUpperCase())}</span>
        <div class="radar-avatars">${avatars}</div>
        <div class="radar-actions">
          ${day.tags.map((t) => `<span class="pill pill-ok">${esc(t)}</span>`).join("")}
        </div>
      </div>
      <div class="day-tabs">
        ${FARM_DAYS.map((d) => `<button class="day-btn ${d.key === APP.dayKey ? "active" : ""}" data-day="${d.key}">${esc(d.short)}</button>`).join("")}
      </div>
    </section>
  `;
}

function renderStageExtra() {
  if (APP.mode === "theater") {
    const elig = APP.data.characters.filter(
      (c) => c.level >= 70 && (["Hydro", "Electro", "Geo"].includes(c.element) || c.name === "Qiqi")
    );
    return `
      <div class="stage-extra">
        <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:6px; align-items:center;">
          <strong style="font-size:12.5px; color:var(--gold);">Quân số Nhà Hát 7.2 (${elig.length} Lv.70+ có sẵn + 3 Trial Flins/Aino/Kachina)</strong>
          <span class="pill pill-bad">Hết hạn 01/12 · Lắp đồ tạm: Ningguang, Beidou, Noelle, Gorou</span>
        </div>
        <div class="dock-grid">
          ${elig
            .map(
              (c) => `
              <div class="dock-tile r${c.rarity === 5 ? 5 : 4}" title="${esc(c.name)} Lv.${c.level} C${c.constellation}">
                <img src="${esc(c.icon)}" alt="${esc(c.name)}" loading="lazy" referrerpolicy="no-referrer" />
                <div>${esc(c.name)}</div>
              </div>`
            )
            .join("")}
        </div>
      </div>
    `;
  }
  if (APP.mode === "meta") {
    return `
      <div class="stage-extra" style="display:flex; flex-wrap:wrap; gap:6px;">
        <span class="pill pill-bad">Snezhnaya đang 0% → Tạm gác Mitya &amp; Valeriy</span>
        <span class="pill pill-ok">Nod-Krai (7%) &amp; Fontaine (64%) &amp; Inazuma (100%) farm được ngay</span>
        <span class="pill pill-gold">Ảo Cảnh Hiểm Ác: 120 Nhựa = +1 TDV 5★ trong 10 ngày đầu (chu kỳ 11.11–15.12)</span>
      </div>
    `;
  }
  if (APP.mode === "abyss") {
    return `
      <div class="stage-extra" style="display:flex; flex-wrap:wrap; gap:6px;">
        <span class="pill pill-gold">Kỳ 16.11–16.12 · Hiện tại: 11-3 (25/36★)</span>
        <span class="pill">Tầng 11: +60% Lôi / Nham</span>
        <span class="pill">Tầng 12: Nửa 1 +75% Lunar-Crystallize · Nửa 2 +200 EM</span>
      </div>
    `;
  }
  return "";
}

function renderCockpit() {
  const modeObj = MODES[APP.mode];
  const items = modeObj.items;
  const activeItem = items[APP.index] || items[0];

  const stripsHtml = items
    .map((it, idx) => {
      const impacted = APP.focusChar && it.members.includes(APP.focusChar);
      const avatars = it.members
        .map((n) => {
          const c = byName(n);
          return c?.icon
            ? `<img src="${esc(c.icon)}" alt="${esc(n)}" referrerpolicy="no-referrer" />`
            : `<span class="mini-ghost">${esc(n.slice(0, 2).toUpperCase())}</span>`;
        })
        .join("");
      return `
        <button class="team-strip ${idx === APP.index ? "active" : ""} ${impacted ? "impacted" : ""}" data-idx="${idx}">
          <span class="dot dot-${esc(it.status)}"></span>
          <div class="strip-avatars">${avatars}</div>
          <div class="strip-meta">
            <div class="strip-title">${esc(it.title)}</div>
            <div class="strip-sub">${esc(it.sub)}</div>
          </div>
        </button>
      `;
    })
    .join("");

  const partyHtml = activeItem.members
    .map((name) => {
      const c = byName(name);
      const node = charNode(name);
      const isFocus = APP.focusChar === name;
      const rClass = c ? (c.rarity === 5 ? "r5" : "r4") : "r5";
      const artImg = c?.card_image || c?.icon;
      const wIcon = c?.weapon?.icon;
      const artIcons = (c?.artifacts || []).slice(0, 3).map((a) => a.icon).filter(Boolean);

      return `
        <article class="hero-slot ${rClass} ${isFocus ? "is-focus" : ""}">
          <div class="slot-art">
            ${artImg ? `<img src="${esc(artImg)}" alt="${esc(name)}" referrerpolicy="no-referrer" />` : `<div class="slot-ghost">${esc(name.slice(0, 2).toUpperCase())}</div>`}
            <div class="slot-top-badges">
              <span class="slot-badge">${c ? `Lv.${esc(c.level)}` : "Chưa có"}</span>
              <span class="slot-badge gold">${c ? `C${esc(c.constellation)}` : "Target"}</span>
            </div>
            <div class="slot-namebar">
              <strong>${esc(name)}</strong>
              <span>${c ? esc(c.talent_levels) : ""}</span>
            </div>
          </div>
          <div class="slot-gear">
            ${
              c
                ? `<div class="gear-icons">
                    ${wIcon ? `<img src="${esc(wIcon)}" title="${esc(c.weapon?.name || "")}" referrerpolicy="no-referrer" />` : ""}
                    ${artIcons.map((u) => `<img src="${esc(u)}" referrerpolicy="no-referrer" />`).join("")}
                    <span class="w-meta">R${esc(c.weapon?.refinement || 1)}</span>
                  </div>`
                : `<div class="gear-icons"><span class="w-meta" style="margin-left:0;">Mục tiêu roll</span></div>`
            }
            <div class="node-chip node-${esc(node.level)}">${esc(node.text)}</div>
          </div>
        </article>
      `;
    })
    .join("");

  return `
    <section class="cockpit">
      <aside class="rail">
        <div class="mode-tabs">
          ${Object.entries(MODES)
            .map(([k, m]) => `<button class="mode-btn ${APP.mode === k ? "active" : ""}" data-mode="${k}">${esc(m.label)}</button>`)
            .join("")}
        </div>
        <div class="strip-list">${stripsHtml}</div>
      </aside>

      <div class="stage">
        <div class="stage-head">
          <h2>${esc(activeItem.title)}</h2>
          <div class="stage-tags">
            ${activeItem.tags.map((t) => `<span class="pill pill-${esc(t.t)}">${esc(t.text)}</span>`).join("")}
          </div>
        </div>
        <div class="party-grid">${partyHtml}</div>
        ${renderStageExtra()}
      </div>
    </section>
  `;
}

function renderChecklist() {
  const doneCount = FIX_NODES.filter((n) => APP.done[n.id]).length;
  return `
    <section class="checklist-panel">
      <div class="checklist-head">
        <strong>Node Build / Chỉnh (${doneCount}/${FIX_NODES.length} xong)</strong>
        <span class="pill">Bấm vào nhân vật để sáng các đội bị ảnh hưởng · Tick ô vuông để lưu trạng thái</span>
      </div>
      <div class="checklist-grid">
        ${FIX_NODES.map((n) => {
          const c = byName(n.name);
          const isDone = !!APP.done[n.id];
          const focused = APP.focusChar === n.name;
          return `
            <div class="fix-item ${isDone ? "done" : ""} ${focused ? "focused" : ""}" data-char="${esc(n.name)}">
              <input type="checkbox" data-fix-id="${esc(n.id)}" ${isDone ? "checked" : ""} aria-label="Đánh dấu ${esc(n.name)}" />
              ${c?.icon ? `<img src="${esc(c.icon)}" alt="${esc(n.name)}" referrerpolicy="no-referrer" />` : ""}
              <div class="fix-item-text">
                <b>${esc(n.name)}</b>
                <span>${esc(n.label)}</span>
              </div>
              <span class="dot dot-${n.level === "bad" ? "bad" : "warn"}"></span>
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
    renderCockpit(),
    renderChecklist(),
  ].join("");

  document.querySelectorAll(".day-btn").forEach((b) => {
    b.addEventListener("click", () => {
      APP.dayKey = Number(b.getAttribute("data-day"));
      render();
    });
  });

  document.querySelectorAll(".mode-btn").forEach((b) => {
    b.addEventListener("click", () => {
      APP.mode = b.getAttribute("data-mode");
      APP.index = 0;
      render();
    });
  });

  document.querySelectorAll(".team-strip").forEach((b) => {
    b.addEventListener("click", () => {
      APP.index = Number(b.getAttribute("data-idx"));
      render();
    });
  });

  document.querySelectorAll(".fix-item input[type=checkbox]").forEach((cb) => {
    cb.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = cb.getAttribute("data-fix-id");
      APP.done[id] = cb.checked;
      saveDone();
      render();
    });
  });

  document.querySelectorAll(".fix-item").forEach((el) => {
    el.addEventListener("click", () => {
      const ch = el.getAttribute("data-char");
      APP.focusChar = APP.focusChar === ch ? null : ch;
      if (APP.focusChar) {
        const items = MODES[APP.mode].items;
        const foundIdx = items.findIndex((it) => it.members.includes(APP.focusChar));
        if (foundIdx !== -1) APP.index = foundIdx;
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
    document.getElementById("app-root").innerHTML = `<div class="stage">Không tải được dữ liệu: ${esc(err.message)}</div>`;
  }
}

init();
