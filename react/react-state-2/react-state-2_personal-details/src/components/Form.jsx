import "./Form.css";

// 'onCreateUser' comes from the App component and is being used here as a parameter
// this function sends the input to the App (parent) component

export default function Form({ onCreateUser }) {
  function handleSubmit(event) {
    // this function is being called when the form is submitted
    event.preventDefault();
    // event.preventDefault() stops automatically reloading the page

    const formElements = event.target.elements;
    // accessing the input form elements

    onCreateUser(formElements.name.value, formElements.email.value);
    // sends the values from the input to the 'handleCreateUser' function in the App component

    event.target.reset();
    // resets the form after submitting
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
