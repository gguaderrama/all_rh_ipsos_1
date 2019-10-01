
import React from 'react'
// the `locale` parameter is mandatory, it enables react-translate to use
// the right rules for singular and plural
import config_es from './es/config_es';
import config_en from './en/config_en';
  export const  translations = {
      en: config_en,
      es: config_es
    };
    
  export const setModule = (locale = 'es', module = null) => {
    if(module !== null){
      let modules_split = module.split(',');
      const destruct = (obj, ...keys ) => 
      modules_split.reduce((a, c) => ({ ...a, [c]: obj[c] }), {});
      const subset1 = destruct(translations[locale], 'LOGIN', 'DASHBOARD');
      // const subset1 = destruct(translations[locale], 'LOGIN', 'DASHBOARD');
      return subset1
    }else{
      return  translations && translations[locale] ? translations[locale] : []
    }
  }


  
// export default translations;