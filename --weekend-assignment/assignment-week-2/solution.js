/* 
apple	ape,p,l
there	tere,h
hello	helo,l
abyss	ab,y,s,s
this	tis,h
 */

const string = 'apple';

function isVowel(letter) {
  switch (letter) {
    case 'a':
      return true;

    case 'e':
      return true;

    case 'i':
      return true;

    case 'o':
      return true;

    case 'u':
      return true;
  }
  return false;
}

function splitByVowel(string) {
  let editedString = '';
  let currentWord = string[0];
  let c = 1;
  if (isVowel(string[0])) {
    currentWord = '';
    c = 0
  }
  let prev = '';
  while (c < string.length) {

    if (isVowel(string[c]) && !isVowel(prev)) {
      currentWord += string[c];
      prev = string[c];
    }
    else if (!isVowel(string[c]) && isVowel(prev)) {
      currentWord += string[c];
      prev = string[c];
    }
    else {
      editedString += string[c] + ',';
    }
    c++;
  }
  console.log(editedString);
  return currentWord + ',' + editedString;
}
function composeMessage(string, expectedValue, valueWeGot) {
  const part1 = " string->" + string;
  const part2 = " expectedValue->" + expectedValue;
  const part3 = " valueWeGot->  " + valueWeGot;

  return part1 + part2 + '|' + part3;
}

function testSplitByVowel(string, expectedValue) {
  const valueWeGot = splitByVowel(string);
  const checkIfWorks = valueWeGot === expectedValue ? '✅' : '❌';
  const message = composeMessage(string, expectedValue, valueWeGot);
  console.log(checkIfWorks, message);

}

function testAll() {

  // testSplitByVowel('abba', 'aba,b,');
  // testSplitByVowel('apple', 'ape,p,l,');
  // testSplitByVowel('applee', 'ape,p,l,e,');
  // testSplitByVowel('there', 'tere,h,');
  // testSplitByVowel('hello', 'helo,l,');
  // testSplitByVowel('this', 'tis,h,');
  // testSplitByVowel('abyss', 'ab,y,s,s,');
  testSplitByVowel('aaabbb', 'ab,ab,ab,');
  // testSplitByVowel('aaaeee', 'a,a,a,e,e,e,');
}

testAll();
