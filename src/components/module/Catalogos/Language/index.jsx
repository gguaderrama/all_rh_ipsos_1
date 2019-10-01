import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Fragment, Component } from "react";
import Admin from "../../../admin";
import { useStyles } from "./estilos/stylesCountry";
import { withStyles } from "@material-ui/core/styles";
import Header from '../../../header';
import Card from '../../../commons/card'
import TableDecored from '../../../commons/TableDecored';
import * as actions from "../../../../actions";
class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: this.props.datosGenerales,
      flagPush: false,
      columns: [
        { title: "id", field: "id", type: "numeric", editable: 'never' },
        { title: "name", field: "name" },
      ],
      data: this.props.paises || []
    };
    
    this.handleOn = this.handleOn.bind(this);
  }
  componentDidMount() { }
  setDataTabs(data) {
  }
  handleOn(data, action) {
    console.log('esta es la data  *******************')
    if (action === 'add') {
      this.props.addPais(data)
    }
    if (action === 'update') {
      this.props.updatePais(data)
    }
    if (action === 'delete') {
      this.props.deletePais(data)
    }
    // this.setState({
    //   openAdd: true
    // });
  }


  componentDidMount() {
    this.props.pais()

  }

  componentWillReceiveProps(NextProps) {
    console.log(NextProps.paises, 'paises **********************************************************************')
    this.setState({
      data: NextProps.paises
    })
  }

  render() {
    const { classes } = this.props;
    console.log(this.props.paises, 'render view')
    return (
      <Fragment>
        <div className="root">
          <Admin {...this.props} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Header title="País" module="Catalogos" name="País" />
            <Card color="title">
            </Card>
            {/* {this.state.data.length > 1 ? ( */}
              <TableDecored
                addButton={true}
                // Allactions={}
                apiRestFull={true}
                tableData={this.props.paises}
                columns={this.state.columns}
                handleOnAdd={(data) => { this.handleOn(data, 'add') }}
                handleOnUpdate={(data) => { this.handleOn(data, 'update') }}
                handleOnDelete={data => this.handleOn(data, 'delete')}
              />

            {/* ) : (<div></div>)} */}

            {/* <TableDecored
              addButton={false}
              Allactions={true}
              tableData={this.state.data}
              columns={this.state.columns}
              handleOnAdd={this.handleOnAdd}
              handleOnDelete={data => this.handleOnDelete(data)}
            /> */}
          </main>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    // menu_admin: state.MenuAdmin.menu,
    alertPais: state.paises.alertPais,
    paises: state.paises.paises
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    pais: () => dispatch(actions.getPaises()),
    addPais: (data) => dispatch(actions.addPaises(data)),
    updatePais: (data) => dispatch(actions.updatePaises(data)),
    deletePais: (data) => dispatch(actions.deletePaises(data)),
    offAlertPais: () => dispatch(actions.offAlertPaises())
  };
};
// connect(mapStateToProps)
export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(Brief)));