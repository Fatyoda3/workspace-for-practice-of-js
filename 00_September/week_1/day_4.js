const quote = "Hello it's me!";
// const lengthOfQuote = quote.length;

const number1 = '....';
const number2 = '....';
let product = '';

for (let i = 0; i < number1.length; i++) {
  for (let j = 0; j < number2.length; j++) {
    product += '.';
  }
}
console.log(product);
console.log('product of numbers is ', product.length);