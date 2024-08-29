import "./App.css";
import Form from "./components/Form.jsx";
import { useState } from "react";

export default function App() {
  // declare state variable for name
  const [name, setName] = useState("");
  // declare state variable for email
  const [email, setEmail] = useState("");

  // this function is later used in the form component - it takes the two parameters name and email and updates the state of the state variables
  function handleCreateUser(user, mail) {
    // by calling setName(user) and setEmail(mail) the state is being changed and React renders the new UI
    setName(user);
    setEmail(mail);
  }

  return (
    <div className="container">
      <h1>Personal Details Form</h1>

      {/* form (child) component is being rendered here with 'handleCreateUser' as 'onCreateUser'-prop */}
      <Form onCreateUser={handleCreateUser} />

      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}

// function 'handleCreateUser' in 'App' is sent as prop 'onCreateUser' to 'Form' so that 'Form' can send the value of the input back to 'App' - which then updates the state of name and email

// when the form is submitted the 'handleCreateUser' function is called to update the state of 'name' and 'email' in 'App' component -> new UI is being rendered with new data
