export default function reducer(
    state = {
        loadingStart: false,
        loadingDone: false
    },
    action
){
    switch (action.type){
        case "LOADER_START" : {
            return {
                ...state,
                loadingStart: true,
                loadingDone: false,
            }
        }

        case "LOADER_DONE" : {
            return {
                ...state,
                loadingStart: false,
                loadingDone: true,
            }
        }

    }
    return state;
}

