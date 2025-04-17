import { create } from "zustand";
import { TodoType } from "../components/todo/TodoContainer";
import { deleteTodoById, postTodosApi } from "../api/todoApi";

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
    const id: number = Math.floor(Math.random() * 1000000);

    todo.id = id;

    postTodosApi(todo)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));

    return {
      todoList: [todo, ...state.todoList],
    }
  }),
  delete: (id) =>
    set((state) => {
      deleteTodoById(id);

      return {
        todoList: [...state.todoList.filter((todo) => todo.id !== id)]
      }
    }),
  edit: (todo) => set((state) => ({})),
}));
