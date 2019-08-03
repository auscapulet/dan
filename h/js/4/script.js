
function createNewUser() {
  let newUser = {
    getLogin: function () {
      return console.log(this.firstName[0].toLowerCase() + this.lastName.toLowerCase());
    }
  };
  newUser.firstName = prompt("Please, tell me your first name");
  newUser.lastName = prompt("Please, tell me your second name");
  newUser.getLogin();
}
createNewUser();

