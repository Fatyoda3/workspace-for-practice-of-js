let sum = 0;

const lastMultipleOf3 = 999;
const lastMultipleOf5 = 995;
const lastMultipleOf15 = 990;

const n3 = lastMultipleOf3 / 3;
const n5 = lastMultipleOf5 / 5;
const n15 = lastMultipleOf15 / 15;

const sum1 = n3 * (3 + lastMultipleOf3) / 2;
const sum2 = n5 * (5 + lastMultipleOf5) / 2;
const sum3 = n15 * (15 + lastMultipleOf15) / 2;

console.log(sum1 + sum2 - sum3);