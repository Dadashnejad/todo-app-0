"use client";
import { use, useEffect, useState } from "react";
import App from "./components/App";
import dynamic from "next/dynamic";
import "./globals.css";
import { EditTodoForm } from "@/EditToDoForm";

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
  const [todos, setTodos] = useState<any[]>([]);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTodoIds, setSelectedTodoIds] = useState<string[]>([]);

  const toggleTodo = (id: string, completed: boolean) => {
    if (selectedTodoIds.includes(id)) {
      setSelectedTodoIds((prevIds) =>
        prevIds.filter((todoId) => todoId !== id)
      );
    } else {
      setSelectedTodoIds((prevIds) => [...prevIds, id]);
    }
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !completed } : todo
      )
    );
  };

  async function deleteTask(taskId: string) {
    const response = await fetch(`http://localhost:3000/api/${taskId}`, {
      method: "DELETE",
    });
    const data = await response;
    console.log(data);
    location.reload();
  }

  async function handleSaveEdit(taskId: string, newTitle: string) {}

  const handleEditTodo = (taskId: string, initialTitle: string) => {
    setIsEditing(true);
    setEditedTodo({
      taskId: taskId,
      initialTitle: initialTitle,
    });
    setEditedTitle(initialTitle);
    setEditingTaskId(taskId);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTodo(null);
  };
  return (
    <main className="list">
      <App />
      <ul className="Todo">
        {data.map((showtasks) => (
          <li
            key={showtasks.id}
            className={selectedTodoIds.includes(showtasks.id) ? "selected" : ""}
          >
            <span className="text">{showtasks.task}</span>
            <div className="Buttons">
              <button
                className="btn btn-toggle"
                onClick={() => toggleTodo(showtasks.id, showtasks.state)}
              >
                &#x2713;
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteTask(showtasks.id)}
              >
                <span className="fas fa-trash">DEL</span>
              </button>
              <button
                className="btn"
                onClick={() => handleEditTodo(showtasks.id, showtasks.task)}
              >
                <span className="fas fa-edit">EDIT</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
      {editedTodo && (
        <EditTodoForm
          taskId={editedTodo.taskId}
          initialTitle={editedTodo.initialTitle}
          onSave={handleSaveEdit}
          onCancel={handleCancel}
        />
      )}
    </main>
  );
}
export default dynamic(() => Promise.resolve(Home), { ssr: false });
