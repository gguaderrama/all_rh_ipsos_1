import React from 'react'
import DatosGeneralesHolidays from './Holidays'
import DatosGeneralesPermisos from './Permisos'
import DatosGeneralesTrainings from './Capacitaciones'
const tabspread = (props) => {
   return (
      [{
         tabs: [
            { name: 'VACACIONES' },
            { name: 'PERMISOS' },
            { name: 'CAPACITACIONES' },
         ],
         component: [
            { component: <DatosGeneralesHolidays {...props} /> },
            { component: <DatosGeneralesPermisos {...props} /> },
            { component: <DatosGeneralesTrainings {...props} /> },
         ]
      }]
   );
}
export default tabspread

