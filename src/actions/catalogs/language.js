import api from '../../config/api.jsx'
import { URL } from '../../config/constans'
import base  from '../../config/constans/apiConfig'

export const catchError = (codigo) =>{
    return dispatch => {
        if(codigo){
            dispatch({
                type: 'ALERT_PAISES',
                value: "Ha ocurrido un error"
            })

        }
    }    
}

export const offAlertPaises = () =>{
    return dispatch => {
            dispatch({
                type: 'OFF_ALERT_PAISES'
            })
    }    
}



export const getLanguage = () => {
    return dispatch => {
        // api.get(base.IP_1 +URL.LANGUAGE.language)
        api.get('http://qacg.agile-qa.com:35082/api/Language')
            .then(response => {
                dispatch({
                    type: 'SET_LANGUAGE',
                    value: response.data
                })
            })
            .catch(err => {
            //  let codigo = err.response.status || ''
                 dispatch(catchError(400))
            })
    }
}



export const addPaises = (data) => {
    let dataToEdit = {
        "mandantID": 0,
        "id": 0,
        "name": data.name
    }
    return dispatch => {
        api.post(base.urlPlaces +URL.PAISES.CountriesGET , dataToEdit)
            .then(response => {
                dispatch(getPaises())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                 dispatch(catchError(codigo))
            })
    }
}
export const updatePaises = (data) => {
    let dataToEdit = {
        "mandantID": 0,
        "id": 0,
        "name": data.name,
        "active" : 1
    }
    return dispatch => {
        api.put(base.urlPlaces +URL.PAISES.CountriesGET  + data.id || 0, dataToEdit)
            .then(response => {
                dispatch(getPaises())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}
export const deletePaises = (data) => {
    let dataToEdit = {
        "mandantID": 0,
        "id": 0,
        "name": data.name,
        "active" : 0
    }
    return dispatch => {
        api.put(base.urlPlaces +URL.PAISES.CountriesGET  + data.id || 0, dataToEdit)
            .then(response => {
                dispatch(getPaises())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}



