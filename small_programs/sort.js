function sort(data) {
  const sorted = data.slice();
  let numberOfTimes = 0;

  for (let i = 0; i < (data.length - 1); i++) {

    for (let j = i + 1; j < data.length; j++) {
      numberOfTimes++;

      if (sorted[i] > sorted[j]) {
        const temp = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = temp;
      }
    }
  }

  return [sorted, numberOfTimes];
}

function generateInRange(lower, upper) {
  return lower + Math.floor(Math.random() * (upper - lower + 1));
}

function generateDataInRange(count, lower, upper) {
  const randomNumbers = [];
  for (let index = 0; index < count; index++) {
    const randomNumber = generateInRange(lower, upper);
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}

function benchmark(numberOfElements, lower = 0, upper = 100) {
  const data = generateDataInRange(numberOfElements, lower, upper);
  const [sorted, numberOfTimes] = sort(data);

  console.log('number of elements ', numberOfElements);
  console.log('lower upper bounds', lower, upper);
  const msg = `number of times loop ran: ${numberOfTimes}`
  console.log(msg);
  console.log('-'.repeat(msg.length));
}

const lowerBound = parseInt(Deno.args[1]) || 5;
const upperBound = parseInt(Deno.args[2]) || 10;
const numberOfElements = parseInt(Deno.args[0]) || 10;
benchmark(numberOfElements, lowerBound, upperBound);
