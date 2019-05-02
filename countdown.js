var countdownGenerator = function (x) {
  /* your code here */
//takes in time in seconds
// each time countdown is called, x--
  // var timer = x;
  // var calltimes = 0;
  return function counter(){
    if (x > 0){
      console.log("T-minus "+x+"...");
      x--;
    }
    else if(x === 0){
      console.log("Blast Off!");
      x--;
    }
    else if(x < 0){
      console.log("Rockerts already gone, bub!");
    }
    // calltimes++;
    // console.log(calltimes);
  };

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!