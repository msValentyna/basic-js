const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(flag = true) {
    this.flag = flag;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let messageLowercase = message.toLowerCase();
    let keyLowercase = key.toLowerCase();
    let result = '';
    while (keyLowercase.length < messageLowercase.length) {
      keyLowercase += keyLowercase;
    }
    keyLowercase = keyLowercase.slice(0, messageLowercase.length);

    for (let i = 0, j = 0; i < messageLowercase.length; i++) {
      const indexKey = alphabet.indexOf(keyLowercase[j]);
      const indexMessage = alphabet.indexOf(messageLowercase[i]);
      if (indexMessage === -1) {
        result += messageLowercase[i];
      } else {
        let resultIndex = indexKey + indexMessage;
        if (resultIndex > 25) {
          resultIndex = resultIndex - 26;
        } else {
          resultIndex = resultIndex;
        }
        result += alphabet[resultIndex];
        j++;
      }
    }
    result = result.toUpperCase();
    return this.flag ? result : result.split('').reverse().join('');
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let encryptedMessageLowercase = encryptedMessage.toLowerCase();
    let keyLowercase = key.toLowerCase();
    let result = '';
    while (keyLowercase.length < encryptedMessageLowercase.length) {
      keyLowercase += keyLowercase;
    }
    keyLowercase = keyLowercase.slice(0, encryptedMessageLowercase.length);

    for (let i = 0, j = 0; i < encryptedMessageLowercase.length; i++) {
      const indexKey = alphabet.indexOf(keyLowercase[j]);
      const indexMessage = alphabet.indexOf(encryptedMessageLowercase[i]);
      if (indexMessage === -1) {
        result += encryptedMessageLowercase[i];
      } else {
        let resultIndex = indexMessage - indexKey;
        if (resultIndex < 0) {
          resultIndex = indexMessage - indexKey + 26;
        } else {
          resultIndex = resultIndex;
        }
        result += alphabet[resultIndex];
        j++;
      }
    }
    result = result.toUpperCase();
    return this.flag ? result : result.split('').reverse().join('');

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

// const test = new VigenereCipheringMachine;
// console.log(test.encrypt('attack at dawn!', 'alphonse'));
// console.log(test.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'))

module.exports = {
  VigenereCipheringMachine
};
