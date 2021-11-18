const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  // GET THE VALUES
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (username.value === "") {
    // Show Error
    // Add Error class
    setErrorFor(username, "Username cannot be blank");
  } else {
    // Add Success Class
    setSuccessFor(username);
  }

  if (email.value === "") {
    // Show Error
    // Add Error class
    setErrorFor(email, "Email Field cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Invalid email format");
  } else {
    // Add Success Class
    setSuccessFor(email);
  }

  if (password.value === "") {
    // Show Error
    // Add Error class
    setErrorFor(password, "Password Field cannot be blank");
  } else {
    // Add Success Class
    setSuccessFor(password);
  }

  if (password2.value === "") {
    // Show Error
    // Add Error class
    setErrorFor(password, "Confirm Password Field cannot be blank");
  } else if (password.value !== password2.value) {
    setErrorFor(password2, "Password do not match");
  } else {
    // Add Success Class
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
}
