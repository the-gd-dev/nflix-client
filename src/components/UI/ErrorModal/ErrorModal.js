import React from "react";
import BtnGroup from "../BtnGroup/BtnGroup";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import classes from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  return (
    <Modal title="Error !!!" transitionType="zoom-in" onCloseModal={props.onErrorModalClose} width={475}>
      <div className={classes.modalContent}>
        <h3>{props.errorMessage}</h3>
      </div>
      <div className={classes.modalFooter}>
        <BtnGroup maxWidth={100}>
          <Button color="netflix-red" size="lg" title="OK" onClick={props.onErrorModalClose} />
        </BtnGroup>
      </div>
    </Modal>
  );
};

ErrorModal.propTypes = {};

export default ErrorModal;
