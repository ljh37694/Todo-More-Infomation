import { useNavigate, useParams } from "react-router-dom";
import TodoForm from "../components/todo/TodoForm";
import { useEffect, useState } from "react";
import { TodoType } from "../components/todo/TodoContainer";
import { getTodoByIdAPi } from "../api/todoApi";

function EditTodo() {
  const { id } = useParams();
  const [todo, setTodo] = useState<TodoType | undefined>();

  const navigate = useNavigate();

  useEffect(() => {
    if (typeof id === "string") {
      getTodoByIdAPi(id)
        .then((data) => {
          console.log(data);
          setTodo(data);
        })
        .catch((e) => console.log(e));
    } else {
      navigate('/');
    }
  }, []);

  return (
    <div>
      <TodoForm todo={todo as TodoType} />
    </div>
  );
}

export default EditTodo;
