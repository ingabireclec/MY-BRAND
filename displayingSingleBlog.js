window.onload = () => {
  const blogStoreKey = "blogs";
  const storedBlogs = localStorage.getItem(blogStoreKey);
  const token = localStorage.getItem("access_token");
  let likesCount = document.querySelector("#like-count");

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
          console.log(blog);
          // update the blog heading
          document.querySelector(".blog__img").src = blog.image;
          document.querySelector(".blog-title").textContent =
            blog.title || "Fallback";

          // update the blog content
          document.querySelector(".blog-content").innerHTML =
            blog.description || "";
          likesCount.textContent = blog.likesCount;

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
                const commentCount = document.querySelector("#commentCount");
                commentCount.textContent = `${comments.comments.length}`;

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
              // fetch likes for this blog
              const likeBtn = document.querySelector(".like-btn");
              likeBtn.addEventListener("click", (event) => {
                event.preventDefault();
                const blogId = id;
                fetch(
                  `https://mybrand-backend-war7.onrender.com/api/blogs/${blogId}/like`,
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                      blogId: blogId,
                    }),
                  }
                )
                  .then((response) => response.json())
                  .then(() => {
                    alert(error);
                    // update the likes count
                    likesCount.textContent =
                      parseInt(likesCount.textContent) + 1;
                    location.reload();
                  })
                  .catch((error) => {
                    console.error(error);
                  });
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

                    location.reload();
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
