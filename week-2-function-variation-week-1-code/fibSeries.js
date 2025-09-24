// Do not rename n, use it as input for your program.
// While testing we will change their values.
// n will be a natural number including 0.


// Print the series till nth Fibonacci term
// Example if n = 7, then the output should be
// 0
// 1
// 1
// 2
// 3
// 5
// 8

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
const n = 3;

function fibonacciSeries(n) {
  n = (n === 0) ? 1 : n;
  let a = 0;
  let b = 1;
  let nextFib = 0;

  for (let current = 1; current <= n; current++) {
    nextFib = a + b;
    console.log(a);
    a = b;
    b = nextFib;
  }
}
fibonacciSeries(10);
fibonacciSeries(0);
fibonacciSeries(n);
fibonacciSeries(1);
