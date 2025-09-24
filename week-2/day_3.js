function stringSplitter(sentence, pattern) {
  const needle = pattern;
  const tip = needle[0];

  let split = '';
  let needleParts = "";

  for (let pos = 0; pos < sentence.length; pos++) {
    const char = sentence[pos];
    if (tip !== char)
      split = split + char;

    else {
      for (let i = pos; i < (pos + needle.length); i++) {
        if (sentence[i] === needle[i - pos]) {
          needleParts = needleParts + sentence[i];
        }
      }
      if (needleParts === needle) { pos = pos + needle.length - 1; }
      else split = split + sentence[pos];
      needleParts = "";
    }
  }
  return split
}

console.log(stringSplitter('b_ab_aa', 'aa'));

