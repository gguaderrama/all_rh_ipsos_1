import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Component } from "react";
import { useStyles } from "../estilos/stylebrief";
import { withStyles } from "@material-ui/core/styles";
import TextFieldDecored from "../../../commons/TextFieldDecored";
import TextAreaDecored from "../../../commons/TextAreaDecored";
import CheckboxDecored from "../../../commons/CheckboxDecored";
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


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Typography } from '@material-ui/core';

class Metodologia1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: this.props.datosGenerales,
            flagPush: false,
            openAdd: false,
            columns: [
                { title: "ID", field: "id", type: "numeric", editable: 'never' },
                { title: "Name", field: "name" },
            ],
            data: this.props.area_menu || []
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
                tableData: this.state.tableData.filter(function (t) {
                    return t.id !== data.id;
                })
            });
        }
    }
    handleOn(data, action) {
        if (action === 'add') {
            this.props.addArea(data)
        }
        if (action === 'update') {
            this.props.updateArea(data)
        }
        if (action === 'delete') {
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
            <div style={{ width: "100%", display: 'flex' }}>
                {/* <AlertDialog title = "ERROR"  message = "Ocurrió un error en el sistema" 
       open = {this.props.alertArea && this.props.alertArea.status }  
       handleCloseDialog = {this.props.offAlertArea}/> */}
                <br />
                <div style={{ width: "30%", marginRight: "3%" }}>
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}> Metodología </div>
                    <Divider style={{ marginBottom: "3%" }} />
                    <TextFieldDecored
                        style={{ width: "100%", marginRight: "3%" }}
                        name="incidencia"
                        value={allData.incidencia}
                        label="Incidencia"
                        maxLength="40"
                        readonly="true"
                        handleOnChange={event => {
                            this.handleOnChange(event);
                        }}
                    />
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}> Tipo de entrevista </div>
                    <Divider style={{ marginBottom: "3%" }} />
                    <div style={{ display: 'flex' }}>
                        <ListItemText
                            disableTypography
                            primary={<Typography type="body2" style={{ fontSize: '14px', textAlign: 'left' }}>Cara a Cara (En papel )</Typography>}
                        />
                        <CheckboxDecored
                            edge="end"
                        />
                    </div>
                    <Divider />
                    <div style={{ display: 'flex' }}>
                        <ListItemText
                            disableTypography
                            primary={<Typography type="body2" style={{ fontSize: '14px', textAlign: 'left' }}>Cara a Cara (CAPI)</Typography>}
                        />
                        <CheckboxDecored
                            edge="end"
                        />
                    </div>
                    <Divider />
                    <div style={{ display: 'flex' }}>
                        <ListItemText
                            disableTypography
                            primary={<Typography type="body2" style={{ fontSize: '14px', textAlign: 'left' }}>Cara a Cara (Hand Held)</Typography>}
                        />
                        <CheckboxDecored
                            edge="end"
                        />
                    </div>
                    <Divider />
                    <div style={{ display: 'flex' }}>
                        <ListItemText
                            disableTypography
                            primary={<Typography type="body2" style={{ fontSize: '14px', textAlign: 'left' }}>Tablets</Typography>}
                        />
                        <CheckboxDecored
                            edge="end"
                        />
                    </div>
                    <Divider />
                    <div style={{ display: 'flex' }}>
                        <ListItemText
                            disableTypography
                            primary={<Typography type="body2" style={{ fontSize: '14px', textAlign: 'left' }}>Programación</Typography>}
                        />
                        <CheckboxDecored
                            edge="end"
                        />
                    </div>
                    <Divider />
                    <div style={{ display: 'flex' }}>
                        <ListItemText
                            disableTypography
                            primary={<Typography type="body2" style={{ fontSize: '14px', textAlign: 'left' }}>Procesamiento</Typography>}
                        />
                        <CheckboxDecored
                            edge="end"
                        />
                    </div>
                    <Divider />
                </div>
                <div style={{ width: "30%", marginRight: "3%" }}>
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}> Set Up Surveys </div>
                    <Divider style={{ marginBottom: "3%" }} />
                    <div style={{ display: 'flex' }}>
                        <ListItemText
                            disableTypography
                            primary={<Typography type="body2" style={{ fontSize: '14px', textAlign: 'left' }}>Duración de la entrevista</Typography>}
                        />
                        <TextFieldDecored
                            style={{ width: "20%" }}
                            name="director"
                            value={allData.director}
                            handleOnChange={event => {
                                this.handleOnChange(event);
                            }}
                            value={allData.director}
                            maxLength="40"
                        />
                    </div>
                    <Divider />
                    <div style={{ display: 'flex' }}>
                        <ListItemText
                            disableTypography
                            primary={<Typography type="body2" style={{ fontSize: '14px', textAlign: 'left' }}>Duración de la entrevista</Typography>}
                        />
                        <TextFieldDecored
                            style={{ width: "20%", marginTop : "2%" }}
                            name="director"
                            value={allData.director}
                            handleOnChange={event => {
                                this.handleOnChange(event);
                            }}
                            value={allData.director}
                            maxLength="40"
                        />
                    </div>
                    <Divider />
                    <div style={{ display: 'flex' }}>
                        <ListItemText
                            disableTypography
                            primary={<Typography type="body2" style={{ fontSize: '14px', textAlign: 'left' }}>Duración de la entrevista</Typography>}
                        />
                        <TextFieldDecored
                            style={{ width: "20%" , marginTop : "2%"}}
                            name="director"
                            value={allData.director}
                            handleOnChange={event => {
                                this.handleOnChange(event);
                            }}
                            value={allData.director}
                            maxLength="40"
                        />
                    </div>
                    <Divider />
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}> Number of day in Field </div>
                    <Divider style={{ marginBottom: "3%" }} />

                    <div style={{ display: 'flex' }}>
                        <ListItemText
                            disableTypography
                            primary={<Typography type="body2" style={{ fontSize: '14px', textAlign: 'left' }}>Duración de la entrevista</Typography>}
                        />
                        <TextFieldDecored
                            style={{ width: "20%"}}
                            name="director"
                            value={allData.director}
                            handleOnChange={event => {
                                this.handleOnChange(event);
                            }}
                            value={allData.director}
                            maxLength="40"
                        />
                    </div>



                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}> Special quata or compre</div>
                    <Divider style={{ marginBottom: "3%" }} />
                    
                    <div style={{ display: 'flex' }}>
                        <ListItemText
                            disableTypography
                            primary={<Typography type="body2" style={{ fontSize: '14px', textAlign: 'left' }}>Duración de la entrevista</Typography>}
                        />
                        <TextFieldDecored
                            style={{ width: "20%" ,  marginTop : "2%"}}
                            name="director"
                            value={allData.director}
                            handleOnChange={event => {
                                this.handleOnChange(event);
                            }}
                            value={allData.director}
                            maxLength="40"
                        />
                    </div>


                    <div style={{ display: 'flex' }}>
                        <ListItemText
                            disableTypography
                            primary={<Typography type="body2" style={{ fontSize: '14px', textAlign: 'left' }}>Duración de la entrevista</Typography>}
                        />
                        <TextFieldDecored
                            style={{ width: "20%" ,  marginTop : "2%"}}
                            name="director"
                            value={allData.director}
                            handleOnChange={event => {
                                this.handleOnChange(event);
                            }}
                            value={allData.director}
                            maxLength="40"
                        />
                    </div>



                    <TextAreaDecored
                        style={{ width: "100%", marginRight: "3%" }}
                        name="poblacion_objetivos"
                        value={allData.poblacion_objetivos}
                        handleOnChange={event => {
                            this.handleOnChange(event);
                        }}
                        value={allData.poblacion_objetivos}
                        label="Adicional Procesamiento"
                        rows={2}
                    />
                 </div>
                <div style={{ width: "30%", float: "right" }}>
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}> Metodology Sample Types </div>
                    <Divider style={{ marginBottom: "3%" }} />
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}> Lugares de la entrevista </div>
                    <Divider style={{ marginBottom: "3%" }} />
                    <div style={{ display: 'flex' }}>
                        <ListItemText
                            disableTypography
                            primary={<Typography type="body2" style={{ fontSize: '14px', textAlign: 'left' }}>Lugares</Typography>}
                        />
                        <CheckboxDecored
                            edge="end"
                        />
                    </div>
                    <Divider />
                    <div style={{ display: 'flex' }}>
                        <ListItemText
                            disableTypography
                            primary={<Typography type="body2" style={{ fontSize: '14px', textAlign: 'left' }}>Empresas</Typography>}
                        />
                        <CheckboxDecored
                            edge="end"
                        />
                    </div>
                    <Divider />
                    <div style={{ display: 'flex' }}>
                        <ListItemText
                            disableTypography
                            primary={<Typography type="body2" style={{ fontSize: '14px', textAlign: 'left' }}>CLT/ Salon </Typography>}
                        />
                        <CheckboxDecored
                            edge="end"
                        />
                    </div>
                    <Divider />
                    <div style={{ display: 'flex' }}>
                        <ListItemText
                            disableTypography
                            primary={<Typography type="body2" style={{ fontSize: '14px', textAlign: 'left' }}>Otro</Typography>}
                        />
                        <CheckboxDecored
                            edge="end"
                        />
                    </div>
                    <Divider />
                    <div style={{ display: 'flex' }}>
                        <ListItemText
                            disableTypography
                            primary={<Typography type="body2" style={{ fontSize: '14px', textAlign: 'left' }}>Cara a Cara (CAPI)</Typography>}
                        />
                        <CheckboxDecored
                            edge="end"
                        />
                    </div>
                    <Divider />
                    <TextAreaDecored
                        style={{ width: "100%", marginRight: "3%" }}
                        label="Otro/ Especifique"
                        name="objetivos"
                        value={allData.objetivos}
                        handleOnChange={event => {
                            this.handleOnChange(event);
                        }}
                        value={allData.objetivos}
                        maxLength="40"
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
        alertArea: state.MenuAdmin.alertArea
    };
};
const mapDispatch = (dispatch, props) => {
    return {
        setDatosGenerales: value => dispatch(actions.datosGenerales(value)),
        area: () => dispatch(actions.getArea()),
        addArea: (data) => dispatch(actions.addArea(data)),
        updateArea: (data) => dispatch(actions.updateArea(data)),
        deleteArea: (data) => dispatch(actions.deleteArea(data)),
        offAlertArea: () => dispatch(actions.offAlertArea())
        // menuAdminFuncion: value => dispatch(actions.menu_admin(value))
    };
};

// connect(mapStateToProps)

export default connect(
    // { ...actions },
    mapStateToProps,
    mapDispatch
)(withStyles(useStyles)(withTranslate(Metodologia1)));
