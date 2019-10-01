import api from '../../config/api.jsx'
import { URL } from '../../config/constans'
import base  from '../../config/constans/apiConfig'

export const catchError = (codigo) =>{
    return dispatch => {
        if(codigo){
            dispatch({
                type: 'ALERT_STATE',
                value: "Ha ocurrido un error"
            })

        }
    }    
}

export const offAlertState = () =>{
    return dispatch => {
            dispatch({
                type: 'OFF_ALERT_STATE'
            })
    }    
}



export const getState = (id) => {
    return dispatch => {
        api.get(base.urlStates + URL.PROVINCES.PPAL  + id)
            .then(response => {
                dispatch({
                    type: 'SET_STATE',
                    value: response.data
                })
            })
            .catch(err => {
            //  let codigo = err.response.status || ''
                 dispatch(catchError(400))
            })
    }
}



export const addState = (data, id) => {
    let dataToEdit = {
        "countryID": id,
        "mandantID": 0,
        "name": data.name
    }
    return dispatch => {
        api.post(base.urlStates + URL.PROVINCES.PROVINCES , dataToEdit)
            .then(response => {
                dispatch(getState(id))
            })
            .catch(err => {
                let codigo = err.response.status || ''
                 dispatch(catchError(codigo))
            })
    }
}

export const updateState = (data, id) => {
    let dataToEdit = {
        "mandantID": 0,
        // "id": 0,
        "name": data.name,
        "active" : 1
    }
    return dispatch => {
        api.put(base.urlStates + URL.PROVINCES.PROVINCES  + data.id || 0, dataToEdit)
            .then(response => {
                dispatch(getState(id))
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}


export const deleteState = (data, id) => {
    let dataToEdit = {
        "mandantID": 0,
        // "id": 0,
        "name": data.name,
        "active" : 0
    }
    return dispatch => {
        api.put(base.urlStates + URL.PROVINCES.PROVINCES  + data.id || 0, dataToEdit)
            .then(response => {
                dispatch(getState(id))
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}



// export const deleteState = (data) => {
//     return dispatch => {
//         api.delete(URL.PROVINCES.PROVINCES + data.id || 0)
//             .then(response => {
//                 dispatch(getState())
//             })
//             .catch(err => {
//                 let codigo = err.response.status || ''
//                 dispatch(catchError(codigo))
//             })
//     }
// }


