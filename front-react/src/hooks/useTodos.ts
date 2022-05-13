import { useCallback, useEffect, useState } from "react";
import { getTodos, createTodo } from "../services/todos";
import { Todo } from "../types";
import makeObservable from "./makeObservable";

const todosStore = makeObservable<Todo[]>([]);
export default function useTodos() {
  const [todos, setTodos] = useState(todosStore.get());
  const addTodo = useCallback(async (newTodo: string) => {
    const createdTodo = await createTodo(newTodo);
    todosStore.set([...todosStore.get(), createdTodo.data]);
  }, []);
  useEffect(() => {
    getTodos().then((todos) => todosStore.set(todos.data as Todo[]));
    return todosStore.subscribe(setTodos);
  }, []);
  return { todos, addTodo };
}
