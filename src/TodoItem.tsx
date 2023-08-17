import React, { useState, ChangeEvent } from "react";
import { EditTodoForm } from "./EditToDoForm";

interface TodoItemProps {
  completed: boolean;
  id: string;
  title: string;
  deleteTodo: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
}

export function TodoItem({
  completed,
  id,
  title,
  deleteTodo,
  onEdit,
}: TodoItemProps): JSX.Element {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = (newTitle: string) => {
    onEdit(id, newTitle);
    setIsEditing(false);
    setEditedTitle(newTitle);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  return (
    <li>
      {isEditing ? (
        <EditTodoForm
          taskId={id}
          initialTitle={editedTitle}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      ) : (
        <>
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={handleToggleTodo}
            />
            <span className="text">{editedTitle}</span>
          </label>
          <button onClick={handleEdit} className="btn btn-edit">
            Edit
          </button>
          <button onClick={handleDeleteTodo} className="btn btn-danger">
            <span className="fas fa-trash"></span>
          </button>
        </>
      )}
    </li>
  );
}
