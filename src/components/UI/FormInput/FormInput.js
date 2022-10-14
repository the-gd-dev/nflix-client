import React from "react";
import "./FormInput.css";
const FormInput = (props) => {
  const { label, val, onChangeHandler, error, type = "text" } = props;
  return (
    <div>
      <div className={`field__wrap ${!!val ? "valid_field_wrap" : ""}`}>
        <input
          type={type}
          value={val || ''}
          id={label.replace(" ", "_").toLowerCase()}
          className={`${props.className || ""} ${!!val ? "valid_field" : ""}`}
          onChange={(e) => onChangeHandler(e.target.value.trimStart())}
        />
        {label ? <label htmlFor={label.replace(" ", "_").toLowerCase()}>{label}</label> : null}
      </div>
      {error ? <label className="is-error">{error}</label> : null}
    </div>
  );
};

export default FormInput;
