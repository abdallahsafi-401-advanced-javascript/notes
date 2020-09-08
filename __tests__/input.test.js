'use strict';

jest.mock('minimist');
const minimist = require('minimist');
minimist.mockImplementation(() => {
  return {
    a: 'note'
  };
});

const Input = require('../lib/input.js');

describe('Input Module', () => {
  it('input class will work properly', () => {
    let options = new Input();
    expect(options.action).toEqual('a');
    expect(options.payload).toEqual('note');
  });

  it('getAction() will have valid action when specified', () => {
    let options = new Input();
    expect(options.getAction({ a: 'note' })).toEqual('a');
    expect(options.getAction()).toEqual(undefined);
    expect(options.getAction({ add: 'note' })).toEqual('add');
  });

  it('getPayload() will have valid payload when specified', () => {
    let options = new Input();
    expect(options.getPayload('note')).toEqual('note');
    expect(options.getPayload(true)).toEqual(undefined);
    expect(options.getPayload(2)).toEqual(undefined);
  });

  it('isValid() respects proper object', () => {
    let options = new Input();
    expect(options.isValid()).toEqual(undefined);
  });
});
