// Get the form and input elements
const registerBtn = document.getElementById("register-btn");
const names = document.getElementById("names");
const password = document.getElementById("Password");
const email = document.getElementById("Email");
const emailError = document.getElementById("Email-error");
const checkMark = document.querySelector(".fa-circle-check");
const exclamation = document.querySelector(".fa-circle-exclamation");

const namesError = document.getElementById("name-error");
const passwordError = document.getElementById("Password-error");

// Add event listeners to the input fields
names.addEventListener("input", function () {
  namesError.innerHTML = "";
});
password.addEventListener("input", function () {
  passwordError.innerHTML = "";
});
email.addEventListener("input", function () {
  emailError.innerHTML = "";
  checkMark.style.display = "none";
  exclamation.style.display = "none";
});

registerBtn.addEventListener("click", function (event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Check if the input fields are empty or not
  if (names.value.trim() === "") {
    namesError.innerHTML = "Username is required";
    names.classList.add("incorrect");
    names.classList.remove("correct");
  } else if (names.value.length < 4) {
    namesError.innerHTML = "Username must be at least 4 characters";
    names.classList.add("incorrect");
    names.classList.remove("correct");
  } else {
    namesError.innerHTML = "";
    names.classList.remove("incorrect");
    names.classList.add("correct");
  }

  if (email.value.trim() === "") {
    emailError.innerHTML = "Email is required";
    exclamation.style.display = "block";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
  ) {
    emailError.innerHTML = "Invalid Email";
    exclamation.style.display = "block";
  } else {
    emailError.innerHTML = "";
    exclamation.style.display = "none";
    checkMark.style.display = "block";
  }

  if (password.value.trim() === "") {
    passwordError.innerHTML = "Password is required";
    password.classList.add("incorrect");
    password.classList.remove("correct");
  } else if (password.value.length < 8) {
    passwordError.innerHTML = "Password must be at least 8 characters";
    password.classList.add("incorrect");
    password.classList.remove("correct");
  } else {
    passwordError.innerHTML = "";
    password.classList.remove("incorrect");
    password.classList.add("correct");
  }

  if (
    names.value.trim() &&
    password.value.trim() &&
    email.value.trim() &&
    names.value.length >= 4 &&
    password.value.length >= 8 &&
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
  ) {
    // Send a POST request to the signup API endpoint
    fetch("https://mybrand-backend-war7.onrender.com/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: names.value.trim(),
        email: email.value.trim(),
        password: password.value.trim(),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Save the authentication status to local storage and redirect to the admin dashboard
          localStorage.setItem("auth_status", "on");
          window.location.href = "admindashboard.html";
        } else {
          // Display an error message if there was an error during signup
        }
      });
  }
});
