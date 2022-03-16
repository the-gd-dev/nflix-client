import React, { useEffect, useState } from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import "./Register.css";
import bgBanner from "../../assets/images/home-banner.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import FormSubmitBtn from "../../components/FormSubmitBtn";
import FormInput from "../../components/FormInput/FormInput";
import signupRules from "./signupRules";
import axios from "../../axios";
import { API_REGISTER_USER } from "../../api/auth";
const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [errors, setErros] = useState({});
  const [disableBtn, setDisableBtn] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  let user = useSelector((state) => state.auth.user);
  if (user) {
    history.push("/home");
  }
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
    setErros((prevErr) => updatedErrors);
  };

  //validations
  useEffect(() => updateErrors(signupRules.validateName(name), "name"), [name]);
  useEffect(
    () => updateErrors(signupRules.validateEmail(email), "email"),
    [email]
  );
  useEffect(
    () =>
      updateErrors(signupRules.validatePhoneNumber(phoneNumber), "phoneNumber"),
    [phoneNumber]
  );
  useEffect(
    () =>
      updateErrors(
        signupRules.validatePassword(password, confirmPassword),
        "password"
      ),
    [password, confirmPassword]
  );

  const register = async () => {
    //inputs empty
    if (!name || !email || !phoneNumber || !password)
      return alert("Data is missing.");
    //errors present
    if (errors.name || errors.email || errors.phoneNumber || errors.password)
      return alert("Please resolve errors.");

    setIsSubmit(true);
    setDisableBtn(true);
    try {
      const response = await axios.post(API_REGISTER_USER, {
        name,
        email,
        phoneNumber,
        password,
      });
      dispatch(saveAuthToken(data.token));
      dispatch(saveAuthUser(data.user));
      history.push("/browse");
    } catch (error) {
      console.log(error);
    }
    setIsSubmit(false);
    setDisableBtn(false);
  };

  return (
    <AppLayout bg={bgBanner} overlay={true}>
      <div className="register-container">
        <div className="register__wrapper">
          <div className="register__header">
            <h1>Register</h1>
          </div>
          {/* Registeration Form */}
          <FormInput
            label={"Name"}
            val={name}
            error={errors.name}
            onChangeHandler={(value) => setName(value)}
          />
          <FormInput
            type="email"
            label={"Email Address"}
            val={email}
            onChangeHandler={(value) => setEmail(value)}
            error={errors.email}
          />
          <FormInput
            label={"Phone Number"}
            val={phoneNumber}
            onChangeHandler={(value) => setPhoneNumber(value)}
            error={errors.phoneNumber}
          />
          <FormInput
            type="password"
            label={"Password"}
            val={password}
            onChangeHandler={(value) => setPassword(value)}
            error={errors.password}
          />

          <FormInput
            type="password"
            label={"Confirm Password"}
            val={confirmPassword}
            onChangeHandler={(value) => setConfirmPassword(value)}
          />
          <FormSubmitBtn
            title="Register"
            onClickHandler={register}
            isDisabled={disableBtn}
            isLoading={isSubmit}
          />
          {/* Registeration Form */}

          <div className="register-nw-login-nw-txt">
            Already on Netflix ? <Link to="/">Sign In</Link>.
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
