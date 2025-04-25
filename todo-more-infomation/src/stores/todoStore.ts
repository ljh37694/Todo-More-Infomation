import { create } from "zustand";
import { TodoType } from "../components/todo/TodoContainer";
import { deleteTodoByIdApi, postTodosApi, updateTodoApi } from "../api/todoApi";

interface TodoStoreState {
  todoList: TodoType[];
  init: (todoList: TodoType[]) => void;
  add: (todo: TodoType) => void;
  delete: (id: number) => void;
  edit: (todo: TodoType) => void;
}

export const useTodoStore = create<TodoStoreState>((set) => ({
  todoList: [],
  init: (todoList) =>
    set(() => ({
      todoList: todoList,
    })),
  add: (todo) => set((state) => {
    let newTodo: TodoType = todo;

    postTodosApi(todo)
      .then((res) => newTodo = res)
      .catch((e) => console.log(e));

    return {
      todoList: [newTodo, ...state.todoList],
    }
  }),
  delete: (id) =>
    set((state) => {
      deleteTodoByIdApi(id);

      return {
        todoList: [...state.todoList.filter((todo) => todo.id !== id)]
      }
    }),
  edit: (todo) => set((state) => {
    updateTodoApi(todo);

    return {}
  }),
}));
