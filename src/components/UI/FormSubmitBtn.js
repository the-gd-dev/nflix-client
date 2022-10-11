import React from "react";
import ThreeDotLoader from "./ThreeDotLoader/ThreeDotLoader";
const btnStyle = {
  backgroundColor: "#e50914",
  outline: 0,
  border: 0,
  borderRadius: 8,
  width: "100%",
  marginTop: 20,
  cursor: "pointer",
  height: 50,
  textAlign: "center",
  fontSize: 18,
  color: "#fff",
};
const FormSubmitBtn = ({
  title,
  onClickHandler,
  isDisabled = false,
  isLoading = false,
}) => {
  return (
    <button disabled={isDisabled} style={btnStyle} onClick={onClickHandler}>
      {isLoading ? <ThreeDotLoader /> : <div>{title}</div>}
    </button>
  );
};

export default FormSubmitBtn;
