import "./EntryForm.css";

export default function EntryForm() {
  return (
    <>
      <label htmlFor="inputMotto">Motto</label>
      <input type="text" className="inputField" id="inputMotto"></input>
      <br />
      <label htmlFor="inputNotes">Notes</label>
      <input type="text" className="inputField" id="inputNotes"></input>
      <br />
      <button type="submit">Create</button>
    </>
  );
}
