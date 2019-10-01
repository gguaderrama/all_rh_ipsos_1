
import React, { Fragment } from 'react'
import '../../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css';
import { fade, makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import Backgrounds from '../../assets/ico.png';
const title = "Empleados"
const drawerWidth = 240;
const drawerWidths = 70;
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles(theme => ({
  root: {
    padding: theme.spacing(1, 10),
    color: theme.palette.common.white,
    '&:focus': {
      backgroundColor: '#214490',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  roots: {

    flexWrap: 'none'
  },

  palette: {
    color: '#00AFA0',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    marginLeft: drawerWidths,
    width: `calc(100% - ${drawerWidths}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 10,
    marginTop: 5,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0px',
    ...theme.mixins.toolbar,
  },

  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  bread: {
    flexWrap: 'none'
  },
}));

export default props => {
  const classes = useStyles();
  var abrir = false;
  var foto = Backgrounds;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const elements = ['one', 'two', 'three'];
  return (
    <Fragment>
      <main style={{ marginTop: '-70px' }} className={classes.content}>
        <div className={classes.toolbar} />
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="baseline">
            <Typography variant="h6" color="inherit">
              {props.title}
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="baseline"
          >
            <Paper elevation={0} className={classes.roots}>
              <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                <Link style={{ color: '#00AFA0' }} href="/" className={classes.link}>
                  <HomeIcon className={classes.icon} />
                  Inicio
                </Link>
                <Typography color="textPrimary" > <Link to='mfmkewmf'>{props.module}</Link></Typography>
                <Link to={`${props.link3}`}> <Typography color="textPrimary" > {props.name} </Typography></Link>
              </Breadcrumbs>
            </Paper>
          </Grid>
        </Toolbar>
      </main>
    </Fragment>);
}