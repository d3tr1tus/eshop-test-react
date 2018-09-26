import { combineReducers } from "redux";
import alert from "./alertReducer";
import loader from "./loaderReducer";
import user from "./userReducer";

import { localeReducer as locale } from 'react-localize-redux';

export default combineReducers({
    alert,
    loader,
    user
})

