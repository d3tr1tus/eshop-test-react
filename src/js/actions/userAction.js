import {axios} from "./../config/axios-cfg";
import {Link} from 'react-router';
//import {addTranslationForLanguage, initialize, setActiveLanguage} from "react-localize-redux/lib/index";

//const CZ = require("../../locale/cz.json");
//const DE = require("../../locale/de.json");
//const EN = require("../../locale/en.json");
/*
export function logout(token) {
    return function (dispatch) {

        axios.post("/login", {
            type: LOGOUT,
            token: token
        }).then((response) => {
            dispatch({
                type: "LOGOUT_USER"
            })
            hashHistory.push("/login");

        }).catch((err) => {

        })
    }
}
*/

export function authorize(token, _this) {
    return function (dispatch) {
        dispatch({type: "FETCH_USER_START"});
        axios.post("/admin/home")
            .then((response) => {
            console.log(response);
            /*
            const languages = ['en', 'cs', "de"];
            dispatch(initialize(languages, {defaultLanguage: 'cs', missingTranslationMsg: missingTranslationMsg}));
            dispatch(addTranslationForLanguage(EN, 'en'));
            dispatch(addTranslationForLanguage(CZ, 'cs'));
            dispatch(addTranslationForLanguage(DE, 'de'));
            if (response.data.language != "cs") {
                dispatch(setActiveLanguage(response.data.language));
            }
            */
            dispatch({type: "FETCH_USER_SUCCESS", payload: response.data});

            _this.verifyRoute();

        }).catch((err) => {
            _this.props.history.push("/404");
        })
    }
}

