import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Fragment, Component } from "react";
import Admin from "../../../admin";
import { useStyles } from "./estilos/styleTrainers";
import { withStyles } from "@material-ui/core/styles";
import Header from '../../../header';
import Card from '../../../commons/card'
import Paper from '@material-ui/core/Paper';
import * as actions from "../../../../actions";
import TableDecored from '../../../commons/TableDecored';
class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: this.props.datosGenerales,
      flagPush: false,
      columns: [
        //{ title: 'Clave', field: 'id', type: 'numeric' },
        { title: 'Nombre', field: 'name' },
      {title:'Apellido Paterno', field: 'lastName'},
    {title:'Apellido Materno',field:'secondLastName'},
    {title:'Telefono',field:'phone'},
    {title:'Correo',field:'email'},
    {title:'RFC',field:'fiscalKey'},
    {title:'CURP',field:'citizenIdentificator'},
      ],
      trainerid : 0
    };
    this.handleOn = this.handleOn.bind(this)
  }
  handleOn(data, action) {
    if (action === 'add') {
      this.props.addTrainers(data, this.state.id)
      console.log('dddddd')
    }
    if (action === 'update') {
      this.props.updateTrainers(data, this.state.id)
    }
    if (action === 'delete') {
      this.props.deleteTrainers(data, this.state.id)
    }
    // this.setState({
    //   openAdd: true
    // });
  }
  componentDidMount() { 
    this.props.getTrainers()
    const { trainerid } = this.props.match.params
    this.setState({
      trainerid  : trainerid
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
            <Header title="Capacitadores" module="RRHH" name="capacitación" />
            <Card color="title">
            </Card>
            <Paper className={classes.root}>
            <TableDecored
            addButton={true}
            Allactions={true}
            title = " "
            apiRestFull = {true}
            tableData={this.props.trainers}
            columns={this.state.columns}
            handleOnAdd={(data) => {this.handleOn(data, 'add')}}
            handleOnUpdate={(data) => {this.handleOn(data, 'update')}}
            handleOnDelete={data => this.handleOn(data, 'delete')}
          />     
            </Paper>
          </main>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    alertTrainers: state.state.alertTrainers,
    trainers: state.trainers.trainers,
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    getTrainers: () => dispatch(actions.getTrainers()),
    addTrainers : (data, trainerid) => dispatch(actions.addTrainers(data, trainerid)),
    updateTrainers : (data, trainerid) => dispatch(actions.updateTrainers(data, trainerid)),
    offAlertTrainers : () => dispatch(actions.offAlertTrainers())
  };
};
// connect(mapStateToProps)
export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(Brief)));
