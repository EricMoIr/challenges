import useTodos from "../hooks/useTodos";

function TodosList() {
  const todos = useTodos();

  return (
    <ol>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.description}</li>
      ))}
    </ol>
  );
}

export default TodosList;
