import React from "react";
import ThreeDotLoader from "../ThreeDotLoader/ThreeDotLoader";
import classes from "./Button.module.css";
const Button = (props) => {
  const {
    btnProps,
    title,
    onClick,
    color = '',
    isDisabled = false,
    isLoading = false,
    size
  } = props;
  return (
    <button
      {...btnProps}
      disabled={isDisabled}
      className={`${classes.btn} ${classes[color]} ${classes[size]}`}
      onClick={onClick}
    >
      {isLoading ? <ThreeDotLoader /> : title}
    </button>
  );
};

export default Button;
