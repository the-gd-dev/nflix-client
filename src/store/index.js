import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { userReducer } from "./user/reducers";
const loggerMiddleware = createLogger();
const rootReducer = combineReducers({
    user: userReducer
})
const store = createStore(
    rootReducer,
    applyMiddleware(
        loggerMiddleware
    )
)
export default store;