import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from '@material-ui/core/Typography';

import SelectDecored from '../../commons/SelectDecored';
import TextFieldDecored from "../../commons/TextFieldDecored";

import * as actions from "../../../actions";
import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
class AlertDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData : []
    };
  }


  componentDidMount() {
    this.props.getLanguage()
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
  render() {
    const { allData } = this.state;
    const {
      title = "MODIFICAR PAÍS",
      message = "Usa vez que seleccione OK no podrá recuperarlo",
      handleOnDelete = e => console.log("On click Alert:>", e),
      handleCloseDialog = e => console.log("Cierre modal:>", e),
      handleOnUpdate = e => console.log("Update:>", e),
      open = false,
      data = []
    } = this.props;
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleCloseDialog}
          disableBackdropClick={true}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          style={{ backgroundColor: '#9B9999', opacity: '0.90' }}
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <TextFieldDecored
              style={{ width: '48%' }}
              // variant= "filled"
              name="nombre_pais"
              value={allData.nombre_pais || data.name}
              label={"Nombre del País"}
              maxLength="40"
              label = "Nombre Pais"
              handleOnChange={event => {
                this.handleOnChange(event);
              }}

            />
            <SelectDecored
              style={{ marginLeft: '4%', width: '48%' }}
              name="estatus"
              label='Estatus'
              value={allData.estatus || data.active} itemList={[{ id: 1, name: 'Activo' }, { id: 0, name: 'Inactivo' }]}
              keySelect='id'
              valueSelect='name'
              handleOnChange={event => {
                this.handleOnChange(event);
              }}
            />
            <Typography variant="h3" noWrap>
              Traducción de Catalogo
          </Typography>
            <SelectDecored
              style={{ width: '48%', marginRight: '4%', marginTop: '5%' }}
              name="language"
              label='Seleccione lenguaje '
              value={allData.language || ''}
              itemList={this.props.language}
              keySelect='languageID'
              valueSelect='description'
              handleOnChange={event => {
                this.handleOnChange(event);
              }}
            />
            <TextFieldDecored
              style={{ width: '48%', marginTop: '5%' }}
              // variant= "filled"
              name="variable"
              value={allData.variable}
              label="Nombre del pais language"
              maxLength="40"
              handleOnChange={event => {
                this.handleOnChange(event);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              style={{ background: 'green' }}
              onClick={handleOnUpdate}
              variant="contained"
              color="secondary"

            >
              GUARDAR
          </Button>
            <Button
              style={{ background: 'red' }}
              onClick={handleCloseDialog}
              variant="contained"
              color="primary"
            >
              CANCELAR
          </Button>
           
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    language: state.language.language
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    getLanguage: () => dispatch(actions.getLanguage()),
  };
};
// connect(mapStateToProps)
export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)((withTranslate(AlertDialog)));









