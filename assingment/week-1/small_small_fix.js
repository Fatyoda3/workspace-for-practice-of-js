// let input = 6;

// let remainder = input % 2;

// let suffix = remainder === 0 ? "is divisible" : "is not divisible";

// console.log(input, suffix, "by 2 ");

// input = input + 1;
// remainder = input % 2;


const limit = 10;



for (let current = 0; current <= limit; current++) {

  const input = current;
  const remainder = input % 2;

let   suffix = (remainder === 0) ? "is divisible" : "is not divisible";
  console.log(input, suffix, "by 2");

}

