import api from '../../config/api.jsx'
import { URL } from '../../config/constans'
import base  from '../../config/constans/apiConfig'
export const catchError = (codigo) =>{
    return dispatch => {
        if(codigo){
            dispatch({
                type: 'ALERT_TRAINERS',
                value: "Ha ocurrido un error"
            })
        }
    }    
}
export const offAlertTrainers = () =>{
    return dispatch => {
            dispatch({
                type: 'OFF_ALERT_TRAINERS'
            })
    }    
}
export const getTrainers = () => {
    return dispatch => {
        api.get(base.urlTrainers + URL.TRAINERS.TrainersGET)
            .then(response => {
                dispatch({
                    type: 'SET_TRAINERS',
                    value: response.data
                })
            })
            .catch(err => {
            //  let codigo = err.response.status || ''
                 dispatch(catchError(400))
            })
    }
}
export const addTrainers = (data) => {
    let dataToEdit = {
       
        "name": data.name,
        "lastName": data.lastName,
        "secondLastName": data.secondLastName,
        "mandantID": data.mandantID,
        "fiscalKey": data.fiscalKey,
        "citizenIdentificator": data.citizenIdentificator,
        "phone":  data.phone,
        "email": data.email,
        "active":1,
        "trainer":{}
        
    }
    console.log(data,'esto es test')
    return dispatch => {
        api.post(base.urlTrainers + URL.TRAINERS.TrainersGET , dataToEdit)
            .then(response => {
                dispatch(getTrainers())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                 dispatch(catchError(codigo))
            })
    }
}

export const updateTrainers = (data) => {
    let dataToEdit = {
        "name": data.name,
        "lastName": data.lastName,
        "secondLastName": data.secondLastName,
        "mandantID": data.mandantID,
        "fiscalKey": data.fiscalKey,
        "citizenIdentificator": data.citizenIdentificator,
        "phone":  data.phone,
        "email": data.email,
        "trainer":{}
    }
    
    return dispatch => {
        api.put(base.urlTrainers + URL.TRAINERS.TrainersGET  + '/'+data.trainer.trainerID || 0, dataToEdit)
            .then(response => {
                dispatch(getTrainers())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}





