console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newSection = document.createElement("section");
newSection.classList.add("post");

const newContent = document.createElement("p");
newContent.classList.add("post__content");
newContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");

const newCreator = document.createElement("span");
newCreator.classList.add("post__username");
newCreator.textContent = "@nameuser";

const newLikeButton = document.createElement("button");
newLikeButton.classList.add("post__button");
newLikeButton.textContent = "♥ Like";
newLikeButton.type = "button";
newLikeButton.setAttribute("data-js", "like-button");

newLikeButton.addEventListener("click", handleLikeButtonClick);

newSection.append(newContent, newFooter);
newFooter.append(newCreator, newLikeButton);

document.body.append(newSection);
