const themeChanger = document.querySelector(".theme-changer")
const container = document.querySelector(".container")
const items = document.querySelectorAll(".tour_title")
const defaultTheme = localStorage.setItem("default", "white")
const defaultThemeStatus = localStorage.getItem("default")
// const headerLogo = document.querySelector(".header_logo")

// console.log(items[0])

// themeChanger.addEventListener("click", event => {
//   changeMode()
//   localStorage.setItem("green", "mode")
//   container.style.color = "#00FF00"
//   items.forEach(item => {
//     item.style.color = "#00FF00"
//   })

//   // headerLogo.style.color = "red"
//   changeMode()
// })

// function changeMode() {
//   if (!localStorage.getItem("green")) {
//     console.log("oki")
//   } else {
//     localStorage.getItem("green")
//     console.log("doki")
//   }
// }

themeChanger.addEventListener("click", setGreen())

// function setGreen() {
//   if (defaultThemeStatus === "white") {
//     container.style.color = "#00FF00"
//     items.forEach(item => {
//       item.style.color = "#00FF00"
//     })
//   } else {
//     container.style.color = "#fff"
//     items.forEach(item => {
//       item.style.color = "#fff"
//     })
//   }
// }

function setGreen() {
  if (localStorage.getItem("default") === "white") {
    localStorage.removeItem("default", "white")
    localStorage.setItem("new", "green")
    container.style.color = "#00FF00"
    items.forEach(item => {
      item.style.color = "#00FF00"
    })
  } else if (localStorage.getItem("new") === "green") {
    const greenTheme = localStorage.setItem("new", "green")
    console.log("set white")
  }
}

// if (localStorage.getItem("textcolor") !== null) {
//   let textColor = localStorage.getItem("textcolor")
//   // document.style.body.color = textColor
// }

// function setGreen(evt) {
//   container.style.color = "#00FF00"
//   items.forEach(item => {
//     item.style.color = "#00FF00"
//   })
//   themeChanger.removeEventListener("click", setGreen)
//   themeChanger.addEventListener("click", setDefault)
//   localStorage.setItem("textcolor", "green")
// }

// function setDefault(evt) {
//   container.style.color = "#fff"
//   items.forEach(item => {
//     item.style.color = "#fff"
//   })
//   themeChanger.removeEventListener("click", setDefault)
//   themeChanger.addEventListener("click", setGreen)
//   localStorage.setItem("textcolor", "green")
// }
