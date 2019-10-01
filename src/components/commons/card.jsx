import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { exportDefaultSpecifier } from '@babel/types';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));
export default props => {
  const classes = useStyles;
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  let color = '';
  if (props.color === 'primary') {
    color = '#00AFA9';
  }
  else if (props.color === 'title') {
    color = '#ED6E41';
  }
  else if (props.color === 'secondary') {
    color = '#214490';
  }
  else if (props.color === 'table') {
    color = '#CE6B01';
  }
  else {
    color = '#656565';
  }
  return (
    <Paper className={classes.root} style={{ marginRight: `${props.margin}`, height: `${props.height}`, width: `${props.width}`, borderTopColor: `${color}`, borderTopStyle: 'outset' }}>
    </Paper>
  );
}

