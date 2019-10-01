import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Fragment, Component } from "react";
import css from './styleemployeeee.css'
import Admin from "../../../admin";
import { useStyles } from "./stylesEmployees";
import { withStyles } from "@material-ui/core/styles";

import * as actions from "../../../../actions";
import Header from '../../../header';
import Card from '../../../commons/card'
import TableDecored from '../../../commons/TableDecored';
import Link from '@material-ui/core/Link';
class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: this.props.datosGenerales,
      flagPush: false,
      columns: [
        // { title: 'Clave', field: 'id', type: 'numeric'},
        { title: 'Nombre', field: 'name',
        render: rowData => <a href={`/rh/holidays/${rowData.id}`} >{rowData.name}</a>
        //  render: rowData => <Link to={`rh/holidays/ ${rowData.id}`} >{rowData.name}</Link>
        },
        { title: 'Apellido P', field: 'lastName'},
        { title: 'Apellido M', field: 'secondLastName'},
        { title: 'RFC', field: 'fiscalKey'},
        { title: 'CURP', field: 'citizenIdentificator'},
        {  title: 'Personal',field: 'employee.employeeTypeID',lookup: { 1: 'Nomina', 2: 'depatment1',3: 'Nomina',5: 'employee general', 6: 'employee type prueba',8:'gerente' } ,},
        { title: 'Depto/Area', field: 'employee.currentAreaID',lookup: {1028:'gerente', 1030: 'area contabilidad', 1034: 'area contabilidadgre',1041: 'rh',1043: 'finanzas', 1044: 'tra',1045:'recursos humamos',1046: 'Area 3663', 1047: 'Area 3663',1048:'jngjernjg',1049: 'prueba 1', 1050: 'test1',1051:'hrebhbhrer',1052:'rerevre',1053: 'gregregreg', 1054: 'regreg',1055:'erhgbhergbh',1056:'ew efhewf hwebf',1057: 'test4´´´´´´', 1058: 'name1',1059:'G1' ,1060:'prueba',1069: 'area estadistica', 1070: 'gerente'} ,},
        { title: 'Fecha Ingreso', field: 'employee.onboardingDate', type: "date"},
        { title: 'Fecha Baja', field: 'employee.offboardingDate', type: "date"},
      ],
      id : 0
    };
    this.handleOn = this.handleOn.bind(this)
  }
  handleOn(data, action) {
    if (action === 'add') {
      this.props.addEmployees(data, this.state.id)
    }
    if (action === 'update') {
      this.props.updateEmployees(data, this.state.id)
    }
    if (action === 'delete') {
      this.props.deleteEmployees(data, this.state.id)
    }
    // this.setState({
    //   openAdd: true
    // });
  }
  componentDidMount() { 
    this.props.getEmployees()
    const { id } = this.props.match.params
    this.setState({
      id  : id
    })
  }
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className="root">
          <Admin {...this.props} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Header title="Empleados" module="RRHH" name="empleados" />
            <Card color="title">
            </Card>
          
            <TableDecored
            style={{marginTop:'-20%'}}
            addButton={true}
            Allactions={true}
           
            apiRestFull = {true}
            tableData={this.props.employees}
            columns={this.state.columns}
            handleOnAdd={(data) => {this.handleOn(data, 'add')}}
            handleOnUpdate={(data) => {this.handleOn(data, 'update')}}
            handleOnDelete={data => this.handleOn(data, 'delete')}
          />    
          </main>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    alertEmployees: state.state.alertEmployees,
    employees: state.employees.employees,
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    getEmployees: () => dispatch(actions.getEmployees()),
    addEmployees : (data, id) => dispatch(actions.addEmployees(data, id)),
    updateEmployees : (data, id) => dispatch(actions.updateEmployees(data, id)),
    deleteEmployees : (data, id) => dispatch(actions.deleteEmployees(data, id)),
    offAlertEmployees : () => dispatch(actions.offAlertEmployees())
  };
};
// connect(mapStateToProps)
export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(Brief)));
