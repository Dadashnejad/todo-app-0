import React, { useState } from "react";

interface EditTodoFormProps {
  taskId: string;
  initialTitle: string;
  onSave: (taskId: string, newTitle: string) => void;
  onCancel: () => void;
}

export function EditTodoForm({
  taskId,
  initialTitle,
  onSave,
  onCancel,
}: EditTodoFormProps): JSX.Element {
  const [newTitle, setNewTitle] = useState(initialTitle);

  const handleSave = () => {
    onSave(taskId, newTitle);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="edit-form">
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <div className="edit-buttons">
        <button onClick={handleSave} className="btn btn-save">
          Save
        </button>
        <button onClick={handleCancel} className="btn btn-cancel">
          Cancel
        </button>
      </div>
    </div>
  );
}
