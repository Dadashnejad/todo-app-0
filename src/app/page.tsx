"use client";
import { use, useEffect, useState } from "react";
import App from "./components/App";
import dynamic from "next/dynamic";

const fetchMap = new Map<string, Promise<any>>();
function queryClient<QueryResult>(
  name: string,
  query: () => Promise<QueryResult>
): Promise<QueryResult> {
  if (!fetchMap.has(name)) {
    fetchMap.set(name, query());
  }
  return fetchMap.get(name)!;
}

function Home() {
  const data = use(
    queryClient(
      "getTasks",
      () =>
        fetch("http://localhost:3000/api/getTasks").then((res) =>
          res.json()
        ) as Promise<{ id: string; task: string; state: boolean }[]>
    )
  );
  function toggleTodo() {
    return "checked";
  }

  async function deleteTask(taskId: string) {
    const response = await fetch(`http://localhost:3000/api/${taskId}`, {
      method: "DELETE",
    });
    const data = await response;
    console.log(data);
    location.reload();
  }

  // work on this !
  async function handleSaveEdit(taskId: string, newTitle: string) {}

  return (
    <main className="list">
      <App />
      <ul>
        {data.map((showtasks) => (
          <li key={showtasks.id}>
            <label>
              <input
                type="checkbox"
                checked={showtasks.state}
                onChange={toggleTodo}
              />
              <span className="text">{showtasks.task}</span>
            </label>
            <div className="Buttons">
              <button
                className="btn btn-danger"
                onClick={() => deleteTask(showtasks.id)}
              >
                <span className="fas fa-trash">DEL</span>
              </button>
              <button
                className="btn"
                onClick={() => handleSaveEdit(showtasks.id, showtasks.task)}
              >
                <span className="fas fa-edit">EDIT</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default dynamic(() => Promise.resolve(Home), { ssr: false });
