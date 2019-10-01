const initialState = {
    absences: [],
    absencesPermissions: [],
    alertAbsences: false,
    absences_table: []
}

const Employees = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ABSENCES_PERMISSIONS":
            return {
                ...state,
                absencesPermissions: action.value
            }
        case "SET_ABSENCES_TABLE":
            return {
                ...state,
                absences_table: action.value
            }
        case "SET_ABSENCES":
            return {
                ...state,
                absences: action.value
            }
        case "ALERT_ABSENCES":
            return {
                ...state,
                alertAbsences: {
                    status: !state.alertAbsences,
                    message: action.value
                }
            }
        case "OFF_ALERT_ABSENCES":
            return {
                ...state,
                alertAbsences: {
                    status: false,
                    message: ''
                }
            }



        default:
            return state
    }

}

export default Employees
