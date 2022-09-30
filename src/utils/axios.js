import axios from "axios";
let token = localStorage.getItem("token");
const instance = axios.create({
  headers: {
    "x-access-token": token || "",
  },
  baseURL: process?.env?.REACT_APP_API_BASE_URL || '',
});
export default instance;
