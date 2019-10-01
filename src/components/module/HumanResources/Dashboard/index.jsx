import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Fragment, Component } from "react";
import Admin from "../../../admin";
import { useStyles } from "./estilos/stylesDashboardRRHH";
import { withStyles } from "@material-ui/core/styles";
import Header from '../../../header';
import Card from '../../../commons/card'
import Paper from '@material-ui/core/Paper';
import TableDecored from '../../../commons/TableDecored';
import Chart from 'react-google-charts';
class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: this.props.datosGenerales,
      flagPush: false,
      columns1: [
        { title: 'Clave', field: 'clave', type: 'numeric' },
        { title: 'Curso', field: 'curso' },
        { title: 'Nombre', field: 'nombre' },
        { title: 'Fecha Registro', field: 'fecharegistro' },
        { title: 'Participantes', field: 'participantes' },
      ],
      data1: [
        {
          clave: '1', curso: 'Excel',
          nombre: 'Carlos Trejo', fecharegistro: '30/Marzo/19',
          participantes: '0'
        },
        {
          clave: '2', curso: 'Excel basico',
          nombre: 'Fabiola Rojas', fecharegistro: '20/Febrero/19',
          participantes: '0'
        },
        {
          clave: '3', curso: 'Ortografía',
          nombre: 'Carlos Trejo', fecharegistro: '14/Junio/18',
          participantes: '15'
        },
      ],
      columns2: [
        { title: 'Clave', field: 'clave', type: 'numeric' },
        { title: 'Nombre', field: 'nombre' },
        { title: 'Total', field: 'total' },
      ],
      data2: [
        { clave: '1', nombre: 'Carlos Trejo', total: '10' },
        { clave: '2', nombre: 'Juan Trejo', total: '7' },
        { clave: '3', nombre: 'Alejandra Jimenez', total: '6' }],
      columns3: [
        { title: 'Clave', field: 'clave', type: 'numeric' },
        { title: 'Curso', field: 'curso' },
        { title: 'Lugar', field: 'lugar' },
        { title: 'Capacitador', field: 'capacitador' },
        { title: 'Fecha', field: 'fecha' },
        { title: 'Participantes', field: 'participantes' },
      ],
      data3: [
        {
          clave: '1', curso: 'Excel',
          lugar: 'IPSOS Santa Fe', capacitador: 'Carlos Trejo',
          fecha: '20/Enero/19'
        },
      ],
    };
  }
  componentDidMount() { }
  setDataTabs(data) {
  }
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className="root">
          <Admin {...this.props} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Header title="Dashboard" />
            <Card color="title">
            </Card>
            <Paper className={classes.root}>
              <div style={{ display: 'flex', width: '100%' }}>
                <div style={{ width: '59%', height: '100%', borderStyle: 'solid', color: 'rgb(220, 215, 215)', borderTopColor: ' #00AFA9', marginRight: '2%' }}>
                  <TableDecored
                    addButton={false}
                    Allactions={false}
                    tableData={this.state.data1}
                    columns={this.state.columns1}
                    handleOnAdd={this.handleOnAdd}
                    handleOnDelete={data => this.handleOnDelete(data)}
                    paging={false}
                    filtering={false}
                    title='Estadisticas generales'
                  />
                </div>
                <div style={{ width: '39%', height: '100%', borderStyle: 'solid', color: 'rgb(220, 215, 215)', borderTopColor: ' blue' }}>
                  <TableDecored
                    addButton={false}
                    Allactions={false}
                    tableData={this.state.data2}
                    columns={this.state.columns2}
                    handleOnAdd={this.handleOnAdd}
                    handleOnDelete={data => this.handleOnDelete(data)}
                    paging={false}
                    filtering={false}
                    title='Empleados con más permisos'
                  />
                </div>
              </div>
              <div style={{ display: 'flex', width: '100%', marginTop: '2%' }}>
                <div style={{ width: '29%', height: '100%', borderStyle: 'solid', color: 'rgb(220, 215, 215)', borderTopColor: ' #00AFA9', marginRight: '2%' }}>
                  <Chart
                    width={'280px'}
                    height={'250px'}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['Año', 'Ingresos', 'Bajas'],
                      ['2019', 35, 30],
                      ['2018', 13, 20],
                      ['2017', 30, 24],

                    ]}
                    options={{
                      // Material design options
                      legend: { position: 'none' },
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '2' }}
                  />
                </div>
                <div style={{ width: '69%', height: '100%', borderStyle: 'solid', color: 'rgb(220, 215, 215)', borderTopColor: ' blue' }}>
                  <TableDecored
                    addButton={false}
                    Allactions={false}
                    tableData={this.state.data3}
                    columns={this.state.columns3}
                    handleOnAdd={this.handleOnAdd}
                    handleOnDelete={data => this.handleOnDelete(data)}
                    paging={false}
                    filtering={false}
                    title='Proximas Capacitaciones'
                  />
                </div>
              </div>
            </Paper>
          
          </main>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    // menu_admin: state.MenuAdmin.menu
  };
};

const mapDispatch = (dispatch, props) => {
  return {
    // setLanguage: event => dispatch(IntlActions.setLocale(event)),
    // menuAdminFuncion: value => dispatch(actions.menu_admin(value))
  };
};

// connect(mapStateToProps)

export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(Brief)));