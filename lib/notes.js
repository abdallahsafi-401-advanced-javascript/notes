'use strict';

class Notes {
  constructor() {}

  execute(userInput) {
    switch (userInput.action) {
    case 'a':
      this.add(userInput.payload);
      break;

    case 'add':
      this.add(userInput.payload);
      break;

    default:
      console.log('error! please insert a valid flag');
      break;
    }
  }

  add(payload) {
    if (payload) {
      let note = {
        ID: 'id',
        content: payload,
      };
      console.log(`Adding Note: ${note.content}`);
    }
  }
}

module.exports = Notes;
