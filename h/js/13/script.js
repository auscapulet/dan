const themeChanger = document.querySelector(".theme-changer")
const container = document.querySelector(".container")
const items = document.querySelectorAll(".tour_title")

themeChanger.addEventListener("click", event => {
  container.style.color = "red"
  items.style.color = "red"
})
