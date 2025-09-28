function maxSequence(string) {
  if (string === '') {
    return '0';
  }
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


}

testAll();
