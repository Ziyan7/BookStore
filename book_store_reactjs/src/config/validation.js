class validation {
  firstName = (firstName) => {
    let nameRegex = new RegExp("^[A-Z][a-zA-Z]{2,}");
    if (nameRegex.test(firstName)) {
      return true;
    }
  };

  LastName = (LastName) => {
    let nameRegex = new RegExp("^[A-Z][a-zA-Z]{2,}");
    if (nameRegex.test(LastName)) {
      return true;
    }
  };

  email = (email) => {
    let emailRegex = RegExp(
      "^[a-zA-Z0-9-_+]+(\\.?[a-zA-Z0-9-_]+)@[a-zA-Z0-9-_]+\\.[a-zA-Z]{2,}(\\.?[a-zA-Z-_]+)$"
    );
    if (emailRegex.test(email)) {
      return true;
    }
  };

  password = (passwordcheck) => {
    let password = RegExp("^(?=.*[0-9])(?=.*[@#$%^&+=]).{8,}$");
    if (password.test(passwordcheck)) {
      return true;
    }
  };
}

module.exports = new validation();
