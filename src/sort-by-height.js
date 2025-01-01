const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortedArray = arr.filter((el) => el !== -1).sort((prev, next) => prev - next);
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === -1) {
      sortedArray.splice(i, 0, -1);
    }
  }
  return sortedArray;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))

module.exports = {
  sortByHeight
};
