import {
  LOGIN_WITH_GOOGLE_FAIL,
  LOGIN_WITH_GOOGLE_REQUEST,
  LOGIN_WITH_GOOGLE_SUCCESS,
  LOGOUT,
} from "../constant/authConstants";
import { doc, setDoc } from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import db from "../../firebaseConfig";

export const loginWithGoogle = () => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_WITH_GOOGLE_REQUEST });
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    
    const {
      user: { uid, email, displayName, photoURL },
    } = await signInWithPopup(auth, provider);

    const profile = {
      email,
      avatar: photoURL,
      name: displayName,
    };
    const docRef = doc(db, "users", uid);
    await setDoc(docRef, profile);

    dispatch({
      type: LOGIN_WITH_GOOGLE_SUCCESS,
      payload: { ...profile, id: uid },
    });
  } catch (error) {
    dispatch({ type: LOGIN_WITH_GOOGLE_FAIL, payload: error.message });
  }
};

export const logoutAction = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
