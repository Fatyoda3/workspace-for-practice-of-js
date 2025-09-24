// Do not rename a use it as input for your program.
// While testing we will change its values.

const a = 9474;

// Print true if a is an armstrong number otherwise print false
// A number is called Armstrong number if it is equal to the sum of the cubes of its own digits.
// For example: 153 is an Armstrong number since 153 = 1^3 + 5^3 + 3^3.
// Printing more than one output or printing anything other than armstrong or not armstrong might will be consider as error.

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
function getNumberOfDigits(number) {
  let digitCount = 0;
  while (number) {
    const remainder = (number % 10);
    number = (number - remainder) / 10;
    digitCount = digitCount + 1;
  }
  return digitCount;
}
function isArmstrong(armstrongCandidate) {
  
  let x = armstrongCandidate;
  const power = getNumberOfDigits(x);
  let sumOfDigitCubes = 0;

  for (let term = 0; term < power; term++) {
    
    const remainder = (x % 10);
    
    sumOfDigitCubes = sumOfDigitCubes + remainder ** power;
    
    x = (x - remainder) / 10;
  }
  return sumOfDigitCubes === armstrongCandidate;
}
function main() {
  console.log(isArmstrong(1));
  console.log(isArmstrong(2));
  console.log(isArmstrong(3));
  console.log(isArmstrong(4));
  console.log(isArmstrong(153));
  console.log(isArmstrong(9474));
}

main()
