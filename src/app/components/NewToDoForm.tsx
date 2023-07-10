"use client"
import { useState, ChangeEvent, FormEvent } from "react";

interface NewToDoFormProps {
  onSubmit: (title: string) => void;
}

export function NewToDoForm({ onSubmit }: NewToDoFormProps): JSX.Element {
  const [newItem, setNewItem] = useState("");
  const [task, setTask] = useState("");

  async function submitTask(e: React.FormEvent) {
    e.preventDefault();
    const data = await fetch("/api/createTask", {
      method: "POST",
      body: JSON.stringify({ task }), 
    });
    const res = await data.json();
    if (!res.ok) console.log(res);
  }

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
    <form onSubmit={submitTask}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          onChange={(e) => setTask(e.target.value)}
          value={task}
          type="text"
        />
        <button className="btn" disabled={!task} type="submit">
          Add to list
        </button>
      </div>
    </form>
  );
}
