import * as React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// import Menu from "@material-ui/core/Menu";
import Menu from "material-ui-popup-state/HoverMenu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Button from "@material-ui/core/Button";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import StarBorder from "@material-ui/icons/StarBorder";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldDecored from "../commons/TextFieldDecored";
import BuildIcon from "@material-ui/icons/Build";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CodeIcon from "@material-ui/icons/Code";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import StorageIcon from "@material-ui/icons/Storage";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import menu_RH from "./menu_RH";
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import {
  usePopupState,
  bindHover,
  bindToggle,
  bindTrigger,
  bindMenu
} from "material-ui-popup-state/hooks";

import { yellow } from "@material-ui/core/colors";

const ParentPopupState = React.createContext(null);
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  listItemText: {
    fontSize: "13px", //Insert your required size
    fontWeight: "bold",
    color: "#37474f",
    width: "100%",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    // padding: '10px 8px',
    letterSpacing: "0",
    textTransform: "none",
    justifyContent: "flex-start",
    root: {
      minWidth: "35px",
      color: "#37474f"
    }
  },
  listItemDisabled: {
    fontSize: "11px", //Insert your required size
    // fontWeight: "bold",
    color: "#848484",
    width: "100%",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    // padding: '10px 8px',
    letterSpacing: "0",
    textTransform: "none",
    justifyContent: "flex-start",
    root: {
      minWidth: "35px",
      color: "#37474f"
    }
  },
  borderStyleList: {
    border: "1px solid black"
  },
  listItem: {
    border: "1px solid black"
  }
}));

const CascadingHoverMenus = props => {
  const { menu_admin, history } = props;

  const [open, setOpen] = React.useState(false);
  function handleClick() {
    setOpen(!open);
  }

  // function bindTrigger(_ref3) {
  //   var _ref4;

  //   var isOpen = _ref3.isOpen,
  //       open = _ref3.open,
  //       popupId = _ref3.popupId,
  //       variant = _ref3.variant;
  //   return _ref4 = {}, (0, _defineProperty2.default)(_ref4, variant === 'popover' ? 'aria-owns' : 'aria-describedby', isOpen ? popupId : null), (0, _defineProperty2.default)(_ref4, 'aria-haspopup', variant === 'popover' ? true : undefined), (0, _defineProperty2.default)(_ref4, "onClick", open), _ref4;
  // }

  const classes = useStyles();
  let popupState = usePopupState({ popupId: "demoMenu", variant: "popover" });
  let popupState2 = usePopupState({ popupId: "demoMenu", variant: "popover" });
  let Presupuestos = usePopupState({ popupId: "demoMenu", variant: "popover" });
  let RH = usePopupState({ popupId: "demoMenu", variant: "popover" });

  const MaterialIcon = (icon, boolean = null) => {
    switch (icon) {
      case "AttachMoneyIcon":
        return (
          <SendIcon
            style={
              boolean === true ? { color: "black" } : { fontWeight: "normal" }
            }
          />
        );
      case "MailIcon":
        return (
          <SendIcon
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
    <div>
      <div
        className="search"
        style={
          props.open === false ? { display: "none" } : { display: "block" }
        }
      >
        <TextFieldDecored
          style={{ width: "80%", marginRight: "3%" }}
          // variant= "filled"
          name="job"
          value={""}
          maxLength="40"
          // handleOnChange={event => {
          //   this.handleOnChange(event);
          // }}
          search={true}
          label="Buscar"
        />
      </div>
      <div
        className="tema_ppal"
        style={{
          background: "#f9fafc",
          borderTop: "1px solid #e0e0e0",
          borderBottom: "1px solid #e0e0e0"
        }}
      >
        <ListItem>
          <div>
            <ListItemIcon
              style={
                props.open === false
                  ? { color: "#848484" }
                  : { color: "#848484", minWidth: "35px" }
              }
            >
              <BuildIcon className={classes.iconStyle} />
            </ListItemIcon>
          </div>
          <ListItemText
            primary="OPERACIONES"
            classes={{ primary: classes.listItemDisabled }}
          />
        </ListItem>
      </div>
      <ClickAwayListener
        onClickAway={() => {
          if (open === true) {
            Presupuestos.close();
            RH.close();
          }
          handleClick();
        }}
      >
        <div>
          {menu_admin &&
            menu_admin.map((text, index) => (
              <div key={index}
                // { ...bindTrigger(Presupuestos)}   
                {...(text.name === 'Presupuestos' ? bindTrigger(Presupuestos) : {})}
                {...(text.path === '/holidayscatalog' ? bindTrigger(RH) : {})}
              >
                <ListItem
                  onClick={e => {
                    // e.stopPropagation();

                    if (text.path != '/presupuestos' && text.path != '/holidayscatalog') {
                      history.push(text.path);
                    }
                    if (open === true) {
                      Presupuestos.close();
                      RH.close();
                      e.stopPropagation()
                    }
                    // // history.push(text.path);
                    handleClick()
                  }}
                  key={index}
                  button
                // {...bindTrigger(Presupuestos)}
                >
                  <div>
                    <ListItemIcon
                      style={
                        props.open === false
                          ? { color: "#2a2a2a" }
                          : { color: "#2a2a2a", minWidth: "35px" }
                      }
                    >
                      {(() => {
                        switch (text.icon) {
                          case "AttachMoneyIcon":
                            return <AttachMoneyIcon />;
                          case "ShoppingCartIcon":
                            return <ShoppingCartIcon />;
                          case "CodeIcon":
                            return <CodeIcon />;
                          case "DataUsageIcon":
                            return <DataUsageIcon />;
                          case "StorageIcon":
                            return <StorageIcon />;
                          case "ViewHeadlineIcon":
                            return <ViewHeadlineIcon />;
                          default:
                            return <SendIcon />;
                        }
                      })()}
                      {/* {text.id === ''
                      ? MaterialIcon(text.icon, true)
                      : MaterialIcon(text.icon)} */}
                    </ListItemIcon>
                  </div>
                  {/* <ClickAwayListener
                   key={index}
                   onClickAway={() => {
                     console.log("ewnfnewnjfnewjfnwje");
                     // Presupuestos.close();
                   }}
                 > */}
                  <div>
                    <ListItemText
                      primary={text.name}
                      classes={{ primary: classes.listItemText }}
                    />
                  </div>
                  {/* </ClickAwayListener> */}
                </ListItem>
              </div>
            ))}
        </div>
      </ClickAwayListener>

      <ClickAwayListener
        onClickAway={() => {
          // Presupuestos.close();
        }}
      >
        <div>
          <ParentPopupState.Provider value={Presupuestos}>
            <Menu
              {...bindMenu(Presupuestos)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              getContentAnchorEl={null}
            >
              <MenuItem
                onClick={() => {
                  Presupuestos.close;
                  props.history.push("/brief");
                }}
              >
                Brief
              </MenuItem>
              <MenuItem
                onClick={() => {
                  Presupuestos.close;
                  props.history.push("/employees");
                }}
              >
                Costo de Estudios
              </MenuItem>
              <MenuItem
                onClick={() => {
                  Presupuestos.close;
                  props.history.push("/rh/employees");
                }}
              >
                Estudios
              </MenuItem>
              <Submenu popupId="Reportes" title="Reportes">
                <MenuItem
                  onClick={() => {
                    Presupuestos.close;
                    props.history.push("/rh/trainers");
                  }}
                >
                  Reporte Semanal
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    Presupuestos.close;
                    props.history.push("/rh/trainingrequest");
                  }}
                >
                  Reporte F2F
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    Presupuestos.close;
                    props.history.push("/rh/trainings");
                  }}
                >
                  Reporte KPI
                </MenuItem>
              </Submenu>
            </Menu>
          </ParentPopupState.Provider>
          <ParentPopupState.Provider value={RH}>
            <Menu
              {...bindMenu(RH)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              getContentAnchorEl={null}
            >
              <MenuItem
                onClick={() => {
                  RH.close;
                  props.history.push("/rh/employees");
                }}
              >
                Empleados
              </MenuItem>
              <Submenu popupId="Capacitación" title="Capacitación">
                <MenuItem
                  onClick={() => {
                    RH.close;
                    props.history.push("/rh/trainers");
                  }}
                >
                  Capacitadores
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    RH.close;
                    props.history.push("/rh/trainingrequest");
                  }}
                >
                  Solicitud
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    RH.close;
                    props.history.push("/rh/trainings");
                  }}
                >
                  Capacitaciones
                </MenuItem>
              </Submenu>
              <Submenu popupId="Catalogo" title="Catalogo">
                <MenuItem
                  onClick={() => {
                    RH.close;
                    props.history.push("/rh/holidayscatalog");
                  }}
                >
                  Vacaciones
                </MenuItem>
              </Submenu>
            </Menu>
          </ParentPopupState.Provider>
        </div>
      </ClickAwayListener>
      <ParentPopupState.Provider value={popupState}>
      </ParentPopupState.Provider>
      <ParentPopupState.Provider value={popupState2}>
        <Menu
          {...bindMenu(popupState2)}
          elevation={1}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={popupState2.close}>Prueba</MenuItem>
          <MenuItem onClick={popupState2.close}>Prueba2</MenuItem>
          <MenuItem onClick={popupState2.close}>Demo 1</MenuItem>
          <Submenu popupId="moreChoicesMenu" title="More Choices">
            <MenuItem onClick={popupState2.close}>Demo 2</MenuItem>
            <MenuItem onClick={popupState2.close}>Demo 3</MenuItem>
            <Submenu popupId="evenMoreChoicesMenu" title="Even More Choices">
              <MenuItem onClick={popupState2.close}>Test 1</MenuItem>
              <MenuItem onClick={popupState2.close}>Death Metal</MenuItem>
            </Submenu>
            <Submenu popupId="moreBenignChoices" title="More Benign Choices">
              <MenuItem onClick={popupState2.close}>Salad</MenuItem>
              <MenuItem onClick={popupState2.close}>Lobotomy</MenuItem>
            </Submenu>
          </Submenu>
        </Menu>
      </ParentPopupState.Provider>
    </div>
  );
};

export default CascadingHoverMenus;

const submenuStyles = theme => ({
  menu: {
    top: -theme.spacing.unit
  },
  title: {
    flexGrow: 1
  },
  moreArrow: {
    marginRight: theme.spacing.unit * -1
  }
});

const Submenu = withStyles(submenuStyles)(
  ({ classes, title, popupId, children, ...props }) => {
    const parentPopupState = React.useContext(ParentPopupState);
    const popupState = usePopupState({
      popupId,
      variant: "popover",
      parentPopupState
    });
    return (
      <ParentPopupState.Provider value={popupState}>
        <MenuItem {...bindHover(popupState)} selected={popupState.isOpen}>
          <ListItemText className={classes.title}>{title}</ListItemText>
          <ChevronRight className={classes.moreArrow} />
        </MenuItem>
        <Menu
          {...bindMenu(popupState)}
          className={classes.menu}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          getContentAnchorEl={null}
          {...props}
        >
          {children}
        </Menu>
      </ParentPopupState.Provider>
    );
  }
);
