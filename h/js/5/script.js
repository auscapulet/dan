function createNewUser() {
  let newUser = {
    getLogin: function() {
      return console.log(
        this.firstName[0].toLowerCase() + this.lastName.toLowerCase()
      )
    },
    // getPassword function bad way, i guess
    getPassword: function() {
      return console.log(
        this.firstName[0].toUpperCase() +
          this.lastName.toLowerCase() +
          this.birthday[6] +
          this.birthday[7] +
          this.birthday[8] +
          this.birthday[9]
      )
    },
    getAge: function() {
      const Age = currYear - inputYear
    },
    getPasswordAdvanced: function() {
      return console.log(
        this.firstName[0].toUpperCase() +
          this.lastName.toLowerCase() +
          inputYear
      )
    }
  }
  let now = new Date()
  let currYear = now.getFullYear()

  newUser.firstName = prompt("Please, tell me your first name")
  newUser.lastName = prompt("Please, tell me your second name")
  newUser.birthday = prompt("Please, tell me your birthday dd.mm.yyyy")

  // in case if we will ned not only year, but days and month too
  const inputDay = +newUser.birthday.substr(0, 2)
  const inputMonth = +newUser.birthday.substring(3, 6)

  const inputYear = +newUser.birthday.substring(6, 10)
  newUser.getLogin()
  newUser.getPassword()
  newUser.getPasswordAdvanced()
}
createNewUser()
