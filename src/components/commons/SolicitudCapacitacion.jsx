import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import ButtonInfo from '../commons/ButtonInfo';
import Header from '../header';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    width: '300px',
  },
  dense: {
    marginTop: theme.spacing(2),
    width: '50%',
  },
  menu: {
    width: 200,
  },
}));
export default function PaperSheet() {
  const classes = useStyles();
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <Fragment>
      <Header
        title="hola" nombre="hi"></Header>
      <Paper className={classes.root} style={{
        borderTopColor: '#ED6E41',
        borderTopStyle: 'outset'
      }}>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-end"
        >
          <ButtonInfo></ButtonInfo>
        </Grid>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            required
            id="outlined-required"
            label="Curso/Taller"
            defaultValue=""
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Solicita:"
            defaultValue=""
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-dense-multiline"
            label="Comentarios"
            className={clsx(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
            multiline
            rows="4"
            fullWidth
          />
        </form>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-end"
        >
        </Grid>
      </Paper>
    </Fragment>
  );
}