const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    const str1 = s1.split('');
  const str2 = s2.split('');
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    const letter = str1[i];
    for (let j = 0; j < str2.length; j++) {
      if (str2[j] === letter) {
        count += 1;
        str2.splice(j, 1);
        break;
      }
    }
  }
  return count;
}

// console.log(getCommonCharacterCount('aabcc', 'adcaa')); //3

module.exports = {
  getCommonCharacterCount
};
