'use strict';
const mongoose = require('mongoose');
require('dotenv').config('.env');
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

// this should be in your .env file
const MONGOOSE_URL = process.env.MONGOOSE_URL;

mongoose.connect(MONGOOSE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});


//new input from user that returns note object
const userInput = new Input();

//new Notes object
const notes = new Notes();

//check if  it is valid before start execute
userInput.isValid() ? notes.execute(userInput) : showError();

function showError() {
  console.log(`
    api usage: --add <note> --category <category>

    --add or -a adding new note
    --category or -c adding category
`);
}
