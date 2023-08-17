import { useState, useEffect } from "react";
import "./app/globals.css";
import { NewToDoForm } from "./NewToDoForm";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";

export default function App(): JSX.Element {
  const [todos, setTodos] = useState<any[]>([]);
  const [editedTodo, setEditedTodo] = useState<any | null>(null);
  const [tabTitle, setTabTitle] = useState<string>(document.title);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState();

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

  const handleToggleTodo = (id: string, completed: boolean) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: completed } : todo
      )
    );
  };

  function deleteTodo(id: string): void {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  const onEdit = (taskId: string) => {
    const editedTask = todos.find((todo) => todo.id === taskId);
    if (editedTask) {
      setEditingTaskId(taskId);
      setEditedTitle(editedTask.title);
    }
  };

  return (
    <>
      <NewToDoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} onEdit={onEdit} />
    </>
  );
}
