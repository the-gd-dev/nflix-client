import React, { useEffect } from "react";
import { useState } from "react";
import classes from "./ManageForm.module.css";
const ManageForm = ({ updateValue, nameValue, externalError }) => {
  const [prevValue, setPrevValue] = useState("");
  useEffect(() => {
    setPrevValue(nameValue);
  }, []);

  return (
    <div className={classes["form-group"]}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        className={prevValue !== nameValue ? classes["is-invalid"] : ""}
        value={nameValue}
        onInput={(e) => updateValue(e.target.value)}
      />
      {prevValue !== nameValue && !externalError && (
        <label className={classes["is-invalid"]}>Name is required.</label>
      )}
      {externalError && <label className={classes["is-invalid"]}>{externalError}</label>}
    </div>
  );
};

export default ManageForm;
