import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AppLayout from "../../components/AppLayout/AppLayout";
import appConfig from "../../config/appConfig";
import AddNewProfile from "./AddNewProfile";
import "./ManageProfiles.css";
import axios from "../../utils/axios";
import { API_GET_PROFILES } from "../../api/profiles";
import SingleProfie from "../../components/SingleProfie/SingleProfie";
import EditProfile from "./EditProfile";
import UpdateProfilePicture from "./UpdateProfilePicture";
import CogIcon from "../../components/Icons/CogIcon";
import { updateCurrentWatching } from "../../store/auth/actions";
import LeftArrow from "../../components/Icons/LeftArrow";
import ActionBtnGroup from "../../components/UI/ActionBtnGroup/ActionBtnGroup";
import ActionBtn from "../../components/UI/ActionBtn/ActionBtn";
import CloseIcon from "../../components/Icons/CloseIcon";
import AddIcon from "../../components/Icons/AddIcon";
const ManageProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [editProfileData, setEditProfileData] = useState({});
  const [currentSection, setCurrentSection] = useState(1);
  const [manageProfile, setManageProfile] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    const getProfiles = async () => {
      const { data } = await axios.get(API_GET_PROFILES);
      setProfiles(data.profiles);
    };
    getProfiles();
  }, []);
  const editProfileHandler = (profile) => {
    setEditProfileData(profile);
    setCurrentSection(2);
  };


  const updateProfileHandler = async (profile) => {
    if (profile._id === user.current_watching._id) {
        dispatch(updateCurrentWatching({ current_watching: profile }));
    }
    const updatedProfiles = profiles.map((p) => {
      if (p._id === profile._id) return profile;
      return p;
    });
    setProfiles(updatedProfiles);
    setManageProfile(false);
    setCurrentSection(1);
  };
  const discardHandler = (type) => {
    setManageProfile(false);
    if (type === "edit") {
      setCurrentSection(1);
    }
    if (type === "add") {
      setCurrentSection(1);
    }
  };
  const goBackToBrowse = () => {
    history.push("/browse");
  };
  const updateDpHandler = () => {
    setCurrentSection(4);
  };
  const trashProfileHandler = (profileId) => {
    const updatedProfiles = profiles.filter((p) => p._id !== profileId);
    setProfiles(updatedProfiles);
    setCurrentSection(1);
  };
  const createDoneBtnHandler = async (profile) => {
    setProfiles((prevState) => [...prevState, profile]);
    setCurrentSection(1);
  };
  const displayPictureSetHandler = async (profile) => {
    setEditProfileData(profile);
    setCurrentSection(2);
  };
  const changeCurrentWatching = async (profile) => {
    dispatch(updateCurrentWatching({ current_watching: profile }));
    goBackToBrowse();
  };
  return (
    <AppLayout customClasses={["select__profiles"]}>
      <div className="page___container">
        {/* Show Who's Watching */}
        <div
          className={
            currentSection === 1
              ? "manageProfiles___wrapper fetched__profile show"
              : "manageProfiles___wrapper fetched__profile"
          }
        >
          <h1>Who's Watching ?</h1>
          <div className="profiles__container ">
            {profiles.map((prof) => (
              <SingleProfie
                profile={prof}
                key={prof._id}
                showEdit={manageProfile}
                onEdit={() => {}}
                activeProfile={prof._id === user.current_watching._id}
                onAvatarClick={(v) =>
                  manageProfile ? editProfileHandler(v) : changeCurrentWatching(prof)
                }
              />
            ))}
            {/* <div className="profile__wrap">
              <div
                className="bgImage"
                style={{
                  background: `url(${appConfig.assetsUrl}/images/children.png) center no-repeat`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="profileName">Children</div>
            </div> */}
            {profiles.length < 4 ? (
              <div className="profile__wrap add__new" onClick={() => setCurrentSection(3)}>
                <div className="plus">
                  <AddIcon />
                </div>
                <div className="profileName">Add New Profile</div>
              </div>
            ) : null}
          </div>
          <ActionBtnGroup>
            {!manageProfile ? (
              <ActionBtn
                btnClass="manage__btn"
                icon={<CogIcon />}
                title={"Manage Profiles"}
                onClickHandler={() => setManageProfile(!manageProfile)}
              />
            ) : (
              <ActionBtn
                icon={<CloseIcon />}
                btnClass="manage__btn"
                title={"Cancel"}
                onClickHandler={() => setManageProfile(!manageProfile)}
              />
            )}
            {!manageProfile && (
              <ActionBtn
                btnClass="manage__btn"
                icon={<LeftArrow />}
                title={"Back"}
                onClickHandler={goBackToBrowse}
              />
            )}
          </ActionBtnGroup>
        </div>
        {/* Show Edit Profile */}
        <div
          className={
            currentSection === 2 ? "manageProfiles___wrapper show" : "manageProfiles___wrapper"
          }
        >
          <EditProfile
            showToggle={currentSection === 2}
            editData={editProfileData}
            doneBtnHandler={(v) => updateProfileHandler(v)}
            cancelBtnHandler={() => discardHandler("edit")}
            deleteBtnHandler={(v) => trashProfileHandler(v)}
            updateProfilePic={updateDpHandler}
          />
        </div>
        {/* Show Add New Profile */}
        <div
          className={
            currentSection === 3 ? "manageProfiles___wrapper show" : "manageProfiles___wrapper"
          }
        >
          <AddNewProfile
            showToggle={currentSection === 3}
            doneBtnHandler={(v) => createDoneBtnHandler(v)}
            cancelBtnHandler={() => discardHandler("add")}
          />
        </div>
        {/* Show Update Display Picture */}
        <div
          className={
            currentSection === 4 ? "manageProfiles___wrapper show" : "manageProfiles___wrapper"
          }
        >
          <UpdateProfilePicture
            showToggle={currentSection === 4}
            editData={editProfileData}
            doneBtnHandler={(v) => displayPictureSetHandler(v)}
            cancelBtnHandler={(v) => displayPictureSetHandler(v)}
          />
        </div>
      </div>
    </AppLayout>
  );
};
export default React.memo(ManageProfiles);
