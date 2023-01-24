import { useState } from "react";
//
interface NewReminderProps {
  onAddReminder: (title: string) => void;
}
//

function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState("");
  //
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddReminder(title);
    setTitle("");
  };
  //
  return (
    <form className="my-4" onSubmit={submitForm}>
      <label htmlFor="title"></label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        type="text"
        className="form-control outline-dashed"
      />
      <button
        type="submit"
        className="bg-blue-500 mx-4 text-white p-2 rounded-full"
      >
        Add reminder
      </button>
    </form>
  );
}

export default NewReminder;
