const isStrLonger = (strA, strB) => strA.length >= strB.length;

const swap = (wordPool, smallest, longest, currentWord) => {
  if (isStrLonger(smallest, currentWord)) {
    smallest = currentWord;
  }
  if (isStrLonger(currentWord, longest)) {
    longest = currentWord;
  }
  wordPool.length = 0;
  return [smallest, longest];
}
const LASWord = (statement) => {

  let smallest = statement;
  let longest = '';

  for (let i = 0; i < statement.length; i++) {
    const letter = statement[i];

    if (letter !== ' ') {
      wordPool.push(letter);
    }
    else {
      [smallest, longest] = swap(wordPool, smallest, longest, wordPool.join(''));
    }
  }

  return swap(wordPool, smallest, longest, wordPool.join(''));
}

const wordPool = [];

const test = () => {
  let [smallest, longest] = LASWord("Himanshu is liked by everyone");

  console.log('smallest word :', smallest, "\nlargest word :", longest);
  [smallest, longest] = LASWord('j');
  console.log('smallest word :', smallest, "\nlargest word :", longest);
  [smallest, longest] = LASWord('j ');
  console.log('smallest word :', smallest, "\nlargest word :", longest);

}
test();