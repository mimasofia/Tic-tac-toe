'use strict'
const store = require('../store')

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
  store.user = data.user
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
  // has to be a way to display this in the dom
  $('.games-messages').text('Success updating game')
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
