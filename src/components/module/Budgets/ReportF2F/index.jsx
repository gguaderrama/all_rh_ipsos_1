import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Fragment, Component } from "react";
import Admin from "../../../admin";
import { useStyles } from "./estilos/stylesReportF2F";
import { withStyles } from "@material-ui/core/styles";
import Header from '../../../header';
import Card from '../../../commons/card'
import Button from '../../../commons/ButtonGlobal'
import Paper from '@material-ui/core/Paper';
import SelectDecored from '../../../commons/SelectDecored'
class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      value: 0,
      activeTabIndex: 0
    };
  }
  componentDidMount() { }

  setDataTabs(data) {

  }


  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className="root">
          <Admin {...this.props} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Header title="Reporte Concentrado F2F" module="presupuestos" name="reportes" />
            <Card color="title">
            </Card>
            <Paper className={classes.root}>
              <div style={{ display: 'flex', width: "100%", float: "left" }}>
                <SelectDecored name="prueba"
                  label='Año'
                  value={''}
                  itemList={[{ id: '1', name: '2016' }, { id: '2', name: '2017' }, { id: '2', name: '2018' }, { id: '2', name: '2019' }]}
                  keySelect='id'
                  valueSelect='name'
                  handleOnChange={event => {
                    this.handleOnChange(event);
                  }}
                  style={{ height: '50%', width: "25%", marginRight: "4%" }} />
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
    // menu_admin: state.MenuAdmin.menu
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