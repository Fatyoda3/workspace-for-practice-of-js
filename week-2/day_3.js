function isSubString(text, index, sub) {
  for (let i = 0; i < sub.length; i++)
    if (text[i + index] !== sub[i])
      return false;
  return true;
}

function removeSubString(text, sub) {
  if (!sub) return text;
  let editedText = '';
  let i = 0;

  while (i < text.length) {
    let delta = sub.length;
    if (!isSubString(text, i, sub)) {
      editedText += text[i];
      delta = 1;
    }
    i += delta;
  }
  return editedText;
}
console.log(removeSubString('Hello Hello world', 'ello'));
