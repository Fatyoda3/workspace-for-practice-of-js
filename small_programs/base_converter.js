const getRepresentation = (number, radix) => {
  if (radix < 11) {//for bases which can be represented with digits
    return number;
  }

  const alphas = 'ABCDEF';

  for (let index = 0; index < radix; index++) {

    if ((number - 10) === index) {
      return alphas[index];
    }
  }

  return number;
};

const convertBase = (number, radix) => {

  const divisor = radix || 10;
  let unitShift = 1;

  let dividend = number;
  let representation = radix > 10 ? '' : 0; //initialValue based on the base

  while (dividend > 0) {
    const remainder = dividend % divisor;
    dividend = Math.floor(dividend / divisor);

    const digitRepresentation = getRepresentation(remainder, radix);
    const isConvertedString = typeof digitRepresentation === 'string';
    const isRepresentationString = typeof representation === 'string';

    const digitRep = isConvertedString && isRepresentationString;
    const d = isRepresentationString ? digitRepresentation : digitRepresentation * unitShift;
    unitShift *= 10;

    const digitToAdd = digitRep ? digitRepresentation : d;

    representation = digitToAdd + representation;
  }
  return representation ? representation : representation - 0;
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

