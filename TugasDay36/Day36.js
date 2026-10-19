// =====================================================
// Tugas Day 36: Kasir Warung dengan Scope, Hoisting, dan Closure
// Nama: Ahmad Yazid
// =====================================================

// =====================================================
// LANGKAH 1: Tebak Dulu, Baru Cek
// =====================================================

// --- Potongan A ---
// Tebakan saya SEBELUM menjalankan:
// console.log(nama) di dalam() -> "Dalam" karena scope paling dalam
// console.log(nama) di luar() -> "Luar" karena scope function luar
// console.log(nama) di global -> "Global"
// hitung(100) -> 85 (100 - 10 - 5)
// pesanBlok di luar blok -> ERROR ReferenceError karena let hanya hidup di blok
// i di luar for -> ERROR ReferenceError karena let di for hanya hidup di loop

const nama = "Global";

function luar() {
  const nama = "Luar";

  function dalam() {
    const nama = "Dalam";
    console.log(nama); // Hasil asli: Dalam
  }

  dalam();
  console.log(nama); // Hasil asli: Luar
}

luar();
console.log(nama); // Hasil asli: Global

const diskonGlobal = 10;

function hitung(harga) {
  const diskonLokal = 5;
  return harga - diskonGlobal - diskonLokal;
}

console.log(hitung(100)); // Hasil asli: 85

if (true) {
  let pesanBlok = "di dalam blok";
  console.log(pesanBlok); // Hasil asli: di dalam blok
}

for (let i = 0; i < 2; i++) {
  console.log("putaran", i); // Hasil asli: putaran 0, putaran 1
}

// Percobaan error 1:
// console.log(pesanBlok);
// Pesan error asli: ReferenceError: pesanBlok is not defined
// Penyebab: let di dalam if hanya bisa diakses di dalam blok itu saja.

// Percobaan error 2:
// console.log(i);
// Pesan error asli: ReferenceError: i is not defined
// Penyebab: let i di for loop hanya hidup selama loop berjalan.

// --- Potongan B ---
// Tebakan saya SEBELUM menjalankan:
// console.log(sapa()) -> "Halo!" karena function declaration di-hoist
// console.log(warna) pertama -> undefined karena var di-hoist tapi belum diisi
// console.log(warna) kedua -> "biru"

console.log(sapa()); // Hasil asli: Halo!

function sapa() {
  return "Halo!";
}

console.log(warna); // Hasil asli: undefined
var warna = "biru";
console.log(warna); // Hasil asli: biru

// Percobaan error 3:
// console.log(lokasi);
// const lokasi = "Sleman";
// Pesan error asli: ReferenceError: Cannot access 'lokasi' before initialization

// Percobaan error 4:
// console.log(salam());
// const salam = function () { return "Hai"; };
// Pesan error asli: ReferenceError: Cannot access 'salam' before initialization

// --- Potongan C ---
// Tebakan saya SEBELUM menjalankan:
// penghitungA() pertama -> 1
// penghitungA() kedua -> 2
// penghitungA() ketiga -> 3
// penghitungB() pertama -> 1
// penghitungA() keempat -> 4

function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    return hitungan;
  };
}

const penghitungA = buatPenghitung();
const penghitungB = buatPenghitung();

console.log(penghitungA()); // Hasil asli: 1
console.log(penghitungA()); // Hasil asli: 2
console.log(penghitungA()); // Hasil asli: 3
console.log(penghitungB()); // Hasil asli: 1
console.log(penghitungA()); // Hasil asli: 4

// Jawaban Pertanyaan Langkah 1:
// 1. Tiga console.log(nama) beda karena JavaScript memakai lexical scope,
//    jadi nama dicari dari scope paling dalam dulu. hitung(100) bisa pakai
//    diskonGlobal karena function bisa mengakses scope di luar dirinya.
//    pesanBlok dan i error karena let/const itu block-scoped.
// 2. sapa() bisa dipanggil duluan karena function declaration di-hoist lengkap.
//    var warna jadi undefined karena deklarasinya di-hoist tapi pengisiannya tidak.
//    lokasi dan salam error karena const/let tidak di-hoist, masuk TDZ.
// 3. penghitungA terus bertambah karena inner function masih mengingat variabel hitungan
//    lewat closure. penghitungB mulai dari 1 lagi karena bikin variabel hitungan yang baru.

// =====================================================
// LANGKAH 2: Perbaiki 8 Kesalahan
// =====================================================

// Cek stok. Seharusnya tercetak: Stok aman
// FIX: pesanStok harus dideklarasikan di luar blok
let pesanStok;
const stok = 10;
if (stok > 5) {
  pesanStok = "Stok aman";
}
console.log(pesanStok);

// Potongan 10%. Seharusnya tercetak: 45000
// FIX: hasil return harus ditangkap ke variabel
function hitungPotongan(harga) {
  const potongan = harga * 0.1;
  return harga - potongan;
}
const hasilPotongan = hitungPotongan(50000);
console.log(hasilPotongan);

// Sambutan. Seharusnya tercetak: Selamat datang di Kedai Senja
// FIX: ubah jadi function declaration supaya bisa dipanggil sebelum definisi
console.log(sambutan());
function sambutan() {
  return "Selamat datang di Kedai Senja";
}

// Kota. Seharusnya tercetak: Yogyakarta
// FIX: console.log harus sesudah deklarasi let
let kota = "Yogyakarta";
console.log(kota);

// Total awal 100000. Diskon 90000 hanya dipakai di dalam blok.
// Seharusnya setelah blok, total tetap: 100000
// FIX: ganti var jadi let di dalam blok
var total = 100000;
if (true) {
  let total = 90000;
}
console.log(total);

// Saldo kas. Seharusnya setelah tambahKas(50000): 150000
// FIX: hapus let di dalam function karena itu shadowing
let saldoKas = 100000;
function tambahKas(jumlah) {
  saldoKas += jumlah;
}
tambahKas(50000);
console.log(saldoKas);

// Nomor antrean. Seharusnya tercetak: 1 2 3
// FIX: let nomor harus dipindah ke luar inner function
function buatAntrean() {
  let nomor = 0;
  return function () {
    nomor++;
    return nomor;
  };
}
const ambilNomor = buatAntrean();
console.log(ambilNomor(), ambilNomor(), ambilNomor());

// Dompet. Seharusnya setelah belanja(30000), cekSaldo() mengembalikan: 70000
// FIX: ganti this.saldo jadi saldo saja
function buatDompet(saldoAwal) {
  let saldo = saldoAwal;
  return {
    belanja(jumlah) {
      saldo -= jumlah;
    },
    cekSaldo() {
      return saldo;
    },
  };
}
const dompet = buatDompet(100000);
dompet.belanja(30000);
console.log(dompet.cekSaldo());

// Jawaban Pertanyaan Langkah 2 ada di komentar kode di atas, intinya:
// - Error di console: pesanStok, kota, sambutan, potongan
// - Tidak error tapi salah hasil: total, saldoKas, nomor antrean, cekSaldo
// - let saldoKas = 0 di dalam tambahKas itu shadowing
// - this.saldo undefined karena saldo bukan property, dia variabel closure

// =====================================================
// LANGKAH 3: Bikin Kasir Sendiri
// =====================================================

const NAMA_WARUNG = "Kedai Senja";
const TARIF_PAJAK = 0.11;

cetakJudul();

function cetakJudul() {
  console.log(NAMA_WARUNG.toUpperCase());
}

function buatKasir(namaKasir, modalAwal) {
  let saldoKas = modalAwal;
  let jumlahTransaksi = 0;
  let riwayat = [];

  return {
    catatPenjualan(namaMenu, harga, jumlah) {
      const subtotal = harga * jumlah;
      const pajak = subtotal * TARIF_PAJAK;
      const total = subtotal + pajak;
      saldoKas += total;
      jumlahTransaksi++;
      riwayat.push({ namaMenu, jumlah, total });
      return total;
    },
    ambilKas(jumlah) {
      if (jumlah > saldoKas) {
        return false;
      }
      saldoKas -= jumlah;
      return true;
    },
    cekSaldo() {
      return saldoKas;
    },
    lihatRiwayat() {
      return riwayat.slice();
    },
    ringkasan() {
      console.log(`Kasir: ${namaKasir}, Transaksi: ${jumlahTransaksi}, Saldo: ${saldoKas}`);
    },
  };
}

const kasirPagi = buatKasir("Rina", 100000);
const kasirMalam = buatKasir("Dodi", 50000);

kasirPagi.catatPenjualan("Nasi Ayam", 15000, 2);
kasirPagi.catatPenjualan("Es Teh", 5000, 3);
kasirPagi.catatPenjualan("Mie Goreng", 12000, 1);

kasirMalam.catatPenjualan("Soto", 13000, 2);
kasirMalam.catatPenjualan("Kopi", 8000, 2);

console.log("ambilKas pagi 20000 berhasil?", kasirPagi.ambilKas(20000));
console.log("ambilKas pagi 9999 berhasil?", kasirPagi.ambilKas(9999));

kasirPagi.ringkasan();
kasirMalam.ringkasan();

console.log("Coba akses langsung kasirPagi.saldoKas:", kasirPagi.saldoKas);
// Hasil: undefined, karena saldoKas privat via closure
kasirPagi.saldoKas = 999;
console.log("Setelah coba isi 999, cekSaldo():", kasirPagi.cekSaldo());
// Hasil: saldo tetap, karena yang diubah cuma property baru

const salinanRiwayat = kasirPagi.lihatRiwayat();
salinanRiwayat.push({ namaMenu: "Palsu", jumlah: 99, total: 0 });
console.log("Panjang salinan setelah di-push:", salinanRiwayat.length);
console.log("Panjang riwayat asli setelah salinan diubah:", kasirPagi.lihatRiwayat().length);
// Hasil: panjang asli tetap, karena pakai slice

function buatPenghitungDiskon(persen) {
  return (harga) => harga - (harga * persen / 100);
}
const diskon10 = buatPenghitungDiskon(10);
const diskon25 = buatPenghitungDiskon(25);
console.log("Harga 80000 diskon 10%:", diskon10(80000));
console.log("Harga 80000 diskon 25%:", diskon25(80000));

const namaMenuGlobal = "Nasi Global";
function tesShadowing() {
  const namaMenuGlobal = "Nasi Lokal di dalam function";
  console.log("Di dalam function:", namaMenuGlobal);
}
tesShadowing();
console.log("Di global:", namaMenuGlobal);

const fungsiLet = [];
for (let i = 0; i < 3; i++) {
  fungsiLet.push(() => i);
}
console.log(fungsiLet[0](), fungsiLet[1](), fungsiLet[2]());

const fungsiVar = [];
for (var j = 0; j < 3; j++) {
  fungsiVar.push(() => j);
}
console.log(fungsiVar[0](), fungsiVar[1](), fungsiVar[2]());