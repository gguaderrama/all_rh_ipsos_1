export const useStyles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  delete:{
    color:'red',
  },
    root: {
        padding: theme.spacing(3, 2),
        height: '100%',
        border: '1px solid #bdc1c4',
        [theme.breakpoints.down('sm')]: {
          width: '50%',
          transition: 'width 400ms ease'
        },
        [theme.breakpoints.up('md')]: {
          width: '100%',
          transition: 'width 400ms ease'
        },
        [theme.breakpoints.up('lg')]: {
          width: '100%',
          transition: 'width 400ms ease'
        },
        [theme.breakpoints.up('xl')]: {
          width: '80%',
          transition: 'width 400ms ease'
        },
    },
    hide : {
        display : 'none',
        transition: 'display 400ms ease'
    },
    show :{ marginLeft: '10px', width: '28%' }
  });
  export const ExpansionPanel_s  = theme => ({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  });
  const ExpansionPanelSummary  = theme => ({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      width: '30%',
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
    });