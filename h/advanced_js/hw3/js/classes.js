const cells = document.querySelectorAll(".cell")
const scoreText = document.querySelector(".score-text")

let playerScore = 0
let enemyScore = 0
let lastCell
let timeUp = false

class Game {
  constructor(gameDiff) {
    this.gameDiff = gameDiff
    this.lastCell = undefined
    this.timeUp = false
    playerScore = 0
    enemyScore = 0
  }

  randomCell(cells) {
    const r = Math.floor(Math.random() * cells.length)

    const selectedCell = cells[r]

    if (
      selectedCell == +this.lastCell ||
      selectedCell.classList.contains("red") ||
      selectedCell.classList.contains("green")
    ) {
      return this.randomCell(cells)
    }
    this.lastCell = selectedCell
    return selectedCell
  }

  gameRun() {
    const cell = this.randomCell(cells)
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
        this.timeUp = true
      }
      if (!this.timeUp) this.gameRun()

      if (playerScore === 50) alert("Gongratz, you win!")
      if (enemyScore === 50) alert("Sorry, but your enemy win")

      const playerScoreText = document.querySelector(".player-score")
      playerScoreText.textContent = `Your score: ${playerScore}  `
      scoreText.append(playerScoreText)

      const computerScore = document.querySelector(".computer-score")
      computerScore.textContent = `Enemy score: ${enemyScore}`

      scoreText.append(computerScore)
    }, this.gameDiff)
  }
}

const easyBtn = document.querySelector(".easy")
easyBtn.addEventListener("click", () => {
  const easyGame = new Game(1500)

  easyGame.gameRun()
})
const mediumBtn = document.querySelector(".medium")
mediumBtn.addEventListener("click", () => {
  const mediumGame = new Game(1000)
  mediumGame.gameRun()
})
const hardBtn = document.querySelector(".hard")
hardBtn.addEventListener("click", () => {
  const hardGame = new Game(500)
  hardGame.gameRun()
})

const newGameBtn = document.querySelector(".new-game-btn")
newGameBtn.addEventListener("click", () => {
  cells.forEach(element => {
    element.classList.remove("blue")
    element.classList.remove("red")
    element.classList.remove("green")
  })

  playerScore = 0
  enemyScore = 0
})
