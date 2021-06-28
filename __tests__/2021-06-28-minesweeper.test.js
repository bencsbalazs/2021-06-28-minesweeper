const { expect } = require('chai');
const { minesweeper } = require('../src/2021-06-28-minesweeper');

describe('Game board creation', () => {
  const UAT0Fields = ' ';
  it('The board should be an object', () => {
    expect(minesweeper(UAT0Fields)).equal(false);
  });

  it('It should be false if there are more bombs than fields-1', () => {
    const UAT1Fields = [
      ['X', 'X', 'X'],
      ['X', 'X', 'X'],
      ['X', 'X', 'X'],
    ];
    expect(minesweeper(UAT1Fields)).equal(false);
  });
});
