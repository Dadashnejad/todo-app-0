import React, { useState } from "react";

interface TodoEditFormProps {
  editedTodo: any;
  onSaveEdit: (id: string, newTitle: string) => void;
  onCancelEdit: () => void;
}

export function TodoEditForm({
  editedTodo,
  onSaveEdit,
  onCancelEdit,
}: TodoEditFormProps): JSX.Element {
  const [editedTitle, setEditedTitle] = useState(editedTodo.title);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEditedTitle(event.target.value);
  }

  function handleSave() {
    onSaveEdit(editedTodo.id, editedTitle);
  }

  return (
    <div className="edit-form">
      <input type="text" value={editedTitle} onChange={handleInputChange} />
      <div className="edit-buttons">
        <button
          onClick={() => onSaveEdit(editedTodo.id, editedTitle)}
          className="btn btn-save"
        >
          Save
        </button>
        <button onClick={onCancelEdit} className="btn btn-cancel">
          Cancel
        </button>
      </div>
    </div>
  );
}
