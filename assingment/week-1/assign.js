let input = 65;
const inputCopy = input;

let subString = 10;
const copySubString = subString;

let mulSlice = 1;

while (subString) {
  subString = (subString - (subString % 10)) / 10;
  mulSlice = mulSlice * 10;
}

// binary representation
let binaryRep = 0;
let unitShift = 1;

while (input) {
  let remainder = input % 2;
  input = (input - remainder) / 2;
  binaryRep = binaryRep + (unitShift * remainder);
  unitShift = unitShift * 10;
}

console.log("binary for number : ", binaryRep);

let occurrence = 0;

while (binaryRep) {
  let check = binaryRep % mulSlice;

  check === copySubString ? occurrence = occurrence + 1 : "";
  if (check === 0) {
    binaryRep = binaryRep / 10;
  } else {
    binaryRep = (binaryRep - (binaryRep % 10)) / 10;
  }
}

console.log(
  "number of occurrence for substring :",
  copySubString,
  "is",
  occurrence,
  "for number :",
  inputCopy,
);
