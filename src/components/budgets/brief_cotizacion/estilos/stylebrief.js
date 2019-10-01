export const useStyles = theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
    root: {
        // border: '1px solid #bdc1c4',
        padding: theme.spacing(3, 2),
        height: '100%',
        border: '1px solid #bdc1c4',
        borderTop: '3.5px solid #ED6E41',
        [theme.breakpoints.down('sm')]: {
          width: '50%',
          transition: 'width 600ms ease'
        },
        [theme.breakpoints.up('md')]: {
          width: '70%',
          transition: 'width 600ms ease'
        },
        [theme.breakpoints.up('lg')]: {
          width: '80%',
          transition: 'width 600ms ease'
        },
        [theme.breakpoints.up('xl')]: {
          width: '90%',
          transition: 'width 600ms ease'
        },
   
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
      hideBar : {
        borderTop: '3.5px solid #ED6E41',
        [theme.breakpoints.down('sm')]: {
          width: '100%'
        },
        [theme.breakpoints.up('md')]: {
          width: '80%',
          padding: '20px 16px',
         transition: 'width 600ms ease'
        },
        [theme.breakpoints.up('lg')]: {
          width: '100%',
          transition: 'width 600ms ease'
        },
        [theme.breakpoints.up('xl')]: {
          width: '100%',
          transition: 'width 600ms ease'
        },
        
      },
      button: {
        [theme.breakpoints.up('lg')]: {
         background: '#00AFA9', 
         minWidth: '20px', 
         width: '30px',
         marginTop:'-60px',
         marginRight:'-30px' },
      },
      // closed : {
      //   display : 'none' ,
      //   transition: 'display 400ms ease'
        
      // }
   
   });
  