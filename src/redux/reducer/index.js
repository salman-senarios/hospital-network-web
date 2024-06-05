import { LOGIN, LOGOUT, USER } from "redux/constants";

const initState = {
  login: JSON.parse(localStorage.getItem("epcToken")) ? true : false,
  userId: JSON.parse(localStorage.getItem("userId")) || null,
  userData: {},
};

export const authReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        login: true,
        userId: payload.id,
        userData: { ...payload },
      };
    case USER:
      return {
        ...state,
        userData: { ...payload },
      };
    case LOGOUT:
      return {
        ...state,
        login: false,
        userData: {},
        userId: null,
      };

    default:
      return state;
  }
};
