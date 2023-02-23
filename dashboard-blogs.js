window.onload = () => {
  const blogStoreKey = "blogs";
  const token = localStorage.getItem("access_token");

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
        const BlogAnchor = document.createElement("a");
        BlogAnchor.setAttribute(
          "href",
          `/diplayingSingleBlog.html?id=${blog._id}`
        );
        BlogAnchor.setAttribute("class", "blog--row-content-title");
        BlogAnchor.textContent = "Read More";

        const BlogBox = document.createElement("div");
        BlogBox.setAttribute("class", "blog-box");
        // BlogBox.onclick = () => {
        //   window.location.assign(`/diplayingSingleBlog.html?id=${blog._id}`);
        // };

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
        //create icon
        const span = document.createElement("span");
        const editicon = document.createElement("i");
        editicon.setAttribute("class", "ri-edit-line edit");
        editicon.onclick = () => {
          window.location.assign(`/editBlog.html?id=${blog._id}`);
        };
        let deleteicon = document.createElement("i");
        deleteicon.setAttribute("class", "ri-delete-bin-line delete");
        deleteicon.setAttribute("data-id", blog._id);

        span.appendChild(deleteicon);
        span.appendChild(editicon);
        BlogBox.appendChild(span);
        // Add the UI elements to the parent container
        BlogImgCon.appendChild(BlogImg);
        BlogBox.appendChild(BlogImgCon);

        BlogTextCon.appendChild(BlogText);
        BlogTextCon.appendChild(BlogAnchor);
        BlogBox.appendChild(BlogTextCon);

        blogContainer.appendChild(BlogBox);
        deleteicon.addEventListener("click", (event) => {
          event.preventDefault();
          const id = event.target.getAttribute("data-id"); // get id from data attribute

          fetch(
            `https://mybrand-backend-war7.onrender.com/api/blogs/delete/${id}`,
            {
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.status === 200) {
                location.reload();
              } else {
                console.log(data.message);
              }
            });
        });
      }
    });
};
