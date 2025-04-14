import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  className?: string,
  onClick: () => void,
  [key: string]: any;
}

function TodoAddButton(props: Props) {
  const { ...rest } = props;

  return (
    <button {...rest} onClick={props.onClick} className={`${props.className} p-2 rounded-full bg-blue-400 w-14 h-14 flex items-center justify-center cursor-pointer hover:bg-blue-500 active:bg-blue-400`} >
      <FontAwesomeIcon icon={faPlus} className="text-white text-xl" />
    </button>
  );
}

export default TodoAddButton;