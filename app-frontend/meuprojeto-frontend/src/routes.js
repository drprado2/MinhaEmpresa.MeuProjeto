import React from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import FamilyPage from "./pages/family/family-page";
import {Dashboard} from "./pages/dashboard/dashboard-page";
import {FinancialLaunches} from "./pages/financialLaunches/financialLaunches-page";
import {User} from "./pages/user/user-page";
import {FinancialAccount} from './pages/financialAccount/financialAccount';
import {Authenticator} from './authenticator';

export const Routes = props => {
  const isAuth = Authenticator.IsAuthenticated();

  return (
    <Switch>
      <Route exact path="/relacionamentos/familias"
             render={() => isAuth ? <FamilyPage {...props} /> : <Redirect to={{pathname: '/login'}} />}
      />
      <Route exact path="/dashboard"
             render={() => isAuth ? <Dashboard {...props} /> : <Redirect to={{pathname: '/login'}} />}
      />
      <Route exact path="/financeiro/lancamentos"
             render={() => isAuth ? <FinancialLaunches {...props} /> : <Redirect to={{pathname: '/login'}} />}
      />
      <Route exact path="/usuario"
             render={() => isAuth ? <User {...props} /> : <Redirect to={{pathname: '/login'}} />}
      />
      <Route exact path="/financeiro/contas"
             render={() => isAuth ? <FinancialAccount {...props} /> : <Redirect to={{pathname: '/login'}} />}
      />
      <Route
        render={() => isAuth ? <h1>Página não encontrada</h1> : <Redirect to={{pathname: '/login'}} />}
      />
    </Switch>
  )
}