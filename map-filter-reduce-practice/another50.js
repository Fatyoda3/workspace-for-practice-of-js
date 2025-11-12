// ### 51. Fruit Log Count
// Count how many times “banana” appears in a fruit log.
const q51 = [['banana', 'apple', 'banana'], ['banana', 'banana'], ['banana']];
const a51 = q51.flat().reduce((totalBananas, fruit) =>
  fruit === 'banana' ?
    totalBananas + 1 : totalBananas, 0);
console.log("51.", a51);

// ### 52. Worksheet Words Combination
// Combine all words written by students on three worksheets.
const q52 = [['jack', 'is', 'evil!'],
['Leon', 'is', 'overpowered'],
['what', 'you', 'buyin\'']];
const a52 = q52.flat().reduce((sentence, currentWord) =>
  sentence.concat(currentWord, ' '), '');
console.log("52.", a52);

// ### 53. Word "Excellent" Check
// Determine whether any student wrote the word “excellent”.
const q53 = [['jack', 'is', 'evil!'],
['Leon', 'is', 'overpowered'],
['what', 'you', 'buyin\'', 'excellent']];
const a53 = q53.flat().some(student => student === 'excellent');
console.log("53.", a53);

// ### 54. Rainfall Cap Validation
// Check whether all recorded rainfall values are under 50.
const q54 = [[1, 44, 5, 4, 32, 2],
[234, 323, 12, 33, 50],
[2, 46, 67, 443]];
const a54 = q54.flat().every((val) => val < 50);
console.log("54.", a54);

// ### 55. Unique Movie Genres
// Produce a list of unique movie genres mentioned by a club.
const q55 = [['horror', 'sorority', 'war'],
['animated', 'horror', 'adventure'],
['animated', 'war', 'psychology']];
const a55 = q55.flat().reduce((uniqueGenres, current) => {
  if (!(uniqueGenres.includes(current))) {
    uniqueGenres.push(current);
  }
  return uniqueGenres;
}, []);
console.log("55.", a55);

// ### 56. Pushup Total
// Compute the total number of pushups done in all sessions.
const q56 = [[6, 16, 22],
[22, 34, 5],
[12, 22, 12],
[12], [32]];
const a56 = q56.flat().reduce(((count, current) => count + current), 0);
console.log("56.", a56);

// ### 57. Unique Bird Species
// Create a list of all unique bird species spotted on a trip.
const q57 = [['night angel', 'crow', 'swan'],
['flamingo', 'parrot', 'sparrow'],
['ostrich', 'Kori Bustard'],
['duck', 'dodo']];
const a57 = q57.flat().reduce((uniqueSightings, current) => {
  if (!(uniqueSightings.includes(current))) {
    uniqueSightings.push(current);
  }
  return uniqueSightings;
}, []);
console.log("57.", a57);

// ### 58. Red Tile Count
// Count how many tiles in a mosaic were listed as “red”.
const q58 = [['red', 'green', 'blue'],
['red', 'orange', 'purple'],
['red', 'green', 'violet']];
const a58 = q58.flat().reduce((prev, current) => current === 'red' ? prev + 1 : prev, 0);
console.log("58.", a58);

// ### 59. Cycling Distance Sum
// Sum all distances covered during cycling practice.
const q59 = [[1, 44, 5, 4, 32, 2],
[234, 323, 12, 33, 50],
[2, 46, 67, 443]];
const a59 = q59.flat().reduce((prev, current) => current + prev, 0);
console.log("59.", a59);

// ### 60. Unique Ice Cream Flavors
// List unique flavors tried in an ice-cream tasting event.
const q60 = [['vanilla', 'truffle', 'blue-berry', 'strawberry', 'caramel'],
['blue-berry', 'strawberry', 'caramel'], ['butter-scotch', 'mint', 'chocolate'],
['strawberry', 'caramel'], ['mint', 'chocolate']];
const a60 = q60.flat().reduce((uniqueFlavors, current) => {
  if (!(uniqueFlavors.includes(current))) {
    uniqueFlavors.push(current);
  }
  return uniqueFlavors;
}, []);
console.log("60.", a60);

// ### 61. High Score Check
// Check if any participant scored above 90 in tests.
const q61 = [[1, 44, 5, 2],
[99, 50],
[2, 46, 67, 43]];
const a61 = q61.flat().some((val) => val > 90);
console.log("61.", a61);

// ### 62. Age Restriction Validation
// Verify if all ages listed for an event are 18 or above.
const q62 = [[1, 44, 5, 2], [99, 50], [2, 46, 67, 43]];
const a62 = q62.flat().every((val) => val >= 18);
console.log("62.", a62);

// ### 63. Combined Recipe Ingredients
// Combine the ingredients from all recipe attempts.
const q63 = [['garlic', 'salt', 'water', 'cheese'], ['salt', 'water', 'cheese'], ['milk', 'sugar', 'orange', 'gelatin'], ['sugar', 'orange', 'gelatin']];
const a63 = q63.flat().reduce((uniqueItems, current) => {
  if (!(uniqueItems.includes(current))) {
    uniqueItems.push(current);
  }
  return uniqueItems;
}, []);
console.log("63.", a63);

// ### 64. Reverse Dance Steps
// Reverse the order of dance steps recorded by a choreographer.
const q64 = [["step", "tap"], ["turn", "step"]];
const a64 = q64.flat().reduce((reversed, val) => { reversed.unshift(val); return reversed; }, []);
console.log("64.", a64);

// ### 65. Word Frequency Summary
// Build a frequency summary of words used in a poem draft.
const q65 = `garlic salt water`.repeat(5).split(' ');

const a65 = q65.reduce((groupedFreq, currentVal) => {
  const table = groupedFreq[0];
  const frequencies = groupedFreq[1];

  if (!table.includes(currentVal)) {
    table.push(currentVal);
    frequencies.push(1);
  } else
    frequencies[table.indexOf(currentVal)] += 1;


  return groupedFreq;
}, [[], []]);

console.log("65.", a65);

// ### 66. Note "Fa" Check
// Determine whether the note “fa” appears in any music sheet.
const q66 = [["mi", "fa", "so"], ["do", "mi"], ["fa"]];
const a66 = q66.flat().some(val => val === 'fa');
console.log("66.", a66);

// ### 67. Parcel Weight Sum
// Sum all weights of parcels recorded in a courier office.
const q67 = [[22, 23], [25, 24, 22], [29]];
const a67 = q67.flat().reduce((total, val) => total + val, 0);
console.log("67.", a67);

// ### 68. Distinct Pizza Toppings
// List distinct toppings chosen by pizza customers.
const q68 = [['onion', 'capsicum', 'pepperoni', 'olives'],
['chives', 'mushroom', 'pineapple'],
['chives', 'pepperoni', 'olives', 'pineapple'],
['capsicum', 'pepperoni', 'olives']];
const a68 = q68.flat().reduce((uniqueToppings, current) => {
  if (!(uniqueToppings.includes(current))) {
    uniqueToppings.push(current);
  }
  return uniqueToppings;
}, []);
console.log("68.", a68);

// ### 69. Chapter Reread Count
// Count how many times a student reread a particular chapter.
const q69 = [['onion', 'capsicum', 'pepperoni', 'olives'],
['chives', 'mushroom', 'pineapple'],
['chives', 'pepperoni', 'olives', 'pineapple'],
['capsicum', 'pepperoni', 'olives']];
const a69 = q69.flat().reduce((rereads, chapters) =>
  chapters === 'pepperoni' ?
    rereads + 1 : rereads, 0);

console.log("69.", a69);

// ### 70. Combine Color Swatches
// Combine all color swatches from three design sets.
const q70 = [['red', 'green', 'blue'],
['red', 'orange', 'purple'],
['red', 'green', 'violet']];
const a70 = q70.flat().reduce((combined, current) => {
  if (!(combined.includes(current))) {
    combined.push(current);
  }
  return combined;
}, []);
console.log("70.", a70);

// ### 71. Maximum Threshold Check
// Check if any experiment reading hit the maximum threshold of 100.
const q71 = [[1, 44, 5, 4, 32, 2], [12, 33, 50], [2, 46, 67, 100]];
const a71 = q71.some(vals => vals.some(val => val === 100));
console.log("71.", a71);

// ### 72. Completion Verification
// Verify whether every participant completed at least one task.
const q72 = [['completed', 'failed'],
['completed', 'failed'],
'completed '.repeat(3).split(' ')];
const a72 = q72.every(activities => activities.some(activity => activity === 'completed'));
console.log("72.", a72);

// ### 73. Unique Travel Destinations
// List unique destinations chosen in a travel club survey.
const q73 = [['America', 'America', "Somali"],
['Guinea', 'Sudan', 'Nigeria', 'Somali'],
['Korea', 'India', 'Singapore']];
const a73 = q73.flat().reduce((uniqueDestinations, current) => {

  if (!uniqueDestinations.includes(current)) {
    uniqueDestinations.push(current);
  }
  return uniqueDestinations;
}, []);
console.log("73.", a73);

// ### 74. Instrument Practice Sum
// Sum all hours spent practicing an instrument.
const q74 = [[1, 0, 5, 4, 2], [12, 0, 50], [2, 0, 6, 7, 0]];
const a74 = q74.flat().reduce((reps, rep) => reps + rep, 0);
console.log("74.", a74);

// ### 75. Distinct Plant Types
// Find all distinct types of plants noted during fieldwork.
const q75 = [
  ["Dandelion",
    "Stinging Nettle",
    "Wild Garlic"],
  ["Yarrow",
    "Clover",
    "Chicory"],
  ["Plantain",
    "Shepherd’s Purse",
    "Dandelion",
    "Stinging Nettle",
    "Queen Anne’s Lace"],
  ["Milk Thistle", "Dandelion",
    "Stinging Nettle",
    "Wild Garlic",]
];
const a75 = q75.flat().reduce((uniquesSightings, current) => {
  if (!uniquesSightings.includes(current)) {
    uniquesSightings.push(current);
  }
  return uniquesSightings;
}, []);
console.log("75.", a75);

// ### 76. Specific Sound Occurrence Count
// Count occurrences of a specific sound in a phonetics study.
const q76 = ['moo', 'boo', 'coo', 'neigh', 'woof', 'coo',
  'coo', 'boom', 'meow', 'hiss', 'buzz'];
const a76 = q76.reduce((count, sound) => sound === 'coo' ? count + 1 : count, 0);
console.log("76.", a76);

// ### 77. Combined Syllables
// Combine all syllables used in language drills.
const q77 = [
  ["pa", "ta", "ka", "ma", "na", "sa", "la", "ra", "fa", "va"],
  ["ap", "at", "ak", "am", "an", "as", "al", "ar"],
  ["pat", "tap", "map", "man", "sam", "ran", "lat", "pan"],
  ["pla", "tra", "kli", "gla", "smi", "bra", "fra"],
  ["paa", "mee", "koo", "too", "laa", "see"],
  ["a", "e", "i", "o", "u"],
  ["pata", "kapa", "maka", "taka", "sapala", "malata"]
];
const a77 = q77.flat().reduce((combined, syllable) => combined.concat(syllable), '');
console.log("77.", a77);

// ### 78. Zero Measurement Check
// Check if any measurement is exactly zero.
const q78 = [[0, 1, 3], [4, 56, 76], [23, 1, 0]];
const a78 = q78.flat().some((value) => value === 0);
console.log("78.", a78);

// ### 79. Weight Limit Validation
// Verify that all listed items weigh less than 10 grams.
const q79 = [[10, 23, 23], [10, 22, 1], [0, 2, 10]];
const a79 = q79.every((values) => values.every(value => value < 10));
console.log("79.", a79);

// ### 80. Color Frequency Summary
// Summarize how many times each color appears in a creative art project.
const q80 = [
  ["red", "blue", "green", "yellow", "orange"],
  ["purple", "pink", "blue", "teal", "white"],
  ["green", "black", "gray", "brown", "red"],
  ["navy", "turquoise", "aqua", "blue", "silver"],
  ["gold", "bronze", "copper", "black", "white"],
  ["cyan", "magenta", "yellow", "red", "green"],
  ["lavender", "violet", "indigo", "purple", "pink"],
  ["maroon", "crimson", "scarlet", "red", "orange"],
  ["olive", "lime", "mint", "green", "teal"],
  ["beige", "cream", "tan", "brown", "white"],
  ["charcoal", "slate", "gray", "black", "navy"],
  ["peach", "coral", "salmon", "pink", "orange"],
  ["sky blue", "royal blue", "navy", "blue", "aqua"],
  ["forest green", "emerald", "lime", "green", "black"],
  ["gold", "silver", "white", "yellow", "gray"]
];
const a80 = q80.flat().reduce((groupedFreq, currentVal) => {
  const table = groupedFreq[0];
  const frequencies = groupedFreq[1];

  if (!table.includes(currentVal)) {
    table.push(currentVal);
    frequencies.push(1);
  } else
    frequencies[table.indexOf(currentVal)] += 1;


  return groupedFreq;
}, [[], []]);
console.log("80.", a80);

// ### 81. Reverse Instructions
// Reverse the order of instructions written for a scavenger hunt.
const q81 = [['run', 'dig', 'peek'], ['dig', 'bury', 'cross'], ['choose', 'switch', 'find']];
const a81 = q81.flat().reduce((reversed, current) => {
  reversed.unshift(current);
  return reversed;
}, []);
console.log("81.", a81);

// ### 82. Journal Mention Count
// Count how many entries in a journal mention “rain”.
const q82 = [['rain', 'drought', 'tornado'], ['flood', 'tsunami', 'typhoon'], ['flood', 'rain']];
const a82 = q82.flat().reduce((rainCount, current) => current === 'rain' ? rainCount + 1 : rainCount, 0);
console.log("82.", a82);

// ### 83. Merge Poetry Fragments
// Merge all small poetry fragments into one list of lines.
const q83 = ['roses are red', 'violets are blue', 'this assignment is flu', 'life is small', 'so let me grow tall'];
const a83 = q83.reduce((merged, current) => merged.concat(current, '\n'), '');
console.log("83.", a83);

// ### 84. Unique Cartoon Characters
// List unique cartoon characters favored by children.
const q84 = [['tom', 'pikachu', 'batman', 'robin', 'cyborg',],
['batman', 'robin', 'cyborg',], ['optimus prime', 'oggy',], ['jerry', 'batman', 'robin', 'cyborg',]];
const a84 = q84.flat().reduce((uniqueCharacters, current) => {
  if (!uniqueCharacters.includes(current)) {
    uniqueCharacters.push(current);
  }
  return uniqueCharacters;
}, []);
console.log("84.", a84);

// ### 85. Total Points Scored
// Add up all points scored by a team across multiple games.
const q85 = [[1, 2, 3], [2, 1, 0], [2, 1, 4]];
const a85 = q85.flat().reduce((total, val) => total + val, 0);
console.log("85.", a85);

// ### 86. Exact Score Check
// Check whether any team scored exactly 50 points.
const q86 = [[10, 20, 30], [12, 11, 50], [23, 61, 40]];
const a86 = q86.flat().some((value) => value === 50);
console.log("86.", a86);

// ### 87. pH Value Validation
// Ensure all pH values recorded are below 8.
const q87 = [[1, 2, 3], [2, 1, 0], [2, 1, 4]];
const a87 = q87.flat().some((reading) => reading < 8);
console.log("87.", a87);

// ### 88. Unique Chocolate Flavors
// Count unique flavors tasted in a chocolate workshop.
const q88 = [
  ["Milk Chocolate", "White Chocolate", "Dark Chocolate"],
  ["Hazelnut Chocolate", "Milk Chocolate", "Caramel Chocolate"],
  ["Mint Chocolate", "Dark Chocolate", "Peppermint Chocolate"],
  ["Orange Chocolate", "Caramel Chocolate", "Dark Chocolate"],
  ["Praline Chocolate", "Hazelnut Chocolate", "White Chocolate"]
];
const a88 = q88.flat().reduce((uniqueFlavors, current) => {
  if (!uniqueFlavors.includes(current)) {
    uniqueFlavors.push(current);
  }
  return uniqueFlavors;
}, []);
console.log("88.", a88);

// ### 89. Meditation Time Sum
// Sum all minutes of meditation logged across sessions.
const q89 = [[10, 20, 30], [12, 11, 50], [23, 61, 40]];
const a89 = q89.flat().reduce((count, current) => count + current, 0);
console.log("89.", a89);

// ### 90. Unique Repair Tools
// Identify every unique tool used in a repair workshop.
const q90 = [
  ["Hammer", "Screwdriver", "Pliers"],
  ["Wrench", "Socket Set", "Pliers"],
  ["Drill", "Screwdriver", "Measuring Tape"],
  ["Saw", "Hammer", "Level"],
  ["Multimeter", "Wire Stripper", "Screwdriver"]
];

const a90 = q90.flat().reduce((uniqueFlavors, current) => {
  if (!uniqueFlavors.includes(current)) {
    uniqueFlavors.push(current);
  }
  return uniqueFlavors;
}, []);
console.log("90.", a90);

// ### 91. White Shirt Count
// Count how many shirts in a laundry batch were listed as “white”.
const q91 = [
  ["Gray", "White", "Black", "Blue"],
  ["Green", "White", "Yellow", "Black"],
  ["Red", "White", "Blue", "Purple"],
  ["White", "Orange", "Gray", "Pink"],
  ["Brown", "White", "Red", "Green"]
];
const a91 = q91.flat().reduce((whiteCount, current) =>
  current === 'White' ?
    whiteCount + 1 : whiteCount, 0);
console.log("91.", a91);

// ### 92. Combined Meeting Notes
// Combine all notes written during a meeting into one list.
const q92 = [['we are under-paid ', 'I like to sleep during meetings '],
['Should I take loans for buying Iphone '],
['Wow with this product we may not get any sales ']];
const a92 = q92.flat().reduce((joinedNotes, current) =>
  joinedNotes.concat(current, '\n'));
console.log("92.", a92);

// ### 93. "Fragile" Item Check
// Check if any item in a shipment is marked “fragile”.
const q93 = [
  ["Fragile", "Handle with Care", "Glass", "Delicate"],
  ["Caution", "Fragile", "Hazardous", "Breakable"],
  ["Handle with Care", "Perishable", "Sensitive", "Flammable"],
  ["Toxic", "Hazardous", "Corrosive", "Fragile"],
  ["Delicate", "Explosive", "Handle with Care", "Precious"]
];
const a93 = q93.flat().some((word) => word === 'Fragile');
console.log("93.", a93);

// ### 94. Lowercase Letter Validation
// Verify that all letters written by participants are lowercase.
const q94 = 'ljkasdflakjfdlakejrlkjdf'.split('');
const a94 = q94.every((letter) => letter === letter.toLowerCase());
console.log("94.", a94);

// ### 95. Reverse Chess Moves
// Reverse a list of moves recorded during a chess game.
const q95 = ['B', 'K', 'R', 'N'];
const a95 = q95.reduce((reverse, move) => { reverse.unshift(move); return reverse; }, []);
console.log("95.", a95);

// ### 96. Musical Note Frequency
// Build a frequency list for musical notes practiced in a session.
const q96 = [
  ["Sa", "Re", "Ga", "Ma"],
  ["Re", "Ga", "Ma", "Pa"],
  ["Ga", "Ma", "Pa", "Dha"],
  ["Ma", "Pa", "Dha", "Ni"],
  ["Pa", "Dha", "Ni", "Sa"]
];
const a96 = q96.flat().reduce((groupedFreq, currentVal) => {
  const table = groupedFreq[0];
  const frequencies = groupedFreq[1];

  if (!table.includes(currentVal)) {
    table.push(currentVal);
    frequencies.push(1);
  } else
    frequencies[table.indexOf(currentVal)] += 1;
  return groupedFreq;
}, [[], []]);
console.log("96.", a96);

// ### 97. Error Message Count
// Count the number of times “error” appears in a log of messages.
const q97 = [
  ["Error", "Warning", "Critical", "Failure"],
  ["Warning", "Working", "Processing", "Active"],
  ["Waiting", "Pending", "Working", "Loading"],
  ["Error", "Alert", "Timeout", "Waiting"],
  ["Warning", "Retrying", "Processing", "Error"]
];
const a97 = q97.flat().reduce((countErr, current) => current === 'Error' ?
  countErr + 1 : countErr, 0);
console.log("97.", a97);

// ### 98. Gather All Ingredients
// Gather all ingredients used in three versions of the same dish.
const q98 = [
  ["Saffron", "Cardamom", "Cinnamon", "Clove"],
  ["Turmeric", "Ginger", "Cumin", "Cardamom"],
  ["Star Anise", "Coriander", "Cinnamon", "Nutmeg"],
  ["Sumac", "Paprika", "Turmeric", "Clove"],
  ["Fenugreek", "Mustard Seeds", "Cumin", "Curry Leaves"],
  ["Black Pepper", "Cardamom", "Ginger", "Saffron"],
  ["Galangal", "Lemongrass", "Chili"],
  ["Clove", "Nutmeg", "Allspice", "Cinnamon"]
];
const a98 = q98.flat().reduce((uniqueIngredients, current) => {
  if (!uniqueIngredients.includes(current)) {
    uniqueIngredients.push(current);
  }
  return uniqueIngredients;
}, []);
console.log("98.", a98);

// ### 99. Skipped Activity Check
// Check if any student skipped all activity sessions.
const q99 = [
  ["Started", "Paused", "Skipped"],
  ["Pending", "Skipped", "Completed", "Failed"],
  ["Active", "Paused", "Resumed", "Completed"],
  ["Queued", "Running", "Skipped", "Cancelled"],
  ["Retrying", "Paused", "Error", "Completed"]
];
const a99 = q99.flat().some((value) => value === 'Skipped');
console.log("99.", a99);

// ### 100. Distinct Hummed Songs
// Create a list of distinct songs hummed by children on a bus ride.
const q100 = [
  ["Hmm hmm", "La la", "Na na", "Oh oh"],
  ["Da da", "Na na", "Hmm hmm", "Ba ba"],
  ["La la", "Oo oo", "Mm mm", "Na na"],
  ["Oh oh", "Ha ha", "Hmm hmm", "La la"],
  ["Na na", "Da da", "La la", "Yeah yeah"]
];
const a100 = q100.flat().reduce((distinct, current) => {
  if (!distinct.includes(current)) {
    distinct.push(current);
  }
  return distinct;
}, []);
console.log("100.", a100);
