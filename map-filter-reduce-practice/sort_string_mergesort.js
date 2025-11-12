const strings = (['ab', 'aaa', 'a', 'ac'].toString()).split(',');

const sort = (array, low, high, predicate) => {
  if (low === high) {
    return [array[low]];
  }

  const mid = Math.floor((low + high) / 2);
  return merge(sort(array, 0, mid, predicate),
    sort(array, mid + 1, high, predicate), predicate);
};

const merge = (left, right, predicate) => {
  const merged = [];
  let l = 0;
  let r = 0;

  while (l < left.length && r < right.length) {
    if (predicate(left[l], right[r])) {
      merged.push(left[l]);
      l++;
    } else {
      merged.push(right[r]);
      r++;
    }
  }

  return merged.concat(left.slice(l), right.slice(r));
};
// const numeric = [1, 2, 3];

console.log(sort(strings, 0, strings.length - 1, (a, b) => a.length < b.length));
// console.log(sort(numeric, 0, numeric.length - 1, (a, b) => a < b));