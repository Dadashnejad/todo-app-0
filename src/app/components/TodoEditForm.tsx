import React, { useEffect, useState } from "react";

interface TodoEditFormProps {
  editedTodo: any;
  onSaveEdit: (newTitle: string) => void;
  onCancelEdit: () => void;
}

export function TodoEditForm({
  editedTodo,
  onSaveEdit,
  onCancelEdit,
}: TodoEditFormProps): JSX.Element {
  const [editedTitle, setEditedTitle] = useState(editedTodo.title);

  useEffect(() => {
    setEditedTitle(editedTodo.title);
  }, [editedTodo]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEditedTitle(event.target.value);
  }

  function handleSave() {
    onSaveEdit(editedTitle);
    onCancelEdit();
  }

  return (
    <div className="edit-form">
      <input
        type="text"
        value={editedTitle}
        onChange={handleInputChange}
        autoFocus
      />
      <div className="edit-buttons">
        <button type="submit" onClick={handleSave} className="btn btn-save">
          Save
        </button>
        <button onClick={onCancelEdit} className="btn btn-cancel">
          Cancel
        </button>
      </div>
    </div>
  );
}
