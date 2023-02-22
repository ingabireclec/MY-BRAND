// // Get form elements
// const titleInput = document.querySelector("#title-input");
// const froala = document.querySelector("#froala");
// const category = document.querySelector("#category");
// const submitBtn = document.querySelector("#submit");

// submitBtn.addEventListener("click", function (e) {
//   e.preventDefault();

//   //here
//   let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
//   const blogStoreKey = "blogs";

//   // Save featured image file to localStorage (if one is selected)
//   const featuredImg = document.querySelector("#featured-img");

//   // Read the image
//   const reader = new FileReader();
//   reader.readAsDataURL(featuredImg.files[0]);

//   reader.onload = () => {
//     // create a new Blog
//     const blog = {
//       title: titleInput.value,
//       content: froala.value,
//       category: category.value,
//       image: reader.result,
//       id: blogs.length + 1,
//     };

//     // add to other blog
//     blogs.push(blog);

//     // Save blogs array to localStorage
//     localStorage.setItem(blogStoreKey, JSON.stringify(blogs));
//   };
// });
//creating a blog using post blog
const titleInput = document.querySelector("#title-input");
const froala = document.querySelector("#froala");
const category = document.querySelector("#category");
const featuredImg = document.querySelector("#featured-img");
const submitBtn = document.querySelector("#submit");
const token = localStorage.getItem("access_token");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append("title", titleInput.value);
  formData.append("description", froala.value);
  formData.append("category", category.value);
  formData.append("image", featuredImg.files[0]);

  fetch("https://mybrand-backend-war7.onrender.com/api/blogs", {
    method: "POST",
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
