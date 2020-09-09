"use strict";
const Notes_collection = require("./models/notes-collection.js");
const notes_collection = new Notes_collection();

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
    try {
      let saved = await notes_collection.create(userInput);
      console.log("note saved This is fun : ", saved);
      return saved;
    } catch (err) {
      throw new Error("somthing went wrong"); // TypeError: failed to fetch
    }
  }

  async list(userInput) {
    let category;
    userInput.payload ? category = {category: userInput.payload} : category = {}
    try {
      let notesList = await notes_collection.get(category);
      notesList.forEach((e) => {
        console.log(`
        ${e.payload}
        Category: ${e.category} ID: ${e._id}
        ------------------------------------------------

        `);
      });
      return notesList;
    } catch (err) {
      throw new Error("somthing went wrong"); // TypeError: failed to fetch
    }
  }

  async delete(userInput) {
    try {
      let deleted = await notes_collection.delete(userInput.payload);
      console.log("Deleted Note: ", deleted._id);
      return deleted;
    } catch (err) {
      throw new Error("somthing went wrong"); // TypeError: failed to fetch
    }
  }
}

module.exports = Notes;
