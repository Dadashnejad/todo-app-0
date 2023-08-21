"use client";

import { use, useEffect, useState } from "react";
import App from "./components/App";
import dynamic from "next/dynamic";
import { TodoEditForm } from "@/app/components/TodoEditForm";
import { BiEdit, BiTrashAlt, BiCheck, BiX } from "react-icons/bi";

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

  const [editedTodo, setEditedTodo] = useState<any | null>(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);

  async function deleteTask(taskId: string) {
    const response = await fetch(`http://localhost:3000/api/${taskId}`, {
      method: "DELETE",
    });
    const data = await response;
    location.reload();
  }

  async function handleSaveEdit(taskId: string, newTitle: string) {
    const editTask = JSON.stringify({ task: newTitle });
    console.log(editTask);
    const response = await fetch(`http://localhost:3000/api/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: editTask,
    });
    location.reload();
  }

  function handleEdit(todoId: string, todoTitle: string) {
    setEditedTodo({ id: todoId, title: todoTitle });
    setEditedTitle(todoTitle);
  }

  function handleCancelEdit() {
    setEditedTodo(null);
    setEditedTitle("");
  }

  async function toggleTodo(taskId: string, completed: boolean) {
    const editTask = JSON.stringify({ state: completed });
    console.log(editTask);
    const response = await fetch(
      `http://localhost:3000/api/taskdone/${taskId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: editTask,
      }
    );
    location.reload();
  }

  return (
    <main className="list">
      <App />
      <ul>
        {data.map((showtasks) => (
          <li key={showtasks.id}>
            <label>
              <span
                className="text"
                style={{
                  opacity: showtasks.state ? 0.7 : 1,
                  textDecoration: showtasks.state ? "line-through" : "none",
                  color: showtasks.state ? "green" : "inherit",
                }}
              >
                {showtasks.task}
              </span>
            </label>
            <div className="Buttons">
              <button
                className="btn btn-toggle"
                style={{
                  backgroundColor: showtasks.state ? "red" : "#22c55e",
                  opacity: showtasks.state ? 0.7 : 1,
                }}
                onClick={() => toggleTodo(showtasks.id, showtasks.state)}
              >
                <span>
                  {showtasks.state ? (
                    <BiX
                      className="toggle-text"
                      size={20}
                      style={{ color: "black" }}
                    /> // when task is done
                  ) : (
                    <BiCheck className="toggle-text" size={20} /> // Normal view
                  )}
                </span>
              </button>
              <button
                className="btn btn-edit flex items-center justify-center"
                onClick={() => handleEdit(showtasks.id, showtasks.task)}
              >
                <span className="fas fa-edit">
                  <BiEdit size={15}></BiEdit>{" "}
                </span>
              </button>

              <button
                className="btn btn-danger flex items-center justify-center"
                onClick={() => deleteTask(showtasks.id)}
              >
                <span className="fas fa-trash">
                  <BiTrashAlt size={15}></BiTrashAlt>
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul>
      {editedTodo && (
        <TodoEditForm
          editedTodo={editedTodo}
          onSaveEdit={(newTitle) => handleSaveEdit(editedTodo.id, newTitle)}
          onCancelEdit={handleCancelEdit}
        />
      )}
    </main>
  );
}
export default dynamic(() => Promise.resolve(Home), { ssr: false });
