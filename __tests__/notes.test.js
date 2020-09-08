'use strict';

require('@code-fellows/supergoose');
const Notes = require('../lib/notes.js');

// Spies!
// we will get to know if something was called or not.
jest.spyOn(global.console, 'log');

// describe the module I am testing
describe('Notes Module', () => {
  // test add
  it('add() should save the note to database', () => {
    let data = { payload: 'note', category: 'test' };
    const notes = new Notes();
    return notes.add(data).then((res) => {
      for (const key in data) {
        expect(res[key]).toEqual(data[key]);
      }
    });
  });

  // test delete
  it('delete() should delete the note from database', () => {
    let data = { payload: 'note', category: 'test' };
    const notes = new Notes();
    return notes.add(data).then((res) => {
      return notes.delete({ payload: res._id }).then((result) => {
        for (const key in data) {
          expect(result[key]).toEqual(data[key]);
        }
      });
    });
  });

  //test list
  it('list() should get me the list of notes in database', () => {
    let data = { payload: 'note', category: 'test' };
    const notes = new Notes();
    return notes.add(data).then((res) => {
      return notes.list({ payload: 'test' }).then((result) => {
        for (const key in data) {
          expect(result[0][key]).toEqual(data[key]);
        }
      });
    });
  });

  // console log in execute
  it('execute() logs out when given options', () => {
    const notes = new Notes();
    notes.execute({ action: undefined });
    expect(console.log).toHaveBeenCalled();
  });

  // Check for console log
  it('add() logs out when given options', () => {
    let data = { payload: 'note', category: 'test' };
    const notes = new Notes();
    return notes.add(data).then((res) => {
      expect(console.log).toHaveBeenCalled();
    });
  });


});
