import { combineReducers } from "redux";

import cup from "./cup";
import dailyTarget from "./dailyTarget";
import achievedTarget from "./achievedTarget";

const rootReducer = combineReducers({
  cup,
  dailyTarget,
  achievedTarget
});

export default rootReducer;
