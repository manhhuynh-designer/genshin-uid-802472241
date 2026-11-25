# Ghi chú Tư vấn & Kế hoạch Tài khoản Genshin (`UID 802472241`)

Tổng hợp toàn bộ phân tích từ dữ liệu HoYoLAB Battle Chronicle crawl cập nhật chiều **25/11/2026 (`13:42`)** (Version **7.2**, **73 nhân vật**).

---

## 0. Các việc đã hoàn thành sau đợt Crawl 25/11/2026

- **Hoàn thành Vòng Xoay Vũ Khí (crawl `25/11 13:42`):**
  - `Furina`: **✓ Đã chuyển `Răng Nanh Rỉ Sét Lv.90 R5`** (`35,626 HP · 41.6/180.6 · 151.8% ER`).
  - `Keqing`: **✓ Đã trả lại `Bàn Nham Kết Lục Lv.90 R1`** (`26.0% → 70.1% CR / 231.4% CD · 1,800 ATK`).
  - `Nilou`: **✓ Đã nhận `Kiếm Bến Tàu Lv.60 R1`** (`51,545 → 56,168 HP`, còn kéo lên Lv.90 & `2+2 HP%`).
  - `Bennett`: **✓ Đã nhận `Kiếm Gỗ Lv.90 R2`** (`565 Base ATK · 249.3% ER`).
  - `Jean`: **✓ Đã chuyển sang `Ống Đồng Fleuve Cendre Lv.50 R2`** (`189.3% ER`).
  - `Layla`: **✓ Đã nhận `Tây Phong Kiếm Lv.80 R5`** (`123.3% → 179.2% ER · 34,931 HP`).
  - `Mona`: **✓ Đã gắn `Chương Nhạc Lang Thang Lv.90 R5`** (`149.5% → 204.6% CD · 1,183 ATK`).
  - `Beidou`: **✓ Đã nhận `Vua Biển Hàng Hiệu Lv.80 R5`** (`486 → 1,559 ATK`).
  - `Kujou Sara`: **✓ Đã nhận `Lạc Hà Lv.90 R5`** (`136.2% → 166.8% ER · 1,716 ATK`).
  - `Yaoyao`: **✓ Đã gắn `Đối Thoại Của Hiền Giả Sa Mạc Lv.1 R1`** (`27,653 HP`), giải phóng `Xương Sống Thiên Không Lv.90` vào kho.
  - `Valeriy`: **✓ Đã gắn `Kagotsurube Isshin Lv.80 R1`** (`647 ATK`, không cần tốn Phôi rèn `Nhạc Khúc Biển Sâu`).
  - `Alyosha`: **✓ Đã gắn `Mũi Nhọn Của Gió Lv.70 R5`** (`550 ATK`).
- **Cập nhật nhân vật & TDV (`25/11`):**
  - `Navia`: **vương miện Q lên Lv.10 (`6/10/10`)**, đổi sang **`2pc Phiến Đá + 2pc Giác Đấu`** (`1,980 ATK · 56.7% CR / 189.5% CD · 142.7% ER`).
  - `Mitya`: **✓ Đã lên `Lv.70 · 2/3/4 · Trấn Lv.50 · 2pc Giấc Mộng + 2pc Đoàn Hát`** (`516 EM · 67.2/188.5`), Ly EM vẫn `+0`.
  - `Aino`: **✓ Đã lên `Lv.80 C1 · 1/5/4 · 464 EM · 191.6% ER`**.
  - `Yae Miko`: **✓ Đã hoàn thành quest Chỉ Dụ Của Ma Nữ** (`Edict of Cleansing`).
  - `Raiden Shogun`: **✓ Đã đổi Nón CR%** (`69.9% CR / 132.4% CD · 258.9% ER`).
- **Nhân vật mới & Lịch sử roll (`128` lượt trong `data/wish_history/`, `30/10 – 23/11`):**
  - **`Furina`** (5★ Thủy, về ở **pity 63** lúc `2026-11-23 21:16:05`), **`Người Mẫu Nữ`** (Băng, thứ 73).
  - Pity hiện tại: Nhân Vật (`301`): `0/90` (4★: `2/10`); Vũ Khí (`302`): `1/80`; Thường (`200`): `7/90`.
- **Thành tích & Bản đồ:**
  - **Ảo Cảnh Hiểm Ác (Độ khó III):** **`191s`** (*Boss 1* `56s`, *Boss 2* `34s`, *Boss 3* `101s`).
  - **Bản đồ (`25/11`):** Snezhnaya **`7%`** (`10` Băng Thần Đồng), Nod-Krai **`10%`** (`30` Nguyệt Thần Đồng), Natlan **`4%`**, Điểm dịch chuyển **`529`**, Bí cảnh **`65`**, Ngày hoạt động **`1,313`**, Thành tựu `1,131`.
  - **Nhà Hát Giả Tưởng (`01.11 – 01.12`):** Màn **3** (Độ khó **3**, **`28+3`** nhân vật Lv.70+).

---

## 1. Các việc cần chỉnh tiếp (Ưu tiên hiện tại)

1. **Vũ Khí — Hoàn thiện nâng cấp sau khi xoay (`✓` đã đổi xong vị trí 12 cây)**
   - `Furina`: **✓ Đã chuyển `Răng Nanh Rỉ Sét Lv.90 R5`** (`35,626 HP · 41.6/180.6 · 151.8% ER`) → kéo `Lv.80 → 90`, Q `8 → 10`, farm **`4pc Đoàn Kịch Hoàng Kim`** chung bí cảnh Neuvillette.
   - `Nilou`: **✓ Đã nhận `Kiếm Bến Tàu Lv.60`** (`56,168 HP`) → kéo kiếm `Lv.60 → 90` & đổi sang **`2pc+2pc HP%`** (`68k+ HP`).
   - `Jean`: **✓ Đã chuyển `Ống Đồng Fleuve Cendre Lv.50 R2`** (`189.3% ER`) → kéo `Lv.50 → 90`, nâng Ly ATK% `+0 → +20`, ép **`4pc Bóng Hình`**.
   - `Valeriy`: **✓ Đã gắn `Kagotsurube Isshin Lv.80 R1`** (`647 ATK`) → kéo Lv.1 → 80, Isshin 90, farm **`4pc Trái Tim Lửa Nung`**.
   - `Alyosha`: **✓ Đã gắn `Mũi Nhọn Của Gió Lv.70 R5`** (hoặc lấy `Xương Sống Thiên Không Lv.90` vừa giải phóng từ Yaoyao).
2. **Neuvillette (Lv.90 C0, 10/10/10) & Navia (Lv.90 C0, 6/10/10)**
   - `Neuvillette`: `35,466 HP · 52.8/234.9` trên `4pc Trầm Luân` → farm **`4pc Thợ Săn Marechaussee`** (`~88.8% CR`).
   - `Navia`: **✓ Đã vương miện Q10 (`6/10/10`)** và chuyển `2 Phiến Đá + 2 Giác Đấu` (`1,980 ATK · 142.7% ER`) — lưu ý kéo lại CR **`56.7% → ≥70%`**.
3. **Beidou (Lv.80 C6) & Gorou (Lv.70 C5) & Ningguang (Lv.89 C6)**
   - `Beidou`: **✓ Đã gắn `Vua Biển R5`** (`1,559 ATK`) → lắp đủ 5 món TDV có **Cát ER** trước `01/12`.
   - `Gorou`: Vẫn cầm **cung 1★ Lv.1** & thiếu Ly → lắp tạm cung Nạp cho Nhà Hát `01/12`.
   - `Ningguang`: `Quyển Thiên Không R2` (`2,501 ATK`) nhưng Ly Nham `+0` & CR `14.7%` → nâng Ly `+20` + đổi **Nón CR%**.
4. **Chevreuse (Lv.70 C1) & Kuki Shinobu (Lv.80 C4) & Fischl (Lv.80 C6) & Yelan (Lv.90 C0)**
   - `Chevreuse`: `21,612 HP` → đổi **3 món HP%** + nâng Lv.80 chạm **`40,000 HP`**.
   - `Kuki Shinobu`: EM mới `483` → đổi **3 món EM** + nâng **Lv.90** (`~900+ EM`).
   - `Fischl`: `31.8/137.1` → đổi **Nón CR%** + farm dần **4pc Đoàn Kịch**.
   - `Yelan`: nâng **`Cung Tây Phong Lv.70 → Lv.90`** (`~202% ER`).
5. **Chiori (Lv.80 C0), Aino (Lv.80 C1), Venti (Lv.80 C0), Yae Miko (Lv.90 C0 Ma Nữ)**
   - `Chiori`: nâng E `1 → 8–9`, Ly Nham `+14 → +20`.
   - `Aino`: kéo thiên phú `1/5/4 → 1/6/8` & farm **4pc Khúc Ca Trăng Lụa** (Nod-Krai `10%`).
   - `Venti`: 4/5 món TDV đang `+0` → nâng lên `+20`.
   - `Yae Miko` (**✓ Ma Nữ**): `51.0/252.2 · 2,238 ATK` → đổi **Nón CR%** (`~75/204`) & farm **`4pc Ảo Tưởng Vụn Vỡ`** chung **Mitya**.

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
