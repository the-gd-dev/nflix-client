import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeAuthUser, removeToken } from "../../../store/auth/actions";
import Modal from "../../UI/Modal/Modal";
import classes from "./LogoutModal.module.css";
import Button from "../../UI/Button/Button";
import BtnGroup from "../../UI/BtnGroup/BtnGroup";
const LogoutModal = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(removeToken());
    dispatch(removeAuthUser());
    history.push("/");
  };
  return (
    props.modalShow && (
      <Modal title="Log Out" onCloseModal={props.onHide}>
        <div className={classes.modalContent}>
          <h1>Leaving So Soon.</h1>
          <p className="text-lg">
            Browse a little you'll surely find best shows.
          </p>
        </div>
        <div className={classes.modalFooter}>
          <BtnGroup>
            <Button
              color="netflix-red"
              title="Logout"
              size="lg"
              onClick={onLogout}
            />
            <Button color="" size="lg" title="Discard" onClick={props.onHide} />
          </BtnGroup>
        </div>
      </Modal>
    )
  );
};

export default LogoutModal;
