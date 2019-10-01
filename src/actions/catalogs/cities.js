import api from '../../config/api.jsx'
import { URL } from '../../config/constans'
import base  from '../../config/constans/apiConfig'

export const catchError = (codigo) =>{
    return dispatch => {
        if(codigo){
            dispatch({
                type: 'ALERT_CITIE',
                value: "Ha ocurrido un error"
            })

        }
    }    
}

export const offAlertCitie = () =>{
    return dispatch => {
            dispatch({
                type: 'OFF_ALERT_CITIE'
            })
    }    
}



export const getCitie = () => {
    return dispatch => {
        api.get(base.urlPlaces +URL.CITIES.PPAL  + 1)
            .then(response => {
                dispatch({
                    type: 'SET_CITIE',
                    value: response.data
                })
            })
            .catch(err => {
            //  let codigo = err.response.status || ''
                 dispatch(catchError(400))
            })
    }
}



export const addCitie = (data, id) => {
    let dataToEdit = {
        "provinceID": id, // valor de la provincia
        "mandantID": 0,
        "name": data.name
    }
    return dispatch => {
        api.post(base.urlPlaces +URL.CITIES.CITIES, dataToEdit)
            .then(response => {
                dispatch(getCitie())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                 dispatch(catchError(codigo))
            })
    }
}

export const updateCitie = (data, id) => {
    let dataToEdit = {
        "provinceID": id,
        "mandantID": 0,
        "name": data.name,
        "active": 1,
        "idLanguage": 0
    }
    return dispatch => {
        api.put(base.urlPlaces +URL.CITIES.CITIES  + data.id || 0, dataToEdit)
            .then(response => {
                dispatch(getCitie())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}

export const deleteCitie = (data, id) => {
    let dataToEdit = {
        "provinceID": id,
        "mandantID": 0,
        "name": data.name,
        "active": 0,
        "idLanguage": 0
    }
    return dispatch => {
        api.put(base.urlPlaces +URL.CITIES.CITIES  + data.id || 0, dataToEdit)
            .then(response => {
                dispatch(getCitie())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}




// export const deleteCitie = (data) => {
//     return dispatch => {
//         api.delete(URL.CITIES.CITIES + data.id || 0)
//             .then(response => {
//                 dispatch(getCitie())
//             })
//             .catch(err => {
//                 let codigo = err.response.status || ''
//                 dispatch(catchError(codigo))
//             })
//     }
// }


