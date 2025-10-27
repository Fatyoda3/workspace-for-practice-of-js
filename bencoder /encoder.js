function encode(data) {
  const encoded = [];

  if (typeof data === "number") {
    encoded.push(`i${data}e`);
  }
  if (typeof data === "string") {
    encoded.push(`${data.length}:${data}`);
  }
  if (Array.isArray(data)) {
    encoded.push("l");
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      const encodedElement = encode(element);

      encoded.push(encodedElement);
    }
    encoded.push("e");
  }

  return encoded.join("");
}

function color(text, code) {
  return `\x1B[38;5;${code}m${text}\x1B[0m`;
}
function bold(text) {
  return `\x1B[1m${text}\x1B[0m`;
}
function formatMessage(input, output, expected, purpose) {
  const PrintError = output !== expected;
  const symbol = PrintError ? "❌" : "✅";
  const message = [symbol, bold(purpose.toUpperCase())];

  if (PrintError) {
    const inpFrag = `INP -> ${color(input, 222)}`;
    const expFrag = `EXP -> ${color(expected, 45)}`;
    const outFrag = `OUT -> ${color(output, 196)}`;
    message.push(`\n${inpFrag} \n${expFrag} \n${outFrag}\n`);
  }

  return color(message.join(""), 155);
}
function testFn(fnToTest, input, expected, intent = "") {
  const result = fnToTest(...input);
  const message = formatMessage(input, result, expected, intent);
  console.log(message);
}

function testAll(fn) {
  testFn(fn, ["hello"], "5:hello", "str encoded");
  testFn(fn, [""], "0:", "empty string");
  testFn(fn, ["5:hello"], "7:5:hello", "an already encoded string");

  testFn(fn, [123], "i123e", "+integer");
  testFn(fn, [-42], "i-42e", "-integer");
  testFn(fn, [0], "i0e", "0 check");

  testFn(fn, [[123, "hello"]], "li123e5:helloe", "a list");
  testFn(fn, [[123, "hello", ""]], "li123e5:hello0:e", "a list");
  testFn(fn, [[123, "hello", ""]], "li123e5:hello0:e", "a list");
  testFn(fn, [[123, "hello", "", 0]], "li123e5:hello0:i0ee", "a list");
  testFn(fn, [[]], "le", "empty list");
  testFn(fn, [[]], "le", "empty list");
}

testAll(encode);
