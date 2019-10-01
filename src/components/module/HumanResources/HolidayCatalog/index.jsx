import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Fragment, Component } from "react";
import Admin from "../../../admin";
import { useStyles } from "./estilos/stylesHolidayCatalog";
import { withStyles } from "@material-ui/core/styles";
import Header from '../../../header';
import Card from '../../../commons/card'
import * as actions from "../../../../actions";
import Paper from '@material-ui/core/Paper';
import TableDecored from '../../../commons/TableDecored';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import clsx from 'clsx';
class HolidayCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: this.props.hcatalog,
      flagPush: false,
     columns: [
       // { title: 'Clave', field: 'vacationDaysID', type: 'numeric' },
        // { title: 'Personal', field: 'employeeType.name'   },
        {
          title: 'Personal',
          field: 'employeeType.id',
          lookup: { 1: 'Nomina', 2: 'depatment1', 5: 'employee general', 6: 'employee type prueba' },
        },
        { title: 'Antiguedad', field: 'period' },
        { title: 'Días de Vacaciones', field: 'count' },
        {
          title: 'Estatus',
          field: 'active',
          lookup: { 0: 'Inactivo', 1: 'Activo'},
        },
      ],
      id : 0
    
    };
        this.handleOn = this.handleOn.bind(this)
  }
  handleOn(data, action) {
    if (action === 'add') {
      this.props.addHcatalog(data, this.state.id)
    }
    if (action === 'update') {
      this.props.updateHcatalog(data, this.state.id)
    }
    if (action === 'delete') {
      this.props.deleteHcatalog(data, this.state.id)
    }
    // this.setState({
    //   openAdd: true
    // });
  }

  componentDidMount() { 

    const dinamicObject = [
      { id: 4, name: "name" },
      { id: 2, name: "Mehmet" },
      { id: 3, name: "middle" }
      ];

      let obj = dinamicObject.reduce(function(acc, cur, i) {
        acc[cur.id] = cur.name;
        return acc;
        }, {});

        console.log(dinamicObject, 'objeto dinamico')
    this.props.getHcatalog()
    const { id } = this.props.match.params
    this.setState({
      id  : id
    })
  }
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className="root">
          <Admin {...this.props} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Header  title="Catalogo de vacaciones" module="RRHH" name="catalogos" />
           
            <Paper className={classes.root}>
            
            <TableDecored
            title=""
            addButton={true}
            Allactions={true}
            apiRestFull = {true}
            tableData={this.props.hcatalog}
            columns={this.state.columns}
            handleOnAdd={(data) => {this.handleOn(data, 'add')}}
            handleOnUpdate={(data) => {this.handleOn(data, 'update')}}
            handleOnDelete={data => this.handleOn(data, 'delete')}
          />  
        
            </Paper>
          </main>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  console.log(state, '*****************************************')
  return {
    alertHcatalog: state.state.alertHcatalog,
    hcatalog: state.catalogh.hcatalog,
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    getHcatalog: () => dispatch(actions.getHcatalog()),
    addHcatalog : (data, id) => dispatch(actions.addHcatalog(data, id)),
    updateHcatalog : (data, id) => dispatch(actions.updateHcatalog(data, id)),
    deleteHcatalog : (data, id) => dispatch(actions.deleteHcatalog(data, id)),
    offAlertHcatalog : () => dispatch(actions.offAlertHcatalog())
  };
};
// connect(mapStateToProps)
export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(HolidayCatalog)));