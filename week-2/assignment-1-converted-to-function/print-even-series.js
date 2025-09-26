// Do not rename startOfTheRange or endOfTheRange, use them as input for your program.
// While testing we will change their values.

const startOfTheRange = 0;
const endOfTheRange = 10;

// Print all the even numbers between startOfTheRange and endOfTheRange (both inclusive)
// For example, if startOfTheRange = 1 and endOfTheRange = 10, then the output should be
// 2
// 4
// 6
// 8
// 10

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

function printEven(start, end) {
  let actualStart = start % 2 ? start + 1 : start;
  let actualEnd = end;
  if (start > end) {
    actualStart = end;
    actualEnd = start;
  }
  for (let term = actualStart; term <= actualEnd; term += 2)
    console.log(term);
  console.log('\n');
}

function runTestForEvenSeries() {
  printEven(1, 10);
  printEven(2, 10);
  printEven(4, 40);
  printEven(3, 11);
  printEven(2, -10);
}
runTestForEvenSeries();
