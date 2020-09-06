"use strict";

function Notes() {}

Notes.execute = function (userInput) {
  switch (userInput.action) {
    case "add":
      Notes.add(userInput.payload);
      break;

    default:
      console.log("error! please insert a valid flag");
      break;
  }
};

Notes.add = function (payload) {
  if (payload) {
    let note = {
      ID: 'id',
      content: payload,
    };
    console.log(`Adding Note: ${note.content}`);
  } else {
    console.log("error! please insert a valid text");
  }
};

module.exports = Notes;
