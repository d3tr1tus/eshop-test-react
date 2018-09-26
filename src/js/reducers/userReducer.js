export default function reducer(
    state = {
        data: [],
        fetching: false,
        fetched: false,
        error: null,
    },
    action
) {
    switch (action.type) {
        case "FETCH_USER_START" : {
            return {...state, fetching: true, error: null}
        }
        case "FETCH_USER_SUCCESS" : {
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload,
                error: null
            }
        }
        case "FETCH_USER_ERROR" : {
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: true
            }
        }

        case "LOGOUT_USER" : {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: false,
                data: []
            }
        }

    }
    return state;
}