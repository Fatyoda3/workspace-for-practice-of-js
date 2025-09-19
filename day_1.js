import chalk from "npm:chalk";

let red = chalk.red;
let green = chalk.green;
let blue = chalk.blue;

console.log(red("hello is bad "));

let n = 6;
let n1 = 6;

console.log(n - n1);
console.log(n + n1);
console.log(n / n1);
console.log(n % n1);
console.log(n * n1);
// console.log(n++, --n, ++n ,n-- );//a sin to commit

// n+=1 n1-=1 a sin to commit
let isGood = false;

if (!isGood) { 
  console.log(blue("he's really bad"));
}
// Infinity === Infinity ? console.log(red("is good")) : '';

let low = 18;
let high = 60;
let value = 68;

(low < value && value < high)
  ? console.log(green("the number is in good range!"))
  : console.log(red("the number is in out of  range!"));
