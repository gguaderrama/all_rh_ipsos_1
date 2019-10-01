
const initialState = {
    states: [],
    alertState: false
}

const State = (state = initialState, action) => {
    switch (action.type) {
        case "SET_STATE":
            return {
                ...state,
                states: action.value
            }
        case "ALERT_STATE":
            return {
                ...state,
                alertState: {
                    status : !state.alertState,
                    message : action.value
                }
            } 
        case "OFF_ALERT_STATE":
            return {
                ...state,
                alertState: {
                    status :  false,
                    message : ''
                }
            }         



        default:
            return state
    }

}

export default State
