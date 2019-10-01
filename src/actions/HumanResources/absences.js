import api from '../../config/api.jsx'
import { URL } from '../../config/constans'
import moment from 'moment'




const URL_dinamic = 'http://192.168.0.68:5083'
export const catchError = (codigo) =>{
    return dispatch => {
        if(codigo){
            dispatch({
                type: 'ALERT_ABSENCES',
                value: "Ha ocurrido un error"
            })

        }
    }    
}

export const offAlertAbsences = () =>{
    return dispatch => {
            dispatch({
                type: 'OFF_ALERT_ABSENCES'
            })
    }    
}



export const getAbsences = (id) => {
    return dispatch => {
        api.get(URL_dinamic + URL.ABSENCES.AbsencesGET + '1/' +id)
            .then(response => {
                dispatch({
                    type: 'SET_ABSENCES',
                    value: response.data
                })
            })
            .catch(err => {
            //  let codigo = err.response.status || ''
                 dispatch(catchError(400))
            })
    }
}


export const getAbsencesTable = (EmployeeID, Period,tipo=1) => {
    console.log(EmployeeID , 'este es el empleas', tipo )
    return dispatch => {
        api.get(URL_dinamic + URL.ABSENCES.AbsencesGET + tipo+'/' +EmployeeID +'/' + Period)
            .then(response => {
                if(Period !== 0){
                    dispatch({
                        type: 'SET_ABSENCES_TABLE',
                        value: response.data
                    })
                }
                if(Period === 0){
                    dispatch({
                        type: 'SET_ABSENCES_PERMISSIONS',
                        value: response.data
                    })
                }
            })
            .catch(err => {
            //  let codigo = err.response.status || ''
                 dispatch(catchError(400))
            })
    }
}



// Tipo especifica si es Vacaciones o permiso
export const addAbsences = (data, id, periodo, tipo = 1) => {
    // el tipo 
    let Add = {
        "EmployeeID": id,
        "requesterID": 1,
        "StartDate": moment(data.startDate).format('YYYY-MM-DD'),
        "EndDate": moment(data.endDate).format('YYYY-MM-DD'),
        "AbsenceType": tipo,
        "period" : tipo === 1 ? periodo : 0
    }
     return dispatch => {
        api.post('http://192.168.0.68:5083/api/Absences', Add)
            .then(response => {
                console.log(id, 'este es el ID ')
                dispatch(getAbsencesTable(id, periodo, tipo === 1 ? tipo : 2))
            })
            .catch(err => {
                let codigo = err.response.status || ''
                 dispatch(catchError(codigo))
            })
    }
}
// Tipo especifica si es Vacaciones o permiso
export const updateAbsences = (data, id, periodo, tipo = 1 ) => {
    let Add = {
        "EmployeeID": id,
        "requesterID": 1,
        "StartDate": moment(data.startDate).format('YYYY-MM-DD'),
        "EndDate": moment(data.endDate).format('YYYY-MM-DD'),
        "AbsenceType": tipo,
        "period" : tipo === 1 ? periodo : 0
    }
    return dispatch => {
        api.put('http://192.168.0.68:5083/api/Absences/' + data.absenceRequestID || 0, Add)
            .then(response => {
                dispatch(getAbsencesTable(id, periodo, tipo === 1 ? tipo : 2))
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}


export const deleteAbsences = (data) => {
    return dispatch => {
        api.delete('http://192.168.0.68:5083'.ABSENCES.AbsencesGET + data.id || 0)
            .then(response => {
                dispatch(getAbsences())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}


