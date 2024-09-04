import EntriesSection from "./EntriesSection";
import EntryForm from "./EntryForm";
import "./Main.css";

export default function Main() {
  return (
    <body>
      <h4 className="newHeading">NEW ENTRY</h4>
      <br />
      <EntryForm />
      <EntriesSection />
    </body>
  );
}
