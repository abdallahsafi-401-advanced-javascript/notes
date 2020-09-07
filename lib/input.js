'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.action = this.getAction(args);
    this.payload = this.action ? this.getPayload(args[this.action]) : undefined;
  }

  isValid() {
    return this.action && this.payload;
  }

  getAction(args) {
    return !args ? undefined : args.a ? 'a' : args.add ? 'add' : undefined; //action
  }

  getPayload(content) {
    if (!(typeof content === 'string')) {
      return undefined;
    } else {
      console.log(content);
      return content; //payload
    }
  }
  
}

module.exports = Input;
