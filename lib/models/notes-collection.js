'use strict';

const Notes_model = require('./notes-schema.js');

class Notes_collection {
  // get by filter
  get(filter) {
    return Notes_model.find(filter);
  }

  // save new note
  create(data) {
    let note = {
      payload: data.payload,
      category: data.category,
    };
    let record = new Notes_model(note);
    return record.save();
  }

  //update existing note
  update(id, data) {
    return Notes_model.findByIdAndUpdate(id, data);
  }

  //delete note
  delete(id) {
    return Notes_model.findByIdAndDelete(id);
  }
}

module.exports = Notes_collection;
