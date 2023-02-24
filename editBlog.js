window.onload = () => {
  const token = localStorage.getItem("access_token");

  // Get the blog ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get("id");

  // Get the form elements
  const titleInput = document.querySelector("#title-input");
  const categoryInput = document.querySelector("#category");
  const descriptionInput = document.querySelector("#froala");
  const imageInput = document.querySelector("#featured-img");
  const submitButton = document.querySelector("#save");

  // Retrieve the blog data from the server
  fetch(
    `https://mybrand-backend-war7.onrender.com/api/blogs/getOne/${blogId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => response.json())
    .then((blog) => {
      console.log(blog);
      // Populate the form with the existing blog data
      titleInput.value = blog.title;
      descriptionInput.innerHTML = blog.description;
      categoryInput.value = blog.category;
      // Add an event listener to the submit button
      const editor = new FroalaEditor(descriptionInput, {
        toolbarButtons: [
          "bold",
          "italic",
          "underline",
          "strikeThrough",
          "fontFamily",
          "fontSize",
          "|",
          "color",
          "paragraphStyle",
          "|",
          "align",
          "formatOL",
          "formatUL",
          "outdent",
          "indent",
          "|",
          "insertLink",
          "insertImage",
          "insertTable",
          "|",
          "undo",
          "redo",
          "clearFormatting",
        ],
        height: 300,
        placeholderText: "Enter blog description here...",
      });
      submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        // Create a new FormData object to store the updated blog data
        const formData = new FormData();
        formData.append("title", titleInput.value);
        formData.append("description", editor.html.get());
        formData.append("category", categoryInput.value);
        if (imageInput.files.length > 0) {
          formData.append("image", imageInput.files[0]);
        }
        for (let i of formData) {
          console.log(i[0], i[1]);
        }
        // Send the updated blog data to the server
        fetch(`https://mybrand-backend-war7.onrender.com/api/blogs/${blogId}`, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data); // log the response data
            // Redirect to the updated blog page
            window.alert("Blog updated successfully!");

            window.location.href = "/dashboard-blogs.html";
          })
          .catch((error) => console.error(error));
      });
    })
    .catch((error) => console.error(error));
};
