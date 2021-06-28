const { expect } = require('chai');
const { minesweeper } = require('../src/2021-06-28-minesweeper');

describe('User story 1', () => {
  const UAT1Fields = [
    ['X', 'X', 'X'],
    ['X', 'X', 'X'],
    ['X', 'X', 'X'],
  ];
  it('The board should be an object', () => {
    expect(minesweeper(UAT1Fields)).equal(false);
  });
});
