import React, { useState, useEffect } from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import bgBanner from "../../assets/images/home-banner.jpg";
import FormSubmitBtn from "../../components/FormSubmitBtn";
import FormInput from "../../components/FormInput/FormInput";
import loginRules from "./loginRules";
import axios from "../../axios";

import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveAuthToken, saveAuthUser } from "../../store/auth/actions";
import { API_LOGIN_USER } from "../../api/auth";
const Login = () => {
  const history = useHistory();
  let user = useSelector((state) => state.auth.user);
  if (user) {
    history.push("/browse");
  }
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErros] = useState({});
  const [disableBtn, setDisableBtn] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();

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

  //validations
  useEffect(
    () => updateErrors(loginRules.validateEmail(username), "username"),
    [username]
  );
  useEffect(
    () => updateErrors(loginRules.validatePassword(password), "password"),
    [password]
  );

  //login
  const login = async () => {
    //inputs empty
    if (!username || !password) return alert("Data is missing.");
    //errors present
    if (errors.username || errors.password)
      return alert("Please resolve errors.");
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
      let { data } = error.response;
      updateErrors(data.message, "username");
      console.log(error.response);
    }

    setIsSubmit(false);
    setDisableBtn(false);
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
            onChangeHandler={(value) => setUsername(value)}
            error={errors.username}
          />
          <FormInput
            type="password"
            label={"Password"}
            val={password}
            onChangeHandler={(value) => setPassword(value)}
            error={errors.password}
          />
          <FormSubmitBtn
            title="Login"
            onClickHandler={login}
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
