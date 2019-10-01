import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Fragment, Component } from "react";
import Admin from "../../../admin";
import { useStyles } from "./estilos/stylesParticipants";
import { withStyles } from "@material-ui/core/styles";
import Header from '../../../header';
import Card from '../../../commons/card'
import Button from '../../../commons/ButtonGlobal'
import Paper from '@material-ui/core/Paper';
import ButtonInfo from '../../../commons/ButtonInfo';
import Typography from '@material-ui/core/Typography';
import TextFieldDecored from '../../../commons/TextFieldDecored'
import SelectDecored from '../../..//commons/SelectDecored';
import TextAreaDecored from '../../../commons/TextAreaDecored'
import TableDecored from '../../../commons/TableDecored'
import DatePickerDecored from "../../../commons/DatePickerDecored";
import * as actions from "../../../../actions";
import api from '../../../../config/api.jsx'
import { getTrainnersCombo } from "../../../../actions";
class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [{ lugar: this.props.training_sch.location || '' }],
      person: [],
      allData2: this.props.cap,
      flagPush: false,
      columns: [
        // {
        //   field: 'person.name',
        //   Title: 'Nombre',
        //   render: rowData => {console.log(rowData, 'esta es la data de la tabla ')}
        // }
        {
          title: 'Nombre',
          field: 'person.id',
          lookup: { 1: 'Jose Alberto ', 2: 'Daniel', 5: 'Test', 6: 'Juan Manuel ' },
        },
        // { title: 'Apellido', field: 'person.lastName' },
      ],
    };
    this.handleData = this.handleData.bind(this)
    this.handleOn = this.handleOn.bind(this)
  }


  handleOn() {
    const { id } = this.props.match.params
    let person_array = this.state.person
    if (this.state.person.length === 0) {
      person_array = [this.props.training_sch].map(function (f) {
        return { 'personID': f.request.id }
      })

    }
    let info = { persona: person_array, trainning_sh: { ...this.props.training_sch }, ...this.state.allData }
    this.props.updateTrainingsParticipants(info, id)
  }


  handleData(data) {
    let dataArray = data.map(function (f) {
      return { 'personID': parseInt(f.person.id) }
    })
    this.setState({
      person: dataArray
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
      },
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


  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getTraining_schedules(id)
    this.props.getTraining_sch(id)
    this.props.getTrainers()
    this.props.getTrainnersCombo()
    this.setState({
      id: id
    })


    api.get('http://192.168.0.68:5084/api/TrainningsSchedules/' + id)
      .then(response => {

        console.log(response.data.trainerID, 'este es el response ')
        this.setState({
          allData: {
            lugar: response.data.location || '',
            fecha1: response.data.startDate || '',
            fecha2: response.data.startDate || '',
            capacitador : response.data.trainerID || '',

          }
        });
        // this.setState({
        //   allData : [{
        //   lugar :response.data.location || '',
        //   fecha : response.data.startDate || '',
        //   fecha2 :  response.data.endDate || ''
        //   }]
        // })
        // let estu = response.data.map(function (f) {
        //     let name = f.person.name || ''
        //     let lastName = f.person.lastName || ''
        //     return { ...f, nombreCompleto: name + ' ' + lastName }
        // })
      })
      .catch(err => {
      })

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
  render() {
    const { classes } = this.props;
    const { allData } = this.state;
    console.log(this.props.trainers, 'este es alldata ')


    let name = this.props.training_sch && this.props.training_sch.trainning && this.props.training_sch.request.name || ''
    let lastName = this.props.training_sch && this.props.training_sch.trainning && this.props.training_sch.request.name || ''
    return (
      <Fragment>
        <div className="root">
          <Admin {...this.props} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Header title="Capacitación" module="RRHH" name="capacitación" />
            <Card color="title">
            </Card>
            <Paper className={classes.root}>
              <div style={{ width: "3%", float: "right" }}>
                <ButtonInfo></ButtonInfo>
              </div>
              <div style={{ width: "100%", marginTop: "1%" }}>
                <div style={{ display: 'flex', width: "100%", float: "left" }}>
                  <TextFieldDecored
                    style={{ width: "30%", marginRight: "5%" }}
                    name="curso_taller"
                    value={this.props.training_sch && this.props.training_sch.trainning && this.props.training_sch.trainning.name || ''}
                    label="Curso taller"
                    readOnly={true}
                    maxLength="40"
                    handleOnChange={event => {
                      this.handleOnChange(event);
                    }}
                  />
                  <TextFieldDecored
                    style={{ width: "30%", marginRight: "5%" }}
                    // variant= "filled"
                    name="solicita"
                    value={this.props.training_sch && this.props.training_sch.trainning && this.props.training_sch.request.name || ''}
                    readOnly={true}
                    maxLength="40"
                    handleOnChange={event => {
                      this.handleOnChange(event);
                    }}
                    label="Solicita"
                  />
                  <SelectDecored name="capacitador"
                    label='Capacitador'
                    value={allData && allData.capacitador || ''}
                    itemList={this.props.trainers}
                    keySelect='id'
                    valueSelect='name'
                    handleOnChange={event => {
                      this.handleOnChange(event);
                    }}
                    style={{ height: '50%', width: "25%", marginRight: "5%" }} />
                </div>
                <div style={{ display: 'flex', width: "100%", float: "left" }}>
                  <TextFieldDecored
                    style={{ width: "30%", marginRight: "5%" }}
                    name="lugar"
                    value={allData.lugar}
                    label="Lugar"
                    readOnly={false}
                    maxLength="40"
                    handleOnChange={event => {
                      this.handleOnChange(event);
                    }}
                  />
                  <DatePickerDecored
                    style={{ width: "30%", marginRight: "5%" }}
                    label="Fecha"
                    name="fecha"
                    value={allData.fecha1}
                    handleOnChange={event => {
                      this.handleOnChangeDate(event, 'fecha1');
                    }}
                  />
                  <DatePickerDecored
                    style={{ width: "30%" }}
                    label="Fecha"
                    name="fecha2"
                    value={allData.fecha2}
                    // value={ this.props.training_sch && this.props.training_sch.trainning && this.props.training_sch.endDate || ''}
                    handleOnChange={event => {
                      this.handleOnChangeDate(event, 'fecha2');
                    }}
                  />
                </div>
                <TextAreaDecored
                  style={{ width: "100%" }}
                  name="comentario_cap"
                  value={this.props.training_sch && this.props.training_sch.trainningRequest && this.props.training_sch.trainningRequest.notes || ''}
                  handleOnChange={(event) => { this.handleOnChange(event, 'comentario_cap') }}
                  label="Comentarios"
                  readOnly="true"
                  rows={1}
                />
              </div>
              <div style={{ display: 'flex', width: "100%" }}>
                {/* <Typography color="textPrimary">Lista de Participantes</Typography> */}
              </div>
              <TableDecored
                addButton={true}
                Allactions={true}
                title="Lista de Participantes"
                tableData={this.props.training_schedules}
                columns=
                {[
                  {
                    title: 'Nombre',
                    field: 'person.id',
                    lookup: this.props.trainningCombo && this.props.trainningCombo[0],
                  },
                ]}
                handleOnAdd={(data) => { this.handleOn(data, 'add') }}
                handleOnUpdate={(data) => { this.handleOn(data, 'update') }}
                handleOnDelete={data => this.handleOn(data, 'delete')}
                handleData={data => this.handleData(data)}
              />
              <div style={{ marginTop: '1%', display: 'flex', width: "22%", float: "right" }}>
                <Button style={{ display: 'flex', width: "40%", float: "right" }} onClick={() => { this.handleOn() }} title="Guardar" icon="save" color="primary" />
                <Button style={{ display: 'flex', width: "40%", marginLeft: '2%', float: "right" }} title="Descargar" icon="download" color="secondary" />
              </div>
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
    training_schedules: state.training_schedules.training_schedules,
    trainningCombo: state.training_schedules.trainningCombo,
    training_sch: state.training_schedules.training_sch,
    alertTraining_schedules: state.training_schedules.alertTraining_schedules,
    trainers: state.trainers.trainers
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    getTraining_schedules: (id) => dispatch(actions.getTraining_schedules(id)),
    addTraining_schedules: (data, period) => dispatch(actions.addTraining_schedules(data, period)),
    updateTraining_schedules: () => dispatch(actions.updateTraining_schedules()),
    getAbsencesTable: (EmployeeID, Period) => dispatch(actions.getAbsencesTable(EmployeeID, Period)),
    getTraining_sch: (id) => dispatch(actions.getTraining_sch(id)),
    updateTrainingsParticipants: (data, id) => dispatch(actions.updateTrainingsParticipants(data, id)),
    getTrainers: () => dispatch(actions.getTrainers()),
    getTrainnersCombo: () => dispatch(actions.getTrainnersCombo())
  };
};
// connect(mapStateToProps)
export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(Brief)));