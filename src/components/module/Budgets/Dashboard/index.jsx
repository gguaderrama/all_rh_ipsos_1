import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Fragment, Component } from "react";
import Admin from "../../../admin";
import { useStyles } from "./estilos/stylesDashboardBudgets";
import { withStyles } from "@material-ui/core/styles";
import Header from '../../../header';
import Card from '../../../commons/card'
import Paper from '@material-ui/core/Paper';
import TableDecored from '../../../commons/TableDecored';
import Chart from 'react-google-charts';
import Odometer from 'react-odometerjs';
import "odometer/themes/odometer-theme-default.css"; 
class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: this.props.datosGenerales,
      flagPush: false,
      odometerValue: 0,
      columns1: [
        { title: 'Clave', field: 'clave', type: 'numeric' },
        { title: 'Curso', field: 'curso' },
        { title: 'Nombre', field: 'nombre' },
        { title: 'Fecha', field: 'fecharegistro' },
        { title: 'Participantes', field: 'participantes' },
      ],
      data1: [
        {
          clave: '1', curso: 'Excel',
          nombre: 'Carlos Trejo', fecharegistro: '30/03/19',
          participantes: '0'
        },
        {
          clave: '2', curso: 'Excel basico',
          nombre: 'Fabiola Rojas', fecharegistro: '20/03/19',
          participantes: '0'
        },
        {
          clave: '3', curso: 'Ortografía',
          nombre: 'Carlos Trejo', fecharegistro: '14/03/18',
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
  componentDidMount() {
    this.setState({ odometerValue: 3500 });
  }
  setDataTabs(data) {
  }
  render() {
    const { classes } = this.props;
    const { odometerValue } = this.state;
    return (
      <Fragment>
        <div className="root">
          <Admin {...this.props} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Card color="title">
            </Card>
            <Paper className={classes.root}>
              <div style={{ display: 'flex', width: '100%' }}>
                <div style={{ width: '38%', height: '100%', borderStyle: 'solid', color: 'rgb(220, 215, 215)', borderTopColor: ' #00AFA9', marginRight: '2%' }}>
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
                <div style={{ width: '28%', height: '100%', borderStyle: 'solid', color: 'rgb(220, 215, 215)', borderTopColor: ' blue', marginRight: '2%' }}>
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
                <div style={{ width: '30%', height: '100%', borderStyle: 'solid', color: 'rgb(220, 215, 215)', borderTopColor: ' blue' }}>
                  <Chart
                    width={'350px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['Task', 'Hours per Day'],
                      ['Estudios aprobados', 11],
                      ['Estudios no aprobados', 2],
                      ['Estudios no ', 4],
                    ]}
                    rootProps={{ 'data-testid': '4' }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', width: '100%', marginTop: '2%' }}>
                <div style={{ width: '38%', height: '100%', }} >
                  <div style={{ display: 'flex', marginRight: '2%' }}>
                    <div style={{ width: '48%', height: '100px', borderStyle: 'solid', borderBottomColor: 'rgb(220, 215, 215)',borderRightColor: 'rgb(220, 215, 215)',borderLeftColor: 'rgb(220, 215, 215)', borderTopColor: ' #00AFA9', marginRight: '2%' }}>
                    <h1 style={{textAlign:'center',margin:'auto'}}>504</h1> 
                    <span style={{textAlign:'center'}}>Propuestas</span>
                    </div>
                    <div style={{ width: '48%', height: '100px', borderStyle: 'solid',borderBottomColor: 'rgb(220, 215, 215)',borderRightColor: 'rgb(220, 215, 215)',borderLeftColor: 'rgb(220, 215, 215)', borderTopColor: ' #3f51b5', marginRight: '2%' }}>
                    <h1 style={{textAlign:'center',margin:'auto'}}>210</h1> 
                    <span style={{textAlign:'center'}}>Estudios Cotizados</span>

                    </div>
                  </div>
                  <div style={{ display: 'flex', marginRight: '2%' }}>
                    <div style={{ width: '48%', height: '100px', borderStyle: 'solid',borderBottomColor: 'rgb(220, 215, 215)',borderRightColor: 'rgb(220, 215, 215)',borderLeftColor: 'rgb(220, 215, 215)', borderTopColor: ' #00AFA9', marginRight: '2%' }}>
                    <h1 style={{textAlign:'center',margin:'auto'}}>294</h1> 
                    <span  style={{textAlign:'center'}}>Estudios Vendidos</span>
                    </div>
                    <div style={{ width: '48%', height: '100px', borderStyle: 'solid', borderBottomColor: 'rgb(220, 215, 215)',borderRightColor: 'rgb(220, 215, 215)',borderLeftColor: 'rgb(220, 215, 215)', borderTopColor: ' #3f51b5', marginRight: '2%' }}>
                    <h1 style={{textAlign:'center',margin:'auto'}}>0</h1> 
                    <span style={{textAlign:'center'}}>Estudios Rechazados</span>
                    </div>
                  </div>
                </div>
                
                <div style={{ width: '60%', height: '100%', borderStyle: 'solid',borderBottomColor: 'rgb(220, 215, 215)',borderRightColor: 'rgb(220, 215, 215)',borderLeftColor: 'rgb(220, 215, 215)', borderTopColor: ' blue' }}>
                  <Chart
                    width={'650px'}
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
                      legend: { position: 'none' },
                    }}
                    rootProps={{ 'data-testid': '2' }}
                  />
                </div>
              </div>
              {} </Paper>
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