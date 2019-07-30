let firstNumber = 20;
let secondNumber = 5;
let mathOperation = "+";
let result;

function calculating(firstNumber, secondNumber, mathOperation) {
  switch (mathOperation) {
    case "+":
      result = firstNumber + secondNumber;
      console.log(result);
      break;
    case "-":
      result = firstNumber - secondNumber;
      console.log(result);
      break;
    case "*":
      result = firstNumber * secondNumber;
      console.log(result);
      break;
    case "/":
      result = firstNumber / secondNumber;
      console.log(result);
      break;
    default:
      alert("Error! Write only +-*/ values")
  }
}

function asking() {
  firstNumber = prompt("Please, enter a frist number");
  firstNumber = parseInt(firstNumber);

  secondNumber = prompt("Please, enter a second number");
  secondNumber = parseInt(secondNumber);

  mathOperation = prompt("Pelase, enter an operation")
}

function typeCheck() {
  while (true) {
    if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {
      return
    } else {
      alert("Ooops, something wrong, please check your data")
      asking()
    }
  }
}

function run() {
  asking();
  typeCheck();
  calculating(firstNumber, secondNumber, mathOperation)
}

run()