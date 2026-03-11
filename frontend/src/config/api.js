import axios from "axios";

export const api = axios.create({
  baseURL: "https://gharpayy-crm-mvp-api.vercel.app/api",
  timeout: 5000
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error);
    return Promise.reject(error);
  }
);