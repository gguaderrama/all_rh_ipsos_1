import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Fragment, Component } from "react";
import Admin from "../../../admin";
import { useStyles } from "./estilos/stylesTrainings";
import { withStyles } from "@material-ui/core/styles";
import Header from '../../../header';
import Card from '../../../commons/card'
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import * as actions from "../../../../actions";
import TableDecored from '../../../commons/TableDecored';

class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: this.props.datosGenerales,
      flagPush: false,

      columns: [
       // { title: 'Clave', field: 'trainningScheduleID', type: 'numeric' },
        { title: 'Curso', field: 'trainning.name',
        render: rowData => <a href={`/rh/participants/${rowData.trainningScheduleID}`} >{rowData.trainning.name}</a>},
        { title: 'Nombre', field: 'request.name' },
        { title: 'Fecha Registro', field: 'trainningRequest.requestDate' },
        { title: 'Participantes', field: 'total' },
      ], 
      id : 0
    };
      this.handleOn = this.handleOn.bind(this)
    }
    handleOn(data, action) {
      if (action === 'add') {
        this.props.addTrainings(data, this.state.id)
      }
      if (action === 'update') {
        this.props.updateTrainings(data, this.state.id)
      }
      if (action === 'delete') {
        this.props.deleteTrainings(data, this.state.id)
      }
      // this.setState({
      //   openAdd: true
      // });
    }
    componentDidMount() { 
      this.props.getTrainings()
      const { id } = this.props.match.params
      this.setState({
        id  : id
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
            <Header title="Capacitaciones" module="RRHH" name="capacitación" />
            <Card color="title">
            </Card>
            <Paper className={classes.root}>
            <TableDecored
            addButton={false}
            Allactions={false}
            apiRestFull = {false}
            tableData={this.props.trainings}
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
    alertTrainings: state.state.alertTrainings,
    trainings: state.trainings.trainings,
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    getTrainings: () => dispatch(actions.getTrainings()),
    addTrainings : (data, id) => dispatch(actions.addTrainings(data, id)),
    updateTrainings : (data, id) => dispatch(actions.updateTrainings(data, id)),
    deleteTrainings : (data, id) => dispatch(actions.deleteTrainings(data, id)),
    offAlertTrainings : () => dispatch(actions.offAlertTrainings())
  };
};
// connect(mapStateToProps)
export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(Brief)));