const moreBombs = (field) => {
  let counter = 0;
  field.forEach((row) => {
    row.forEach((cell) => {
      if (cell === 'X') counter++;
    });
  });
  return counter > 8;
};

const minesweeper = (fields) => {
  if (typeof fields !== 'object') {
    return false;
  }
  const separator = '-+-+-';
  if (moreBombs(fields)) {
    return false;
  }

  let board = `${fields[0][0]}|${fields[0][1]}|${fields[0][2]}\n${separator}\n${fields[1][0]}|${fields[1][1]}|${fields[1][2]}\n${separator}\n${fields[2][0]}|${fields[2][1]}|${fields[2][2]}`;
  board = board.split('X').join(' ');
  return board;
};

module.exports = { minesweeper };
