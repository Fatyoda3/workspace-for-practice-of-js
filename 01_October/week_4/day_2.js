const makeBooleanArray = (size) => {
  return (new Int32Array(size));
}

const sieve = (bools) => {
  const length = bools.length;
  const primes = [];

  for (let prime = 2; prime < length; prime++) {

    if (!bools[prime]) {
      primes.push(prime);
      let multiple = prime * prime;

      while (multiple < length) {
        bools[multiple] = true;
        multiple += prime;
      }
    }
  }
  return primes;
}

const SIZE = 50;
const primes = sieve(makeBooleanArray(SIZE));
console.log(primes);