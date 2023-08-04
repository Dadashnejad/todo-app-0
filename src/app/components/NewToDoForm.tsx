import axios from "axios";
import React, { useState, useRef } from "react";


export function NewToDoForm() {
  const [task, setTask] = useState("");

  async function submitTask(e: React.FormEvent<HTMLFormElement>) {
    const one = JSON.stringify({task})
    e.preventDefault();
    const data = await fetch("http://localhost:3000/api/createTask", {
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: one,
    })
    location.reload()
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setTask(e.target.value);
  }
  return (
    <form onSubmit={submitTask}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input name="task" value={task} onChange={handleChange} placeholder="new task" type="text" />
        <button type="submit">Add to list</button>
      </div>
    </form>
    
  );
}
