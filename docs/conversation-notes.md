# Ghi chú Tư vấn & Kế hoạch Tài khoản Genshin (`UID 802472241`)

Tổng hợp toàn bộ phân tích từ dữ liệu HoYoLAB Battle Chronicle crawl cập nhật ngày **24/11/2026** (Version **7.2**, **73 nhân vật**).

---

## 0. Các việc đã hoàn thành sau đợt Crawl 24/11/2026

- **Nhân vật mới & Lịch sử roll (`128` lượt trong `data/wish_history/`, `30/10 – 23/11`):**
  - **`Furina`** (5★ Thủy, về ở **pity 63** lúc `2026-11-23 21:16:05`): đã nâng **`Lv.80 C0 · 4/8/8`**, đang mượn `Bàn Nham Kết Lục Lv.90 R1` (`93.1% CR / 158.8% CD · 29,981 HP · 125.9% ER · 4pc Thiên Nham`, Cát ER `+0`).
  - **`Người Mẫu Nữ`** (Băng, nhân vật thứ **73**): `Lv.20 C0 · 1/1/1`.
  - Tổng kết roll: Nhân Vật (`301`): `105` roll (`Mitya` @42, `Furina` @63, pity 5★: **0**, pity 4★: `2`); Vũ Khí (`302`): `16` roll (`Sắc Lệnh Tinh Tú` @15, pity 5★: `1`, pity 4★: `4`); Thường (`200`): `7` roll (pity 5★: `7`, pity 4★: `2`).
- **Cập nhật nhân vật & trang bị ngày 24/11:**
  - `Raiden Shogun`: đã đổi sang **Nón CR%** (`69.9% CR / 132.4% CD · 258.9% ER`).
  - `Keqing`: đang tạm cầm `Kiếm Bến Tàu Lv.60 R1` (`26.0% CR / 231.4% CD · 1,434 ATK`) do Furina mượn `Bàn Nham Kết Lục`.
  - `Mitya`: nâng **`Lv.20 → Lv.60`** (`64.5% CR / 195.5% CD · 356 EM`, 4 món +20 & Ly EM +0).
  - `Aino`: nâng **`Lv.60 → Lv.70 C1`** (thiên phú `1/3/4 → 1/5/4`), đủ cấp vào Nhà Hát.
  - `Nhà Lữ Hành (Cryo)`: mở khóa **`C3`**, Nộ lên Lv.4 (**`1/1/4`**), nâng `Thanh Kiếm Exaiphanes` lên **`Lv.60 R2`** (`74.5% CR`).
  - `Kujou Sara`: đổi Nón STBK (`39.2% CR / 158.8% CD · 136.2% ER`); `Lynette`: chuyển `Kiếm Bến Tàu` sang Keqing.
- **Thành tích & Bản đồ mới:**
  - **Ảo Cảnh Hiểm Ác (Độ khó III):** Phá sâu kỷ lục **`246s → 191s`** (*Kẻ Neo Sóng* `56s` — Raiden/Furina/Yae/Yelan, *Hoàng Đế Thép Lửa* `34s` — Neuvillette/Kazuha/Zhongli/Furina, *Thằn Lằn* `101s` — Neuvillette/Raiden/Navia/Diona).
  - **Snezhnaya & Bản đồ:** Snezhnaya **`4% → 6%`** (`8` Băng Thần Đồng), Nod-Krai **`8% → 9%`** (`29` Nguyệt Thần Đồng), Natlan **`3% → 4%`** (`22` Hỏa Thần Đồng), Điểm dịch chuyển **`519 → 524`**, Bí cảnh **`63 → 64`**, Thành tựu **`1,128 → 1,131`**.
  - **Nhà Hát Giả Tưởng (`01.11 – 01.12`):** Màn **3** (Độ khó **3**, hiện có **27** nhân vật Lv.70+ đủ hệ).
- **Đã hoàn thành trước đó (`21–23/11`):**
  - `Navia` chốt **`Kiếm Li Cốt R1` + `6/10/9` (Vương miện E)** (`80.0/180.1`), `Neuvillette` chuyển tạm **`4pc Trái Tim Trầm Luân` + `Ly Thủy`** (`52.8/234.9`), `Valeriy` C3, `Aino` `Đại Kiếm Tây Phong Lv.90`, `Ayato` (`62.5/152.1`), `Xiangling` (`Lao Xiên Cá R5`), `Nahida` (`4pc Rừng Sâu 1,012 EM`), `Noelle` (`Kiếm Bạch Ảnh`), `Ningguang` (`Quyển Thiên Không R2`), `Yelan` (`Tây Phong R5`), `Fischl` (`Tuyệt Huyền R5`), `Kuki` (`Thiết Phong Kích R3`), `Chevreuse` (`Hắc Anh Thương R5`), `Jean` (`Tây Phong Kiếm R5`), `Chiori` (`Cát DEF%`), `Alyosha` mới.

---

## 1. Các việc cần chỉnh tiếp (Ưu tiên hiện tại)

1. **Furina (Lv.80 C0, 4/8/8, Bàn Nham Kết Lục R1) & Keqing (Lv.90 C1)**
   - *Hiện trạng Furina:* `29,981 HP`, `93.1% CR / 158.8% CD · 125.9% ER` trên `4pc Thiên Nham`, Cát ER đang `+0` và đang mượn `Bàn Nham Kết Lục` khiến `Keqing` tạm cầm `Kiếm Bến Tàu` (`26.0% CR`).
   - *Khắc phục:* Nâng Cát ER `+0 → +20`, câu **`Ống Đồng Fleuve Cendre`** (Fontaine) cho Furina để trả `Bàn Nham` về Keqing, kéo `Lv.80 → 90` & Q `8 → 10`, rồi farm **`4pc Đoàn Kịch Hoàng Kim`** chung bí cảnh với Neuvillette.
2. **Neuvillette (Lv.90 C0, 10/10/10, Nghi Thức Dòng Chảy Vĩnh Hằng R1)**
   - *Hiện trạng:* `35,466 HP`, `52.8% CR / 234.9% CD` trên **`4pc Trái Tim Trầm Luân`** (vừa ghép Furina clear Boss 2 Ảo Cảnh trong **34s**).
   - *Khắc phục:* Farm tiếp **`4pc Thợ Săn Marechaussee`** (Fontaine) — giữ nguyên nền CR hiện tại sẽ nhảy lên **`~88.8% CR / 234.9% CD`**.
3. **Beidou (Lv.80 C6) & Gorou (Lv.70 C5) & Ningguang (Lv.89 C6)**
   - `Beidou`: Vẫn cầm **kiếm 1★ Lv.1** và mới 3 món TDV (`111% ER`) → gắn `Vua Biển R5` (từ Xinyan) hoặc `Kiếm Vô Công 5★` (từ Chongyun kèm **Cát ER** / `4pc Dấu Ấn`).
   - `Gorou`: Vẫn cầm **cung 1★ Lv.1** & thiếu Ly → lắp tạm cung Nạp để đủ slot Nhà Hát 7.2 trước `01/12`.
   - `Ningguang`: Đã có `Quyển Thiên Không R2` (`2,501 ATK`) nhưng Ly Nham đang `+0` và CR mới **`14.7%`** → nâng Ly `+20` và đổi sang **Nón CR%**.
4. **Raiden Shogun (Lv.90 C1, 6/9/10, Đoạn Thảo Trường Đao R1)**
   - *Hiện trạng:* ✓ Đã đổi Nón CR% lên **`69.9% CR / 132.4% CD · 258.9% ER`**, clear Boss 1 Ảo Cảnh trong **56s** cùng Furina.
   - *Tối ưu thêm:* Chuyển `Kiếm Gỗ` (Base ATK 565) từ Nilou cho Bennett thay `Răng Nanh Rỉ Sét` (510).
5. **Chevreuse (Lv.70 C1) & Kuki Shinobu (Lv.80 C4) & Fischl (Lv.80 C6) & Yelan (Lv.90 C0)**
   - `Chevreuse`: HP mới `25,918` (còn đeo Ly Hỏa & Nón CR) → đổi sang **Ly HP% + Nón HP%** + nâng Lv.80 để chạm **`40,000 HP`**.
   - `Kuki Shinobu`: EM mới `483` (còn đeo Cát ATK / Ly HP / Nón CR) → đổi **3 món EM** + nâng **Lv.90** (`~900+ EM`).
   - `Fischl`: Đang `31.8% CR / 137.1% CD` → đổi sang **Nón CR%** + farm dần **4pc Đoàn Kịch Hoàng Kim**.
   - `Yelan`: Nâng **`Cung Tây Phong Lv.70 → Lv.90`** để đẩy ER lên ~`202%`.
6. **Chiori (Lv.80 C0), Aino (Lv.70 C1), Jean (Lv.80 C2), Venti (Lv.80 C0)**
   - `Chiori`: Đã có Cát DEF% (`2,163 DEF`) → nâng E từ `1` → `8–9`, nâng Ly Nham `+14 → +20`.
   - `Aino`: Đã lên **Lv.70 C1** (`1/5/4`) → nâng tiếp **Lv.70 → 80**, thiên phú `1/5/4 → 1/6/8`, farm dần **4pc Khúc Ca Trăng Lụa** (Nod-Krai 9%).
   - `Jean`: Đã có `215.4% ER` → nâng Ly ATK% (`+0 → +20`) và ép dần **4pc Bóng Hình**.
   - `Venti`: 4/5 món TDV trên HoYoLAB đang `+0` → nâng lên `+20`.
7. **Yae Miko (Lv.90 C0, 6/10/10, Chân Ý Của Kagura R1 — Nâng cấp Ma Nữ / *Witch's Revelation*)**
   - *Hiện trạng:* `2,238 ATK`, `51.0% CR / 252.2% CD`, `189 EM`, `111.7% ER` (`2pc Giác Đấu + 2pc Hồi Ức + 1pc Sao Băng`), Nón đang đeo STBK `62.2%`.
   - *Khác biệt sau nâng cấp Ma Nữ (thiên phú `Edict of Cleansing`, mở qua quest `Great Youkai's Instruction`, 0 Nhựa, cần Lv.70+):* Trụ Sesshou Sakura tăng **`14s → 24s`**, dùng Nộ **không còn phá trụ**, đồng đội kích Siêu Dẫn/Tinh-Siêu Dẫn cộng **`+80% ATK`** (CD `2.5s`), và trong *Polestar Field* nổ thêm **`+200% ATK`** Sát Thương Tinh-Siêu Dẫn **(CRIT được)**. (Nếu roll thêm Cung Mệnh: C1 `+50%` DMG Lôi/Tinh-Siêu Dẫn toàn đội `10s`; C2 `+60/90/120/200 EM`; C4 hồi `8` Năng lượng/`5s` & `+100%` Nộ; C6 `+200% CRIT DMG` Tinh-Siêu Dẫn.)
   - *Khắc phục:* Làm ngay quest Ma Nữ (`0` Nhựa), đổi **Nón STBK → Nón CR%** (`51/252 → ~75/204`, `+10.8%` DPS trung bình) để ổn định bạo kích đòn `200% ATK`; khi ghép đội Tinh-Siêu Dẫn với Mitya, farm chung **`4pc Ảo Tưởng Vụn Vỡ`** (*Thorny Crown — Mondstadt*, `+ATK%`, `+ST Tinh-Siêu Dẫn`, `+16% CR`) và cân nhắc **Ly ATK%** (vì ST Tinh-Siêu Dẫn không ăn `%ST Lôi` hay `4pc Đoàn Kịch`).

---

## 2. Tư vấn La Hoàn & Nhà Hát (`11/2026 – 12/2026`)

- **La Hoàn (`16.11 – 16.12`, đang `11-3`, `25/36★`):**
  - *Nửa 1 (+75% Lunar-Crystallize):* `✓ Navia (Li Cốt 80/180) + Zhongli + Chiori + Xianyun/Bennett`
  - *Nửa 2 (+200 EM):* `✓ Neuvillette + Furina + Kazuha + Zhongli` (vừa clear Ảo Cảnh 34s) hoặc `✓ Raiden National` (`69.9/132.4` vừa clear Boss 1 56s).
- **Nhà Hát (`01.11 – 01.12`, Thủy · Lôi · Nham — đã đi tới Màn 3, Độ khó 3 · `27+3` nhân vật):**
  - `Furina` Lv.80 & `Aino` Lv.70 C1 vừa bổ sung thêm 2 slot Thủy chất lượng cùng `Navia`, `Ayato`, `Noelle`; cần lắp gấp đồ cho `Beidou`, `Gorou` và nâng Ly/Nón CR% cho `Ningguang` trước **01/12**. (`Yae` sau khi mở Ma Nữ giữ trụ 24s không mất khi Nộ sẽ đi Màn 6 cực mượt.)

---

## 3. Danh sách Nhân vật Meta 7.2 tại Snezhnaya (`Đã mở 6%`)

1. **Mitya (Lv.60 C0, trấn `Sắc Lệnh Tinh Tú` Lv.20 R1):** Lõi Tinh-Siêu Dẫn đi cặp **Yae Miko (Ma Nữ)** + **Rosaria C6 / Nhà Lữ Hành Băng** (sau nâng lên **Odette**) + **Valeriy C3** — nâng Ly EM `+0 → +20`, kéo Trấn & Mitya lên Lv.90 + farm chung **`4pc Ảo Tưởng Vụn Vỡ`** cho cả Mitya & Yae.
2. **Valeriy (Lv.1 C3):** Khiên chống gián đoạn (giữ nhịp Trọng Kích Mitya) + Buffer cho lõi **Mitya + Yae (Ma Nữ)** — rèn `Nhạc Khúc Biển Sâu` (ATK%) + farm sách *Charity* (ưu tiên hơn Alyosha vì trùng slot hỗ trợ).
3. **Alyosha (Lv.1 C0):** 4★ Thương Lôi off-field Healer + Buff ATK (cạnh tranh trực tiếp slot của Valeriy; dùng thay Valeriy khi đội hình cần hồi máu — buff ATK của Alyosha scale rất hợp đòn `+80%/200% ATK` của Yae Ma Nữ).
4. **Aino (Lv.70 C1 · `1/5/4`):** Đã lên Lv.70 + `Đại Kiếm Tây Phong Lv.90`, tiếp tục kéo lên Lv.80 & thiên phú `1/6/8`.

---

## 4. Bảng So Sánh Sức Mạnh Dự Tính Các Đội Hình (24/11/2026)

*Ước lượng trên chuẩn vòng xoay 20s tại La Hoàn Tầng 12 (`k DPS`), đối chiếu theo chỉ số crawl 24/11, nâng cấp Ma Nữ của Yae Miko (`Edict of Cleansing`) và kỷ lục Ảo Cảnh 191s (`Neuvillette + Furina` 34s, `Raiden + Furina` 56s).*

| Đội hình | Vai trò | Hiện tại (Tier) | Dự tính (Tier) | Tăng | Đòn bẩy nâng cấp chính |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Mitya + Yae Tinh-Siêu Dẫn** (`Mitya · Yae · Rosaria · Valeriy`) | Meta 7.2 · Tinh-Siêu Dẫn | ~38k (`B`) | **~98k** (`S+`) | +158% | Mitya Lv.60→90 + Trấn 20→90 + Ly EM +20 · Yae Ma Nữ + Nón CR% + 4pc Ảo Tưởng · Valeriy C3 Lv.80 (đổi Rosaria → Odette vượt 100k+) |
| **Neuvillette + Furina Hyper** (`Neuvillette · Furina · Kazuha · Zhongli`) | AOE · Đơn | **~64k** (`A+`) | **~92k** (`S+`) | +44% | Neuv 4pc Thợ Săn + Furina Lv.90 Q10 / 4pc Đoàn Kịch / Ống Đồng (chung 1 bí cảnh Fontaine) |
| **Raiden + Furina Hyper** (`Raiden · Furina · Yae · Yelan`) | Đơn mục tiêu | ~62k (`A+`) | ~81k (`S`) | +31% | Furina Lv.90 Q10 + Cát ER +20/4pc Đoàn Kịch · Yae mở Ma Nữ (trụ 24s, Q không phá trụ) + Nón CR% · Yelan Tây Phong 90 |
| **Navia 2 Nham** (`Navia · Chiori · Bennett · Xiangling`) | Phá khiên · Đơn | ~58k (`A+`) | ~76k (`S`) | +31% | Nâng E Chiori 1→9 + Ly Nham +20 + tìm STBK (hiện 71%) · Bennett đổi Kiếm Gỗ |
| **Hu Tao Bốc Hơi** (`Hu Tao · Yelan · Xingqiu · Zhongli`) | Đơn mục tiêu | ~59k (`A+`) | ~72k (`S`) | +22% | Yelan Tây Phong 70→90 · Kéo nhẹ CR Hu Tao (54%→70%+) · Thử ghép Furina + Xianyun |
| **Nilou Sum Suê** (`Nilou · Nahida · Kokomi · Collei`) | Vua AOE (2+ quái) | ~56k (`A+`) | ~70k (`S`) | +25% | Đổi Nilou sang 2pc+2pc HP% (51.5k → 68k+ HP) · Bổ sung EM cho Kokomi khi đánh AOE |
| **Keqing Tăng Cường** (`Keqing · Nahida · Yae · Kazuha`) | Đơn · AOE nhanh | ~45k (`B`) | ~68k (`A+`) | +51% | Câu Ống Đồng trả Bàn Nham về Keqing (CR 26% → 70%) · Yae mở Ma Nữ (trụ 24s, Q không phá trụ) + Nón CR% |
| **Raiden National** (`Raiden · Bennett · Xiangling · Yelan`) | Đơn mục tiêu | ~61k (`A+`) | ~68k (`A+`) | +11% | Bennett đổi Kiếm Gỗ (565 Base ATK) · Yelan Tây Phong 90 · Tối ưu nhẹ Crit Xiangling |
| **Ayaka Đóng Băng** (`Ayaka · Mona · Kazuha · Kokomi`) | AOE Đóng Băng | ~54k (`A`) | ~67k (`A+`) | +24% | Thử ghép Furina + Kokomi/Charlotte hoặc Rosaria C6 + Kokomi Thiên Nham · Amenoma R5 |
| **Yoimiya Đánh Thường** (`Yoimiya · Yelan · Yun Jin · Zhongli`) | Boss bay · Đơn | ~55k (`A`) | ~62k (`A`) | +13% | Yelan Tây Phong 70→90 · Bổ sung ~100 EM cho Yoimiya để tối ưu Bốc Hơi |
| **Ganyu Tan Chảy** (`Ganyu · Bennett · Xiangling · Zhongli`) | Đơn · Nuke | ~52k (`A`) | ~60k (`A`) | +15% | Đổi Cát EM (~220+ EM) cho Ganyu · Bennett đổi Kiếm Gỗ tăng buff ATK |
| **Eula Vật Lý** (`Eula · Raiden · Rosaria · Zhongli`) | Nuke Vật Lý | ~48k (`B+`) | ~56k (`A`) | +17% | Đẩy CR Eula (51.7%→70%+) giảm hụt Nộ · Hoặc thay Raiden bằng Yae (Ma Nữ) ăn +80% ATK Siêu Dẫn |
