import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Fragment, Component } from "react";
import Grid from '@material-ui/core/Grid';
import Admin from "../../../../admin";
import { useStyles } from "../estilos/styleForms";
import { withStyles } from "@material-ui/core/styles";
import * as actions from "../../../../../actions";
import Typography from '@material-ui/core/Typography';
import SelectDecored from '../../../../commons/SelectDecored';
import TextFieldDecored from '../../../../commons/TextFieldDecored';
import ButtonGlobal from '../../../../commons/ButtonGlobal';
import Paper from "@material-ui/core/Paper";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Divider } from '@material-ui/core';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import Allinputs from './Allinputs';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import api from '../../../../../config/api.jsx'
class FormsCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: {estatus : 1 },
      flagPush: false,
      data: this.props.paises || [],
      openModal: false,
      dataToEdit: [],
      showdata: [],
      arrayAllinputs: [],
      idx: 0,
      allInputs: [{idLanguage : "", name : ""}],
      language: this.props.language
    };

    this.handleOn = this.handleOn.bind(this);
    this.closeDialog = this.closeDialog.bind(this)
    this.deleteRow = this.deleteRow.bind(this)
    this.handleDataInputs = this.handleDataInputs.bind(this)
  }

  handleOn(data, action) {
    let arrayPost = []
    this.state.allInputs.forEach(element => {
      let format = { ...element, active: this.state.allData.estatus || 0 }
      if (this.props.match.params && this.props.match.params.id) {
        format = { ...element, active: this.state.allData.estatus || 0, id: parseInt(this.props.match.params.id) }
      }
      arrayPost.push(format)
    });
    if (data === 'add') {
      if (this.state.allInputs.length >= 1) {
        this.props.addPais(arrayPost)
        this.props.history.push('/countrycat')
      }
    }
    if (data === 'update') {
      this.props.updatePaises(arrayPost, this.props.match.params.id)
      this.props.history.push('/countrycat')
    }
    if (data === 'delete') {
      this.props.deletePais(data)
    }
  }


  handleOnActions(data) {
    console.log('se ejecuta la actualizacion')
    console.log(this.state, 'esta es la data a editar')
    // this.props.updatePaises(this.state.dataToEdit)
  }
  handleDataInputs(data, count) {
  }
  closeDialog() {
    this.setState({
      openModal: false
    })
  }
  componentDidMount() {
    const { id } = this.props.match.params
    // this.props.getCountryByID(id)


    
    this.props.getLanguage()
  }

  componentWillMount () {
    const { id } = this.props.match.params
    // this.props.getCountryByID(id)
    if(this.props.match.params && this.props.match.params.id && this.props.match.params.id >= 1 ){
      api.get(`http://192.168.0.68:5081/api/Countries/ ${id}?show=1`+ id, {
        params: {
          show: '1'
        }
      }).then(response => {
        let formatArray = []
        if (response.data && response.data.length >= 1) {
          response.data.forEach(element => {
            let format = { idLanguage: element.language.languageID, name: element.name }
            formatArray.push(format);
          });
        }
        this.setState({
          allInputs : formatArray,
          allData : { estatus :  response.data && response.data[0] && response.data[0].active }
        })
      })
    }
  }
  handleOnChange(idx, event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    let fillValue = value;
    if (name !== 'estatus') {
      const newShareholders = this.state.allInputs.map((shareholder, sidx) => {
        if (idx !== sidx) return shareholder;
        return { ...shareholder, [name]: value };
      });
      this.setState({ allInputs: newShareholders });
      this.props.showAllPaises(newShareholders)
    } else {
      this.setState(prevState => ({
        allData: {
          // object that we want to update
          ...prevState.allData, // keep all other key-value pairs
          [name]: value // update the value of specific key
        }
      }));
    }
  }
  appendData() {
    this.setState({
      allInputs: this.state.allInputs.concat([{ idLanguage: "", name: "" }])
    });
  }
  deleteRow(idx) {
    this.setState({
      allInputs: this.state.allInputs.filter((s, sidx) => idx !== sidx)
    });
  }
  render() {
    const { classes } = this.props;
    const { allData } = this.state;
    return (
      <Fragment>
        <div className="root">
          <Admin {...this.props} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Paper className={classes.root}>
              <div style={{ display: 'flex' }}>
                <Typography variant="h6" noWrap>
                  Catalogo País
                <strong style={{ marginLeft: '10px', fontSize: '15px' }}>{this.props.countryById && this.props.countryById[0] && this.props.countryById[0].name || 'Agregar'}</strong>
                </Typography>
               
              </div>
              <div style={{ marginTop: '20px' }}>
                <SelectDecored
                  style={{ width: '25%' }}
                  name="estatus"
                  label='Estatus'
                  value={allData.estatus}
                  itemList={[{ id: 1, name: 'Activo' }, { id: 0, name: 'Inactivo' }]}
                  keySelect='id'
                  valueSelect='name'
                  handleOnChange={event => {
                    this.handleOnChange('1', event);
                  }}
                />
              </div>
              <hr style={{ marginTop: '30px', color: 'black' }} />
              {/* <div style={{ display: 'flex', marginTop: '30px' }}>
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
                />
                <TextFieldDecored
                  style={{ width: "25%", marginRight: "1%" }}
                  name="nombre_pais"
                  value={allData.nombre_pais}
                  label="Nombre del país"
                  maxLength="50"
                  readonly="true"
                  handleOnChange={event => {
                    this.handleOnChange(event);
                  }}
                />
                <AddCircleIcon style={{ color: '#3f51b5' }} onClick={() => { this.appendData() }} />
              </div> */}
              {/* <div>{this.state.showdata}</div> */}
              {this.state.allInputs.map((value, idx) => (
                <div key={idx} style={{ display: 'flex', marginTop: '0px' }}>
                  <SelectDecored
                    style={{ width: '25%', marginRight: '2%' }}
                    name="idLanguage"
                    label='Idioma'
                    value={value.idLanguage}
                    itemList={this.props.language}
                    keySelect='languageID'
                    valueSelect='description'
                    handleOnChange={event => {
                      this.handleOnChange(idx, event);
                    }}
                  />
                  <TextFieldDecored
                    style={{ width: "25%", marginRight: "1%" }}
                    name="name"
                    value={value.name}
                    label="Nombre del país"
                    maxLength="40"
                    readonly="true"
                    handleOnChange={event => {
                      this.handleOnChange(idx, event);
                    }}
                  />
                  {idx === 0 ?
                    <AddCircleIcon style={{ color: '#3f51b5' }} onClick={() => { this.appendData() }} /> :
                    <DeleteIcon style={{ color: '#FF0000' }} onClick={() => { this.deleteRow(idx) }} />
                  }
                </div>
              ))}


              <Button style={{color:'white'}}variant="contained" onClick={() => { this.props.match.params && this.props.match.params.id ? this.handleOn('update') : this.handleOn('add') }}>
                {this.props.match.params && this.props.match.params.id ? 'Editar' : 'Guardar'}
              </Button>
              <Button style={{marginLeft:'5px',color:'white',backgroundColor:'#3f51b5'}} variant="contained" onClick={() => { this.props.history.push('/countrycat') }} >
               REGRESAR
              </Button>
            </Paper>
          
          </main>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    // menu_admin: state.MenuAdmin.menu,
    alertPais: state.paises.alertPais,
    paises: state.paises.paises,
    showAllPaisesEdit :  state.paises.showAllPaisesEdit,
    countryById: state.paises.countryById,
    language: state.language.language
  };
};
const mapDispatch = (dispatch, props) => {
  // dispatch(actions.getCountryByID(props.match.params.id))
  return {
    pais: () => dispatch(actions.getPaises()),
    addPais: (data) => dispatch(actions.addPaises(data)),
    updatePaises: (data, id) => dispatch(actions.updatePaises(data, id)),
    deletePais: (data) => dispatch(actions.deletePaises(data)),
    offAlertPais: () => dispatch(actions.offAlertPaises()),
    getCountryByID: (id) => dispatch(actions.getCountryByID(id)),
    getLanguage: () => dispatch(actions.getLanguage()),
    showAllPaises: (data) => dispatch(actions.showAllPaises(data))
  };
};
export default connect(
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(FormsCatalog)));