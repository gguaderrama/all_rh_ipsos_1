const initialState = {
    menu: '',
    hcatalog: [],
    alertHcatalog: false
}

const Hcatalog = (state = initialState, action) => {
    switch (action.type) {
        case "CALL_MENU":
            return {
                ...state,
                menu: action.value
            }
        case "SET_HCATALOG":
            return {
                ...state,
                hcatalog: action.value
            }
        case "ALERT_HCATALOG":
            return {
                ...state,
                alertHcatalog: {
                    status : !state.alertHcatalog,
                    message : action.value
                }
            } 
        case "OFF_ALERT_HCATALOG":
            return {
                ...state,
                alertHcatalog: {
                    status :  false,
                    message : ''
                }
            }         



        default:
            return state
    }

}

export default Hcatalog