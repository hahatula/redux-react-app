import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseValue, decreaseValue } from "../../redux/actions";

function IncreaseDecrease() {
  //const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const stateValue = useSelector((state) => state);

  const onClick = () => {
    console.log("stop");
    //dispatch(increaseValue());
    //setCount((count) => count + 1)
  };

  return (
    <div className="card">
      <button onClick={onClick}>+</button>
      <div>count is {stateValue}</div>
      <button onClick={onClick}>-</button>
    </div>
  );
}

export default IncreaseDecrease;
