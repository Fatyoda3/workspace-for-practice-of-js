console.log(("hello is bad "));

const n = 6;
const n1 = 6;

console.log(n - n1);
console.log(n + n1);
console.log(n / n1);
console.log(n % n1);
console.log(n * n1);
// console.log(n++, --n, ++n ,n-- );//a sin to commit

// n+=1 n1-=1 a sin to commit//not a sin
const isGood = false;

if (!isGood) {
  console.log(("he's really bad"));
}
// Infinity === Infinity ? console.log(("is good")) : '';

const low = 18;
const high = 60;
const value = 68;
const isInRange = (low < value && value < high);
const message = isInRange ? "the number is in good range!" : "the number is in out of  range!";
console.log(message);