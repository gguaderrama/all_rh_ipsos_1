import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Fragment, Component } from "react";
import Admin from "../../../admin";
import { useStyles } from "./estilos/stylesCountry";
import { withStyles } from "@material-ui/core/styles";
import Header from '../../../header';
import Card from '../../../commons/card'
import Button from "@material-ui/core/Button";

import TableDecored from '../../../commons/TableDecored';
import * as actions from "../../../../actions";
import { Link } from "react-router-dom";
import SelectDecored from '../../../commons/SelectDecored';
import DialogAddCountry from '../../../commons/DialogAddCountry';
class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: this.props.datosGenerales,
      flagPush: false,
      columns: [
        {
          field: 'name',
          Title: 'Avatar',
        },
        {
          field: 'active',
          Title: 'Avatar',
          lookup: { 1: 'ACTIVO', 0: 'INACTIVO' },
        }

      ],
      data: this.props.paises || [],
      openModal: false,
      dataToEdit: []
    };
    this.handleOn = this.handleOn.bind(this);
    this.closeDialog = this.closeDialog.bind(this)
  }

  handleOn(data, action) {
    if (action === 'add') {
      this.props.addPais(data)
    }
    if (action === 'update') {
      console.log('esta es la data', data)
      // this.setState({
      //   openModal: true,
      //   dataToEdit: data
      // })
      this.props.history.push('/country/'+data.id)
      // this.props.updatePais(data)
    }
    if (action === 'delete') {
      this.props.deletePais(data)
    }
  }

  handleOnActions(data) {
    console.log('se ejecuta la actualizacion')
    console.log(this.state, 'esta es la data a editar')
    // this.props.updatePaises(this.state.dataToEdit)
  }
  closeDialog() {
    this.setState({
      openModal: false
    })
  }
  componentDidMount() {
    this.props.pais()
  }

  componentWillReceiveProps(NextProps) {
    this.setState({
      data: NextProps.paises
    })
  }

  render() {
    console.log(this.props.paises.data, 'estos son los paises')
    const { classes } = this.props;
    const { allData } = this.state;
    return (
      <Fragment>
        <div className="root">
          <Admin {...this.props} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Header title="" module="Catalogos" name="País" />
            <Card color="title">
            </Card>
            {/* <SelectDecored
              style={{margin:'0' ,zIndex:'2', marginLeft: '62%', width: '20%',height:'' }}
             
              label='Estatus'
             
            /> */}
            <DialogAddCountry
              open={this.state.openModal}
              handleCloseDialog={this.closeDialog}
              data={this.state.dataToEdit}
              handleOnUpdate={() => { this.handleOnUpdate() }}
            />
          <Button style={{ margin: '0', marginTop: '1%', marginRight: '1%', float: 'right', zIndex: '1' }} variant="contained" color="secondary" onClick={() => {this.props.history.push('/country')}}>
              AGREGAR
          </Button>
            <TableDecored
              addButton={false}
              onlyEditDelete={true}
              title="Paises"
              apiRestFull={true}
              tableData={this.props.paises.data}
              columns={this.state.columns}
              handleOnAdd={(data) => { this.handleOn(data, 'add') }}
              handleOnUpdate={(data) => { this.handleOn(data, 'update') }}
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
    // menu_admin: state.MenuAdmin.menu,
    alertPais: state.paises.alertPais,
    paises: state.paises.paises
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    pais: () => dispatch(actions.getPaises()),
    addPais: (data) => dispatch(actions.addPaises(data)),
    updatePaises: (data) => dispatch(actions.updatePaises(data)),
    deletePais: (data) => dispatch(actions.deletePaises(data)),
    offAlertPais: () => dispatch(actions.offAlertPaises())
  };
};
export default connect(
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(Brief)));