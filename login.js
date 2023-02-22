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

  // Get the input field values
  const usernameValue = username.value;
  const passwordValue = password.value;
  const loginData = {
    username: `${usernameValue}`,
    password: `${passwordValue}`,
  };
  console.log(loginData);
  // Make the API call to log in the user
  fetch("https://mybrand-backend-war7.onrender.com/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      loginData,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Store the access token in local storage
      localStorage.setItem("access_token", data?.token);

      // Redirect to the admin dashboard page
      window.location.href = "admindashboard.html";
    })
    .catch((error) => {
      passwordError.innerHTML = error.message;
    });
});
