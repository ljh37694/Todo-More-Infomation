import { useState } from "react";
import Todo from "./Todo";

export interface TodoType {
  content: string,
  estimated: Date,
  isDone: false,
}

function TodoContainer() {
  const [todoList, setTodoList] = useState<TodoType[]>([
    {
      content: "I forgot somthing",
      estimated: new Date(),
      isDone: false,
    },
    {
      content: "I forgot somthing",
      estimated: new Date(),
      isDone: false,
    },
    {
      content: "I forgot somthing",
      estimated: new Date(),
      isDone: false,
    },
    {
      content: "I forgot somthing",
      estimated: new Date(),
      isDone: false,
    },
    {
      content: "I forgot somthing",
      estimated: new Date(),
      isDone: false,
    },
  ]);

  return (
    <div className="w-1/3 max-w-2xl">
      <h1 className="text-2xl mb-2.5 font-title ps-1.5">TO-DO</h1>
      <div className="">
        {
          todoList.map((todo, idx) => <Todo data={todo} key={idx} className="not-last:border-b border-gray-200" />)
        }
      </div>
    </div>
  );
}

export default TodoContainer;
