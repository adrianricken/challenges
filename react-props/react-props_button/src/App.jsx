import "./App.css";

export default function App() {
  return (
    <Button
      color="turquoise"
      backgroundColor="hotpink"
      disabled={false}
      text="click me"
      onClick={handleClick}
    />
  );
}

function Button({ color, backgroundColor, disabled, text, onClick }) {
  return (
    <button
      style={{ color: color, backgroundColor: backgroundColor }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function handleClick() {
  console.log("You clicked me!");
}
