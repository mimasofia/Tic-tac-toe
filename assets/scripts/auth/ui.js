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
  $('#password-change').addClass('hide')
  $('#update-game').addClass('hide')
  $('#sign-out').addClass('hide')
  $('#show-all-games').addClass('hide')
  $('#show-game').addClass('hide')
  $('#create-new-game').addClass('hide')
  $('#sign-in').removeClass('hide')
  $('#sign-up').removeClass('hide')
}

const signOutFailure = function (error) {
  console.log(error)
  $('.game-messages').text('Error on sign out')
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
