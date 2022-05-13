import { AxiosResponse } from "axios";
import { memoize } from "lodash";
import { Todo } from "../types";
import client from "./client";

export const getTodos: () => Promise<AxiosResponse<Todo[], any>> = memoize(
  () => {
    return client.get("/todos");
  }
);

export const createTodo: (
  newTodo: string
) => Promise<AxiosResponse<Todo, any>> = memoize((newTodo: string) => {
  return client.post("/todos", {
    description: newTodo,
  });
});
