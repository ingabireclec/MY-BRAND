function BlogList() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    const blogStoreKey = "blogs";
    const token = localStorage.getItem("access_token");
    fetch("https://mybrand-backend-war7.onrender.com/api/blogs")
      .then((response) => response.json())
      .then((blogs) => {
        localStorage.setItem(blogStoreKey, JSON.stringify(blogs));
        setBlogs(blogs);
      });
  }, []);

  return React.createElement(
    "div",
    { className: "blog-contain" },
    blogs.map((blog) =>
      React.createElement(
        "div",
        { key: blog._id, className: "blog-box" },
        React.createElement(
          "div",
          { className: "blog-img" },
          React.createElement("img", {
            className: "blog__img",
            loading: "lazy",
            src: blog.image,
          })
        ),
        React.createElement(
          "div",
          { className: "blog-text" },
          React.createElement("span", null, blog.title),
          React.createElement(
            "div",
            { className: "blog-actions" },
            React.createElement(
              "a",
              {
                href: `/diplayingSingleBlog.html?id=${blog._id}`,
                className: "blog--row-content-title",
              },
              "Read More"
            ),
            React.createElement(
              "span",
              { className: "icons" },
              React.createElement("i", {
                className: "ri-edit-line edit",
                onClick: () =>
                  window.location.assign(`/editBlog.html?id=${blog._id}`),
              }),
              React.createElement("i", {
                className: "ri-delete-bin-line delete",
                "data-id": blog._id,
                onClick: (event) => {
                  event.preventDefault();
                  const id = event.target.getAttribute("data-id");
                  const token = localStorage.getItem("access_token");
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
                      window.location.reload();
                      alert(data.message);
                    });
                },
              })
            )
          )
        )
      )
    )
  );
}

ReactDOM.render(
  React.createElement(BlogList, null),
  document.querySelector("#root")
);

// window.onload = () => {
//   const blogStoreKey = "blogs";
//   const token = localStorage.getItem("access_token");

//   // Find the parent container
//   const blogContainer = document.querySelector(".blog-contain");

//   fetch("https://mybrand-backend-war7.onrender.com/api/blogs")
//     .then((data) => {
//       return data.json();
//     })
//     .then((blogs) => {
//       // Clear existing blogs in local storage
//       localStorage.removeItem(blogStoreKey);

//       // Store blogs in local storage
//       localStorage.setItem(blogStoreKey, JSON.stringify(blogs));

//       // Create UI elements for each blog
//       for (let i = 0; i < blogs.length; i++) {
//         const blog = blogs[i];

//         // Create the UI elements
//         const BlogAnchor = document.createElement("a");
//         BlogAnchor.setAttribute(
//           "href",
//           `/diplayingSingleBlog.html?id=${blog._id}`
//         );
//         BlogAnchor.setAttribute("class", "blog--row-content-title");
//         BlogAnchor.textContent = "Read More";

//         const BlogBox = document.createElement("div");
//         BlogBox.setAttribute("class", "blog-box");
//         // BlogBox.onclick = () => {
//         //   window.location.assign(`/diplayingSingleBlog.html?id=${blog._id}`);
//         // };

//         const BlogImgCon = document.createElement("div");
//         BlogImgCon.setAttribute("class", "blog-img");

//         const BlogImg = document.createElement("img");
//         BlogImg.setAttribute("class", "blog__img");
//         BlogImg.setAttribute("loading", "lazy");
//         BlogImg.setAttribute("src", blog.image);

//         const span = document.createElement("span");
//         span.setAttribute("class", "icons");

//         const editicon = document.createElement("i");
//         editicon.setAttribute("class", "ri-edit-line edit");
//         editicon.onclick = () => {
//           window.location.assign(`/editBlog.html?id=${blog._id}`);
//         };

//         let deleteicon = document.createElement("i");
//         deleteicon.setAttribute("class", "ri-delete-bin-line delete");
//         deleteicon.setAttribute("data-id", blog._id);
//         span.appendChild(editicon);
//         span.appendChild(deleteicon);

//         const blogActionsContainer = document.createElement("div");
//         blogActionsContainer.setAttribute("class", "blog-actions");
//         blogActionsContainer.appendChild(BlogAnchor);

//         blogActionsContainer.appendChild(span);

//         const BlogTextCon = document.createElement("div");
//         BlogTextCon.setAttribute("class", "blog-text");

//         const BlogText = document.createElement("span");
//         BlogText.textContent = blog.title;

//         BlogTextCon.appendChild(BlogText);
//         BlogTextCon.appendChild(blogActionsContainer);
//         BlogImgCon.appendChild(BlogImg);
//         BlogBox.appendChild(BlogImgCon);
//         BlogBox.appendChild(BlogTextCon);

//         blogContainer.appendChild(BlogBox);

//         deleteicon.addEventListener("click", (event) => {
//           event.preventDefault();
//           const id = event.target.getAttribute("data-id"); // get id from data attribute

//           fetch(
//             `https://mybrand-backend-war7.onrender.com/api/blogs/delete/${id}`,
//             {
//               method: "DELETE",
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           )
//             .then((response) => response.json())
//             .then((data) => {
//               location.reload();
//               alert(data.message);
//             });
//         });
//       }
//     });
// };
