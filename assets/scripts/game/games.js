const ticTacToe = {
  turn: 'x',
  currentGame: ['', '', '', '', '', '', '', '', ''],
  win: false,
  counter: 0
}

const changeToken = function () {
  // this function starts with an 'x' becuase that is what the variable turn is
  // then it checks to see if turn is 'x' the next time it will place 'o'
  ticTacToe.turn = (ticTacToe.turn === 'o') ? 'x' : 'o'
}

$('#cellZero').on('click', function () {
  if (ticTacToe.currentGame[0] === '') {
    // this adds the turn or token to the array in the [0] index and removes an empty spot
    ticTacToe.currentGame.splice(0, 1, ticTacToe.turn)
    // then it adds the text of whater that token or run is at this time
    $('#cellZero').text(ticTacToe.turn)
    // counter add one each tme there is a click to check if there is a tie
    ticTacToe.counter++
    // after that it changes the token so that the next time you click it will be 'o'
    changeToken()
    console.log(ticTacToe.currentGame)
    // then we tell it to check for winner after every play
    checkForWinner()
    // this is specific to the topleft cell and only works for that one
  }
})

$('#cellOne').on('click', function () {
  if (ticTacToe.currentGame[1] === '') {
    ticTacToe.currentGame.splice(1, 1, ticTacToe.turn)
    $('#cellOne').text(ticTacToe.turn)
    ticTacToe.counter++
    changeToken()
    console.log(ticTacToe.currentGame)
    checkForWinner()
  }
})

$('#cellTwo').on('click', function () {
  if (ticTacToe.currentGame[2] === '') {
    ticTacToe.currentGame.splice(2, 1, ticTacToe.turn)
    $('#cellTwo').text(ticTacToe.turn)
    ticTacToe.counter++
    changeToken()
    console.log(ticTacToe.currentGame)
    checkForWinner()
  }
})

$('#cellThree').on('click', function () {
  if (ticTacToe.currentGame[3] === '') {
    ticTacToe.currentGame.splice(3, 1, ticTacToe.turn)
    $('#cellThree').text(ticTacToe.turn)
    ticTacToe.counter++
    changeToken()
    console.log(ticTacToe.currentGame)
    checkForWinner()
  }
})

$('#cellFour').on('click', function () {
  if (ticTacToe.currentGame[4] === '') {
    ticTacToe.currentGame.splice(4, 1, ticTacToe.turn)
    $('#cellFour').text(ticTacToe.turn)
    ticTacToe.counter++
    changeToken()
    console.log(ticTacToe.currentGame)
    checkForWinner()
  }
})

$('#cellFive').on('click', function () {
  if (ticTacToe.currentGame[5] === '') {
    ticTacToe.currentGame.splice(5, 1, ticTacToe.turn)
    $('#cellFive').text(ticTacToe.turn)
    ticTacToe.counter++
    changeToken()
    console.log(ticTacToe.currentGame)
    checkForWinner()
  }
})

$('#cellSix').on('click', function () {
  if (ticTacToe.currentGame[6] === '') {
    ticTacToe.currentGame.splice(6, 1, ticTacToe.turn)
    $('#cellSix').text(ticTacToe.turn)
    ticTacToe.counter++
    changeToken()
    console.log(ticTacToe.currentGame)
    checkForWinner()
  }
})

$('#cellSeven').on('click', function () {
  if (ticTacToe.currentGame[7] === '') {
    ticTacToe.currentGame.splice(7, 1, ticTacToe.turn)
    $('#cellSeven').text(ticTacToe.turn)
    ticTacToe.counter++
    changeToken()
    console.log(ticTacToe.currentGame)
    checkForWinner()
  }
})

$('#cellEight').on('click', function () {
  if (ticTacToe.currentGame[8] === '') {
    ticTacToe.currentGame.splice(8, 1, ticTacToe.turn)
    $('#cellEight').text(ticTacToe.turn)
    ticTacToe.counter++
    changeToken()
    console.log(ticTacToe.currentGame)
    checkForWinner()
  }
})

const endGame = function () {
  if (ticTacToe.win === true) {
    console.log('Restart Game')
    $('.game-board').off('click')
  }
}

const checkForWinner = function () {
  // this function is supposed to check if there are three of the same things in a row and log winner
  // this section is for the 'x' token
  if ((ticTacToe.currentGame[0] === 'x' && ticTacToe.currentGame[1] === 'x' && ticTacToe.currentGame[2] === 'x') ||
  (ticTacToe.currentGame[3] === 'x' && ticTacToe.currentGame[4] === 'x' && ticTacToe.currentGame[5] === 'x') ||
  (ticTacToe.currentGame[6] === 'x' && ticTacToe.currentGame[7] === 'x' && ticTacToe.currentGame[8] === 'x') ||
  (ticTacToe.currentGame[0] === 'x' && ticTacToe.currentGame[3] === 'x' && ticTacToe.currentGame[6] === 'x') ||
  (ticTacToe.currentGame[1] === 'x' && ticTacToe.currentGame[4] === 'x' && ticTacToe.currentGame[7] === 'x') ||
  (ticTacToe.currentGame[2] === 'x' && ticTacToe.currentGame[5] === 'x' && ticTacToe.currentGame[8] === 'x') ||
  (ticTacToe.currentGame[0] === 'x' && ticTacToe.currentGame[4] === 'x' && ticTacToe.currentGame[8] === 'x') ||
  (ticTacToe.currentGame[2] === 'x' && ticTacToe.currentGame[4] === 'x' && ticTacToe.currentGame[6] === 'x')) {
    console.log('Player X is the winner')
    ticTacToe.win = true
    endGame()
    // this other section is for the 'o' token
  } else if ((ticTacToe.currentGame[0] === 'o' && ticTacToe.currentGame[1] === 'o' && ticTacToe.currentGame[2] === 'o') ||
  (ticTacToe.currentGame[3] === 'o' && ticTacToe.currentGame[4] === 'o' && ticTacToe.currentGame[5] === 'o') ||
  (ticTacToe.currentGame[6] === 'o' && ticTacToe.currentGame[7] === 'o' && ticTacToe.currentGame[8] === 'o') ||
  (ticTacToe.currentGame[0] === 'o' && ticTacToe.currentGame[3] === 'o' && ticTacToe.currentGame[6] === 'o') ||
  (ticTacToe.currentGame[1] === 'o' && ticTacToe.currentGame[4] === 'o' && ticTacToe.currentGame[7] === 'o') ||
  (ticTacToe.currentGame[2] === 'o' && ticTacToe.currentGame[5] === 'o' && ticTacToe.currentGame[8] === 'o') ||
  (ticTacToe.currentGame[0] === 'o' && ticTacToe.currentGame[4] === 'o' && ticTacToe.currentGame[8] === 'o') ||
  (ticTacToe.currentGame[2] === 'o' && ticTacToe.currentGame[4] === 'o' && ticTacToe.currentGame[6] === 'o')) {
    console.log('Player O is the winner')
    ticTacToe.win = true
    endGame()
  } else if (ticTacToe.counter === 9) {
    console.log('its a tie')
  }
}
