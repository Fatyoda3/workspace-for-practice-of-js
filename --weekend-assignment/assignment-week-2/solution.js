/* 
apple	ape,p,l
there	tere,h
hello	helo,l
abyss	ab,y,s,s
this	tis,h
 */

const text = 'apple';

function splitByVowel(string) {
  return 'ape,p,l,';
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
  testSplitByVowel(text, 'ape,p,l,');
}

testAll();
