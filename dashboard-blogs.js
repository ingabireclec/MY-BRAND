window.onload = () => {
  const blogStoreKey = "blogs";

  // Find the parent container
  const blogContainer = document.querySelector(".blog-contain");

  fetch("https://mybrand-backend-war7.onrender.com/api/blogs")
    .then((data) => {
      return data.json();
    })
    .then((blogs) => {
      // Clear existing blogs in local storage
      localStorage.removeItem(blogStoreKey);

      // Store blogs in local storage
      localStorage.setItem(blogStoreKey, JSON.stringify(blogs));

      // Create UI elements for each blog
      for (let i = 0; i < blogs.length; i++) {
        const blog = blogs[i];

        // Create the UI elements
        const BlogBox = document.createElement("div");
        BlogBox.setAttribute("class", "blog-box");
        BlogBox.onclick = () => {
          window.location.assign(`/diplayingSingleBlog.html?id=${blog.id}`);
        };

        const BlogImgCon = document.createElement("div");
        BlogImgCon.setAttribute("class", "blog-img");

        const BlogImg = document.createElement("img");
        BlogImg.setAttribute("class", "blog__img");
        BlogImg.setAttribute("loading", "lazy");
        BlogImg.setAttribute("src", blog.image);

        const BlogTextCon = document.createElement("div");
        BlogTextCon.setAttribute("class", "blog-text");

        const BlogText = document.createElement("span");
        BlogText.textContent = blog.title;

        const BlogAnchor = document.createElement("a");
        BlogAnchor.setAttribute("href", "displayingSingleBlog.html");
        BlogAnchor.setAttribute("class", "blog--row-content-title");
        BlogAnchor.textContent = "Read More";

        // Add the UI elements to the parent container
        BlogImgCon.appendChild(BlogImg);
        BlogBox.appendChild(BlogImgCon);

        BlogTextCon.appendChild(BlogText);
        BlogTextCon.appendChild(BlogAnchor);
        BlogBox.appendChild(BlogTextCon);

        blogContainer.appendChild(BlogBox);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
