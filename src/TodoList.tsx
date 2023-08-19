import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: {
    id: string;
    title: string;
    completed: boolean;
  }[];
  deleteTodo: (id: string) => void;
  onEdit: (id: string) => void;
  onSaveEdit: (id: string, newTitle: string) => void;
}

export function TodoList({
  todos,
  deleteTodo,
  onEdit,
  onSaveEdit,
}: TodoListProps): JSX.Element {
  return (
    <ul className="list">
      {todos.length === 0 && <li>No Todos</li>}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          deleteTodo={deleteTodo}
          onEdit={onEdit}
          onSaveEdit={onSaveEdit}
        />
      ))}
    </ul>
  );
}
