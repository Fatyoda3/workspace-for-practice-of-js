const nestElement = (element, depth) => {
  let nested = [element];

  for (let index = 1; index < depth; index++) {
    nested = [nested];
  }

  return nested;
};

const flat = (nested) => {
  const flatted = [];

  for (let index = 0; index < nested.length; index++) {
    const element = nested[index];

    if (Array.isArray(element))

      return flatted.concat(flat(element));

    flatted.push(element);
  }

  return flatted;
};
let recursiveCall = 0;

const nestToDepthOf = (element, depth, maxDepth = 3) => {
  recursiveCall++;

  const nested = [];
  if (depth === maxDepth) {
    nested.push([element]);
    return nested;
  }

  for (let index = 0; index < depth; index++) {
    nested.push(nestToDepthOf(element, index));
  }

  return nested;
};
const nested = nestToDepthOf(2, 10, 11);
console.log(flat(nested), recursiveCall);
recursiveCall = 0;

