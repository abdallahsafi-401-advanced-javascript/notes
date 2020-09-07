'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

//new input from user that returns note object
const userInput = new Input();

//new Notes object
const notes = new Notes();

//check if  it is valid before start execute
userInput.isValid() ? notes.execute(userInput) : showError();

function showError() {
  console.log(`
    api usage: --add or -a <note>

    --add or -a adding new note
`);
}
