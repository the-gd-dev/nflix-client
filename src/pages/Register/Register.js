import React, { useState } from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import "./Register.css";
import bgBanner from "../../assets/images/home-banner.jpg";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import FormInput from "../../components/UI/FormInput/FormInput";
import signupRules from "./signupRules";
import axios from "../../utils/axios";
import { saveAuthToken, saveAuthUser } from "../../store/auth/actions";
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
      dispatch(saveAuthToken(response.token));
      dispatch(saveAuthUser(response.user));
      history.push("/browse");
    } catch (error) {
      let { data } = error.response;
      updateErrors(data.message, "bad_errors");
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
      <div className="register-container">
        <div className="register__wrapper">
          <div className="register__header">
            <h1>
              Register
              {errors.bad_errors && (
                <h6 className="is-error" style={topErrorStyle}>
                  {errors.bad_errors}
                </h6>
              )}
            </h1>
          </div>
          {/* Registeration Form */}
          <FormInput
            label={"Name"}
            val={name}
            error={errors.name}
            onChangeHandler={(value) => {
              updateErrors(signupRules.validateName(value), "name");
              setName(value);
            }}
          />
          <FormInput
            type="email"
            label={"Email Address"}
            val={email}
            onChangeHandler={(value) => {
              updateErrors(signupRules.validateEmail(value), "email");
              setEmail(value);
            }}
            error={errors.email}
          />
          <FormInput
            label={"Phone Number"}
            val={phoneNumber}
            onChangeHandler={(value) => {
              updateErrors(
                signupRules.validatePhoneNumber(value),
                "phoneNumber"
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
              updateErrors(
                signupRules.validatePassword(value, confirmPassword)
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
              updateErrors(signupRules.validatePassword(password, value));
              setConfirmPassword(value);
            }}
          />
          <Button
            title="Register"
            size="xl"
            color="netflix-red"
            onClick={register}
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
