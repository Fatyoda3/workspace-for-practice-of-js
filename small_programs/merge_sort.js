let numberOfTimes = 0;
function sort(list, lower, upper) {
  if (lower === upper) {
    return [list[lower]];
  }

  const mid = Math.floor((lower + upper) / 2);

  return merge(sort(list, lower, mid), sort(list, mid + 1, upper));
}

function merge(left = [], right = []) {
  let l = 0;
  let r = 0;

  const sorted = [];

  while (l < left.length && r < right.length) {
    numberOfTimes++;
    if (left[l] > right[r]) {
      sorted.push(right[r]);
      r++;
    } else {
      sorted.push(left[l]);
      l++;
    }
  }
  return sorted.concat(left.slice(l), right.slice(r));
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
  const a = performance.now()
  const data = generateDataInRange(numberOfElements, lower, upper);
  const sorted = sort(data, 0, data.length - 1);

  console.log(sorted.slice(-5));

  console.log('number of elements ', numberOfElements);
  console.log('lower upper bounds', lower, upper);
  const msg = `number of times loop ran: ${numberOfTimes}`

  console.log(msg);

  console.log('-'.repeat(msg.length));

  console.log(`time in ms ${((performance.now() - a) / 1000).toFixed(3)}`);
}
const lowerBound = parseInt(Deno.args[1]) || 5;
const upperBound = parseInt(Deno.args[2]) || 10;
const numberOfElements = parseInt(Deno.args[0]) || 10;
benchmark(numberOfElements, lowerBound, upperBound);
