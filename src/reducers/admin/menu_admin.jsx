
const initialState = {
    menu: '',
    area: [],
    alertArea: false
}

const MenuAdmin = (state = initialState, action) => {
    switch (action.type) {
        case "CALL_MENU":
            return {
                ...state,
                menu: action.value
            }
        case "SET_AREA":
            return {
                ...state,
                area: action.value
            }
        case "ALERT_AREA":
            return {
                ...state,
                alertArea: {
                    status : !state.alertArea,
                    message : action.value
                }
            } 
        case "OFF_ALERT_AREA":
            return {
                ...state,
                alertArea: {
                    status :  false,
                    message : ''
                }
            }         
        default:
            return state
    }
}
export default MenuAdmin
