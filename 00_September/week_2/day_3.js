const isSubString = (text, from, sub) => {
  for (let index = 0; index < sub.length; index++)
    if (text[from + index] !== sub[index]) {
      return false;
    }
  return true;
}

const removeSubString = (text, subText) => {
  if (subText === '') {
    return text;
  }

  const edited = [];
  let index = 0;

  while (index < text.length) {
    let delta = subText.length;

    if (!isSubString(text, index, subText)) {
      edited.push(text[index]);
      delta = 1;
    }

    index += delta;
  }

  return edited.join('');
}
