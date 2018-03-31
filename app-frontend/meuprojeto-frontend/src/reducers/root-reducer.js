import { combineReducers } from 'redux';
import {authenticationReducer} from './authentication-reducer';
import { routerReducer } from 'react-router-redux'
import {userReducer} from './user-reducer';

export default combineReducers({
  authentication: authenticationReducer,
  routing: routerReducer,
  users: userReducer
});
