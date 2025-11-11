function sumOfFib(n) {

  let current = 0;
  let next = 1;
  let secondNext = 0;

  for (let index = 0; index < n; index++) {
    console.log(current);
    secondNext = current + next;
    current = next;
    next = secondNext;
  }
  return '';
}

sumOfFib(10);