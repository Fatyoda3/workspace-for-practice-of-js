//recursive HELL

const identity = (x) => x === 0 ? 0 : 1 + identity(x - 1);
const sumOf = (n) => n === 0 ? 0 : n + sumOf(n - 1);
const factorial = (n) => n === 1 ? 1 : n * factorial(n - 1);
