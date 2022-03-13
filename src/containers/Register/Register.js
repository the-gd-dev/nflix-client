import React, { useState } from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import "./Register.css";
import bgBanner from "../../assets/images/home-banner.jpg";
import { useDispatch } from "react-redux";
import { login } from "../../store/user/actions";
import { useHistory } from "react-router-dom";
import FormSubmitBtn from "../../components/FormSubmitBtn";
import FormInput from "../../components/FormInput/FormInput";
const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const loginUser = () => {
    // dispatch(login(credentials));
    history.push("/home");
  };

  return (
    <AppLayout bg={bgBanner} overlay={true}>
      <div className="login-container">
        <div className="login__wrapper">
          <div className="login__header">
            <h1>Register</h1>
          </div>
          {/* Registeration Form */}
          <FormInput
            label={"Name"}
            val={name}
            onChangeHandler={(value) => setName(value)}
          />
          <FormInput
            label={"Email Address"}
            val={email}
            onChangeHandler={(value) => setEmail(value)}
          />
          <FormInput
            label={"Phone Number"}
            val={phoneNumber}
            onChangeHandler={(value) => setPhoneNumber(value)}
          />
          <FormInput
            label={"Password"}
            val={password}
            onChangeHandler={(value) => setPassword(value)}
          />
          <FormInput
            label={"Confirm Password"}
            val={confirmPassword}
            onChangeHandler={(value) => setConfirmPassword(value)}
          />
          <FormSubmitBtn title="Register" />
          {/* Registeration Form */}

          <div className="register-nw-login-nw-txt">
            Already on Netflix ?<a href="/"> Sign In</a>.
            <div className="user__help">
              <a href="/">Need help?</a>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Register;
