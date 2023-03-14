import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import db from "../../firebaseConfig";
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

export const addExpenceAction = (expenceData) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_EXPENCE_REQUEST });
    const collectionRef = collection(db, "account");
    const {
      auth: {
        login: { id },
      },
    } = getState();
    console.log(id);
    await addDoc(collectionRef, { ...expenceData, userId: id });
    dispatch({ type: ADD_EXPENCE_SUCCESS });
  } catch (error) {
    dispatch({ type: ADD_EXPENCE_FAIL, payload: error.message });
  }
};

export const getExpenceAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_EXPENCE_REQUEST });
    const collectionRef = collection(db, "account");
    const q = query(collectionRef, where("choice", "==", "expense"));
    const result = await getDocs(q);
    // console.log(result);
    const fromExpenseDb = result.docs.map((doc) => doc.data());
    dispatch({ type: GET_EXPENCE_SUCCESS, payload: fromExpenseDb });
  } catch (error) {
    dispatch({ type: GET_EXPENCE_FAIL, payload: error.message });
  }
};

export const updateExpenceAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_EXPENCE_REQUEST });
    dispatch({ type: UPDATE_EXPENCE_SUCCESS });
  } catch (error) {
    dispatch({ type: UPDATE_EXPENCE_FAIL, payload: error.message });
  }
};

export const deleteExpenceAction = (expenceData) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_EXPENCE_REQUEST });
    dispatch({ type: DELETE_EXPENCE_SUCCESS });
  } catch (error) {
    dispatch({ type: DELETE_EXPENCE_FAIL, payload: error.message });
  }
};
