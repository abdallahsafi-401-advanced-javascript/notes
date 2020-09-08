'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.action = this.getAction(args);
    this.payload = this.action ? this.getPayload(args[this.action]) : undefined;
    this.category = this.getCategory(args);
  }

  //check the validation of the command based on the action
  isValid() {
    return this.action === 'add' || this.action === 'a'
      ? this.action && this.payload && this.category
      : this.action;
  }


  //get the action from the command
  getAction(args) {
    return !args
      ? undefined
      : args.a
        ? 'a'
        : args.add
          ? 'add'
          : args.list
            ? 'list'
            : args.delete
              ? 'delete'
              : undefined; //action
  }

  //get the note content from the command
  getPayload(content) {
    if (!(typeof content === 'string')) {
      return undefined;
    } else {
      return content; //payload
    }
  }

  //get the category from the command based on the action
  getCategory(args) {
    return !args
      ? undefined
      : args.c
        ? args.c
        : args.category
          ? args.category
          : undefined; //category
  }
}

//export this class
module.exports = Input;
