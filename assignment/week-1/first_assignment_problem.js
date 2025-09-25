let input = 65;
const inputCopy = input;

let subString = 10;
const copySubString = subString;

const shiftAndUnit = 10; //magic number
// to get the shift window we need a slice value in digits

let mulSlice = 1;

while (subString) {
  subString = (subString - (subString % 10)) / 10;
  mulSlice = mulSlice * 10;
}

// binary representation of the given input number

let binaryRep = 0;
let unitShift = 1;

while (input) {
  let remainder = input % 2;

  input = (input - remainder) / 2;

  binaryRep = binaryRep + (unitShift * remainder);

  unitShift = unitShift * 10;
}

console.log("binary for number", inputCopy, "is", binaryRep);

// counting the occurrences of the substring in the binary representation
//if no overlap change magic 10 by mulSlice

let occurrence = 0;

while (binaryRep) {
  let sliceOfBinRep = binaryRep % mulSlice;

  sliceOfBinRep === copySubString ? occurrence = occurrence + 1 : "";

  if (sliceOfBinRep === 0) {
    binaryRep = binaryRep / 10;
  } else {
    binaryRep = (binaryRep - (binaryRep % 10)) / 10;
  }
}

console.log(
  "number of overlapping occurrence for substring",
  copySubString,
  "is",
  occurrence,
  "for",
  inputCopy,
);
