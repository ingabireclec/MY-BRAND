// window.onload = () => {
//   const blogStoreKey = "blogs";
//   const storedBlogs = localStorage.getItem(blogStoreKey);

//   if (storedBlogs) {
//     let blogs = JSON.parse(storedBlogs);
//     // loop through each blog
//     const url = new URLSearchParams(window.location.search);
//     const id = url.get("id"); // param id
//     //
//     if (id) {
//       const blog = blogs.find((one) => one.id == id);
//       // update the blog heading
//       document.querySelector(".blog__img").src = blog.image;
//       //
//       document.querySelector(".blog-title").textContent = blog.title;

//       // update the blog content
//       document.querySelector(".blog-content").innerHTML = blog.content;

//       //display comments
//       const commentStoreKey = "comments";
//       const storedComments = localStorage.getItem(commentStoreKey);
//       let comments = [];

//       if (storedComments) {
//         comments = storedComments;
//       }

//       const url = new URLSearchParams(window.location.search);
//       const id = url.get("id");

//       if (id) {
//         const commentsSection = document.querySelector(".comment-sec");

//         // commentsContainer.style.display = "flex";
//         // commentsContainer.style.alignItems = "center";
//         // commentsContainer.style.justifyContent = "space-between";
//         // commentsContainer.style.marginTop = "5rem";

//         const commentsTitle = document.createElement("h1");
//         commentsTitle.textContent = "Comments";

//         commentsSection.appendChild(commentsTitle);
//         commentsContainer.appendChild(commentsSection);

//         // Retrieve comments from local storage
//         const comments =
//           JSON.parse(localStorage.getItem(commentStoreKey)) || [];

//         // Loop through the comments array and create HTML elements for each comment
//         comments.forEach((comment) => {
//           const commentDiv = document.createElement("div");
//           commentDiv.classList.add("comment-container");

//           const commentAuthor = document.createElement("h3");
//           commentAuthor.textContent = comment.name;

//           const commentText = document.createElement("p");
//           commentText.classList.add("comment-text");
//           commentText.textContent = comment.comment;

//           commentDiv.appendChild(commentAuthor);
//           commentDiv.appendChild(commentText);
//           commentsSection.appendChild(commentDiv);
//         });
//         const commentForm = document.createElement("div");
//         commentForm.classList.add("contact__form-field", "comment-field");
//         commentForm.innerHTML = `
//   <form class="form_container">
//     <label class="contact__form-label" for="name">Name</label>
//     <input
//       placeholder="Enter Your Name"
//       type="text"
//       class="contact__form-input commentor"
//       name="name"
//       id="name"
//     />
//     <span class="error-message" id="name-error"></span>
//     <textarea
//       cols="30"
//       rows="10"
//       class="contact__form-input"
//       placeholder="Leave your comment ..."
//       name="message"
//       id="message"
//       data-gramm="false"
//       wt-ignore-input="true"
//     ></textarea>
//     <span class="error-message" id="comment-error"></span>
//     <button type="submit" class="btn btn--theme comment-submit__btn">
//       submit
//     </button>
//   </form>
// `;
//         commentsSection.appendChild(commentForm);
//       }
//     }
//   }
// };
