'use strict'
const store = require('../store')
const game = require('../game/games')

const createGameSuccess = function (data) {
  // $('.game-board').removeClass('no-click')
  // console.log('this is data.game.id ' + data.game.id)
  store['game'] = data.game
  // console.log(store)
  $('.ui-messages').text('')
  $('.game-messages').text('New game created')
  const gameHtml = (
    `<ul>
    <li>Game Id: ${data.game.id}</li>
    </ul>`
  )
  $('#content').append(gameHtml)
  $('.game-block').removeClass('hide')
  $('.game-messages').removeClass('hide')
  $('#show-all-games').removeClass('hide')
  $('#show-game').removeClass('hide')
  $('#create-new-game').removeClass('hide')
  $('#content-all').text('')
  $('#finished-game').text('')
}

const createGameFailure = function () {
  // console.log(error)
  $('.game-messages').text('Error on creating game')
}
const showGameSuccess = function (data) {
  // console.log(data))
  // console.log(data.game.cells)
  const gameHtml = (
    `<ul>
    <li>Game Id: ${data.game.id}</li>
    <li>Game Cells: ${data.game.cells}</li>
    <li>Game Over: ${data.game.over}</li>
    </ul>`
  )
  $('#one-game').append(gameHtml)
  $('.game-messages').text('Success getting game')
}

const showGameFailure = function () {
  // console.log(error)
  $('.game-messages').text('Error getting game. Please provide game ID')
}

const showAllGamesSuccess = function (data) {
  for (let i = 0; i < data.games.length; i++) {
    // console.log(data.games[i])
    $('#content-all').text('-Number of games played ' + [i])
  }
  $('.game-messages').text('Success getting number of games')
}

const showAllGamesFailure = function () {
  // console.log(error)
  $('.game-messages').text('Error getting number of games')
}

const updateGameSuccess = function (data) {
  // console.log(data)
  // console.log(data.game.cells)
  $('.game-messages').text('Success updating game')
}

const updateGameFailure = function () {
  // console.log(error)
  $('.game-messages').text('Error updating game')
}

const showGameOverTrueSuccess = function (data) {
  // console.log(data)
  for (let i = 0; i < data.games.length; i++) {
    // console.log(data.games[i])
    $('#finished-game').text('-Number of games finished ' + [i])
  }
  $('.game-messages').text('Success getting all finished games')
}

const showGameOverTrueFailure = function () {
  // console.log(error)
  $('.game-messages').text('Error getting finished games')
}
module.exports = {
  createGameSuccess,
  createGameFailure,
  showGameSuccess,
  showGameFailure,
  showAllGamesSuccess,
  showAllGamesFailure,
  updateGameSuccess,
  updateGameFailure,
  showGameOverTrueSuccess,
  showGameOverTrueFailure
}
