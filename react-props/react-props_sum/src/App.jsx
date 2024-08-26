import "./App.css";

export default function App() {
  return <Sum valueA={13} valueB={23} />;
}

function Sum({ valueA, valueB }) {
  return (
    <div>
      {valueA} + {valueB} = {valueA + valueB}
    </div>
  );
}
