const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numbers = n.toString().split('');
  console.log(numbers);
  const results = [];
  for (let i = 0; i < numbers.length; i += 1) {
    const temp = [...numbers];
    temp.splice(i, 1);
    results.push(+(temp.join('')));
  }
  return Math.max(...results);
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// console.log(deleteDigit(152));

module.exports = {
  deleteDigit
};
