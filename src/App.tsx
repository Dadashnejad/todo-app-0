import { useState, useEffect } from "react";
import "./style.css";
import { NewToDoForm } from "./NewToDoForm";
import { TodoEditForm } from "./app/components/TodoEditForm";
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

  function handleEditTodo(id: string): void {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setEditedTodo(todoToEdit);
    }
  }

  function handleSaveEdit(id: string, newTitle: string): void {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
    setEditedTodo(null);
  }

  return (
    <>
      <NewToDoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        onEdit={handleEditTodo}
        onSaveEdit={handleSaveEdit}
      />
    </>
  );
}
