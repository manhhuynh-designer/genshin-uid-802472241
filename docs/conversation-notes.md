# Ghi chú Tư vấn & Kế hoạch Tài khoản Genshin (`UID 802472241`)

Tổng hợp toàn bộ phân tích từ dữ liệu HoYoLAB Battle Chronicle crawl cập nhật ngày **25/11/2026** (Version **7.2**, **73 nhân vật**).

---

## 0. Các việc đã hoàn thành sau đợt Crawl 25/11/2026

- **Nhân vật mới & Lịch sử roll (`128` lượt trong `data/wish_history/`, `30/10 – 23/11`):**
  - **`Furina`** (5★ Thủy, về ở **pity 63** lúc `2026-11-23 21:16:05`): `Lv.80 C0 · 4/8/8`, **✓ Đã sở hữu & gắn `Ống Đồng Fleuve Cendre Lv.50 R2`**, đổi Cát HP% +20 (`35,626 HP · 41.6% CR / 180.6% CD · 135.6% ER · 4pc Thiên Nham`, `Bàn Nham Kết Lục` đã trả về túi đồ).
  - **`Người Mẫu Nữ`** (Băng, nhân vật thứ **73**): `Lv.20 C0 · 1/1/1`.
  - Tổng kết roll: Nhân Vật (`301`): `105` roll (`Mitya` @42, `Furina` @63, pity 5★: **0**, pity 4★: `2`); Vũ Khí (`302`): `16` roll (`Sắc Lệnh Tinh Tú` @15, pity 5★: `1`, pity 4★: `4`); Thường (`200`): `7` roll (pity 5★: `7`, pity 4★: `2`).
- **Cập nhật nhân vật & trang bị ngày 25/11:**
  - `Mitya`: nâng **`Lv.60 → Lv.70`**, thiên phú **`1/1/1 → 2/3/4`**, Trấn **`Lv.20 → Lv.50`** (`67.2% CR / 188.5% CD · 516 EM · 2pc Đoàn Hát`), Ly EM vẫn `+0`.
  - `Aino`: nâng **`Lv.70 → Lv.80 C1`** (`1/5/4 · 464 EM · 191.6% ER`).
  - `Layla` & `Chevreuse`: tráo mảnh TDV với Furina (`Layla` `34,931 HP · 123.3% ER`; `Chevreuse` nhận Cát ER `+0` còn `21,612 HP`).
  - `Yae Miko`: **✓ Đã hoàn thành quest Chỉ Dụ Của Ma Nữ** (mở khóa thiên phú `Edict of Cleansing`: trụ 24s, Q không phá trụ, `+80%/200% ATK` Tinh-Siêu Dẫn).
  - `Raiden Shogun`: đã đổi sang **Nón CR%** (`69.9% CR / 132.4% CD · 258.9% ER`).
  - `Keqing`: vẫn đang tạm cầm `Kiếm Bến Tàu Lv.60 R1` (`26.0% CR / 231.4% CD · 1,434 ATK`).
- **Thành tích & Bản đồ mới:**
  - **Ảo Cảnh Hiểm Ác (Độ khó III):** Kỷ lục **`191s`** (*Kẻ Neo Sóng* `56s` — Raiden/Furina/Yae/Yelan, *Hoàng Đế Thép Lửa* `34s` — Neuvillette/Kazuha/Zhongli/Furina, *Thằn Lằn* `101s` — Neuvillette/Raiden/Navia/Diona).
  - **Snezhnaya & Bản đồ (`25/11`):** Snezhnaya **`6% → 7%`** (`10` Băng Thần Đồng), Nod-Krai **`9% → 10%`** (`30` Nguyệt Thần Đồng), Thủy Thần Đồng **`163 → 164`**, Natlan **`4%`** (`22` Hỏa Thần Đồng), Điểm dịch chuyển **`524 → 529`**, Bí cảnh **`64 → 65`**, Ngày hoạt động **`1,312`**, Thành tựu `1,131`.
  - **Nhà Hát Giả Tưởng (`01.11 – 01.12`):** Màn **3** (Độ khó **3**, hiện có **28** nhân vật Lv.70+ đủ hệ nhờ Mitya lên Lv.70).
- **Đã hoàn thành trước đó (`21–23/11`):**
  - `Navia` chốt **`Kiếm Li Cốt R1` + `6/10/9` (Vương miện E)** (`80.0/180.1`), `Neuvillette` chuyển tạm **`4pc Trái Tim Trầm Luân` + `Ly Thủy`** (`52.8/234.9`), `Valeriy` C3, `Aino` `Đại Kiếm Tây Phong Lv.90`, `Ayato` (`62.5/152.1`), `Xiangling` (`Lao Xiên Cá R5`), `Nahida` (`4pc Rừng Sâu 1,012 EM`), `Noelle` (`Kiếm Bạch Ảnh`), `Ningguang` (`Quyển Thiên Không R2`), `Yelan` (`Tây Phong R5`), `Fischl` (`Tuyệt Huyền R5`), `Kuki` (`Thiết Phong Kích R3`), `Chevreuse` (`Hắc Anh Thương R5`), `Jean` (`Tây Phong Kiếm R5`), `Chiori` (`Cát DEF%`), `Alyosha` mới.

---

## 1. Các việc cần chỉnh tiếp (Ưu tiên hiện tại)

1. **Vòng Xoay Kiếm Đơn Tối Ưu (`Furina · Keqing · Bennett · Nilou · Jean · Layla/Lynette`)**
   - **`Furina` (Lv.80 C0, `35,626 HP`, `41.6/180.6 · 135.6% ER`) ← `Răng Nanh Rỉ Sét Lv.90 R5` (từ `Bennett`):** Mạnh hơn Ống Đồng R5 ~6–10% DPS (`+32% ST E`, `+12% CR E`, lên ngay `151.7% ER` với Cát HP% hoặc `~203.5%` nếu kèm Cát ER), kéo `Lv.80 → 90`, Q `8 → 10`, farm **`4pc Đoàn Kịch Hoàng Kim`** chung bí cảnh Neuvillette.
   - **`Keqing` (Lv.90 C1) ← `Bàn Nham Kết Lục Lv.90 R1` (đã rảnh trong túi đồ):** Lắp lại ngay để CR nhảy **`26.0% → 70.1% / 231.4% CD`**.
   - **`Bennett` (Lv.90 C6) ← `Kiếm Gỗ Lv.90 R2` (từ `Nilou`):** Base ATK `510 → 565` buff Nộ to hơn, ER vẫn dư **`249.3%`**.
   - **`Nilou` (Lv.90 C0) ← `Kiếm Bến Tàu Lv.60 → 90 R1` (từ `Keqing`):** Lấy dòng phụ **`41.3% HP`** & đổi sang **`2pc+2pc HP%`** (kéo từ `51.5k → 68k+ HP`).
   - **`Ống Đồng Fleuve Cendre` (đã có):**
     - **Phương án A (khuyên dùng):** Chuyển sang **`Jean` (Lv.80 C2)** *(ăn hạt Phong đúng 5s `+32% ER` + CR E)* → dư **`Tây Phong Kiếm Lv.80 R5`** cho **`Layla` (`34,931 HP`)** thay `Narzissenkreuz` (hoặc `Qiqi C4 Ma Nữ`).
     - **Phương án B:** Gắn thẳng cho **`Lynette` (Lv.80 C2)** thay kiếm 1★, hoặc giữ dự phòng cho Furina khi thiếu Nạp.
2. **Neuvillette (Lv.90 C0, 10/10/10, Nghi Thức Dòng Chảy Vĩnh Hằng R1)**
   - *Hiện trạng:* `35,466 HP`, `52.8% CR / 234.9% CD` trên **`4pc Trái Tim Trầm Luân`** (vừa ghép Furina clear Boss 2 Ảo Cảnh trong **34s**).
   - *Khắc phục:* Farm tiếp **`4pc Thợ Săn Marechaussee`** (Fontaine) — giữ nguyên nền CR hiện tại sẽ nhảy lên **`~88.8% CR / 234.9% CD`**.
3. **Beidou (Lv.80 C6) & Gorou (Lv.70 C5) & Ningguang (Lv.89 C6)**
   - `Beidou`: Vẫn cầm **kiếm 1★ Lv.1** và mới 3 món TDV (`111% ER`) → gắn `Vua Biển R5` (từ Xinyan) hoặc `Kiếm Vô Công 5★` (từ Chongyun kèm **Cát ER** / `4pc Dấu Ấn`).
   - `Gorou`: Vẫn cầm **cung 1★ Lv.1** & thiếu Ly → lắp tạm cung Nạp để đủ slot Nhà Hát 7.2 trước `01/12`.
   - `Ningguang`: Đã có `Quyển Thiên Không R2` (`2,501 ATK`) nhưng Ly Nham đang `+0` và CR mới **`14.7%`** → nâng Ly `+20` và đổi sang **Nón CR%**.
4. **Raiden Shogun (Lv.90 C1, 6/9/10, Đoạn Thảo Trường Đao R1)**
   - *Hiện trạng:* ✓ Đã đổi Nón CR% lên **`69.9% CR / 132.4% CD · 258.9% ER`**, clear Boss 1 Ảo Cảnh trong **56s** cùng Furina.
   - *Tối ưu thêm:* Chuyển `Kiếm Gỗ` (Base ATK 565) từ Nilou cho Bennett theo vòng xoay kiếm ở mục 1.
5. **Chevreuse (Lv.70 C1) & Kuki Shinobu (Lv.80 C4) & Fischl (Lv.80 C6) & Yelan (Lv.90 C0)**
   - `Chevreuse`: HP tụt còn `21,612` do nhường Cát HP% cho Furina (đang đeo Cát ER `+0`, Ly Hỏa & Nón CR) → đổi **3 món HP%** + nâng Lv.80 để chạm **`40,000 HP`**.
   - `Kuki Shinobu`: EM mới `483` (còn đeo Cát ATK / Ly HP / Nón CR) → đổi **3 món EM** + nâng **Lv.90** (`~900+ EM`).
   - `Fischl`: Đang `31.8% CR / 137.1% CD` → đổi sang **Nón CR%** + farm dần **4pc Đoàn Kịch Hoàng Kim**.
   - `Yelan`: Nâng **`Cung Tây Phong Lv.70 → Lv.90`** để đẩy ER lên ~`202%`.
6. **Chiori (Lv.80 C0), Aino (Lv.80 C1), Jean (Lv.80 C2), Venti (Lv.80 C0)**
   - `Chiori`: Đã có Cát DEF% (`2,163 DEF`) → nâng E từ `1` → `8–9`, nâng Ly Nham `+14 → +20`.
   - `Aino`: ✓ Đã lên **Lv.80 C1** (`1/5/4 · 464 EM`) → nâng thiên phú `1/5/4 → 1/6/8`, farm dần **4pc Khúc Ca Trăng Lụa** (Nod-Krai 10%).
   - `Jean`: Đã có `215.4% ER` → nâng Ly ATK% (`+0 → +20`), ép dần **4pc Bóng Hình**, và cân nhắc nhận **Ống Đồng** (PA A) để dư Tây Phong R5 cho Layla.
   - `Venti`: 4/5 món TDV trên HoYoLAB đang `+0` → nâng lên `+20`.
7. **Yae Miko (Lv.90 C0, 6/10/10, Chân Ý Của Kagura R1 — ✓ Đã mở Ma Nữ / *Witch's Revelation*)**
   - *Hiện trạng:* **✓ Đã hoàn thành quest Chỉ Dụ Của Ma Nữ** (`Edict of Cleansing`: trụ `14s → 24s`, Nộ không phá trụ, `+80% ATK` Siêu Dẫn/Tinh-Siêu Dẫn, `+200% ATK` CRIT trong *Polestar Field*). Chỉ số hiện tại: `2,238 ATK`, `51.0% CR / 252.2% CD`, `189 EM`, `111.7% ER` (`2pc Giác Đấu + 2pc Hồi Ức + 1pc Sao Băng`), Nón đang đeo STBK `62.2%`. (CM dự phòng nếu roll thêm: C1 `+50%` DMG Lôi/Tinh-Siêu Dẫn toàn đội `10s`; C2 `+60/90/120/200 EM`; C4 hồi `8` Năng lượng/`5s` & `+100%` Nộ; C6 `+200% CRIT DMG` Tinh-Siêu Dẫn.)
   - *Khắc phục:* Đổi **Nón STBK → Nón CR%** (`51/252 → ~75/204`, `+10.8%` DPS trung bình) để ổn định bạo kích đòn `200% ATK`; khi ghép đội Tinh-Siêu Dẫn với Mitya, farm chung **`4pc Ảo Tưởng Vụn Vỡ`** (*Thorny Crown — Mondstadt*, `+ATK%`, `+ST Tinh-Siêu Dẫn`, `+16% CR`) và cân nhắc **Ly ATK%** (vì ST Tinh-Siêu Dẫn không ăn `%ST Lôi` hay `4pc Đoàn Kịch`).

---

## 2. Tư vấn La Hoàn & Nhà Hát (`11/2026 – 12/2026`)

- **La Hoàn (`16.11 – 16.12`, đang `11-3`, `25/36★`):**
  - *Nửa 1 (+75% Lunar-Crystallize):* `✓ Navia (Li Cốt 80/180) + Zhongli + Chiori + Xianyun/Bennett`
  - *Nửa 2 (+200 EM):* `✓ Neuvillette + Furina + Kazuha + Zhongli` (vừa clear Ảo Cảnh 34s) hoặc `✓ Raiden National` (`69.9/132.4` vừa clear Boss 1 56s).
- **Nhà Hát (`01.11 – 01.12`, Thủy · Lôi · Nham — đã đi tới Màn 3, Độ khó 3 · `28+3` nhân vật):**
  - `Furina` Lv.80 & `Aino` Lv.80 C1 vừa bổ sung thêm lực lượng Thủy cùng `Navia`, `Ayato`, `Noelle`, và `Mitya` vừa lên Lv.70 nâng tổng slot lên **28**; cần lắp gấp đồ cho `Beidou`, `Gorou` và nâng Ly/Nón CR% cho `Ningguang` trước **01/12**. (`Yae` ✓ đã mở Ma Nữ giữ trụ 24s không mất khi Nộ đi Màn 6 rất mượt.)

---

## 3. Danh sách Nhân vật Meta 7.2 tại Snezhnaya (`Đã mở 7%`)

1. **Mitya (✓ đã lên Lv.70 C0 · `2/3/4`, trấn `Sắc Lệnh Tinh Tú` Lv.50 R1, `516 EM`):** Lõi Tinh-Siêu Dẫn đi cặp **Yae Miko (Ma Nữ)** + **Rosaria C6 / Nhà Lữ Hành Băng** (sau nâng lên **Odette**) + **Valeriy C3** — nâng nốt Ly EM `+0 → +20`, kéo Trấn & Mitya lên Lv.90 + farm chung **`4pc Ảo Tưởng Vụn Vỡ`** cho cả Mitya & Yae.
2. **Valeriy (Lv.1 C3):** Khiên chống gián đoạn (giữ nhịp Trọng Kích Mitya) + Buffer cho lõi **Mitya + Yae (Ma Nữ)** — rèn `Nhạc Khúc Biển Sâu` (ATK%) + farm sách *Charity* (ưu tiên hơn Alyosha vì trùng slot hỗ trợ).
3. **Alyosha (Lv.1 C0):** 4★ Thương Lôi off-field Healer + Buff ATK (cạnh tranh trực tiếp slot của Valeriy; dùng thay Valeriy khi đội hình cần hồi máu — buff ATK của Alyosha scale rất hợp đòn `+80%/200% ATK` của Yae Ma Nữ).
4. **Aino (✓ đã lên Lv.80 C1 · `1/5/4 · 464 EM`):** Đã hoàn thành Lv.80 + `Đại Kiếm Tây Phong Lv.90`, tiếp tục kéo thiên phú `1/5/4 → 1/6/8` & farm `4pc Khúc Ca` (Nod-Krai `10%`).

---

## 4. Bảng So Sánh Sức Mạnh Dự Tính Các Đội Hình (25/11/2026)

*Ước lượng trên chuẩn vòng xoay 20s tại La Hoàn Tầng 12 (`k DPS`), đối chiếu theo chỉ số crawl 25/11, nâng cấp Ma Nữ của Yae Miko (`Edict of Cleansing`), vòng xoay Kiếm Đơn và kỷ lục Ảo Cảnh 191s (`Neuvillette + Furina` 34s, `Raiden + Furina` 56s).*

| Đội hình | Vai trò | Hiện tại (Tier) | Dự tính (Tier) | Tăng | Đòn bẩy nâng cấp chính |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Mitya + Yae Tinh-Siêu Dẫn** (`Mitya · Yae · Rosaria · Valeriy`) | Meta 7.2 · Tinh-Siêu Dẫn | ~42k (`B`) | **~98k** (`S+`) | +133% | Mitya Lv.70→90 + Trấn 50→90 + Ly EM +20 · Yae (✓ Ma Nữ) đổi Nón CR% + 4pc Ảo Tưởng · Valeriy C3 Lv.80 (đổi Rosaria → Odette vượt 100k+) |
| **Neuvillette + Furina Hyper** (`Neuvillette · Furina · Kazuha · Zhongli`) | AOE · Đơn | **~64k** (`A+`) | **~92k** (`S+`) | +44% | Neuv 4pc Thợ Săn + Furina Lv.90 Q10 / Răng Nanh R5 / 4pc Đoàn Kịch (chung 1 bí cảnh Fontaine) |
| **Raiden + Furina Hyper** (`Raiden · Furina · Yae · Yelan`) | Đơn mục tiêu | ~62k (`A+`) | ~81k (`S`) | +31% | Furina Lv.90 Q10 + Răng Nanh R5/4pc Đoàn Kịch · Yae (✓ Ma Nữ) đổi Nón CR% · Yelan Tây Phong 90 |
| **Navia 2 Nham** (`Navia · Chiori · Bennett · Xiangling`) | Phá khiên · Đơn | ~58k (`A+`) | ~76k (`S`) | +31% | Nâng E Chiori 1→9 + Ly Nham +20 + tìm STBK (hiện 71%) · Bennett đổi Kiếm Gỗ |
| **Hu Tao Bốc Hơi** (`Hu Tao · Yelan · Xingqiu · Zhongli`) | Đơn mục tiêu | ~59k (`A+`) | ~72k (`S`) | +22% | Yelan Tây Phong 70→90 · Kéo nhẹ CR Hu Tao (54%→70%+) · Thử ghép Furina + Xianyun |
| **Nilou Sum Suê** (`Nilou · Nahida · Kokomi · Collei`) | Vua AOE (2+ quái) | ~56k (`A+`) | ~70k (`S`) | +25% | Chuyển Kiếm Gỗ → Bennett & nhận Kiếm Bến Tàu Lv.90 · Đổi Nilou sang 2pc+2pc HP% (51.5k → 68k+ HP) |
| **Keqing Tăng Cường** (`Keqing · Nahida · Yae · Kazuha`) | Đơn · AOE nhanh | ~45k (`B`) | ~68k (`A+`) | +51% | Trả Bàn Nham từ túi đồ về Keqing (CR 26% → 70%) · Yae (✓ Ma Nữ) đổi Nón CR% |
| **Raiden National** (`Raiden · Bennett · Xiangling · Yelan`) | Đơn mục tiêu | ~61k (`A+`) | ~68k (`A+`) | +11% | Bennett đổi Kiếm Gỗ (565 Base ATK) · Yelan Tây Phong 90 · Tối ưu nhẹ Crit Xiangling |
| **Ayaka Đóng Băng** (`Ayaka · Mona · Kazuha · Kokomi`) | AOE Đóng Băng | ~54k (`A`) | ~67k (`A+`) | +24% | Thử ghép Furina + Kokomi/Charlotte hoặc Rosaria C6 + Kokomi Thiên Nham · Amenoma R5 |
| **Yoimiya Đánh Thường** (`Yoimiya · Yelan · Yun Jin · Zhongli`) | Boss bay · Đơn | ~55k (`A`) | ~62k (`A`) | +13% | Yelan Tây Phong 70→90 · Bổ sung ~100 EM cho Yoimiya để tối ưu Bốc Hơi |
| **Ganyu Tan Chảy** (`Ganyu · Bennett · Xiangling · Zhongli`) | Đơn · Nuke | ~52k (`A`) | ~60k (`A`) | +15% | Đổi Cát EM (~220+ EM) cho Ganyu · Bennett đổi Kiếm Gỗ tăng buff ATK |
| **Eula Vật Lý** (`Eula · Raiden · Rosaria · Zhongli`) | Nuke Vật Lý | ~48k (`B+`) | ~56k (`A`) | +17% | Đẩy CR Eula (51.7%→70%+) giảm hụt Nộ · Hoặc thay Raiden bằng Yae (Ma Nữ) ăn +80% ATK Siêu Dẫn |
