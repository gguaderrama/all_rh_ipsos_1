import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
const drawerWidth = 240;
export const useStyles = theme => ({
  root: {
      display: 'flex',
      marginTop : '5%',

  },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  inputRoot: {
    color: 'inherit',
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
  }
  
  });
  