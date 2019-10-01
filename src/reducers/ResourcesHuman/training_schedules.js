
const initialState = {
    training_schedules: [],
    training_sch: [],
    alertTraining_schedules: false,
    trainningCombo : []
}
const Trainers = (state = initialState, action) => {
    switch (action.type) {
        case "TRAINNING_COMBO":
            return {
                ...state,
                trainningCombo: action.value
            }
        case "SET_TRAINNINGS_SCHEDULES":
            return {
                ...state,
                training_schedules: action.value
            }
            case "SET_TRAINNINGS_SCH":
            return {
                ...state,
                training_sch : action.value
            }
        case "ALERT_TRAINNINGS_SCHEDULES":
            return {
                ...state,
                alertTraining_schedules: {
                    status : !state.alertTraining_schedules,
                    message : action.value
                }
            } 
        case "OFF_ALERT_TRAINNINGS_SCHEDULES":
            return {
                ...state,
                alertTraining_schedules: {
                    status :  false,
                    message : ''
                }
            }         
        default:
            return state
    }

}

export default Trainers
