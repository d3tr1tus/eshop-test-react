import {applyMiddleware, createStore} from "redux";

import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import {save, load} from "redux-localstorage-simple";


import reducer from "./reducers/index";

var createStoreWithMiddleware = null;
if (process.env.NODE_ENV !== 'production') {
    createStoreWithMiddleware
        = applyMiddleware(
        promise(),
        thunk,
        createLogger()
    )(createStore);
}
else {
    createStoreWithMiddleware
        = applyMiddleware(
        promise(),
        thunk
    )(createStore);
}

//const middleware = applyMiddleware(promise(), thunk, createLogger());

const store = createStoreWithMiddleware(
    reducer // Loading done here
);
export default store;