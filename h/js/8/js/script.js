// creation

const input = document.createElement("input")
input.setAttribute("placeholder", "Price")
input.setAttribute("type", "text")

document.getElementsByTagName("script")[0].before(input)

const tip = document.createElement("span")
tip.before(input)

const tipButton = document.createElement("button")
tipButton.innerText = "x"
tipButton.classList.add("tipButton")

const errorMessage = document.createElement("p")
errorMessage.innerText = "Pleae enter correct price"

// events and functions

input.addEventListener("focusin", event => {
  input.classList.add("active")
  input.classList.remove("wrong")
  tip.remove()
  tipButton.remove()
  errorMessage.remove()
})

input.addEventListener("focusout", event => {
  let inputValue = parseInt(event.target.value)
  console.log(inputValue)

  // checker

  if (inputValue !== "" && inputValue >= 0) {
    input.classList.add("active")
    document.getElementsByTagName("script")[0].before(tip)
    tip.innerText = `Текущая цена: ${inputValue}`
    document.getElementsByTagName("script")[0].before(tipButton)
  } else {
    input.classList.add("wrong")
    document.getElementsByTagName("script")[0].before(errorMessage)
  }
})

tipButton.addEventListener("click", event => {
  event.currentTarget.remove()
  tip.remove()
  input.value = ""
})
