'use strict'

const config = require('../config')
const store = require('../store')

const createGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + data.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showOneGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + data.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showAllGames = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showGameOverTrue = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// const updateGame = function (index, turn) {
//   console.log(store.game)
//   console.log('THIS IS ' + store.game.id)
//   return $.ajax({
//     url: config.apiOrigin + '/games/' + store.game.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {
//       'game': {
//         'cell': {
//           'index': index,
//           'value': ticTacToe.turn
//         },
//         'over': ticTacToe.over
//       }
//     }
//   })
// }

module.exports = {
  createGame,
  showOneGame,
  showGame,
  // updateGame,
  showAllGames,
  showGameOverTrue
}
