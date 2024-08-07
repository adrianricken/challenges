console.clear();

/*
Convert the input value to uppercase when clicking the button

[X] – Assign the input element to a variable
[X] – Assign the button element to a variable
[X] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/

const inputElement = document.querySelector('[data-js="first-input"]');
const button = document.querySelector('[data-js="button-uppercase"]');

button.addEventListener("click", () => {
  inputElement.value = inputElement.value.toUpperCase();
});
