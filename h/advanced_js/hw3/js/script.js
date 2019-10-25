const cell = document.querySelectorAll(".cell")
const playerScoreCounter = document.querySelector(".player-score")
const playerComputerScore = document.querySelector(".computer-score")

let playerScore = 0
let computerScore = 0

class Game {
  constructor(difficulty) {
    this.difficulty = difficulty
    playerScore = 0
    computerScore = 0
  }
}
