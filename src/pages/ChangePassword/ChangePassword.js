import React, { useState } from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import bgBanner from "../../assets/images/home-banner.jpg";
import Button from "../../components/UI/Button/Button";
import FormInput from "../../components/UI/FormInput/FormInput";

import axios from "../../utils/axios";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveAuthToken, saveAuthUser } from "../../store/auth/actions";
import { API_LOGIN_USER } from "../../api/auth";
import Modal from "../../components/UI/Modal/Modal";
import ErrorModal from "../../components/UI/ErrorModal/ErrorModal";
import updateErrors from "../../helpers/updateErrors";
import passwordRules from "./passwordRules";
import AuthFormContainer from "../../components/UI/AuthFormContainer/AuthFormContainer";
const ChangePassword = () => {
  window.document.title = "Netflix Clone - Login";
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    password: "",
    new_password: "",
    confirm_password: "",
  });
  const [errors, setErros] = useState({});
  const [disableBtn, setDisableBtn] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState("");

  //login
  const onSubmitHandler = async () => {
    // setIsSubmit(true);
    // setDisableBtn(true);
    try {
      //   const { data } = await axios.post(API_LOGIN_USER, formData);
    } catch (error) {
      let { data } = error?.response || "";
      setErrorModal(true);
      setServerErrorMessage(data.status + " : " + data.message);
      setIsSubmit(false);
      setDisableBtn(false);
    }
  };
  //rendering
  return (
    <AppLayout bg={bgBanner} overlay={true}>
      <AuthFormContainer 
        isLoading={isSubmit}
        serverErrorMessage={serverErrorMessage}
        errorModal={errorModal}
        errorModalClose={() => setErrorModal(false)}
        formHeaderTitle={'Change Password'}
        submitBtn={{
            title : 'Update Password',
            onSubmit : onSubmitHandler,
            disableBtn : disableBtn
        }}
        footerLink='/login'
        leftFooterText='I changed my mind want to '
        linkTitle={'Login'}
        rightFooterText=' now.'
      >
        <FormInput
          type="password"
          label={"Password"}
          val={formData.password}
          onChangeHandler={(value) => {
            setErros(
              updateErrors(
                errors,
                passwordRules.validatePassword(value),
                "password"
              )
            );
            setFormData((prevValue) => ({ ...formData, password: value }));
          }}
          error={errors.password}
        />
        <FormInput
          type="password"
          label={"New Password"}
          val={formData.new_password}
          onChangeHandler={(value) => {
            setErros(
              updateErrors(
                errors,
                passwordRules.validatePassword(value),
                "new_password"
              )
            );
            setFormData((prevValue) => ({ ...formData, new_password: value }));
          }}
          error={errors.new_password}
        />
        <FormInput
          type="password"
          label={"Confirm Password"}
          val={formData.confirm_password}
          onChangeHandler={(value) => {
            setErros(
              updateErrors(
                errors,
                passwordRules.validateConfirmPassword(
                  formData.new_password,
                  value
                ),
                "confirm_password"
              )
            );
            setFormData((prevValue) => ({
              ...formData,
              confirm_password: value,
            }));
          }}
          error={errors.confirm_password}
        />
      </AuthFormContainer>
    </AppLayout>
  );
};

export default ChangePassword;
