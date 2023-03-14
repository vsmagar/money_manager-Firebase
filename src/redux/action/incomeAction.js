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
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import db from "../../firebaseConfig";

export const addIncomeAction = (incomeData) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_INCOME_REQUEST });
    const collectionRef = collection(db, "account");
    // const userId = getState().auth.login.uid;
    // await addDoc(collectionRef, { ...incomeData, userId });
    const {
      auth: {
        login: { id },
      },
    } = getState();
    await addDoc(collectionRef, { ...incomeData, userId: id });
    dispatch({ type: ADD_INCOME_SUCCESS });
  } catch (error) {
    dispatch({ type: ADD_INCOME_FAIL, payload: error.message });
  }
};

export const getIncomeAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_INCOME_REQUEST });
    const collectionRef = collection(db, "account");
    const q = query(collectionRef, where("choice", "==", "income"));
    const result = await getDocs(q);
    // console.log(result);
    const incomeFromDb = result.docs.map((doc) => doc.data());
    // console.log(incomeFromDb);

    dispatch({ type: GET_INCOME_SUCCESS, payload: incomeFromDb });
  } catch (error) {
    dispatch({ type: GET_INCOME_FAIL, payload: error.message });
  }
};

export const updateIncomeAction = (incomeData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_INCOME_REQUEST });
    dispatch({ type: UPDATE_INCOME_SUCCESS });
  } catch (error) {
    dispatch({ type: UPDATE_INCOME_FAIL, payload: error.message });
  }
};

export const deleteIncomeAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_INCOME_REQUEST });
    dispatch({ type: DELETE_INCOME_SUCCESS });
  } catch (error) {
    dispatch({ type: DELETE_INCOME_FAIL, payload: error.message });
  }
};
