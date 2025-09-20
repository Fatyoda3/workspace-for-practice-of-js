const Jungle = " L  Z";
const space = Jungle.length;

console.log(Jungle, "space available : ", space);

let LionFound = false;
let count = 0;

for (let i = 0; i < space; i++) {
  const currentPos = i;
  const scan = Jungle[currentPos];
  if (scan === "L") LionFound = true;

  if (LionFound && scan === " ") {
    console.log("step taken by the lion ");
    count = count + 1;
  }
}
console.log("Lion found is", LionFound, "and can hunt after ", count, "steps");
