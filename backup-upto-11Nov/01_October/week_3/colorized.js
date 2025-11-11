const RESET = "\u001b[0m";
const inRange = (lower, upper, value) => value >= lower && value <= upper
const colorize = (str, color) => {
  if ((typeof color) === 'number' && inRange(0, 225, color)) {
    return `\u001b[38;5;${color}m${str}${RESET}`;
  }
  return str;
}

const genColorFn = (color) => (str) => colorize(str, color);
console.log("This text is back to the default color.");

const orange = genColorFn(208);
const purple = genColorFn(93);
const teal = genColorFn(37);
const Lavender = genColorFn(147);

console.log(orange('This text is a shade of orange.'));
console.log(purple('This text is a shade of purple.'));
console.log(teal('This is a nice teal color.'));
console.log(Lavender('This is a nice Lavender color.'));
console.log(colorize('This is a nice lavender color.', 147));

console.log(colorize('Directly colorizing this string to yellow.', 'yellow'));
console.log(colorize('Directly colorizing with number 123.', 123));