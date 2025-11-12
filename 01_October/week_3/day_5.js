// toLowerCase done
// toUpperCase done
// indexOf done , variation done 
// at done
// slice done
// includes done
// trim , variation done
// repeat done
// concat done
const sentence = 'can I look at your problem ?';
const spacePaddedSentence = '\n       _can I look at your problem ?_       \n';
// 
//   console.log('sentence in Lower case', sentence.toLowerCase());
//   console.log('sentence in upper case', sentence.toUpperCase());

//   console.log('index of "o"sentence in', sentence.indexOf('o'));
//   console.log('index of "loo"sentence in', sentence.indexOf('lo'));
// 
// 
//   console.log('last index of "o" sentence in', sentence.lastIndexOf('o'));
//   console.log('last index of "ob" sentence in', sentence.lastIndexOf('ob'));
//   console.log('trim from both sides:', spacePaddedSentence.trim());
// 
// 
//   console.log('trim end of the sentence :', spacePaddedSentence.trimEnd());
//   console.log('trim start of the sentence :', spacePaddedSentence.trimStart());
// 

// console.log('char at index 4 ', sentence.at(4));
// console.log('char at index -4 ', sentence.at(-4));

// console.log('slice for index 3 to until letter r(your)', sentence.slice(3, sentence.indexOf('r ') + 1));

// console.log('sentence concatenated :', sentence.concat(' hi! I\'m here. '));
// console.log(sentence.concat('a', '-b', ' himanshu ', 'hello'));
// console.log('sentence includes :sub string "can"', sentence.includes('can'));

// console.log('CxCxC'.indexOf('C', 1));
// console.log('CxCCxC'.indexOf('C', ('CxCCxC'.indexOf('C', 1)) + !''));
// console.log("('CxCCxC'.indexOf('C', 1)) + !'')", ('CxCCxC'.indexOf('C', 1)) + !'');

const zero = "''";
const one = "!''";

function makeNumber(n) {
  let res2 = '';
  for (let index = 0; index < n; index++) {
    res2 += '+' + one;
  }
  return res2;
}

const seven = makeNumber(7);
const two = makeNumber(2);

console.log(seven, '\n', two);

console.log(eval(seven), '\n', eval(two), '\n', eval(two + seven));