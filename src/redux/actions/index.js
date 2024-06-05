import { LOGIN, LOGOUT, USER } from "redux/constants";

export const loginAction = (data) => {
  delete data["password"];

  localStorage.setItem("epcToken", JSON.stringify("token"));
  localStorage.setItem("userId", JSON.stringify(data.id));
  return {
    type: LOGIN,
    payload: data,
  };
};

export const logoutAction = () => {
  localStorage.removeItem("epcToken");
  return {
    type: LOGOUT,
  };
};
export const userFetch = (data) => {
  return {
    type: USER,
    payload: data,
  };
};

// for api with thun
export const testApi = () => {
  return (dispatch) => {
    //api call
  };
};
