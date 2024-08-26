import "./App.css";

export default function App() {
  return (
    <button>
      <Button color={"blue"} disabled={false} text="I'm a button" />
    </button>
  );
}

function Button({ color, disabled, text }) {
  return (
    <button
      color="color"
      disabled="disabled"
      content="text"
      style={{ height: "100px", width: "50px" }}
    ></button>
  );
}
