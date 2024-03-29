import React, { useState } from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import bgBanner from "../../assets/images/home-banner.jpg";
import Button from "../../components/UI/Button/Button";
import FormInput from "../../components/UI/FormInput/FormInput";
import loginRules from "./loginRules";
import axios from "../../utils/axios";

import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveAuthToken, saveAuthUser } from "../../store/auth/actions";
import { API_LOGIN_USER } from "../../api/auth";
import Modal from "../../components/UI/Modal/Modal";
import ErrorModal from "../../components/UI/ErrorModal/ErrorModal";
import updateErrors from "../../helpers/updateErrors";
import AuthFormContainer from "../../components/UI/AuthFormContainer/AuthFormContainer";
const Login = () => {
  window.document.title = "Netflix Clone - Login";
  const history = useHistory();
  const dispatch = useDispatch();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErros] = useState({});
  const [disableBtn, setDisableBtn] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState("");

  //login
  const onSubmitHandler = async () => {
    //inputs empty
    if (!username || !password) {
      setErrorModal(true);
      setServerErrorMessage("User credentials required.");
      return false;
    }
    //errors present
    if (errors.username || errors.password) {
      setErrorModal(true);
      setServerErrorMessage("Please resolve errors.");
      return false;
    }
    setIsSubmit(true);
    setDisableBtn(true);
    try {
      const { data } = await axios.post(API_LOGIN_USER, {
        username,
        password,
      });
      dispatch(saveAuthToken(data.token));
      dispatch(saveAuthUser(data.user));
      history.push("/browse");
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
        formHeaderTitle={"Sign In"}
        submitBtn={{
          title: "Login",
          onSubmit: onSubmitHandler,
          disableBtn: disableBtn,
        }}
        footerLink="/register"
        leftFooterText=" Not on Netflix ? "
        linkTitle='Sign Up'
        rightFooterText=" today."
      >
        <FormInput
          label={"Email address"}
          val={username}
          onChangeHandler={(value) => {
            setErros(
              updateErrors(errors, loginRules.validateEmail(value), "username")
            );
            setUsername(value);
          }}
          error={errors.username}
        />
        <FormInput
          type="password"
          label={"Password"}
          val={password}
          onChangeHandler={(value) => {
            setErros(
              updateErrors(
                errors,
                loginRules.validatePassword(value),
                "password"
              )
            );
            setPassword(value);
          }}
          error={errors.password}
        />
      </AuthFormContainer>
    </AppLayout>
  );
};

export default Login;
