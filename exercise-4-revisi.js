//Menggunakan Switch-Case
var tanggal = 21 ; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 1 ; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1945 ; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
//menyimpan beberapa variabel untuk mencetak hasil
cetakTanggal = 99;
cetakBulan = '?????';
cetakTahun = 9999;
//validasi range tanggal (belum terlalu bagus karena hanya membatasi 1-31)
if (tanggal >= 1 && tanggal <= 31) {
    cetakTanggal = tanggal ;
}else {
    cetakTanggal = 0;
}
//validasi dan simpan bulan ke cetakBulan sesuai input
switch (bulan) {
    case 1:
        cetakBulan = 'Januari';
        break;
    case 2:
    cetakBulan = 'Februari';
        break;
    case 3:
    cetakBulan = 'Maret';
        break;
    case 4:
        cetakBulan = 'April';
        break;
    case 5:
        cetakBulan = 'Mei';
        break;
    case 6:
    cetakBulan = 'Juni';
        break;
    case 7:
    cetakBulan = 'Juli';
        break;
    case 8:
        cetakBulan = 'Agustus';
        break;
    case 9:
        cetakBulan = 'September';
        break;
    case 10:
    cetakBulan = 'Oktober';
        break;
    case 11:
    cetakBulan = 'November';
        break;
    case 12:
        cetakBulan = 'Desember';
        break;
    default:
       console.log('Bulan tidak didefinisikan dengan benar!');
       break;
}
//validasi range tahun
if (tahun >= 1900 && tahun <= 2200) {
    cetakTahun = tahun ;
}else {
    cetakTahun = 0;
}
if (cetakTahun === tahun && cetakTanggal === tanggal){
console.log(cetakTanggal+' '+cetakBulan+' '+cetakTahun);
}

// soal
// membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.
// Gunakan switch case untuk kasus ini!
// Contoh:
// var hari = 21; var bulan = 1; var tahun = 1945;
// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';