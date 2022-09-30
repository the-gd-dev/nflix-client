import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AppLayout from "../../components/AppLayout/AppLayout";
import appConfig from "../../config/appConfig";
import AddNewProfile from "./AddNewProfile";
import "./ManageProfiles.css";
import axios from "../../utils/axios";
import { API_GET_PROFILES } from "../../api/profiles";
import SingleProfie from "../../components/SingleProfie";
import EditProfile from "./EditProfile";
import CogIcon from "../../components/CogIcon";
import { fetchUser } from "../../store/auth/actions";
const ManageProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [isEditProfiles, setIsEditProfiles] = useState(false);
  const [showAddNewProfile, setShowAddNewProfile] = useState(false);
  const [editProfileData, setEditProfileData] = useState({});
  const [showEditProfile, setShowEditProfile] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  // useEffect(async () => {
  //   dispatch(fetchUser());
  //   const { data } = await axios.get(API_GET_PROFILES);
  //   setProfiles((prevState) => [...data.profiles]);
  // }, []);

  //User Authentication
  let user = useSelector((state) => state.auth.user);
  if (!user) {
    history.push("/");
  }

  const editProfileHandler = (profile) => {
    setEditProfileData(profile);
    setShowEditProfile(true);
  };
  const goToManageProfiles = () => {
    setIsEditProfiles(true);
  };
  const updateProfileHandler = (profile) => {
    let updateProfile = profiles.find((p) => p._id === profile._id);
    updateProfile.name = profile.name;
    setIsEditProfiles(false);
    setShowEditProfile(false);
  };
  const discardHandler = (type) => {
    if (type === "edit") {
      setIsEditProfiles(false);
      setShowEditProfile(false);
    }
    if (type === "add") {
      setShowAddNewProfile(false);
    }
  };
  const trashProfileHandler = (profile) => {
    setIsEditProfiles(false);
    setShowEditProfile(false);
  };
  const createDoneBtnHandler = async (profile) => {
    setProfiles((prevState) => [...prevState, profile]);
    setShowAddNewProfile(false);
  };
  return (
    <AppLayout customClasses={["select__profiles"]}>
      <div className="page___container">
        <div
          className={
            showAddNewProfile || showEditProfile
              ? "manageProfiles___wrapper fetched__profile"
              : "manageProfiles___wrapper  fetched__profile show"
          }
        >
          <h1>Who's Watching ?</h1>
          <div className="profiles__container ">
            {profiles.map((prof) => (
              <SingleProfie
                profile={prof}
                key={prof._id}
                showEdit={isEditProfiles}
                onEdit={(v) => editProfileHandler(v)}
              />
            ))}
            <div className="profile__wrap">
              <div
                className="bgImage"
                style={{
                  background: `url(${appConfig.assetsUrl}/images/children.png) center no-repeat`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="profileName">Children</div>
            </div>
            {profiles.length < 4 ? (
              <div
                className="profile__wrap add__new"
                onClick={() => setShowAddNewProfile(true)}
              >
                <div className="plus">
                  <img src={appConfig.assetsUrl + "/images/add.png"} />
                </div>
                <div className="profileName">Add Profile</div>
              </div>
            ) : null}
          </div>
          <div className="manage__profile__action">
            <button className="manage__btn" onClick={goToManageProfiles}>
              <CogIcon />
              <div className="title ml-4">Manage Profiles</div>
            </button>
          </div>
        </div>
        <div
          className={
            showEditProfile
              ? "manageProfiles___wrapper show"
              : "manageProfiles___wrapper"
          }
        >
          <EditProfile
            showToggle={showEditProfile}
            editData={editProfileData}
            doneBtnHandler={(v) => updateProfileHandler(v)}
            cancelBtnHandler={() => discardHandler("edit")}
            deleteBtnHandler={(v) => trashProfileHandler(v)}
          />
        </div>
        <div
          className={
            showAddNewProfile
              ? "manageProfiles___wrapper show"
              : "manageProfiles___wrapper"
          }
        >
          <AddNewProfile
            showToggle={showAddNewProfile}
            doneBtnHandler={(v) => createDoneBtnHandler(v)}
            cancelBtnHandler={() => discardHandler("add")}
          />
        </div>
      </div>
    </AppLayout>
  );
};
export default ManageProfiles;
