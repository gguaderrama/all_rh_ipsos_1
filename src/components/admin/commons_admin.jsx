import React, { Component, Fragment } from "react";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
const MaterialIcon = (icon, boolean = null) => {
  switch (icon) {
    case 'InboxIcon': return <InboxIcon style={boolean === true ? { color: 'black' } : { fontWeight: 'normal' }} />
    case 'MailIcon': return <MailIcon style={boolean === true ? { color: 'black' } : { fontWeight: 'normal' }} />
    default: return null
  }
}

export default MaterialIcon