import {
  ADD_INCOME_FAIL,
  ADD_INCOME_REQUEST,
  ADD_INCOME_SUCCESS,
  GET_INCOME_REQUEST,
  GET_INCOME_SUCCESS,
  GET_INCOME_FAIL,
  UPDATE_INCOME_REQUEST,
  UPDATE_INCOME_SUCCESS,
  UPDATE_INCOME_FAIL,
  DELETE_INCOME_REQUEST,
  DELETE_INCOME_SUCCESS,
  DELETE_INCOME_FAIL,
} from "../constant/incomeConstant";

export const incomeReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_INCOME_REQUEST:
      return {
        ...state,
        loading: true,
        incomeAdded: false,
      };
    case ADD_INCOME_SUCCESS:
      return {
        ...state,
        loading: false,
        incomeAdded: true,
      };
    case ADD_INCOME_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case GET_INCOME_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case GET_INCOME_SUCCESS:
      return {
        ...state,
        loading: false,
        getIncome: payload,
      };
    case GET_INCOME_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case UPDATE_INCOME_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_INCOME_SUCCESS:
      return {
        ...state,
        loading: false,
        incomeUpdated: true,
      };
    case UPDATE_INCOME_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case DELETE_INCOME_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case DELETE_INCOME_SUCCESS:
      return {
        ...state,
        loading: false,
        incomeDeleted: true,
      };
    case DELETE_INCOME_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
