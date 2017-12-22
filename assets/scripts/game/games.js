const currentGame = ['', '', '', '', '', '', '', '', '']

// need a function that when you click on something it adds a class to it.
const addZero = function () {
  $(this).addClass('o').text('o')
  console.log('hell')
}
$('.game-board').on('click', addZero)

const checkForWinner = function () {
  if ((currentGame[0] === 'x' && currentGame[1] === 'x' && currentGame[2] === 'x') ||
  (currentGame[3] === 'x' && currentGame[4] === 'x' && currentGame[5] === 'x') ||
  (currentGame[6] === 'x' && currentGame[7] === 'x' && currentGame[8] === 'x') ||
  (currentGame[0] === 'x' && currentGame[3] === 'x' && currentGame[6] === 'x') ||
  (currentGame[1] === 'x' && currentGame[4] === 'x' && currentGame[7] === 'x') ||
  (currentGame[2] === 'x' && currentGame[5] === 'x' && currentGame[8] === 'x') ||
  (currentGame[0] === 'x' && currentGame[4] === 'x' && currentGame[8] === 'x') ||
  (currentGame[2] === 'x' && currentGame[4] === 'x' && currentGame[6] === 'x')) {
    console.log('Player X is the winner')
  } else if ((currentGame[0] === 'o' && currentGame[1] === 'o' && currentGame[2] === 'o') ||
  (currentGame[3] === 'o' && currentGame[4] === 'o' && currentGame[5] === 'o') ||
  (currentGame[6] === 'o' && currentGame[7] === 'o' && currentGame[8] === 'o') ||
  (currentGame[0] === 'o' && currentGame[3] === 'o' && currentGame[6] === 'o') ||
  (currentGame[1] === 'o' && currentGame[4] === 'o' && currentGame[7] === 'o') ||
  (currentGame[2] === 'o' && currentGame[5] === 'o' && currentGame[8] === 'o') ||
  (currentGame[0] === 'o' && currentGame[4] === 'o' && currentGame[8] === 'o') ||
  (currentGame[2] === 'o' && currentGame[4] === 'o' && currentGame[6] === 'o')) {
    console.log('Player O is the winner')
  } else {
    console.log('There is a tie')
  }
}

$('#cellZero').on('click', function () {
  currentGame.splice(0, 1, 'x')
  console.log(currentGame)
})

$('#cellOne').on('click', function () {
  currentGame.splice(1, 1, 'x')
  console.log(currentGame)
})

$('#cellTwo').on('click', function () {
  currentGame.splice(2, 1, 'x')
  console.log(currentGame)
})

$('#cellThree').on('click', function () {
  currentGame.splice(3, 1, 'x')
  console.log(currentGame)
})

$('#cellFour').on('click', function () {
  currentGame.splice(4, 1, 'x')
  console.log(currentGame)
})

$('#cellFive').on('click', function () {
  currentGame.splice(5, 1, 'x')
  console.log(currentGame)
})

$('#cellSix').on('click', function () {
  currentGame.splice(6, 1, 'x')
  console.log(currentGame)
})

$('#cellSeven').on('click', function () {
  currentGame.splice(7, 1, 'x')
  console.log(currentGame)
})

$('#cellEight').on('click', function () {
  currentGame.splice(8, 1, 'x')
  console.log(currentGame)
})
// const pushToCurrentGame = function () {

// }

// const addHandlers = function () {
//   $('.game-board').on('click', addZero)
// }
//
// module.exports = {
//   addHandlers
// }

// we want to add a class to a thing when we click it and then we will check that is the things hace that class in a row then they checkForWinner

// this function should check if in index [0,1,2] [3,4,5]] [6,7,8]] has the same thing then they wont
// should check if [0,3,6]] [1,4,7] [2,5,8] wim
// [0,4,8] [2,4,6] won
// if index 0,1,2 equal the same then the won
// should see if a row or column have the same 'value'

// when you click on one of the boxes append or push or whatever to change the text maybe have a
// paragraph in each div and just append an x or o when clicked.
