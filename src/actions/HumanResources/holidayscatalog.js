import api from '../../config/api.jsx'
import { URL } from '../../config/constans'
import base  from '../../config/constans/apiConfig'
export const catchError = (codigo) =>{
    return dispatch => {
        if(codigo){
            dispatch({
                type: 'ALERT_HCATALOG',
                value: "Ha ocurrido un error"
            })
        }
    }    
}
export const offAlertHcatalog = () =>{
    return dispatch => {
            dispatch({
                type: 'OFF_ALERT_HCATALOG'
            })
    }    
}
export const getHcatalog = () => {
    return dispatch => { 
        console.log(URL.HCATALOG.HcatalogGET,'ygftdrdszfdxtrfytuyu')
        api.get(base.urlHcatalog + URL.HCATALOG.HcatalogGET)
            .then(response => {
                dispatch({
                    type: 'SET_HCATALOG',
                    value: response.data
                })
            })
            .catch(err => {
            //  let codigo = err.response.status || ''
                 dispatch(catchError(400))
            })
    }
}
export const addHcatalog = (data) => {
    console.log(data, '*************************************************************')
    let dataToEdit = {
        "employeeTypeID":data.employeeType.id,
        "period": data.period,
        "active": data.active,
        "count":data.count


    }
    return dispatch => {
        api.post(base.urlHcatalog + URL.HCATALOG.HcatalogGET , dataToEdit)
            .then(response => {
                dispatch(getHcatalog())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                 dispatch(catchError(codigo))
            })
    }
}
export const updateHcatalog = (data) => {
    console.log('esta es la data que recibe', data , '**********************************')
    let dataToEdit = {
        "employeeTypeID":data.employeeType.id,
        "period": data.period,
        "active": data.active,
        "count":data.count
    }
    return dispatch => {
        api.put(base.urlHcatalog + URL.HCATALOG.HcatalogGET  +'/' + data.vacationDaysID || 0, dataToEdit)
            .then(response => {
                dispatch(getHcatalog())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}
export const deleteHcatalog = (data) => {
    return dispatch => {
        api.delete(base.urlHcatalog + URL.HCATALOG.HcatalogGET + data.id || 0)
            .then(response => {
                dispatch(getHcatalog())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}