import React, { useState } from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import "./Register.css";
import bgBanner from "../../assets/images/home-banner.jpg";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import FormInput from "../../components/UI/FormInput/FormInput";
import signupRules from "./signupRules";
import axios from "../../utils/axios";
import { API_REGISTER_USER } from "../../api/auth";
import ErrorModal from "../../components/UI/ErrorModal/ErrorModal";
import VerifyUser from "../../components/VerifyUser/VerifyUser";
import updateErrors from "../../helpers/updateErrors";
import AuthFormContainer from "../../components/UI/AuthFormContainer/AuthFormContainer";
const Register = () => {
  window.document.title = "Netflix Clone - Register";
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErros] = useState({});
  const [disableBtn, setDisableBtn] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [verifyUserShow, setVerifyUserShow] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState("");
  const [registeredUser, setRegisteredUser] = useState({});
  const onSubmitHandler = async () => {
    //inputs empty
    if (!name || !email || !phoneNumber || !password) {
      setErrorModal(true);
      setServerErrorMessage("Please fill all fields.");
      return false;
    }
    //errors present
    if (errors.name || errors.email || errors.phoneNumber || errors.password) {
      setErrorModal(true);
      setServerErrorMessage("Please resolve errors.");
      return false;
    }
    setIsSubmit(true);
    setDisableBtn(true);
    try {
      const response = await axios.post(API_REGISTER_USER, {
        name,
        email,
        phoneNumber,
        password,
      });
      setRegisteredUser(response.data.user);
      setVerifyUserShow(true);
    } catch (error) {
      let { data } = error?.response || "";
      setErrorModal(true);
      setServerErrorMessage(data.code + " : " + data.message);
    }
    setIsSubmit(false);
    setDisableBtn(false);
  };
  const topErrorStyle = {
    marginTop: "15px",
    color: "#ccc",
    fontSize: 18,
    fontWeight: "normal",
  };
  return (
    <AppLayout bg={bgBanner} overlay={true}>
      {verifyUserShow && (
        <VerifyUser
          onCloseModal={() => setVerifyUserShow(false)}
          user={registeredUser}
        />
      )}
      <AuthFormContainer
        isLoading={isSubmit}
        serverErrorMessage={serverErrorMessage}
        errorModal={errorModal}
        errorModalClose={() => setErrorModal(false)}
        formHeaderTitle={"Register"}
        submitBtn={{
          title: "Register",
          onSubmit: onSubmitHandler,
          disableBtn: disableBtn,
        }}
        footerLink="/"
        leftFooterText=" Already on Netflix ? "
        rightFooterText=""
      >
        <FormInput
          type={"text"}
          label={"Name"}
          val={name}
          error={errors.name}
          onChangeHandler={(value) => {
            setErros(
              updateErrors(errors, signupRules.validateName(value), "name")
            );
            setName(value);
          }}
        />
        <FormInput
          type="email"
          label={"Email Address"}
          val={email}
          onChangeHandler={(value) => {
            setErros(
              updateErrors(errors, signupRules.validateEmail(value), "email")
            );
            setEmail(value);
          }}
          error={errors.email}
        />
        <FormInput
          label={"Phone Number"}
          type={"number"}
          className={"hide-arrows"}
          val={phoneNumber.substring(0, 10)}
          onChangeHandler={(value) => {
            setErros(
              updateErrors(
                errors,
                signupRules.validatePhoneNumber(value),
                "phoneNumber"
              )
            );
            setPhoneNumber(value);
          }}
          error={errors.phoneNumber}
        />
        <FormInput
          type="password"
          label={"Password"}
          val={password}
          onChangeHandler={(value) => {
            setErros(
              updateErrors(
                errors,
                signupRules.validatePassword(value),
                "Password"
              )
            );
            setPassword(value);
          }}
          error={errors.password}
        />

        <FormInput
          type="password"
          label={"Confirm Password"}
          val={confirmPassword}
          onChangeHandler={(value) => {
            setErros(
              updateErrors(
                errors,
                signupRules.validatePassword(value, password)
              )
            );
            setConfirmPassword(value);
          }}
        />
      </AuthFormContainer>
    </AppLayout>
  );
};

export default Register;
