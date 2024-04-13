import { useDispatch, useSelector } from "react-redux";
import { inputValue } from "../../redux/actions";

function InputWithHeader() {
  const dispatch = useDispatch();
  const stateValue = useSelector((state) => state.userTypes);

  const onKeyDown = (event) => {
    console.log("keydown");
    const text = event.target.value;
    dispatch(inputValue(text));
  };

  return (
    <div>
      Hello input
      <input type="text" placeholder="Please input header value" onKeyDown={onKeyDown}/>
    </div>
  );
}

export default InputWithHeader;
