// const byTag = document.getElementsByTagName("p")
// console.dir(byTag)
// const byClass = document.getElementsByClassName(".some-class")
// console.dir(byClass)
// const byId = document.getElementById("id")
// console.dir(byId)
// const byName = document.getElementsByName("name")
// console.dir(byName)
// const bySelector = document.querySelector(".some-class")
// console.dir(bySelector)

// function changeEtc(element) {
//   element.innerText = "<p>Hello</p>"
// }

// //fix innerText

// const list = Array.from(document.getElementsByClassName("training-list"))
// const listItem = list.find(item => item.textConten === "list-elemet 5")

// changeEtc(listItem)

// const removedItem = document.querySelector(".remove-me")
// const biggerOne = document.querySelector(".make-me-bigger")

// removedItem.parentNode.removeChild(removedItem)
// biggerOne.classList.remove("make-me-bigger")
// biggerOne.classList.add("active")

// console.log(removedItem)
// console.log(biggerOne)

// const storageWareHouse = document.querySelectorAll("#storage > li")
// console.log(storageWareHouse)

// storageList.forEach(elem => {
//   const editedElem = elem.innerText.split(":")
//   console.log(editedElem)
//   if (Number(editedElem[1]) === 0) {
//     editedElem[1] = "out"
//   }
//   elem.innerText = editedElem.join(": ")
//   // editedElem.style.color = "red"
// })

// --------task5---------------

// function changeAmount(storageList = document.querySelectorAll("#storage>li")) {
//   storageList = Array.from(storageList)
//   let userChoice = prompt("Enter food name", "Beef")

//   while (!storageList.some(item => item.innerText.includes(userChoice))) {
//     userChoice = prompt("Enter food name", "Beef")
//   }

//   const itemToEdit = storageList.find(item =>
//     item.innerText.includes(userChoice)
//   )

//   const splitedItemText = itemToEdit.innerText.split(": ")
//   splitedItemText[1] = prompt("How much is it now?")

//   itemToEdit.innerText = splitedItemText.join(" :")
// }

// changeAmount()

//task1
// let answer = +prompt("please, tell me size fo square")

// const square = document.createElement("div")
// square.style.cssText = `background-color: green; width: ${answer}px; height ${answer}px`
// document.querySelector("script").before(square)

//task2
// let squareSize = +prompt("please, tell me size of the square")
// let selectedColor = prompt("please, tell me your color")
// let selectedColor2 = prompt("please, tell me your color again")

// let square = document.createElement("div")
// let secondSquare = document.createElement("div")

// square.style.cssText = `background-color: ${selectedColor}; width: ${squareSize}px; height: ${squareSize}px`
// secondSquare.style.cssText = `background-color: ${selectedColor2}; width: ${secondSquare}px; height: ${secondSquare}px`

// document.querySelector("script").before(secondSquare, square)

//task3

// const quan = +prompt("tell me number")
// const color = prompt("tell me color")

// for (let i = 0; i <= quan; i++) {
//   const rectangle = document.createElement("div")
//   rectangle.classList.add("rectangle")
//   rectangle.style.backgroundColor = color
//   document.querySelector("script").beofre(rectangle)
// }

task4

let boardSize = prompt("enter board size", "")
let color1 = prompt("please tell me your first color")
let color2 = prompt("please tell me your second color")

const board = document.createDocumentFragment()

for (let rows = boardSize; rows > 0; rows--) {
  for (let columns = boardSize; columns > 0; columns--) {
    let square = document.createElement("div")
    square.class.add("rectangle")
    if (rows % 2 !== columns % 2) {
    }
    square.style.cssText
  }
}
