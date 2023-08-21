import React, { useState, useRef } from "react";

export function NewToDoForm() {
  const [task, setTask] = useState("");

  async function submitTask(e: React.FormEvent<HTMLFormElement>) {
    const one = JSON.stringify({ task });
    e.preventDefault();
    if (one !== "") {
      const data = await fetch("http://localhost:3000/api/createTask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: one,
      });
      location.reload();
    } else {
      window.alert("Its empty");
    }
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setTask(e.target.value);
  }
  return (
    <form onSubmit={submitTask}>
      <div className="form-row">
        <label className="block text-gray-700" htmlFor="item">
          New Item
        </label>
        <input
          className="rounded-md input-text"
          name="task"
          value={task}
          onChange={handleChange}
          placeholder="new task"
          type="text"
        />
        <button
          className="bg-green-500 border-green-500 rounded-md hover:bg-green-400"
          type="submit"
        >
          Add to list
        </button>
      </div>
    </form>
  );
}
