'use strict'

const gameApi = require('./gameApi')
const gameUi = require('./gameUi')
const store = require('../store')
const config = require('../config')

const ticTacToe = {
  // game: {
  //   cell: {
  //     'index': index,
  //     value: 'x'
  //   },
  //   over: false
  // },
  // id: ''
}
// turn: 'x',
// cells: ['', '', '', '', '', '', '', '', ''],
// over: false

const changeToken = function () {
  // this function starts with an 'x' becuase that is what the variable turn is
  // then it checks to see if turn is 'x' the next time it will place 'o'
  ticTacToe.turn = (ticTacToe.turn === 'o') ? 'x' : 'o'
}

let counter = 0

const clearBoard = function () {
  // clears the board however does it too fast no time to see who the winner is
  ticTacToe.over = false
  ticTacToe.cells = ['', '', '', '', '', '', '', '', '']
  ticTacToe.turn = 'x'
  counter = 0
  $('.game-board').empty()
  $('.game-messages').empty()
}

const updateGame = function (index, turn) {
  console.log(store.game)
  console.log('THIS IS ' + store.game.id)
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': ticTacToe.turn
        },
        'over': ticTacToe.over
      }
    }
  })
}

$('#cellZero').on('click', function (event) {
  // this clears any message that was from a previous click when you click on a new cell
  $('.game-messages').empty()
  // makes it so that the function only runs if there is an empty spot there
  if (ticTacToe.cells[0] === '') {
    // this adds the turn or token to the array in the [0] index and removes an empty spot
    ticTacToe.cells.splice(0, 1, ticTacToe.turn)
    // then it adds the text of whater that token or run is at this time
    $('#cellZero').text(ticTacToe.turn)
    // counter add one each tme there is a click to check if there is a tie
    counter++
    updateGame(0)
    console.log('LOOK HERE' + ticTacToe)
    changeToken()
    // console.log(ticTacToe.cells)
    // this shows whos turn it is next
    $('.game-messages').text('Its ' + ticTacToe.turn + ' turn')
    // then we tell it to check for winner after every play
    checkForWinner()
    // this is specific to the topleft cell and only works for that one
    // after that it changes the token so that the next time you click it will be 'o'
  } else {
    $('.game-messages').text('Choose another spot')
  }
})

$('#cellOne').on('click', function (event) {
  $('.game-messages').empty()
  if (ticTacToe.cells[1] === '') {
    ticTacToe.cells.splice(1, 1, ticTacToe.turn)
    $('#cellOne').text(ticTacToe.turn)
    counter++
    updateGame(1)
    changeToken()
    // console.log(ticTacToe.cells)
    $('.game-messages').text('Its ' + ticTacToe.turn + ' turn')
    checkForWinner()
  } else {
    $('.game-messages').text('Choose another spot')
  }
})

$('#cellTwo').on('click', function (event) {
  $('.game-messages').empty()
  if (ticTacToe.cells[2] === '') {
    ticTacToe.cells.splice(2, 1, ticTacToe.turn)
    $('#cellTwo').text(ticTacToe.turn)
    counter++
    updateGame(2)
    changeToken()
    // console.log(ticTacToe.cells)
    $('.game-messages').text('Its ' + ticTacToe.turn + ' turn')
    checkForWinner()
  } else {
    $('.game-messages').text('Choose another spot')
  }
})

$('#cellThree').on('click', function (event) {
  $('.game-messages').empty()
  if (ticTacToe.cells[3] === '') {
    ticTacToe.cells.splice(3, 1, ticTacToe.turn)
    $('#cellThree').text(ticTacToe.turn)
    counter++
    updateGame(3)
    changeToken()
    // console.log(ticTacToe.cells)
    $('.game-messages').text('Its ' + ticTacToe.turn + ' turn')
    checkForWinner()
  } else {
    $('.game-messages').text('Choose another spot')
  }
})

$('#cellFour').on('click', function (event) {
  $('.game-messages').empty()
  if (ticTacToe.cells[4] === '') {
    ticTacToe.cells.splice(4, 1, ticTacToe.turn)
    $('#cellFour').text(ticTacToe.turn)
    counter++
    updateGame(4)
    changeToken()
    // console.log(ticTacToe.cells)
    $('.game-messages').text('Its ' + ticTacToe.turn + ' turn')
    checkForWinner()
  } else {
    $('.game-messages').text('Choose another spot')
  }
})

$('#cellFive').on('click', function (event) {
  $('.game-messages').empty()
  if (ticTacToe.cells[5] === '') {
    ticTacToe.cells.splice(5, 1, ticTacToe.turn)
    $('#cellFive').text(ticTacToe.turn)
    counter++
    updateGame(5)
    changeToken()
    // console.log(ticTacToe.cells)
    $('.game-messages').text('Its ' + ticTacToe.turn + ' turn')
    checkForWinner()
  } else {
    $('.game-messages').text('Choose another spot')
  }
})

$('#cellSix').on('click', function (event) {
  $('.game-messages').empty()
  if (ticTacToe.cells[6] === '') {
    ticTacToe.cells.splice(6, 1, ticTacToe.turn)
    $('#cellSix').text(ticTacToe.turn)
    counter++
    updateGame(6)
    changeToken()
    // console.log(ticTacToe.cells)
    $('.game-messages').text('Its ' + ticTacToe.turn + ' turn')
    checkForWinner()
  } else {
    $('.game-messages').text('Choose another spot')
  }
})

$('#cellSeven').on('click', function (event) {
  $('.game-messages').empty()
  if (ticTacToe.cells[7] === '') {
    ticTacToe.cells.splice(7, 1, ticTacToe.turn)
    $('#cellSeven').text(ticTacToe.turn)
    counter++
    updateGame(7)
    changeToken()
    // console.log(ticTacToe.cells)
    $('.game-messages').text('Its ' + ticTacToe.turn + ' turn')
    checkForWinner()
  } else {
    $('.game-messages').text('Choose another spot')
  }
})

$('#cellEight').on('click', function (event) {
  $('.game-messages').empty()
  if (ticTacToe.cells[8] === '') {
    ticTacToe.cells.splice(8, 1, ticTacToe.turn)
    $('#cellEight').text(ticTacToe.turn)
    counter++
    updateGame(8)
    changeToken()
    // console.log(ticTacToe.cells)
    $('.game-messages').text('Its ' + ticTacToe.turn + ' turn')
    checkForWinner()
  } else {
    $('.game-messages').text('Choose another spot')
  }
})

const endGame = function () {
  // this is only true when there is a winner
  if (ticTacToe.over === true) {
    console.log('Restart Game')
    // this is so you cannot keep playing after there is a winner, you cannot click
    // it also doesnt allow you to play again when you click the button 'new game'
    $('.no-click').off('click')
  } else {
    $('.game-messages').text('Choose another spot')
  }
}

const checkForWinner = function () {
  // this function is supposed to check if there are three of the same things in a row and log winner
  // this section is for the 'x' token
  if ((ticTacToe.cells[0] === 'x' && ticTacToe.cells[1] === 'x' && ticTacToe.cells[2] === 'x') ||
    (ticTacToe.cells[3] === 'x' && ticTacToe.cells[4] === 'x' && ticTacToe.cells[5] === 'x') ||
    (ticTacToe.cells[6] === 'x' && ticTacToe.cells[7] === 'x' && ticTacToe.cells[8] === 'x') ||
    (ticTacToe.cells[0] === 'x' && ticTacToe.cells[3] === 'x' && ticTacToe.cells[6] === 'x') ||
    (ticTacToe.cells[1] === 'x' && ticTacToe.cells[4] === 'x' && ticTacToe.cells[7] === 'x') ||
    (ticTacToe.cells[2] === 'x' && ticTacToe.cells[5] === 'x' && ticTacToe.cells[8] === 'x') ||
    (ticTacToe.cells[0] === 'x' && ticTacToe.cells[4] === 'x' && ticTacToe.cells[8] === 'x') ||
    (ticTacToe.cells[2] === 'x' && ticTacToe.cells[4] === 'x' && ticTacToe.cells[6] === 'x')) {
    console.log('Player X is the winner')
    $('.game-messages').text('Player X won')
    // have to change the win to true so that the end function can work
    ticTacToe.over = true
    // then have to envoke the end game function
    updateGame()
    console.log(store.game)
    endGame()
    // this clears the board however does it too fast need to add a dalay ir something
    // clearBoard()
    // this other section is for the 'o' token
  } else if ((ticTacToe.cells[0] === 'o' && ticTacToe.cells[1] === 'o' && ticTacToe.cells[2] === 'o') ||
    (ticTacToe.cells[3] === 'o' && ticTacToe.cells[4] === 'o' && ticTacToe.cells[5] === 'o') ||
    (ticTacToe.cells[6] === 'o' && ticTacToe.cells[7] === 'o' && ticTacToe.cells[8] === 'o') ||
    (ticTacToe.cells[0] === 'o' && ticTacToe.cells[3] === 'o' && ticTacToe.cells[6] === 'o') ||
    (ticTacToe.cells[1] === 'o' && ticTacToe.cells[4] === 'o' && ticTacToe.cells[7] === 'o') ||
    (ticTacToe.cells[2] === 'o' && ticTacToe.cells[5] === 'o' && ticTacToe.cells[8] === 'o') ||
    (ticTacToe.cells[0] === 'o' && ticTacToe.cells[4] === 'o' && ticTacToe.cells[8] === 'o') ||
    (ticTacToe.cells[2] === 'o' && ticTacToe.cells[4] === 'o' && ticTacToe.cells[6] === 'o')) {
    console.log('Player O is the winner')
    $('.game-messages').text('Player O won')
    // api.updateGame()
    ticTacToe.over = true
    updateGame()
    console.log(store.game)
    endGame()
    // clearBoard()
  } else if (counter === 9) {
    ticTacToe.over = true
    // every time there is a click the counter goes up by 1, since there are 9 spots
    // if they all get filled up that means there was no winner so its a tie
    console.log('its a tie')
    $('.game-messages').text('Its a tie')
    updateGame()
    console.log(store.game)
    endGame()
    // clearBoard()
  }
}
// trying some stuff out
$('#create-new-game').on('submit', clearBoard)

$('#password-change').addClass('hide')
$('#update-game').addClass('hide')
$('#sign-out').addClass('hide')
$('#show-all-games').addClass('hide')
$('#show-game').addClass('hide')
$('#create-new-game').addClass('hide')

module.exports = {
  ticTacToe
}
