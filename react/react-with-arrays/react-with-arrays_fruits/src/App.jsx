import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🍉 watermelon",
      color: "red",
    },
    {
      id: 3,
      name: "🍊 orange",
      color: "orange",
    },
    {
      id: 4,
      name: "🫐 blueberry",
      color: "blue",
    },
    {
      id: 5,
      name: "🍐 pear",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
