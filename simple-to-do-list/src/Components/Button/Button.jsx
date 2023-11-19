import React from "react";

const Button = ({ label, onClick, type = "button" }) => {
  return (
    <div>
      <button type={type} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
