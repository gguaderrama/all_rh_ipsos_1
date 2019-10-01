import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Component } from "react";
import Admin from "../../admin";
import { useStyles } from "./estilos/stylebrief";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TabsComponent from "../../commons/tabs/";
import tabsSpread from "./interfaces/tabsSpread";
import UploadDecored from "../../commons/UploadDecored";
import PanelSideBar from "../../commons/PanelSideBar";
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import * as actions from "../../../actions";
import Card from '../../commons/card'
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import Info from '../../commons/ButtonInfo'
class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      value: 0,
      activeTabIndex: 0,
      selectedFile: null,
      openSideBar: false
    };
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
    this.changeStatusSideBar = this.changeStatusSideBar.bind(this)
  }
  componentDidMount() { }

  handleFileSelect(e) {
    // console.log(e.target.files[0]);
    this.setState({
      selectedFile: e.target.files[0]
    });
    // e.preventDefault();
    // this.fileSelector.click();
  }


  componentDidMount() {
    this.props.area()
  }

  fileUploadHandler(e) {
    // console.log(this.state.selectedFile);
    // e.preventDefault();
    // this.fileSelector.click();
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
      <div className="root">
        <Admin {...this.props} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <UploadDecored
            handleFileSelect={this.handleFileSelect}
            selectedFile={
              (this.state.selectedFile && this.state.selectedFile.name) || ""
            }
          />
          <div>
            <h2>Brief para cotización #5151515-B1</h2>
          </div>
          {/* <Card color="title" width="100%"></Card> */}
          <div style={{ display: 'flex' }}>
            <Paper className={this.state.openSideBar === false ? classes.root : classes.hideBar}>
              <div style={{ textAlign: 'right', margin: '15px' }}>
                <Button  variant="outlined" onClick={() => { this.changeStatusSideBar() }} component="span" className={classes.button}>
                  <InfoIcon fontSize="small" style={{ color: 'white' }} className={clsx(classes.icon, 'fas fa-info-circle')} />
                </Button>
              </div>
              <TabsComponent tabsSpread={tabsSpread({ ...this.props })} />
            </Paper>
            <PanelSideBar openSideBar={this.state.openSideBar} />
          </div>
        </main>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    area_admin: state.MenuAdmin.area
  };
};

const mapDispatch = (dispatch, props) => {
  return {
    // setLanguage: event => dispatch(IntlActions.setLocale(event)),
     area : () => dispatch(actions.getArea())
  };
};

// connect(mapStateToProps)

export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(Brief)));
