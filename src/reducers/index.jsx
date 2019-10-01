import counterReducer from './counter'
import loggerReducer from './isLogged'
import { IntlReducer as Intl } from 'react-redux-multilingual'
import MenuAdmin from './admin/menu_admin'
import datosGenerales from './budgets/brief_cotizacion.js'
import datosHolidays from './ResourcesHuman/employees'
import paises from './catalogs/paises'
import state from './catalogs/state'
import cities from './catalogs/cities'
import language from './catalogs/language'
import trainning from './catalogs/trainning'
import employees from './ResourcesHuman/employees'
import trainers from './ResourcesHuman/trainers'
import trainings from './ResourcesHuman/trainings'
import training_schedules from './ResourcesHuman/training_schedules'
import absences from './ResourcesHuman/absences'
import catalogh from './ResourcesHuman/holidayscatalog'
import trainingrequest from './ResourcesHuman/trainingrequest'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    Intl,
    MenuAdmin: MenuAdmin,
    counter: counterReducer,
    loggerReducer: loggerReducer,
    datosGenerales: datosGenerales,
    datosHolidays: datosHolidays,
    paises : paises,
    state : state,
    cities : cities,
    employees:employees,
    trainers:trainers,
    training_schedules : training_schedules,
    absences : absences,
    trainings:trainings,
    training_schedules : training_schedules,
    catalogh: catalogh,
    trainingrequest:trainingrequest,
    trainingCatalog : trainning,
    language : language
})
export default allReducers