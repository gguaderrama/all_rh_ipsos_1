import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Fragment, Component } from "react";
import Admin from "../../../admin";
import { useStyles } from "../Holidays/estilos/styleHolidays";
import { withStyles } from "@material-ui/core/styles";
import Header from '../../../header';
import Card from '../../../commons/card'
import TabsComponent from '../../../commons/tabs'
import tabspread from './Interfaces/tabspread'
import Paper from '@material-ui/core/Paper';
import ButtonInfo from '../../../commons/ButtonInfo';
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import Info from '../../../commons/ButtonInfo'
import PanelSideBar from "../../../commons/PanelSideBar";
class Holidays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      value: 0,
      activeTabIndex: 0,
      openSideBar: false,
    };
    this.changeStatusSideBar = this.changeStatusSideBar.bind(this)

  }
  componentDidMount() { }
  setDataTabs(data) {
  }
  changeStatusSideBar() {
    console.log('side bar', this.state.openSideBar)
    this.setState({
      openSideBar: !this.state.openSideBar
    });
    // e.preventDefault();
    // this.fileSelector.click();
  }
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className="root">
          <Admin {...this.props} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Header title="Vacaciones/Permisos/Capacitaciones" module="RRHH" name="empleados" />
            <Card color="title" />
            <Paper className={this.state.openSideBar === false ? classes.root : classes.hideBar}>
              <div style={{ textAlign: 'right', margin: '15px' }}>
                <Button variant="outlined" onClick={() => { this.changeStatusSideBar() }} component="span" className={classes.button}>
                  <InfoIcon fontSize="small" style={{ color: 'white' }} className={clsx(classes.icon, 'fas fa-info-circle')} />
                </Button>
              </div>
              <TabsComponent tabsSpread={tabspread({ ...this.props })} />
            </Paper >
            <div style={{ width: '70%', marginLeft: '974px' }}>
              <PanelSideBar openSideBar={this.state.openSideBar} />
            </div>
          </main>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    datosHolidays: state.datosHolidays
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
)(withStyles(useStyles)(withTranslate(Holidays)));
