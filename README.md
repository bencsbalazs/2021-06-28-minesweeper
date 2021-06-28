# Exercise: 2021-06-28-minesweeper

|[![Testing](https://github.com/bencsbalazs/2021-06-28-minesweeper/actions/workflows/test.yml/badge.svg)](https://github.com/bencsbalazs/2021-06-28-minesweeper/actions/workflows/test.yml)|[![Linting](https://github.com/bencsbalazs/2021-06-28-minesweeper/actions/workflows/lint.yml/badge.svg)](https://github.com/bencsbalazs/2021-06-28-minesweeper/actions/workflows/lint.yml)||

> Installed with automatic script

- Source file
- Basic test file
- Jest for testing (watch and coverage)
- EsLint + Prettier for code style check and linting
- Complexity check
- Automated pipelies with Github actions
  - The tests and checks runs automatically and indicates above ^

## User story 1

> As a user, I have to see an empty board, filled with some bombs

- User test 1/1: The board should be an object
- User test 1/2: It should be false if there are more bombs than fields-1
- User test 1/3: The bombs must be hidden on the board

## User story 2

> Game over on step [1,1] on a bomb

- User test 2/1: Steps should be a list of coordinates and actions
- User test 2/2: It should return with Game over, because a bomb is found

## User story 3

> Clean square 2;0 and get the number of bombs around

- It should return 3 because 3 bombs around

## User story 4

> Mark the bombs around – What I expect after I marked the 3 squares as bombs [1;0 + 1;1 + 0;1]

- Should mark the bombs with a \*

## User story 5

> Game Victory – After I cleared the all the squares [2;0 + 2;1 + 2;2 + 1;2 + 1;2]

- Should return the victory message is no more moves

## User story 6

> Mass wictory

- It should return with victory message, clicking on empty field
