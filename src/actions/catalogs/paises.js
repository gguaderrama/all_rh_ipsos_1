import api from '../../config/api.jsx'
import { URL } from '../../config/constans'
import base from '../../config/constans/apiConfig'
import { element } from 'prop-types'

export const catchError = (codigo) => {
    return dispatch => {
        if (codigo) {
            dispatch({
                type: 'ALERT_PAISES',
                value: "Ha ocurrido un error"
            })

        }
    }
}

export const offAlertPaises = () => {
    return dispatch => {
        dispatch({
            type: 'OFF_ALERT_PAISES'
        })
    }
}

export const showAllPaises = (data) => {
    return dispatch => {
        dispatch({
            type: 'SHOW_ALL_PAISES_EDIT',
            value : data
        })
    }
}



export const getPaises = () => {
    return (dispatch, getState) => {
        api.get(base.urlPlaces + URL.PAISES.CountriesGET)
            .then(response => {
                dispatch({
                    type: 'SET_PAISES',
                    value: response.data
                })
            })
            .catch(err => {
                //  let codigo = err.response.status || ''
                dispatch(catchError(400))
            })
    }
}



export const getCountryByID = (id) => {
    return (dispatch) => {
        api.get(base.urlPlaces + URL.PAISES.CountriesGET + id, {
            params: {
                show: '1'
            }
        }).then(response => {
                let formatArray = []
                if (response.data && response.data.length >= 1) {
                    response.data.forEach(element => {
                        let format = { idLanguage: element.language.languageID, name: element.name }
                        formatArray.push(format);
                    });
                }
                dispatch({
                    type: 'SET_COUNTRY_BY_ID',
                    value: formatArray
                })
            })
            .catch(err => {
                //  let codigo = err.response.status || ''
                dispatch(catchError(400))
            })
    }
}



export const addPaises = (data) => {
    return dispatch => {
        api.post(base.urlPlaces + URL.PAISES.CountriesGET, data)
            .then(response => {
                dispatch(getPaises())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}
export const updatePaises = (data, id) => {
    return dispatch => {
        api.put(base.urlPlaces + URL.PAISES.CountriesGET + id || 0, data)
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
        "active": 0
    }
    return dispatch => {
        api.put(base.urlPlaces + URL.PAISES.CountriesGET + data.id || 0, dataToEdit)
            .then(response => {
                dispatch(getPaises())
            })
            .catch(err => {
                let codigo = err.response.status || ''
                dispatch(catchError(codigo))
            })
    }
}

