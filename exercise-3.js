//Menggunakan If Else
var nama = 'Zero';  // variabel nama              
var peran = 'penyIHIR';     // variabel peran

var peranValid = false;             //buat variabel PeranValid untuk mempermudah validasi peran
pemeran = peran.toLowerCase();       //buat variabel peran menjadi huruf kecil agar nanti input untuk peran tidak case sensitive
var tampilanPeran = ', Pilih peranmu untuk memulai game!';      //set nilai default untuk tampilan peran
if (pemeran === 'ksatria') {       
    peranValid = true;
    tampilanPeran = ', kamu dapat menyerang dengan senjatamu!';
    peran = 'Ksatria';
} else if (pemeran === 'tabib') {
    peranValid = true;
    tampilanPeran = ', kamu akan membantu temanmu yang terluka.';
    peran = 'Tabib';
} else if (pemeran === 'penyihir') {
    peranValid = true;
    tampilanPeran = ', ciptakan keajaiban yang membantu kemenanganmu!';
    peran = 'Penyihir';
} else {
    peranValid = false;
    peran = '';
    tampilanPeran = ', Pilih peranmu untuk memulai game!';
}
//di atas adalah serangkaian perintah untuk validasi peran dan untuk mempermudah tampilan output
//di bawah adalah serangkaian perintah utama untuk validasi nama dan menampilkan hasilnya ke layar
if (nama === '') {
    peran = '';
    console.log('Nama harus diisi!');
}
else if ( peranValid === true ) {
    console.log('Selamat datang di Dunia Proxytia, ' + nama + '.' );
    console.log('Halo '+ peran + ' ' + nama + '' + tampilanPeran );
}
else if ( nama !== '' ) {
    console.log('Halo ' + nama, tampilanPeran);
}

//console.log(nama , peran); //testing for variable stored
//console.log(peranValid , tampilanPeran); //testing for variable stored

//soal

// Output untuk Input nama = '' dan peran = ''
//"Nama harus diisi!"

//Output untuk Input nama = 'Mikael' dan peran = ''
//"Halo Mikael, Pilih peranmu untuk memulai game!"

//Output untuk Input nama = 'Nina' dan peran 'Ksatria'
//"Selamat datang di Dunia Proxytia, Nina"
//"Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

//Output untuk Input nama = 'Danu' dan peran 'Tabib'
//"Selamat datang di Dunia Proxytia, Danu"
//"Halo Tabib Danu, kamu akan membantu temanmu yang terluka."

//Output untuk Input nama = 'Zero' dan peran 'Penyihir'
//"Selamat datang di Dunia Proxytia, Zero"
//"Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"