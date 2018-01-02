'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const index = require('./game/games')
const authEvents = require('./auth/events')
const gameEvents = require('./game/gameEvents')
const store = require('./store')
const authUi = require('./auth/ui')
// const authApi = require('./auth/api')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  authEvents.addHandlers()
  gameEvents.addHandlers()
  // authApi.updateGame()
})
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
