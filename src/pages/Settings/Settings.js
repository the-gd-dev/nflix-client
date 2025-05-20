import React, { useEffect } from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import Alert from "../../components/UI/Alert/Alert";
import classes from "./Settings.module.css";
import Button from "../../components/UI/Button/Button";
import { useSelector } from "react-redux";
import { useState } from "react";
import AvtarImage from "../../components/UI/AvtarImage/AvtarImage";
import SettingsUpdateModal from "./SettingsUpdateModal";
const Settings = () => {
  window.document.title = "Netflix Clone - Settings";
  const user = useSelector((store) => store.auth?.user);
  const [profiles, setProfiles] = useState(user.profiles || []);
  const [showSettingsUpdateModal, setShowSettingsUpdateModal] = useState(false);
  useEffect(() => {
    document.body.style.backgroundColor = "white";
    return () => (document.body.style.backgroundColor = "#0a0a0a");
  }, []);
  const onCloseModalHandler = () => {
    setShowSettingsUpdateModal(false);
  };
  return (
    <AppLayout navbarColor={"rgb(10, 10, 10)"}>
      {!!showSettingsUpdateModal && (
        <SettingsUpdateModal
          updateType={showSettingsUpdateModal}
          title={"Update Settings"}
          onCloseModal={onCloseModalHandler}
          width={500}
        />
      )}

      <main className={classes["settings-container"]}>
        <div className={classes["settings-wrapper"]}>
          <h1>Account</h1>
          {/* <Alert alertMessage="Your account has already been cancelled." /> */}
        </div>
        <div className={classes["settings-wrapper"]}>
          <section className={classes["setting-section"]}>
            <div className={classes.column1}>
              <section className={classes["inner-section"]}>
                <h2>MEMBERSHIP & BILLING</h2>
                {/* <Button
                  title="Restart membership"
                  size="lg"
                  color="btn-plain"
                  btnProps={{
                    style: {
                      borderRadius: 0,
                      borderBottom: "#818181 solid 1px",
                      fontSize: 14,
                      maxWidth: 300,
                    },
                  }}
                /> */}
              </section>
            </div>

            <div className={classes.column2}>
              <section className={classes["inner-section"]}>
                <div className={classes["setting-row"]}>
                  <span className={`${classes["setting-value"]} ${classes.dark}`}>
                    {user.email}
                  </span>
                  <button
                    onClick={() => setShowSettingsUpdateModal("email")}
                    className={classes["settings-link"]}
                  >
                    Change Email
                  </button>
                </div>
                <div className={classes["setting-row"]}>
                  <span className={classes["setting-value"]}>Password: ********</span>
                  <button
                    onClick={() => setShowSettingsUpdateModal("password")}
                    className={classes["settings-link"]}
                  >
                    Change Password
                  </button>
                </div>
                <div className={classes["setting-row"]}>
                  <span className={classes["setting-value"]}>Phone: {user.phoneNumber}</span>
                  <button
                    onClick={() => setShowSettingsUpdateModal("phone")}
                    className={classes["settings-link"]}
                  >
                    Change Phone Number
                  </button>
                </div>
              </section>
            </div>
          </section>
          <section className={classes["setting-section"]}>
            <div className={classes.column1}>
              <h2>PROFILE & PARENTAL CONTROLS</h2>
            </div>
            <div className={classes.column2}>
              {profiles.map((profile) => (
                <section className={classes["inner-section"]}>
                  <div className={classes["profile-wrap"]}>
                    <div className={classes["profile-name-avatar"]}>
                      <AvtarImage avatar={profile.avatar} height={70} width={70} />
                      <div className={classes["profile-name-settings"]}>
                        <div className={classes["profile-name"]}>{profile.name}</div>
                        <span>All maturity settings</span>
                      </div>
                    </div>
                    <div>
                      <svg
                        style={{ transform: "rotate(90deg)" }}
                        height="25"
                        viewBox="0 0 1792 1792"
                        width="25"
                        fill="#717171"
                      >
                        <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" />
                      </svg>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </section>
        </div>
      </main>
    </AppLayout>
  );
};

export default Settings;
