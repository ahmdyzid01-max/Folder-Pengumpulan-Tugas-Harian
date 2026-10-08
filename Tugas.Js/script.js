// === KODE AWAL DARI REKAN (sebelum diperbaiki) - Commit pertama harusnya ini ===
// Salin persis, lalu perbaiki di bawahnya. Di sini aku langsung tulis versi perbaikannya + FIX

// === LANGKAH 1: Perbaiki Kode Awal ===

// Program pencatatan data usaha
// Dibuat oleh rekan sebelumnya

const namaUsaha = "Kopi Senja";
const kotaUsaha = "Yogyakarta";
const tahunBerdiri = 2020; // FIX: diubah dari "2020" (string) jadi 2020 (number) agar penjumlahan matematis benar
const TARIF_PAJAK = 0.11;
let statusBuka = true; // FIX: tambahkan titik koma yang hilang
let website; // FIX: deklarasi duplikat dihapus, cukup deklarasi sekali
website = null; // FIX: assignment kedua, bukan deklarasi lagi dengan let
let jumlahProduk = 3; // FIX: var diganti let sesuai aturan let/const saja

let produk = ["Kopi Susu", "Es Teh Manis", "Roti Bakar"];
let hargaProduk = [18000, 7500, 15000];

console.log(namaUsaha); // FIX: namausaha -> namaUsaha (JS case-sensitive)
console.log("Kota: " + kotaUsaha); // FIX: Console.log -> console.log (C besar bikin error)
console.log("Tahun berdiri berikutnya: " + (tahunBerdiri + 1)); // Sekarang hasilnya 2021, bukan 20201

// TARIF_PAJAK = 0.12; // FIX: baris ini dihapus/dikomentari karena const tidak boleh di-assign ulang
let hargaKopiSetelahPajak = hargaProduk[0] * (1 + TARIF_PAJAK); // FIX: x diganti * untuk perkalian
console.log("Harga kopi + pajak: " + hargaKopiSetelahPajak);

let hargaTermurah = Math.min(hargaProduk[0], hargaProduk[1], hargaProduk[2]);
console.log("Termurah: " + hargaTermurah);
console.log("Produk ke-4: " + produk[3]); // FIX: Ini tidak error tapi hasilnya undefined, akan dibenahi di Langkah 2

console.log("Status buka: " + statusBuka); // FIX: penutup komentar /* yang hilang diperbaiki, jadi baris ini bisa jalan

/*
No | Baris/bagian | Jenis (Error / Tidak error tapi salah) | Penyebab | Perbaikan
1 | console.log(namausaha) | Error | Salah ketik, nama variabel beda huruf besar kecil | Ganti jadi namaUsaha
2 | Console.log(...) | Error | C besar, JS case-sensitive | Ganti jadi console.log
3 | let statusBuka = true (tanpa ;) | Tidak error tapi salah (konvensi) | Titik koma hilang | Tambah ;
4 | let website; let website = null; | Error | Deklarasi ulang let dengan nama sama | Hapus let kedua, jadi website = null;
5 | var jumlahProduk | Tidak error tapi salah (aturan) | var dilarang | Ganti jadi let
6 | hargaProduk[0] x (...) | Error | Operator x tidak ada di JS | Ganti jadi *
7 | TARIF_PAJAK = 0.12; | Error | const tidak bisa di-assign ulang | Hapus/komentari baris itu
8 | tahunBerdiri = "2020" | Tidak error tapi salah | Tipe string + number jadi string "20201" | Ubah jadi number 2020
9 | produk[3] | Tidak error tapi salah | Akses indeks yang tidak ada | Hasilnya undefined, perlu dicek panjang array
10 | /* Cetak status usaha (tanpa penutup) | Error | Komentar blok tidak ditutup bikin semua kode bawah jadi komentar | Tambahkan penutup atau hapus /*
*/

// Jawaban Langkah 1:
// 1. Karena JavaScript itu case-sensitive, jadi huruf besar kecil dianggap beda. namausaha dan namaUsaha disimpan di memori sebagai dua identifier berbeda.
// 2. TARIF_PAJAK pakai const jadi nilainya dikunci tidak boleh diubah lagi, kalau statusBuka pakai let jadi memang boleh diubah. const untuk nilai tetap.
// 3. "2020" itu string, kalau + 1 maka JS anggap penggabungan string bukan tambah matematika. Perbaikan: ubah tipe jadi number 2020 jadi 2020 + 1 = 2021.

// === LANGKAH 2: Benahi Struktur Data ===

const usaha = {
  namaUsaha: "Kopi Senja",
  pemilikUsaha: "Ibu Rina",
  kota: "Yogyakarta",
  tahunBerdiri: 2020, // tipe number yang tepat untuk perhitungan
  statusBuka: true,
  nomorWhatsapp: "08123456789", // sengaja string
  website: null,
};

const daftarProduk = [
  { nama: "Kopi Susu", harga: 18000 },
  { nama: "Es Teh Manis", harga: 7500 },
  { nama: "Roti Bakar", harga: 15000 },
  { nama: "Americano", harga: 16000 }, // produk ke-4 tambahan sendiri
];

console.log(usaha.namaUsaha); // notasi titik
console.log(usaha["kota"]); // notasi kurung siku
console.log(daftarProduk[0]); // produk pertama
console.log(daftarProduk[daftarProduk.length - 1]); // produk terakhir (aman walau jumlah berubah)

// Jawaban Langkah 2:
// 1. Nomor WhatsApp lebih tepat string karena tidak akan dihitung matematis dan ada angka 0 di depan yang akan hilang kalau jadi number. Contoh: 0812 kalau jadi number jadi 812.
// 2. null artinya sengaja dikosongkan dan memang belum ada website. Kalau undefined artinya belum pernah diisi sama sekali / lupa diisi. Jadi null itu disengaja, undefined itu tidak sengaja.
// 3. Karena indeks array mulai dari 0, jadi produk ke-4 ada di indeks 3, bukan 4. Kalau akses daftarProduk[4] hasilnya undefined karena cuma ada indeks 0-3.

// === LANGKAH 3: Perhitungan dan Tampilan ===

const TAHUN_SEKARANG = 2026;
const usiaUsaha = TAHUN_SEKARANG - usaha.tahunBerdiri;

const hargaSetelahPajak = daftarProduk.map((produkItem) => {
  return {
    nama: produkItem.nama,
    hargaAwal: produkItem.harga,
    hargaAkhir: Math.round(produkItem.harga * (1 + TARIF_PAJAK)),
  };
});

const semuaHargaAkhir = hargaSetelahPajak.map((p) => p.hargaAkhir);
const hargaTermurahSetelahPajak = Math.min(...semuaHargaAkhir);
const hargaTermahalSetelahPajak = Math.max(...semuaHargaAkhir);

console.log(`
===== KARTU USAHA =====
Nama Usaha : ${usaha.namaUsaha}
Pemilik : ${usaha.pemilikUsaha}
Kota : ${usaha.kota}
Usia Usaha : ${usiaUsaha} tahun
Status : ${usaha.statusBuka? "Buka" : "Tutup"}
Website : ${usaha.website === null? "belum ada" : usaha.website}

Daftar Produk (harga + PPN ${TARIF_PAJAK * 100}%):
${hargaSetelahPajak.map((p, i) => `${i + 1}. ${p.nama.padEnd(15)} : Rp ${p.hargaAkhir}`).join("\n")}
Termurah : Rp ${hargaTermurahSetelahPajak}
Termahal : Rp ${hargaTermahalSetelahPajak}

`);

// Jawaban Langkah 3:
// 1. Semua di langkah ini aku pakai const karena nilainya tidak perlu di-assign ulang. let hanya dipakai kalau memang nilainya akan berubah. Pakai const bikin kode lebih aman.
// 2. Perhitungan manual contoh Kopi Susu: 18000 * 0.11 = 1980 pajak, jadi 18000 + 1980 = 19980. Hasil program juga 19980, jadi sama.
// 3. Jika harga di object diubah, hasil yang sudah tercetak tidak akan otomatis berubah karena console.log sudah selesai. Harus hitung ulang lagi baru berubah. Bukti di bawah:

// Bukti jawaban no 3
daftarProduk[0].harga = 20000;
console.log("Setelah ubah harga, harga lama di variabel hargaSetelahPajak masih: " + hargaSetelahPajak[0].hargaAkhir);
console.log("Perlu hitung ulang agar update");

// === LANGKAH 4: Detektif Tipe Data ===

// Tebakan: "number"
console.log(typeof 42);
// Hasil asli: "number" ✔

// Tebakan: "string"
console.log(typeof "42");
// Hasil asli: "string" ✔

// Tebakan: "boolean"
console.log(typeof true);
// Hasil asli: "boolean" ✔

// Tebakan: "undefined"
console.log(typeof undefined);
// Hasil asli: "undefined" ✔

// Tebakan: "object" (ku pikir null itu object)
console.log(typeof null);
// Hasil asli: "object" ✔ tapi ini bug

// Tebakan: "object"
console.log(typeof [1, 2, 3]);
// Hasil asli: "object" ✔

// Tebakan: "object"
console.log(typeof { nama: "Budi" });
// Hasil asli: "object" ✔

// Tebakan: "53" (string gabung)
console.log("5" + 3);
// Hasil asli: "53" ✔

// Tebakan: 15 (number)
console.log("5" * 3);
// Hasil asli: 15 ✔

// Tebakan: NaN
console.log("abc" * 2);
// Hasil asli: NaN ✔

// Tebakan: Infinity
console.log(10 / 0);
// Hasil asli: Infinity ✔

// Tebakan: "object" karena website isinya null
console.log(typeof usaha.website);
// Hasil asli: "object" ✔

// Jawaban Langkah 4:
// 1. Kalau ada yang meleset biasanya di typeof null dan array, karena keduanya terbaca object padahal bukan.
// 2. typeof null hasilnya object itu bug lama dari JavaScript jaman dulu yang tidak pernah diperbaiki demi kompatibilitas. null sebenarnya bukan object, dia tipe primitif sendiri yang artinya kosong disengaja.
// 3. "5" + 3 jadi "53" karena + dipakai juga untuk gabung string, jadi JS ubah angka jadi string. Sedangkan * cuma untuk matematika, jadi JS ubah string "5" jadi number dulu baru dikali.

// === LANGKAH 5: Modifikasi Dadakan ===

daftarProduk.push({ nama: "Croissant", harga: 12000 });
usaha.instagram = "@kopisenja.yk";

const totalHargaSetelahPajak = hargaSetelahPajak.reduce((total, p) => total + p.hargaAkhir, 0);
const rataRataHarga = Math.round(totalHargaSetelahPajak / hargaSetelahPajak.length);
console.log(`Total semua produk (setelah pajak): Rp ${totalHargaSetelahPajak}`);
console.log(`Rata-rata harga: Rp ${rataRataHarga}`);

// Jawaban Langkah 5:
// 1. Yang harus diubah: array hargaSetelahPajak dan perhitungan min/max/total karena ada produk baru, jadi harus dihitung ulang. Yang tidak perlu diubah: object usaha selain instagram, dan TARIF_PAJAK karena nilainya tetap.
// 2. Contoh statement (instruksi lengkap): const rataRataHarga = Math.round(totalHargaSetelahPajak / hargaSetelahPajak.length);
// Contoh statement: daftarProduk.push({ nama: "Croissant", harga: 12000 });
// Contoh expression (menghasilkan nilai): total + p.hargaAkhir -> dievaluasi jadi number total baru
// Contoh expression: usaha.statusBuka? "Buka" : "Tutup" -> dievaluasi jadi string "Buka"

// === BONUS ===

if (true) {
  var bonusVar = "aku pakai var";
  let bonusLet = "aku pakai let";
}
console.log(bonusVar); // bisa diakses
// console.log(bonusLet); // error karena let tidak keluar dari blok

var bonusVarDuplikat = 1;
var bonusVarDuplikat = 2; // boleh
console.log("var boleh deklarasi ulang: " + bonusVarDuplikat);

// let bonusLetDuplikat = 1;
// let bonusLetDuplikat = 2; // akan error kalau di-uncomment

// Penjelasan bonus: Dalam program besar, kalau pakai var di dalam if/for, variabelnya bocor keluar blok dan bisa tanpa sengaja menimpa variabel lain yang namanya sama. Contoh nyata: ada loop for pakai var i, terus di dalam ada if yang juga pakai var i lagi, nilai i jadi ketuker dan loopnya error.