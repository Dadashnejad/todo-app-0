import { useState } from "react";
import "./styles.css";
import { NewToDoForm } from "./NewToDoForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewToDoForm addTodo={addTodo}></NewToDoForm>
      <h1 className="header">Todo List</h1>
      <TodoList todo={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}