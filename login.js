// Get the form and input elements
const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");

// Add event listeners to the input fields
username.addEventListener("input", function () {
  usernameError.innerHTML = "";
});
password.addEventListener("input", function () {
  passwordError.innerHTML = "";
});
form.addEventListener("submit", function (event) {
  // Prevent the form from submitting
  event.preventDefault();
  console.log("username.value", username.value);

  // Check if the input fields are empty or not
  if (username.value === "") {
    usernameError.innerHTML = "Username is required";
    username.classList.add("incorrect");
    username.classList.remove("correct");
  }
  if (!password.value) {
    passwordError.innerHTML = "Password is required";
    password.classList.add("incorrect");
    password.classList.remove("correct");
  }
  if (username.value.length < 4) {
    usernameError.innerHTML = "Username must be at least 4 characters";
    username.classList.add("incorrect");
    username.classList.remove("correct");
  }
  if (password.value.length < 8) {
    passwordError.innerHTML = "Password must be at least 8 characters";
    password.classList.add("incorrect");
    password.classList.remove("correct");
  }
  if (
    username.value &&
    password.value &&
    username.value.length >= 4 &&
    password.value.length >= 8
  ) {
    password.classList.remove("incorrect");
    password.classList.add("correct");
    username.classList.remove("incorrect");
    username.classList.add("correct");
    localStorage.setItem("auth_status", "on");
    window.location.href = "admindashboard.html";
    // if (localStorage.getItem("auth_status") === "on") {
    //   console.log("User is authenticated");
  }
});
