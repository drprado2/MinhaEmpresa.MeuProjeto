import React from 'react';
import { Provider } from 'react-redux';
import {store, history} from './store';
import {Route, Router, Switch} from "react-router-dom";
import { Pages } from "./utils/pages";
import LoginPage from './specific-components/login/login-page';
import MasterLayout from './generic-components/master-layout';

class App extends React.Component{

  render(){

    return(
      <Provider store={store}>
        <Router history={history} >
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <MasterLayout>
              <Pages history={history} />
            </MasterLayout>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;

