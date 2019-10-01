import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon'
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
const useStyles = makeStyles(theme => ({
}));
export default function FloatingActionButtons() {
  const classes = useStyles();
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);
  return (
    <div>
     <Button style={{ background: '#00AFA9',minWidth:'20px',width:'30px' }} variant="outlined" component="span" className={classes.button}>

<Icon fontSize="small" style={{ color: 'white' }} className={clsx(classes.icon, 'fas fa-info-circle')} />
</Button>
    </div>
  );
}