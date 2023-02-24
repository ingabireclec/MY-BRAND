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
      if (data) {
        alert("Blog created successfully!");
      } else {
        alert("There was an error creating the blog.");
      }
    })
    .catch((error) => console.error(error));
});
