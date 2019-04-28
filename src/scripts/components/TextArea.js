import React from "react";

const TextArea = props => (
  <div className="form-group">
    <label className="form-label">{props.title}</label>
    {props.delDescriptionTabs && (
      <span
        className="main_tegs_close"
        onClick={() => props.delDescriptionTabs()}
        title="Очистить"
      />
    )}
    <textarea
      className="form-control"
      name={props.name}
      rows={props.rows}
      cols={props.cols}
      value={props.value}
      onChange={event => props.handleChange(event)}
      placeholder={props.placeholder}
    />
  </div>
);

export default TextArea;
