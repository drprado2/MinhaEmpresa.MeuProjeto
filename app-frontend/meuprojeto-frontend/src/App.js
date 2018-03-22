import React from 'react';

import { Provider } from 'react-redux';
import {store, history} from './store';

import createBrowserHistory from 'history/createBrowserHistory';
import {Route, Router, Switch, Redirect} from "react-router-dom";
import { Routes } from "./routes";

import CenterLayout from "./components/center-layout";
import { Layout } from 'antd';
import {Login} from './pages/login/login-page';
import MenuLateral from './components/menu-lateral';

import {Authenticator} from './authenticator';


// const history = createBrowserHistory();

class App extends React.Component{

  render(){
    const isAuth = Authenticator.IsAuthenticated();

    return(
      <Provider store={store}>
        <Router history={history} >
          <Switch>
            <Route exact path="/login"
                   component={Login} />
            />
            <Layout style={{ minHeight: '100vh' }}>
              <MenuLateral history={history}/>
              <CenterLayout history={history}>
                <Routes history={history} />
              </CenterLayout>
            </Layout>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;

