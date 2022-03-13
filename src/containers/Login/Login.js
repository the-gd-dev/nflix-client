import React, { useState, useEffect } from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import bgBanner from "../../assets/images/home-banner.jpg";
import FormSubmitBtn from "../../components/FormSubmitBtn";
import FormInput from "../../components/FormInput/FormInput";
import loginRules from "./loginRules";

import "./Login.css";
const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErros] = useState({});
 
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
  useEffect(() => updateErrors(loginRules.validateEmail(username), 'username'), [username]);
  useEffect(() => updateErrors(loginRules.validatePassword(password), "password"), [password]);

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
            label={"Password"}
            val={password}
            onChangeHandler={(value) => setPassword(value)}
            error={errors.password}
          />
          <FormSubmitBtn title="Login" />
          <div className="register-nw-login-nw-txt">
            Not on Netflix ?<a href="/register"> Sign Up Now</a>.
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
