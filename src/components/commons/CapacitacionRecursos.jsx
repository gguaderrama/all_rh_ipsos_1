import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import ButtonGlobal from '../commons/ButtonGlobal';
import Header from '../header';
import ButtonInfo from '../commons/ButtonInfo';
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
    width: '400px',
  },
  dense: {

    width: '65%',
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
      <Header title="Empleados" module="RH" name="empleados" />
      <ButtonInfo></ButtonInfo>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-required"
          label="Curso/Taller"
          defaultValue="Excel Basico"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="Solicita:"
          defaultValue="Joaquin Martinez"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-required"
          label="Lugar"
          defaultValue="Allende #43,zona centro"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-required"
          label="Capacitador"
          defaultValue="Carlos Trejo"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-required"
          label="Fecha desde"
          defaultValue="01/julio/2019"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-required"
          label="Fecha Hasta"
          defaultValue="11/julio/2019"
          className={classes.textField}
          margin="dense"
          variant="outlined"
        />
        <TextField
          id="outlined-dense-multiline"
          label="Comentarios"
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
          multiline
          rows="3"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
        />
      </form>
      <ButtonInfo>
      </ButtonInfo>
      <ButtonGlobal title="Descargar" color="primary" icon="save" />
    </Fragment>
  );
}