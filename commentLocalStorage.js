// window.onload = () => {
//   const commentInput = document.querySelector("#message");
//   const submitBtn = document.querySelector(".comment-submit__btn");

//   const commentStoreKey = "comments";

//   submitBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     const comments = JSON.parse(localStorage.getItem(commentStoreKey)) || [];
//     const url = new URLSearchParams(window.location.search);
//     const blogId = url.get("id"); // param id

//     const comment = {
//       name: nameInput.value,
//       comment: commentInput.value,
//       id: comments.length + 1,
//       blogId: blogId,
//     };

//     comments.push(comment);
//     localStorage.setItem(commentStoreKey, JSON.stringify(comments));
//   });
//   // get form elements
//   const form = document.querySelector(".form_container");
//   const nameInput = document.querySelector("#name");
//   const messageInput = document.querySelector("#message");
//   const nameError = document.querySelector("#name-error");
//   const messageError = document.querySelector("#comment-error");

//   // form submit event listener
//   form.addEventListener("submit", (e) => {
//     e.preventDefault(); // prevent form submission
//     console.log("Got here =========");

//     // reset error messages
//     nameError.textContent = "";
//     messageError.textContent = "";

//     // check if name field is empty
//     if (nameInput.value.trim() === "") {
//       nameError.textContent = "Name is required";
//       return;
//     }

//     // check if name field meets minimum length requirement
//     if (nameInput.value.trim().length < 3) {
//       nameError.textContent = "Name must be at least 3 characters long";
//       return;
//     }

//     // check if message field is empty
//     if (messageInput.value.trim() === "") {
//       messageError.textContent = "Comment is required";
//       return;
//     }

//     // check if message field meets minimum length requirement
//     if (messageInput.value.trim().length < 5) {
//       messageError.textContent = "Comment must be at least 5 characters long";
//       return;
//     }

//     // form is valid, submit the form
//   });
// };
window.onload = () => {
  const commentInput = document.querySelector("#message");
  const submitBtn = document.querySelector(".comment-submit__btn");

  const commentStoreKey = "comments";
  const token = localStorage.getItem("access_token");

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const comments = JSON.parse(localStorage.getItem(commentStoreKey)) || [];
    const url = new URLSearchParams(window.location.search);
    const blogId = url.get("id"); // param id

    const comment = {
      name: nameInput.value,
      comment: commentInput.value,
      id: comments.length + 1,
      blogId: blogId,
    };

    // Add a fetch request to send the comment data to the server
    fetch(
      `https://mybrand-backend-war7.onrender.com/api/blogs/${id}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(comment),
      }
    )
      .then((response) => {
        if (response.ok) {
          // If the server successfully saves the comment, show a success message
          return response.json().then((data) => {
            alert(data.message);
            comments.push(comment);
            localStorage.setItem(commentStoreKey, JSON.stringify(comments));
          });
        } else {
          // If there is an error, show an error message
          return response.json().then((data) => {
            alert(data.message);
          });
        }
      })
      .catch((error) => {
        console.error("Error saving comment:", error);
        alert("An error occurred. Please try again later.");
      });
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
    console.log("hello =========");

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

    // form is valid, submit the form
  });
};
