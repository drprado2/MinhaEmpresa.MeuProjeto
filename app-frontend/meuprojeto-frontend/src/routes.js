import React from 'react';
import {Route, Router, Switch} from "react-router-dom";
import FamilyPage from "./pages/family/family-page";
import {Dashboard} from "./pages/dashboard/dashboard-page";
import {FinancialLaunches} from "./pages/financialLaunches/financialLaunches-page";
import {User} from "./pages/user/user-page";
import {FinancialAccount} from './pages/financialAccount/financialAccount';

export const Routes = props => {
  return (
      <Router history={props.history}>
        <Switch>
          <Route exact path="/relacionamentos/familias" component={FamilyPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/financeiro/lancamentos" component={FinancialLaunches} />
          <Route exact path="/usuario" component={User} />
          <Route exact path="/financeiro/contas" component={FinancialAccount} />
        </Switch>
      </Router>
  )
}