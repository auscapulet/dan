const cells = document.querySelectorAll(".cell")
const cell = document.getElementsByClassName("cell")
const playerScoreCounter = document.querySelector(".player-score")
const playerComputerScore = document.querySelector(".computer-score")

let playerScore = 0
let enemyScore = 0

const id = function uniqueId() {
  for (let i = 0; i < cell.length; i++) {
    cell[i].id = i + 1
  }
}
id()

let gameDiff

async function game(gameDiff) {
  const r = Math.floor(Math.random() * cells.length)
  ;(await function activeCell() {
    const selectedCell = cell[r]
    if (r == selectedCell) {
      return activeCell
    }
    lastCell = selectedCell
  })()
  ;(await function gameRun(gameDiff) {
    cell[r].classList.add("blue")

    setTimeout(() => {
      cell[r].classList.add("red")
      cell[r].classList.remove("blue")
      enemyScore++

      cell[r].addEventListener("click", () => {
        cell[r].classList.add("green")
        enemyScore--
        playerScore++
      })
    }, gameDiff)
  })()
}

// Game modes

const easyBtn = document.querySelector(".easy")
easyBtn.addEventListener("click", () => {
  gameDiff = 1500
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
  //activeCell(gameDiff)

  game(gameDiff)
  console.log(playerScore)
  console.log(enemyScore)
})

// class Game {
//   constructor(difficulty) {
//     this.difficulty = difficulty
//     playerScore = 0
//     computerScore = 0
//   }
// }
