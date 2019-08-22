const themeChanger = document.querySelector(".theme-changer")
const container = document.querySelector(".container")
const items = document.querySelectorAll(".tour_title")

themeChanger.addEventListener("click", () => {
  if (localStorage.getItem("default") === "white") {
    localStorage.removeItem("default", "white")
    localStorage.setItem("new", "green")
    container.style.color = "#00FF00"
    items.forEach(item => {
      item.style.color = "#00FF00"
    })
  } else {
    localStorage.removeItem("new", "green")
    localStorage.setItem("default", "white")
    container.style.color = "#fff"
    items.forEach(item => {
      item.style.color = "#fff"
    })
  }

  console.log(localStorage.getItem("default"))
  console.log(localStorage.getItem("new"))
})
