import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useNavigate } from "react-router-dom";
import { useTodoStore } from "../../stores/todoStore";
import { TodoType } from "./TodoContainer";

function TodoForm() {
  const navigate = useNavigate();

  const addTodo = useTodoStore((state) => state.add);

  const [text, setText] = useState<string>("");
  const [selected, setSelected] = useState<Date>();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (text) {
      const todo: TodoType = {
        content: text,
        estimated: selected as Date,
        isDone: false,
      };

      addTodo(todo);

      navigate("/");
    } else {
      alert("빈 칸입니다.");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-center m-auto w-80 items-center h-full"
    >
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        className="border rounded-xl py-2 px-4 my-8"
      />
      <DayPicker
        animate
        mode="single"
        selected={selected}
        onSelect={setSelected}
      />

      <button
        type="submit"
        className="py-2 px-3 border-none bg-success-500 text-white rounded-xl cursor-pointer mt-4"
      >
        Save
      </button>
    </form>
  );
}

export default TodoForm;
