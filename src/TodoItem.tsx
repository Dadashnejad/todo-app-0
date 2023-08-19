import { useState, ChangeEvent } from "react";
import { TodoEditForm } from "./app/components/TodoEditForm";

interface TodoItemProps {
  completed: boolean;
  id: string;
  title: string;
  deleteTodo: (id: string) => void;
  onEdit: (id: string) => void;
  onSaveEdit: (id: string, newTitle: string) => void; // Add onSaveEdit prop
}

export function TodoItem({
  completed,
  id,
  title,
  deleteTodo,
  onEdit,
  onSaveEdit,
}: TodoItemProps): JSX.Element {
  const [editedTodo, setEditedTodo] = useState<any | null>(null);

  function handleDeleteTodo(): void {
    deleteTodo(id);
  }

  function handleEditTodo(): void {
    onEdit(id);
    setEditedTodo({ id, title });
  }

  function handleCancelEdit(): void {
    setEditedTodo(null);
  }

  function handleSaveEdit(newTitle: string): void {
    onSaveEdit(id, newTitle); // Call the onSaveEdit function with the task id and new title
    setEditedTodo(null);
  }

  return (
    <li>
      {editedTodo && editedTodo.id === id ? (
        <TodoEditForm
          editedTodo={editedTodo}
          onSaveEdit={handleSaveEdit} // Pass the handleSaveEdit function
          onCancelEdit={handleCancelEdit}
        />
      ) : (
        <>
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={handleToggleTodo}
            />
            <span className="text">{title}</span>
          </label>
          <button onClick={handleEditTodo} className="btn btn-edit">
            <span className="fas fa-edit"></span>
          </button>
          <button onClick={handleDeleteTodo} className="btn btn-danger">
            <span className="fas fa-trash"></span>
          </button>
        </>
      )}
    </li>
  );
}
