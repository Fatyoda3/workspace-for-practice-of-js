const a = performance.now()

const m = 10e6;
function generatePrime(highestCount) {
  const pool = [4];
  const prime = [2];

  for (let index = 3; index < highestCount; index++) {
    // let isPrime = true;

    if (pool.includes(index)) {
      while (pool.includes(index)) {
        let ind = pool.indexOf(index);
        pool[ind] += prime[ind];
      }
    } else {
      prime.push(index);
      pool.push(index * index);
    }
    // for (let poolIndex = 0; poolIndex < pool.length; poolIndex++) {

    //   if (pool[poolIndex] === index) {
    //     pool[poolIndex] += prime[poolIndex];
    //     isPrime = false;
    //   }
    // }

    // if (isPrime) {
    // }
  }
  return prime;
}

const primes = generatePrime(m)
for (const prim of primes) {
  console.log(prim);
}
// /* console.log */(generatePrime(m)/* .pop() */);
const b = performance.now();

console.log((b - a) / 1000);
