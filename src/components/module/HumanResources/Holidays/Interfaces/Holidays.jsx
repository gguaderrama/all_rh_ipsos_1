import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Fragment, Component } from "react";
import { useStyles } from "../estilos/styleHolidays";
import { withStyles } from "@material-ui/core/styles";
import TextFieldDecored from "../../../../commons/TextFieldDecored";
import SelectDecored from '../../../../commons/SelectDecored';
import TableDecored from '../../../../commons/TableDecored';
import ButtonGlobal from '../../../../commons/ButtonGlobal';
import * as actions from "../../../../../actions";

class Holidays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      flagPush: false,

      columns: [
        { title: 'Fecha Inicio', field: 'startDate' , type: "date"},
        { title: 'Fecha Fin', field: 'endDate' , type: "date"},
        // { title: 'Estatus ', field: 'status' },
        {
          title: 'Estatus',
          field: 'status',
          lookup: { 1: 'Aprobado', 2: 'Cancelado' },
        },
      ],
      data: [
        {
          clave: '1', fechadesde: '09/Enero/2019',
          fechahasta: '11/Febrero/2019'
        },
        {
          clave: '1', fechadesde: '12/Julio/2018',
          fechahasta: '25/Julio/2019'
        },
      ],
      id: 0
    };
    this.handleOn = this.handleOn.bind(this)

  }
  componentWillUnmount() {
    if (this.state.allData !== '') {
      console.log(this.state.allData, 'all Data')
    }
  }


  handleOn(data, action) {
    const { id } = this.props.match.params
    let periodo = this.state.allData.period
    if (action === 'add') {
      this.props.addAbsences(data, id, periodo)
    }
    if (action === 'update') {
      this.props.updateAbsences(data, id, periodo)
    }
    if (action === 'delete') {
      this.props.deleteAbsences(data)
    }
  }
  componentDidMount() {
    const { id } = this.props.match.params
    this.setState({
      id: id
    })
    this.props.getAbsences(id)
  }
  handleOnChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    let fillValue = value
    if (typeof (fillValue) === 'string') {
      fillValue = fillValue.toUpperCase();
    }
    this.setState(prevState => ({
      allData: {
        // object that we want to update
        ...prevState.allData, // keep all other key-value pairs
        [name]: fillValue // update the value of specific key
      }
    }));
    if(name === 'period'){
       this.props.getAbsencesTable(this.state.id, value)
    }
  }
  handleOnChangeDate(date, name) {
    this.setState(prevState => ({
      allData: {
        // object that we want to update
        ...prevState.allData, // keep all other key-value pairs
        [name]: date // update the value of specific key
      }
    }));
  };
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
    return (
      <Fragment>
        <div style={{ width: "100%" }}>
          <TextFieldDecored
            style={{ width: "35%", marginRight: "5%" }}
            name="empleado"
           value={ this.props.absences.name +' '+this.props.absences.lastName +' '+this.props.absences.secondLastName }
            label="Empleado"
            // readOnly={true}
            maxLength="40"
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
          />
          <SelectDecored name="period"
            label='Periodo'
            value={allData.period || ''}
            itemList={[{ id: '1', name: '1' }, { id: '2', name: '2' }]}
            keySelect='id'
            valueSelect='name'
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
            style={{ height: '50%', width: "25%", marginRight: "5%" }} />
          <TextFieldDecored
            style={{ width: "25%", marginRight: "3%" }}
            name="DiasDisponibles"
            value={ this.props.absences.employee && this.props.absences.employee.availableDays }
            // readOnly={true}
            label="Días Disponibles"
            maxLength="40"
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
          />
        </div>
        <TableDecored
          addButton={true}
          filtering = {false}
          // Allactions={}
          title=""
          apiRestFull={true}
          tableData={this.props.absences_table}
          columns={this.state.columns}
          handleOnAdd={(data) => { this.handleOn(data, 'add') }}
          handleOnUpdate={(data) => { this.handleOn(data, 'update') }}
          handleOnDelete={data => this.handleOn(data, 'delete')}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    // menu_admin: state.MenuAdmin.menu,
    absences: state.absences.absences,
    absences_table : state.absences.absences_table
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    getAbsences: (id) => dispatch(actions.getAbsences(id)),
    updateAbsences : (data, id, periodo) => dispatch(actions.updateAbsences (data, id, periodo)),
    offAlertTraining_schedules: () => dispatch(actions.offAlertTraining_schedules()),
    getAbsencesTable: (EmployeeID, Period) =>  dispatch(actions.getAbsencesTable(EmployeeID, Period)),
    addAbsences : (data, id, periodo) => dispatch(actions.addAbsences(data, id, periodo)),
  };
};
// connect(mapStateToProps)
export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(Holidays)));
