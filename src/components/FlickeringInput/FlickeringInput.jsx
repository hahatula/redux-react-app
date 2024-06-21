import { useState, useEffect } from 'react';
import './FlickeringInput.css';

function FlickeringInput({ placeholder, onChange }) {
  const [isActive, setIsActive] = useState(false);

  const handleChange = (event) => {
    setIsActive(true);
    onChange(event);
  };

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setIsActive(false);
      }, 100); // Deactivate the class after timeout
    }
  }, [isActive]);

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
      className={`text-input__input-field framed${isActive ? '-active' : ''}`}
    />
  );
}

export default FlickeringInput;
