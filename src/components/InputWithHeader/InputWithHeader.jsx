import { useDispatch, useSelector } from "react-redux";
import { inputValue } from "../../redux/actions";
import "./InputWithHeader.css";

function InputWithHeader() {
  const dispatch = useDispatch();
  const stateValue = useSelector((state) => state.userTypes);

  const onChange = (event) => {
    const text = event.target.value;
    dispatch(inputValue(text));
  };

  return (
    <div className="text-input">
      <h1 className="text-input__header">{stateValue}</h1>
      <input
        type="text"
        placeholder="Please input header value"
        onChange={onChange}
        className="text-input__input-field framed"
      />
    </div>
  );
}

export default InputWithHeader;
