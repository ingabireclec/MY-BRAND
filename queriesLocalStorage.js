// // Get form elements
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const messageInput = document.querySelector("#message");
// const submitBtn = document.querySelector(".contact__btn");
// submitBtn.addEventListener("click", function (e) {
//   e.preventDefault();

//   // Create array to store all contact forms
//   let queries = JSON.parse(localStorage.getItem("queries")) || [];

//   // Create an object to store form input values
//   const contact = {
//     name: nameInput.value,
//     email: emailInput.value,
//     message: messageInput.value,
//   };
//   console.log(contact);
//   // Add form input values to contacts array
//   queries.push(contact);

//   // Save contacts array to localStorage
//   localStorage.setItem("queries", JSON.stringify(queries));
// });
// //validation

// // // Get the form and input elements

// console.log(contact);
// fetch("https://mybrand-backend-war7.onrender.com/api/messages/", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(contact),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
// // });
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const submitBtn = document.querySelector(".contact__btn");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const nameInput = document.querySelector("#name").value;
  const emailInput = document.querySelector("#email").value;
  const messageInput = document.querySelector("#message").value;
  //create object
  const contact = {
    name: `${nameInput}`,
    email: `${emailInput}`,
    message: `${messageInput}`,
  };
  console.log(contact);
  // Send POST request to server
  fetch("https://mybrand-backend-war7.onrender.com/api/messages/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      // Clear the input fields
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    })
    .catch((error) => {
      console.error("Error:", error);
    });