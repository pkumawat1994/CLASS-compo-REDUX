import { legacy_createStore, combineReducers } from "redux";
import PostReducer from "../reducers/PostReducer";
const rootReducer = combineReducers({
  post: PostReducer,
});
const store = legacy_createStore(
  rootReducer,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
