window.onload = () => {
  const blogStoreKey = "blogs";
  const storedBlogs = localStorage.getItem(blogStoreKey);

  if (storedBlogs) {
    let blogs = JSON.parse(storedBlogs);
    // loop through each blog
    const url = new URLSearchParams(window.location.search);
    const id = url.get("id"); // param id
    //
    if (id) {
      const blog = blogs.find((one) => one.id == id);
      // update the blog heading
      document.querySelector(".blog__img").src = blog.image;
      //
      document.querySelector(".blog-title").textContent =
        blog.title || "Fallback";

      // update the blog content
      document.querySelector(".blog-content").innerHTML = blog.content;

      // find all comments o this blog
      const commentsKey = "comments";
      const storedComments = localStorage.getItem(commentsKey);

      // if we have comments, any from anywhere
      if (!storedComments) return null;

      const blogComments = JSON.parse(storedComments).filter(
        (comment) => comment.blogId === id
      );
      // if not comment on you current blog
      if (!blogComments[0]) return null;

      blogComments.forEach((comment) => {
        const commentsSection = document.querySelector(".comment-sec");

        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment-container");

        const commentAuthor = document.createElement("h3");
        commentAuthor.textContent = comment.name;

        const commentText = document.createElement("p");
        commentText.classList.add("comment-text");
        commentText.textContent = comment.comment;

        commentDiv.appendChild(commentAuthor);
        commentDiv.appendChild(commentText);
        commentsSection.appendChild(commentDiv);
      });
    }
  }
};
