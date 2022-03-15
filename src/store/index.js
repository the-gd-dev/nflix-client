import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { authReducer } from "./auth/reducers";
const loggerMiddleware = createLogger();
const rootReducer = combineReducers({
  auth: authReducer,
});
const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
export default store;
