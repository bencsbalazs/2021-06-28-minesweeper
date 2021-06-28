const minesweeper = (fields) => {
    console.log(typeof fields);
  if (typeof fields !== 'object') {
    return false;
  }
};

module.exports = { minesweeper };
