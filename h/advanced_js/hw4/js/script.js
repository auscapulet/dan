class Board {
  constructor(name) {
    this.name = name
  }

  render() {
    const boardColumn = document.createElement("div")
    boardColumn.classList.add("boardColumn")
    document.getElementsByTagName("script")[0].before(boardColumn)

    const buttonCardConstructor = document.createElement("button")
    buttonCardConstructor.classList.add("buttonCardConstructor")
    buttonCardConstructor.innerText = "Create card"
    boardColumn.append(buttonCardConstructor)

    buttonCardConstructor.addEventListener("click", e => {
      const cardText = document.createElement("input")
      cardText.classList.add("cardText")
      buttonCardConstructor.append(cardText)

      cardText.addEventListener("keyup", e => {
        const cardDataContainer = document.createElement("div")
        cardDataContainer.classList.add("cardData")
        boardColumn.append(cardDataContainer)

        const cardInfo = document.createElement("p")
        cardInfo.innerText = cardText.value
        cardDataContainer.append(cardInfo)
      })
    })
  }
}

const tBoard = new Board()

tBoard.render()
