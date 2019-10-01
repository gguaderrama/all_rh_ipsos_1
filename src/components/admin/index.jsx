import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./styles";

import clsx from "clsx";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Logo from "../../assets/IPSOS_OPERACIONES.png";
import headLogo from "../../assets/IPSOS_404.png";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import * as actions from "../../actions";

import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";
import { Collapse } from "@material-ui/core";

import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import CascadingHoverMenus from './CascadingHoverMenus'
import CascadingHoverMenusCode from './CascadingHoverMenus'
import CascadingHoverMenusHooks from './CascadingHoverMenus.hooks'
import CascadingHoverMenusHooksCode from './CascadingHoverMenusHooksCode'

import Menu from './menu'
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      itemMenu: 0,
      expanded: false
    };
    this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
    this.setOpen = this.setOpen.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.onClickItem = this.onClickItem.bind(this);
  }
  componentDidMount() {
    this.props.menuAdminFuncion(
      this.props.translate("ADMIN.menu_presupuestos")
    );
  }
  setOpen(variable) {
    this.setState({
      open: variable
    });
  }

  handleDrawerOpen() {
    this.setOpen(!this.state.open);
  }
  handleDrawerClose() {
    this.setOpen(false);
  }

  handleOnChangeInput(e, panel) {
    console.log("ingresa aqui");
    let value = e.target.value;
    this.setState({ valueSelect: value }, () => {
      console.log(value, "dealersOverallTotal1");
    });
    if (value === "es" || value === "en") {
      this.props.setLanguage(value);
    }
  }
  onClickItem(itemMenuId) {
    console.log("wjenfjewngjewngjn");
    this.setState({
      itemMenu: itemMenuId
    });
  }

  handleChange(event, newExpanded, panel) {
    this.setExpanded(newExpanded ? panel : false);
  }

  setExpanded(value) {
    this.setState({
      expanded: value
    });
  }

  render() {
    const ExpansionPanel = withStyles({
      root: {
        border: "none",
        boxShadow: "none",
        "&:not(:last-child)": {
          borderBottom: 0
        },
        "&:before": {
          display: "none"
        },
        "&$expanded": {
          margin: "auto"
        }
      },
      expanded: {}
    })(MuiExpansionPanel);

    const ExpansionPanelSummary = withStyles({
      root: {
        color: "#37474f",
        padding: "0px",
        backgroundColor: "rgba(0, 0, 0, .03)",
        borderBottom: "none",
        marginBottom: -1,
        // minHeight: 56,
        "&$expanded": {
          minHeight: 56
        }
      },
      content: {
        margin: "0px !important",
        "&$expanded": {
          margin: "12px 0"
        }
      },
      expanded: {}
    })(MuiExpansionPanelSummary);

    const ExpansionPanelDetails = withStyles(theme => ({
      root: {
        padding: theme.spacing(2)
      }
    }))(MuiExpansionPanelDetails);

    // console.log(this.props.menu_admin);
    const { classes } = this.props;
    const { open } = this.state;
    const { menu_admin, history } = this.props;
    const MaterialIcon = (icon, boolean = null) => {
      switch (icon) {
        case "InboxIcon":
          return (
            <InboxIcon
              style={
                boolean === true ? { color: "black" } : { fontWeight: "normal" }
              }
            />
          );
        case "MailIcon":
          return (
            <MailIcon
              style={
                boolean === true ? { color: "black" } : { fontWeight: "normal" }
              }
            />
          );
        default:
          return null;
      }
    };
    return (
      <div >
        <CssBaseline />
        <AppBar
          style={{ background:"#00AFA9", height:'53px' }}
          elevation={0}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
            [classes.AppBarClosed]: !open
          })}
        >
          <Toolbar 
          style={{minHeight:'53px'}}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                // aria-controls={menuId}
                aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                // aria-controls={mobileMenuId}
                aria-haspopup="true"
                // onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
          open={open}
        >
          <Toolbar
          style={{minHeight:'53px',height:'53px'}}>
            {!open ? (
              <img
                src={headLogo}
                alt="Logo"
                width="150%"
                style={{ margin: "auto" }}
              />
            ) : (
              <img
                src={Logo}
                height =  "70%"
                alt="Logo"
                width="55%"
                style={{ margin: "auto" }}
              />
            )}
          </Toolbar>
          <Divider />
          <List className="menuItemDone">
          <div />
          <Menu open = {this.state.open} {...this.props}/>
          </List>
          <Divider />
        </Drawer>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    actions: { ...actions },
    menu_admin: state.MenuAdmin.menu
  };
};

const mapDispatch = (dispatch, props) => {
  return {
    setLanguage: event => dispatch(IntlActions.setLocale(event)),
    menuAdminFuncion: value => dispatch(actions.menu_admin(value))
  };
};

// connect(mapStateToProps)

export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(Admin)));
