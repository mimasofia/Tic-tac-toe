'use strict'

// const gameApi = require('./gameApi')
// const gameUi = require('./gameUi')
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
  turn: 'x'
}
// turn: 'x',
// cells: ['', '', '', '', '', '', '', '', ''],
// over: false

const changeToken = function () {
  // if (ticTacToe.turn === 'o') {
  // ticTacToe.turn = 'x'
  // ticTacToe.turn = 'o'
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
// this is the api call that updates the object cells in the api
// had to put it here becuase it wasn't working in the api file and the require wasn't working
const updateGame = function (index, turn) {
  // console.log(store.game)
  // console.log('THIS IS ' + store.game.id)
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

$('#cellZero').on('click', function () {
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
    // updateGame send the info to the api to save it there and be ablet to retrieve later
    // specific to each index
    updateGame(0)
    // console.log(ticTacToe.cells[0])
    changeToken()
    // this shows whos turn it is next
    $('.game-messages').text('Its ' + ticTacToe.turn + ' turn')
    // then we tell it to check for winner after every play
    checkForWinner()
    // this is specific to the topleft cell and only works for that one
    // after that it changes the token so that the next time you click it will be 'o'
  } else if (ticTacToe.cells !== '') {
    // this is so that you cannot choose a spot that already has something in it
    $('.game-messages').text('Choose another spot')
  } else {
    // this is so that if you keep clicking after endGame function it doesnt let you click more
    // just displays this message
    $('.game-messages').text('Please start New Game')
  }
})

$('#cellOne').on('click', function () {
  $('.game-messages').empty()
  if (ticTacToe.cells[1] === '') {
    ticTacToe.cells.splice(1, 1, ticTacToe.turn)
    $('#cellOne').text(ticTacToe.turn)
    counter++
    updateGame(1)
    // console.log(ticTacToe.turn)
    changeToken()
    // console.log(ticTacToe.cells)
    $('.game-messages').text('Its ' + ticTacToe.turn + ' turn')
    checkForWinner()
  } else if (ticTacToe.cells !== '') {
    $('.game-messages').text('Choose another spot')
  } else {
    $('.game-messages').text('Please start New Game')
  }
})

$('#cellTwo').on('click', function () {
  $('.game-messages').empty()
  if (ticTacToe.cells[2] === '') {
    ticTacToe.cells.splice(2, 1, ticTacToe.turn)
    $('#cellTwo').text(ticTacToe.turn)
    counter++
    updateGame(2)
    // console.log(ticTacToe.turn)
    changeToken()
    // console.log(ticTacToe.cells)
    $('.game-messages').text('Its ' + ticTacToe.turn + ' turn')
    checkForWinner()
  } else if (ticTacToe.cells !== '') {
    $('.game-messages').text('Choose another spot')
  } else {
    $('.game-messages').text('Please start New Game')
  }
})

$('#cellThree').on('click', function () {
  $('.game-messages').empty()
  if (ticTacToe.cells[3] === '') {
    ticTacToe.cells.splice(3, 1, ticTacToe.turn)
    $('#cellThree').text(ticTacToe.turn)
    counter++
    updateGame(3)
    // console.log(ticTacToe.turn)
    changeToken()
    // console.log(ticTacToe.cells)
    $('.game-messages').text('Its ' + ticTacToe.turn + ' turn')
    checkForWinner()
  } else if (ticTacToe.cells !== '') {
    $('.game-messages').text('Choose another spot')
  } else {
    $('.game-messages').text('Please start New Game')
  }
})

$('#cellFour').on('click', function () {
  $('.game-messages').empty()
  if (ticTacToe.cells[4] === '') {
    ticTacToe.cells.splice(4, 1, ticTacToe.turn)
    $('#cellFour').text(ticTacToe.turn)
    counter++
    updateGame(4)
    // console.log(ticTacToe.turn)
    changeToken()
    // console.log(ticTacToe.cells)
    $('.game-messages').text('Its ' + ticTacToe.turn + ' turn')
    checkForWinner()
  } else if (ticTacToe.cells !== '') {
    $('.game-messages').text('Choose another spot')
  } else {
    $('.game-messages').text('Please start New Game')
  }
})

$('#cellFive').on('click', function () {
  $('.game-messages').empty()
  if (ticTacToe.cells[5] === '') {
    ticTacToe.cells.splice(5, 1, ticTacToe.turn)
    $('#cellFive').text(ticTacToe.turn)
    counter++
    updateGame(5)
    // console.log(ticTacToe.turn)
    changeToken()
    // console.log(ticTacToe.cells)
    $('.game-messages').text('Its ' + ticTacToe.turn + ' turn')
    checkForWinner()
  } else if (ticTacToe.cells !== '') {
    $('.game-messages').text('Choose another spot')
  } else {
    $('.game-messages').text('Please start New Game')
  }
})

$('#cellSix').on('click', function () {
  $('.game-messages').empty()
  if (ticTacToe.cells[6] === '') {
    ticTacToe.cells.splice(6, 1, ticTacToe.turn)
    $('#cellSix').text(ticTacToe.turn)
    counter++
    updateGame(6)
    // console.log(ticTacToe.turn)
    changeToken()
    // console.log(ticTacToe.cells)
    $('.game-messages').text('Its ' + ticTacToe.turn + ' turn')
    checkForWinner()
  } else if (ticTacToe.cells !== '') {
    $('.game-messages').text('Choose another spot')
  } else {
    $('.game-messages').text('Please start New Game')
  }
})

$('#cellSeven').on('click', function () {
  $('.game-messages').empty()
  if (ticTacToe.cells[7] === '') {
    ticTacToe.cells.splice(7, 1, ticTacToe.turn)
    $('#cellSeven').text(ticTacToe.turn)
    counter++
    updateGame(7)
    // console.log(ticTacToe.turn)
    changeToken()
    // console.log(ticTacToe.cells)
    $('.game-messages').text('Its ' + ticTacToe.turn + ' turn')
    checkForWinner()
  } else if (ticTacToe.cells !== '') {
    $('.game-messages').text('Choose another spot')
  } else {
    $('.game-messages').text('Please start New Game')
  }
})

$('#cellEight').on('click', function () {
  $('.game-messages').empty()
  if (ticTacToe.cells[8] === '') {
    ticTacToe.cells.splice(8, 1, ticTacToe.turn)
    $('#cellEight').text(ticTacToe.turn)
    counter++
    updateGame(8)
    // console.log(ticTacToe.turn)
    changeToken()
    // console.log(ticTacToe.cells)
    $('.game-messages').text('Its ' + ticTacToe.turn + ' turn')
    checkForWinner()
  } else if (ticTacToe.cells !== '') {
    $('.game-messages').text('Choose another spot')
  } else {
    $('.game-messages').text('Please start New Game')
  }
})

const endGame = function () {
  // this is only true when there is a winner
  if (ticTacToe.over === true) {
    // this just clears the object so that you can start a new game and click again
    ticTacToe.cells = ''
    ticTacToe.turn = 'x'
    updateGame()
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
    // console.log('Player X is the winner')
    $('.game-messages').text('Player X won! Game over! Please start New Game')
    // have to change the win to true so that the end function can work
    ticTacToe.over = true
    // this update if there is a true or false and if anything else has changed/ who won
    updateGame()
    // then have to envoke the end game function
    endGame()
    // this clears the board however does it too fast need to add a dalay or something
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
    // console.log('Player O is the winner')
    $('.game-messages').text('Player O won! Game over! Please start New Game')
    ticTacToe.over = true
    updateGame()
    endGame()
  } else if (counter === 9) {
    ticTacToe.over = true
    // every time there is a click the counter goes up by 1, since there are 9 spots
    // if they all get filled up that means there was no winner so its a tie
    $('.game-messages').text('Its a tie. Please start a New Game')
    updateGame()
    endGame()
  }
}

// When there is a tie and you have put an 'x' in cellZero and look at that game in
// show game it changes it to an 'o'

// when you create a new game this clears the text and object
$('#create-new-game').on('submit', clearBoard)
// these are to hide the forms depending on if you are signed in or not
$('#password-change').addClass('hide')
$('#update-game').addClass('hide')
$('#sign-out').addClass('hide')
$('#show-all-games').addClass('hide')
$('#show-game').addClass('hide')
$('#create-new-game').addClass('hide')
$('#show-game-over-true').addClass('hide')
$('.game-block').addClass('hide')
$('.game-messages').addClass('hide')

module.exports = {
  ticTacToe
}
