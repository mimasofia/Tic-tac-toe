'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#sign-up').find('input:text, input:password, select, textarea').val('')
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  $('#sign-in').find('input:text, input:password, select, textarea').val('')
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  $('#password-change').find('input:text, input:password, select, textarea').val('')
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOotFailure)
}
//
const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onShowGame = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.showGame(data)
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}

const onShowAllGames = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.showAllGames(data)
    .then(ui.showAllGamesSuccess)
    .catch(ui.showAllGamesFailure)
}

const onUpdateGame = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#password-change').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-new-game').on('submit', onCreateGame)
  $('#show-game').on('submit', onShowGame)
  $('#show-all-games').on('submit', onShowAllGames)
  $('#update-game').on('submit', onUpdateGame)
}

module.exports = {
  addHandlers
}
