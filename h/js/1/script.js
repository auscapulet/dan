const name = prompt("tell me your name, please")
const age = prompt("tell me tour age please")

if (age < 18) {
  alert("You are not allowed to visit this website")
} else if (age >= 18 && age <= 22) {
  let answer = confirm("Are you sure you want to continue?")
  if (answer) {
    alert("Welcome" + " " + name)
  } else {
    alert("You are not allowed to visit this website")
  }
} else {
  alert("Welcome" + " " + name)
}

