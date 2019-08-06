const name = prompt("tell me your name, please")
while (name.length === 0) {
  name = prompt('Please, insert your name!');
}
const age = prompt("tell me tour age please")
while (isFinite(age) === false) {
  age = prompt('Please, insert your age!');
}

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
