import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Fragment, Component } from "react";
import Admin from "../../../../admin";
import { useStyles } from "../estilos/styleForms";
import { withStyles } from "@material-ui/core/styles";
import * as actions from "../../../../../actions";
import forms from "./forms";
class FormsCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleOnActions(data) {
    console.log('se ejecuta la actualizacion')
    console.log(this.state, 'esta es la data a editar')
    // this.props.updatePaises(this.state.dataToEdit)
  }
  handleDataInputs(data, count) {
  }
  closeDialog() {
    this.setState({
      openModal: false
    })
  }
  componentDidMount() {
    const { id } = this.props.match.params
    // this.props.getCountryByID(id)

    this.props.getCountryByID_1(id).then(resp => console.log(resp, 'esta es la respuesta ******************'))
    
  }

  render() {
    const { classes } = this.props;
    const { allData } = this.state;
    // console.log(this.state.allInputs, 'all inputs -------->', this.props.countryById)
    return (
      <Fragment>
          <forms/>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    countryById: state.paises.countryById,
  };
};
const mapDispatch = (dispatch, props) => {
  // dispatch(actions.getCountryByID(props.match.params.id))
  return {
    getCountryByID: (id) => dispatch(actions.getCountryByID(id)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(FormsCatalog)));