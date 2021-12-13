import { combineReducers } from "redux";
import userBooks from "./userBooks";
const reducers = combineReducers({
  allBooks: userBooks,
});
export default reducers;