import React from "react";

const Input = props => {
  return (
    <div className="form-group">
      <label
        htmlFor={props.name}
        className={`form-label ${props.isRequired ? "required" : ""} `}
      >
        {props.title}
      </label>
      {props.clearInput && (
        <span
          className="main_tegs_close -input"
          onClick={props.clearInput ? () => props.clearInput() : () => {}}
          title="Очистить"
        />
      )}
      <input
        className="form-input"
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={e => props.onChange(e)}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
