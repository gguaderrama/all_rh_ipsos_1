import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Component } from "react";
import { useStyles } from "./estilos/stylesStudycosts";
import Admin from "../../../admin";

import { withStyles } from "@material-ui/core/styles";
import TextFieldDecored from "../../../commons/TextFieldDecored";
import TextAreaDecored from "../../../commons/TextAreaDecored";
import DatePickerDecored from "../../../commons/DatePickerDecored";
import Header from '../../../header';
import Card from '../../../commons/card'
import * as actions from "../../../../actions";
import Button from '../../../commons/ButtonGlobal'
import TableDecored from '../../../commons/TableDecored'

class DatosGeneralesBrief extends Component {
    constructor(props) {
        super(props);
        this.state = {
          allData: this.props.datosGenerales,
          flagPush: false,
          columns: [
            { title: 'IQuote', field: 'iquote'  },
            { title: 'Estudio', field: 'estudio' },
            { title: 'Fecha de creación', field: 'fechacreacion' },
          ],
          data: [
            {
              iquote: '870570-B1', estudio: 'Bestbuy CSI Febrero-Marzo', fechacreacion: ' 03/Abril/2019 03:15 pm'
            },
            {
              iquote: '855080-A8', estudio:  'Reto Pepsi', fechacreacion: ' 5/Mayo/2019 10:45 pm'
            },
            {
              iquote: '857770-C1', estudio: 'Tiendas OXXO', fechacreacion: ' 03/Julio/2018 11:55 pm'
            },
           
          ],
        };
      }
      componentDidMount() { }
      setDataTabs(data) {
      }
  render() {
    const { allData } = this.state;
    const { classes } = this.props;
    return (
        <div className="root">
        <Admin {...this.props} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Header title="Costos de Estudio" module="RRHH" name="empleados" />
          <Card color="title">
          </Card>
        
          <TableDecored
        addButton={true}
        Allactions={true}
        title = ""
        apiRestFull = {false}
        tableData={this.state.data}
        columns={this.state.columns}
        handleOnAdd={(data) => {this.handleOn(data, 'add')}}
        handleOnUpdate={(data) => {this.handleOn(data, 'update')}}
        handleOnDelete={data => this.handleOn(data, 'delete')}
      />     
        </main>
      </div>
        
    );
  }
}
const mapStateToProps = state => {
  return {
    datosGenerales: state.datosGenerales.datos_generales,
    area_menu: state.MenuAdmin.area,
    alertArea :  state.MenuAdmin.alertArea
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    setDatosGenerales: value => dispatch(actions.datosGenerales(value)),
    area : () => dispatch(actions.getArea()),
    addArea : (data) => dispatch(actions.addArea(data)),
    updateArea :  (data) => dispatch(actions.updateArea(data)),
    deleteArea :  (data) => dispatch(actions.deleteArea(data)),
    offAlertArea :  () => dispatch(actions.offAlertArea())
    // menuAdminFuncion: value => dispatch(actions.menu_admin(value))
  };
};

// connect(mapStateToProps)

export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(DatosGeneralesBrief)));
