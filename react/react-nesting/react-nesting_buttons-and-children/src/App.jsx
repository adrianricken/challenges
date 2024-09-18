import "./App.css";

export default function App() {
  return (
    <main>
      <Button>Button I</Button>
      <Button>Button II</Button>
      <Button>Button III</Button>
      <Button>Button IV</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
