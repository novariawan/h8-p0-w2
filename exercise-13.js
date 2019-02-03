//Logic Challenge - X dan O
function xo(str) {
    var counter1 = 0;
    var counter2 = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i]==='x'){
            counter1++;
            
        } else if(str[i]==='o'){
            counter2++;
            
        }
    }
    if(counter1===counter2){
        return true;
    } else {
        return false;
    }
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
