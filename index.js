'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

//new input from user that returns note object
const userInput = new Input();

//excute the command
Notes.execute(userInput);
