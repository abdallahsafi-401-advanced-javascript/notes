"use strict";
const Notes_model = require("./models/notes-schema.js");

class Notes {
  constructor() {}

  execute(userInput) {
    switch (userInput.action) {
      case "a":
        this.add(userInput);
        break;

      case "add":
        this.add(userInput);
        break;

      case "list":
        this.list(userInput);
        break;

      case "delete":
        this.delete(userInput);
        break;

      default:
        console.log("error! please insert a valid flag");
        break;
    }
  }

  async add(userInput) {
    let note = {
      payload: userInput.payload,
      category: userInput.category,
    };
    let record = new Notes_model(note);
    try {
      let saved = await record.save();
      console.log("note saved This is fun : ", saved);
      return saved;
    } catch (err) {
      throw new Error ("somthing went wrong"); // TypeError: failed to fetch
    }
  }

  async list(userInput) {
    console.log('userInput >>>>>', userInput);
    let category;
    if (userInput.payload) {
      category = {
        category: userInput.payload,
      };
    } else {
      category = {};
    }

    try {
      let notesList = await Notes_model.find(category);
      // console.log("list of all the notes : ", notesList);
      notesList.forEach((e) => {
        console.log(`
        ${e.payload}
        Category: ${e.category} ID: ${e._id}
        ------------------------------------------------

        `);
      });
      return notesList;
    } catch (err) {
      alert("somthing went wrong"); // TypeError: failed to fetch
    }
  }

  async delete(userInput) {
    try {
      let deleted = await Notes_model.findByIdAndDelete(userInput.payload);
      console.log("Deleted Note: ", userInput.payload);
      return deleted;
    } catch (err) {
      alert("somthing went wrong"); // TypeError: failed to fetch
    }
  }
}

module.exports = Notes;
