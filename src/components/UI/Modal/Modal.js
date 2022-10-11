import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const ModalOverlay = ({ onOverlayClick }) => {
  return <div onClick={onOverlayClick} className={classes["modal-overlay"]}></div>;
};
const ModalContainer = ({ children }) => <div className={classes.modal}>{children}</div>;
const Modal = (props) => {
  const DomContainer = document.getElementById("modal-container");
  return (
    <>
      {ReactDOM.createPortal(<ModalOverlay onOverlayClick={props.overlayClick} />, DomContainer)}{" "}
      {ReactDOM.createPortal(<ModalContainer>{props.children}</ModalContainer>, DomContainer)}
    </>
  );
};

export default Modal;
