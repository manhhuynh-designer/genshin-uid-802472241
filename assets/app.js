const DATA_URL = "./data/genshin_uid_802472241_data.json?v=3";

function esc(v) {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function byName(chars, name) {
  return chars.find((c) => c.name === name) || null;
}

function stat(c, key) {
  return (c && c.stats && c.stats[key] && c.stats[key].final) || "-";
}

function avatarTile(chars, name, opts = {}) {
  const c = byName(chars, name);
  const label = opts.label || (c ? `Lv.${c.level}` : opts.sub || "Trial");
  const cons = opts.cons ?? (c ? `C${c.constellation}` : "");
  const rClass = c ? (c.rarity === 5 ? "r5" : "r4") : (opts.rarity === 5 ? "r5" : "ghost");
  const imgHtml = c && c.icon
    ? `<img src="${esc(c.icon)}" alt="${esc(name)}" loading="lazy" referrerpolicy="no-referrer" />`
    : `<span class="avatar-fallback">${esc(name.slice(0, 2).toUpperCase())}</span>`;

  return `
    <div class="avatar-tile ${rClass}" title="${esc(name)}">
      <div class="avatar-img-wrap">
        ${imgHtml}
        ${cons ? `<span class="cons-tag">${esc(cons)}</span>` : ""}
        <span class="lv-tag">${esc(label)}</span>
      </div>
      <div class="avatar-name">${esc(name)}</div>
    </div>
  `;
}

function teamRow(chars, names) {
  return `<div class="team-row">${names.map((n) => avatarTile(chars, n)).join("")}</div>`;
}

function renderTeams(chars) {
  const readyTeams = [
    {
      title: "Raiden National (Ổn định #1 Boss đơn)",
      badge: "Sẵn sàng 100%",
      badgeType: "pill-ok",
      members: ["Raiden Shogun", "Bennett", "Xiangling", "Yelan"],
      nodes: [
        { type: "good", text: "Raiden C1 + Đoạn Thảo R1 · 264% ER" },
        { type: "good", text: "Bennett C6 (264% ER) · XL (236% ER)" },
        { type: "neutral", text: "Node: Raiden CR 50.1% → đổi Nón CR nếu có" },
      ],
    },
    {
      title: "Keqing Tăng Cường (Chỉ số đẹp nhất acc)",
      badge: "Sẵn sàng 100%",
      badgeType: "pill-ok",
      members: ["Keqing", "Nahida", "Yae Miko", "Kaedehara Kazuha"],
      nodes: [
        { type: "good", text: "Keqing C1 70.1/231.4 · Yae 51/252.2" },
        { type: "good", text: "Kazuha 1,011 EM + Trấn" },
        { type: "neutral", text: "Node: Kẹp Zhongli thay Kazuha nếu cần khiên" },
      ],
    },
    {
      title: "Ayaka Đóng Băng (Chuẩn sách giáo khoa)",
      badge: "Sẵn sàng 100%",
      badgeType: "pill-ok",
      members: ["Kamisato Ayaka", "Mona", "Kaedehara Kazuha", "Sangonomiya Kokomi"],
      nodes: [
        { type: "good", text: "Ayaka 10/10/10 · ~95% CR thực chiến" },
        { type: "good", text: "Mona C4 8/8/13 · 231.7% ER · TTDS" },
        { type: "neutral", text: "Node: Kokomi có thể đổi sang Diona C6 nếu cần pin Băng" },
      ],
    },
    {
      title: "Hu Tao Bốc Hơi (2 Thủy + Khiên)",
      badge: "Sẵn sàng 100%",
      badgeType: "pill-ok",
      members: ["Hu Tao", "Yelan", "Xingqiu", "Zhongli"],
      nodes: [
        { type: "good", text: "Hu Tao 9/10/10 · 54.3/221.3 · Hòa Phác Diên" },
        { type: "good", text: "2 cây Hòa Phác Diên riêng với Zhongli" },
        { type: "neutral", text: "Node: Có thể thay Xingqiu/Zhongli = Xianyun Đáp Đất" },
      ],
    },
    {
      title: "Yoimiya Đánh Thường",
      badge: "Sẵn sàng 100%",
      badgeType: "pill-ok",
      members: ["Yoimiya", "Yelan", "Yun Jin", "Zhongli"],
      nodes: [
        { type: "good", text: "Yoimiya 10/10/8 · 74.2/203.7 · Cánh Thiên Không" },
        { type: "good", text: "Yun Jin C6 · 2,160 DEF · 187.5% ER" },
        { type: "neutral", text: "Node: Kẹp Bennett nếu Yelan thiếu Nạp (140.7%)" },
      ],
    },
    {
      title: "Ganyu Tan Chảy",
      badge: "Sẵn sàng 100%",
      badgeType: "pill-ok",
      members: ["Ganyu", "Bennett", "Xiangling", "Zhongli"],
      nodes: [
        { type: "good", text: "Ganyu 10/10/10 · 58.3/198.0 · 4pc Đoàn Hát" },
        { type: "good", text: "Zhongli 39.1k HP giữ trọng kích mượt" },
      ],
    },
    {
      title: "Nilou Sum Suê (Bloom AoE)",
      badge: "Sẵn sàng 100%",
      badgeType: "pill-ok",
      members: ["Nilou", "Nahida", "Sangonomiya Kokomi", "Collei"],
      nodes: [
        { type: "good", text: "Nilou 51.5k HP · Collei giữ 4pc Ký Ức Rừng Sâu" },
        { type: "neutral", text: "Node: Có thể dùng Yaoyao thay Collei nếu cần thêm heal" },
      ],
    },
    {
      title: "Eula Vật Lý (Đầu tư C2 10/10/10)",
      badge: "Tình huống / Siêu Dẫn",
      badgeType: "pill-gold",
      members: ["Eula", "Raiden Shogun", "Rosaria", "Zhongli"],
      nodes: [
        { type: "good", text: "Eula C2 · Trấn R1 · 4pc Lửa Trắng Xám" },
        { type: "good", text: "Rosaria C6 74.2% CR + Tông Thất + Tây Phong" },
        { type: "bad", text: "Node: Eula CR 51.7% · cần Rosaria bù CR & ER" },
      ],
    },
  ];

  const upgradeTeams = [
    {
      title: "Neuvillette Carry / Phản ứng",
      badge: "Chờ sửa CR%",
      badgeType: "pill-danger",
      members: ["Neuvillette", "Kaedehara Kazuha", "Zhongli", "Yae Miko"],
      nodes: [
        { type: "bad", text: "Node: Neuvillette CR 26% → đổi Nón CR% / 4pc Thợ Săn" },
        { type: "neutral", text: "Biến thể +200 EM: Nahida + Kuki (đổi 3 món EM)" },
      ],
    },
    {
      title: "Navia 2 Nham",
      badge: "Chờ sửa Cát/Nón",
      badgeType: "pill-danger",
      members: ["Navia", "Chiori", "Bennett", "Xiangling"],
      nodes: [
        { type: "bad", text: "Node: Navia Cát HP% → ATK% + Nón CR% + Vua Biển Lv.90" },
        { type: "bad", text: "Node: Chiori nâng E 1 → 8–9 + đổi Cát DEF%" },
      ],
    },
    {
      title: "Mitya Stellar-Conduct (Meta 7.2)",
      badge: "Chờ Snezhnaya",
      badgeType: "pill-gold",
      members: ["Mitya", "Valeriy", "Kaedehara Kazuha", "Aino"],
      nodes: [
        { type: "good", text: "Đã có sẵn Mitya + trấn Sắc Lệnh Tinh Tú + Valeriy C1" },
        { type: "neutral", text: "Node: Farm trước Aino ở Nod-Krai; Mitya & Valeriy đợi Snezhnaya" },
      ],
    },
  ];

  const renderCard = (t) => `
    <div class="card">
      <div class="card-title">
        <span>${esc(t.title)}</span>
        <span class="pill ${t.badgeType}">${esc(t.badge)}</span>
      </div>
      ${teamRow(chars, t.members)}
      <div class="diff-row" style="margin-top:10px;">
        ${t.nodes.map((n) => `<span class="tag-${n.type}">${esc(n.text)}</span>`).join("")}
      </div>
    </div>
  `;

  return `
    <section class="section" id="sec-teams">
      <div class="section-head">
        <h2>Đội Hình Hiện Tại (Sẵn Sàng &amp; Chờ Chỉnh)</h2>
        <div class="badge-row">
          <span class="pill pill-ok">8 đội dùng ngay không trùng đồ</span>
          <span class="pill pill-gold">3 đội tiềm năng (gắn sẵn node chỉnh)</span>
        </div>
      </div>

      <div class="grid grid-2">
        ${readyTeams.map(renderCard).join("")}
      </div>

      <div class="grid grid-3" style="margin-top:12px;">
        ${upgradeTeams.map(renderCard).join("")}
      </div>
    </section>
  `;
}

function renderAbyss(chars) {
  return `
    <section class="section" id="sec-abyss">
      <div class="section-head">
        <h2>La Hoàn Thâm Cảnh (16.11 – 16.12.2026)</h2>
        <div class="badge-row">
          <span class="pill pill-gold">Hiện tại: 11-3 · 25/36★</span>
          <span class="pill">Tầng 11: +60% Lôi / Nham</span>
          <span class="pill">Tầng 12: Nửa 1 +75% Lunar-Crystallize · Nửa 2 +200 EM</span>
        </div>
      </div>

      <div class="grid grid-2">
        <div class="card">
          <div class="card-title">
            <span>Nửa 1 — Chuyên Boss &amp; Phá Khiên Nham (12-3)</span>
            <span class="pill pill-gold">Navia Carry</span>
          </div>
          ${teamRow(chars, ["Navia", "Zhongli", "Chiori", "Xianyun"])}
          <div class="diff-row" style="margin-top:10px;">
            <span class="tag-neutral">12-1 Prism Slime (Anemo/Đánh thường)</span>
            <span class="tag-neutral">12-2 Frostnight Herra (hoặc Eula C2)</span>
            <span class="tag-good">12-3 Radiant Moongecko (Nham + Trọng kiếm)</span>
          </div>
        </div>

        <div class="card">
          <div class="card-title">
            <span>Nửa 2 — Raiden National (Ưu tiên dùng ngay)</span>
            <span class="pill pill-ok">Chỉ số sẵn sàng nhất</span>
          </div>
          ${teamRow(chars, ["Raiden Shogun", "Bennett", "Xiangling", "Yelan"])}
          <div class="diff-row" style="margin-top:10px;">
            <span class="tag-good">12-1 Wavebinder (Đủ ấn ngắt chiêu)</span>
            <span class="tag-good">12-2 Guardian Blade (Hỏa + Lôi phá khiên)</span>
            <span class="tag-neutral">12-3 PMA (Dồn boss đơn)</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderTheater(chars) {
  const elig = chars.filter(
    (c) => c.level >= 70 && (["Hydro", "Electro", "Geo"].includes(c.element) || c.name === "Qiqi")
  );
  const trials = [
    { name: "Flins", sub: "Trial" },
    { name: "Aino", sub: "Trial" },
    { name: "Kachina", sub: "Trial" },
  ];

  const bosses = [
    {
      act: "Màn 3 · Jadeplume Terrorshroom",
      tag: "Dùng Lôi kích nhanh",
      team: ["Keqing", "Fischl", "Xingqiu", "Barbara"],
    },
    {
      act: "Màn 6 · Whisperer of Nightmares",
      tag: "Phá khiên Thủy + Lôi",
      team: ["Kamisato Ayato", "Yae Miko", "Yelan", "Kuki Shinobu"],
    },
    {
      act: "Màn 8 · Battle-Hardened Samachurl",
      tag: "Giữ Nham + Thủy",
      team: ["Navia", "Zhongli", "Chiori", "Xingqiu"],
    },
    {
      act: "Màn 10 · Radiant Moonfly",
      tag: "Giữ Healer mạnh",
      team: ["Neuvillette", "Raiden Shogun", "Sangonomiya Kokomi", "Yelan"],
    },
  ];

  return `
    <section class="section" id="sec-theater">
      <div class="section-head">
        <h2>Nhà Hát Giả Tưởng (01.11 – 01.12.2026)</h2>
        <div class="badge-row">
          <span class="pill pill-gold">Thủy · Lôi · Nham</span>
          <span class="pill pill-ok">${elig.length} Lv.70+ + 3 Trial + 1 Bạn = ${elig.length + 4} slot</span>
          <span class="pill">Mượn bạn: Furina / Xilonen</span>
        </div>
      </div>

      <div class="grid grid-2" style="margin-bottom:12px;">
        ${bosses
          .map(
            (b) => `
          <div class="card">
            <div class="card-title">
              <span>${esc(b.act)}</span>
              <span class="pill pill-gold">${esc(b.tag)}</span>
            </div>
            ${teamRow(chars, b.team)}
          </div>`
          )
          .join("")}
      </div>

      <div class="card">
        <div class="card-title">
          <span>Quân số hợp lệ (${elig.length} có sẵn + 3 Trial)</span>
          <span class="pill pill-danger">Node lắp đồ tạm: Ningguang · Beidou · Noelle · Gorou</span>
        </div>
        <div class="mini-roster">
          ${elig.map((c) => avatarTile(chars, c.name)).join("")}
          ${trials.map((t) => avatarTile(chars, t.name, { label: t.sub, cons: "Trial" })).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderFixes(chars) {
  const nodes = [
    {
      name: "Neuvillette",
      badge: "Sửa gấp #1",
      badgeType: "pill-danger",
      bad: `CR ${stat(byName(chars, "Neuvillette"), "Tỷ Lệ Bạo Kích")} · 3 món HP%`,
      good: "Đổi Nón CR% → 4pc Thợ Săn Marechaussee",
    },
    {
      name: "Navia",
      badge: "Sửa gấp #1",
      badgeType: "pill-danger",
      bad: `Cát HP% · CR ${stat(byName(chars, "Navia"), "Tỷ Lệ Bạo Kích")} · Kiếm Lv.80`,
      good: "Cát ATK% + Nón CR% · Vua Biển Lv.90",
    },
    {
      name: "Kuki Shinobu",
      badge: "Sửa đồ EM",
      badgeType: "pill-danger",
      bad: `EM ${stat(byName(chars, "Kuki Shinobu"), "Tinh Thông Nguyên Tố")} · Lv.80`,
      good: "3 món EM + lên Lv.90 (Hyperbloom)",
    },
    {
      name: "Chiori",
      badge: "Nâng E + Cát",
      badgeType: "pill-danger",
      bad: "Thiên phú 1/1/1 · Cát ATK%",
      good: "Nâng E 8–9 · Cát DEF%",
    },
    {
      name: "Chevreuse",
      badge: "Support Overload",
      badgeType: "pill-danger",
      bad: "HP 21.5k (đeo Ly Hỏa + Nón CR)",
      good: "3 món HP% + Hắc Anh Thương → 40k HP",
    },
    {
      name: "Fischl",
      badge: "Sub-DPS Lôi",
      badgeType: "pill-danger",
      bad: `CR ${stat(byName(chars, "Fischl"), "Tỷ Lệ Bạo Kích")} · Cung Rỉ Sét`,
      good: "Tuyệt Huyền + Nón CR% · 4pc Đoàn Kịch",
    },
    {
      name: "Kamisato Ayato",
      badge: "Nhà Hát Màn 6",
      badgeType: "pill-gold",
      bad: `CR ${stat(byName(chars, "Kamisato Ayato"), "Tỷ Lệ Bạo Kích")} · CD 208.9%`,
      good: "Đổi Nón CR%",
    },
    {
      name: "Nahida",
      badge: "Set Thảo",
      badgeType: "pill-gold",
      bad: "Đội Thảo thiếu 4pc Ký Ức Rừng Sâu",
      good: "749 EM · giữ 4pc Giấc Mộng nếu người khác cầm Deepwood",
    },
    {
      name: "Yelan",
      badge: "Nạp (ER)",
      badgeType: "pill-gold",
      bad: "ER 140.7% (thiếu nếu đi 1 Thủy)",
      good: "68.9/152.6 đẹp · đổi Tây Phong khi đi solo Thủy",
    },
    {
      name: "Venti",
      badge: "Kiểm tra lại TDV",
      badgeType: "pill-gold",
      bad: "4 món TDV trên HoYoLAB đang Lv.0",
      good: "Có sẵn trấn Lv.90 (196.6% ER) · nâng hoặc đồng bộ lại TDV",
    },
    {
      name: "Jean",
      badge: "Healer toàn đội",
      badgeType: "pill-gold",
      bad: "Mới 4 món (Hoa/Nón +0 · 105% ER)",
      good: "Lắp đủ 5 món +20 + đẩy ER ~160–180%",
    },
    {
      name: "Mika",
      badge: "Healer/Pin",
      badgeType: "pill-gold",
      bad: "Thiếu Hoa (4 món) · Ly Băng / Nón ATK",
      good: "Gắn Hoa + đổi HP/Trị Liệu (ER 202.5% đã ổn)",
    },
    {
      name: "Mona",
      badge: "Đã chuẩn",
      badgeType: "pill-ok",
      bad: "",
      good: "C4 · 8/8/13 · 231.7% ER · TTDS · sẵn sàng dùng",
    },
    {
      name: "Raiden Shogun",
      badge: "Mạnh nhất acc",
      badgeType: "pill-ok",
      bad: "",
      good: "C1 · Đoạn Thảo R1 · 264% ER · 42.8 CV Hoa (tùy chọn Nón CR%)",
    },
    {
      name: "Bennett",
      badge: "Đã chuẩn 10/10",
      badgeType: "pill-ok",
      bad: "",
      good: "C6 · 5/9/13 · 264.6% ER · 4pc Tông Thất",
    },
  ];

  return `
    <section class="section" id="sec-fixes">
      <div class="section-head">
        <h2>Node Build / Chỉnh (DPS &amp; Support · Healer)</h2>
        <span class="pill">Đỏ = Cần sửa · Vàng = Lưu ý/tối ưu thêm · Xanh = Đã chuẩn</span>
      </div>
      <div class="grid grid-3">
        ${nodes
          .map((f) => {
            const c = byName(chars, f.name);
            const wIcon = c?.weapon?.icon;
            const artIcons = (c?.artifacts || []).slice(0, 3).map((a) => a.icon).filter(Boolean);
            return `
              <div class="fix-card">
                <div class="fix-portrait">${avatarTile(chars, f.name)}</div>
                <div class="fix-body">
                  <div class="fix-head">
                    <strong>${esc(f.name)}</strong>
                    <span class="pill ${esc(f.badgeType)}">${esc(f.badge)}</span>
                  </div>
                  <div class="icon-strip">
                    ${wIcon ? `<img class="mini-icon" src="${esc(wIcon)}" title="${esc(c?.weapon?.name || "")}" referrerpolicy="no-referrer" />` : ""}
                    ${artIcons.map((u) => `<img class="mini-icon" src="${esc(u)}" referrerpolicy="no-referrer" />`).join("")}
                  </div>
                  <div class="diff-row">
                    ${f.bad ? `<span class="tag-bad">${esc(f.bad)}</span>` : ""}
                    <span class="tag-good">${esc(f.good)}</span>
                  </div>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderMeta72(chars) {
  const owned = [
    {
      name: "Aino",
      status: "Farm ngay (Nod-Krai)",
      ok: true,
      tags: ["Lv.1 → 80", "4pc Silken Moon's Serenade", "190–250% ER", "Đại Kiếm Tây Phong"],
    },
    {
      name: "Chiori",
      status: "Farm ngay (Inazuma/Fontaine)",
      ok: true,
      tags: ["E 1 → 8–9", "Cát DEF%", "4pc Giấc Mộng Phù Hoa / Đoàn Kịch"],
    },
    {
      name: "Mitya",
      status: "Chờ mở Snezhnaya",
      ok: false,
      tags: ["Tier 0 Stellar-Conduct", "Trấn Sắc Lệnh Tinh Tú → Lv.90", "4pc Giấc Mộng / DiDS"],
    },
    {
      name: "Valeriy",
      status: "Chờ mở Snezhnaya",
      ok: false,
      tags: ["Khiên + Buff Mitya", "Tây Phong Kiếm", "4pc Heart of the Furnace / Tông Thất"],
    },
  ];

  const targets = [
    { name: "Furina", rarity: 5, sub: "Buff toàn đội" },
    { name: "Xilonen", rarity: 5, sub: "Giảm kháng + Heal" },
    { name: "Odette", rarity: 5, sub: "Hợp Mitya+Valeriy" },
    { name: "Columbina", rarity: 5, sub: "Sub-DPS 7.2" },
  ];

  return `
    <section class="section" id="sec-meta">
      <div class="section-head">
        <h2>Danh Sách Nhân Vật Meta 7.2</h2>
        <span class="pill">Ưu tiên những con đã có sẵn + mục tiêu roll</span>
      </div>

      <div class="grid grid-2" style="margin-bottom:12px;">
        ${owned
          .map((m) => {
            const c = byName(chars, m.name);
            const wIcon = c?.weapon?.icon;
            return `
              <div class="fix-card">
                <div class="fix-portrait">${avatarTile(chars, m.name)}</div>
                <div class="fix-body">
                  <div class="fix-head">
                    <strong>${esc(m.name)}</strong>
                    <span class="pill ${m.ok ? "pill-ok" : "pill-danger"}">${esc(m.status)}</span>
                  </div>
                  <div class="icon-strip">
                    ${wIcon ? `<img class="mini-icon" src="${esc(wIcon)}" title="${esc(c?.weapon?.name || "")}" referrerpolicy="no-referrer" />` : ""}
                    <span class="subtitle" style="margin:0;">${esc(c?.weapon?.name || "")}</span>
                  </div>
                  <div class="diff-row">
                    ${m.tags.map((t) => `<span class="tag-neutral">${esc(t)}</span>`).join("")}
                  </div>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>

      <div class="card">
        <div class="card-title">
          <span>Chưa sở hữu — Nên ưu tiên roll bổ sung</span>
          <span class="pill pill-gold">Kéo trần đội hình</span>
        </div>
        <div class="team-row">
          ${targets.map((t) => avatarTile(chars, t.name, { label: t.sub, rarity: t.rarity, cons: "Target" })).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderFarm(chars) {
  const days = [
    {
      day: "Thứ 2",
      avatars: ["Chiori", "Aino"],
      resin: ["3x Boss Tuần (Narwhal + Quick Silken Feather)", "Sách Aino / Địa Mạch"],
      free: ["Nhặt Cỏ Naku · Lumidouce · Portable Bearing"],
    },
    {
      day: "Thứ 3",
      avatars: ["Aino", "Kuki Shinobu", "Chevreuse"],
      resin: ["Boss Knuckle Duckle (Nod-Krai)", "Mãng Xà Di Tích · Hải Mã"],
      free: ["Dọn quái nguyên liệu"],
    },
    {
      day: "Thứ 4",
      avatars: ["Chiori", "Navia", "Aino"],
      resin: ["Sách Ánh Sáng (Chiori)", "Vũ khí Vua Biển (Navia) & Tây Phong"],
      free: ["Tráp Thánh → Giấc Mộng / Ký Ức Rừng Sâu"],
    },
    {
      day: "Thứ 5",
      avatars: ["Neuvillette", "Fischl"],
      resin: ["Full TDV Thợ Săn Marechaussee / Đoàn Kịch (Fontaine)"],
      free: ["Nhặt lại đặc sản (48h)"],
    },
    {
      day: "Thứ 6 (Hôm nay)",
      today: true,
      avatars: ["Neuvillette", "Fischl", "Aino"],
      resin: ["Check Ảo Cảnh Hiểm Ác (nếu còn hạn 10 ngày → xả Nhựa TDV)", "Hoặc Boss + TDV Fontaine"],
      free: ["Sửa đồ các node đỏ & đi Nhà Hát"],
    },
    {
      day: "Thứ 7",
      avatars: ["Chiori", "Navia"],
      resin: ["Chốt Sách Ánh Sáng (E 8–9)", "Chốt Vua Biển Lv.90"],
      free: ["Leo lại La Hoàn 11-3 & 12"],
    },
    {
      day: "Chủ Nhật",
      avatars: ["Neuvillette", "Chiori", "Aino"],
      resin: ["Bù sách/vũ khí thiếu · dư chạy TDV Fontaine"],
      free: ["Chuẩn bị mở đường Snezhnaya cho Mitya"],
    },
  ];

  return `
    <section class="section" id="sec-farm">
      <div class="section-head">
        <h2>Lịch Farm (Vùng Đã Mở) &amp; Ảo Cảnh Hiểm Ác</h2>
        <span class="pill pill-danger">Tạm gác Snezhnaya (0%)</span>
      </div>

      <div class="highlight-box">
        <div class="card-title" style="margin-bottom:6px;">
          <span>Mẹo Ảo Cảnh Hiểm Ác — Disturbance Outbreak (Kỳ 11.11 – 15.12 · Reset mỗi 5–6 tuần)</span>
          <span class="pill pill-gold">120 Nhựa = +1 TDV 5★ · Mốc 1,200 = Dust of Enlightenment</span>
        </div>
        <div class="diff-row">
          <span class="tag-bad">Không farm được Boss / Sách / Vũ khí</span>
          <span class="tag-good">Rất lời để farm TDV trong 10 ngày đầu (hôm nay 20/11 sát hạn, vào game kiểm tra ngay!)</span>
        </div>
      </div>

      <div class="farm-grid">
        ${days
          .map(
            (d) => `
          <div class="day-card ${d.today ? "today" : ""}">
            <div class="day-head">
              <span>${esc(d.day)}</span>
              ${d.today ? `<span class="pill pill-gold">Today</span>` : ""}
            </div>
            <div class="day-avatars">
              ${d.avatars
                .map((n) => {
                  const c = byName(chars, n);
                  return c && c.icon ? `<img src="${esc(c.icon)}" alt="${esc(n)}" title="${esc(n)}" referrerpolicy="no-referrer" />` : "";
                })
                .join("")}
            </div>
            <div class="day-tags">
              ${d.resin.map((x) => `<span class="tag-good">${esc(x)}</span>`).join("")}
              ${d.free.map((x) => `<span class="tag-neutral">${esc(x)}</span>`).join("")}
            </div>
          </div>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function setupNavHighlight() {
  const pills = Array.from(document.querySelectorAll(".nav-pill"));
  pills.forEach((p) => {
    p.addEventListener("click", () => {
      pills.forEach((x) => x.classList.toggle("active", x === p));
    });
  });
}

async function init() {
  setupNavHighlight();
  try {
    const res = await fetch(DATA_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    if (data.account.banner) {
      document.getElementById("hero-bg").style.backgroundImage = `url('${data.account.banner}')`;
    }
    if (data.account.logo) {
      document.getElementById("hero-logo").src = data.account.logo;
    }
    document.getElementById("player-title").textContent = data.account.nickname;

    const chars = data.characters || [];
    document.getElementById("app-root").innerHTML = [
      renderTeams(chars),
      renderAbyss(chars),
      renderTheater(chars),
      renderFixes(chars),
      renderMeta72(chars),
      renderFarm(chars),
    ].join("");
  } catch (err) {
    document.getElementById("app-root").innerHTML = `<div class="card">Không tải được dữ liệu: ${esc(err.message)}</div>`;
  }
}

init();
