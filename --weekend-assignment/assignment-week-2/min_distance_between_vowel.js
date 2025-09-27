function isVowel(letter) {
  const vowels = 'aeiou';

  for (let current = 0; current < vowels.length; current++) {

    if (vowels[current] === letter) {
      return true;
    }
  }
  return false;
}

function minimumDistance(string) {
  let vowelFound = false;
  let count = 0;
  let distance = Infinity;

  for (let index = 0; index < string.length; index++) {

    const isCurrentVowel = isVowel(string[index]);
    
    if (vowelFound && isCurrentVowel) {
      
      if (distance > count) {
        distance = count;
      }
      count = 0;
    }
    if (isCurrentVowel) {
      vowelFound = true;
    }
    if (vowelFound) {
      count++;
    }
  }

  return distance === Infinity ? -1 : distance;
}


function composeMessage(string, expectedValue, valueWeGot) {
  const part1 = " input->" + string;
  const part2 = " expected->" + expectedValue;
  const part3 = " output->" + valueWeGot;

  return part1 + part2 + '|' + part3;
}

function testMinimumDistance(string, expectedValue) {

  const valueWeGot = minimumDistance(string);
  const checkIfWorks = valueWeGot === expectedValue ? '✅' : '❌';
  const message = composeMessage(string, expectedValue, valueWeGot);

  console.log(checkIfWorks, message);

}

function testAll() {
  testMinimumDistance('hello', 3);
  testMinimumDistance('heo', 1);
  testMinimumDistance('beautiful', 1);
  testMinimumDistance('aaaa', 1);

  testMinimumDistance('strength', -1);
  testMinimumDistance('bcd', -1);
  testMinimumDistance('abyss', -1);
}

testAll();
