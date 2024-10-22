import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: localStorage.getItem("access_token"),
  },
});

export default api;
