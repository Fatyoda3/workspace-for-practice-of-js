function decode(data) {
  if (data[0] === 'i') {
    return +data.slice(1, data.length - 1);
  }



  if (data[0] === 'l' && data[data.length - 1] === 'e') {

    const list = [];

    let i = '';
    let part = '';

    let isString = false;

    for (let index = 1; index < data.length - 1; index++) {
      if (data[index] === ':') {
        isString = true;
      }

      if (i === 'i') {
        part += data[index];
      }

      if (data[index] === 'i') {
        i = 'i';
      }

      if (data[index] === 'e') {
        i = '';

        list.push(parseInt(part));

        part = '';
      }

    }
    return list;

  }

  return decodeString(data);
}

function decodeString(data = '') {
  const colonIndex = data.indexOf(':');

  let lenParts = data.slice(colonIndex + 1, data.length);
  console.log('here it is ');
  return lenParts;

}
function composeResult(description, result, parameters) {
  const resultSymbol = result ? "✅" : "❌";
  let resultString = `Test ${resultSymbol} `;
  resultString += ` ${description}`;
  if (resultSymbol === "❌") {
    resultString += `\n\t Input    = ${parameters[0]}`;
    resultString += `\n\t Output   = ${parameters[1]}`;
    resultString += `\n\t Expected = ${parameters[2]}`;
  }
  return resultString;
}

function testDecoder(description, data, expected) {
  const result = decode(data);
  const isCorrect = (result.toString() === expected.toString());
  const testParameters = [data, result, expected];
  const resultString = composeResult(description, isCorrect, testParameters);
  console.log(resultString);
}

function testStringDecoding() {
  console.log(("Testing String Decoding"));
  testDecoder("a", "1:a", "a");
  testDecoder("hello", "5:hello", "hello");
  testDecoder("Empty string", "0:", "");
  testDecoder("long", "20:" + '*'.repeat(20), "*".repeat(20));
  console.log();
}

function testIntegerDecoding() {
  console.log("Testing Integer Decoding");
  testDecoder("numbers 1", "i1e", 1);
  testDecoder("numbers 12", "i12e", 12);
  testDecoder("negative numbers -12", "i-12e", -12);
  testDecoder("0", "i0e", 0);
  testDecoder("10000", "i10000e", 10E3);
  testDecoder("10e20", "i10e+20e", 10E20);
  testDecoder("10e-12", "i10e-12e", 10e-12);
  testDecoder("PI value", "i3.14e", 3.14);
  console.log();
}

function testListDecoding() {
  console.log(("Testing List Decoding"));
  // testDecoder("empty list", "le", []);
  // testDecoder("string list", "l2:hie", ["hi"]);
  // testDecoder("strings list", "l2:hi5:helloe", ["hi", "hello"]);
  testDecoder("number list", "li1ee", [1]);
  testDecoder("numbers list", "li1ei2ee", [1, 2]);

  console.log();
}

function testDecoding() {
  testIntegerDecoding();
  testStringDecoding();
  testListDecoding();
}

function main() {
  testDecoding();
}

main();