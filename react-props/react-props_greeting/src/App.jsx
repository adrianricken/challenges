import "./App.css";

export default function App() {
  return (
    <div>
      <Greeting inputName={"Adrian"} />
    </div>
  );
}

function Greeting({ inputName }) {
  const coaches = ["Gimena", "Klaus", "Jan", "Sven"];
  return <div>Hello, {coaches.includes(inputName) ? "coach" : inputName}!</div>;
}
