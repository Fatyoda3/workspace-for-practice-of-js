
// // ### 65. Word Frequency Summary
// // Build a frequency summary of words used in a poem draft.

// const q65 = `It grew louder louder louder I thought the heart must 
// burst And still the men chatted`.split(' ');

// const dict = (array) => {

//   const table = [];
//   const frequencies = [];

//   for (let index = 0; index < array.length; index++) {
//     if (!table.includes(array[index])) {
//       table.push(array[index]);
//       frequencies.push(1);
//     }
//     else {
//       frequencies[array.indexOf(array[index])] += 1;
//     }

//   }

//   return [table, frequencies];
// }


// const freq = (prev, current) => {
//   for (let index = 0; index < prev.length; index++) {
//     const currentElement = prev[index];
//     if (currentElement[0] === current) {
//       currentElement[1] += 1;
//       return prev;
//     }
//   }
//   prev.push([current, 1]);
//   return prev;
// }
// console.log(dict(q65));

const q65 = `garlic salt water`.repeat(5).split(' ');

const a65 = q65.reduce((frequencyGroup, currentOcc) => {
  for (let index = 0; index < frequencyGroup.length; index++) {
    const group = frequencyGroup[index];
    if (group[0] === currentOcc) {
      group[1] += 1;
      return frequencyGroup;
    }
  }
  frequencyGroup.push([currentOcc, 1]);
  return frequencyGroup;
}, []);
console.log("65.", a65);

