import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducers";
// const loggerMiddleware = createLogger();
const rootReducer = combineReducers({
  auth: authReducer,
});

export default createStore(rootReducer, compose(applyMiddleware(thunk)));
