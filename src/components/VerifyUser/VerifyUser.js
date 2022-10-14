import React, { useState } from "react";
import updateErrors from "../../helpers/updateErrors";
import userDataRules from "../../rules/userDataRules";
import BtnGroup from "../UI/BtnGroup/BtnGroup";
import Button from "../UI/Button/Button";
import FormInput from "../UI/FormInput/FormInput";
import Modal from "../UI/Modal/Modal";
import classes from "./VerifyUser.module.css";
import axios from "../../utils/axios";
import { API_VERIFY_CODE } from "../../api/auth";
import { useHistory } from "react-router-dom";
const VerifyUser = (props) => {
  const [code, setCode] = useState("");
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const verifyUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        API_VERIFY_CODE + `/${props.user._id}`,
        {
          code,
        }
      );
      history.push("/login");
    } catch (error) {
      setLoading(false);
      setErrors({ code: error?.response?.data?.message || "" });
    }
  };
  return (
    <Modal
      title="Verify Email Address"
      width={450}
      onCloseModal={props.onCloseModal}
    >
      <form>
        <FormInput
          type="number"
          className="hide-arrows"
          label={"Verification Code"}
          val={code.substring(0, 6)}
          onChangeHandler={(value) => {
            if (value.length <= 6) {
              setCode(value);
              setErrors(
                updateErrors(errors, userDataRules.validateCode(value), "code")
              );
            }
          }}
          error={errors.code}
        />

        <div className={classes["modal-footer"]}>
          <BtnGroup justifyContent="flex-end" maxWidth={180}>
            <Button
              btnProps={{ type: "button" }}
              color=""
              size="lg"
              title="Discard"
              onClick={props.onCloseModal}
            />
            <Button
              onClick={verifyUser}
              btnProps={{ type: "button" }}
              isLoading={loading}
              isDisabled={loading || userDataRules.validateCode(code)}
              color="netflix-red"
              title="Verify"
              size="lg"
            />
          </BtnGroup>
        </div>
      </form>
    </Modal>
  );
};

export default VerifyUser;
