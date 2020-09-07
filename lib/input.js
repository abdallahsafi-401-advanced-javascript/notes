'use strict';

const minimist = require('minimist');

function Input() {
  const args = minimist(process.argv.slice(2));
  this.getCommand(args);
}


Input.prototype.getCommand = function (args) {
  let addPatt = /add\b|a\b/g;
  let argStr = Object.keys(args).join('').slice(1);
  let addFlag = addPatt.exec(argStr);
  this.action = addFlag ? 'add' : null; // action
  if (!(typeof args[addFlag] === 'string')) {
    this.payload = null;
  } else {
    this.payload = args[addFlag]; //payload
  }
};

module.exports = Input;
