// prime code
const rangeForSearch = 10000;

let divisor = 2;
let primeCandidate = 2;

while (primeCandidate < rangeForSearch) {
  // if (i === div) { i = i + 1; } 
  if ((primeCandidate % divisor) === 0) {
    if (primeCandidate === divisor) {
      console.log('prime found ', primeCandidate);
    }
    /*  
    else {
       // console.log("composite found", i);
    }  
    */
    primeCandidate = primeCandidate + 1;

    divisor = 2;

  } else {
    divisor = divisor + 1;
  }
  // console.log(i);
}
