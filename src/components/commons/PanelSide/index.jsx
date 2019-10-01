

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon'
import Sidebar from "react-sidebar";
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));
export default function OutlinedButtons() {

  const classes = useStyles();
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);
  return (
    <div>
      <input
        accept="image/*"
        className={classes.input}
        id="outlined-button-file"
        multiple
        type="file"
      />
      <label htmlFor="outlined-button-file">
        <Button style={{ background: '#00AFA9' }} variant="outlined" component="span" className={classes.button}>

          <Icon style={{ color: 'white' }} className={clsx(classes.icon, 'fas fa-upload')} />
        </Button>

      </label>
    </div>
  );
}










