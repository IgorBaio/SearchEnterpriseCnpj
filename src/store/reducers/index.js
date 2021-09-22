import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import alertReducer from "./alertReducer";
import enterpriseReducer from "./enterpriseReducer";

export default combineReducers({
  alert: alertReducer,
  form: formReducer,
  enterprise: enterpriseReducer,
});
