import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
const drawerWidth = 240;
export const useStyles = theme => ({
  root: {
    display: 'flex',
    color: '#37474f'
  },
  appBar: {
    // width: `calc(108% - ${drawerWidth}px)`,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuItemDone: {
    fontWeight: 'bold'
  },
  menuItem: {
    color: 'black',
    fontSize: '14px'
  },
  IconDone: {
    color: 'green'
  },
  Icon: {
    color: 'black'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  AppBarClosed: {
    // width: `calc(99% - ${theme.spacing(7) + 1}px)`,
    [theme.breakpoints.down('xl')]: {
      width: `calc(99.2% - ${theme.spacing(7) + 1}px)`,
    },
    [theme.breakpoints.down('lg')]: {
      width: `calc(98.9% - ${theme.spacing(7) + 1}px)`,
    },
    [theme.breakpoints.down('md')]: {
      width: `calc(98% - ${theme.spacing(7) + 1}px)`,
    },
    [theme.breakpoints.down('sm')]: {
      width: `calc(98% - ${theme.spacing(7) + 1}px)`,
    },
    [theme.breakpoints.down('xs')]: {
      width: `calc(100% - ${theme.spacing(7) + 1}px)`,
    },

  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    // display: 'none',
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
  toolbar: {

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 ',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  // iCONOS 

  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
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
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  panelExpantionMenu: {
    padding: '0 24px 0 15px'
  },
  // heading : {
  //   marginLeft: '12px'
  // },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  pannel: {
    boxShadow: 'none'
  },
  list: {
    paddingTop: '0px !important',
    paddingBottom: '0px !important',
    // height: 'px'

  }


});
