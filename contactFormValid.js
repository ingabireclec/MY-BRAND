// Get the form and input elements
const Form = document.getElementById("contact-form");
const Name = document.getElementById("name");
const email = document.getElementById("email");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const checkMark = document.querySelector(".fa-circle-check");
const exclamation = document.querySelector(".fa-circle-exclamation");
const Message = document.getElementById("message");
const token = localStorage.getItem("access_token");

// Add event listeners to the input fields

Form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!Name.value) {
    nameError.innerHTML = "Name is required";
    exclamation.style.display = "block";
  } else if (Name.value.length < 3) {
    nameError.innerHTML = "Minimum 3 characters required";
    exclamation.style.display = "block";
  } else {
    nameError.innerHTML = "";
    exclamation.style.display = "none";
    checkMark.style.display = "block";
  }
  if (!email.value) {
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
  if (
    Name.value &&
    email.value &&
    Name.value.length >= 3 &&
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
  ) {
    //Submit the form here
  }
  if (Message === "") {
  }
});
