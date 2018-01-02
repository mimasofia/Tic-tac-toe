'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const index = require('./game/games')
const authEvents = require('./auth/events')
const store = require('./store')
const authUi = require('./auth/ui')
// const authApi = require('./auth/api')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  authEvents.addHandlers()
  // authApi.updateGame()
})
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
