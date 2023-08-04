import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: {
    id: string;
    title: string;
    completed: boolean;
    onEdit: string;
  }[];
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
  onEdit: () => void;
}

export function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  onEdit,
}: TodoListProps): JSX.Element {
  return (
    <ul className="list">
      {todos.length === 0 && <li>No Todos</li>}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
