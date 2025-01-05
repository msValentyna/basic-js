const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = str;
  const resultAdditionArray = [];

  // console.log(options.additionRepeatTimes);

  for (let i = 0; i < (options.additionRepeatTimes || 1); i++) {
    resultAdditionArray.push(options.addition !== undefined ? String(options.addition) : '');
  }

  const resultAddition = str + resultAdditionArray.join(options.additionSeparator !== undefined ? String(options.additionSeparator) : '|');
  let resultArray = [];
  // return resultAddition;
  for (let i = 0; i < (options.repeatTimes || 1); i++) {
    resultArray.push(resultAddition);
  }
  result = resultArray.join(options.separator !== undefined ? String(options.separator) : '+')
  return result;
}


// console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }))

// console.log(repeater('la', { repeatTimes: 3 })), //'la+la+la')

// console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' })) // 'TESTstrADD!');

// console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' })); //'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null');

module.exports = {
  repeater
};
