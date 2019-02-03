//Konversi Menit
function konversiMenit(menit) {
    if(menit >=1 && menit <=9){
        return '0:'+'0'+menit;
    } else if(menit >=10 && menit <=59){
        return '0:'+menit;
    } else if(menit >=60 && menit%60 <10){
        return Math.floor((menit/60))+':'+'0'+(menit%60);
    } else if(menit >=60 && menit%60 >=10){
        return Math.floor((menit/60))+':'+(menit%60);
    } // you can only write your code here!
}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00