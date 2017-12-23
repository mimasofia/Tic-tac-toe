'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('Successfully signed up')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  console.log('data: ', data)
  $('#message').text('Successfully signed in')
  // want to save this have token and the user d
  // store now has the user stuff after it runs even if the file is emptty
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign in')
}

const changePasswordSuccess = function () {
  console.log('Successfully changed password')
  $('#message').text('Successfully changed password')
}

const changePasswordFaliure = function (error) {
  console.error(error)
  $('#message').text('Error change password')
}

const signOutSuccess = function () {
  console.log('Successfully signed out')
  $('#message').text('Successfully signed out')
  store.user = null
}

const signOutFailure = function () {
  console.log('Error on sign out')
  $('#message').text('Error on sign out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFaliure,
  signOutSuccess,
  signOutFailure
}
