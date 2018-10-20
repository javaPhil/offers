import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import offerReducer from "./offerReducer";

export default combineReducers({
  filterReducer,
  offerReducer
});
