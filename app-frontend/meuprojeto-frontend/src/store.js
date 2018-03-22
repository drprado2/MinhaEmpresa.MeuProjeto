import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/root-reducer';
import { routerMiddleware } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory';

export const history = createBrowserHistory();

const router = routerMiddleware(history);
const middleware = applyMiddleware(thunk, router);

export const store = createStore(reducer, middleware);

