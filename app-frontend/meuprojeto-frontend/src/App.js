import React from 'react';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/root-reducer';
import createBrowserHistory from 'history/createBrowserHistory';
import { CenterLayout } from "./components/center-layout";
import { Routes } from "./routes";
import { Layout } from 'antd';

import MenuLateral from './components/menu-lateral';


const history = createBrowserHistory();
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

const App = () =>
  (
      <Provider store={store}>
        <Layout style={{ minHeight: '100vh' }}>
          <MenuLateral history={history}></MenuLateral>
          <CenterLayout history={history}>
            <Routes history={history} />
          </CenterLayout>
        </Layout>
      </Provider>
  );

export default App;

