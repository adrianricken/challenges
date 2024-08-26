import "./App.css";

export default function App() {
  return <Greeting inputName={"Adrian"} />;
}

function Greeting({ inputName }) {
  const coaches = ["Gimena", "Klaus", "Jan", "Sven"];
  return <h1>Hello, {coaches.includes(inputName) ? "coach" : inputName}!</h1>;
}
