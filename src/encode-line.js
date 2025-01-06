const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let sum = 1;
  let result = '';
  while(arr.length > 0) {
    let current = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === current) {
        sum++;
      } else {
        break;
      }
    }
    arr.splice(0, sum);
    result += sum === 1 ? current : sum + current;
    sum = 1;
  }

  return result;
}

// console.log(encodeLine('aaaatttt')); // '4a4t');
// console.log(encodeLine('aabbccc')); // '2a2b3c');
// console.log(encodeLine('abbcca')); // 'a2b2ca');
// console.log(encodeLine('xyz')); // 'xyz');
// console.log(encodeLine('')); // '');

module.exports = {
  encodeLine
};
