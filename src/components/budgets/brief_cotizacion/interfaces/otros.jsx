import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Component } from "react";
import { useStyles } from "../estilos/stylebrief";
import { withStyles } from "@material-ui/core/styles";
import TextFieldDecored from "../../../commons/TextFieldDecored";
import TextAreaDecored from "../../../commons/TextAreaDecored";
import DatePickerDecored from "../../../commons/DatePickerDecored";
import * as actions from "../../../../actions";
import TableDecored from "../../../commons/TableDecored";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { Divider } from "@material-ui/core";
import ErrorSharpIcon from '@material-ui/icons/ErrorSharp';


import Snackbar from "../../../commons/Snackbar";

import AlertDialog from "../../../commons/Dialog";


class DatosGeneralesBrief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: this.props.datosGenerales,
      flagPush: false,
      openAdd: false,
      columns: [
        { title: "ID", field: "id", type: "numeric",  editable: 'never' },
        { title: "Name", field: "name" },
      ],
      data : this.props.area_menu || []
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOn = this.handleOn.bind(this);

    this.handleClose = this.handleClose.bind(this);
  }

  componentWillUnmount() {
    if (this.state.allData !== "") {
      // this.props.setDatosGenerales(this.state.allData);
    }
  }

  
  componentDidMount() {
    // this.props.area()
  }
  handleOnChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    console.log(name, "este es el nombre");
    console.log(value, "este es el valor");
    let fillValue = value;
    if (typeof fillValue === "string") {
      fillValue = fillValue.toUpperCase();
    }
    this.setState(prevState => ({
      allData: {
        // object that we want to update
        ...prevState.allData, // keep all other key-value pairs
        [name]: fillValue // update the value of specific key
      }
    }));
  }

  handleOnChangeDate(date, name) {
    this.setState(prevState => ({
      allData: {
        // object that we want to update
        ...prevState.allData, // keep all other key-value pairs
        [name]: date // update the value of specific key
      }
    }));
  }

  handleOnDelete(data) {
    if (data.id >= 1) {
      this.setState({
        tableData: this.state.tableData.filter(function(t) {
          return t.id !== data.id;
        })
      });
    }
  }
  handleOn(data, action) {
    if(action === 'add'){
      this.props.addArea(data)
    }
    if(action === 'update'){
      this.props.updateArea(data)
    }
    if(action === 'delete'){
      this.props.deleteArea(data)
    }
    // this.setState({
    //   openAdd: true
    // });
  }


  handleClose() {
    this.setState({
      openAdd: false
    });
    // setOpen(false);
  }



  openFileDialog() {
    var fileInputDom = ReactDOM.findDOMNode(this.refs.input);
    fileInputDom.click();
  }
  

  render() {
    const { allData } = this.state;
    const { classes } = this.props;
    return (
      <div style={{ width: "100%" }}>
       {/* <AlertDialog title = "ERROR"  message = "Ocurrió un error en el sistema" 
       open = {this.props.alertArea && this.props.alertArea.status }  
       handleCloseDialog = {this.props.offAlertArea}/> */}
        <br />
      
        <div style={{ width: "98%", float: "right" }}>
          <TextAreaDecored
            style={{ width: "100%", marginRight: "3%" }}
            label="Cuotas"
            name="cuotas"
            value={allData.cuotas}
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
            value={allData.cuotas}
            maxLength="40"
            rows={2}
          />
          <TextAreaDecored
            style={{ width: "100%", marginRight: "3%" }}
            name="observaciones"
            value={allData.observaciones}
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
            label="Observaciones"
            rows={2}
          />
        </div>
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
