import React from "react";
import "react-table/react-table.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import AlertDialog from "../Dialog";
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from "material-table";
import Search from "@material-ui/icons/Search";
import Sort from "@material-ui/icons/ArrowUpward";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Clear from "@material-ui/icons/CancelOutlined";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import Add from "@material-ui/icons/Add";
import Edit from "@material-ui/icons/Edit";
import Remove from "@material-ui/icons/Delete";
import zIndex from "@material-ui/core/styles/zIndex";
import ViewColumn from '@material-ui/icons/ViewColumn';

class TabledDecored extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      rowToDelete: [],
      data: [],
      columns: this.props.columns
    };
    this.handleClickOpenModal = this.handleClickOpenModal.bind(this);
    this.onRowAdd = this.onRowAdd.bind(this);
  }
  filterCaseInsensitive(filter, row) {
    const id = filter.pivotId || filter.id;
    if (typeof row[id] === "string") {
      return row[id] !== undefined
        ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase())
        : true;
    }
    if (typeof row[id] === "number") {
      return row[id] !== undefined
        ? String(row[id]).startsWith(filter.value)
        : true;
    }
  }
  handleClickOpenModal(event = null) {
    this.setState({
      openModal: !this.state.openModal,
      rowToDelete: event
    });
  }
  onRowAdd(data) {
    console.log("llego on row dara");
    this.setState({ ...this.state, data });
  }

  componentWillReaceiveProps(nextProps) {
      if(this.state.data.length >= 1){

      }
  }

  render() {
    // console.log(this.state.data , 'esta es la data de la tabla ¨+*********************************++')
    {this.state.data.length >= 1 ?  this.state.data : this.props.tableData}

   let value = this.props.tableData
     if(this.state.data.length >= 1){
       value = this.state.data
     }


    const {
      apiRestFull = false,
      title = '',
      url = 'http://192.168.0.68:5081/api/Countries/?',
      onlyEditDelete = false,
      route = 'http://192.168.0.68:5081/api/Countries/?',
      addButton = true,
      Allactions = true,
      action = [],
      search = false,
      paging = true,
      filtering = true,
      handleOnAdd = e => console.log("Add Table:>", e),
      handleOnDelete = e => console.log("Delete Table:>", e),
      handleOnUpdate = e => console.log("Edit Table:>", e),
      nameButtonAdd = "AGREGAR",
      columns = [
        { title: "Clave", field: "clave", type: "numeric",cellStyle: {
          backgroundColor: 'red',
          color: '#FFF'
        }, },
        { title: "Nombre", field: "nombre" },
        { title: "Apellido Paterno", field: "apellidopaterno" },
        { title: "Apellido Materno", field: "apellidomaterno" },
        { title: "Tipo Personal", field: "tipopersonal" },
        { title: "Depto/Area", field: "deptoarea" },
        { title: "Fecha Ingreso", field: "fechaingreso" },
        { title: "Fecha Baja", field: "fechabaja" }
      ],
      tableData = []
    } = this.props;

    let actions = [
      {
        Header: "Acciones",
        width: 100,
        accessor: "age",
        sortable: false,
        filterable: false,
        Cell: row => (
          <div style={{ background:'blue',textAlign: "center", width: "71%" }}>
            <div onClick={handleOnEdit} style={{ float: "left" }}>
              <EditIcon color="primary" />
            </div>
            <div
              onClick={() => {
                this.handleClickOpenModal(row.original);
              }}
              style={{ float: "right" }}
            >
              <DeleteIcon style={{ color: "#d32f2f" }} />
            </div>
          </div>
        )
      }
    ];
    // let tableColumns = columns;
    // if (Allactions === true) {
    //   tableColumns = [...tableColumns, ...actions];
    // }
    let addedAll = {}
    if (Allactions === true) {
      addedAll = {
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              let data = []
              if(this.state.data.length >= 1){
                 data = [ ...this.state.data];
              }else{
                data = [...this.props.tableData];
              }
              if(apiRestFull === false){
                data.push(newData);
                this.onRowAdd(data);
                this.props.handleData(this.state.data)
                // setState({ ...this.state, data });
              }
              if(apiRestFull === true){
                data.push(newData);
                this.props.handleOnAdd(newData)
              }
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if(apiRestFull === false){
                let data = []
                if(this.state.data.length >= 1){
                   data = [ ...this.state.data];
                }else{
                  data = [...this.props.tableData];
                }
                data[data.indexOf(oldData)] = newData;
                // setState({ ...this.state, data });
                this.onRowAdd(data);
                this.props.handleData(this.state.data)
              }
              if(apiRestFull === true){
                this.props.handleOnUpdate(newData)
              }
            }, 600);
          }),
        // onRowDelete: oldData =>
        //   new Promise(resolve => {
        //     setTimeout(() => {
        //       resolve();
        //       if(apiRestFull === false){
        //         const data = [...this.state.data];
        //         data.splice(data.indexOf(oldData), 1);
        //         // setState({ ...this.state, data });
        //         this.onRowAdd(data);
  
        //       }
        //       if(apiRestFull === true){
        //         this.props.handleOnDelete(oldData)
        //       }
        //     }, 600);
        //   })
      }

   }
    let OpcionalModalEdit = []

    if (onlyEditDelete === true) {
      OpcionalModalEdit = [
        {
          icon: (() => <Edit className="color-icons" />),
          onClick: (event, rowData) => {
              handleOnUpdate(rowData)
          }
        },
      ]
      addedAll = {
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if(apiRestFull === false){
                const data = [...this.state.data];
                data.splice(data.indexOf(oldData), 1);
                // setState({ ...this.state, data });
                this.onRowAdd(data);
  
              }
              if(apiRestFull === true){
                this.props.handleOnDelete(oldData)
              }
            }, 600);
          }),
          onRowClick : event => {
          }
      }
    }
   return (
      <div>
        <AlertDialog
          open={this.state.openModal}
          handleCloseDialog={() => {
            this.handleClickOpenModal();
          }}
          // handleOnDelete={() => {
          //   handleOnDelete(this.state.rowToDelete);
          //   this.handleClickOpenModal();
          // }}
        />
        {addButton ? (
          <div
            style={{
              width: "10%",
              float: "right",
              marginBottom: "1%",
              textAlign: "right",
              zIndex: '18784',
              backgroundColor:'#00AFA9'
            }}
          >
            {/* <Button variant="contained" color="primary" onClick={handleOnAdd}>
              {nameButtonAdd || ""}
            </Button> */}
            <br />
          </div>
        ) : (
            <div />
          )}
        <div className="tablas">
          <MaterialTable
            onRowClick={(event, rowData) =>console.log('wejnjfjewnf')}
            title={title}
            icons={{
              Check: Check,
              DetailPanel: ChevronRight,
              Clear: Clear,
              Export: SaveAlt,
              Filter: FilterList,
              FirstPage: FirstPage,
              LastPage: LastPage,
              NextPage: ChevronRight,
              PreviousPage: ChevronLeft,
              Search: Search,
              SortArrow: Sort,
              Add: (() => <Add className="color-icon-add" value="agregar" />),
              Edit: (() => <Edit className="color-icons" />),
              // Delete: (() => <Remove className="delete" />),
              ViewColumn:  (() => <Remove  className="delete" />)
            }}
            actions={OpcionalModalEdit}
            options={{
              //exportButton: true,
              // exportButton: true,
              // selection: true,
              filtering: filtering,
              actionsColumnIndex: -1,
              search: search,
              paging: paging,
              headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF',
                textAlign:'left',
                padding:'5px 5px 5px 5px',
                fontSize:'12px',
                borderStyle:'dashed',
                borderColor:'white',
              },
              rowStyle: rowData => ({
                backgroundColor: (this.state.selectedRow && this.state.selectedRow.tableData.id === rowData.tableData.id) ? '#00AFA9' : '#FFF'
              }),
            }}
            columns={this.props.columns}
            data={value}
            editable={addedAll}
          />
        </div>
      </div>
    );
  }
}
export default TabledDecored;
