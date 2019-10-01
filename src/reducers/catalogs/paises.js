
const initialState = {
    menu: '',
    paises: [],
    alertPais: false,
    countryById: [],
    showAllPaisesEdit: []
}

const MenuAdmin = (state = initialState, action) => {
    switch (action.type) {
        case "CALL_MENU":
            return {
                ...state,
                menu: action.value
            }
        case "SHOW_ALL_PAISES_EDIT":
            return {
                ...state,
                showAllPaisesEdit: action.value
            }
        case "SET_COUNTRY_BY_ID":
            return {
                ...state,
                countryById: action.value
            }
        case "SET_PAISES":
            return {
                ...state,
                paises: action.value
            }
        case "ALERT_PAIS":
            return {
                ...state,
                alertPais: {
                    status: !state.alertPais,
                    message: action.value
                }
            }
        case "OFF_ALERT_PAIS":
            return {
                ...state,
                alertPais: {
                    status: false,
                    message: ''
                }
            }



        default:
            return state
    }

}

export default MenuAdmin
