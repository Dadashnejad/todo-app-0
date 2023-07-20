import { useState, useEffect } from "react";
import { NewToDoForm } from "./NewToDoForm";
import { TodoList } from "./TodoList";

export default function App(): JSX.Element {
  const [todos, setTodos] = useState<any[]>([]);

  return (
    <>
      <NewToDoForm/>
      <h1 className="header">Todo List</h1>
    </>
  );
}
