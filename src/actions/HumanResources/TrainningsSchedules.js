import api from '../../config/api.jsx'
import { URL } from '../../config/constans'
import base from '../../config/constans/apiConfig'
import moment from 'moment'

export const catchError = (codigo) => {
    return dispatch => {
        if (codigo) {
            dispatch({
                type: 'ALERT_TRAINNINGS_SCHEDULES',
                value: "Ha ocurrido un error"
            })

        }
    }
}

export const offAlertTraining_schedules = () => {
    return dispatch => {
        dispatch({
            type: 'OFF_ALERT_TRAINNINGS_SCHEDULES'
        })
    }
}

export const getTrainnersCombo = (d) => {
    return dispatch => {
        api.get('http://192.168.0.68:5083/api/Employee')
            .then(response => {
                let estu = response.data.map(function (f) {
                    let name = f.name || ''
                    let lastName = f.lastName || ''
                    return { [f.id]: name + ' ' + lastName }
                })
                let reduce = estu.reduce(function (result, current) {
                    return Object.assign(result, current);
                }, {})
                dispatch({
                    type: 'TRAINNING_COMBO',
                    value: [reduce]
                })
            })
            .catch(err => {
                //  let codigo = err.response.status || ''
                dispatch(catchError(400))
            })
    }
}


export const getTraining_schedules = (id) => {
    return dispatch => {
        api.get(base.urlTrainnings + URL.TRAINNINGS_SCHEDULES.TrainersSchedule + id)
            .then(response => {
                let estu = response.data.map(function (f) {
                    let name = f.person.name || ''
                    let lastName = f.person.lastName || ''
                    return { ...f, nombreCompleto: name + ' ' + lastName }
                })

                dispatch({
                    type: 'SET_TRAINNINGS_SCHEDULES',
                    value: estu
                })
            })
            .catch(err => {
                //  let codigo = err.response.status || ''
                dispatch(catchError(400))
            })
    }
}


export const updateTrainingsParticipants = (data, id) => {


    console.log(data, 'esta es la data ********************************************************++')
let capacitador = data.trainning_sh.trainerID

    if(data.capacitador !== ''){
       capacitador =  data.capacitador
    }
    let dataToEdit = {
        // "trainningID": data.trainning_sh.trainningRequestID, // curso
        "trainerID": capacitador, // capacitador
        "location": data.lugar || '',
        "startDate": moment(data.fecha1).format('YYYY-MM-DD'),
        "endDate": moment(data.fecha2).format('YYYY-MM-DD'),
        // "PersonID ": data.personID,
        "trainningScheduleEnroled" : data.persona
    }
    return dispatch => {
        api.put(base.urlTrainnings + URL.TRAININGS.TrainingsGET + '/' + id || 0, dataToEdit)
            .then(response => {
                dispatch(getTraining_schedules(id))
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}


export const getTraining_sch = (id) => {
    return dispatch => {
        api.get(base.urlTrainnings + URL.TRAINNINGS_SCHEDULES.TrainersSch + id)
            .then(response => {
                dispatch({
                    type: 'SET_TRAINNINGS_SCH',
                    value: response.data
                })
            })
            .catch(err => {
                //  let codigo = err.response.status || ''
                dispatch(catchError(400))
            })
    }
}



export const addTraining_schedules = (data, id) => {
    let dataToEdit = {
        "provinceID": id, // valor de la provincia
        "mandantID": 0,
        "name": data.name
    }
    return dispatch => {
        api.post(URL.TRAINNINGS_SCHEDULES.TrainersSchedule, dataToEdit)
            .then(response => {
                dispatch(getTraining_schedules())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}

export const updateTraining_schedules = (data, id) => {
    let dataToEdit = {
        "mandantID": 0,
        "id": 0,
        "name": data.name
    }
    return dispatch => {
        api.put(URL.TRAINNINGS_SCHEDULES.TrainersSchedule + data.id || 0, dataToEdit)
            .then(response => {
                dispatch(getTraining_schedules())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}

export const deleteTraining_schedules = (data, id) => {
    return dispatch => {
        api.delete(URL.TRAINNINGS_SCHEDULES.TrainersSchedule + data.id || 0, dataToEdit)
            .then(response => {
                dispatch(getTraining_schedules())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}


