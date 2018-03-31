import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import "./index.css";
import App from './App';
import {LocaleProvider} from "antd";
import ptBR from 'antd/lib/locale-provider/pt_BR';
import {FetchMock} from './mock-api/fetch-mock';
import {UserApi} from './mock-api/user/user-api';

FetchMock.loadApis(new UserApi());

ReactDOM.render(
  <LocaleProvider locale={ptBR}>
    <App />
  </LocaleProvider>
    , document.getElementById('root'));
registerServiceWorker();