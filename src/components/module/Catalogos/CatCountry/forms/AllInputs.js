import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Fragment, Component } from "react";
import Admin from "../../../../admin";
import { useStyles } from "../estilos/styleForms";
import { withStyles } from "@material-ui/core/styles";
import * as actions from "../../../../../actions";
import Typography from '@material-ui/core/Typography';
import SelectDecored from '../../../../commons/SelectDecored';
import TextFieldDecored from '../../../../commons/TextFieldDecored';
import Paper from "@material-ui/core/Paper";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Divider } from '@material-ui/core';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import DeleteIcon from '@material-ui/icons/Delete';
class FormsCatalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: [],
            flagPush: false,
            data: this.props.paises || [],
            openModal: false,
            dataToEdit: [],
            showdata: []
        };

        this.handleOn = this.handleOn.bind(this);
        this.closeDialog = this.closeDialog.bind(this)
        this.handleOnBlur = this.handleOnBlur.bind(this)
    }
    handleOn(data, action) {
        if (action === 'add') {
            this.props.addPais(data)
        }
        if (action === 'update') {
            this.setState({
                openModal: true,
                dataToEdit: data
            })
            // this.props.updatePais(data)
        }
        if (action === 'delete') {
            this.props.deletePais(data)
        }
    }
    handleOnBlur(){
        this.props.handleDataInputs(this.state.allData, this.props.count)
    }
    handleOnActions(data) {
        // this.props.updatePaises(this.state.dataToEdit)
    }
    closeDialog() {
        this.setState({
            openModal: false
        })
    }
    componentDidMount() {
        // const { id } = this.props.match.params
        // this.props.getCountryByID(id)
        // this.props.getLanguage()
    }
    componentWillReceiveProps(NextProps) {
        this.setState({
            data: NextProps.paises
        })
    }
    handleOnChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;
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
    appendData() {
        // let newState = Object.assign({}, this.state); 
        // newState.showdata = <div>Hola mundo 2</div>
        // this.setState(newState); 

        this.setState(prevState => ({
            showdata: [...prevState.showdata, <div>Hola mundo</div>]
        }))
    }
    render() {
        const { classes, 
        deleteRow = e => console.log("Delete Table:>", e),
        handleDataInputs =  e => console.log("AllData Inputs:>", e),
        count = 0,
        } = this.props;
        const { allData } = this.state;
        return (
            <div style={{ display: 'flex', marginTop: '0px' }}>
                <SelectDecored
                    style={{ width: '25%', marginRight: '2%' }}
                    name="idioma"
                    label='Idioma'
                    value={allData.idioma}
                    itemList={this.props.language}
                    keySelect='languageID'
                    valueSelect='description'
                    handleOnChange={event => {
                        this.handleOnChange(event);
                    }}
                    handleOnBlur ={event => {
                        this.handleOnBlur(event);
                    }}
                />
                <TextFieldDecored
                    style={{ width: "25%", marginRight: "1%" }}
                    name="nombre_pais"
                    value={allData.nombre_pais}
                    label="Nombre del país"
                    maxLength="40"
                    readonly="true"
                    handleOnChange={event => {
                        this.handleOnChange(event);
                    }}
                    handleOnBlur ={event => {
                        this.handleOnBlur(event);
                    }}
                />
                <DeleteIcon style={{ color: '#FF0000' }} onClick={() => { deleteRow(count) }} />
            </div>     
    );
    }
}
const mapStateToProps = state => {
    return {
        // menu_admin: state.MenuAdmin.menu,
        alertPais: state.paises.alertPais,
        paises: state.paises.paises,
        countryById: state.paises.countryById,
        language: state.language.language
    };
};
const mapDispatch = (dispatch, props) => {
    return {
        pais: () => dispatch(actions.getPaises()),
        addPais: (data) => dispatch(actions.addPaises(data)),
        updatePaises: (data) => dispatch(actions.updatePaises(data)),
        deletePais: (data) => dispatch(actions.deletePaises(data)),
        offAlertPais: () => dispatch(actions.offAlertPaises()),
        getCountryByID: (id) => dispatch(actions.getCountryByID(id)),
        getLanguage: () => dispatch(actions.getLanguage()),
        showAllPaises : () => dispatch(action.showAllPaises(data))
    };
};
export default connect(
    mapStateToProps,
    mapDispatch
)(withStyles(useStyles)(withTranslate(FormsCatalog)));