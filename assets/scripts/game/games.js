const ticTacToe = {
  turn: 'x',
  currentGame: ['', '', '', '', '', '', '', '', ''],
  win: false
}
// need a function that when you click on something it adds a class to it.
// const addZero = function () {
//   $(this).addClass('o').text('o')
//   console.log('hell')
// }
// $('.game-board').on('click', addZero)

const changeToken = function () {
  ticTacToe.turn = (ticTacToe.turn === 'o') ? 'x' : 'o'
  // this.win = this.checkForWinner()
}

// these add the 'x' so a specified intex for now they are only adding x
// becuse thats what i have in the items part.

$('#cellZero').on('click', function () {
  ticTacToe.currentGame.splice(0, 1, ticTacToe.turn)
  changeToken()
  console.log(ticTacToe.currentGame)
  checkForWinner()
  // this is specific to the top left cell and only works for that one
})

$('#cellOne').on('click', function () {
  ticTacToe.currentGame.splice(1, 1, ticTacToe.turn)
  changeToken()
  console.log(ticTacToe.currentGame)
  checkForWinner()
})

$('#cellTwo').on('click', function () {
  ticTacToe.currentGame.splice(2, 1, ticTacToe.turn)
  changeToken()
  console.log(ticTacToe.currentGame)
  checkForWinner()
})

$('#cellThree').on('click', function () {
  ticTacToe.currentGame.splice(3, 1, ticTacToe.turn)
  changeToken()
  console.log(ticTacToe.currentGame)
  checkForWinner()
})

$('#cellFour').on('click', function () {
  ticTacToe.currentGame.splice(4, 1, ticTacToe.turn)
  changeToken()
  console.log(ticTacToe.currentGame)
  checkForWinner()
})

$('#cellFive').on('click', function () {
  ticTacToe.currentGame.splice(5, 1, ticTacToe.turn)
  changeToken()
  console.log(ticTacToe.currentGame)
  checkForWinner()
})

$('#cellSix').on('click', function () {
  ticTacToe.currentGame.splice(6, 1, ticTacToe.turn)
  changeToken()
  console.log(ticTacToe.currentGame)
  checkForWinner()
})

$('#cellSeven').on('click', function () {
  ticTacToe.currentGame.splice(7, 1, ticTacToe.turn)
  changeToken()
  console.log(ticTacToe.currentGame)
  checkForWinner()
})

$('#cellEight').on('click', function () {
  ticTacToe.currentGame.splice(8, 1, ticTacToe.turn)
  changeToken()
  console.log(ticTacToe.currentGame)
  checkForWinner()
})

const checkForWinner = function () {
  // this function is supposed to check if there are thre of the same things in a row and log winner
  if ((ticTacToe.currentGame[0] === 'x' && ticTacToe.currentGame[1] === 'x' && ticTacToe.currentGame[2] === 'x') ||
  (ticTacToe.currentGame[3] === 'x' && ticTacToe.currentGame[4] === 'x' && ticTacToe.currentGame[5] === 'x') ||
  (ticTacToe.currentGame[6] === 'x' && ticTacToe.currentGame[7] === 'x' && ticTacToe.currentGame[8] === 'x') ||
  (ticTacToe.currentGame[0] === 'x' && ticTacToe.currentGame[3] === 'x' && ticTacToe.currentGame[6] === 'x') ||
  (ticTacToe.currentGame[1] === 'x' && ticTacToe.currentGame[4] === 'x' && ticTacToe.currentGame[7] === 'x') ||
  (ticTacToe.currentGame[2] === 'x' && ticTacToe.currentGame[5] === 'x' && ticTacToe.currentGame[8] === 'x') ||
  (ticTacToe.currentGame[0] === 'x' && ticTacToe.currentGame[4] === 'x' && ticTacToe.currentGame[8] === 'x') ||
  (ticTacToe.currentGame[2] === 'x' && ticTacToe.currentGame[4] === 'x' && ticTacToe.currentGame[6] === 'x')) {
    console.log('Player X is the winner')
  } else if ((ticTacToe.currentGame[0] === 'o' && ticTacToe.currentGame[1] === 'o' && ticTacToe.currentGame[2] === 'o') ||
  (ticTacToe.currentGame[3] === 'o' && ticTacToe.currentGame[4] === 'o' && ticTacToe.currentGame[5] === 'o') ||
  (ticTacToe.currentGame[6] === 'o' && ticTacToe.currentGame[7] === 'o' && ticTacToe.currentGame[8] === 'o') ||
  (ticTacToe.currentGame[0] === 'o' && ticTacToe.currentGame[3] === 'o' && ticTacToe.currentGame[6] === 'o') ||
  (ticTacToe.currentGame[1] === 'o' && ticTacToe.currentGame[4] === 'o' && ticTacToe.currentGame[7] === 'o') ||
  (ticTacToe.currentGame[2] === 'o' && ticTacToe.currentGame[5] === 'o' && ticTacToe.currentGame[8] === 'o') ||
  (ticTacToe.currentGame[0] === 'o' && ticTacToe.currentGame[4] === 'o' && ticTacToe.currentGame[8] === 'o') ||
  (ticTacToe.currentGame[2] === 'o' && ticTacToe.currentGame[4] === 'o' && ticTacToe.currentGame[6] === 'o')) {
    console.log('Player O is the winner')
  }
}
