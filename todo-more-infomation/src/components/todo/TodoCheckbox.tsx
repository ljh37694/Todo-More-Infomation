import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  type: string;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  [key:string]: any;
}

function TodoCheckbox(props: Props) {
  const { type, checked, setChecked,...rest } = props;

  const buttonTypes = {
    seccess: {
      backgroundColor: "bg-success-500",
      borderColor: "border-success-500",
    },
  };

  return (
    <label className="cursor-pointer select-none" {...rest}>
      <input type="checkbox" className="hidden peer" onChange={() => setChecked(!checked)} />
      <div className="w-5 h-5 flex items-center justify-center border border-gray-300 rounded-full transition-colors duration-200 peer-checked:bg-green-500 peer-checked:border-green-500">
        <FontAwesomeIcon
          icon={faCheck}
          className="text-white text-xs peer-checked:opacity-100 duration-200"
        />
      </div>
    </label>
  );
}

export default TodoCheckbox;
