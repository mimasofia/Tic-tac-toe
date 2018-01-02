'use strict'
const store = require('../store')
const game = require('../game/games')

const signUpSuccess = function (data) {
  console.log(data)
  $('.game-messages').text('Successfully signed up')
}

const signUpFailure = function (error) {
  console.error(error)
  $('.game-messages').text('Error on sign up')
}

const signInSuccess = function (data) {
  console.log('data: ', data)
  $('.game-messages').text('Successfully signed in')
  // want to save this have token and the user d
  // store now has the user stuff after it runs even if the file is emptty
  store.user = data.user
  $('#password-change').removeClass('hide')
  $('#update-game').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#show-all-games').removeClass('hide')
  $('#show-game').removeClass('hide')
  $('#create-new-game').removeClass('hide')
  $('#sign-in').addClass('hide')
  $('#sign-up').addClass('hide')
}

const signInFailure = function (error) {
  console.error(error)
  $('.game-messages').text('Error on sign in')
}

const changePasswordSuccess = function () {
  console.log('Successfully changed password')
  $('.game-messages').text('Successfully changed password')
}

const changePasswordFailure = function (error) {
  console.log(error)
  $('.game-messages').text('Error change password')
}

const signOutSuccess = function () {
  console.log('Successfully signed out')
  $('.game-messages').text('Successfully signed out')
  store.user = null
}

const signOutFailure = function (error) {
  console.log(error)
  $('.game-messages').text('Error on sign out')
}

const createGameSuccess = function (data) {
  console.log(data)
  console.log(data.game.id)
  $('.game-messages').text('New game created')
  const gameHtml = (
    `<ul>
    <li>Game Id: ${data.game.id}</li>
    </ul>`
  )
  $('#content').append(gameHtml)
}

const createGameFailure = function (error) {
  console.log(error)
  $('.game-messages').text('Error on creating game')
}
const showGameSuccess = function (data) {
  console.log(data)
  // data.game.cells is the emmpty array in api maybe i can push the
  // dome stuff in the game.js to this arraty like .push(data.game.cells)
  console.log(data.game.cells)
  $('#cellZero').text(data.game.cells[0])
  $('#cellOne').text(data.game.cells[1])
  $('#cellTwo').text(data.game.cells[2])
  $('#cellThree').text(data.game.cells[3])
  $('#cellFour').text(data.game.cells[4])
  $('#cellFive').text(data.game.cells[5])
  $('#cellSix').text(data.game.cells[6])
  $('#cellSeven').text(data.game.cells[7])
  $('#cellEight').text(data.game.cells[8])
  $('.game-messages').text('Success getting game')
}

const showGameFailure = function (error) {
  console.log(error)
  $('.games-messages').text('Error getting game')
}

const showAllGamesSuccess = function (data) {
  console.log(data)
  console.log('Success getting all games')
  $('.games-messages').text('Success getting all games')
}

const showAllGamesFailure = function (error) {
  console.log(error)
  $('.game-messages').text('Error getting all games')
}

const updateGameSuccess = function (data) {
  console.log(data)
  console.log(data.game.cells)
  $('.games-messages').text('Success updating game')
  // can get it to display on the board when the update is Successfull
  // but its still not linked with the other board in games.js
  $('#cellZero').text(data.game.cells[0])
  $('#cellOne').text(data.game.cells[1])
  $('#cellTwo').text(data.game.cells[2])
  $('#cellThree').text(data.game.cells[3])
  $('#cellFour').text(data.game.cells[4])
  $('#cellFive').text(data.game.cells[5])
  $('#cellSix').text(data.game.cells[6])
  $('#cellSeven').text(data.game.cells[7])
  $('#cellEight').text(data.game.cells[8])
}

const updateGameFailure = function (error) {
  console.log(error)
  $('.game-messages').text('Error updating game')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createGameSuccess,
  createGameFailure,
  showGameSuccess,
  showGameFailure,
  showAllGamesSuccess,
  showAllGamesFailure,
  updateGameSuccess,
  updateGameFailure
}
