import "./App.css";

export default function App() {
  return (
    <div>
      <Sum valueA={13} valueB={23} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  return (
    <div>
      {valueA} + {valueB} = {valueA + valueB}
    </div>
  );
}
