import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputValue } from "../../redux/actions";
import { getUserIsTyping } from "../../redux/selectors";
import "./InputWithHeader.css";

function InputWithHeader() {
  const dispatch = useDispatch();
  const stateValue = useSelector(getUserIsTyping);
  const [isActive, setIsActive] = useState(false);

  const onChange = (event) => {
    const text = event.target.value;
    dispatch(inputValue(text));
    setIsActive(true);
  };

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setIsActive(false); 
      }, 100); // Deactivate the class after timeout
    }
  }, [isActive]);

  return (
    <div className="text-input">
      <h1 className="text-input__header">{stateValue}</h1>
      <input
        type="text"
        placeholder="Please input header value"
        onChange={onChange}
        className={`text-input__input-field framed${isActive ? "-active" : ""}`}
      />
    </div>
  );
}

export default InputWithHeader;
