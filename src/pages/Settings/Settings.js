import React, { useEffect } from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import Alert from "../../components/UI/Alert/Alert";
import classes from "./Settings.module.css";
import Button from "../../components/UI/Button/Button";
import { useSelector } from "react-redux";
import { useState } from "react";
const Settings = () => {
  const user = useSelector((store) => store.auth?.user);
  const [profiles, setProfiles] = useState(user.profiles || []);
  useEffect(() => {
    document.body.style.backgroundColor = "white";
    return () =>  document.body.style.backgroundColor = "#0a0a0a";
  }, []);
  return (
    <AppLayout navbarColor={"rgb(10, 10, 10)"}>
      <main className={classes["settings-container"]}>
        <div className={classes["settings-wrapper"]}>
          <h1>Account</h1>
          <Alert alertMessage="Your account has already been cancelled." />
        </div>
        <div className={classes["settings-wrapper"]}>
          <section className={classes["setting-section"]}>
            <div className={classes.column1}>
              <h2>MEMBERSHIP & BILLING</h2>
              <Button
                title="Restart membership"
                size="lg"
                color="btn-plain"
                btnProps={{
                  style: {
                    borderRadius: 0,
                    borderBottom: "#818181 solid 1px",
                    fontSize: 14,
                  },
                }}
              />
            </div>
            <div className={classes.column2}>
              <section className={classes["inner-section"]}>
                <div className={classes["setting-row"]}>
                  <span className={`${classes["setting-value"]} ${classes.dark}`}>
                    ghanshyamdutt1407@gmail.com
                  </span>
                  <button className={classes["settings-link"]}>Change Email</button>
                </div>
                <div className={classes["setting-row"]}>
                  <span className={classes["setting-value"]}>Password: ********</span>
                  <button className={classes["settings-link"]}>Change Password</button>
                </div>
                <div className={classes["setting-row"]}>
                  <span className={classes["setting-value"]}>Phone: ***** 19477</span>
                  <button className={classes["settings-link"]}>Change Phone Number</button>
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
                <section className={classes["inner-section"]}></section>
              ))}
            </div>
          </section>
        </div>
      </main>
    </AppLayout>
  );
};

export default Settings;
