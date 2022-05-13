import { useEffect, useState } from "react";
import { getTodos } from "../services/todos";
import { Todo } from "../types";
import makeObservable from "./makeObservable";

const todosStore = makeObservable<Todo[]>([]);
export default function useTodos() {
  const [todos, setTodos] = useState(todosStore.get());
  useEffect(() => {
    getTodos().then((todos) => setTodos(todos.data as Todo[]));
    return todosStore.subscribe(setTodos);
  }, []);
  return todos;
}
