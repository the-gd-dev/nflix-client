import { API_GET_USER, API_UPDATE_USER } from "../../api/auth";
import axios from "../../utils/axios";
const {
  SAVE_TOKEN,
  SAVE_USER,
  DELETE_USER,
  DELETE_TOKEN,
} = require("./action-types");

/**
 * save jwt token
 * @param {*} token
 * @returns
 */
export const saveAuthToken = (token) => {
  localStorage.setItem("auth_token", token);
  return {
    type: SAVE_TOKEN,
    token,
  };
};

/**
 * delete jwt token
 * @returns
 */
export const removeToken = () => {
  localStorage.removeItem("auth_token");
  return {
    type: DELETE_TOKEN,
  };
};

/**
 * save jwt user
 * @param {*} token
 * @returns
 */
export const saveAuthUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
  return {
    type: SAVE_USER,
    user,
  };
};

/**
 * delete jwt user
 * @returns
 */
export const removeAuthUser = () => {
  localStorage.removeItem("user");
  return {
    type: DELETE_USER,
  };
};

/**
 * fetch jwt user
 * @returns
 */
 export const updateCurrentWatching = (profile) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(API_UPDATE_USER, profile);
      dispatch(saveAuthUser(data.user));
    } catch (error) {
      // dispatch(removeToken());
      // dispatch(removeAuthUser());
    }
  };
};

/**
 * fetch jwt user
 * @returns
 */
export const fetchUser = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(API_GET_USER);
      dispatch(saveAuthUser(data.user));
    } catch (error) {
      // dispatch(removeToken());
      // dispatch(removeAuthUser());
    }
  };
};
