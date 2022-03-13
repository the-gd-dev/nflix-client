import React, { useState } from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import "./Login.css";
import bgBanner from "../../assets/images/home-banner.jpg";
import FormSubmitBtn from "../../components/FormSubmitBtn";
import FormInput from "../../components/FormInput/FormInput";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AppLayout bg={bgBanner} overlay={true}>
      <div className="login-container">
        <div className="login__wrapper">
          <div className="login__header">
            <h1>Sign In</h1>
          </div>
          <FormInput
            label={"Name"}
            val={username}
            onChangeHandler={(value) => setUsername(value)}
          />
          <FormInput
            label={"Email Address"}
            val={password}
            onChangeHandler={(value) => setPassword(value)}
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
