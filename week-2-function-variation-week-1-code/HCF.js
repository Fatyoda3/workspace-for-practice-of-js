// Do not rename a or b, use them as input for your program.
// While testing we will change their values.

const a = 32;
const b = 64;

// Print the HCF of a and b
// Printing more than one output or printing anything other than HCF might will be consider as error.

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

function getHCF(firstNumber, secondNumber) {
  let a = firstNumber;
  let b = secondNumber;

  while (a && b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}

function testHCF() {

  console.log(getHCF(10, 100));
  console.log(getHCF(100, 100));
  console.log(getHCF(50, 100));
  console.log(getHCF(20, 100));
  console.log(getHCF(40, 100));
}

testHCF();
