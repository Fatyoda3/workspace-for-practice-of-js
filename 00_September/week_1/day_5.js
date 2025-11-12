const representBase = (number, base) => {
  if (base < 11) {//for bases which can be represented with digits
    return number;
  }

  const alphas = 'ABCDEF';

  for (let index = 10; index < base; index++) {

    if (number === index) {
      return alphas[index - 10];
    }
  }

  return number;
}

const convertBase = (number, base) => {

  const divisor = base || 10;
  let unitShift = 1;

  let dividend = number;
  let converted = base > 10 ? '' : 0; //initialValue based on the base 
  while (dividend > 0) {
    const remainder = dividend % divisor;

    dividend = (dividend - remainder) / divisor;

    const convertedDigit = representBase(remainder, base);
    const isRepString = typeof converted === 'string';
    const digitRep = typeof convertedDigit === 'string' && isRepString;
    const unitDigit = convertedDigit * unitShift;
    const d = isRepString ? convertedDigit : unitDigit;
    unitShift *= 10;
    const digitToAdd = digitRep ? convertedDigit : d;

    converted = digitToAdd + converted;
  }
  return converted - 0 || !converted ? converted - 0 : converted;
}

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

