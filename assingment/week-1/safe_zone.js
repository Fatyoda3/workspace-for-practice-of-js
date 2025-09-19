let a = 19;
let binaryRep = 0;

let pow = 1;
let sub = 1;

let sub1 = 1;

let slice = 0;
let mulSlice = 1;
let f = 0;
while (sub) {
  slice += 1;
  if (sub % 10 === 0) {
    sub = sub / 10;
  } else {
    sub = (sub - 1) / 10;
  }
}

while (a) {
  if (a % 2 == 1) {
    a = (a - 1) / 2;
    bNum = bNum + pow;
  } else {
    a = a / 2;
  }
  pow = pow * 10;
}

for (let i = 0; i < slice; i++) {
  mulSlice = mulSlice * 10;
}

while (bNum) {
  (bNum % mulSlice) === sub1 ? f = f + 1 : "";

  if (bNum % mulSlice === 0) {
    bNum = bNum / 10;
  } else {
    bNum = (bNum - (bNum % 10)) / 10;
  }
}
console.log("value of  f : ", f);
