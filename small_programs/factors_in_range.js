// lets resolve divisible by 3 and not 7 

const FactorsInRange = (start, end, divisor1, divisor2) => {

  const remainder = start % divisor1;
  const initial = (remainder === 0) ? start : (start - remainder) + divisor1;

  let count = 0;
  for (let multiple = initial; multiple <= end; multiple += divisor1) {
    count += 1;

    const countCheck = count === divisor2;

    if (countCheck) {
      count = 0;
      console.log(`divisible by ${divisor2} and ${divisor1}: ${multiple}`);
    }
  }
}

FactorsInRange(1, 50, 3, 6);
