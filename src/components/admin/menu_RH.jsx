import * as React from "react";
import {
    usePopupState,
    bindHover,
    bindToggle,
    bindTrigger,
    bindMenu
  } from "material-ui-popup-state/hooks";
export default function menu_RH(props) {
    console.log(props, 'property')
  return(
    <Menu
    {...bindMenu(props.Presupuestos)}
    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    transformOrigin={{ vertical: "top", horizontal: "left" }}
    getContentAnchorEl={null}
  >
    <MenuItem
      onClick={() => {
        Presupuestos.close;
        props.history.push("/employees");
      }}
    >
      Empleados
    </MenuItem>
    <Submenu popupId="Capacitación" title="Capacitación">
      <MenuItem
        onClick={() => {
          Presupuestos.close;
          props.history.push("/trainers");
        }}
      >
        Capacitadores
      </MenuItem>
      <MenuItem
        onClick={() => {
          Presupuestos.close;
          props.history.push("/trainingrequest");
        }}
      >
        Solicitud
      </MenuItem>
      <MenuItem
        onClick={() => {
          Presupuestos.close;
          props.history.push("/trainings");
        }}
      >
        Capacitaciones
      </MenuItem>
    </Submenu>
    <Submenu popupId="Catalogo" title="Catalogo">
      <MenuItem
        onClick={() => {
          Presupuestos.close;
          props.history.push("/trainers");
        }}
      >
        Vacaciones
      </MenuItem>
    </Submenu>
  </Menu>
  )
       
}