import React, { useState } from "react";
import updateErrors from "../../helpers/updateErrors";
import userDataRules from "../../rules/userDataRules";
import BtnGroup from "../UI/BtnGroup/BtnGroup";
import Button from "../UI/Button/Button";
import FormInput from "../UI/FormInput/FormInput";
import Modal from "../UI/Modal/Modal";
import classes from "./VerifyUser.module.css";
const VerifyUser = (props) => {
  const [code, setCode] = useState("");
  const [errors, setErrors] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('submitting for verification',code, props.user);
  };
  return (
    <Modal title="Verify Email Address" width={450} onCloseModal={props.onCloseModal}>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          type="number"
          className="hide-arrows"
          label={"Verification Code"}
          val={code.substring(0, 6)}
          onChangeHandler={(value) => {
            if (value.length <= 6) {
              setCode(value);
              setErrors(updateErrors(errors, userDataRules.validateCode(value), "code"));
            }
          }}
          error={errors.code}
        />

        <div className={classes["modal-footer"]}>
          <BtnGroup justifyContent="flex-end" maxWidth={180}>
            <Button btnProps={{type : 'button'}} color="" size="lg" title="Discard" onClick={props.onCloseModal} />
            <Button isDisabled={userDataRules.validateCode(code)} color="netflix-red" title="Verify" size="lg" />
          </BtnGroup>
        </div>
      </form>
    </Modal>
  );
};

export default VerifyUser;
