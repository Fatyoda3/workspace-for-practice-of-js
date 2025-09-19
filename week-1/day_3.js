// prime code
const rangeForSearch = 10000;

let divisor = 2;
let primeCandidate = 2;

while (primeCandidate < rangeForSearch) {
  // if (i === div) { i = i + 1; } 
  if ((primeCandidate % divisor) === 0) {
    if (primeCandidate === divisor) {
      console.log('prime found ', primeCandidate);
    }
    /*  
    else {
       // console.log("composite found", i);
    }  
    */
    primeCandidate = primeCandidate + 1;

    divisor = 2;

  } else {
    divisor = divisor + 1;
  }
  // console.log(i);
}

/* let a = 65;

let sub = 10;
const sub1 = sub;

let bNum = 0;
let pow = 1;


let mulSlice = 1;

let f = 0;

while (sub) {
    sub = (sub - (sub % 10)) / 10;
    mulSlice = mulSlice * 10;
}

while (a) {
    let rem = a % 2;
    a = ((a - rem) / 2);
    bNum = bNum + (pow * rem);
    pow = pow * 10;
}

console.log('binary for number : ', bNum);

while (bNum) {
    (bNum % mulSlice) === sub1 ? f = f + 1 : "";
    if (bNum % mulSlice === 0) {
        bNum = bNum / 10;
    }
    else {
        bNum = (bNum - (bNum % 10)) / 10;
    }
}

console.log('number of occurrence : ', f);
 */
