'use strict'
const store = require('../store')
// const game = require('../game/games')

const signUpSuccess = function (data) {
  // console.log(data)
  $('.ui-messages').text('Successfully signed up!')
}

const signUpFailure = function () {
  // console.error(error)
  $('.ui-messages').text('Error when signing up. Please try again')
}

const signInSuccess = function (data) {
  // console.log('data: ', data)
  $('.ui-messages').text('Successfully signed in!')
  // want to save this have token and the user d
  // store now has the user stuff after it runs even if the file is emptty
  store.user = data.user
  $('#password-change').removeClass('hide')
  $('#update-game').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#create-new-game').removeClass('hide')
  $('#sign-in').addClass('hide')
  $('#sign-up').addClass('hide')
  $('#show-all-games').removeClass('hide')
  $('#show-game-over-true').removeClass('hide')
  // $('#show-game').removeClass('hide')
}

const signInFailure = function () {
  // console.error(error)
  $('.ui-messages').text('Error when signing in. Please try again')
}

const changePasswordSuccess = function () {
  // console.log('Successfully changed password')
  $('.ui-messages').text('Successfully changed password!')
}

const changePasswordFailure = function () {
  // console.log()
  $('.ui-messages').text('Error when changing password. Please try again')
}

const signOutSuccess = function () {
  // console.log('Successfully signed out')
  $('.ui-messages').text('Successfully signed out!')
  store.user = null
  $('#password-change').addClass('hide')
  $('#update-game').addClass('hide')
  $('#sign-out').addClass('hide')
  $('#show-all-games').addClass('hide')
  $('#show-game').addClass('hide')
  $('#create-new-game').addClass('hide')
  $('#sign-in').removeClass('hide')
  $('#sign-up').removeClass('hide')
  $('#show-game-over-true').addClass('hide')
  $('.game-block').addClass('hide')
  $('.game-messages').addClass('hide')
  $('#content').empty()
  $('#content-all').empty()
  $('#one-game').empty()
  $('#finished-game').empty()
}

const signOutFailure = function () {
  // console.log(error)
  $('.ui-messages').text('Error when signing out. Please try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
