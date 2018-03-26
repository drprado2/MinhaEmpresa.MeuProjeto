import React from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import FamilyPage from "../specific-components/relationships/family/family-page";
import {Dashboard} from "../specific-components/dashboard/dashboard-page";
import {FinancialLaunches} from "../specific-components/financial/launches/financialLaunches-page";
import {User} from "../specific-components/user/user-page";
import {FinancialAccount} from '../specific-components/financial/account/financialAccount';
import {Authenticator} from './authenticator';
import urls from './routes-urls';
import {ResourceNotFound} from './../generic-components/resource-not-found';

export const Pages = props => {
  const isAuth = Authenticator.IsAuthenticated();

  const RedirectToUser = () => <Redirect to={{pathname: urls.LOGIN}} />

  return (
    <Switch>
      <Route exact path={urls.FAMILIES}
             render={() => isAuth ? <FamilyPage {...props} /> : <RedirectToUser/>}
      />
      <Route exact path={urls.DASHBOARD}
             render={() => isAuth ? <Dashboard {...props} /> : <RedirectToUser/>}
      />
      <Route exact path={urls.FINANCIAL_LAUNCHES}
             render={() => isAuth ? <FinancialLaunches {...props} /> : <RedirectToUser/>}
      />
      <Route exact path={urls.USERS}
             render={() => isAuth ? <User {...props} /> : <RedirectToUser/>}
      />
      <Route exact path={urls.FINANCIAL_ACCOUNTS}
             render={() => isAuth ? <FinancialAccount {...props} /> : <RedirectToUser/>}
      />
      <Route
        render={() => isAuth ? <ResourceNotFound /> : <RedirectToUser/>}
      />
    </Switch>
  )
}