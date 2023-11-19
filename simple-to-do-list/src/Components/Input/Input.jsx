import React from "react";

const Input = ({ onInput, type, placeholder, value, onSubmit }) => {
  const handleKeyClick = (e) => {
    if (e.key == "Enter") {
      onSubmit();
    }
  };

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onInput}
        value={value}
        // onKeyDown={handleKeyClick}
      ></input>
    </div>
  );
};

export default Input;
