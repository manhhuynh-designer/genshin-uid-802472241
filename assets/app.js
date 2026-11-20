const DATA_URL = "./data/genshin_uid_802472241_data.json";

let APP_DATA = null;
let CHAR_STATE = {
  query: "",
  element: "ALL",
  quick: "ALL",
};

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getStat(c, name) {
  return (c.stats && c.stats[name] && c.stats[name].final) || "-";
}

function parsePct(v) {
  const n = parseFloat(String(v || "0").replace("%", ""));
  return Number.isFinite(n) ? n : 0;
}

function getBuildWarnings(c) {
  const warns = [];
  const cr = parsePct(getStat(c, "Tỷ Lệ Bạo Kích"));
  const em = parsePct(getStat(c, "Tinh Thông Nguyên Tố"));
  const mains = (c.artifacts || []).map((a) => `${a.slot}:${a.main_stat?.name || ""}`);

  if (c.name === "Neuvillette" && cr < 45) warns.push("CR thấp (26%) · Nên đổi 4pc Thợ Săn + Nón CR");
  if (c.name === "Navia" && mains.some((m) => m.includes("Cát") && m.includes("HP"))) warns.push("Đang đeo Cát HP% + CR 29.1%");
  if (c.name === "Kuki Shinobu" && em < 500) warns.push(`EM thấp (${em}) · Cần 3 món EM + Lv.90`);
  if (c.name === "Chiori" && (c.talent_levels === "1/1/1" || mains.some((m) => m.includes("Cát") && m.includes("Tỷ Lệ Tấn Công")))) {
    warns.push("E còn Lv.1 · Đổi Cát DEF%");
  }
  if (c.name === "Fischl" && cr < 45) warns.push("CR thấp (31.8%) · Đổi cung & Nón CR");
  if (c.name === "Kamisato Ayato" && cr < 45) warns.push("CR thấp (31.4%) · Đổi Nón CR");
  if (["Mitya", "Valeriy", "Aino"].includes(c.name) && c.level < 70) warns.push("Meta 7.2 chưa build");
  if (c.level >= 70 && (c.element === "Hydro" || c.element === "Electro" || c.element === "Geo") && ((c.weapon && c.weapon.level === 1) || (c.artifacts || []).length < 5)) {
    warns.push("Thiếu đồ/vũ khí Lv.1 (cần lắp cho Nhà Hát)");
  }
  return warns;
}

function renderOverview(d) {
  const st = d.account.stats;
  const pot = (d.serenitea_pot && d.serenitea_pot[0]) || {};
  const tcg = d.tcg || {};

  const oculi = [
    ["Phong Thần Đồng", st.anemoculus_number],
    ["Nham Thần Đồng", st.geoculus_number],
    ["Lôi Thần Đồng", st.electroculus_number],
    ["Thảo Thần Đồng", st.dendroculus_number],
    ["Thủy Thần Đồng", st.hydroculus_number],
    ["Hỏa Thần Đồng", st.pyroculus_number],
    ["Nguyệt Thần Đồng", st.moonoculus_number],
    ["Băng Thần Đồng", st.iceculus_number],
  ];

  const chests = [
    ["Rương Thường", st.common_chest_number],
    ["Rương Cao Cấp", st.exquisite_chest_number],
    ["Rương Siêu Cấp", st.precious_chest_number],
    ["Rương Hiếm", st.luxurious_chest_number],
    ["Rương Kỳ Dị", st.magic_chest_number],
  ];

  const regionsHtml = (d.world_explorations || [])
    .map((w) => {
      const pct = ((w.exploration_percentage || 0) / 10).toFixed(1).replace(/\.0$/, "");
      const offerings = (w.offerings || [])
        .filter((o) => o.level > 0)
        .map((o) => `${esc(o.name)} Lv.${esc(o.level)}`)
        .join(" · ");
      const subAreas = (w.area_exploration_list || [])
        .map((a) => `${esc(a.name)}: ${((a.exploration_percentage || 0) / 10).toFixed(1).replace(/\.0$/, "")}%`)
        .join(" · ");
      return `
        <div class="explore-item">
          <div class="explore-head">
            <strong>${esc(w.name)} ${w.level ? `<span class="muted">(Uy tín Lv.${esc(w.level)})</span>` : ""}</strong>
            <span>${pct}%</span>
          </div>
          <div class="bar-track"><div class="bar-fill" style="width:${Math.min(100, Number(pct))}%"></div></div>
          ${offerings ? `<div class="explore-sub">Hiến tế: ${offerings}</div>` : ""}
          ${subAreas ? `<div class="explore-sub">${subAreas}</div>` : ""}
        </div>
      `;
    })
    .join("");

  document.getElementById("tab-overview").innerHTML = `
    <h2 class="section-title">Chỉ số Tài khoản</h2>
    <div class="grid grid-4">
      <div class="card"><div class="kpi-label">Ngày hoạt động</div><div class="kpi-value">${esc(st.active_day_number)}</div><div class="kpi-sub">AR ${esc(d.account.adventure_rank)} · Asia</div></div>
      <div class="card"><div class="kpi-label">Thành tựu</div><div class="kpi-value">${esc(st.achievement_number)}</div><div class="kpi-sub">${esc(st.way_point_number)} điểm dịch chuyển · ${esc(st.domain_number)} bí cảnh</div></div>
      <div class="card"><div class="kpi-label">Nhân vật</div><div class="kpi-value">${esc(st.avatar_number)}</div><div class="kpi-sub">${esc(st.full_fetter_avatar_num)} nhân vật Max Yêu Thích</div></div>
      <div class="card"><div class="kpi-label">Endgame hiện tại</div><div class="kpi-value">${esc(st.spiral_abyss)}</div><div class="kpi-sub">La Hoàn 25★ · Ảo Cảnh III (335s)</div></div>
    </div>

    <div class="grid grid-2" style="margin-top: 14px;">
      <div class="card">
        <h3 style="margin:0 0 10px; font-size:15px; color:var(--gold);">Thần Đồng đã nhặt</h3>
        <div class="chip-grid">
          ${oculi.map(([k, v]) => `<div class="stat-chip">${esc(k)}<strong>${esc(v ?? 0)}</strong></div>`).join("")}
        </div>
      </div>
      <div class="card">
        <h3 style="margin:0 0 10px; font-size:15px; color:var(--gold);">Rương kho báu</h3>
        <div class="chip-grid">
          ${chests.map(([k, v]) => `<div class="stat-chip">${esc(k)}<strong>${esc(v ?? 0)}</strong></div>`).join("")}
        </div>
      </div>
    </div>

    <div class="grid grid-2" style="margin-top: 14px;">
      <div class="card">
        <h3 style="margin:0 0 10px; font-size:15px; color:var(--gold);">Ấm Trần Ca</h3>
        <div class="chip-grid">
          <div class="stat-chip">Cấp Tín Nhiệm<strong>${esc(pot.level ?? "-")}</strong></div>
          <div class="stat-chip">Tiên Lực cao nhất<strong>${esc(pot.comfort_num ?? "-")}</strong></div>
          <div class="stat-chip">Đồ trang trí<strong>${esc(pot.item_num ?? "-")}</strong></div>
          <div class="stat-chip">Khách ghé thăm<strong>${esc(pot.visit_num ?? "-")}</strong></div>
        </div>
      </div>
      <div class="card">
        <h3 style="margin:0 0 10px; font-size:15px; color:var(--gold);">Thất Thánh Triệu Hồi (TCG)</h3>
        <div class="chip-grid">
          <div class="stat-chip">Cấp Bài Thủ<strong>${esc(tcg.level ?? "-")}</strong></div>
          <div class="stat-chip">Thẻ Nhân Vật<strong>${esc(tcg.avatar_card_num_gained ?? 0)}/${esc(tcg.avatar_card_num_total ?? 0)}</strong></div>
          <div class="stat-chip">Thẻ Hành Động<strong>${esc(tcg.action_card_num_gained ?? 0)}/${esc(tcg.action_card_num_total ?? 0)}</strong></div>
        </div>
      </div>
    </div>

    <h2 class="section-title">Thám hiểm Thế giới</h2>
    <div class="card">${regionsHtml}</div>
  `;
}

function renderCharactersTab(d) {
  const container = document.getElementById("tab-characters");
  const elements = ["ALL", "Pyro", "Hydro", "Electro", "Cryo", "Anemo", "Geo", "Dendro"];
  const quickFilters = [
    ["ALL", "Tất cả (70)"],
    ["FIX", "Cần sửa / thiếu đồ"],
    ["IT72", "Nhà Hát 7.2 (Thủy/Lôi/Nham Lv.70+)"],
    ["META72", "Meta 7.2 mới (Mitya/Valeriy/Aino)"],
    ["LV90", "Lv.90"],
  ];

  container.innerHTML = `
    <div class="filter-bar">
      <input id="char-search" class="search-input" type="search" placeholder="Tìm tên nhân vật, vũ khí, bộ thánh di vật…" value="${esc(CHAR_STATE.query)}" />
    </div>
    <div class="filter-bar">
      <div class="filter-pills" id="elem-pills">
        ${elements.map((el) => `<button class="f-pill ${CHAR_STATE.element === el ? "active" : ""}" data-elem="${el}">${el === "ALL" ? "Tất cả hệ" : el}</button>`).join("")}
      </div>
      <div class="filter-pills" id="quick-pills">
        ${quickFilters.map(([k, label]) => `<button class="f-pill ${CHAR_STATE.quick === k ? "active" : ""}" data-quick="${k}">${label}</button>`).join("")}
      </div>
    </div>
    <div id="char-count" class="subtitle" style="margin-bottom:12px;"></div>
    <div id="char-grid" class="char-grid"></div>
  `;

  const applyFilter = () => {
    const q = CHAR_STATE.query.trim().toLowerCase();
    const list = d.characters.filter((c) => {
      if (CHAR_STATE.element !== "ALL" && c.element !== CHAR_STATE.element) return false;
      if (CHAR_STATE.quick === "LV90" && c.level < 90) return false;
      if (CHAR_STATE.quick === "IT72" && !(c.level >= 70 && (["Hydro", "Electro", "Geo"].includes(c.element) || c.name === "Qiqi"))) return false;
      if (CHAR_STATE.quick === "META72" && !["Mitya", "Valeriy", "Aino", "Chiori", "Neuvillette", "Fischl"].includes(c.name)) return false;
      if (CHAR_STATE.quick === "FIX" && getBuildWarnings(c).length === 0) return false;
      if (q) {
        const hay = `${c.name} ${c.weapon?.name || ""} ${c.artifact_sets || ""}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    document.getElementById("char-count").textContent = `Hiển thị ${list.length} / ${d.characters.length} nhân vật (bấm vào thẻ để xem chi tiết 5 món Thánh Di Vật & dòng phụ)`;
    document.getElementById("char-grid").innerHTML = list
      .map((c) => {
        const warns = getBuildWarnings(c);
        const w = c.weapon || {};
        return `
          <article class="char-card rarity-${c.rarity === 5 ? "5" : "4"}" data-id="${esc(c.id)}">
            <div class="char-top">
              <div>
                <div class="char-name">${esc(c.name)}</div>
                <div class="char-meta">${esc(c.rarity)}★ · Lv.${esc(c.level)} · C${esc(c.constellation)} · Thiên phú ${esc(c.talent_levels)}</div>
              </div>
              <span class="elem-badge elem-${esc(c.element)}">${esc(c.element)}</span>
            </div>
            <div class="char-line">Vũ khí: <strong>${esc(w.name || "-")}</strong> (R${esc(w.refinement || 1)}, Lv.${esc(w.level || 1)})</div>
            <div class="char-line">TDV: <strong>${esc(c.artifact_sets || "Chưa trang bị")}</strong></div>
            <div class="mini-stats">
              <div><span>HP</span><b>${esc(getStat(c, "Giới Hạn HP"))}</b></div>
              <div><span>ATK</span><b>${esc(getStat(c, "Tấn Công"))}</b></div>
              <div><span>EM</span><b>${esc(getStat(c, "Tinh Thông Nguyên Tố"))}</b></div>
              <div><span>CR</span><b>${esc(getStat(c, "Tỷ Lệ Bạo Kích"))}</b></div>
              <div><span>CD</span><b>${esc(getStat(c, "Sát Thương Bạo Kích"))}</b></div>
              <div><span>ER</span><b>${esc(getStat(c, "Hiệu Quả Nạp Nguyên Tố"))}</b></div>
            </div>
            ${warns.length ? `<div>${warns.map((x) => `<span class="warn-tag">${esc(x)}</span>`).join("")}</div>` : ""}
          </article>
        `;
      })
      .join("");

    document.querySelectorAll(".char-card").forEach((el) => {
      el.addEventListener("click", () => openCharModal(el.getAttribute("data-id")));
    });
  };

  document.getElementById("char-search").addEventListener("input", (e) => {
    CHAR_STATE.query = e.target.value;
    applyFilter();
  });
  document.querySelectorAll("#elem-pills .f-pill").forEach((b) => {
    b.addEventListener("click", () => {
      CHAR_STATE.element = b.getAttribute("data-elem");
      document.querySelectorAll("#elem-pills .f-pill").forEach((x) => x.classList.toggle("active", x === b));
      applyFilter();
    });
  });
  document.querySelectorAll("#quick-pills .f-pill").forEach((b) => {
    b.addEventListener("click", () => {
      CHAR_STATE.quick = b.getAttribute("data-quick");
      document.querySelectorAll("#quick-pills .f-pill").forEach((x) => x.classList.toggle("active", x === b));
      applyFilter();
    });
  });

  applyFilter();
}

function openCharModal(id) {
  const c = APP_DATA.characters.find((x) => String(x.id) === String(id));
  if (!c) return;
  const warns = getBuildWarnings(c);
  const w = c.weapon || {};
  const statsRows = Object.entries(c.stats || {})
    .filter(([, v]) => v && v.final && v.final !== "0.0%")
    .map(([k, v]) => `<div class="stat-chip">${esc(k)}<strong>${esc(v.final)}</strong></div>`)
    .join("");

  const artsHtml = (c.artifacts || []).length
    ? c.artifacts
        .map(
          (a) => `
          <div class="artifact-card">
            <div style="font-weight:700;">${esc(a.slot)} · Lv.${esc(a.level)}</div>
            <div style="color:var(--muted); font-size:12px;">${esc(a.set)} — ${esc(a.name)}</div>
            <div class="artifact-main">${esc(a.main_stat?.name)}: ${esc(a.main_stat?.value)}</div>
            ${(a.substats || [])
              .map(
                (s) => `
                <div class="sub-row">
                  <span>${esc(s.name)}</span>
                  <span>${esc(s.value)}${s.rolls > 0 ? `<span class="roll-badge">+${esc(s.rolls)}</span>` : ""}</span>
                </div>`
              )
              .join("")}
          </div>`
        )
        .join("")
    : `<p class="subtitle">Chưa trang bị Thánh Di Vật.</p>`;

  document.getElementById("modal-body").innerHTML = `
    <div style="display:flex; flex-wrap:wrap; align-items:center; gap:10px; margin-bottom:10px;">
      <h2 style="margin:0;">${esc(c.name)}</h2>
      <span class="elem-badge elem-${esc(c.element)}">${esc(c.element)}</span>
      <span class="pill pill-gold">${esc(c.rarity)}★ · Lv.${esc(c.level)} · C${esc(c.constellation)}</span>
      <span class="pill">Yêu thích: ${esc(c.friendship)}</span>
    </div>
    ${warns.length ? `<div class="callout callout-warn"><strong>Gợi ý chỉnh build:</strong> ${warns.map(esc).join(" · ")}</div>` : ""}
    <p class="subtitle"><strong>Vũ khí:</strong> ${esc(w.name || "-")} (R${esc(w.refinement || 1)}, Lv.${esc(w.level || 1)}, Base ATK ${esc(w.base_atk || "-")}${w.substat_name ? `, ${esc(w.substat_name)} ${esc(w.substat_val)}` : ""})</p>
    <p class="subtitle"><strong>Thiên phú:</strong> ${(c.talents || []).map(esc).join(" · ")}</p>

    <h3 style="margin:16px 0 8px; color:var(--gold); font-size:15px;">Chỉ số chi tiết</h3>
    <div class="chip-grid">${statsRows}</div>

    <h3 style="margin:16px 0 6px; color:var(--gold); font-size:15px;">Thánh Di Vật (${esc(c.artifact_sets || "0 món")})</h3>
    <div class="artifact-grid">${artsHtml}</div>
  `;

  const modal = document.getElementById("char-modal");
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeCharModal() {
  const modal = document.getElementById("char-modal");
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

function renderEndgameTab(d) {
  const ab = (d.spiral_abyss && d.spiral_abyss[0]) || {};
  const stg = d.stygian_onslaught || {};
  const itElig = d.characters.filter(
    (c) => c.level >= 70 && (["Hydro", "Electro", "Geo"].includes(c.element) || c.name === "Qiqi")
  );

  const floorsHtml = (ab.floors || [])
    .map(
      (fl) => `
      <div class="card" style="margin-bottom:12px;">
        <h3 style="margin:0 0 10px; color:var(--gold);">Tầng ${esc(fl.floor)} (${esc(fl.stars)}★)</h3>
        <table class="clean-table">
          <thead><tr><th>Phòng</th><th>Sao</th><th>Nửa 1</th><th>Nửa 2</th></tr></thead>
          <tbody>
            ${(fl.chambers || [])
              .map((ch) => {
                const h1 = ch.battles?.[0]?.team?.map((t) => t.name).join(", ") || "-";
                const h2 = ch.battles?.[1]?.team?.map((t) => t.name).join(", ") || "-";
                return `<tr><td>Phòng ${esc(ch.chamber)}</td><td>${esc(ch.stars)}★</td><td>${esc(h1)}</td><td>${esc(h2)}</td></tr>`;
              })
              .join("")}
          </tbody>
        </table>
      </div>`
    )
    .join("");

  const bossesHtml = (stg.bosses || [])
    .map(
      (b) => `
      <div class="card">
        <div class="kpi-label">${esc(b.name)}</div>
        <div class="kpi-value">${esc(b.time_sec)}s</div>
        <div class="kpi-sub">Một kích mạnh nhất: <strong>${esc(b.max_single_hit)}</strong> · Tổng ST: <strong>${esc(b.total_damage)}</strong></div>
        <div class="char-line" style="margin-top:8px;">Đội hình: <strong>${esc((b.team || []).join(", "))}</strong></div>
      </div>`
    )
    .join("");

  document.getElementById("tab-endgame").innerHTML = `
    <h2 class="section-title">La Hoàn Thâm Cảnh (Kỳ 16.11 – 16.12.2026)</h2>
    <div class="grid grid-4" style="margin-bottom:14px;">
      <div class="card"><div class="kpi-label">Sâu nhất</div><div class="kpi-value">${esc(ab.max_floor || "-")}</div><div class="kpi-sub">${esc(ab.total_star || 0)}/36 sao</div></div>
      <div class="card"><div class="kpi-label">Khiêu chiến / Thắng</div><div class="kpi-value">${esc(ab.total_battle_times || 0)} / ${esc(ab.total_win_times || 0)}</div><div class="kpi-sub">Một kích mạnh nhất: ${esc(ab.strongest_strike?.[0]?.name || "-")} (${esc(ab.strongest_strike?.[0]?.value || 0)})</div></div>
      <div class="card"><div class="kpi-label">Đánh bại nhiều nhất</div><div class="kpi-value">${esc(ab.most_defeats?.[0]?.name || "-")}</div><div class="kpi-sub">${esc(ab.most_defeats?.[0]?.value || 0)} lần</div></div>
      <div class="card"><div class="kpi-label">Nộ / Kỹ năng</div><div class="kpi-value">${esc(ab.burst_rank?.[0]?.value || 0)} / ${esc(ab.skill_rank?.[0]?.value || 0)}</div><div class="kpi-sub">${esc(ab.burst_rank?.[0]?.name || "-")} · ${esc(ab.skill_rank?.[0]?.name || "-")}</div></div>
    </div>
    ${floorsHtml}

    <h2 class="section-title">Ảo Cảnh Hiểm Ác (${esc(stg.cycle || "-")})</h2>
    <div class="callout">
      <strong>Độ khó ${esc(stg.difficulty || "-")} · ${esc(stg.mode || "Single Player")} · Thành tích cao nhất: ${esc(stg.best_time_sec || "-")} Giây.</strong>
      <div class="subtitle">Cửa sổ 10 ngày đầu <em>Disturbance Outbreak</em>: 120 Nhựa = +1 mảnh 5★ thưởng &amp; tích điểm Dire Prestige (1,200 điểm nhận Dust of Enlightenment).</div>
    </div>
    <div class="grid grid-3">${bossesHtml}</div>

    <h2 class="section-title">Nhà Hát Giả Tưởng (01.11 – 01.12.2026 · Thủy / Lôi / Nham)</h2>
    <div class="card">
      <p style="margin-top:0;">Tài khoản hiện có <strong>${itElig.length} nhân vật Lv.70+</strong> hợp lệ (cộng 3 Trial mở màn chưa nâng: <strong>Flins, Aino, Kachina</strong> + 1 mượn bạn bè = <strong>${itElig.length + 4} slot</strong>, đủ đi cả Chế Độ Khó &amp; Visionary).</p>
      <div class="chip-grid">
        ${itElig.map((c) => `<div class="stat-chip">${esc(c.name)}<strong>Lv.${esc(c.level)} C${esc(c.constellation)}</strong></div>`).join("")}
      </div>
      <ul class="clean-list" style="margin-top:14px;">
        <li><strong>Màn 3 (Jadeplume Terrorshroom):</strong> Dùng Lôi kích nhanh — <code>Keqing + Fischl + Xingqiu + Zhongli/Barbara</code></li>
        <li><strong>Màn 6 (Whisperer of Nightmares):</strong> Phá khiên bằng phản ứng dày — <code>Ayato + Yae Miko + Yelan/Xingqiu + Kuki</code></li>
        <li><strong>Màn 8 (Battle-Hardened Samachurl — cần Thủy + Nham):</strong> Giữ <code>Navia + Zhongli/Chiori/Ningguang + Yelan/Xingqiu</code></li>
        <li><strong>Màn 10 (Radiant Moonfly — cần Healer mạnh):</strong> Giữ <code>Neuvillette + Raiden C1 + Kokomi (hoặc Qiqi C4/Noelle C6) + Fischl/Yelan</code></li>
        <li><strong>Mượn bạn bè ưu tiên:</strong> <code>Furina</code> hoặc <code>Xilonen</code></li>
      </ul>
    </div>
  `;
}

function renderPlannerTab() {
  document.getElementById("tab-planner").innerHTML = `
    <div class="callout">
      <strong>Lưu ý vùng bản đồ:</strong> Snezhnaya hiện đang ở <code>0%</code> (mới chạm 2.9% Lãnh Nguyên Volkodlak), nên tạm gác <strong>Mitya</strong> &amp; <strong>Valeriy</strong> tới khi qua Snezhnaya. Các mục ưu tiên dưới đây đều farm được ngay ở <strong>Fontaine (64%), Inazuma (100%), Vực Đá Sâu (100%) và Nod-Krai (7%)</strong>.
    </div>

    <h2 class="section-title">1. Sửa nhanh đội hình hiện tại (ưu tiên tuần 1)</h2>
    <div class="grid grid-2">
      <div class="card">
        <h3 style="margin:0 0 8px; font-size:15px; color:var(--gold);">Chỉnh đồ ngay (0 tốn Nhựa)</h3>
        <ul class="clean-list">
          <li><strong>Neuvillette:</strong> Đổi Nón HP% → <strong>Nón CR%</strong> (đang 26.0% CR).</li>
          <li><strong>Navia:</strong> Đổi Cát HP% → <strong>Cát ATK%</strong>, Nón → <strong>CR%</strong> (đang 29.1% CR).</li>
          <li><strong>Chiori:</strong> Đổi Cát ATK% → <strong>Cát DEF%</strong>, nâng Ly Nham lên +20.</li>
          <li><strong>Kuki Shinobu:</strong> Đổi sang <strong>3 món EM</strong> (đang 318 EM).</li>
          <li><strong>Fischl:</strong> Đổi sang <code>Tuyệt Huyền</code> + Nón CR% (đang 31.8% CR).</li>
          <li><strong>Nhà Hát 7.2:</strong> Lắp lại đồ tạm cho <code>Ningguang, Beidou, Noelle, Gorou</code>.</li>
        </ul>
      </div>
      <div class="card">
        <h3 style="margin:0 0 8px; font-size:15px; color:var(--gold);">Danh sách Meta 7.2 cần build</h3>
        <ul class="clean-list">
          <li><strong>Đã có (farm được ngay):</strong> <code>Aino</code> (Nod-Krai, 4pc Silken Moon's Serenade, 190–250% ER), <code>Chiori</code> (E 1 → 8–9), <code>Neuvillette</code> (4pc Thợ Săn Marechaussee), <code>Fischl</code> (4pc Đoàn Kịch Hoàng Kim), <code>Kuki</code> (Lv.90 full EM).</li>
          <li><strong>Đã có (chờ mở Snezhnaya):</strong> <code>Mitya</code> + trấn <code>Sắc Lệnh Tinh Tú</code> (Tier 0 Stellar-Conduct), <code>Valeriy C1</code> (Khiên + Buffer cho Mitya).</li>
          <li><strong>Chưa có (ưu tiên roll bổ sung):</strong> <code>Furina</code>, <code>Xilonen</code>, <code>Odette</code> (hợp khung Mitya+Valeriy), <code>Columbina</code>.</li>
        </ul>
      </div>
    </div>

    <h2 class="section-title">2. Lịch Farm Theo Ngày (Vùng đã mở)</h2>
    <div class="card">
      <table class="clean-table">
        <thead><tr><th>Ngày</th><th>Ưu tiên Nhựa (180–200 Resin/ngày)</th><th>Việc không tốn Nhựa</th></tr></thead>
        <tbody>
          <tr><td><strong>Thứ 2</strong></td><td>3 lần Boss Tuần: <em>All-Devouring Narwhal</em> (Chiori) + Khiêu Chiến Nhanh <em>Silken Feather</em> (Aino) · Sách cho Aino / Hoa Địa Mạch</td><td>Nhặt <em>Cỏ Naku</em>, <em>Hoa Lumidouce</em>, <em>Portable Bearing</em></td></tr>
          <tr><td><strong>Thứ 3</strong></td><td>Boss Thế Giới: <em>Knuckle Duckle</em> (tây nam Xưởng Clink-Clank, Nod-Krai — Aino) · <em>Mãng Xà Di Tích</em> (Kuki) · <em>Hải Mã Ngàn Năm</em> (Chevreuse)</td><td>Dọn quái thường (Drive Shafts, Bóng Ma)</td></tr>
          <tr><td><strong>Thứ 4</strong></td><td>Sách <strong>Ánh Sáng</strong> (Inazuma — E Chiori) · Vũ khí <code>Vua Biển</code> (Fontaine — Navia) &amp; <code>Đại Kiếm Tây Phong</code> (Mondstadt — Aino)</td><td>Ép Tráp Thánh sang <em>Giấc Mộng Hoàng Kim</em> / <em>Ký Ức Rừng Sâu</em></td></tr>
          <tr><td><strong>Thứ 5</strong></td><td>Full Bí cảnh <strong>Thợ Săn Marechaussee / Đoàn Kịch Hoàng Kim</strong> (Fontaine — Neuvillette &amp; Fischl)</td><td>Nhặt lại đặc sản (hồi 48h)</td></tr>
          <tr><td><strong>Thứ 6</strong></td><td>Nếu <strong>Ảo Cảnh Hiểm Ác</strong> còn cửa sổ 10 ngày đầu: xả toàn bộ Nhựa TDV vào đây (120 Nhựa = +1 mảnh 5★ + Dire Prestige). Nếu đóng: Boss Thế Giới + TDV Fontaine</td><td>Chốt đội hình leo La Hoàn 11-3 &amp; 12, Nhà Hát</td></tr>
          <tr><td><strong>Thứ 7</strong></td><td>Chốt nốt Sách <strong>Ánh Sáng</strong> (Chiori) + Vũ khí (<code>Vua Biển</code> Lv.90, <code>Đại Kiếm Tây Phong</code>)</td><td>Kiểm tra lại chỉ số CR/CD &amp; ER các đội</td></tr>
          <tr><td><strong>Chủ Nhật</strong></td><td>Bù nguyên liệu sách/vũ khí còn thiếu; dư Nhựa chạy TDV Thợ Săn / Đoàn Kịch</td><td>Kiểm tra tiến độ mở đường sang Snezhnaya cho Mitya &amp; Valeriy</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

function setupTabs() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab");
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.toggle("active", b === btn));
      document.querySelectorAll(".tab-panel").forEach((p) => p.classList.toggle("active", p.id === `tab-${target}`));
    });
  });
}

async function init() {
  setupTabs();
  document.getElementById("modal-close").addEventListener("click", closeCharModal);
  document.getElementById("modal-backdrop").addEventListener("click", closeCharModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCharModal();
  });

  try {
    const res = await fetch(DATA_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    APP_DATA = await res.json();
    document.getElementById("player-title").innerHTML = `${esc(APP_DATA.account.nickname)} <span class="uid-tag">UID ${esc(APP_DATA.account.uid)}</span>`;
    document.getElementById("ar-pill").textContent = `AR ${esc(APP_DATA.account.adventure_rank)}`;
    document.getElementById("crawl-meta").textContent = `Cập nhật từ HoYoLAB Battle Chronicle · ${esc(APP_DATA.crawled_at)} · ${esc(APP_DATA.characters_count)} nhân vật`;

    renderOverview(APP_DATA);
    renderCharactersTab(APP_DATA);
    renderEndgameTab(APP_DATA);
    renderPlannerTab();
  } catch (err) {
    document.getElementById("crawl-meta").textContent = `Không tải được dữ liệu JSON: ${err.message}`;
  }
}

init();
