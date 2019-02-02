//Perulangan - Play with Asterisks
var rows1 = 5; // input the number of rows
for (rows1 = rows1; rows1 > 0; rows1--) {
    console.log('*');
    } 
// do loops to display asterisks in the console.
console.log(' ');

var rows2 =5; // input the number of rows
for(var j=0; j < rows2; j++){
    var rowLine = '';
    for(var i=0; i < rows2; i++){
          rowLine = rowLine + '*';         
    }
    console.log(rowLine)
}
// do loops to display asterisks in the console.
console.log(' ');

rows3 = 5; // input the number of rows
var rowLiner = '';
for(var i=0; i < rows3; i++){
    rowLiner = rowLiner + '*';
    console.log(rowLiner)     
}
// do loops to display asterisks in the console.

// 1. Menyusun Barisan Bintang
// Output
// jika rows1 = 5

// *
// *
// *
// *
// *

// 2. Menyusun Barisan Bintang Dengan Nested Looping
// Output
// jika rows2 = 5

// *****
// *****
// *****
// *****
// *****

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
// Output
// jika rows3 = 5

// *
// **
// ***
// ****
// *****
