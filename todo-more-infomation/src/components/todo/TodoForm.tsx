import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { TodoType } from "./TodoContainer";
import { useNavigate } from "react-router-dom";
import { useTodoStore } from "../../stores/todoStore";

interface Props {
  todo?: TodoType;
}

function TodoForm(props: Props) {
  const { todo } = props;

  const navigate = useNavigate();

  const [content, setContent] = useState<string>("");
  const [selected, setSelected] = useState<Date>();

  const addTodo = useTodoStore(state => state.add);
  const editTodo = useTodoStore(state => state.edit);

  useEffect(() => {
    if (todo) {
      setContent(todo.content);
      setSelected(todo.estimated);
    }
  }, [todo]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (content) {
      const newTodo: TodoType = {
        id: todo ? todo.id : undefined,
        content: content,
        estimated: selected as Date,
        userId: "hoon37694",
        isDone: todo ? todo.isDone : false,
      };

      console.log(newTodo);

      todo ? editTodo(newTodo) : addTodo(newTodo);

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
        value={content}
        onChange={(e) => setContent(e.target.value)}
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
        {todo ? "Edit" : "Add"}
      </button>
    </form>
  );
}

export default TodoForm;
