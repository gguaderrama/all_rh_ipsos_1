import Background from '../../assets/Capa_10.png';
export const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      backgroundImage: `url(${Background})`,
      maxHeight: '200px',
      [theme.breakpoints.up('md')]: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      },
      [theme.breakpoints.up('sm')]: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
    padding: '6%'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
})