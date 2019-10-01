import React from "react";
// material
import { withStyles } from "@material-ui/core/styles";
import { Button, FilledInput } from '@material-ui/core';
import TextFieldDecored from "../TextFieldDecored";

import SelectDecored from "../SelectDecored";
import UploadDecored from "../UploadDecored";

import PublishIcon from '@material-ui/icons/Publish';
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./style";
import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Divider } from '@material-ui/core';

import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

class PanelSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
    // Crea una referencia para guardar el elemento textInput del DOM
  }

  handleFileSelect(e) {
    console.log(e.target.files[0]);
    this.setState({
      selectedFile: e.target.files[0]
    });
    // e.preventDefault();
    // this.fileSelector.click();
  }



  render() {
    const { classes } = this.props;
    console.log(classes, 'test')

    const ExpansionPanel = withStyles({
      root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
          borderBottom: 0,
        },
        '&:before': {
          display: 'none',
        },
        '&$expanded': {
          margin: 'auto',
        },
      },
      expanded: {},
    })(MuiExpansionPanel);

    const ExpansionPanelSummary = withStyles({
      root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
          minHeight: 56,
        },
      },
      content: {
        '&$expanded': {
          margin: '12px 0',
        },
      },

      expanded: {},
    })(MuiExpansionPanelSummary);

    return (
      <div style={this.props.openSideBar === false ? { marginLeft: '10px', width: '28%', transition: 'width 400ms ease' } : { display: 'none', transition: 'display 400ms ease' }}>
        <Paper className={classes.root}  >
          <div style={{ margin: '10px', color: 'black', fontWeight : 'bold' }}>Correo de Proveedor</div>
          <SelectDecored itemList={[{ id: '1', nombre: 'nombre' }]} keySelect='id'
            valueSelect='nombre' label="Correo" />
          <div style={{ marginTop: '35px' }}> <h4>Proveedores seleccionados</h4></div>
          <Divider></Divider>
          <ListItem>
            <ListItemText primary="Juan Mendez" />
            <IconButton className={classes.delete} edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemText primary="Juan Mendez" />
            <IconButton className={classes.delete} edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemText primary="Juan Mendez" />
            <IconButton className={classes.delete} edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItem>
          <UploadDecored
            width="60%"
            label="Subir Archivo"
            handleFileSelect={this.handleFileSelect}
            selectedFile={
              (this.state.selectedFile && this.state.selectedFile.name) || ""
            }
          />
        </Paper>
      </div>
    );
  }
}// // Dependencies
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
export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(PanelSideBar)));