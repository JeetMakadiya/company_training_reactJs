import changeNumber from "./counter";
import multDivNumber from "./muldiv";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ changeNumber, multDivNumber});

export default rootReducer;