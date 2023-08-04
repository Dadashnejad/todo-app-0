import { ChangeEvent, useState } from "react";
interface TodoItemProps {
  completed: boolean;
  id: string;
  title: string;
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
  onEdit: (id: string) => void;
}
const [editedTodo, setEditedTodo] = useState<any | null>(null);
const [todos, setTodos] = useState<any[]>([]);
export function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
  onEdit,
}: TodoItemProps): JSX.Element {
  function handleToggleTodo(e: ChangeEvent<HTMLInputElement>): void {
    toggleTodo(id, e.target.checked);
  }

  function handleDeleteTodo(): void {
    deleteTodo(id);
  }

  function handleEditTodo(): void {
    onEdit(id); // Call the onEdit function with the todo id
  }

  function handleCancelEdit(): void {
    setEditedTodo(null);
  }

  function handleSaveEdit(newTitle: string): void {
    if (editedTodo) {
      setTodos((currentTodos) =>
        currentTodos.map((todo) =>
          todo.id === editedTodo.id ? { ...todo, title: newTitle } : todo
        )
      );
      setEditedTodo(null);
    }
  }

  return (
    <li>
      {editedTodo && editedTodo.id === id ? ( // Check if the todo is being edited
        <div className="edit-form">
          <input
            type="text"
            value={editedTodo.title}
            onChange={(e) =>
              setEditedTodo({ ...editedTodo, title: e.target.value })
            }
          />
          <div className="edit-buttons">
            <button
              onClick={() => handleSaveEdit(editedTodo.title)}
              className="btn btn-save"
            >
              Save
            </button>
            <button onClick={handleCancelEdit} className="btn btn-cancel">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        // Display normal todo view if not editing
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
