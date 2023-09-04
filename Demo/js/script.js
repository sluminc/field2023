let userError = document.getElementById("user-error")
let passError = document.getElementById("pass-error")
let user = document.getElementById("username")
let pass = document.getElementById("password")

user.onblur = function() {
    if (!user.value.includes('@')) { // not email
      user.classList.add('invalid');
      userError.innerHTML = 'Please enter a correct email.'
    }
  };
pass.onblur = function() {
    if (pass.value.length == 0) { // no password
      pass.classList.add('invalid');
      passError.innerHTML = 'Password is a required field.'
    }
  };

  user.onfocus = function() {
    if (this.classList.contains('invalid')) {
      // remove the "error" indication, because the user wants to re-enter something
      this.classList.remove('invalid');
      userError.innerHTML = "";
    }
  };

  pass.onfocus = function() {
    if (this.classList.contains('invalid')) {
      // remove the "error" indication, because the user wants to re-enter something
      this.classList.remove('invalid');
      passError.innerHTML = "";
    }
  };