const ALPHA_REPRESENTATION = {
  10: 'A',
  11: 'B',
  12: 'C',
  13: 'D',
  14: 'E',
  15: 'F',
};
const getRepresentation = (digit, radix) => {
  if (radix < 11 || digit < 10) {//for bases which can be represented with numeric digits
    return digit;
  }
  return ALPHA_REPRESENTATION[digit];
};

const convertBase = (number, radix) => {
  if (number === 0)
    return 0;
  const divisor = radix || 10;
  let unitShift = 1;

  let dividend = number;
  let representation = radix > 10 ? '' : 0; //initialValue based on the base

  while (dividend > 0) {
    const digit = dividend % divisor;
    dividend = Math.floor(dividend / divisor);

    const convertedDigit = getRepresentation(digit, radix);
    const isConvertedDigitString = typeof convertedDigit === 'string';
    const isRepresentationString = typeof representation === 'string';

    const digitRep = isConvertedDigitString && isRepresentationString;
    const d = isRepresentationString ? convertedDigit : convertedDigit * unitShift;
    unitShift *= 10;

    const digitToAdd = digitRep ? convertedDigit : d;

    representation = digitToAdd + representation;
  }

  return representation;
};

function test(fn, purpose, number, base, expected) {
  const actual = fn(number, base);
  const isWorking = actual === expected;
  const symbol = isWorking ? "✅" : "❌";
  const message = [`\t${symbol} ${purpose}\n`];
  if (!isWorking) {
    message.push(
      `\t |Inp: ${number} , ${base} \n`,
      `\t |OUT: ${actual} \n`,
      `\t |EXP: ${expected} \n`
    );
  }
  console.log(message.join(''));
}

function testAllTestCases() {
  test(convertBase, "base 2 when input ", 10, 2, 1010);
  test(convertBase, "base 2 when input ", 0, 2, 0);
  test(convertBase, "base 10 when input ", 0, 10, 0);
  test(convertBase, "base 16 when input ", 0, 16, 0);

  test(convertBase, "base 16 when input", 123, 16, '7B');
  test(convertBase, "alphaNum output for base 16 ", 246, 16, 'F6');
  test(convertBase, "alphaNum output for base 16 ", 10234324, 16, '9C29D4');
  test(convertBase, "alphaNum output for base 11 ", 111, 11, 'A1');
  test(convertBase, "alphaNum output for base 11 ", 13455, 11, 'A122');

}
testAllTestCases();