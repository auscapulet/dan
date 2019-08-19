const themeChanger = document.querySelector(".theme-changer")
const container = document.querySelector(".container")
const items = document.querySelectorAll(".tour_title")
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

themeChanger.addEventListener("click", setGreen)

if (localStorage.getItem("textcolor") !== null) {
  let textColor = localStorage.getItem("textcolor")
  // document.style.body.color = textColor
}

function setGreen(evt) {
  container.style.color = "#00FF00"
  items.forEach(item => {
    item.style.color = "#00FF00"
  })
  themeChanger.removeEventListener("click", setGreen)
  themeChanger.addEventListener("click", setDefault)
  localStorage.setItem("textcolor", "green")
}

function setDefault(evt) {
  container.style.color = "#fff"
  items.forEach(item => {
    item.style.color = "#fff"
  })
  themeChanger.removeEventListener("click", setDefault)
  themeChanger.addEventListener("click", setGreen)
  localStorage.setItem("textcolor", "green")
}
