import React from "react";

const Button = props => {
  return (
    <button
      onClick={(event) => props.onClick(event)}
      className={`${props.className ? props.className : ""}`}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
};

export default Button;
