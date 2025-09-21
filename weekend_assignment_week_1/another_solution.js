const jungle = " ZZ  ";
const possibleSpaces = jungle.length;

let previousAnimal = "";

let actualSteps = -1;
let possibleSteps = 0;

for (let i = 0; i < possibleSpaces; i++) {

  const current = jungle[i];
  const spaceFound = current === " ";

  if (spaceFound && previousAnimal) {
    possibleSteps = possibleSteps + 1;
  } else if (!spaceFound) {

    const huntPossible = previousAnimal && previousAnimal !== current;
    
    if (huntPossible) {
      const changeSteps = actualSteps === -1 || actualSteps > possibleSteps;
      actualSteps = changeSteps ? possibleSteps : actualSteps;
    }
    possibleSteps = 0;
    previousAnimal = current;
  }
}

const HuntOccurred = actualSteps === -1;
if (HuntOccurred && previousAnimal === "Z") {
  console.log("no Lion found.");
} else if (HuntOccurred && previousAnimal === "L") {
  console.log("no Zebra to hunt.");
}

console.log("steps before hunt: ", actualSteps);
