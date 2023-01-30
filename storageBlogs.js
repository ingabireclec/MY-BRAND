// Get form elements
const titleInput = document.querySelector("#title-input");
const froala = document.querySelector("#froala");
const category = document.querySelector("#category");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  const blogStoreKey = "blogs";

  // Save featured image file to localStorage (if one is selected)
  const featuredImg = document.querySelector("#featured-img");

  // Read the image
  const reader = new FileReader();
  reader.readAsDataURL(featuredImg.files[0]);

  reader.onload = () => {
    // create a new Blog
    const blog = {
      title: titleInput.value,
      content: froala.value,
      category: category.value,
      image: reader.result,
      id: blogs.length + 1,
    };

    // add to other blog
    blogs.push(blog);

    // Save blogs array to localStorage
    localStorage.setItem(blogStoreKey, JSON.stringify(blogs));
  };
});
