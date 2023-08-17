import { useState } from "react";

export function NewToDoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    addTodo(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          id="item"
        />
      </div>
      <button className="btn" disabled={!newItem}>
        Add to list
      </button>
    </form>
  );
}
