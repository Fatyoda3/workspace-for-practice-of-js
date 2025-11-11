//function 
/* this function can add any two values no proper behavior to be expected */

function add(x, y) {
  if (!x && !y) {
    return 'get out of here';
  }

  return x + y;
}
const result = add(25, 'hello');
// function functionMaker(userName) {
//   const value = userName;
//   if (!value) {
//     return function why(){
//       console.log('wrong value !');
//     }
//   } return function inner() {
//     console.log('What is up bro : ', value);
//   }
// }
// const myFunction1 = functionMaker('Rahul');
// const myFunction2 = functionMaker('Abhay');
// const myFunction3 = functionMaker('Lovekush');

// console.log(myFunction1 + '', myFunction2 + '', myFunction3 + '');

// myFunction1() + '', myFunction2() + '', myFunction3() + '';


function stringSplitter(sentence, pattern) {
  const hay = sentence;
  const needle = pattern;

  let tip = needle[0];

  let split = '';

  let needleParts = tip;

  for (let pos = 0; pos < hay.length; pos++) {
    const char = hay[pos];

    if (tip !== char) {
      split += char;
    }
    else {
      let offset = 0;
      let currentPos = pos;
      for (let i = pos + 1; i <= needle.length; i++) {
        if (hay[i] === needle[i - currentPos]) {
          needleParts += hay[i];
          console.log(needleParts);
        }
        if (needleParts === needle) { offset = offset + (i - currentPos) }
      }
      pos = pos + offset;
      console.log(pos, offset);
      needleParts = tip;

    }
  }
  console.log(split);
}

stringSplitter('b_ab', '_ab')