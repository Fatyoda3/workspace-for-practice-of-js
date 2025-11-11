const BALLS = [
  {
    symbol: 'o',
    pos: [0, 0],
    vel: [1, 1],
    trail: []
  },
  {
    symbol: 'x',
    pos: [5, 5],
    vel: [1, 2],
    trail: []
  }, {
    symbol: '*',
    pos: [2, 5],
    vel: [1, 2],
    trail: []
  }
];
const CELL = ' ';
const DIMENSION = 100;

const generateGrid = (objects) => {
  const grid = [];
  const row = CELL.repeat(DIMENSION);

  for (let i = 0; i < DIMENSION; i++) {
    grid.push(row.split(''));
  }

  for (const obj of objects) {
    for (const t of obj.trail) {
      grid[t[0]][t[1]] = '`';
    }

    grid[obj.pos[0]][obj.pos[1]] = obj.symbol;
  }

  return grid.map(x => x.join('')).join('\n');
};

const delay = (() => { for (let _ = 0; _ < 10e8; _++); });

const animate = (drawFn) => {

  while (true) {
    delay();
    console.clear();
    console.log(drawFn());
  }
};

const updateBall = (ball) => {
  const oldPos = ball.pos.slice();
  for (const i in ball.pos) {
    ball.pos[i] = (ball.pos[i] + ball.vel[i]) % DIMENSION;
  }
  ball.trail.push(oldPos);
  ball.trail = ball.trail.slice(-4);
};

const main = () => {

  animate(() => {
    BALLS.forEach(updateBall);
    return generateGrid(BALLS);
  });

  // generateGrid(20, 18);
};
main();