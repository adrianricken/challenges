import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }
  // setCount works asynchronous -> all three 'setCount's are being bundled and called at the end of the function -> as if there is only one setCount

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button
        type="button"
        className="counter__button"
        onClick={handleIncrement}
      >
        Increment count by 3
      </button>
    </div>
  );
}
