const initialState = {
    menu: '',
    employees: [],
    alertEmployees: false
}

const Employees = (state = initialState, action) => {
    switch (action.type) {
        case "CALL_MENU":
            return {
                ...state,
                menu: action.value
            }
        case "SET_EMPLOYEES":
            return {
                ...state,
                employees: action.value
            }
        case "ALERT_EMPLOYEES":
            return {
                ...state,
                alertEmployees: {
                    status : !state.alertEmployees,
                    message : action.value
                }
            } 
        case "OFF_ALERT_EMPLOYEES":
            return {
                ...state,
                alertEmployees: {
                    status :  false,
                    message : ''
                }
            }         



        default:
            return state
    }

}

export default Employees
