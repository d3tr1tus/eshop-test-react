export default function reducer(
    state = {
        alert: null,
        type: null
    },
    action
){
    switch (action.type){
        case "SHOW_ALERT" : {
            return {
                ...state,
                alert: action.payload.text,
                type: action.payload.type,
            }
        }

        case "ALERT_HIDE" : {
            return {
                ...state,
                alert: null,
                type: null,
            }
        }

    }
    return state;
}

