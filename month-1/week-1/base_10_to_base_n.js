function representBase(number, base) {
  if (base < 11) {
    return number;
  }
  const alphanumerics = 'ABCDEF';
  for (let index = 10; index < base; index++) {
    if (number === index) {
      return alphanumerics[index - 10];
    }
  }
  return number;
}

function convertBase(number, base) {

  let dividend = number;
  const divisor = base || 10;
  let nBaseRep = base > 10 ? '' : 0;
  let unitShift = 1;

  while (dividend > 0) {
    const remainder = dividend % divisor;

    dividend = (dividend - remainder) / divisor;

    const extractedDigit = representBase(remainder, base);
    const isRepString = typeof nBaseRep === 'string';
    const digitRep = typeof extractedDigit === 'string' && isRepString;
    const unitDigit = extractedDigit * unitShift;
    const d = isRepString ? extractedDigit : unitDigit;
    const digit = digitRep ? extractedDigit : d;

    nBaseRep = digit + nBaseRep;
    unitShift *= 10;
  }
  return nBaseRep - 0 || !nBaseRep ? nBaseRep - 0 : nBaseRep;
}

function testConvertBase(purpose, number, base, expected) {
  const actual = convertBase(number, base);
  const isWorking = actual === expected;
  const symbol = isWorking ? "✅" : "❌";
  let message = `\t${symbol} ${purpose}\n`;

  message += isWorking ? "" : `\t | Input    : ${number} , ${base} \n`;
  message += isWorking ? "" : `\t | Actual   : ${actual} \n`;
  message += isWorking ? "" : `\t | Expected : ${expected} \n`;

  console.log(message);
}

function testAllTestCases() {
  testConvertBase("check for base 2 when input is ", 10, 2, 1010);
  testConvertBase("check for base 2 when input is ", 0, 2, 0);
  testConvertBase("check for base 10 when input is ", 0, 10, 0);
  testConvertBase("check for base 16 when input is ", 0, 16, 0);

  testConvertBase("check for base 16 when input is ", 123, 16, '7B');
  testConvertBase("alphanumeric output for base 16 ", 246, 16, 'F6');
  testConvertBase("alphanumeric output for base 16 ", 10234324, 16, '9C29D4');
  testConvertBase("alphanumeric output for base 11 ", 111, 11, 'A1');
  testConvertBase("alphanumeric output for base 11 ", 13455, 11, 'A122');

}

testAllTestCases();

