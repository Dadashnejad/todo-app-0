import { ChangeEvent } from "react";

interface TodoItemProps {
  completed: boolean;
  id: string;
  title: string;
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

export function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
}: TodoItemProps): JSX.Element {
  function handleToggleTodo(e: ChangeEvent<HTMLInputElement>): void {
    toggleTodo(id, e.target.checked);
  }

  function handleDeleteTodo(): void {
    deleteTodo(id);
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleToggleTodo}
        />
        <span className="text">{title}</span>
      </label>
      <button onClick={handleDeleteTodo} className="btn btn-danger">
        <span className="fas fa-trash"></span>
      </button>
    </li>
  );
}
