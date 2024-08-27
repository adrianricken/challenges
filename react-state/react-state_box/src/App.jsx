import { useState } from "react";
import "./App.css";

export default function App() {
  const [isActive, setActive] = useState(false);

  function handleClick() {
    setActive(!isActive);
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}

// Bonus Task:
/* the console.log is in the handleClick-function, which turns the state of
isActive and console.log’s the old/opposite value.
It is updated in the next call, but then it is updated again, thats why it’s always
vice vera.*/
