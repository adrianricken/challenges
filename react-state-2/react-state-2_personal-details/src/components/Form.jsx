import "./Form.css";

// 'onCreateUser' comes from the App component and is being used here as a parameter
// this function sends the input to the App (parent) component

export default function Form({ onCreateUser }) {
  // this function is being called when the form is submitted
  function handleSubmit(event) {
    // event.preventDefault() stops automatically reloading the page
    event.preventDefault();

    // accessing the input form elements
    const formElements = event.target.elements;

    // sends the values from the input to the 'handleCreateUser' function in the App component
    onCreateUser(formElements.name.value, formElements.email.value);

    // resets the form after submitting
    event.target.reset();
  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" type="text" placeholder="Your name" />
      <label htmlFor="email">Email: </label>
      <input id="email" name="email" type="email" placeholder="your@mail.de" />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
