//Berlatih Perulangan di JavaScript
//1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA');
i = 2;
while (i <= 20) {
    console.log(i + ' - I love coding');
    i=i+2;
  }
console.log('LOOPING KEDUA');
i=i-2;
while (i > 0) {
    console.log(i + ' - I will become fullstack developer');
    i=i-2;
}
//2. Melakukan Looping Menggunakan For
console.log(' ');       //pemisah
console.log('LOOPING PERTAMA');
for (i = 1; i <= 20; i++) {
    console.log( i + ' - I love coding');
    } 
  console.log('LOOPING KEDUA');
for (i = 20; i > 0; i--) {
    console.log( i + ' - I will become fullstack developer');
    } 
// 3. Angka Ganjil dan Genap
console.log(' ');                  //pemisah
counterPertama = 1;
    while (counterPertama <= 100) {
        if (counterPertama % 2 === 0) {
            console.log('GENAP');
        }else {
            console.log('GANJIL');
        }
        counterPertama=counterPertama+1;
    }
console.log(' ');                   //pemisah
counterKedua = 1;
    while (counterKedua <= 100) {
        if (counterKedua % 3 === 0) {
            console.log(counterKedua + 'KELIPATAN 3');
        }else {
            console.log('""');
        }
        counterKedua=counterKedua+2;
        }
console.log(' ');                   //pemisah
counterKetiga = 1;
    while (counterKetiga <= 100) {
        if (counterKetiga % 6 === 0) {
            console.log(counterKetiga + 'KELIPATAN 6');
        }else {
            console.log('""');
        }
        counterKetiga=counterKetiga+5;
        }
console.log('');                   //pemisah
counterKeempat = 1;
    while (counterKeempat <= 100) {
        if (counterKeempat % 10 === 0) {
            console.log(counterKeempat + 'KELIPATAN 10');
        }else {
            console.log('""');
        }
        counterKeempat=counterKeempat+9;
        }
//1. Melakukan Looping Menggunakan While
// OUTPUT
// LOOPING PERTAMA
// 2 - I love coding
// 4 - I love coding
// 6 - I love coding
// 8 - I love coding
// 10 - I love coding
// 12 - I love coding
// 14 - I love coding
// 16 - I love coding
// 18 - I love coding
// 20 - I love coding
// LOOPING KEDUA
// 20 - I will become fullstack developer
// 18 - I will become fullstack developer
// 16 - I will become fullstack developer
// 14 - I will become fullstack developer
// 12 - I will become fullstack developer
// 10 - I will become fullstack developer
// 8 - I will become fullstack developer
// 6 - I will become fullstack developer
// 4 - I will become fullstack developer
// 2 - I will become fullstack developer

//2. Melakukan Looping Menggunakan For
// OUTPUT
// LOOPING PERTAMA
// 1 - I love coding
// 2 - I love coding
// 3 - I love coding
// 4 - I love coding
// 5 - I love coding 
// 6 - I love coding
// 7 - I love coding
// 8 - I love coding
// 9 - I love coding
// 10 - I love coding
// 11 - I love coding
// 12 - I love coding 
// 13 - I love coding
// 14 - I love coding
// 15 - I love coding
// 16 - I love coding
// 17 - I love coding
// 18 - I love coding
// 19 - I love coding
// 20 - I love coding
// LOOPING KEDUA
// 20 - I will become fullstack developer
// 19 - I will become fullstack developer
// 18 - I will become fullstack developer
// 17 - I will become fullstack developer
// 16 - I will become fullstack developer
// 15 - I will become fullstack developer
// 14 - I will become fullstack developer
// 13 - I will become fullstack developer
// 12 - I will become fullstack developer
// 11 - I will become fullstack developer
// 10 - I will become fullstack developer
// 9 - I will become fullstack developer
// 8 - I will become fullstack developer
// 7 - I will become fullstack developer
// 6 - I will become fullstack developer
// 5 - I will become fullstack developer
// 4 - I will become fullstack developer
// 3 - I will become fullstack developer
// 2 - I will become fullstack developer
// 1 - I will become fullstack developer

// 3. Angka Ganjil dan Genap
//contoh - ganjil genap
//counter sekarang = 1,
//output
// "GANJIL"
//counter sekarang = 2,
//output
// "GENAP"
// dan seterusnya :)

//contoh - untuk pertambahan counter 2
//counter sekarang = 1, 
//output
// "" 
//counter sekarang = 3, 
//output
// "3 KELIPATAN 3" 
// dan seterusnya :)

//contoh - untuk pertambahan counter 5
//counter sekarang = 1, 
//output
// "" 
//counter sekarang = 6, 
//output
// "6 KELIPATAN 6" 
// dan seterusnya :)

//contoh - untuk pertambahan counter 9
//counter sekarang = 1, 
//output
// "" 
//counter sekarang = 10, 
//output
// "10 KELIPATAN 10" 
// dan seterusnya :)