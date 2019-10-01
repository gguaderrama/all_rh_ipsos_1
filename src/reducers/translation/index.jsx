
const initialState = {
    initialLang: '',
}

const translateConfig = (state = initialState, action) => {
    switch (action.type) {
        case "INITIAL_LANG":
            return {
                ...state,
                lang: action.value
            }
        default:
            return state
    }

}

export default translateConfig