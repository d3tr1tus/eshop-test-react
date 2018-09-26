import {axios} from "./../config/axios-cfg";

export function addUser(_this, name) {
    return function (dispatch) {
        dispatch({type: "LOADER_START"});
        axios.post("/add-user", {
            name: name
        }, true).then((response) => {
                console.log(response.data);
                dispatch({type: "LOADER_DONE", payload: response.data});
            }).catch((err) => {
                console.log(err.message);
                dispatch({type: "LOADER_DONE"});
                _this.props.history.push("/404");
        })
    }
}