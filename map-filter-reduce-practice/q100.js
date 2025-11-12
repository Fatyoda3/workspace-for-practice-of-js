const q100 = [
  ["Hmm hmm", "La la", "Na na", "Oh oh"],
  ["Da da", "Na na", "Hmm hmm", "Ba ba"],
  ["La la", "Oo oo", "Mm mm", "Na na"],
  ["Oh oh", "Ha ha", "Hmm hmm", "La la"],
  ["Na na", "Da da", "La la", "Yeah yeah"]
];
const uniqueFinder = (distinct, current) => {
  if (!distinct.includes(current)) {
    distinct.push(current);
  }

  return distinct;
};
const a100 = q100.flat().reduce(uniqueFinder, []);

console.log("100.", a100);