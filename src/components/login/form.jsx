import Logo from '../../assets/IPSOS_OPERACIONES.png'
import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';

import Background from '../../assets/Capa_10.png';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      backgroundImage: `url(${Background})`,
      // backgroundPosition: 'center',
      // backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
      // height: 'auto'
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
  },
}));


let handleOnChangeInput = function (e) {
  console.log(e.target.value)
}

const Loginform = (props) => {
  // console.log(props.translate())
  console.log(props, 'estas son las props')

  // IntlActions.setLocale('en')

  let lang = ''
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Select
        value={props.valueSelect}
        onChange={(e) => { handleOnChangeInput(e) }}
        //   input={<Input name="age" id="age-label-placeholder" />}
        displayEmpty
        name="age"
        className={classes.selectEmpty}
      >
        <MenuItem value={'es'}>Español</MenuItem>
        <MenuItem value={'en'}>Inglés</MenuItem>
      </Select>


      <p>Hey there</p>
      {props.translate('LOGIN.hello')}
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography> */}
        <img src={Logo} alt="Logo" width="60%" />

        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={props.translate('LOGIN.hello')}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={lang.CLAVE}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={props.translate('LOGIN.remember_user')}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Ingresa
              </Button>
          <Grid container>
            {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
            {/* <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid> */}
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        {/* <MadeWithLove /> */}
      </Box>
    </Container>
  )
}


export default Loginform