console.log("\u001b[31m");
console.log("\u001b[47m");


console.log("logical and : for 2 , 3 ->", (2 && 3));
console.log("\u001b[00m");

console.log("hello world");

let appleCount = 5;
if (appleCount) {//again using truthy value 
  console.log("apples are available");
  appleCount = 0;
}
if (!appleCount) { //bad way to-do things using falsy value 
  console.log("apples are not available");
}
console.log(
  "truthiness check for --> 2 , undefined , 0 , Infinity :",
  !2,
  !!undefined,
  !!0,
  !!Infinity,
);
const myFriend = "Pradipta";

if (myFriend === "Pradipta") {
  console.log("my friends is ", myFriend);
} else if (myFriend === "") {
  console.log("some one else is ! ");
} else {
  console.log("no one is ! ");
}


const salary = 15 * 1000;
const increase = 3000;
const ultimateGoal = 75 * 1000;

switch (salary + increase) {
  case 15000:
    console.log("it is good for now !");

  case 18000:
    console.log("it is something I desire ", salary + increase);
    break;
  case ultimateGoal:
    console.log("it is something I need and want !!! ", ultimateGoal);
  default:
    break;
}
