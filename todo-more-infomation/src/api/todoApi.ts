import { TodoType } from "../components/todo/TodoContainer";
import { api } from "./apiClient";

export const getTodosByUserIdApi = (userId: string) => api.get(`todos/${userId}`).json<TodoType[]>();