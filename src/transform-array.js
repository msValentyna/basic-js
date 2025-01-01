const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '--double-next' && arr[i] !== '--discard-prev' && arr[i] !== '--discard-next' && arr[i] !== '--double-prev' && arr[i] !== undefined) {
      result.push(arr[i]);
    }
    else if (arr[i] === '--double-next' && arr[i + 1] !== undefined) {
      result.push(arr[i + 1]);
    }
    else if (arr[i] === '--discard-prev') {
      result.pop();
    }
    else if (arr[i] === '--double-prev' && arr[i - 1] !== undefined) {
      result.push(arr[i - 1]);
    }
    else if (arr[i] === '--discard-next') {
      i += 2;
    }
  }
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
