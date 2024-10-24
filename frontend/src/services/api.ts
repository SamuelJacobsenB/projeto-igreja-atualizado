import axios from "axios";

//your api url
const api = axios.create({
  baseURL: "http://localhost:2024",
});

export default api;
