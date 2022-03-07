import { combineReducers } from "redux";
import codeReducer from "./code";
import visibilityFilter from "./visibilityFilter";

const rootReducer = combineReducers({
  codeReducer,
  visibilityFilter,
});

export default rootReducer;
