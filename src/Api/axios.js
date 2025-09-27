import axios from "axios";
const axiosInstance = axios.create({
  // local instance of firebase function
  // baseURL: "http://127.0.0.1:5001/clone-d825b/us-central1/api",
  // deployed version of amazon server on render.com
  baseURL: "http://localhost:2025",
});
export { axiosInstance };
