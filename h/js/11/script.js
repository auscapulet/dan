document.addEventListener("keypress", event => {
  buttons = document.querySelectorAll(".btn")
  console.log(buttons)
  buttons.forEach(element => {
    if (element.innerText.toLowerCase() === event.key.toLowerCase()) {
      element.style.background = "blue"
    } else {
      element.style.background = "black"
    }
  })
})
