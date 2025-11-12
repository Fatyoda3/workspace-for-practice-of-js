const format = (matrix = [[]]) => {
  const formatted = matrix.map((row) => '[' + row.join(', ') + ']');
  return formatted.join('\n');

};


const mulMatrix = (matrixA = [], matrixB = []) => {
  const colA = matrixA[0].length;
  const rowB = matrixB.length;
  if (colA !== rowB) {
    return [];
  }

  const rowA = matrixA.length;
  const colB = matrixB[0].length;

  const result = [];
  for (let i = 0; i < colA; i++) {
    result.push([]);

  }

  for (let i = 0; i < colA; i++) {

    for (let j = 0; j < rowB; j++) {
      // result[j].push([]);
      for (let k = 0; k < rowA; k++) {
        result[k][i] = 0;
        result[k][i] += matrixA[i][k] * matrixB[k][j];
      }

    }
  }
  const formatted = format(result);
  return formatted;
};

// const a = [
//   [2, 2],
//   [2, 2]
// ];
// const b = [
//   [2, 2],
//   [2, 2]
// ];

const a = [
  [2, 2,],
  [2, 2,]
];
const b = [
  [2, 2, 3],
  [2, 2, 3]
];

console.log(mulMatrix(a, b));