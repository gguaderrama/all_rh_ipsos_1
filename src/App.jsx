import React, { Fragment } from 'react';
import './App.css';
import Login from './components/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Admin from './components/admin'
import './styles/less/style.less';
import Backgrounds from '../src/assets/IPSOS_404.png';
import "./App.css";
import Budgets from "./components/budgets";
import Brief from "./components/budgets/brief_cotizacion";
import Employees from '../src/components/module/HumanResources/Employees'
import Holidays from './components/module/HumanResources/Holidays';
import Trainers from './components/module/HumanResources/Trainers';
import TrainingRequest from './components/module/HumanResources/TrainingRequest';
import Trainings from './components/module/HumanResources/Trainings';
import Participants from './components/module/HumanResources/Participants';
import HolidaysCatalog from './components/module/HumanResources/HolidayCatalog';
import ReportF2F from './components/module/Budgets/ReportF2F';
import WeeklyReport from './components/module/Budgets/Weekly_report';
import ReportKPI from './components/module/Budgets/ReportKPI';
import DashboardRRHH from './components/module/HumanResources/Dashboard'
import DashboardBudgets from './components/module/Budgets/Dashboard'
import ButtonScroll from './components/commons/ButtonScroll'
import SBSecondary from './components/commons/sidebarsecondary'
import Sidebp from './components/commons/sidebarsecondary'
import CountryCat from './components/module/Catalogos/CatCountry'
import CityCat from './components/module/Catalogos/CatCity'
import StateCat from './components/module/Catalogos/CatState'
import Info from './components/commons/ButtonInfo'
import TableCatalog from './components/commons/TableCatalog'
import Studycosts from './components/module/Budgets/Studycosts'
import FormsCatalog from './components/module/Catalogos/CatCountry/forms/forms'
import SnackBar from './components/commons/Snackbar'
import { Snackbar } from '@material-ui/core';
const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <Login {...props} />} ></Route>
          <Route path='/admin/user' component={Admin} />
          {/* //<Route exact path='/admin/juan' render={(props) => <Admin {...props} />}></Route> */}
          <Route exact path="/estimate/brief" render={props => <Brief {...props} />} />
          <Route exact path='/rh/employees' render={(props) => <Employees {...props} />}></Route>
          <Route exact path='/rh/holidays/:id' render={(props) => <Holidays {...props} />}></Route>
          <Route exact path='/rh/trainers' render={(props) => <Trainers {...props} />}></Route>
          <Route exact path='/rh/trainingrequest' render={(props) => <TrainingRequest {...props} />}></Route>
          <Route exact path='/rh/trainings' render={(props) => <Trainings{...props} />}></Route>
          <Route exact path='/rh/participants/:id' render={(props) => <Participants {...props} />}></Route>
          <Route exact path='/rh/holidayscatalog' render={(props) => <HolidaysCatalog{...props} />}></Route>
          <Route exact path='/estimate/reportf2f' render={(props) => <ReportF2F{...props} />}></Route>
          <Route exact path='/estimate/weeklyreport' render={(props) => <WeeklyReport{...props} />}></Route>
          <Route exact path='/estimate/reportkpi' render={(props) => <ReportKPI{...props} />}></Route>
          <Route exact path='/rh/dashboard' render={(props) => <DashboardRRHH{...props} />}></Route>
          <Route exact path='/dashboardbudgets' render={(props) => <DashboardBudgets{...props} />}></Route>
          <Route exact path='/sidebarsec' render={(props) => <SBSecondary{...props} />}></Route>
          <Route exact path='/buttonu' render={(props) => <ButtonUpload{...props} />}></Route>
          <Route exact path='/sidebp' render={(props) => <Sidebp{...props} />}></Route>
          <Route exact path='/countrycat' render={(props) => <CountryCat{...props} />}></Route>
          <Route exact path='/statecat/:id' render={(props) => <StateCat{...props} />}></Route>
          <Route exact path='/citycat/:id' render={(props) => <CityCat{...props} />}></Route>
          <Route exact path='/countrycat' render={(props) => <CountryCat{...props} />}></Route>
          <Route exact path='/info' render={(props) => <Info{...props} />}></Route>
          <Route exact path='/tablecatalog' render={(props) => <TableCatalog{...props} />}></Route>
          {/* <Route exact path='/admin' component={Admin}></Route>  */}
          <Route exact path="/budgets" render={props => <Budgets {...props} />}/>
          <Route exact path='/country/:id?' render={(props) => <FormsCatalog  {...props}/>}></Route>
          <Route exact path='/studycosts' render={(props) => <Studycosts  {...props}/>}></Route>
          <Route exact path='/snackbar' render={(props) => <Snackbar  {...props}/>}></Route>
          <Route component={error_404} />
        </Switch>
      </Router>
      <ButtonScroll></ButtonScroll>
    </Fragment>
  );
};
const error_404 = () => {
  return (
    <div className="App">
      <div className="errors">
        <h1 className="error">ERROR PAGE NOT FOUND</h1>
      </div>
      <div className="contenedor">
        <div className="primer-numero">
          <h1>4</h1>
        </div>
        <img className="logo404" src={Backgrounds} alt="" />
        <img className="logos404" src={Backgrounds} alt="" />

        <div className="segundo-numero">

          <h1>4</h1>
        </div>

      </div>
    </div>
  );
};

export default Routes;
