// // const form = document.querySelector(".form_container");
// const nameInput = document.querySelector("#name");
// const commentInput = document.querySelector("#message");
// const submitBtn = document.querySelector(".comment-submit__btn");
// submitBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   let formData = [];
//   formData.push(nameInput.value);
//   formData.push(comment.value);
//   localStorage.setItem("formData", JSON.stringify(formData));
// });
// let comments = JSON.parse(localStorage.getItem(comments));
// submitBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   const commentStoreKey = "comment";
//   const comments = [];
//   const storedComments = localStorage.getItem(commentStoreKey);
//   if (storedComments) comments.push(JSON.parse(storedComments));
//   const comment = {
//     name: nameInput.value,
//     comment: commentInput.value,
//   };
//   comments.push(comment);
//   localStorage.setItem(commentStoreKey, JSON.stringify(comments));
// });

// const form = document.querySelector(".form_container");
// const nameInput = document.querySelector("#name");
const commentInput = document.querySelector("#message");
const submitBtn = document.querySelector(".comment-submit__btn");

const commentStoreKey = "comments";

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const comments = JSON.parse(localStorage.getItem(commentStoreKey)) || [];
  const url = new URLSearchParams(window.location.search);
  const blogId = url.get("id"); // param id

  const comment = {
    id: comments.length + 1,
    blogId: blogId,
    name: nameInput.value,
    comment: commentInput.value,
  };

  comments.push(comment);
  localStorage.setItem(commentStoreKey, JSON.stringify(comments));
});
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
