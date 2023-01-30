// Get form elements
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const submitBtn = document.querySelector(".contact__btn");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // Create array to store all contact forms
  let queries = JSON.parse(localStorage.getItem("queries")) || [];

  // Create an object to store form input values
  const contact = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  // Add form input values to contacts array
  queries.push(contact);

  // Save contacts array to localStorage
  localStorage.setItem("queries", JSON.stringify(queries));
});
//validation

// Get the form and input elements
