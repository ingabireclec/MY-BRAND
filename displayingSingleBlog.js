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
//       document.querySelector(".blog-title").textContent =
//         blog.title || "Fallback";

//       // update the blog content
//       document.querySelector(".blog-content").innerHTML = blog.content;

//       // find all comments o this blog
//       const commentsKey = "comments";
//       const storedComments = localStorage.getItem(commentsKey);

//       // if we have comments, any from anywhere
//       if (!storedComments) return null;

//       const blogComments = JSON.parse(storedComments).filter(
//         (comment) => comment.blogId === id
//       );
//       // if not comment on you current blog
//       if (!blogComments[0]) return null;

//       blogComments.forEach((comment) => {
//         const commentsSection = document.querySelector(".comment-sec");

//         const commentDiv = document.createElement("div");
//         commentDiv.classList.add("comment-container");

//         const commentAuthor = document.createElement("h3");
//         commentAuthor.textContent = comment.name;

//         const commentText = document.createElement("p");
//         commentText.classList.add("comment-text");
//         commentText.textContent = comment.comment;

//         commentDiv.appendChild(commentAuthor);
//         commentDiv.appendChild(commentText);
//         commentsSection.appendChild(commentDiv);
//       });
//     }
//   }
// };
window.onload = () => {
  const blogStoreKey = "blogs";
  const storedBlogs = localStorage.getItem(blogStoreKey);
  const token = localStorage.getItem("access_token");

  if (storedBlogs) {
    let blogs = JSON.parse(storedBlogs);
    // loop through each blog
    const url = new URLSearchParams(window.location.search);
    const id = url.get("id"); // param id

    if (id) {
      // fetch single blog with specific id
      fetch(`https://mybrand-backend-war7.onrender.com/api/blogs/getOne/${id}`)
        .then((response) => response.json())
        .then((blog) => {
          // update the blog heading
          document.querySelector(".blog__img").src = blog.image;
          document.querySelector(".blog-title").textContent =
            blog.title || "Fallback";

          // update the blog content
          document.querySelector(".blog-content").innerHTML =
            blog.description || "";

          // fetch comments for this blog
          fetch(
            `https://mybrand-backend-war7.onrender.com/api/blogs/${id}/comments`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
            .then((response) => response.json())
            .then((comments) => {
              console.log(comments);

              comments.comments.forEach((comment) => {
                const commentsSection = document.querySelector(".comment-sec");

                const commentDiv = document.createElement("div");
                commentDiv.classList.add("comment-container");

                const commentAuthor = document.createElement("h3");
                commentAuthor.textContent = comment.author;

                const commentText = document.createElement("p");
                commentText.classList.add("comment-text");
                commentText.textContent = comment.commentText;

                commentDiv.appendChild(commentAuthor);
                commentDiv.appendChild(commentText);
                commentsSection.appendChild(commentDiv);
              });

              // add event listener to submit button
              const submitBtn = document.querySelector(".comment-submit__btn");
              submitBtn.addEventListener("click", (event) => {
                event.preventDefault();
                const commentor = document.querySelector(".commentor").value;
                const message = document.querySelector("#message").value;
                const blogId = id;

                fetch(
                  `https://mybrand-backend-war7.onrender.com/api/blogs/${id}/comments`,
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                      author: commentor,
                      commentText: message,
                      blogId: blogId,
                    }),
                  }
                )
                  .then((response) => response.json())
                  .then((comment) => {
                    console.log(comment);

                    const commentsSection =
                      document.querySelector(".comment-sec");

                    const commentDiv = document.createElement("div");
                    commentDiv.classList.add("comment-container");

                    const commentAuthor = document.createElement("h3");
                    commentAuthor.textContent = comment.author;

                    const commentText = document.createElement("p");
                    commentText.classList.add("comment-text");
                    commentText.textContent = comment.commentText;

                    commentDiv.appendChild(commentAuthor);
                    commentDiv.appendChild(commentText);
                    commentsSection.appendChild(commentDiv);
                  })
                  .catch((error) =>
                    console.error("Error adding comment:", error)
                  );
              });
            })
            .catch((error) => console.error("Error fetching comments:", error));
        })
        .catch((error) => console.error("Error fetching blog:", error));
    }
  }
};
