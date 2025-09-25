// const input = 4;

// const suffix = input === 2 ? "is even !" : "is odd";

// console.log(input, suffix);


const limit = 20;



for (let current = 0; current <= limit; current++) {

    const input = current;
    const remainder = input % 2;

    // const suffix = (remainder === 0) ? "is divisible" : "is not divisible";
    const suffix = remainder ? "is odd." : "is even.";

    console.log(input, suffix);
}

let IsEven = 1;

for (let i = 0; i < limit+1; i++) {
    if (IsEven) {
        IsEven = 0;
        console.log('even number ', i);
    }
    else {
        IsEven = 1;
        console.log('odd number ', i);
    }

}