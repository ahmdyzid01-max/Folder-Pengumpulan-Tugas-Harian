1. Merge Conflict
Terjadi karena Git bingung mau pakai versi siapa saat 2 perubahan bentrok di baris yang sama.
- 2 Pemicu: 1. Dua orang edit baris yang sama. 2. Satu file dihapus di satu branch tapi diedit di branch lain.
- Contoh nyata: Kamu edit `<h1>Warna Merah</h1>` jadi biru, temanmu di laptopnya edit baris yang sama jadi hijau. Pas di-merge, Git bingung.

2. Arti Tanda Konflik
<<<<<<< HEAD
<h1 style="color: red;">

<h1 style="color: blue;">
>>>>>>> branch-teman
-a. Arti: `<<<<<<< HEAD` = awal versi kamu (branch aktif). `=======` = pemisah. `>>>>>>> branch-teman` = akhir versi teman.
-b. Versi branch aktifmu: `<h1 style="color: red;">Selamat Datang</h1>`
-c. Versi branch datang: `<h1 style="color: blue;">Selamat Datang</h1>`

3. 2 Cara Selesaikan Konflik
- Via VS Code (Rekomendasi pemula): Buka file yang konflik → muncul tombol `Accept Current Change / Incoming / Both` → klik salah satu → Save. Lebih gampang karena ada warna dan tinggal klik, gak perlu hapus manual tanda `<<<<`.
- *Via Manual:* Buka file di notepad → hapus manual tanda `<<<<<<<, =======, >>>>>>>` → sisakan 1 versi yang paling benar → Save.

4. Perintah Setelah Selesai
git add . 
# menandai konflik sudah beres
git commit -m "fix: resolve conflict di header" 
# simpan hasil gabungannya
git push 
# kirim ke GitHub
5. `git merge --abort`
Fungsi: Batalin merge dan balik ke keadaan sebelum konflik.
- Kapan dipakai: Pas kamu bingung banget konfliknya kebanyakan (misal 20 file konflik), jadi mending batal dulu, koordinasi sama teman, baru `pull` ulang.

6. 4 Praktik Cegah Konflik
1.  Sering `git pull`: Biar selalu dapat versi terbaru.
2.  Jangan kerja di file yang sama barengan: Bagi tugas jelas, kamu `navbar`, teman `footer`.
3.  Pakai branch beda-beda: Masing-masing fitur punya branch sendiri.
4.  Commit kecil & sering: Jangan numpuk 1 minggu baru commit, biar perubahan gak numpuk jadi bentrok besar.

7. Pesan Commit Penting
Biar tim tau kamu ngapain tanpa buka kodenya.
- Buruk: `update`, `fix`, `asdfghj`
- Baik: `fix: perbaiki tombol login tidak bisa diklik`, `feat: tambah halaman profil`, `docs: update README cara install`

8. Conventional Commits
Format: `tipe: deskripsi singkat`
- `feat`: fitur baru → `feat: tambah fitur pencarian`
- `fix`: perbaiki bug → `fix: atasi bug validasi form kosong`
- `docs`: dokumentasi → `docs: tambah panduan instalasi`
- `style`: ubah tampilan/CSS → `style: ubah warna header jadi biru`

9. Commit Terbaik
Yang terbaik: `feat: menambahkan fitur pencarian produk di navbar`
Alasan: Jelas tipenya (`feat`), jelas apa yang ditambah dan di mana. Yang `update` dan `fix bug tombol` terlalu umum, orang lain bingung bug tombol yang mana.

10. Fungsi `.gitignore`
File daftar hitam, biar file gak penting gak ke-upload ke GitHub.
- 4 jenis yang wajib di-ignore:
    1.  `node_modules/`: ukurannya gede banget, bisa di-install lagi.
    2.  `.env`: berisi password & API key, bahaya kalau bocor.
    3.  `dist/`, `build/`: hasil kompilasi, gak perlu di-push.
    4.  File OS: `.DS_Store`, `Thumbs.db`: file sampah dari laptop.

11. Penamaan Branch
Format: `tipe/deskripsi-singkat`
- Contoh baik: `feat/login-page`, `fix/bug-navbar`, `docs/update-readme`
- Alasan: Rapi, langsung ketahuan tujuan branchnya. Kalau bebas kayak `branch-baru`, `coba-coba`, tim bingung itu isinya apa.

12. Peran 3 Teknologi Web
- HTML: Kerangka / struktur (tulang).
- CSS: Tampilan / gaya (baju & make-up).
- JavaScript: Otak / interaksi (bisa gerak, bisa diklik).

13. 2 Lingkungan JS
1.  Browser: Untuk bikin website interaktif (misal klik tombol muncul alert).
2.  Node.js (Server): Untuk backend, bikin server, akses database di luar browser.

14. JavaScript vs ECMAScript
- JS: Bahasanya. ECMAScript (ES): Standar / aturannya. ES itu versi pembaruannya.
- Contoh:
    - Lama (ES5): `var nama = "Andi";`
    - Modern (ES6): `const nama = "Andi";` lebih aman dan modern.