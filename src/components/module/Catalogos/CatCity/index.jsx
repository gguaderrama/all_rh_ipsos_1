import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Fragment, Component } from "react";
import Admin from "../../../admin";
import { useStyles } from "./estilos/stylesCities";
import { withStyles } from "@material-ui/core/styles";
import Header from '../../../header';
import Card from '../../../commons/card'
import TableDecored from '../../../commons/TableDecored';
import axios from 'axios';
import * as actions from "../../../../actions";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: this.props.datosGenerales,
      flagPush: false,
      columns: [
        // { title: 'ID', field: 'id', type: 'numeric' },
        { title: 'Nombre', field: 'name' },
      ],
      id: 0
    };
    this.handleOn = this.handleOn.bind(this)
  }

  handleOn(data, action) {
    if (action === 'add') {
      this.props.addCitie(data, this.state.id)
    }
    if (action === 'update') {
      this.props.updateCitie(data, this.state.id)
    }
    if (action === 'delete') {
      this.props.deleteCitie(data, this.state.id)
    }
    // this.setState({
    //   openAdd: true
    // });
  }
  componentDidMount() {
      this.props.getCitie()
      const { id } = this.props.match.params
      this.setState({
        id  : id
      })
  }
 
  setDataTabs(data) {
  }
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className="root">
          <Admin {...this.props} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Header title="Ciudad" module="Estados" name="Ciudad" link2 = {`/statecat/${this.state.id}`}/>
            <Card color="title">
            </Card>
            <TableDecored
            addButton={true}
            // Allactions={}
            apiRestFull = {true}
            tableData={this.props.cities}
            columns={this.state.columns}
            handleOnAdd={(data) => {this.handleOn(data, 'add')}}
            handleOnUpdate={(data) => {this.handleOn(data, 'update')}}
            handleOnDelete={data => this.handleOn(data, 'delete')}
          />
            
            {/* <TableDecored
                addButton={true}
                apiRestFull={true}
                tableData={this.props.cities}
                columns={this.state.columns}
                handleOnAdd={(data) => { this.handleOn(data, 'add') }}
                handleOnUpdate={(data) => { this.handleOn(data, 'update') }}
                handleOnDelete={data => this.handleOn(data, 'delete')}
              /> */}
          </main>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    alertCitie: state.state.alertCitie,
    cities: state.cities.cities,
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    getCitie : () => dispatch(actions.getCitie()),
    addCitie : (data, id) => dispatch(actions.addCitie(data, id)),
    updateCitie : (data, id) => dispatch(actions.updateCitie(data, id)),
    deleteCitie : (data, id) => dispatch(actions.deleteCitie(data, id)),
    offAlertCitie : () => dispatch(actions.offAlertCitie())
  };
};
// connect(mapStateToProps)
export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(Brief)));
