import axios from "axios";

const api = axios.create({
  baseURL: "https://lifelink-backend.onrender.com"
});

export default api;