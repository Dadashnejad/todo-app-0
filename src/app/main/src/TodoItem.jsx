export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <span className="text">{title}</span>
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        <span className="fas fa-trash"></span>
      </button>
    </li>
  );
}
