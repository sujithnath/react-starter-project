import logger from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

import RootReducers from "./reducers";

const middleware = applyMiddleware(logger, thunk);
const store = createStore(RootReducers, middleware);

export default store;
