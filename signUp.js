// Get the form and input elements
// const form = document.getElementById("signUp-form");
const names = document.getElementById("names");
const Password = document.getElementById("Password");
const Email = document.getElementById("Email");
const EmailError = document.getElementById("Email-error");
const checkMark = document.querySelector(".fa-circle-check");
const exclamation = document.querySelector(".fa-circle-exclamation");

const namesError = document.getElementById("name-error");
const PasswordError = document.getElementById("Password-error");

// Add event listeners to the input fields
names.addEventListener("input", function () {
  namesError.innerHTML = "";
});
Password.addEventListener("input", function () {
  PasswordError.innerHTML = "";
});
form.addEventListener("submit", function (event) {
  // Prevent the form from submitting
  event.preventDefault();
  console.log("names.value", names.value);

  // Check if the input fields are empty or not
  if (names.value === "") {
    namesError.innerHTML = "Username is required";
    names.classList.add("incorrect");
    names.classList.remove("correct");
  }
  if (!Email.value) {
    EmailError.innerHTML = "Email is required";
    exclamation.style.display = "block";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
  ) {
    EmailError.innerHTML = "Invalid Email";
    exclamation.style.display = "block";
  } else {
    EmailError.innerHTML = "";
    exclamation.style.display = "none";
    checkMark.style.display = "block";
  }
  if (!password.value) {
    PasswordError.innerHTML = "Password is required";
    Password.classList.add("incorrect");
    Password.classList.remove("correct");
  }
  if (username.value.length < 4) {
    namesError.innerHTML = "Username must be at least 4 characters";
    names.classList.add("incorrect");
    names.classList.remove("correct");
  }
  if (Password.value.length < 8) {
    PasswordError.innerHTML = "Password must be at least 8 characters";
    Password.classList.add("incorrect");
    Password.classList.remove("correct");
  }
  if (
    names.value &&
    Password.value &&
    names.value.length >= 4 &&
    Password.value.length >= 8
  ) {
    Password.classList.remove("incorrect");
    Password.classList.add("correct");
    names.classList.remove("incorrect");
    names.classList.add("correct");
    localStorage.setItem("auth_status", "on");
    window.location.href = "admindashboard.html";
    // if (localStorage.getItem("auth_status") === "on") {
    //   console.log("User is authenticated");
  }
});
