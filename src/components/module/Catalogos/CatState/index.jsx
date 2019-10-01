import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Fragment, Component } from "react";
import Admin from "../../../admin";
import { useStyles } from "./estilos/stylesStates";
import { withStyles } from "@material-ui/core/styles";
import Header from '../../../header';
import Card from '../../../commons/card'
import TableDecored from '../../../commons/TableDecored';
import * as actions from "../../../../actions";
import {  Link } from "react-router-dom";

class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: this.props.datosGenerales,
      flagPush: false,
      columns: [
        // { title: 'ID', field: 'id', type: 'numeric' },
        {
          field: 'name',
          Title: 'Avatar',
          render: rowData =>   <Link to={`/citycat/${rowData.id}`}>{rowData.name}</Link>
          // render: rowData =><Link to={`citycat/${rowData.id}`}>{rowData.name}</Link>
        }
      ]
    };
    this.handleOn = this.handleOn.bind(this);
  }
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.stateGet(id)
    this.setState({
      id  : id
    })
   }
  setDataTabs(data) {
  }

  handleOn(data, action) {
    if (action === 'add') {
      this.props.addState(data, this.state.id)
    }
    if (action === 'update') {
      this.props.updateState(data, this.state.id)
    }
    if (action === 'delete') {
      this.props.deleteState(data, this.state.id)
    }
    // this.setState({
    //   openAdd: true
    // });
  }
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className="root">
          <Admin {...this.props} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Header title="" module="Catalogos" name="Estados" />
            <Card color="title">
            </Card>
            <TableDecored
                title = "Estados"
                addButton={true}
                apiRestFull={true}
                tableData={this.props.states}
                columns={this.state.columns}
                handleOnAdd={(data) => { this.handleOn(data, 'add') }}
                handleOnUpdate={(data) => { this.handleOn(data, 'update') }}
                handleOnDelete={data => this.handleOn(data, 'delete')}
              />
          </main>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    // menu_admin: state.MenuAdmin.menu,
    alertState: state.state.alertState,
    states: state.state.states
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    stateGet : (id) => dispatch(actions.getState(id)),
    addState: (data, id) => dispatch(actions.addState(data, id)),
    updateState: (data, id) => dispatch(actions.updateState(data, id)),
    deleteState: (data, id) => dispatch(actions.deleteState(data, id)),
    offAlertState: () => dispatch(actions.offAlertState())
  };
};
// connect(mapStateToProps)
export default connect(
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(Brief)));
