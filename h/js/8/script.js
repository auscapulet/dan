const input = document.getElementById("price")

const tip = document.createElement("p")
tip.classList.add("errorMessage")

input.addEventListener("focusin", event => {
  input.classList.add("active")
  input.classList.remove("wrong")
})

input.addEventListener("focusout", event => {
  let inputValue = parseInt(event.target.value)
  console.log(inputValue)

  if (inputValue !== Number(inputValue) >= 0 && "") {
    input.classList.add("active")
  } else {
    input.classList.add("wrong")
    tip.innerText = "Please enter correct price"
  }

  console.log(typeof event.target.value)
})
