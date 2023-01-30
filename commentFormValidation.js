// get form elements
const form = document.querySelector(".form_container");
const nameInput = document.querySelector("#name");
const messageInput = document.querySelector("#message");
const nameError = document.querySelector("#name-error");
const messageError = document.querySelector("#comment-error");

// form submit event listener
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form submission

  // reset error messages
  nameError.textContent = "";
  messageError.textContent = "";

  // check if name field is empty
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    return;
  }

  // check if name field meets minimum length requirement
  if (nameInput.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters long";
    return;
  }

  // check if message field is empty
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Comment is required";
    return;
  }

  // check if message field meets minimum length requirement
  if (messageInput.value.trim().length < 5) {
    messageError.textContent = "Comment must be at least 5 characters long";
    return;
  }
  if (messageInput.value.trim().length > 50) {
    messageError.textContent = "Comment must not exceed 50 characters long";
    return;
  }

  // form is valid, submit the form
});
