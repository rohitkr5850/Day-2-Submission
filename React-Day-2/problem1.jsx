import { useEffect, useState } from "react";

function AutoSaveNotes() {
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("Saved ✓");

  useEffect(() => {
    if (!note) return;

    setStatus("Saving...");

    const timer = setTimeout(() => {
      console.log("Note saved:", note);
      setStatus("Saved ✓");
    }, 2000);

    // cleanup → cancels previous save
    return () => {
      clearTimeout(timer);
    };
  }, [note]);

  return (
    <div>
      <h3>Auto Save Notes</h3>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={5}
        cols={40}
        placeholder="Start typing..."
      />
      <p>{status}</p>
    </div>
  );
}

export default AutoSaveNotes;
