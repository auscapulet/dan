const arr = [];

function filterArr() {
  const number = parseInt(prompt("Please, tell me your number"));

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

