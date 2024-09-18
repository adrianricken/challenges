import "./App.css";
import Form from "./components/Form.jsx";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  // declare state variable for name
  const [email, setEmail] = useState("");
  // declare state variable for email

  function handleCreateUser(name, email) {
    // this function is later used in the form component - it takes the two parameters name and email and updates the state of the state variables
    setName(name);
    setEmail(email);
    // by calling setName(user) and setEmail(mail) the state is being changed and React renders the new UI
  }

  return (
    <div className="container">
      <h1>Personal Details Form</h1>

      <Form onCreateUser={handleCreateUser} />
      {/* form component (child) is being rendered here with 'handleCreateUser' as 'onCreateUser'-prop */}

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

// function 'handleCreateUser' in 'App' is sent as prop 'onCreateUser' to 'Form' so that 'Form' can send the value of the input back to 'App' - which then updates the state of name and email by calling the 'setName' and 'setEmail' function inside the handleCreatUser function
