import { useDispatch, useSelector } from "react-redux";
import { increaseValue, decreaseValue } from "../../redux/actions";

function IncreaseDecrease() {
  const dispatch = useDispatch();
  const stateValue = useSelector((state) => state.increaseDecrease);

  const onClickAdd = () => {
    console.log("add");
    dispatch(increaseValue());
  };

  const onClickSubtract = () => {
    console.log("subtract");
    dispatch(decreaseValue());
  };

  return (
    <div className="card">
      <button onClick={onClickAdd}>+</button>
      <div>count is {stateValue}</div>
      <button onClick={onClickSubtract}>-</button>
    </div>
  );
}

export default IncreaseDecrease;
