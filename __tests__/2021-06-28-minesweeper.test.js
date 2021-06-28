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

describe('Clean square 2;0 and get the number of bombs around', () => {
  it('Should click on empty cell', () => {
    const UAT3Fields = [
      [' ', ' ', ' '],
      ['X', 'X', ' '],
      [' ', 'X', ' '],
    ];
    const UAT3Steps = [[2, 0]];
    const expectedResult = '3 bombs around';
    expect(minesweeper(UAT3Fields, UAT3Steps)).equal(expectedResult);
  });
});

describe('Mark the bombs around – What I expect after I marked the 3 squares as bombs [1;0 + 1;1 + 0;1]', () => {
  it('Should indicate the 3 bombs nearby', () => {
    const fields = [
      [' ', ' ', ' '],
      ['X', 'X', ' '],
      [' ', 'X', ' '],
    ];
    const steps = [
      [2, 0],
      [2, 1, 'check'],
      [1, 1, 'check'],
      [1, 0, 'check'],
    ];
    expect(minesweeper(fields, steps)).equal('Bomb checked with a flag');
  });
});

describe('Game Victory – After I cleared the all the squares', () => {
  it('Should return victory message', () => {
    const UAT5Fields = [
      ['2', '2', '1'],
      ['*', '*', '2'],
      ['3', '*', '2'],
    ];
    const UAT5Steps = [[2, 0]];
    expect(minesweeper(UAT5Fields, UAT5Steps)).equal('You win!');
  });
});
