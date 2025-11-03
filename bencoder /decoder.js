function decodeString(input = '', start = 0) {
  const colonIndex = input.indexOf(":", start);

  const length = parseInt(input.slice(start, colonIndex));

  const end = colonIndex + 1 + length;

  const decoded = input.slice(colonIndex + 1, end);

  return [decoded, end];
}

function decodeInteger(input = '', start = 0) {

  const end = input.indexOf("e", start);

  const decoded = parseInt(input.slice(start + 1, end));

  return [decoded, end + 1];
}

function decodeList(input, start) {
  const decoded = [];
  let index = start + 1;

  while (input[index] !== "e") {

    const [element, nextIndex] = callDecodeFor(input[index], input, index);
    decoded.push(element);

    index = nextIndex;
  }

  return [decoded, index + 1];
}

function callDecodeFor(firstElement, input, start = 0) {
  if (firstElement === "i") {
    return decodeInteger(input, start);
  }

  if (firstElement === "l") {
    return decodeList(input, start);
  }

  if (!isNaN(parseInt(firstElement))) {
    return decodeString(input, start);
  }
}

function decode(inputValue) {
  const [result] = callDecodeFor(inputValue[0], inputValue, 0);
  return result;
}

function formatText(inputs, actualOutput, expectedOutput) {
  return `
  Inputs  : ${inputs}
  Actual  : ${actualOutput}
  Expected: ${expectedOutput}
  ----`;
}

function testCode(description, inputValue, expectedOutput) {
  const actualOutput = decode(inputValue);
  const isEqual = actualOutput.toString() === expectedOutput.toString();
  const symbol = isEqual ? "✅" : "❌";

  const headline = `${symbol} ${description}`;
  console.log(headline);

  if (!isEqual) {
    const input = `[ ${inputValue}  ]`;
    const details = formatText(input, actualOutput, expectedOutput);
    console.log(details);
  }
}

function heading(text) {
  console.log(text);
  console.log("-".repeat(text.length));
}

function testForInteger() {
  heading("TEST FOR INTEGERS");
  testCode("Digit in Integer : positive, 1", "i1e", 1);
  testCode("Digit in Integer : positive, 2", "i12e", 12);
  testCode("Digit in Integer : positive, > 2", "i12345e", 12345);
  testCode("Digit in Integer : negative, 1", "i-1e", -1);
  testCode("Digit in Integer : negative, 2", "i-12e", -12);
  testCode("Digit in Integer : negative, > 2", "i-1234e", -1234);
  console.log('\n');
}
function testForString() {
  heading("TEST FOR BYTE STRINGS");
  testCode("Char in string : 0", "0:", "");
  testCode("Char in string : 1", "1:a", "a");
  testCode("Char in string : 2", "2:ab", "ab");
  testCode("Char in string : > 2", "4:abcd", "abcd");
  testCode("Char in string : special", "6:%$#@!&", "%$#@!&");
  console.log('\n');
}
function testForList() {
  heading("TEST FOR LISTS");
  testCode("Elements in list : 1, integer", "li1ee", [1]);
  testCode("Elements in list : 2, integer (+,+)", "li1ei2ee", [1, 2]);
  testCode("Elements in list : 2, integer (-,-)", "li-1ei-2ee", [-1, -2]);
  testCode("Elements in list : 2, integer (-,+)", "li-1ei2ee", [-1, 2]);
  testCode("Elements in list : 1, empty string", "l0:e", [""]);
  testCode("Elements in list : 2, string", "l1:a5:helloe", ["a", "hello"]);
  testCode("Elements in list : 5, string of e", "l5:eeeeee", ["eeeee"]);
  testCode("Elements in list : 2, nested string", "l1:al5:helloee", ["a", ["hello"]]);
  console.log('\n');
}

function main() {
  testForInteger();
  testForString();
  testForList();
}

main();
