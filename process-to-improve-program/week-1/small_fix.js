const limit = 20;

for (let current = 0; current <= limit; current++) {

    const input = current;
    const remainder = input % 2;
    const suffix = remainder ? "is odd." : "is even.";
    console.log(input, suffix);
}
