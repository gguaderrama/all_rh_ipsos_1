const initialState = {
    menu: '',
    trainings: [],
    alertTrainings: false
}

const Trainings = (state = initialState, action) => {
    switch (action.type) {
        case "CALL_MENU":
            return {
                ...state,
                menu: action.value
            }
        case "SET_TRAININGS":
            return {
                ...state,
                trainings: action.value
            }
        case "ALERT_TRAININGS":
            return {
                ...state,
                alertTrainings: {
                    status : !state.alertTrainings,
                    message : action.value
                }
            } 
        case "OFF_ALERT_TRAININGS":
            return {
                ...state,
                alertTrainings: {
                    status :  false,
                    message : ''
                }
            }         



        default:
            return state
    }

}

export default Trainings
