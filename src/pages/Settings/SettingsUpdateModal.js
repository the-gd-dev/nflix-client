import React, { useState } from "react";
import BtnGroup from "../../components/UI/BtnGroup/BtnGroup";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import classes from "./SettingsUpdateModal.module.css";
import FormInput from "../../components/UI/FormInput/FormInput";
import userDataRules from "../../rules/userDataRules";
const SettingsUpdateModal = (props) => {
  const [errors, setErros] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
    confirm_password: "",
    old_password: "",
  });
  const updateErrors = (err, key) => {
    let updatedErrors = { ...errors };
    if (err) {
      updatedErrors[key] = err;
    } else {
      if (updatedErrors[key]) {
        delete updatedErrors[key];
      }
    }
    setErros(updatedErrors);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Modal {...props}>
      <div className={classes["settings-container"]}>
        <form onSubmit={onSubmitHandler}>
          {props.updateType === "email" && (
            <FormInput
              label={"Email address"}
              val={formData.email}
              onChangeHandler={(value) => {
                updateErrors(userDataRules.validateEmail(value), "email");
                setFormData((prevValue) => ({ ...prevValue, email: value }));
              }}
              error={errors.email}
            />
          )}
          {props.updateType === "phone" && (
            <FormInput
              label={"Phone Number"}
              val={formData.phone}
              onChangeHandler={(value) => {
                updateErrors(userDataRules.validatePhoneNumber(value), "phone");
                setFormData((prevValue) => ({ ...prevValue, phone: value }));
              }}
              error={errors.phone}
            />
          )}
          {props.updateType === "password" && (
            <>
              <FormInput
                label={"Old Password"}
                val={formData.old_password}
                onChangeHandler={(value) => {
                  updateErrors(userDataRules.validatePassword(value), "old_password");
                  setFormData((prevValue) => ({ ...prevValue, old_password: value }));
                }}
                error={errors.old_password}
              />
              <FormInput
                label={"New Password"}
                val={formData.password}
                onChangeHandler={(value) => {
                  updateErrors(userDataRules.validatePassword(value), "password");
                  setFormData((prevValue) => ({ ...prevValue, password: value }));
                }}
                error={errors.password}
              />
              <FormInput
                label={"Confirm New Password"}
                val={formData.confirm_password}
                onChangeHandler={(value) => {
                  updateErrors(
                    userDataRules.validateConfirmPassword(formData.password, formData.confirm_password),
                    "confirm_password"
                  );
                  setFormData((prevValue) => ({ ...prevValue, confirm_password: value }));
                }}
                error={errors.confirm_password}
              />
            </>
          )}
          <div className={classes["settings-modal-footer"]}>
            <BtnGroup justifyContent="flex-end" maxWidth={285}>
              <Button color="" size="lg" title="Discard" onClick={props.onCloseModal} />
              <Button color="netflix-red" title="Update Details" size="lg" />
            </BtnGroup>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SettingsUpdateModal;
