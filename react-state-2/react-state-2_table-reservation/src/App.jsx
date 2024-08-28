import Counter from "./components/Counter";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleAdd() {
    setPeople(people + 1);
  }

  function handleSubtract() {
    if (people >= 1) setPeople(people - 1);
  }

  // return UI
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      {/* render 'Counter' component and pass {updatePeople} function as prop for onCounterChange -> here the updated value is beeing sent by Counter component */}
      <Counter onAdd={handleAdd} onSubtract={handleSubtract} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
