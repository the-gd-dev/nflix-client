import axios from "axios";
const instance = axios.create({
  baseURL: process.env.SERVER_API_BASE_URI,
});

export default instance;
