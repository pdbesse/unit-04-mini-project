let win = 0 //display 
let loss = 0 //disply
let time = 60

function startGame() {
  const startTimer = setTimeout(
    function () {
      time--
    }, 1000)
  playGame()
}

function playGame() {
  const wordArray = ['coding']
  console.log('gameplaying')
  document.getElementById('game-container').innerHTML = 'Playing Game'

// key press = data-name, correct answer
// incorrect guess again
}

function gameOver() {
  //all letters are guessed or
  //when the timer runs out
}

document.getElementById('timer').innerHTML = time
document.getElementById('wins-count').innerHTML = win
document.getElementById('loss-count').innerHTML = loss
document.getElementById('startbutton').addEventListener('startGame(')

