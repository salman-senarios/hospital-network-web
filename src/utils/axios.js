import axios from "axios";
import { createNotification } from "notification-popup";
import { store } from "redux/store";

if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "https://62bd9801bac21839b606d8bb.mockapi.io/";
} else {
  axios.defaults.baseURL = "http://64.227.22.105/api/";
}

axios.interceptors.request.use(
  (config) => {
    const {
      auth: { token },
    } = store.getState();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (successRes) => {
    return successRes;
  },
  (error) => {
    if (error.response.config.method === "post") {
      createNotification(
        "error",
        "Error",
        error?.response.data || "Something went wrong "
      );
    }
    return Promise.reject(error);
  }
);

export { axios as Axios };
