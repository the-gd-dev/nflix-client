import React from "react";
import classes from "./BtnGroup.module.css";
const BtnGroup = (props) => (
  <div
    className={classes["btn-group"]}
    style={{
      justifyContent: props.justifyContent,
      maxWidth: props.maxWidth || 300,
    }}
  >
    {props.children}
  </div>
);

export default BtnGroup;
