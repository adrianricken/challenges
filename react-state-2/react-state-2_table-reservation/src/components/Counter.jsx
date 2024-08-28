import { useState } from "react";
import "./Counter.css";

// receiving {onCounterChange} as prop, which displays the 'updatePeople' function
export default function Counter({ onCounterChange }) {
  // add state 'people' (same as in App but individual) with initial value 0
  // setPeople is used to update the state
  const [people, setPeople] = useState(0);
  // updatePeople function updates the value of {people} (ONLY IN COUNTER COMPONENT)
  // afterwards 'onCounterChange' function is called with argument 'people' to send new value of {people} to the App component (also here first checking, that {people} is not > 0)
  const updatePeople = (people) => {
    if (people >= 0) {
      setPeople(people);
      onCounterChange(people);
    }
  };
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={() => updatePeople(people + 1)}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={() => updatePeople(people - 1)}
        >
          -
        </button>
      </div>
    </>
  );
}
