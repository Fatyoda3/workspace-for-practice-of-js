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
    c = 0;
  }

  let prev = '';

  while (c < string.length) {
    const letter = string[c];
    const currentVowel = isVowel(letter) && !isVowel(prev);
    const previousVowel = !isVowel(letter) && isVowel(prev);

    if (currentVowel || previousVowel) {
      currentWord += letter;
      prev = letter;
    } else {
      editedString += letter + ',';
    }
    c++;
  }
  return currentWord + ',' + editedString;
}

function composeMessage(string, expectedValue, valueWeGot) {
  const part1 = " in->" + string;
  const part2 = " ex->" + expectedValue;
  const part3 = " out->" + valueWeGot;

  return part1 + part2 + '|' + part3;
}

function testSplitByVowel(string, expectedValue) {
  const valueWeGot = splitByVowel(string);
  const checkIfWorks = valueWeGot === expectedValue ? '✅' : '❌';
  const message = composeMessage(string, expectedValue, valueWeGot);
  console.log(checkIfWorks, message);

}

function testAll() {

  testSplitByVowel('aaabbb', 'ab,ab,ab,');
  testSplitByVowel('aaaeee', 'a,a,a,e,e,e,');
  testSplitByVowel("there", "tere,h,");
  testSplitByVowel("hello", "helo,l,");
  testSplitByVowel("abyss", "ab,y,s,s,");
  testSplitByVowel("this", "tis,h,");
  testSplitByVowel("cat", "cat,");
  testSplitByVowel("boat", "bot,a,");
  testSplitByVowel("applee", "ape,p,l,e,");
  testSplitByVowel("rhythm", "r,h,y,t,h,m,");
}

testAll();
