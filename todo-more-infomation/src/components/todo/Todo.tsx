import { useState } from "react";
import TodoCheckbox from "./TodoCheckbox";
import { TodoType } from "./TodoContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useTodoStore } from "../../stores/todoStore";

interface Props {
  data: TodoType;
  className?: string;
}

function Todo(props: Props) {
  const { data, className } = props;

  const [checked, setChecked] = useState<boolean>(false);
  const deleteTodo = useTodoStore((state) => state.delete);

  const onClickTrashButton = (e: React.MouseEvent) => {
    e.preventDefault();

    console.log(data);

    if (typeof data.id === "number") {
      deleteTodo(data.id);
    }
  }

  return (
    <div className={`${className} flex items-center py-4`}>
      <section className="select-none flex items-center">
        <TodoCheckbox
          type="success"
          className="mr-3"
          checked={checked}
          setChecked={setChecked}
        />
      </section>

      <p
        className={`font-content grow ${
          checked ? "line-through text-gray-400" : ""
        }`}
      >
        {data.content}
      </p>

      <section>
        <label onClick={onClickTrashButton} className="text-red-500 cursor-pointer hover:bg-gray-200 p-1 ms-1">
          <FontAwesomeIcon icon={faTrash} />
        </label>
      </section>
    </div>
  );
}

export default Todo;
