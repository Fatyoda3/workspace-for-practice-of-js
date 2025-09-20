const Jungle = "  LL  ZL";
const space = Jungle.length;

let lionPos = -1;
let huntPos = -1;
let currDiff = -1;
let actualSteps = -1 ; 

for (let i = 0; i < space; i++) {
  const currentPos = i;
  const scan = Jungle[currentPos];
  if (scan === "L") {
    lionPos = i;
    if (huntPos !== -1) {
      currDiff = lionPos - huntPos - 1;
    }
  } else if (scan === "Z") {
    huntPos = i;
    if (lionPos !== -1) {
      currDiff = huntPos - lionPos - 1;
    }
  }
  if(actualSteps > currDiff || actualSteps === -1 )
  {
    actualSteps = currDiff;
  }
  
}

console.log("Lion found and can hunt after ", actualSteps, "steps");

