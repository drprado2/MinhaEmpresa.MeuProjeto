import React, { Component } from 'react';

// Necessários para roteirizar
import { Route, Switch } from 'react-router-dom';

// Necessário para injetar o application state para os demais componentes
import { Provider } from 'react-redux';

// Middleware necessário para fazer chamadas assíncronas nas ActionCreators
import ReduxPromise from 'redux-promise';

// Necessário para criar o store e aplicar o middleware na sua criação
import { createStore, applyMiddleware } from 'redux';

// Verifique esse arquivo de reducers é necessário entende-lo para usar redux
import reducers from './reducers/root-reducer';

// Componente de exemplo, verifique o mesmo para ver como funciona a ligação
// dos componentes com o application state e com as actions creators
import CustomerContainer from './components/container/customer-container'

import DrawerMenu from './components/presentational/drawer-menu';

// Aqui nós criamos a função que será usada abaixo para criar um store
// com uso do middleware que permite fazer uso de promises nas action creators
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// Aqui nós criamos o store usando nossa função com uso do middleware
const store = createStoreWithMiddleware(reducers);

const App = () =>
    (
      // Aqui usamos o Provider ele tem que ficar antes de todos os componentes
      // que vão usar action creators e conectar com o application state do redux
      <Provider store={store}>
        {
          // Fique atento que dentro de Provider devemos ter apenas 1 tag (1 React Element)
        }
        <div>
          {
            // Note esse que esse h1 e esse hr irão aparecer em todas as páginas
            // da nossa roteirização, é um bom exemplo do que fariámos com um Side Menu
          }
          <DrawerMenu></DrawerMenu>
          {
            // O componente Switch é utilizado para agruparmos as rotas
          }
          <Switch >
            {
              // Aqui temos 1 rota o path será a url, o exact faz não aceitar paths como /customer/abc
              // o component é o component que iremos renderizar
            }
            <Route exact path="/customer" component={CustomerContainer} />
          </Switch>
        </div>
      </Provider>
    );

/*
  Nesse arquivo é isso, agora você deve olhar ainda
    1 - root-reducer para entender como montar o seu reducer
    2 - customer-action para ver como funciona a action creator
    3 - customer-service para ver um exemplo da chamada http
    4 - customer-container para ver como ligar um componente com o redux
 */

export default App;
