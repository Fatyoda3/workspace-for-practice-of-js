// prime code
const isDivisible = (dividend, divisor) => (dividend % divisor) === 0;
const range = 100;

let divisor = 2;
let nextPrime = 3;

while (nextPrime < range) {
  let delta = 1;

  if (isDivisible(nextPrime, divisor)) {
    if (nextPrime === divisor) {
      console.log('prime found:', nextPrime);
    }

    nextPrime += 2;
    divisor = 2;
    delta = 0;
  }

  divisor += delta;

}