import { TodoType } from "../components/todo/TodoContainer";
import { api } from "./apiClient";

export const getTodosByUserIdApi = (userId: string) => api.get(`users/${userId}`).json<TodoType[]>();

export const getTodoByIdAPi = (id: string) => api.get(`todos/${id}`).json<TodoType>();

export const postTodosApi = (todo: TodoType) => api.post('todos', {
  json: todo,
}).json<TodoType>();

export const deleteTodoByIdApi = (id: number) => api.delete('todos/' + id);

export const updateTodoApi = (todo: TodoType) => api.put('todos', {
  json: todo,
});