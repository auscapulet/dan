class Board {
  constructor() {}

  render() {
    const boardColumn = document.createElement("div")
    boardColumn.classList.add("boardColumn")
    document.getElementsByTagName("script")[0].before(boardColumn)

    function allowDrop(e) {
      e.preventDefault()
    }

    function drop(e) {
      e.preventDefault()
      const data = e.dataTransfer.getData("text")
      this.appendChild(document.getElementById(data))
      e.dataTransfer.clearData()
    }

    const table = document.getElementsByClassName("boardColumn")
    for (let i = 0; i < table.length; i++) {
      table[i].addEventListener("dragover", allowDrop)
      table[i].addEventListener("drop", drop)
    }

    const buttonCardConstructor = document.createElement("button")
    buttonCardConstructor.classList.add("buttonCardConstructor")
    buttonCardConstructor.setAttribute("id", "openModal")
    buttonCardConstructor.innerText = "Create card"
    boardColumn.append(buttonCardConstructor)

    buttonCardConstructor.addEventListener("click", e => {
      const modalContainer = document.createElement("div")
      modalContainer.classList.add("modal")
      document.getElementsByTagName("script")[0].before(modalContainer)

      const modalContent = document.createElement("div")
      modalContent.classList.add("modal-content")
      modalContainer.append(modalContent)

      const closeModal = document.createElement("span")
      closeModal.classList.add("modal-close")
      closeModal.innerHTML = "&times;"
      modalContent.append(closeModal)

      const modalInput = document.createElement("input")
      modalInput.classList.add("cardText")
      modalContent.append(modalInput)

      const confirmButton = document.createElement("button")
      confirmButton.classList.add("confirmButton")
      confirmButton.innerText = "OK"
      modalContent.append(confirmButton)

      modalInput.addEventListener("keyup", e => {
        const modalInputValue = e.target.value
        return modalInputValue
      })

      // console.log(modalInputValue)

      confirmButton.addEventListener("click", e => {
        const card = document.createElement("div")

        const id = (function() {
          return (
            "card-id-" +
            Math.random()
              .toString(36)
              .substr(2, 3)
          )
        })()

        card.setAttribute("id", `${id}`)
        card.setAttribute("draggable", "true")
        card.classList.add("card")
        modalContainer.style.display = "none"
        boardColumn.append(card)

        const cardText = document.createElement("p")
        cardText.innerText = modalInputValue
        card.append(cardText)
      })

      closeModal.addEventListener("click", e => {
        modalContainer.style.display = "none"
      })

      function allowDrop(e) {
        e.preventDefault()
      }

      function drag(e) {
        e.dataTransfer.setData("text", e.target.vlaue)
      }

      function drop(e) {
        e.preventDefault()
        const data = e.dataTransfer.getData("text")
        this.appendChild(document.getElementById(data))
      }

      // get all cards

      const cards = document.querySelectorAll(".card")
      cards.forEach(item => {
        item.addEventListener("dragstart", drag)
      })
    })
  }
}

const tBoard = new Board()

tBoard.render()
