export const useStyles = theme => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    root: {
      // border: '1px solid #bdc1c4',
      padding: theme.spacing(3, 2),
      height: '100%',
      border: '1px solid #bdc1c4'
    },
    button: {
      [theme.breakpoints.up('lg')]: {
       background: '#00AFA9', 
       minWidth: '20px', 
       width: '30px',
       marginTop:'-60px',
       marginRight:'-30px' },
    },
  });
  