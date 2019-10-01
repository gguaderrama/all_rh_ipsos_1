import api from '../../config/api.jsx'
import { URL } from '../../config/constans'
import  base from '../../config/constans/apiConfig'

export const catchError = (codigo) =>{
    return dispatch => {
        if(codigo){
            dispatch({
                type: 'ALERT_TRAINNING_CATALOG',
                value: "Ha ocurrido un error"
            })

        }
    }    
}

export const offAlertTrainning = () =>{
    return dispatch => {
            dispatch({
                type: 'OFF_ALERT_TRAINNING_CATALOG'
            })
    }    
}



export const getTrainningCatalog = () => {
    return dispatch => {
        api.get(base.urlHcatalog + URL.CATALOGOS.TrainningsCatalog)
            .then(response => {
                dispatch({
                    type: 'SET_TRAINNING_CATALOG',
                    value: response.data
                })
            })
            .catch(err => {
            //  let codigo = err.response.status || ''
                 dispatch(catchError(400))
            })
    }
}



export const addTrainningCatalog = (data, id) => {
    let dataToEdit = {
        "countryID": id,
        "mandantID": 0,
        "name": data.name
    }
    return dispatch => {
        api.post(URL.PROVINCES.PROVINCES , dataToEdit)
            .then(response => {
                dispatch(getState(id))
            })
            .catch(err => {
                let codigo = err.response.status || ''
                 dispatch(catchError(codigo))
            })
    }
}

export const updateTrainningCatalog = (data, id) => {
    let dataToEdit = {
        "mandantID": 0,
        // "id": 0,
        "name": data.name,
        "active" : 1
    }
    return dispatch => {
        api.put(URL.PROVINCES.PROVINCES  + data.id || 0, dataToEdit)
            .then(response => {
                dispatch(getState(id))
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}


export const deleteTrainningCatalog = (data, id) => {
    let dataToEdit = {
        "mandantID": 0,
        // "id": 0,
        "name": data.name,
        "active" : 0
    }
    return dispatch => {
        api.put(URL.PROVINCES.PROVINCES  + data.id || 0, dataToEdit)
            .then(response => {
                dispatch(getState(id))
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}

