import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";
import classes from "./AuthFormContainer.module.css";

const AuthFormContainer = (props) => {
  const { errorModal, serverErrorMessage, isLoading, formHeaderTitle } = props;
  return (
    <>
      {errorModal && (
        <ErrorModal
          errorMessage={serverErrorMessage}
          onErrorModalClose={props.errorModalClose}
        />
      )}
      <div className={classes["form-container"]}>
        <div className={classes["form-wrapper"]}>
          <div className={classes["form-header"]}>
            <h1>{formHeaderTitle}</h1>
          </div>
          <div className={classes["inputs-container"]}>{props.children}</div>
          <div className={classes["form-btn-container"]}>
            <Button
              title={props.submitBtn.title}
              size="xl"
              color="netflix-red"
              onClick={props.submitBtn.onSubmit}
              isDisabled={props.submitBtn.disableBtn}
              isLoading={isLoading}
            />
          </div>

          {!props.hideFormFooter && (
            <div className={classes["form-footer-text"]}>
              {props.leftFooterText}
              <Link className={classes.linkClass} to={props.footerLink}>{props.linkTitle || 'Login Now'}</Link>
              {props.rightFooterText || "."}
              <div className={classes["user-help-text"]}>
                <a href="/">Need help?</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthFormContainer;
