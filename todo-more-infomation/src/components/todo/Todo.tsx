import { useState } from "react";
import TodoCheckbox from "./TodoCheckbox";
import { TodoType } from "./TodoContainer";

interface Props {
  data: TodoType;
  className?: string;
}

function Todo(props: Props) {
  const { data, className } = props;

  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className={`${className} flex items-center py-4`}>
      <div className="select-none flex items-center">
        <TodoCheckbox type="success" className="mr-3" checked={checked} setChecked={setChecked} />
      </div>
      <p className={`font-content text ${checked ? "line-through text-gray-300" : ""}`}>{data.content}</p>
    </div>
  );
}

export default Todo;
