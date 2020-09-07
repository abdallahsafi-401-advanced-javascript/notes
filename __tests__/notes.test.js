'use strict';

const Notes = require('../lib/notes.js');

// Spies!
// we will get to know if something was called or not.
jest.spyOn(global.console, 'log');

// describe the module I am testing
describe('Notes Module', () => {
  // test case

  it('add() does nothing with invalid options', () => {
    const notes = new Notes();
    notes.add(undefined);
    expect(console.log).not.toHaveBeenCalled();
  });

  it('add() does nothing with invalid options', () => {
    const notes = new Notes();
    notes.add();
    expect(console.log).not.toHaveBeenCalled();
  });

  it('add() logs out when given options', () => {
    const notes = new Notes();
    notes.add('note');
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() logs out when given options', () => {
    const notes = new Notes();
    notes.execute({ action: undefined });
    expect(console.log).toHaveBeenCalled();
  });
});
