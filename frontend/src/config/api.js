import axios from "axios";

export const api = axios.create({
  baseURL: "https://gharpayy-crm-mvp-api.vercel.app/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

/*
Request interceptor
Logs outgoing requests
*/
api.interceptors.request.use(
  (config) => {
    console.log("API Request:", {
      url: config.url,
      method: config.method,
      data: config.data
    });
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

/*
Response interceptor
Shows real backend errors
*/
api.interceptors.response.use(
  (response) => {
    console.log("API Response:", response.data);
    return response;
  },
  (error) => {
    if (error.response) {
      // Backend returned an error response
      console.error("API Error Response:", {
        status: error.response.status,
        data: error.response.data
      });
    } else if (error.request) {
      // Request made but no response received
      console.error("No response received from API:", error.request);
    } else {
      // Something else broke
      console.error("Axios error:", error.message);
    }

    return Promise.reject(error);
  }
);