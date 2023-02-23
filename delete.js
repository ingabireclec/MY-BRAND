const deleteBlogBtn = document.getElementById("delete-blog-btn");
deleteBlogBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const url = new URLSearchParams(window.location.search);
  const id = url.get("id"); // param id
  if (id) {
    fetch(`https://mybrand-backend-war7.onrender.com/api/blogs/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error deleting blog:", error));
  }
});
