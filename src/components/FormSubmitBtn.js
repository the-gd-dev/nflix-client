import React from "react";
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
const FormSubmitBtn = ({title, onClickHandler }) => {
  return (
    <button style={btnStyle} onClick={onClickHandler}>
      {title}
    </button>
  );
};

export default FormSubmitBtn;
