const limit = 10;

for (let current = 0; current <= limit; current++) {
  const input = current;
  const remainder = input % 2;
  const suffix = (remainder === 0) ? "is divisible" : "is not divisible";
  console.log(input, suffix, "by 2");
}