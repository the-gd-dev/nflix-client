import React, { useEffect, useState } from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import "./Register.css";
import bgBanner from "../../assets/images/home-banner.jpg";
import { useDispatch } from "react-redux";
import { login } from "../../store/user/actions";
import { useHistory } from "react-router-dom";
import FormSubmitBtn from "../../components/FormSubmitBtn";
import FormInput from "../../components/FormInput/FormInput";
import signupRules from "./signupRules";
import axios from "../../axios";
const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
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
  
  //validations
  useEffect(() => updateErrors(signupRules.validateName(name), 'name'), [name]);
  useEffect(() => updateErrors(signupRules.validateEmail(email), 'email'), [email]);
  useEffect(() => updateErrors(signupRules.validatePhoneNumber(phoneNumber),'phoneNumber'), [phoneNumber]);
  useEffect(() => updateErrors(signupRules.validatePassword(password, confirmPassword), "password"), [password, confirmPassword]);
 
  const dispatch = useDispatch();
  const history = useHistory();

  const register = async () => {
    //inputs empty
    // if(!name || !email || !phoneNumber || !password) return false;
    //errors present
    // if(errors.name || errors.email || errors.phoneNumber || errors.password) return false;

    // setIsSubmit(true);
    // setDisableBtn(true);

    const response  = await axios.post('users/register', {});
    console.log(response);
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
          <FormSubmitBtn title="Register" onClickHandler={register} isDisabled={disableBtn} isLoading={isSubmit} />
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
