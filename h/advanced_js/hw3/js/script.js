const cells = document.querySelectorAll(".cell")
const cell = document.getElementsByClassName("cell")

const scoreText = document.querySelector(".score-text")

let playerScore = 0
let enemyScore = 0

console.log(scoreText)

let lastCell

const id = function uniqueId() {
  for (let i = 0; i < cell.length; i++) {
    cell[i].id = i + 1
  }
}
id()

let timeUp = false

function game(gameDiff) {
  const r = Math.floor(Math.random() * cells.length)
  function activeCell() {
    const selectedCell = cell[r]
    if (selectedCell == lastCell) {
      return activeCell
    }
    lastCell = selectedCell
  }

  function gameRun(gameDiff) {
    cell[r].classList.add("blue")
    cell[r].addEventListener("click", active)

    function active() {
      cell[r].classList.remove("blue")
      cell[r].classList.add("green")
    }

    let cellFired = false
    setTimeout(() => {
      cell[r].classList.add("red")
      cell[r].classList.remove("blue")

      if (cell[r].classList.contains("red")) {
        enemyScore++
      }

      if (cell[r].classList.contains("green")) {
        cell[r].classList.remove("red")
        playerScore++
      }

      cell[r].removeEventListener("click", active)
      if (playerScore === 50 || enemyScore === 50) {
        timeUp = true
      }
      if (!timeUp) game(gameDiff)

      const playerScoreText = document.querySelector(".player-score")
      playerScoreText.textContent = playerScore
      scoreText.append(playerScoreText)

      const computerScore = document.querySelector(".computer-score")
      computerScore.textContent = enemyScore
      console.log(enemyScore)
      scoreText.append(computerScore)
      console.log(enemyScore)
    }, gameDiff)
  }

  gameRun(gameDiff)
}

// Game modes

const easyBtn = document.querySelector(".easy")
easyBtn.addEventListener("click", () => {
  gameDiff = 10000
  console.log(gameDiff)
})
const mediumBtn = document.querySelector(".medium")
mediumBtn.addEventListener("click", () => {
  gameDiff = 1000
  console.log(gameDiff)
})
const hardBtn = document.querySelector(".hard")
hardBtn.addEventListener("click", () => {
  gameDiff = 500
  console.log(gameDiff)
})

const newGameBtn = document.querySelector(".new-game-btn")
newGameBtn.addEventListener("click", () => {
  game(gameDiff)
})

// class Game {
//   constructor(difficulty) {
//     this.difficulty = difficulty
//     playerScore = 0
//     computerScore = 0
//   }
// }
