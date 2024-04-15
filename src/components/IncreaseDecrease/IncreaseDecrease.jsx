import { useDispatch, useSelector } from "react-redux";
import { increaseValue, decreaseValue } from "../../redux/actions";
import { getIncreaseDecrease } from "../../redux/selectors";
import "./IncreaseDecrease.css"

function IncreaseDecrease() {
  const dispatch = useDispatch();
  const stateValue = useSelector(getIncreaseDecrease);

  const onClickAdd = () => {
    console.log("add");
    dispatch(increaseValue());
  };

  const onClickSubtract = () => {
    console.log("subtract");
    dispatch(decreaseValue());
  };

  return (
    <div className="counter">
      <button onClick={onClickAdd} className="counter__button framed">+</button>
      <div className="counter__value">count is {stateValue}</div>
      <button onClick={onClickSubtract} className="counter__button framed">-</button>
    </div>
  );
}

export default IncreaseDecrease;
