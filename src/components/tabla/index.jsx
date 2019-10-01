import React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon'

import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Clear from '@material-ui/icons/ArrowDownward'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import Remove from '@material-ui/icons/Remove'
import MaterialTable from 'material-table';
export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Clave', field: 'clave', type: 'numeric' },
      { title: 'Nombre', field: 'nombre' },
      { title: 'Apellido Paterno', field: 'apellidopaterno' },
      { title: 'Apellido Materno', field: 'apellidomaterno' },
      { title: 'Tipo Personal', field: 'tipopersonal' },
      { title: 'Depto/Area', field: 'deptoarea' },
      { title: 'Fecha Ingreso', field: 'fechaingreso' },
      { title: 'Fecha Baja', field: 'fechabaja' },
    ],
    data: [
      {
        clave: '1', nombre: 'Christian',
        apellidopaterno: 'Cadena', apellidomaterno: 'Mendez',
        tipopersonal: 'externo', deptoarea: 'Finanzas', fechaingreso: '18/12/1994',
        fechabaja: '20/12/1994'
      },
      {
        clave: '2', nombre: 'Baran',
        apellidopaterno: '', apellidomaterno: '',
        tipopersonal: '', deptoarea: '', fechaingreso: '',
        fechabaja: ''
      },
      {
        clave: '3', nombre: 'Baran',
        apellidopaterno: '', apellidomaterno: '',
        tipopersonal: '', deptoarea: '', fechaingreso: '',
        fechabaja: ''
      },
      {
        clave: '4', nombre: 'Baran',
        apellidopaterno: '', apellidomaterno: '',
        tipopersonal: '', deptoarea: '', fechaingreso: '',
        fechabaja: ''
      },
      {
        clave: '5', nombre: 'Baran',
        apellidopaterno: '', apellidomaterno: '',
        tipopersonal: '', deptoarea: '', fechaingreso: '',
        fechabaja: ''
      },
      {
        clave: '6', nombre: 'Baran',
        apellidopaterno: '', apellidomaterno: '',
        tipopersonal: '', deptoarea: '', fechaingreso: '',
        fechabaja: ''
      },
    ],
  });
  return (
    <div style={{ maxWidth: "100%" }}>
    <MaterialTable
    
    icons={{ 
      Check: Check,
      DetailPanel: ChevronRight,
      Clear: Clear,
      Export: SaveAlt,
      Filter: FilterList,
      FirstPage: FirstPage,
      LastPage: LastPage,
      NextPage: ChevronRight,
      PreviousPage: ChevronLeft,
      Search: Search,
      SortArrow: Clear,
     
    }}
    columns={[
      { title: 'Clave', field: 'clave',type : 'numeric' },
      { title: 'Nombre', field: 'nombre' },
      { title: 'Apellido Paterno', field: 'apellidopaterno' },
      { title: 'Apellido Materno', field: 'apellidomaterno' },
      { title: 'Tipo Personal', field: 'tipopersonal'},
      { title: 'Depto/Area', field: 'deptoarea'},
      { title: 'Fecha Ingreso', field: 'fechaingreso'},
      { title: 'Fecha Baja', field: 'fechabaja'},
    ]}
    data={[
      {clave: '1', nombre: 'Christian', 
      apellidopaterno: 'Cadena',apellidomaterno: 'Mendez',
      tipopersonal: 'externo',deptoarea: 'Finanzas',fechaingreso: '18/12/1994',
      fechabaja: '20/12/1994'  },
      { clave: '2', nombre: 'Ozram', 
      apellidopaterno: '',apellidomaterno: '',
      tipopersonal: 'interno',deptoarea: 'Ipsos',fechaingreso: '15/08/2016',
      fechabaja: ''  },
      { clave: '3', nombre: 'Mario', 
      apellidopaterno: 'Olvera',apellidomaterno: '',
      tipopersonal: 'interno',deptoarea: 'Ipsos',fechaingreso: '10/10/2009',
      fechabaja: ''  },
      { clave: '4', nombre: 'Gloria', 
      apellidopaterno: '',apellidomaterno: '',
      tipopersonal: 'interno',deptoarea: 'Ipsos',fechaingreso: '08/12/2019',
      fechabaja: ''  },
      { clave: '5', nombre: 'Luis', 
      apellidopaterno: 'Perez',apellidomaterno: '',
      tipopersonal: 'Interno',deptoarea: 'RRHH',fechaingreso: '10/11/2010',
      fechabaja: ''  },
      { clave: '6', nombre: 'Juan', 
      apellidopaterno: 'García',apellidomaterno: '',
      tipopersonal: 'interno',deptoarea: 'Ventas',fechaingreso: '25/11/2017',
      fechabaja: ''  },
    ]}   
    
    options={{
      filtering: true 
    }}
    
  />
    </div>
  );
}