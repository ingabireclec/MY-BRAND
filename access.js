const adminPanelLink = document.getElementById("admin-panel-link");

adminPanelLink.addEventListener("click", function (event) {
  // Prevent the default link behavior
  event.preventDefault();

  // Check if a valid access token is present
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    // Redirect to the admin dashboard
    window.location.href = "admindashboard.html";
  } else {
    // Redirect to the login form
    window.location.href = "login.html";
  }
});
