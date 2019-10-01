import api from '../../config/api.jsx'
import { URL } from '../../config/constans'
import base  from '../../config/constans/apiConfig'
import moment from 'moment'
export const catchError = (codigo) =>{
    return dispatch => {
        if(codigo){
            dispatch({
                type: 'ALERT_EMPLOYEES',
                value: "Ha ocurrido un error"
            })

        }
    }    
}

export const offAlertEmployees = () =>{
    return dispatch => {
            dispatch({
                type: 'OFF_ALERT_EMPLOYEES'
            })
    }    
}



export const getEmployees = () => {
    return dispatch => {
        api.get(base.urlEmployees + URL.EMPLOYEES.EmployeesGET)
            .then(response => {
                dispatch({
                    type: 'SET_EMPLOYEES',
                    value: response.data
                })
            })
            .catch(err => {
            //  let codigo = err.response.status || ''
                 dispatch(catchError(400))
            })
    }
}



export const addEmployees = (data) => {
    let dataToEdit = {
        "mandantID": 0,
        "name": data.name,
        "lastName":data.lastName,
        "secondLastName":data.secondLastName,
        "fiscalKey":data.fiscalKey,
        "citizenIdentificator":data.citizenIdentificator,
        "employee":{  
            "employeeTypeID":data.employee.employeeTypeID,
            "currentAreaID":data.employee.currentAreaID,
            "onboardingDate":moment(data.employee.onboardingDate).format('YYYY-MM-DD'),
            "offboardingDate":moment(data.employee.offboardingDate).format('YYYY-MM-DD')
        }

        
    }
    return dispatch => {
        api.post(base.urlEmployees + URL.EMPLOYEES.EmployeesGET , dataToEdit)
            .then(response => {
                console.log(response,'recretgefrderf5tgefrdew')
                dispatch(getEmployees())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                 dispatch(catchError(codigo))
            })
    }
}

export const updateEmployees = (data) => {
 
 
    let dataToEdit = {
        "mandantID": 0,
        "name": data.name,
        "lastName":data.lastName,
        "secondLastName":data.secondLastName,
        "fiscalKey":data.fiscalKey,
        "citizenIdentificator":data.citizenIdentificator,
        "employee":{  
            "employeeTypeID":data.employee.employeeTypeID,
            "currentAreaID":data.employee.currentAreaID,
            "onboardingDate":moment(data.employee.onboardingDate).format('YYYY-MM-DD'),
            "offboardingDate":moment(data.employee.offboardingDate).format('YYYY-MM-DD'),
        }
    }

    console.log(dataToEdit,'uuuuuuuuuuuu')
    return dispatch => {
        api.put(base.urlEmployees + URL.EMPLOYEES.EmployeesGET  +'/'+ data.employee.id || 0, dataToEdit)
            .then(response => {
                dispatch(getEmployees())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}


export const deleteEmployees = (data) => {
    return dispatch => {
        api.delete(base.urlEmployees + URL.EMPLOYEES.EmployeesGET + data.id || 0)
            .then(response => {
                dispatch(getEmployees())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}


