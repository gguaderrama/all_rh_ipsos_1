import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Fragment, Component } from "react";
import Admin from "../../../admin";
import { useStyles } from "./estilos/stylesWeeklyReport";
import { withStyles } from "@material-ui/core/styles";
import Header from '../../../header';
import Card from '../../../commons/card'
import Button from '../../../commons/ButtonGlobal'
import Paper from '@material-ui/core/Paper';
import DatePickerDecored from '../../../commons/DatePickerDecored'
class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      value: 0,
      allData: this.props.reporte_semanal,
      activeTabIndex: 0
    };
    //this.handleOnChangeDate=this.handleOnChangeDate.bind(this)
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

  componentDidMount() { }
  setDataTabs(data) {
  }
  render() {
    console.log(this.props, 'hola');
    const { classes } = this.props;
    const { allData } = this.state;
    return (
      <Fragment>
        <div className="root">
          <Admin {...this.props} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Header title="Reporte Concentrado Semanal" module="presupuestos" name="reportes" />
            <Card color="title">
            </Card>
            <Paper className={classes.root}>
              <div style={{ display: 'flex', width: "100%", float: "left" }}>
                <DatePickerDecored
                  style={{ marginLeft: "10%", width: "20%", marginRight: "10%" }}
                  label='Fecha desde'
                  name="fecha1"
                  handleOnChange={(event) => { this.handleOnChangeDate(event, 'fecha1') }}
                  value={allData.fecha1}
                />
                <DatePickerDecored
                  style={{ width: "20%", marginRight: "10%" }}
                  label='Fecha hasta'
                  name="fecha2"
                  handleOnChange={(event) => { this.handleOnChangeDate(event, 'fecha2') }}
                  value={allData.fecha2}
                />
                <Button color="primary" title="Descargar" icon="add" />
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
    reporte_semanal: state.datosGenerales.reporte_semanal
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    // setLanguage: event => dispatch(IntlActions.setLocale(event)),
    // menuAdminFuncion: value => dispatch(actions.menu_admin(value))
  };
};
// connect(mapStateToProps)
export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(Brief)));