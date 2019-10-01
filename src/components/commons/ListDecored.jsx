import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));
function createData(curso, lugar, fecha, asistencia) {
  return { curso, lugar, fecha, asistencia };
}
const rows = [
  createData('Excel básico', 'Allende #43,zona centro', '15 de mayo de 2019', 'true')
];
export default function SimpleTable(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Curso Taller</TableCell>
            <TableCell  >Lugar</TableCell>
            <TableCell  >Fecha&nbsp;</TableCell>
            <TableCell align="center" >Asistencia&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data && props.data.map(row => (
            <TableRow key={row.curso}>
              <TableCell component="th" scope="row">
                {row.trainning.name}
              </TableCell>
              <TableCell  >{row.trainningSchedule.location}</TableCell>
              <TableCell  >{row.trainningSchedule.startDate}</TableCell>
              <TableCell align="center"><CheckIcon style={{ fontSize: '30px', color: '5CFC06' }} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}