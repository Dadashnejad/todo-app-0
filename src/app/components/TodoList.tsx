import { TodoItem } from "./TodoItem";
import { prisma } from "../db";

interface TodoListProps {
  todos: {
    id: string;
    title: string;
    completed: boolean;
  }[];
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

export async function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
}: TodoListProps) {
  const alltodos = await prisma.tasktd.findMany();
  //await prisma.tasktd.create({ data: { task: "test", state: false } });
  

  return (
    <ul className="list">
      <ul>
        {alltodos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>

      {todos.length === 0 && <li>No Todos</li>}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
