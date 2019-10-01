import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Component,Fragment } from "react";
import {Button} from 'primereact/button';
import { useStyles } from "../estilos/stylebrief";
import { withStyles } from "@material-ui/core/styles";
import TextFieldDecored from "../../../commons/TextFieldDecored";
import TextAreaDecored from "../../../commons/TextAreaDecored";
import DatePickerDecored from "../../../commons/DatePickerDecored";
import * as actions from "../../../../actions";
// import Button from '../../../commons/ButtonGlobal'
import TableDecored from '../../../commons/TableDecored'

class DatosGeneralesBrief extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: this.props.datosGenerales,
            flagPush: false,
            columns: [
                { title: 'Rubro', field: 'rubro' },
                { title: 'Cantidad', field: 'cantidad' },
                { title: 'Valor Calculado', field: 'valorcalculado' },
                { title: 'Valor', field: 'valor' },
                { title: 'Total', field: 'total' },
            ],
            data: [
                {
                    rubro: 'Levantamiento', cantidad: ' 1', valorcalculado: '0.00', valor: '0.00', total: '0.00'
                },
                {
                    rubro: 'Auditoria', cantidad: ' 2', valorcalculado: '0.00', valor: '0.00', total: '0.00'
                },
                {
                    rubro: 'Host', cantidad: ' 3', valorcalculado: '450.00', valor: '450.00', total: '450.00'
                },
                {
                    rubro: 'Captura', cantidad: ' 4', valorcalculado: '0.00', valor: '0.00', total: '0.00'
                },
                {
                    rubro: 'Codificación', cantidad: '5', valorcalculado: '0.00', valor: '0.00', total: '0.00'
                },
                {
                    rubro: 'SubTotal', cantidad: ' 6', valorcalculado: '0.00', valor: '0.00', total: '0.00'
                },
                {
                    rubro: 'Indirectos', cantidad: ' 1', valorcalculado: '450.00', valor: '450.00', total: '450.00'
                },
                {
                    rubro: 'CostoTotal', cantidad: ' 2', valorcalculado: '13.50', valor: '13.50', total: '13.50'
                },
                {
                    rubro: 'Costo c.u.', cantidad: ' 2', valorcalculado: '463.50', valor: '463.50', total: '463.50'
                },
                {
                    rubro: 'Programación', cantidad: '4', valorcalculado: '0.00', valor: '0.00', total: '0.00'
                },
                {
                    rubro: 'DP', cantidad: ' 3', valorcalculado: '0.00', valor: '0.00', total: '0.00'
                },
                {
                    rubro: 'Reclutamiento', cantidad: ' 1', valorcalculado: '0.00', valor: '0.00', total: '0.00'
                },
                {
                    rubro: 'Incentivos', cantidad: ' 1', valorcalculado: '0.00', valor: '0.00', total: '0.00'
                },
            ],
        };
    }
    componentDidMount() { }
    setDataTabs(data) {
    }
    render() {
        const { allData } = this.state;
        const { classes } = this.props;
        return (
            <Fragment>
            {/* <TableDecored
                addButton={true}
                Allactions={true}
                title="Muestras"
                apiRestFull={false}
                tableData={this.state.data}
                columns={this.state.columns}
                handleOnAdd={(data) => { this.handleOn(data, 'add') }}
                handleOnUpdate={(data) => { this.handleOn(data, 'update') }}
                handleOnDelete={data => this.handleOn(data, 'delete')}
            />
            <TextAreaDecored
            style={{ width: "100%", marginRight: "3%" }}
            label="Publico Objetivo"
            name="objetivos"
            value={allData.objetivos}
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
            value={allData.objetivos}
            maxLength="40"
            rows={2}
          /> */}
         <Button label="Success" className="p-button-success" />

          </Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        datosGenerales: state.datosGenerales.datos_generales,
        area_menu: state.MenuAdmin.area,
        alertArea: state.MenuAdmin.alertArea
    };
};
const mapDispatch = (dispatch, props) => {
    return {
        setDatosGenerales: value => dispatch(actions.datosGenerales(value)),
        area: () => dispatch(actions.getArea()),
        addArea: (data) => dispatch(actions.addArea(data)),
        updateArea: (data) => dispatch(actions.updateArea(data)),
        deleteArea: (data) => dispatch(actions.deleteArea(data)),
        offAlertArea: () => dispatch(actions.offAlertArea())
        // menuAdminFuncion: value => dispatch(actions.menu_admin(value))
    };
};

// connect(mapStateToProps)

export default connect(
    // { ...actions },
    mapStateToProps,
    mapDispatch
)(withStyles(useStyles)(withTranslate(DatosGeneralesBrief)));
