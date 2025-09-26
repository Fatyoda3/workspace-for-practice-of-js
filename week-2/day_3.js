function isSubString(text, index, sub) {
  for (let i = 0; i < sub.length; i++) {
    if (text[i + index] !== sub[i]) {
      return false;
    }
  }
  return true;
}

function removeSubString(text, sub) {
  if (!sub) {
    return text;
  }

  let editedText = '';
  let index = 0;

  while (index < text.length) {
    let delta = sub.length;
    if (!isSubString(text, index, sub)) {
      editedText += text[index];
      delta = 1;
    }
    index += delta;
  }
  return editedText;
}

console.log(removeSubString('Hello Hello world', 'ello'));
