import api from '../../config/api.jsx'
import { URL } from '../../config/constans'
import base  from '../../config/constans/apiConfig'


export const catchError = (codigo) =>{
    return dispatch => {
        if(codigo){
            dispatch({
                type: 'ALERT_TRAININGS',
                value: "Ha ocurrido un error"
            })

        }
    }    
}

export const offAlertTrainings = () =>{
    return dispatch => {
            dispatch({
                type: 'OFF_ALERT_TRAININGS'
            })
    }    
}



export const getTrainings = () => {
    return dispatch => {
        api.get(base.urlTrainnings + URL.TRAININGS.TrainingsGET)
            .then(response => {
                dispatch({
                    type: 'SET_TRAININGS',
                    value: response.data
                })
            })
            .catch(err => {
            //  let codigo = err.response.status || ''
                 dispatch(catchError(400))
            })
    }
}


export const getTrainingSchedulebyId = (id) => {
    return dispatch => {
        api.get(base.urlTrainnings + URL.TRAININGS.TrainingsGET +'/'+ id)
            .then(response => {
                dispatch({
                    type: 'SET_TRAININGS_SCHEDULE',
                    value: response.data
                })
            })
            .catch(err => {
            //  let codigo = err.response.status || ''
                 dispatch(catchError(400))
            })
    }
}




export const addTrainings = (data) => {
    let dataToEdit = {
        "mandantID": 0,
        "id": 0,
        "name": data.name
    }
    return dispatch => {
        api.post(base.urlTrainnings +URL.TRAININGS.TrainingsGET , dataToEdit)
            .then(response => {
                dispatch(getTrainings())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                 dispatch(catchError(codigo))
            })
    }
}

export const updateTrainings = (data) => {
    let dataToEdit = {
        "mandantID": 0,
        "id": 0,
        "name": data.name
    }
    return dispatch => {
        api.put(base.urlTrainnings + URL.TRAININGS.TrainingsGET  + data.id || 0, dataToEdit)
            .then(response => {
                dispatch(getTrainings())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}



export const deleteTrainings = (data) => {
    return dispatch => {
        api.delete(base.urlTrainnings + URL.TRAININGS.TrainingsGET + data.id || 0)
            .then(response => {
                dispatch(getTrainings())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}


