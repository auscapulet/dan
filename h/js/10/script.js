const iconEyeSlash = document.querySelector(".fa-eye-slash")
const iconEye = document.querySelector(".fa-eye")
const firstInput = document.querySelector(".first")
const secondInput = document.querySelector(".second")
const submitButton = document.querySelector(".btn")

iconEyeSlash.addEventListener("click", event => {
  console.log(firstInput.vale)
})

iconEye.addEventListener("click", event => {
  console.log(secondInput.value)
})

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
  }
}
