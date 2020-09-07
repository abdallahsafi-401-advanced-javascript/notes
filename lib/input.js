'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.action = this.getAction(args);
    this.payload = this.getPayload(args, this.action);
  }

  isValid() {
    return this.action && this.payload;
  }

  getAction(args) {
    let addPatt = /add\b|a\b/g;
    let argStr = Object.keys(args).join('').slice(1);
    let addFlag = addPatt.exec(argStr);
    return addFlag ? addFlag[0] : undefined; // action
  }

  getPayload(args, flag) {
    if (!(typeof args[flag] === 'string')) {
      return undefined;
    } else {
      console.log(args[flag]);
      return args[flag]; //payload
    }
  }
}

module.exports = Input;
