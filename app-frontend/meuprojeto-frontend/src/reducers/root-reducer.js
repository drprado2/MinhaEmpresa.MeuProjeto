import { combineReducers } from 'redux';
import {authenticationReducer} from './authentication-reducer';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  authentication: authenticationReducer,
  routing: routerReducer
});
