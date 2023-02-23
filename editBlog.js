// Get the blog ID from the URL

// Get the form elements
const titleInput = document.querySelector("#title-input");
const froala = document.querySelector("#froala");
const category = document.querySelector("#category");
const featuredImg = document.querySelector("#featured-img");
const submitBtn = document.querySelector("#submit");
const token = localStorage.getItem("access_token");
const url = new URLSearchParams(window.location.search);
const id = url.get("id");
const blogId = location.hash.slice(1);
const isInEditMode = blogId.length !== 0;

// Retrieve the blog data from the server
if (isInEditMode) {
  fetch(`https://mybrand-backend-war7.onrender.com/api/blogs/getOne/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((blogData) => {
      // Populate the form with the existing blog data
      titleInput.value = blogData.title;
      froala.value = blogData.description;
      category.value = blogData.category;

      // Add an event listener to the submit button
      submitBtn.addEventListener("click", function (e) {
        e.preventDefault();

        // Update the blog data
        blogData.title = titleInput.value;
        blogData.description = froala.value;
        blogData.category = category.value;
        if (featuredImg.files.length > 0) {
          blogData.image = featuredImg.files[0];
        }

        // Send the updated blog data to the server
        const formData = new FormData();
        formData.append("title", blogData.title);
        formData.append("description", blogData.description);
        formData.append("category", blogData.category);
        formData.append("image", blogData.image);

        fetch(`https://mybrand-backend-war7.onrender.com/api/blogs/${id}`, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => console.error(error));
      });
    })
    .catch((error) => console.error(error));
}
