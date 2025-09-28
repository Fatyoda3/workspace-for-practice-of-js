function isVowel(letter) {
  switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
  }
  return false;
}
function isAlternate(current, last) {
  return isVowel(current) !== isVowel(last);
}

function splitByVowel(string) {
  let wordBuffer = '';
  let unusedLetters = '';
  let reducedString = string;
  let result = '';

  while (reducedString !== '') {

    wordBuffer = reducedString[0];

    for (let current = 1; current < reducedString.length; current++) {

      if (isAlternate(reducedString[current], wordBuffer[wordBuffer.length - 1])) {

        wordBuffer += reducedString[current];

      } else {
        unusedLetters += reducedString[current];
      }
    }

    result += wordBuffer + ',';
    reducedString = unusedLetters;
    unusedLetters = '';

  }

  return result;
}

function composeMessage(string, expectedValue, valueWeGot) {
  const input = " input- " + string;
  const expected = " expected- " + expectedValue;
  const output = " output- " + valueWeGot;

  return input + expected + '|' + output;
}

function testSplitByVowel(string, expectedValue) {
  const valueWeGot = splitByVowel(string, 0);
  const checkIfWorks = valueWeGot === expectedValue ? '✅' : '❌';
  const message = composeMessage(string, expectedValue, valueWeGot);

  console.log(checkIfWorks, message);

}

function testAll() {

  console.log('working test cases !');
  testSplitByVowel("aaabbb", "ab,ab,ab,");
  testSplitByVowel('tools', 'tol,os,');
  testSplitByVowel('poetry', 'pot,er,y,');

  testSplitByVowel('aaaeee', 'a,a,a,e,e,e,');
  testSplitByVowel("hello", "helo,l,");
  testSplitByVowel("abyss", "ab,y,s,s,");
  testSplitByVowel("this", "tis,h,");

  testSplitByVowel("cat", "cat,");
  testSplitByVowel("boat", "bot,a,");
  testSplitByVowel("applee", "ape,pe,l,");
  testSplitByVowel("rhythm", "r,h,y,t,h,m,");
}

testAll();
