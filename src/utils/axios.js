import axios from "axios";
import store from '../store/index';
const storeState = store.getState();
const instance = axios.create({
  headers: {
    "x-access-token": storeState?.auth?.token || localStorage.getItem("auth_token") || "",
  },
  baseURL: process?.env?.REACT_APP_API_BASE_URL || '',
});
export default instance;
