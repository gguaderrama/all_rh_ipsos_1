
const initialState = {
    cities: [],
    alertCitie: false
}
const Citie = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CITIE":
            return {
                ...state,
                cities: action.value
            }
        case "ALERT_CITIE":
            return {
                ...state,
                alertCitie: {
                    status : !state.alertState,
                    message : action.value
                }
            } 
        case "OFF_ALERT_CITIE":
            return {
                ...state,
                alertCitie: {
                    status :  false,
                    message : ''
                }
            }         
        default:
            return state
    }

}

export default Citie
