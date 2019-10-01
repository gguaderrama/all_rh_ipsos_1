const initialState = {
    menu: '',
    trainingrequest: [],
    alertTrainingRequest: false,
    TrainningsSave: []
}
const TrainingRequest = (state = initialState, action) => {
    switch (action.type) {
        case "CALL_MENU":
            return {
                ...state,
                menu: action.value
            }
        case "SET_TRAININGREQUEST_SAVE":
            return {
                ...state,
                TrainningsSave: action.value
            }
        case "SET_TRAININGREQUEST":
            return {
                ...state,
                trainingrequest: action.value
            }
        case "ALERT_TRAININGREQUEST":
            return {
                ...state,
                alertTrainingRequest: {
                    status: !state.alertTrainingRequest,
                    message: action.value
                }
            }
        case "OFF_ALERT_TRAININGREQUEST":
            return {
                ...state,
                alertTrainingRequest: {
                    status: false,
                    message: ''
                }
            }
        default:
            return state
    }
}
export default TrainingRequest
