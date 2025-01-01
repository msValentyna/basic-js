const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // const stringNumber = n.toString();
  // let sum = 0
  // for (let i = 0; i < stringNumber.length; i += 1) {
  //   sum += +stringNumber[i];
  // }
  // if (sum > 9) {
  //   return getSumOfDigits(sum);
  // }
  // return sum;
  const number = String(n).split('').map(Number);
  const res = number.reduce((sum, el) => {
    return sum + el;
  }, 0);
  if (res > 9) {
   return getSumOfDigits(res);
  }
  return res;
}

// console.log(getSumOfDigits(101))

module.exports = {
  getSumOfDigits
};
