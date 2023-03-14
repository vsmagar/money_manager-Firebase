import {
  ADD_EXPENCE_FAIL,
  ADD_EXPENCE_REQUEST,
  ADD_EXPENCE_SUCCESS,
  GET_EXPENCE_REQUEST,
  GET_EXPENCE_SUCCESS,
  GET_EXPENCE_FAIL,
  UPDATE_EXPENCE_REQUEST,
  UPDATE_EXPENCE_SUCCESS,
  UPDATE_EXPENCE_FAIL,
  DELETE_EXPENCE_REQUEST,
  DELETE_EXPENCE_SUCCESS,
  DELETE_EXPENCE_FAIL,
} from "../constant/expenceConstant";

export const expenceReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_EXPENCE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_EXPENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        expenceAdded: true,
      };
    case ADD_EXPENCE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case GET_EXPENCE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_EXPENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        expence: payload,
      };
    case GET_EXPENCE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case UPDATE_EXPENCE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_EXPENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        expenceUpdated: true,
      };
    case UPDATE_EXPENCE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case DELETE_EXPENCE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_EXPENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        expenceDeleted: true,
      };
    case DELETE_EXPENCE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
