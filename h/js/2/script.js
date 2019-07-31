let arr = [];

function askingNumber() {
  number = prompt("Please, tell me your number");
  number = parseInt(number)
}

function filterArr() {
  askingNumber()

  for (let i = 1; i <= number; i++) {
    if (i % 5 === 0) {
      arr.push(i)
    }
  }

  if (arr.length === 0) {
    alert("Sorry, no numbers")
  } else {
    console.log(arr)
  }
}

filterArr()

