import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Component } from "react";
import { useStyles } from "../estilos/stylebrief";
import { withStyles } from "@material-ui/core/styles";
import TextFieldDecored from "../../../commons/TextFieldDecored";
import TextAreaDecored from "../../../commons/TextAreaDecored";
import DatePickerDecored from "../../../commons/DatePickerDecored";
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
            { title: 'Plaza', field: 'plaza'  },
            { title: 'Muestra', field: 'muestra' },
            { title: 'Incidencia(%)', field: 'incidencia' },
          ],
          data: [
            {
              plaza: 'DF', muestra: ' 120'
            },
            {
              plaza: 'GDL', muestra:  '120'
            },
            {
              plaza: 'MTY', muestra: '120'
            },
            {
                plaza: 'Chihuahua', muestra: ' 120'
              },
              {
                plaza: 'Leon', muestra:  '120'
              },
              {
                plaza: 'Cuernavaca', muestra: '120'
              },
              { 
                plaza: 'Morelia', muestra: ' 120'
              },
              {
                plaza: 'Puebla', muestra:  '120'
              },
              {
                plaza: '3', muestra: '120'
              },
              {
                plaza: '1', muestra: ' 120'
              },
              {
                plaza: '2', muestra:  '120'
              },
              {
                plaza: '3', muestra: '120'
              },
              {
                plaza: '3', muestra: '120'
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
        <TableDecored
        addButton={true}
        Allactions={true}
        title = "Muestras"
        apiRestFull = {false}
        tableData={this.state.data}
        columns={this.state.columns}
        handleOnAdd={(data) => {this.handleOn(data, 'add')}}
        handleOnUpdate={(data) => {this.handleOn(data, 'update')}}
        handleOnDelete={data => this.handleOn(data, 'delete')}
      />    
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
