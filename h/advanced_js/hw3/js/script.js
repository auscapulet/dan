const cells = document.querySelectorAll(".cell")
//const cell = document.getElementsByClassName("cell")

const scoreText = document.querySelector(".score-text")

let playerScore = 0
let enemyScore = 0

let lastCell

// const id = function uniqueId() {
//   for (let i = 0; i < cell.length; i++) {
//     cell[i].id = i + 1
//   }
// }
// id()

let timeUp = false

function game(gameDiff) {
  const r = Math.floor(Math.random() * cells.length)

  function randomCell(cells) {
    const r = Math.floor(Math.random() * cells.length)

    const selectedCell = cells[r]

    if (
      selectedCell == lastCell ||
      selectedCell.classList.contains("red") ||
      selectedCell.classList.contains("green")
    ) {
      // enemyScore--
      console.log("wink")
      return randomCell(cells)
    }
    lastCell = selectedCell
    return selectedCell
  }
  //randomCell(cells)

  function gameRun(gameDiff) {
    const cell = randomCell(cells)
    cell.classList.add("blue")
    cell.addEventListener("click", active)

    function active() {
      cell.classList.remove("blue")
      cell.classList.add("green")
    }

    let cellFired = false
    setTimeout(() => {
      cell.classList.add("red")
      cell.classList.remove("blue")

      if (cell.classList.contains("red")) {
        enemyScore++
      }

      if (cell.classList.contains("green")) {
        cell.classList.remove("red")
        enemyScore--
        playerScore++
      }

      cell.removeEventListener("click", active)
      if (playerScore === 50 || enemyScore === 50) {
        timeUp = true
      }
      if (!timeUp) game(gameDiff)

      const playerScoreText = document.querySelector(".player-score")
      playerScoreText.textContent = `Your score: ${playerScore}  `
      scoreText.append(playerScoreText)

      const computerScore = document.querySelector(".computer-score")
      computerScore.textContent = `Enemy score: ${enemyScore}`

      scoreText.append(computerScore)
    }, gameDiff)
  }

  gameRun(gameDiff)
}

// Game modes

const easyBtn = document.querySelector(".easy")
easyBtn.addEventListener("click", () => {
  gameDiff = 2000
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

  // playerScore = 0
  // enemyScore = 0
})

// class Game {
//   constructor(difficulty) {
//     this.difficulty = difficulty
//     playerScore = 0
//     computerScore = 0
//   }
// }
