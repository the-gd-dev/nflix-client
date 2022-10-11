import React from "react";
import classes from "./ManageForm.module.css";
const ManageForm = ({ updateValue, nameValue }) => {
  return (
    <div className={classes["form-group"]}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        className={nameValue != null && !nameValue ? classes["is-invalid"] : ""}
        value={nameValue}
        onInput={(e) => updateValue(e.target.value)}
      />
      {nameValue != null && !nameValue ? (
        <label className={classes["is-invalid"]}>Name is required.</label>
      ) : null}
    </div>
  );
};

export default ManageForm;
