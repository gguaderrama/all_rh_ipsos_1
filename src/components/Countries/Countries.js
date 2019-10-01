import React, { Component } from 'react';
import api  from '../../service/catalogs/api';
import { LanguageService } from '../../service/LanguageService';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';

import {DataTable} from '../prime/datatable/DataTable';
import {Column} from '../prime/column/Column';

export class Countries extends Component {

    constructor() {
        super();
        this.state = {
            countriesTableValue: [],
            languagesDropdownValue: [],
            loading: true,
            first: 0,
            rows: 10,
            totalRecords: 0,
            pag: 1,
            language: null, 
      
            dataViewValue: [],
            picklistSourceCars: [],
            picklistTargetCars: [],
            orderlistCars: [],
            treeData1: [],
            treeData2: [],
            selectedFile: null,
            selectedFiles: null,
            documents: [],
            documentsSelection: null,
            fullCalendarEvents: [],
            layout: 'list',
            sortOptions: [{ label: 'Newest First', value: '!year' }, { label: 'Oldest First', value: 'year' }, { label: 'Brand', value: 'brand' }]
          };
      
          // this.countryService = new CountryService();
          this.languageService = new LanguageService();

          this.onPage = this.onPage.bind(this);
          this.onClick = this.onClick.bind(this);
          this.onHide = this.onHide.bind(this);
          this.onLanguageChange = this.onLanguageChange.bind(this);
    }
    
    
    componentDidMount() {
      const data = api
        this.countryService.getCountries(this.state).then(data => {
            this.countries = data;
            this.setState({
              loading: false,
              totalRecords: data[0].total,
              countriesTableValue: data
            });
          });
          this.languageService.getLanguages(this.state).then(data => {
            this.languages = data;
            this.setState({
              loading: false,
              languagesDropdownValue: data
            });
          });
    }

    onLanguageChange(e) {
      this.setState({language: e.value});
    }
    
    onPage(event) {
        this.setState({
          loading: true,
          first: 0,
          pag: event.page + 1
        });
    
        setTimeout(() => {
          const startIndex = event.first;
    
          this.countryService.getCountries(this.state).then(data => {
            this.countries = data;
            this.setState({
              first: startIndex,
              loading: false,
              totalRecords: data[0].total,
              countriesTableValue: data 
            });
          });
        }, 250);
      }

    onClick() {
        this.setState({visible: true});
    }

    onHide() {
        this.setState({visible: false});
    }
    

    render() {
        const footer = (
            <div>
                <Button label="Guardar" icon="pi pi-check" onClick={this.onHide} />
            </div>
        );
        return (
            <div className="p-grid">
                    <div className="p-col-12"> 
                    <div className="card card-w-title">
                        <h1>Países</h1>
                    
                        <div className="ipsos-button-bar"   >
                            <Button label="Agregar" onClick={this.onClick} />
                        </div>
                        
                        <DataTable 
                            value={this.state.countriesTableValue}
                            paginator={true} 
                            rows={this.state.rows} 
                            totalRecords={this.state.totalRecords}
                            lazy={true} 
                            first={this.state.first} 
                            onPage={this.onPage} 
                            loading={this.state.loading}>
                            <Column field="name" header="País" filter={true} sortable={true} />
                            <Column header="Acciones"  style={{width:'80px'}}  />
                        </DataTable>
                    </div>
                </div>
                <Dialog header="Nuevo país" visible={this.state.visible} style={{width: '50vw'}} 
                    footer={footer} onHide={this.onHide} maximizable>
                      <Dropdown value={this.state.language} onChange={this.onLanguageChange} options={this.languages} placeholder="Idioma" optionLabel="description"/>
                </Dialog>
            </div>
        );
    }
}