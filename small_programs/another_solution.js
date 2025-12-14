const string = {
  zebras: " ZZ  ",
  lion: ' LL ',
  hunt: 'L Z',
  twoLions: 'L L  Z',
  lionZebra0: ' LZ',
  lionZebra02: ' LZZ L',
  lionZebra022: ' LZ ZL',
  lionZebra022: ' L ZL',
};

const findMinDistanceBetweenTwoDistinct = (string) => {

  let min = string.length;
  let lastAnimal = '';
  let lastAnimalIndex = -1;

  for (let current = 0; current < string.length; current++) {
    
    if (lastAnimal !== '' && string[current] !== ' ' && lastAnimal !== string[current]) {
      min = Math.min(min, current - lastAnimalIndex - 1);
    }

    if (string[current] !== ' ') {
      lastAnimal = string[current];
      lastAnimalIndex = current;
    }
  };
  console.log({ string, steps: min === string.length ? -1 : min });

};

for (const key in string) {
  findMinDistanceBetweenTwoDistinct(string[key]);
}
