function maxSequence(string) {

  if (string === '') {
    return '0';
  }

  let count = 1;
  let lastLetter = string[0];
  for (let current = 1; current < string.length; current++) {
    if (string[current] === lastLetter) {
      count += 1;
    }
  }
  return 'a,' + count;

}

function composeMessage(equalCheck, expectedValue, valueWeGot) {
  const isWorking = equalCheck ? '✅' : '❌';
  const working = isWorking + " value we expected ";
  const comparison = expectedValue + " and we got " + valueWeGot;

  return working + comparison;
}

function testMaxSequence(string, expectedValue) {
  const valueWeGot = maxSequence(string);
  const equalCheck = valueWeGot === expectedValue;

  const message = composeMessage(equalCheck, expectedValue, valueWeGot);

  console.log(message);
}

function testAll() {
  testMaxSequence('', '0');
  testMaxSequence('a', 'a,1');
  testMaxSequence('aaa', 'a,3');
  testMaxSequence('aaaa', 'a,4');
  testMaxSequence('abba', 'b,2');

}

testAll();
