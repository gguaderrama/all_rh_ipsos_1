import {setModule} from './translations/multilanguage'
let language = setModule()
export const lang = (param) => {
    switch(param) {
        case 'LOGIN':
          return setModule('es', 'LOGIN')
          case 'DASHBOARD':
            return setModule('es', 'DASHBOARD')
        default:
          return setModule();
      }   

}
