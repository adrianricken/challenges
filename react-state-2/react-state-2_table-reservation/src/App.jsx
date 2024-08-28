import Counter from "./components/Counter";
import "./App.css";
import { useState } from "react";

export default function App() {
  // add state 'people' (same as in Counter but individual) with initial value 0
  // setPeople is used to update the state
  const [people, setPeople] = useState(0);

  // add updatePeople function
  // if people >= 0 (prevents the value from getting under 0)
  // used to update value of people, depending on the clicked buttons from Counter component
  const updatePeople = (people) => {
    if (people >= 0) setPeople(people);
  };

  // return UI
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      {/* render 'Counter' component and pass {updatePeople} function as prop for onCounterChange -> here the updated value is beeing sent by Counter component */}
      <Counter onCounterChange={updatePeople} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
