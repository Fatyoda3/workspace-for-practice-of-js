// Do not rename n, use it as input for your program.
// While testing we will change their values.

const n = 0;
// print factorial of n.
// Do not print anything else. Printing more than one output or printing anything other than factorial might will be consider as error.

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

function factorial(n) {
  let product = 1;
  for (let currentN = n; currentN > 1; currentN--)
    product = product * currentN;

  return product;
}

function testFactorial(x, expectedValue) {
  const emoji = factorial(x) === expectedValue ? '✅' : '❌';
  const message = emoji === '✅' ? 'it works' : 'it fails';
  console.log(message, emoji, factorial(x), ':', expectedValue);
}

testFactorial(5, 120);
testFactorial(6, 720);
testFactorial(4, 24);
testFactorial(2, 2);
testFactorial(1, 1);
testFactorial(0, 1);
