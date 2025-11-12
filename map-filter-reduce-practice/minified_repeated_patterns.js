const sumThese = (grouped, match) => grouped.flat().reduce((prev, current) => current === match ? prev + 1 : prev, 0);
const uniqueValues = (nonUniques) => nonUniques.flat().reduce((reduced, current) => {
  if (!(reduced.includes(current))) {
    reduced.push(current);
  }
  return reduced;
}, []);
const q1 = ["red", "blue", "red", "green", "red", "blue"];
sumThese(q1, 'blue');
const q2 = [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]];
uniqueValues(q2);
const q3 = ["sparrow", "crow", "sparrow", "eagle", "crow"];
uniqueValues(q3);
