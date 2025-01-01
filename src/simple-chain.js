const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value !== undefined) {
      this.chain.push(String(value));
    }
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || this.chain[position - 1] === undefined) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let resultChain = '';
    if (this.chain.length === 0) {
      return resultChain;
    }
    resultChain = `( ${this.chain[0]} )`;
    for (let i = 1; i < this.chain.length; i++) {
      resultChain += `~~( ${this.chain[i]} )`;
    }
    this.chain = [];
    return resultChain;
  }
};

module.exports = {
  chainMaker
};
