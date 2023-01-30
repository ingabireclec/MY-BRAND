window.onload = () => {
  const blogStoreKey = "blogs";

  // fetching all blogs
  const storedBlogs = localStorage.getItem(blogStoreKey);

  let blogs = [];
  // iff exists
  if (storedBlogs) {
    // null || undefined
    blogs = JSON.parse(storedBlogs);
  }

  for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];

    // create the UIs
    const BlogBox = document.createElement("div");
    BlogBox.setAttribute("class", "blog-box");
    BlogBox.onclick = () => {
      // console.log("Click on blog ", blog.id);
      window.location.assign(`/diplayingSingleBlog.html?id=${blog.id}`);
    };
    // IMG Container
    const BlogImgCon = document.createElement("div");
    BlogImgCon.setAttribute("class", "blog-img");
    // IMG
    const BlogImg = document.createElement("img");
    BlogImg.setAttribute("class", "blog__img");
    BlogImg.setAttribute("loading", "lazy");
    BlogImg.setAttribute("src", blog.image);
    // Text Container
    const BlogTextCon = document.createElement("div");
    BlogTextCon.setAttribute("class", "blog-text");
    // Text content
    const BlogText = document.createElement("span");
    BlogText.textContent = blog.title;
    // link
    const BlogAnchor = document.createElement("a");
    BlogAnchor.setAttribute("href", "displayingSingleBlog.html");
    BlogAnchor.setAttribute("class", "blog--row-content-title");
    BlogAnchor.textContent = "Read More";

    // find the parent;
    const blogContainer = document.querySelector(".blog-contain");

    if (blogContainer) {
      // blogContainer !== null || undefifned
      // push img
      BlogImgCon.appendChild(BlogImg);
      BlogBox.appendChild(BlogImgCon); // add to blog box
      //
      BlogTextCon.appendChild(BlogText);
      BlogTextCon.appendChild(BlogAnchor);
      BlogBox.appendChild(BlogTextCon); // add to blog box
      //
      blogContainer.appendChild(BlogBox);
    }
  }
};
