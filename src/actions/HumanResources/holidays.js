import api from '../../config/api.jsx'
import { URL } from '../../config/constans'


export const menu_admin = value => {
    return {
        type: "CALL_MENU",
        value: value
    }
}


export const catchError = (codigo) =>{
    return dispatch => {
        if(codigo){
            dispatch({
                type: 'ALERT_AREA',
                value: "Ha ocurrido un error"
            })

        }
    }    
}



export const offAlertArea = () =>{
    return dispatch => {
            dispatch({
                type: 'OFF_ALERT_AREA'
            })
    }    
}



export const getArea = () => {
    return dispatch => {
        api.get(URL.CATALOGOS.Area)
            .then(response => {
                dispatch({
                    type: 'SET_AREA',
                    value: response.data
                })
            })
            .catch(err => {
            //  let codigo = err.response.status || ''
                 dispatch(catchError(400))
            })
    }
}
export const addArea = (data) => {
    let dataToEdit = {
        "mandantID": 0,
        "id": 0,
        "name": data.name
    }
    return dispatch => {
        api.post(URL.CATALOGOS.Area , dataToEdit)
            .then(response => {
                dispatch(getArea())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                 dispatch(catchError(codigo))
            })
    }
}
export const updateArea = (data) => {
    let dataToEdit = {
        "mandantID": 0,
        "id": 0,
        "name": data.name
    }
    return dispatch => {
        api.put(URL.CATALOGOS.Area  + data.id || 0, dataToEdit)
            .then(response => {
                dispatch(getArea())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}
export const deleteArea = (data) => {
    return dispatch => {
        api.delete(URL.CATALOGOS.Area + data.id || 0)
            .then(response => {
                dispatch(getArea())
                console.log('en hora buena', response)
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}


