// Do not rename a, use it as input for your program.
// While testing we will change their values.
// n will be a natural number including 0.

const a = 0;

// Print the binary representation of a
// If a = 12, then the output should be
// 0
// 0
// 1
// 1

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

function decimalToBinary(decimalNum) {
  if (decimalNum <= 0) {
    return decimalNum + '';
  }

  let str = '';

  while (decimalNum > 0) {
    const remainder = decimalNum % 2;
    decimalNum = (decimalNum - remainder) / 2;
    str = str + remainder + '\n';
  }
  return str;
}

function testCases() {
  console.log(decimalToBinary(12));
  console.log(decimalToBinary(8));
  console.log(decimalToBinary(4));
  console.log(decimalToBinary(0));
  console.log(decimalToBinary(-1));
}

function main() {
  testCases();

}

main();
