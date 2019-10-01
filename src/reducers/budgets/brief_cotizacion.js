const initialState = {
    datos_generales: '',
    reporte_semanal: ''
}
const datosGenerales = (state = initialState, action) => {
    switch (action.type) {
        case "DATOS_GENERALES":
            return {
                ...state,
                datos_generales: action.value
            }
        case "REPORTE_SEMANAL":
            return {
                ...state,
                reporte_semanal: action.value
            }


        default:
            return state

    }
}
export default datosGenerales