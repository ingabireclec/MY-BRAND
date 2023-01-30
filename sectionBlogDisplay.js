const blogsContainer = document.querySelector("#blogsContainer");
blogsContainer.setAttribute("class", "blog-container");

let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
for (let i = 0; i < blogs.length; i++) {
  const blog = blogs[i];

  const blogBox = document.createElement("div");
  blogBox.classList.add("blog-box");

  const blogImg = document.createElement("div");
  blogImg.classList.add("blog-img");
  const img = document.createElement("img");
  img.src = blog.image;
  img.alt = "Blog Image";
  img.classList.add("blog__img");
  img.setAttribute("loading", "lazy");
  blogImg.appendChild(img);

  const blogText = document.createElement("div");
  blogText.classList.add("blog-text");
  const span = document.createElement("span");
  span.textContent = "1 jan 2023 / " + blog.category;
  const blogTitle = document.createElement("a");
  blogTitle.href = "";
  blogTitle.textContent = blog.title;
  blogTitle.classList.add("blog--row-content-title");
  const blogContent = document.createElement("p");
  blogContent.textContent = blog.content;
  const readMore = document.createElement("a");
  readMore.href = "blog_post.html";
  readMore.textContent = "Read More";

  blogText.appendChild(span);
  blogText.appendChild(blogTitle);
  blogText.appendChild(blogContent);
  blogText.appendChild(readMore);

  blogBox.appendChild(blogImg);
  blogBox.appendChild(blogText);

  blogsContainer.appendChild(blogBox);
}
