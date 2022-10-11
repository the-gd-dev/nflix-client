import React from "react";
import { AlertIcon } from "../../Icons/AlertIcon";
import classes from "./Alert.module.css";
const Alert = (props) => {
  return (
    <div className={classes.alert}>
      <div className={classes["alert-icon"]}>
        <AlertIcon />
      </div>
      <div className={classes["alert-message"]}>{props.alertMessage}</div>
    </div>
  );
};

export default Alert;
