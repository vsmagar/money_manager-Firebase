import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducer/authReduer";
import { expenceReducer } from "./reducer/expenceReducer";
import { incomeReducer } from "./reducer/incomeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  income: incomeReducer,
  expence: expenceReducer,
});

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
