const firstIcon = document.getElementById("firstIcon")
const secondIcon = document.getElementById("secondIcon")
const firstInput = document.querySelector(".first")
const secondInput = document.querySelector(".second")
const submitButton = document.querySelector(".btn")

// incons toggler

firstIcon.addEventListener("click", event => {
  if (firstInput.type === "password") {
    firstIcon.classList.replace("fa-eye", "fa-eye-slash")
    firstInput.type = "text"
  } else {
    firstInput.type === "password"
    firstIcon.classList.replace("fa-eye-slash", "fa-eye")
    firstInput.type = "password"
  }
})

secondIcon.addEventListener("click", event => {
  if (secondInput.type === "password") {
    secondIcon.classList.replace("fa-eye", "fa-eye-slash")
    secondInput.type = "text"
  } else {
    secondInput.type === "password"
    secondIcon.classList.replace("fa-eye-slash", "fa-eye")
    secondInput.type = "password"
  }
})

// submit execution

submitButton.addEventListener("click", event => {
  event.preventDefault()
  valuesChecker()
})

// values checker

const valuesChecker = () => {
  if (firstInput.value === secondInput.value) {
    alert("You are welcome")
  } else {
    const errorMessage = document.createElement("p")
    errorMessage.style.color = "red"
    errorMessage.innerText = "Нужно ввести одинаковые значения"
    secondInput.after(errorMessage)
  }
}
