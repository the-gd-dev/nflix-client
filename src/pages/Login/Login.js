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
const Login = () => {
  window.document.title = "Netflix Clone - Login";
  const history = useHistory();
  const dispatch = useDispatch();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErros] = useState({});
  const [disableBtn, setDisableBtn] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  //add remove errors
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

  //login
  const onSubmit = async () => {
    //inputs empty
    if (!username || !password) return window.alert("Data is missing.");
    //errors present
    if (errors.username || errors.password) {
      return alert("Please resolve errors.");
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
      console.error(error);
      let { data } = error?.response || "";

      updateErrors(data.message, "username");

      const updateError = setTimeout(() => {
        updateErrors("", "username");
        setTimeout(updateError);
      }, 1500);

      setIsSubmit(false);
      setDisableBtn(false);
    }
  };
  //rendering
  return (
    <AppLayout bg={bgBanner} overlay={true}>
      <div className="login-container">
        <div className="login__wrapper">
          <div className="login__header">
            <h1>Sign In</h1>
          </div>
          <FormInput
            label={"Email address"}
            val={username}
            onChangeHandler={(value) => {
              updateErrors(loginRules.validateEmail(value), "username");
              setUsername(value);
            }}
            error={errors.username}
          />
          <FormInput
            type="password"
            label={"Password"}
            val={password}
            onChangeHandler={(value) => {
              updateErrors(loginRules.validatePassword(value), "password");
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
