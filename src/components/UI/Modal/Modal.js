import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const ModalOverlay = ({ onOverlayClick }) => {
  return <div onClick={onOverlayClick} className={classes.backdrop}></div>;
};
const ModalContainer = ({ children, title, height, width, onClose }) => (
  <div
    className={classes.modal}
    style={{
      height,
      width,
    }}
  >
    <div className={classes["modal-header"]}>
      <h2 className={classes['modal-title']}>{title || ''}</h2>
      <button onClick={onClose} className={classes['close-btn']}>&times;</button>
    </div>
    
    {children}
  </div>
);
const Modal = (props) => {
  const DomContainer = document.getElementById("modal-container");
  const { children, title, height, width, onCloseModal } = props;
  
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay onOverlayClick={onCloseModal} />,
        DomContainer
      )}
      {ReactDOM.createPortal(
        <ModalContainer onClose={onCloseModal} title={title} height={height} width={width}>
          {children}
        </ModalContainer>,
        DomContainer
      )}
    </>
  );
};

export default Modal;
