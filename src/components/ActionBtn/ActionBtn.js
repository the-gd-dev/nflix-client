import React from "react";
import "./ActionBtn.css";
const ActionBtn = ({
  title,
  icon,
  onClickHandler,
  btnClass,
  btnContainerClass,
}) => {
  return (
    <button className={'action-btn ' + btnClass} onClick={onClickHandler}>
      {icon || ""}
      <div className="title">{title}</div>
    </button>
  );
};

export default ActionBtn;
