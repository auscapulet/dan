function calculating() {
  let firstNumber = +prompt("Please, enter a first number")
  let secondNumber = +prompt("Please, enter a second number")
  let mathOperation = prompt("Pelase, enter an operation")
  switch (mathOperation) {
    case "+":
      result = firstNumber + secondNumber
      console.log(result)
      break
    case "-":
      result = firstNumber - secondNumber
      console.log(result)
      break
    case "*":
      result = firstNumber * secondNumber
      console.log(result)
      break
    case "/":
      result = firstNumber / secondNumber
      console.log(result)
      break
    default:
      alert("Error! Write only +-*/ values")
  }
}

// function typeCheck() {
//   while (true) {
//     if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {
//       return
//     } else {
//       alert("Ooops, something wrong, please check your data")
//       asking()
//     }
//   }
// }

calculating()
