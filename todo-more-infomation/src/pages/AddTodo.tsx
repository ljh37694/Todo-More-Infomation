import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useTodoStore } from "../stores/todoStore";
import { TodoType } from "../components/todo/TodoContainer";
import { useNavigate } from "react-router-dom";

function AddTodo() {
  const navigate = useNavigate();

  const addTodo = useTodoStore((state) => state.add);

  const [text, setText] = useState<string>("");
  const [selected, setSelected] = useState<Date>();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const todo: TodoType = {
      content: text,
      estimated: selected as Date,
      isDone: false,
      id: "1",
    }

    addTodo(todo);

    navigate("/");
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <DayPicker
          animate
          mode="single"
          selected={selected}
          onSelect={setSelected}
        />

        <button type="submit" className="p-2 border-none bg-success-500 text-white rounded-xl cursor-pointer">Save</button>
      </form>
    </div>
  );
}

export default AddTodo;
