const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let resultMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    const row = [];
    for (let j = 0; j < matrix[0].length; j++) {
      row.push(0);
    }
    resultMatrix.push(row);
  }

  // return resultMatrix;


  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === true) {
        for (let k = i - 1; k <= i + 1; k++) {
          for (let n = j - 1; n <= j + 1; n++ ) {
            if (k >= 0 && n >= 0 && k < matrix.length && n < matrix.length) {
              if (k !== i || n !== j) {
                resultMatrix[k][n] += 1;
              }
            }
          }
        }
      }
    }
  }

  return resultMatrix;
}

// matrix = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false]
//  ]

// matrix = [
//   [false, false, false],
//   [false, false, false],
//  ]

// console.log(minesweeper(matrix));

module.exports = {
  minesweeper
};
