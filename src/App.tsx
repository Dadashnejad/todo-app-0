import { useState, useEffect } from "react";
import "./style.css";
import { NewToDoForm } from "./NewToDoForm";
import { TodoList } from "./TodoList";

export default function App(): JSX.Element {
  const [todos, setTodos] = useState<any[]>([]);
  const [editedTodo, setEditedTodo] = useState<any | null>(null);
  const [tabTitle] = useState<string>(document.title);

  useEffect(() => {
    const handleBlur = () => {
      document.title = "😢 Come Back 😢";
    };

    const handleFocus = () => {
      document.title = tabTitle;
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, [tabTitle]);

  function addTodo(title: string): void {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function toggleTodo(id: string, completed: boolean): void {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      })
    );
  }

  function deleteTodo(id: string): void {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <NewToDoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
