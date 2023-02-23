// Get the element that displays the contact count
const contactCountElement = document.getElementById("count-of-contacts");
const blogCountElement = document.getElementById("count-of-blogs");

const token = localStorage.getItem("access_token");

// Fetch the contact data
fetch("https://mybrand-backend-war7.onrender.com/api/messages", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    let message = "";
    if (Array.isArray(data)) {
      message = data.length;
    } else {
      message = "Not Found";
    }
    contactCountElement.textContent = message;
  })
  .catch((error) => console.error(error));
fetch("https://mybrand-backend-war7.onrender.com/api/blogs", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    let message = "";
    if (Array.isArray(data)) {
      message = data.length;
    } else {
      message = "Not Found";
    }
    blogCountElement.textContent = message;
  })
  .catch((error) => console.error(error));
