import { TodoType } from "../components/todo/TodoContainer";
import { api } from "./apiClient";

export const getTodosByUserIdApi = (userId: string) => api.get(`todos/${userId}`).json<TodoType[]>();

export const postTodosApi = (todo: TodoType) => api.post('todos', {
  json: todo,
}).json<TodoType>();

export const deleteTodoById = (id: number) => api.delete('todos/' + id);