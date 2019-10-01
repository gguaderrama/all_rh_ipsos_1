import React, {Component} from 'react';
import {CarService} from '../service/CarService';
import {NodeService} from '../service/NodeService';
import {EventService} from '../service/EventService';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column'
import {Panel} from 'primereact/panel';
import {Button} from 'primereact/button';


export class DataDemo extends Component {

    constructor() {
        super();
        this.state = {
            dataTableValue:[],
            dataViewValue:[],
            picklistSourceCars:[],
            picklistTargetCars:[],
            orderlistCars:[],
            treeData1:[],
            treeData2:[],
            selectedFile:null,
            selectedFiles:null,
            documents:[],
            documentsSelection:null,
            fullCalendarEvents:[],
            layout: 'list',
            sortOptions: [
                {label: 'Newest First', value: '!year'},
                {label: 'Oldest First', value: 'year'},
                {label: 'Brand', value: 'brand'}
            ],
            organizationChartValue: [{
                label: 'F.C Barcelona',
                expanded: true,
                children: [
                    {
                        label: 'F.C Barcelona',
                        expanded: true,
                        children: [
                            {
                                label: 'Chelsea FC'
                            },
                            {
                                label: 'F.C. Barcelona'
                            }
                        ]
                    },
                    {
                        label: 'Real Madrid',
                        expanded: true,
                        children: [
                            {
                                label: 'Bayern Munich'
                            },
                            {
                                label: 'Real Madrid'
                            }
                        ]
                    }
                ]
            }]
        };

        this.carService = new CarService();
        this.nodeService = new NodeService();
        this.eventService = new EventService();

        this.dataViewItemTemplate = this.dataViewItemTemplate.bind(this);
        this.pickListTemplate = this.pickListTemplate.bind(this);
        this.orderListTemplate = this.orderListTemplate.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
    }

    componentDidMount() {
        this.carService.getCarsMedium().then(data => this.setState({dataTableValue: data}));
        this.nodeService.getTreeNodes(this).then(nodes => this.setState({treeData1: nodes}));
        this.nodeService.getTreeNodes(this).then(nodes => this.setState({treeData2: nodes}));
        this.carService.getCarsLarge().then(data => this.setState({dataViewValue: data}));
        this.nodeService.getTreeTableNodes().then(files => this.setState({documents: files}));
        this.carService.getCarsMedium().then(data => this.setState({picklistSourceCars: data}));
        this.carService.getCarsSmall().then(data => this.setState({orderlistCars: data}));
        this.eventService.getEvents().then(events => this.setState({fullCalendarEvents: events}));
    }

    pickListTemplate(car){
        if (!car) {
            return;
        }
        
        return <div className="p-clearfix">
            <img src={`assets/demo/images/car/${car.brand}.png`} alt={car.brand} style={{display:'inline-block', margin:'2px 0 2px 2px', width: '50px'}}/>
            <div style={{fontSize:'16px', float:'right', margin:'15px 5px 0 0'}}>{car.brand}</div>
        </div>
    }

    orderListTemplate(car){
        if (!car) {
            return;
        }

        return (
            <div className="p-clearfix">
                <img src={`assets/demo/images/car/${car.brand}.png`} alt={car.brand} style={{display:'inline-block',margin:'2px 0 2px 2px', width: '50px'}}/>
                <div style={{fontSize:14,float:'right',margin:'15px 5px 0 0'}}>{car.year} - {car.color}</div>
            </div>
        );
    }

    dataViewItemTemplate(car,layout) {
        if (!car) {
            return;
        }

        let src = "assets/demo/images/car/" + car.brand + ".png";

        if (layout === 'list') {
            return (
                <div className="p-grid" style={{padding: '2em', borderBottom: '1px solid #d9d9d9'}}>
                    <div className="p-col-12 p-md-3">
                        <img src={src} alt={car.brand}/>
                    </div>
                    <div className="p-col-12 p-md-8 car-details">
                        <div className="p-grid">
                            <div className="p-col-2 p-sm-6">Vin:</div>
                            <div className="p-col-10 p-sm-6">{car.vin}</div>

                            <div className="p-col-2 p-sm-6">Year:</div>
                            <div className="p-col-10 p-sm-6">{car.year}</div>

                            <div className="p-col-2 p-sm-6">Brand:</div>
                            <div className="p-col-10 p-sm-6">{car.brand}</div>

                            <div className="p-col-2 p-sm-6">Color:</div>
                            <div className="p-col-10 p-sm-6">{car.color}</div>
                        </div>
                    </div>

                    <div className="p-col-12 p-md-1 search-icon" style={{marginTop:'40px'}}>
                        <Button icon="pi pi-search"></Button>
                    </div>
                </div>
            );
        }

        if (layout === 'grid') {
            return (
                <div style={{ padding: '.5em' }} className="p-col-12 p-md-3">
                    <Panel header={car.vin} style={{ textAlign: 'center' }}>
                        <img src={`assets/demo/images/car/${car.brand}.png`} alt={car.brand} />
                        <div className="car-detail">{car.year} - {car.color}</div>
                        <Button icon="pi pi-search"></Button>
                    </Panel>
                </div>
            );
        }
    }

    onSortChange(event) {
        let value = event.value;

        if (value.indexOf('!') === 0)
            this.setState({sortOrder: -1, sortField:value.substring(1, value.length), sortKey: value});
        else
            this.setState({sortOrder: 1, sortField:value, sortKey: value});
    }

    render() {

        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card card-w-title">
                        <h1>Empleados</h1>
                        <DataTable value={this.state.dataTableValue} paginatorPosition="both" selectionMode="single" header="Lista de empleados" paginator={true} rows={10}
                            responsive={true} selection={this.state.dataTableSelection} onSelectionChange={event => this.setState({dataTableSelection: event.value})}>
                            <Column field="vin" header="Vin" sortable={true}/>
                            <Column field="year" header="Year" sortable={true}/>
                            <Column field="brand" header="Brand" sortable={true}/>
                            <Column field="color" header="Color" sortable={true}/>
                        </DataTable>
                    </div>
                </div>

            </div>   
        );
    }
}