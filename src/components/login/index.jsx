import { connect } from 'react-redux'
import { withTranslate, IntlActions } from 'react-redux-multilingual'
import React, { Component, Fragment } from 'react';
import Logo from '../../assets/IPSOS_OPERACIONES.png'
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { styles } from "./styles";
import FormControl from '@material-ui/core/FormControl';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueSelect: ''
    }
    this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
  }
  componentDidMount() {
  }
  handleOnChangeInput(e, panel) {
    let value = e.target.value
    this.setState({ valueSelect: value }, () => {
      console.log(value, 'dealersOverallTotal1');
    });
    if (value === 'es' || value === 'en') {
      this.props.setLanguage(value)
    }
  }
  render() {
    const {
      classes
    } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img src={Logo} alt="Logo" width="60%" />
          <FormControl className={classes.formControl}>
          </FormControl>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={this.props.translate('LOGIN.email')}
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
              label={this.props.translate('LOGIN.password')}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={this.props.translate('LOGIN.remember_user')}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {this.props.translate('LOGIN.button_message')}
            </Button>
            <Grid container>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
        </Box>
      </Container>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    setLanguage: (event) => dispatch(IntlActions.setLocale(event))
  }
}
export default connect(
  mapStateToProps,
  mapDispatch
)(withStyles(styles)(withTranslate(Login)))