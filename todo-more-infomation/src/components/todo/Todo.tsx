import { TodoType } from "./TodoContainer";

interface Props {
  data: TodoType
  className?: string,
}

function Todo(props: Props) {
  const { data, className } = props;

  return (
    <div className={`${className} flex items-center py-4`}>
      <input type="checkbox" className="m-2" />
      <p className="font-content">{data.content}</p>
    </div>
  );
}

export default Todo;