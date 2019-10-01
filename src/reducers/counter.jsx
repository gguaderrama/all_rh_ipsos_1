
const initialState = {
    value: 1,
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                contador: action.value
            }
        case "DECREMENT":
            return state - 1;
        default:
            return state
    }

}

export default counterReducer