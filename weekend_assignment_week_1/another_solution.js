const jungle = " Z    LL L L  ";
let previousAnimal = "";
let steps = -1;
let count = 0;

for (let i = 0; i < jungle.length; i++) {
  const current = jungle[i];
  if (current === " " && previousAnimal) {
    count = count + 1;
  } else if (current !== " ") {
    if (previousAnimal !== "") {
      if (previousAnimal !== current) {
        const changeSteps = steps === -1 || steps > count;

        steps = changeSteps ? count : steps;

        count = 0;
      } else if (previousAnimal === current) {
        count = 0;
      }
    }
    previousAnimal = current;
  }
}
console.log("value of steps", steps);
