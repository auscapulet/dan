
function createNewUser() {
  let newUser = {
    getLogin: function () {
      return console.log(this.firstName[0].toLowerCase() + this.lastName.toLowerCase());
    },
    getPassword: function () {
      return console.log(this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.birthday)
    }
  };
  newUser.firstName = prompt("Please, tell me your first name");
  newUser.lastName = prompt("Please, tell me your second name");
  newUser.birthday = prompt("Please, tell me your age")
  newUser.getLogin();
  newUser.getPassword();
}
createNewUser();

