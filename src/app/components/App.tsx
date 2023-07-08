import { useState, useEffect } from "react";
import { NewToDoForm } from "./NewToDoForm";
import { TodoList } from "./TodoList";

export default function App(): JSX.Element {
  const [todos, setTodos] = useState<any[]>([]);

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
    </>
  );
}
