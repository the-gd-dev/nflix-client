import React from "react";
import "./FormInput.css";
const FormInput = ({ label, val, onChangeHandler, error, type = "text" }) => {
  return (
    <div>
      <div className={`field__wrap`}>
        <input
          type={type}
          id={label.replace(" ", "_").toLowerCase()}
          className={val ? "valid_field" : ""}
          onChange={(e) => onChangeHandler(e.target.value.trim())}
        />
        {label ? (
          <label htmlFor={label.replace(" ", "_").toLowerCase()}>{label}</label>
        ) : null}
      </div>
      {error ? <label className="is-error">{error}</label> : null}
    </div>
  );
};

export default FormInput;
