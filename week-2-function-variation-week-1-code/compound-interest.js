// Do not rename p, t or r, use them as input for your program.
// While testing we will change their values.

const p = 100;
const t = 2;
const r = 10;

// Print the compound interest.
// Do not use compound interest formula to calculate the compound interest.
// Use simple interest formula and a loop to calculate the compound interest.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

function simpleInterest(amount, r) {
  return amount * (r / 100);
}

function getCompound(x, t, r) {
  let amount = x;
  for (let currentYear = 0; currentYear < t; currentYear++) {
    amount = amount + simpleInterest(amount, r);
  }
  return amount - x;
}

function tesCompoundInterest(amount, t, r, expectedValue) {
  const valueWeGot = getCompound(amount, t, r);
  const isWorking = valueWeGot === expectedValue ? '✅' : '❌'
  const message = "value we expected " + expectedValue + " and we got " + valueWeGot + ' ' + isWorking;
  console.log(message);
}

function main() {
  tesCompoundInterest(p, t, r, 21);
  tesCompoundInterest(100, 3, 10, 33.099999999999994);
  tesCompoundInterest(p, 4, 10, 46.41);
  tesCompoundInterest(p, 5, 10, 61.05099999999999);
  tesCompoundInterest(p, 6, 10, 77.15609999999998);
}

main();
