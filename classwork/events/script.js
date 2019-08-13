//1

const btn = document.getElementById("active")

// btn.addEventListener("click", alertFunction)

// function alertFunction() {
//   alert("something")
// }

// // 2

// const btn = document.getElementById("active")
// btn.addEventListener("mouseover", leaveFunction)

// function leaveFunction() {
//   alert("we leaving there")
// }

// // 3

// const block = document.createElement("div")
// block.classList.add("square")

// btn.after(block)
// block.addEventListener("click", () => {
//   block.style.backgroundColor = getRandomColor()
// })

// function getRandomColor() {
//   const opacity = Math.random()
//   const green = Math.floor(Math.random() * 255)
//   const red = Math.floor(Math.random() * 255)
//   const blue = Math.floor(Math.random() * 255)
//   return `rgba(${green}, ${red} ,${blue}, ${opacity})`
// }

// 4
// const block = document.createElement("div")
// const changeColorBtn = document.createElement("button")

// block.classList.add("square")

// changeColorBtn.innerText = "Change color"
// document.querySelector("#active").after(block)

// block.after(changeColorBtn)

// changeColorBtn.addEventListener("click", () => {
//   block.style.backgroundColor = getRandomColor()
// })

// function getRandomColor() {
//   const opacity = Math.random()
//   const green = Math.floor(Math.random() * 255)
//   const red = Math.floor(Math.random() * 255)
//   const blue = Math.floor(Math.random() * 255)
//   return `rgba(${green}, ${red} ,${blue}, ${opacity})`
// }

// console.log(block)
// console.log(changeColorBtn)

//5

// const input = document.querySelector("#colorInput")
// const okBtn = document.querySelector("#okBtn")
// const square = document.querySelector("square")
// console.log(square)

// okBtn.addEventListener("click", () => {
//   square.style.background = input.value
// })

// 6
// const redCircle = document.createElement("div")
// redCircle.classList.add("redCircle")
// document.querySelector("script").before(redCircle)

// document.addEventListener("mousemove", e => {
//   console.log("event.clientX ->", event.clientX)
//   console.log("event.clientY ->", event.clientY)

//   redCircle.style.top = `${event.clientY + redCircle.style.clientWidth / 2}px`
//   redCircle.style.left = `${event.clientX + redCircle.style.clientHeight / 2}px`
// })

//7 Randomiser
container = document.createDocumentFragment()

const textArea = document.createElement("textArea")
const inputBtn = document.createElement("button")
let words = []

inputBtn.innerText = "ok"

inputBtn.addEventListener("click", () => {
  const getWordButton =
    document.createElement("button") || document.querySelector("#getRandomWrod")
  getWordButton.innerText = getRandomWord

  const randomWord =
    document.createElement("p") || document.querySelector("#randomWord")
  randomWord.id = "randomWord"

  inputBtn.after(getWordButton)
  textArea.disabled = true
})

container.appendChild(textArea, inputBtn)
document.querySelector("script").before(container)

getWordButton.addEventListener("click", () => {
  words = textArea.value.split(" ")
  randomWord.innerText = words[Math.random() * words.length]
})
