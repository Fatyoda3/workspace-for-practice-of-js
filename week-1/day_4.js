// let Outer = "hello ";
// if (true) {
//     console.log(Outer);

//     const Outer = "Inner" /*  Outer */;

//     console.log(Outer);
// }

// for (let i = 0; i < 2; i++) {
//     console.log(Outer);
//     let Outer = 'tree';
//     console.log(Outer);
// }

// strings
// let a = 4 ; 
// while(a < 5 ){
//     console.log(a);
//     ++a;
// }
const quote = "Hello it's me!";
const lengthOfQuote = quote.length;
// console.log(quote, lengthOfQuote);

let number1 = '....';
let number2 = '....';
let product = '';
for (let i = 0; i < number1.length; i++) {
    for (let i = 0; i < number2.length; i++) {
        product = product + '.';
    }
}

console.log('product of numbers is ', product.length);