const a = performance.now()
function generatePrime(highestCount) {
  const pool = new Int32Array(highestCount);
  pool[0] = 4;
  const prime = new Int32Array(highestCount);
  prime[0] = 2;

  let pIndex = 1;
  let prIndex = 1;

  for (let index = 3; index < highestCount; index++) {
    let isPrime = true;

    for (let poolIndex = 0; poolIndex < pool.length; poolIndex++) {

      if (pool[poolIndex] === index) {
        pool[poolIndex] += prime[poolIndex];
        isPrime = false;
      }
    }

    if (isPrime) {
      prime[prIndex++] = (index);
      pool[pIndex++] = (index * index);
    }
  }
  console.log(prime[pIndex - 1]);
}

generatePrime(10e4);
const b = performance.now()

console.log((b - a) / 1000)
