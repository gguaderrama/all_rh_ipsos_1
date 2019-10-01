import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Component } from "react";
import { useStyles } from "../estilos/styleHolidays";
import { withStyles } from "@material-ui/core/styles";
import TextFieldDecored from "../../../../commons/TextFieldDecored";

import ListDecored from '../../../../../components/commons/ListDecored'
import * as actions from "../../../../../actions";
class Holidays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      flagPush: false
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  };
  componentWillUnmount() {
    if (this.state.allData !== '') {
    }
  }
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getTraining_schedules(id)
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
  render() {
    const { allData } = this.state;
    let Name = this.props.training_schedules && this.props.training_schedules[0] && this.props.training_schedules[0].person && this.props.training_schedules[0].person.name  || ''
    let LatsName = this.props.training_schedules && this.props.training_schedules[0]  && this.props.training_schedules[0].person.lastName  || ''
    return (
      <div style={{ width: "100%" }}>
        <div style={{ width: "38%", float: "left" }}>
          <TextFieldDecored
            style={{ width: "100%", marginRight: "3%" }}
            name="empleado"
            value={Name +' '+ LatsName}
            label="Empleado"
            readOnly={true}
            maxLength="40"
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
          />
        </div>
       {/* // <ListDecored data = {this.props.training_schedules} ></ListDecored> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    // menu_admin: state.MenuAdmin.menu,
    training_schedules: state.training_schedules.training_schedules,
    training_sch: state.training_schedules.training_sch,
    alertTraining_schedules : state.training_schedules.alertTraining_schedules
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    getTraining_schedules : (id) => dispatch(actions.getTraining_schedules(id)),
    getTrainingSchedulebyId: (id) => dispatch(actions.getTrainingSchedulebyId(id)),
    addTraining_schedules : (data, period) => dispatch(actions.addTraining_schedules (data, period)),
    updateTraining_schedules: () => dispatch(actions.updateTraining_schedules()),
    getAbsencesTable: (EmployeeID, Period) =>  dispatch(actions.getAbsencesTable(EmployeeID, Period)),
    getTraining_sch:(id) => dispatch(actions.getTraining_sch(id))
  };
};
// connect(mapStateToProps)
export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(Holidays)));
