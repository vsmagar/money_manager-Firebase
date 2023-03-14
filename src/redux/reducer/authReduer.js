import {
  LOGIN_WITH_GOOGLE_FAIL,
  LOGIN_WITH_GOOGLE_REQUEST,
  LOGIN_WITH_GOOGLE_SUCCESS,
  LOGOUT,
} from "../constant/authConstants";

export const authReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case LOGIN_WITH_GOOGLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_WITH_GOOGLE_SUCCESS:
      return {
        ...state,
        loading: false,
        login: payload,
      };
    case LOGIN_WITH_GOOGLE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case LOGOUT:
      return {};

    default:
      return state;
  }
};
