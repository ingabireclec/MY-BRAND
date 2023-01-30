const commentsContainer = document.querySelector(".comments");

commentsContainer.style.display = "flex";
commentsContainer.style.alignItems = "center";
commentsContainer.style.justifyContent = "space-between";
commentsContainer.style.marginTop = "5rem";

const commentsSection = document.createElement("div");
commentsSection.classList.add("comment-sec");
commentsSection.style.display = "flex";
commentsSection.style.flexDirection = "column";
commentsSection.style.alignSelf = "flex-start";

const commentsTitle = document.createElement("h1");
commentsTitle.textContent = "Comments";

commentsSection.appendChild(commentsTitle);
commentsContainer.appendChild(commentsSection);

// Retrieve comments from local storage
const comments = JSON.parse(localStorage.getItem(commentStoreKey)) || [];

// Loop through the comments array and create HTML elements for each comment
comments.forEach((comment) => {
  const commentDiv = document.createElement("div");
  commentDiv.classList.add("comment-container");

  const commentAuthor = document.createElement("h3");
  commentAuthor.textContent = comment.name;

  const commentText = document.createElement("p");
  commentText.classList.add("comment-text");
  commentText.textContent = comment.comment;

  commentDiv.appendChild(commentAuthor);
  commentDiv.appendChild(commentText);
  commentsSection.appendChild(commentDiv);
});
