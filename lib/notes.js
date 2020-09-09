'use strict';

function Notes() {}

Notes.execute = function (userInput) {
  switch (userInput.action) {
  case 'add':
    Notes.add(userInput.payload);
    break;

  default:
    console.log('error! please insert a valid flag');
    break;
  }
};

Notes.add = function (payload) {
  if (payload) {
    let note = {
      ID: generateRandomNum(10, 100000),
      content: payload,
    };
    console.log(`Adding Note: ${note.content}  ID: ${note.ID}`);
  } else {
    console.log('error! please insert a valid text');
  }
};

function generateRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = Notes;
