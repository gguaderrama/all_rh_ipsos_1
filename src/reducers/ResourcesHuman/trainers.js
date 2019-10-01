const initialState = {
    menu: '',
    trainers: [],
    alertTrainers: false
}

const Trainers = (state = initialState, action) => {
    switch (action.type) {
        case "CALL_MENU":
            return {
                ...state,
                menu: action.value
            }
        case "SET_TRAINERS":
            return {
                ...state,
                trainers: action.value
            }
        case "ALERT_TRAINERS":
            return {
                ...state,
                alertTrainers: {
                    status : !state.alertTrainers,
                    message : action.value
                }
            } 
        case "OFF_ALERT_TRAINERS":
            return {
                ...state,
                alertTrainers: {
                    status :  false,
                    message : ''
                }
            }         



        default:
            return state
    }

}

export default Trainers
