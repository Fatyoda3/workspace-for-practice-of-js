// prime code
const rangeForSearch = 10000;

let divisor = 2;
let primeCandidate = 2;

while (primeCandidate < rangeForSearch) {
  if ((primeCandidate % divisor) === 0) {
    
    if (primeCandidate === divisor) {
      console.log('prime found ', primeCandidate);
    }

    primeCandidate = primeCandidate + 1;
    divisor = 2;

  } else {
    divisor = divisor + 1;
  }
}
