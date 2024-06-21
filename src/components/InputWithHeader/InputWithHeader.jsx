import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputValue } from '../../redux/actions';
import { getUserIsTyping } from '../../redux/selectors';
import FlickeringInput from '../FlickeringInput/FlickeringInput';
import './InputWithHeader.css';

function InputWithHeader() {
  const dispatch = useDispatch();
  const stateValue = useSelector(getUserIsTyping);

  const onChange = (event) => {
    const text = event.target.value;
    dispatch(inputValue(text));
  };

  return (
    <div className="text-input">
      <h1 className="text-input__header">{stateValue}</h1>
      <FlickeringInput placeholder="Please input header value" onChange={onChange} />
    </div>
  );
}

export default InputWithHeader;
