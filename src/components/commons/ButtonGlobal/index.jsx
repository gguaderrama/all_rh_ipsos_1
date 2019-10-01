import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import clsx from 'clsx';
import Icon from '@material-ui/core/Icon';
import { loadCSS } from 'fg-loadcss';
import Button from '@material-ui/core/Button';


export default props => {

  const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
    }, button: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    margin: {
      margin: theme.spacing(2),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },

  }));
  const classes = useStyles();
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);
  let color, icon = '';
  if (props.color === 'primary') {
    color = '#00AFA9';
  }
  else if (props.color === 'secondary') {
    color = '#214490';
  }
  if (props.icon === 'add') {
    icon = 'fas fa-plus-circle';
  }
  else if (props.icon === 'save') {
    icon = 'fas fa-save';
  }
  else if (props.icon === 'download') {
    icon = 'fas fa-download';
  }
  return (
    <Fragment>
      <div>
        <Button
         onClick = {props.onClick}
          variant="contained"
          size="small"
          style={{ background: `${color}`, color: 'white' }}
          className={classes.button}
        >
          <Icon style={{ paddingRight: '20px' }} className={clsx(classes.icon, `${icon}`)} />
          {props.title}
        </Button>
      </div>
    </Fragment>);
}
