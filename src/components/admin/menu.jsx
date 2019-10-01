import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';


import Demo from './demo'
import CascadingHoverMenus from './CascadingHoverMenus'
import CascadingHoverMenusCode from './CascadingHoverMenus'
import CascadingHoverMenusHooks from './CascadingHoverMenus.hooks'
import CascadingHoverMenusHooksCode from './CascadingHoverMenusHooksCode'
import TriggerMenuHooks from './TriggerMenu.hooks'
import TriggerMenuHooksCode from './TriggerMenu.hooks'
import TriggerMenu from './TriggerMenu'
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import TriggerMenuCode from './TriggerMenu'
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
    <Demo
      title="Cascading Hover Menus"
      headerId="cascading-hover-menus"
      example={<CascadingHoverMenus />}
      code={CascadingHoverMenusCode}
      hooksExample={<CascadingHoverMenusHooks open = {props.open} {...props}/>}
      hooksCode={CascadingHoverMenusHooksCode}
    />

     </List>
  );
}