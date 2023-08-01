import { useState, ChangeEvent, FormEvent } from "react";

interface NewToDoFormProps {
  onSubmit: (title: string) => void;
}

export function NewToDoForm({ onSubmit }: NewToDoFormProps): JSX.Element {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setNewItem(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" value={newItem} onChange={handleChange} id="item" />
      </div>
      <button className="btn" disabled={!newItem}>
        Add to list
      </button>
    </form>
  );
}
