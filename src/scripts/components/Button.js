import React from "react";

const Button = props => {
  return (
    <button
      onClick={(event) => props.onClick(event)}
      className={`${props.className ? props.className : ""} ${props.disabled ? "disabled" :""}`}
    >
      {props.label}
    </button>
  );
};

export default Button;
