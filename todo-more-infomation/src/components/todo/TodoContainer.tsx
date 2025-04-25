import Todo from "./Todo";
import TodoAddButton from "./TodoAddButton";
import { useNavigate } from "react-router-dom";
import { useTodoStore } from "../../stores/todoStore";
import { useEffect } from "react";
import { getTodosByUserIdApi } from "../../api/todoApi";

export interface TodoType {
  id?: number;
  content: string;
  estimated: Date;
  userId: string;
  isDone: false;
}

function TodoContainer() {
  const navigate = useNavigate();

  const todos = useTodoStore((state) => state.todoList);
  const setTodos = useTodoStore((state) => state.init);

  const curDate = new Date();

  useEffect(() => {
    const fn = async () => {
      const data = await getTodosByUserIdApi("hoon37694");
      console.log(data);

      setTodos(data);
    };

    fn();
  }, []);

  return (
    <div className="w-1/3 max-w-2xl m-auto p-6">
      <section className="flex items-center mb-2.5 ps-1.5">
        <h1 className="text-3xl font-title mr-3">TO-DO</h1>
        <p className="text-xl">{curDate.getMonth() + 1}월 {curDate.getDate()}일</p>
      </section>
      <section className="">
        {todos.map((todo, idx) => (
          <Todo
            data={todo}
            key={idx}
            className="not-last:border-b border-gray-200"
          />
        ))}
      </section>

      <TodoAddButton
        onClick={() => navigate("/todos/add")}
        className="fixed left-1/2 -translate-x-1/2 bottom-24"
      />
    </div>
  );
}

export default TodoContainer;
