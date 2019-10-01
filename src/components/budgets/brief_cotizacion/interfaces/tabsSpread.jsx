import React from 'react'

import DatosGeneralesBrief from './datos_generales'
import Metodologia1 from './metodologia_1'
import Metodologia2 from './metodologia_2'
import Metodologia3 from './metodologia_3'
import Otros from './otros'
import Muestras from './muestras'
import Costos from './costos'

const tabsSpread = (props) => {
   return (
      [{
         tabs: [
            { name: 'DATOS GENERALES' },
            { name: 'METODOLOGIA 1' },
            { name: 'METODOLOGIA 2' },
            { name: 'METODOLOGIA 3' },
            { name: 'OTROS' },
            { name: 'MUESTRAS' },
            { name: 'COSTOS' }
         ],
         component: [
            { component: <DatosGeneralesBrief {...props} /> },
            { component: <Metodologia1 {...props} /> } ,
            { component:  <Metodologia2 {...props} /> },
            { component:  <Metodologia3 {...props} /> },
            { component:  <Otros {...props} /> },
            { component: <Muestras {...props} />},
            { component: <Costos {...props} />},
         ]
      }]
   );
}
export default tabsSpread