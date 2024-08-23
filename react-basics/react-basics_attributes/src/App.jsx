import "./App.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Wikipedia article of the day</h2>
      <label htmlFor="inputText">Here you can type something:</label>
      <input type="text" id="inputText"></input>
      <a
        href="https://de.wikipedia.org/wiki/Albrecht_Alt"
        className="article__link"
      >
        Albrecht Alt (whoever that is)
      </a>
    </article>
  );
}
