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
  const onSubmit = async () => {
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
      {errorModal && (
        <ErrorModal
          errorMessage={serverErrorMessage}
          onErrorModalClose={() => setErrorModal(false)}
        />
      )}
      <div className="login-container">
        <div className="login__wrapper">
          <div className="login__header">
            <h1>Sign In</h1>
          </div>
          <FormInput
            label={"Email address"}
            val={username}
            onChangeHandler={(value) => {
              setErros(updateErrors(errors, loginRules.validateEmail(value), "username"));
              setUsername(value);
            }}
            error={errors.username}
          />
          <FormInput
            type="password"
            label={"Password"}
            val={password}
            onChangeHandler={(value) => {
              setErros(updateErrors(errors, loginRules.validatePassword(value), "password"));
              setPassword(value);
            }}
            error={errors.password}
          />
          <Button
            title="Login"
            size="xl"
            color="netflix-red"
            onClick={onSubmit}
            isDisabled={disableBtn}
            isLoading={isSubmit}
          />
          <div className="register-nw-login-nw-txt">
            Not on Netflix ? <Link to="/register">Sign Up Now</Link>.
            <div className="user__help">
              <a href="/">Need help?</a>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Login;
