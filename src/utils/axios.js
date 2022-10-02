import axios from "axios";
const instance = axios.create({
  headers: {
    "x-access-token": localStorage.getItem("auth_token") || "",
  },
  baseURL: process?.env?.REACT_APP_API_BASE_URL || '',
});
export default instance;
