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
    <div className="py-4 px-10 h-[90vh] flex flex-col md:w-1/3 max-w-2xl m-auto md:p-6">
      <section className="flex items-center mb-2.5 ps-1.5">
        <h1 className="text-3xl font-title mr-3">TO-DO</h1>
        <p className="text-xl">
          {curDate.getMonth() + 1}월 {curDate.getDate()}일
        </p>
      </section>

      <section className="w-full overflow-scroll scroll-hidden">
        {todos.map((todo, idx) => (
          <Todo
            data={todo}
            key={idx}
            className="not-last:border-b last:mb-0.5 border-gray-200"
          />
        ))}
      </section>

      <section className="flex justify-center items-center pt-4">
        <TodoAddButton onClick={() => navigate("/todos/add")} className="" />
      </section>
    </div>
  );
}

export default TodoContainer;
