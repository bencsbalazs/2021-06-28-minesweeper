const { expect } = require('chai');
const { minesweeper, drawBoard } = require('../src/2021-06-28-minesweeper');

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
  it('The bombs should be hidden on the board', () => {
    const UAT12Fields = [
      [' ', ' ', ' '],
      [' ', 'X', ' '],
      [' ', ' ', ' '],
    ];
    expect(drawBoard(UAT12Fields)).equal(' | | \n-+-+-\n | | \n-+-+-\n | | ');
  });
});

describe('Game over on step 1', () => {
  it('Should be game over if step on bomb', () => {
    const UAT2Fields = [
      [' ', ' ', ' '],
      [' ', 'X', ' '],
      [' ', ' ', ' '],
    ];
    const steps = [[1, 1]];
    expect(minesweeper(UAT2Fields, steps)).equal('Game over');
  });
});