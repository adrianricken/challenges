import "./App.css";

export default function App() {
  return HelloWorldArticle();
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>BIG NEWS</h1>
      <p>
        This is a paragraph inside an article which was created using React!
      </p>
      <p>
        This is a second paragraph and i changed the predefined color for
        p-Elements to var(--accent) for better readability.
      </p>
    </article>
  );
}
