
const initialState = {
    language: [],
    alertCitie: false
}
const Language = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LANGUAGE":
            return {
                ...state,
                language: action.value
            }
         default:
            return state
    }

}

export default Language
