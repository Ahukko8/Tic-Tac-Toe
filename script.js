// Animation
gsap.fromTo(".heading", {
  y: -400
}, {
  y: 40
}, {
  delay: 1
}, {
  ease: "in"
});
gsap.fromTo(".start-btn", {
  y: -200
}, {
  y: 50
}, {
  delay: 1
}, {
  ease: "in"
});

// home page
let startButton = document.getElementById("startButton");
let gameBoard = document.getElementById("container");
let homePage = document.getElementById("homePage");
startButton.onclick = function () {
  container.style.display = "block";
  homePage.style.display = "none";
}


// game logic
const X_CLASS = "x"
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const winningMessageTextElement = document.querySelector('[data-win-message-text]')
const winningMessageElement = document.getElementById('winMessage')
const restartButton = document.getElementById('restartButton')
let circleTurn

startGame()

restartButton.addEventListener('click', startGame)


function startGame() {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, {
      once: true
    })
  })
  winningMessageElement.classList.remove("show")
}

function handleClick(e) {
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
  placeMark(cell, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
  }
}


function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = "It's a Draw!"
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
  }
  winningMessageElement.classList.add('show')
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}


function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  })
}

function swapTurns() {
  circleTurn = !circleTurn
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}


