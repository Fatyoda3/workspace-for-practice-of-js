// ### 1. Festival Ribbon Count
// A craft booth cuts ribbons of different colors throughout the day. They want to know how many **blue** ribbons were cut.
const q1 = ["red", "blue", "red", "green", "red", "blue"];
const a1 = q1.reduce((prev, current) => current === 'blue' ? prev + 1 : prev, 0);
console.log("1.", a1);

// ### 2. Stargazing Log
// A stargazing club logs visible constellations from each night. Combine everyone’s observations into one list of all constellations spotted.
const q2 = [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]];
const a2 = q2.flat().reduce((reduced, current) => {
  if (!(reduced.includes(current))) {
    reduced.push(current);
  }
  return reduced;
}, []);
console.log("2.", a2);

// ### 3. Birdwatching Duplicate Removal
// A birdwatcher notes species seen during a morning walk. Create a list of the species without repeats, preserving the order first seen.
const q3 = ["sparrow", "crow", "sparrow", "eagle", "crow"];
const a3 = q3.reduce((reduced, current) => {
  if (!(reduced.includes(current))) {
    reduced.push(current);
  }
  return reduced;
}, [])
console.log("3.", a3);

// ### 4. Classroom Attendance Check
// A class records names of students present for each period. Determine which distinct students attended at least once.
const q4 = [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]];
const a4 = q4.flat().reduce((reduced, current) => {
  if (!(reduced.includes(current))) {
    reduced.push(current);
  }
  return reduced;
}, [])
console.log("4.", a4);

// ### 5. Candy Jar Stocking
// A store logs candy refills like this. Find the total number of candies added.
const q5 = [[5, 3], [2], [4, 1]];
const a5 = q5.flat().reduce((reduced, current) => reduced + current, 0)
console.log("5.", a5);

// ### 6. Music Rehearsal Notes
// Choir groups practice with sequences. Check whether **any** group sang `"do"`.
const q6 = [["mi", "fa", "so"], ["do", "mi"], ["fa"]];
const a6 = q6.some(val => val.includes('do'));
console.log("6.", a6);

// ### 7. Weather Sensor Validation
// Several temperature sheets. Check if **every** recorded temperature is below 32.
const q7 = [[22, 23], [25, 24, 22], [29]];
const a7 = q7.every(val => val.every(el => el <= 32));
console.log("7.", a7);

// ### 8. Fitness Tracker Miles
// Runner logs. Find the total miles run.
const q8 = [[2, 3, 2], [4], [1, 1]];
const a8 = q8.reduce((reduced, curr) => reduced + curr.reduce((reduced, curr) => reduced + curr, 0), 0);
console.log("8.", a8);

// ### 9. Art Workshop Color Variety
// Paint colors used in sessions. Find unique colors used.
const q9 = [["blue", "yellow"], ["yellow", "green"], ["blue"]];
const a9 = q9.flat().reduce((reduced, current) => {
  if (!(reduced.includes(current))) {
    reduced.push(current);
  }
  return reduced;
}, [])
console.log("9.", a9);

// ### 10. Library Return Counter
// Books returned. Count how many times “Dune” was returned.
const q10 = ["Dune", "Dune", "Foundation", "Dune"];
const a10 = q10.reduce((count, current) => current === 'Dune' ? count + 1 : count, 0)
console.log("10.", a10);

// ### 11. Lunchbox Ingredient Inventory
// Lists of ingredients. Produce a list of distinct ingredients.
const q11 = [["rice", "lentils"], ["rice"], ["curd", "lentils"]];
const a11 = q11.flat().reduce((reduced, current) => {
  if (!(reduced.includes(current))) {
    reduced.push(current);
  }
  return reduced;
}, [])
console.log("11.", a11);

// ### 12. Choir Harmony Review
// Singers produce sequences. Check whether any group sang `"so"`.
const q12 = [["la", "la"], ["mi"], ["so", "la"]];
const a12 = q12.some(group => group.some(choir => choir === 'so'));
console.log("12.", a12);

// ### 13. Vegetable Crate Totals
// Crate weights. Find the sum of all weights.
const q13 = [[4, 6], [2, 3, 1], [5]];
const a13 = q13.reduce((sumTotal, crate) => sumTotal + crate.reduce((total, weight) => weight + total, 0), 0)
console.log("13.", a13);

// ### 14. Post Office Parcel Record
// Parcel sizes logged. Find unique parcel sizes.
const q14 = ["small", "large", "medium", "small"];
const a14 = q14.reduce((unique, current) => {
  if (!(unique.includes(current))) {
    unique.push(current);
  }
  return unique;
}, [])
console.log("14.", a14);

// ### 15. Wildlife Sighting Count
// Animal sightings. Count how many times “deer” was seen.
const q15 = ["deer", "deer", "rabbit", "deer"];
const a15 = q15.reduce((sightings, animal) => animal === 'deer' ? sightings + 1 : sightings, 0);
console.log("15.", a15);

// ### 16. Study Group Completion
// Study groups finish chapters. Find all chapters completed by any group.
const q16 = [[1, 2], [3], [2, 4, 1]];
const a16 = q16.reduce((unique, current) => {
  if (!(unique.includes(current))) {
    unique.push(current);
  }
  return unique;
}, [])
console.log("16.", a16);

// ### 17. Dance Class Steps
// Step sequences. Check if `"turn"` appears in any sequence.
const q17 = [["step", "tap"], ["turn", "step"]];
const a17 = q17.some((steps) => steps.some(step => step === 'turn'));
console.log("17.", a17);

// ### 18. Garden Watering Amount
// Water used. Total amount of water used.
const q18 = [[1, 2, 1], [3], [2]];
const a18 = q18.reduce((sumTotal, water) => sumTotal + water.reduce((total, weight) => weight + total, 0), 0);
console.log("18.", a18);

// ### 19. Paper Crane Making
// Origami students make cranes in sessions. Compute the total cranes.
const q19 = [[3, 2], [1], [4]];
const a19 = q19.reduce((sumTotal, origami) => sumTotal + origami.reduce((total, weight) => weight + total, 0), 0);
console.log("19.", a19);

// ### 20. Fruit Basket Inventory
// Mixed fruits recorded. List unique fruits used.
const q20 = [["apple", "banana"], ["apple"], ["apple", "orange"]];
const a20 = q20.reduce((unique, current) => {
  if (!(unique.includes(current))) {
    unique.push(current);
  }
  return unique;
}, []);
console.log("20.", a20);

// ### 21. Classroom Pen Distribution
// Pens given. Total pens handed out.
const q21 = [[2, 3], [1], [3, 2]];
const a21 = q21.reduce((sumTotal, origami) => sumTotal + origami.reduce((total, weight) => weight + total, 0), 0);
console.log("21.", a21);

// ### 22. Movie Marathon Titles
// Movies watched. List unique titles watched.
const q22 = [["Inception", "Dunkirk"], ["Interstellar"], ["Inception"]];
const a22 = q22.flat().reduce((unique, current) => {
  if (!(unique.includes(current))) {
    unique.push(current);
  }
  return unique;
}, []);
console.log("22.", a22);

// ### 23. Name Badge Sorting
// Students sign in repeatedly. Create a unique list of attendees.
const q23 = ["A", "B", "A", "C", "B"];
const a23 = q23.reduce((unique, current) => {
  if (!(unique.includes(current))) {
    unique.push(current);
  }
  return unique;
}, []);
console.log("23.", a23);

// ### 24. Ice Cream Orders
// Orders recorded. Find how many orders were `"chocolate"`.
const q24 = ["vanilla", "chocolate", "strawberry", "chocolate"];
const a24 = q24.reduce((sumTotal, chocolate) => chocolate === 'chocolate' ? sumTotal + 1 : sumTotal, 0);
console.log("24.", a24);

// ### 25. Flowers in Bouquets
// Bouquets contain. List all unique flowers used.
const q25 = [["rose", "lily"], ["lily", "tulip"]];
const a25 = q25.flat().reduce((unique, current) => {
  if (!(unique.includes(current))) {
    unique.push(current);
  }
  return unique;
}, []);
console.log("25.", a25);

// ### 26. Morning Exercise Count
// Repetitions. Total repetitions done.
const q26 = [[10, 20], [5], [15, 10]];
const a26 = q26.reduce((sumTotal, repSet) => sumTotal + repSet.reduce((total, rep) => rep + total, 0), 0);
console.log("26.", a26);

// ### 27. Train Station Announcements
// Stations announced. Find the station names without repeats.
const q27 = [["A", "B"], ["B", "C"], ["A"]];
const a27 = q27.flat().reduce((unique, current) => {
  if (!(unique.includes(current))) {
    unique.push(current);
  }
  return unique;
}, []);
console.log("27.", a27);

// ### 28. Book Club Pages Read
// Groups read pages. Find total pages read.
const q28 = [[12, 10], [5], [8, 7]];
const a28 = q28.reduce((sumTotal, book) => sumTotal + book.reduce((total, pages) => pages + total, 0), 0);
console.log("28.", a28);

// ### 29. Rainfall Data Check
// Measurements. Check if all values are positive.
const q29 = [[3, 4], [5, 2], [1]];
const a29 = q29.every((val) => val.every(el => el >= 0));
console.log("29.", a29);

// ### 30. Fruit Stand Weight Totals
// Weights. Compute total weight.
const q30 = [[4, 3], [2], [3, 1]];
const a30 = q30.reduce((sumTotal, stand) => sumTotal + stand.reduce((total, fruits) => fruits + total, 0), 0);
console.log("30.", a30);

// ### 31. School Snack List
// Snacks. Unique snacks served.
const q31 = [["idli", "vada"], ["vada", "upma"]];
const a31 = q31.flat().reduce((unique, current) => {
  if (!(unique.includes(current))) {
    unique.push(current);
  }
  return unique;
}, []);
console.log("31.", a31);

// ### 32. Photo Contest Entries
// Photographers submit sets. List unique themes.
const q32 = [["sunset", "bird"], ["river"], ["sunset"]];
const a32 = q32.flat().reduce((unique, current) => {
  if (!(unique.includes(current))) {
    unique.push(current);
  }
  return unique;
}, []);
console.log("32.", a32);

// ### 33. Electricity Reading Validation
// Readings. Check if all readings are below 120.
const q33 = [[110, 115], [118], [109]];
const a33 = q33.every(readings => readings.every(reading => reading < 120));
console.log("33.", a33);

// ### 34. Jogging Lap Count
// Laps. Compute total laps.
const q34 = [[2, 3, 2], [1], [4]];
const a34 = q34.reduce((sumTotal, laps) => sumTotal + laps.reduce((total, lap) => lap + total, 0), 0);
console.log("34.", a34);

// ### 35. Music Playlist Repeats
// Songs played. Count occurrences of `"track1"`.
const q35 = ["track1", "track2", "track1"];
const a35 = q35.reduce((count, track) => track === 'track1' ? count + 1 : count, 0);
console.log("35.", a35);

// ### 36. Café Order Ingredients
// Ingredients. Unique ingredients needed.
const q36 = [["cheese", "bread"], ["tomato"], ["bread"]];
const a36 = q36.flat().reduce((unique, current) => {
  if (!(unique.includes(current))) {
    unique.push(current);
  }
  return unique;
}, []);
console.log("36.", a36);

// ### 37. Student Poetry Words
// Word lists. List all unique words.
const q37 = [["sky", "blue"], ["night"], ["sky", "dark"]];
const a37 = q37.flat().reduce((unique, current) => {
  if (!(unique.includes(current))) {
    unique.push(current);
  }
  return unique;
}, []);
console.log("37.", a37);

// ### 38. Gift Box Items
// Items. List unique items used.
const q38 = [["toy", "sticker"], ["candy", "sticker"]];
const a38 = q38.flat().reduce((unique, current) => {
  if (!(unique.includes(current))) {
    unique.push(current);
  }
  return unique;
}, []);
console.log("38.", a38);

// ### 39. Gym Routine Count
// Routine counts. Total counts.
const q39 = [[6, 4], [3, 2]];
const a39 = q39.reduce((count, track) => track === 'track1' ? count + 1 : count, 0);
console.log("39.", a39);

// ### 40. Fish Tank Measurements
// Measurements. Check if any measurement is above 7.
const q40 = [[5, 6], [7], [6]];
const a40 = q40.some(readings => readings.some(reading => reading > 7));
console.log("40.", a40);

// ### 41. Candy Distribution
// Candy numbers. Sum all candies.
const q41 = [[1, 2, 3], [2]];
const a41 = q41.reduce((sumTotal, candies) => sumTotal + candies.reduce((total, candy) => candy + total, 0), 0);
console.log("41.", a41);

// ### 42. Workshop Attendance
// Participants. List unique participants.
const q42 = [["Tom", "Jerry"], ["Jerry", "Spike"]];
const a42 = q42.flat().reduce((unique, current) => {
  if (!(unique.includes(current))) {
    unique.push(current);
  }
  return unique;
}, []);
console.log("42.", a42);

// ### 43. Space Camp Star Names
// Stars named. Unique star names.
const q43 = [["Vega", "Sirius"], ["Vega", "Rigel"]];
const a43 = q43.flat().reduce((unique, current) => {
  if (!(unique.includes(current))) {
    unique.push(current);
  }
  return unique;
}, []);
console.log("43.", a43);

// ### 44. Train Car Passenger Check
// Counts. Total passengers.
const q44 = [[10, 12], [15]];
const a44 = q44.reduce((sumTotal, passengers) => sumTotal + passengers.reduce((total, passenger) => passenger + total, 0), 0);
console.log("44.", a44);

// ### 45. Weekly Grocery Tally
// Quantities. Find the total.
const q45 = [[3, 5], [2, 1]];
const a45 = q45.reduce((sumTotal, groceries) => sumTotal + groceries.reduce((total, grocery) => grocery + total, 0), 0);
console.log("45.", a45);

// ### 46. Tea Tasting Flavors
// Flavors. Unique flavors.
const q46 = [["mint", "ginger"], ["lemon"], ["mint"]];
const a46 = q46.flat().reduce((unique, current) => {
  if (!(unique.includes(current))) {
    unique.push(current);
  }
  return unique;
}, []);
console.log("46.", a46);

// ### 47. Photography Exposure Values
// Values. Check if any value equals 4.
const q47 = [[2, 3], [1], [4, 2]];
const a47 = q47.some(vals => vals.some(val => val === 4));
console.log("47.", a47);

// ### 48. Drawing Class Tools
// Tools. Unique tools used.
const q48 = [["pencil", "charcoal"], ["ink"], ["pencil"]];
const a48 = q48.flat().reduce((unique, current) => {
  if (!(unique.includes(current))) {
    unique.push(current);
  }
  return unique;
}, []);
console.log("48.", a48);

// ### 49. Coin Collection Tally
// Coins collected. Total coins.
const q49 = [[1, 1, 2], [2, 1]];
const a49 = q49.reduce((sumTotal, coins) => sumTotal +
  coins.reduce((total, coin) => coin + total, 0), 0);
console.log("49.", a49);

// ### 50. Cooking Class Spices
// Spices. Unique spices.
const q50 = [["salt", "pepper"], ["turmeric"], ["salt"]];
const a50 = q50.flat().reduce((unique, current) => {
  if (!(unique.includes(current))) {
    unique.push(current);
  }
  return unique;
}, []);
console.log("50.", a50);
