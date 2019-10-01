import React from 'react'
import ReactTable from "react-table";
import "react-table/react-table.css";
import DatePickerDecored from "../DatePickerDecored";
import TextFieldDecored from "../TextFieldDecored";
import { IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import AlertDialog from "../Dialog";

class TabledDecored extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      openModal: false,
      rowToDelete: []
    };
    this.handleClickOpenModal = this.handleClickOpenModal.bind(this);
  }
  filterCaseInsensitive(filter, row) {
    const id = filter.pivotId || filter.id;
    if(typeof(row[id]) === 'string'){
    if (typeof row[id] === "string") {
      return row[id] !== undefined
        ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase())
        : true;
    }
    if(typeof(row[id]) === 'number'){
    if (typeof row[id] === "number") {
      return row[id] !== undefined
        ? String(row[id]).startsWith(filter.value)
        : true;
    }
}
    }

};

  handleClickOpenModal(event = null) {
    this.setState({
      
      openModal: !this.state.openModal,
      rowToDelete: event
    });
  }

  render() {
    const {
      addButton = true,
      Allactions = true,
      handleOnAdd = e => console.log("Add Table:>", e),
      handleOnDelete = e => console.log("Delete Table:>", e),
      handleOnEdit = e => console.log("Edit Table:>", e),
      nameButtonAdd = "AGREGAR",
      tableData = [
        { name: "Mexico", status: 1 },
        { name: "USA", status: 1  },
        { name: "Inglaterra", status: 0  },
        { name: "España", status: 0  }
      ],
      columns = [
        {
          Header: "Name",
          accessor: "name" // String-based value accessors!
        },
        {
            Header: "Estatus",
            accessor: "status",
            id: "over",
            Cell: ({ value }) => (value == 1 ? "ACTIVO" : "INACTIVO"),
            filterMethod: (filter, row) => {
              if (filter.value === "all") {
                return true;
              }
              if (filter.value === "true") {
                return row[filter.id] >0;
              }
              return row[filter.id] < 1;
            },
            Filter: ({ filter, onChange }) =>
              <select
                onChange={event => onChange(event.target.value)}
                style={{ width: "100%" }}
                value={filter ? filter.value : "all"}
              >
                <option value="all">Todos</option>
                <option value="true">Activos</option>
                <option value="false">Inactivos</option>
              </select>
          }
      ]
    } = this.props;

    let actions = [
      {
     
        Header: "Acciones",
        width: 100,
        accessor: "age",
        sortable: false,
        filterable: false,
        Cell: row => (
          
          <div style={{ textAlign: "center", width: "71%" }}>
            <div onClick={this.handleClickOpenModal} style={{ float: "left" }}>
              <EditIcon color="primary" />
            </div>
            <div onClick={this.handleClickOpenModal}  style = {{ float: 'right'}}>
            <div
              onClick={() => {
                this.handleClickOpenModal(row.original);
              }}
              style={{ float: "right" }}
            >
              <DeleteIcon style={{ color: "#d32f2f" }} />
            </div>
         
          </div>
          </div>
        )
      }
    ];
    let tableColumns = columns;
    if (Allactions === true) {
      tableColumns = [...tableColumns, ...actions];
    }
    console.log(tableColumns, 'demo *************************++')
    return (
      <div>
        <AlertDialog
          open={this.state.openModal}
          handleCloseDialog={() => {
            this.handleClickOpenModal();
          }}
          handleOnDelete = { handleOnDelete}
          handleOnDelete={() => {
            handleOnDelete(this.state.rowToDelete);
            this.handleClickOpenModal();
          }}
        />
        {addButton ? (
          <div
            style={{
              width: "10%",
              float: "right",
              marginBottom: "1%",
              textAlign: "right"
            }}
          >
            <Button variant="contained" color="primary" onClick={handleOnAdd}>
              {nameButtonAdd || ""}
            </Button>
            <br />
          </div>
        ) : (
          <div />
        )}
        <div className="tablas">
         
    
          <ReactTable
            data={tableData}
            columns={tableColumns}
            noDataText="No Data Available"
            filterable
            defaultPageSize={5}
            nextText="Siguiente"
            previousText="Anterior"
            noDataText="No hay datos"
            pageText="Página"
            ofText="de"
            defaultFilterMethod={(filter, row) =>
              this.filterCaseInsensitive(filter, row)
            }
            rowsText="filas"
            className="-striped -highlight"
          /> 
        </div>
      </div>
    );
  }
  }
  
export default TabledDecored;
 