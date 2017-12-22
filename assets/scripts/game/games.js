const currentGame = []

// need a function that when you click on something it adds a class to it.
const addZero = function () {
  $(this).addClass('o').text('o')
  console.log('hell')
}
const addX = function () {

}
const pushToCurrentGame = function () {

}
const addHandlers = function () {
  $('.game-board').on('click', addZero)
}

module.exports = {
  addHandlers
}
// we want to add a class to a thing when we click it and then we will check that is the things hace that class in a row then they checkForWinner

// const afterEachTurn = function () {
// after each player sets a piece down they should check for a checkForWinner
// checkForWinner()
// }
// this function should check if in index [0,1,2] [3,4,5]] [6,7,8]] has the same thing then they wont
// should check if [0,3,6]] [1,4,7] [2,5,8] wim
// [0,4,8] [2,4,6] won
// if index 0,1,2 equal the same then the won
// const checkForWinner = function () {
// should see if a row or column have the same 'value'

// when you click on one of the boxes append or push or whatever to change the text maybe have a
// paragraph in each div and just append an x or o when clicked.
