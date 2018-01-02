'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const gameApi = require('./gameApi')
const gameUi = require('./gameUi')
const store = require('../store')

const onCreateGame = function (event) {
  event.preventDefault()
  gameApi.createGame()
    .then(gameUi.createGameSuccess)
    .catch(gameUi.createGameFailure)
}

const onShowGame = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  gameApi.showGame(data)
    .then(gameUi.showGameSuccess)
    .catch(gameUi.showGameFailure)
}

const onShowAllGames = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  gameApi.showAllGames(data)
    .then(gameUi.showAllGamesSuccess)
    .catch(gameUi.showAllGamesFailure)
}

const onUpdateGame = function (event) {
  const data = getFormFields(this)
  // i want it to get data from games.js as well
  event.preventDefault()
  console.log(data)
  gameApi.updateGame(data)
    .then(gameUi.updateGameSuccess)
    .catch(gameUi.updateGameFailure)
  $('#update-game').find('input:text, input:password, select, textarea').val('')
}
const addHandlers = function () {
  $('#create-new-game').on('submit', onCreateGame)
  $('#show-game').on('submit', onShowGame)
  $('#show-all-games').on('submit', onShowAllGames)
  $('#update-game').on('submit', onUpdateGame)
}

module.exports = {
  addHandlers
}
