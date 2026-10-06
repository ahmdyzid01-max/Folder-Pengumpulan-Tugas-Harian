*1. Push vs Pull*
- *Push:* kirim kode dari lokal → GitHub.
- *Pull:* tarik kode dari GitHub → lokal.
- *Contoh Push:* kamu habis ngerjain tugas `tugas1.html` di laptop, mau kumpulin biar dosen bisa liat di GitHub.
- *Contoh Pull:* temen kelompokmu udah push revisi tadi malam, kamu pull pagi ini biar file di laptopmu update.

*2. Fungsi `git push`*
Mengirim commit lokal ke remote (GitHub).
- *a. `-u` (upstream):* menghubungkan branch lokal `main` dengan branch remote `origin/main`. Jadi Git inget pasangannya.
- *b. Tanpa `-u` di push pertama:* kode tetap kekirim, tapi Git belum inget pasangannya. Besok kamu harus ketik lagi `git push origin main`.
- *c. Setelah `-u`:* cukup `git push` aja, karena Git sudah tau mau kirim kemana.

*3. `git clone` vs `git init`*
- *Clone:* download repo yang SUDAH ADA di GitHub ke laptop. Isinya sudah termasuk `.git`.
- *Init:* bikin repo BARU dari nol di laptop yang belum punya `.git`.
- *Kenapa clone gak butuh init lagi?* Karena clone otomatis sudah membawa folder `.git`, jadi sudah jadi repo git.

*4. Fungsi `git pull`*
Mengambil update terbaru dari GitHub dan langsung gabungin ke file lokalmu. Penting di kerja tim biar gak bentrok.
- *2 momen wajib pull:*
    1. Pagi hari sebelum mulai ngoding.
    2. Sebelum kamu push, untuk cek ada perubahan orang lain gak.

*5. Alur kerja harian*
git pull          # 1. ambil update terbaru biar gak konflik
# ...edit file...
git add .         # 2. tandai file yang mau disimpan
git commit -m "pesan" # 3. simpan versi lokal dengan catatan
git push          # 4. kirim ke GitHub
Penting biar kerjaanmu sinkron, aman, dan tercatat rapi.

*6. Apa itu Fork?*
Fork = copy repo orang lain ke akun GitHub kamu sendiri.
- *Kapan perlu fork:*
    1. Mau kontribusi ke proyek open source punya orang lain tapi gak punya akses langsung.
    2. Mau jadikan template proyek orang untuk dikembangkan versi kamu sendiri.
- *Beda dengan Clone:* Fork itu copy di _server_ GitHub (akun kamu), Clone itu download dari GitHub ke _laptop_ kamu.

*7. 6 Langkah Fork + Pull Request*
1.  *Fork repo:* tujuannya biar punya copy di akunmu.
2.  *Clone fork ke lokal:* biar bisa ngedit di laptop.
3.  *Bikin branch baru:* biar kerjaanmu terpisah, gak ngerusak main.
4.  *Edit, add, commit, push ke fork-mu:* kirim perubahan ke akunmu.
5.  *Buat Pull Request di GitHub:* ajukan permohonan gabung ke repo asli.
6.  *Diskusi & Merge:* pemilik repo review, kamu revisi kalau diminta, lalu di-merge.

*8. Pull Request (PR)*
PR adalah surat permohonan: "kak, aku udah perbaiki sesuatu, tolong cek dan gabungkan ya".
Kenapa gak langsung merge ke main? Biar main tetap aman dan stabil.
- *2 keuntungan PR:*
    1.  Bisa di-review & didiskusikan tim sebelum masuk main.
    2.  Ada jejak perubahan, jadi kalau error gampang dilacak.

*9. Skenario Andi & Budi*
- *a. Apa yang terjadi:* Push Budi DITOLAK (rejected).
- *b. Kenapa:* Karena GitHub sudah lebih baru (punya punya Andi). Git gak boleh nimpa punya Andi. Ini karena Budi lupa `pull`.
- *c. Seharusnya Budi:* `git pull` dulu sebelum edit.
- *d. Urutan yang benar:*
  git pull origin main
  # baru edit style.css
  git add style.css
  git commit -m "update style"
  git push origin main
*10. Studi Kasus*
a. *Clone:* download repo `andi/proyek` dari GitHub ke laptop + otomatis init.
b. *Kenapa bikin branch `perbaikan-bug`:* biar main tetap bersih. Kalau bug makin parah, gak merusak kode utama. Kerja pro memang gak langsung di main.
c. *Kenapa `git push origin perbaikan-bug`:* karena branch baru ini belum dikenal remote. Jadi harus sebut nama branchnya secara lengkap di push pertama.
d. *Langkah selanjutnya di web GitHub:* Klik tombol "Compare & pull request" → tulis judul & deskripsi → klik "Create pull request".
e. *Jika diminta revisi:* 
      1.  Kembali ke laptop, tetap di branch `perbaikan-bug`.
      2.  Edit file lagi → `git add` → `git commit` → `git push origin perbaikan-bug`.
      3.  PR di GitHub akan otomatis update sendiri.