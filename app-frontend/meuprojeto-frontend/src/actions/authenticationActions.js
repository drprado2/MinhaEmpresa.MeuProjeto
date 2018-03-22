import {actionsTypes} from './action-types';
import {Authenticator} from './../authenticator';
import { push } from 'react-router-redux';

const get = (values) => new Promise((resolve, reject) => {
  setTimeout(()=>{
    if(values.user === 'drprado2' && values.password === '123')
      resolve({userName: 'Adriano', userLogin : 'drprado2', userEmail: 'a@gmail.com'});

    reject(["Login ou senha inválidos"]);
  }, 3000)
})

export const authenticate = values => {
  return dispatch => {
    console.log("Olha o dispatcher: ", dispatch)
    dispatch({type: actionsTypes.AUTHENTICATE_START});
    get(values)
      .then(x =>{
        Authenticator.SetAuth(values.rememberMe, JSON.stringify(x));
        dispatch(push('/dashboard'));
        dispatch({type: actionsTypes.AUTHENTICATE_DONE, payload: x});
      })
      .catch(x => dispatch({type: actionsTypes.AUTHENTICATE_ERROR, payload: x}));
  }
}

export const logout = () => {
  return dispatch => {
    Authenticator.Logout();
    dispatch({type: actionsTypes.LOGOUT});
    dispatch(push('/login'));
  }
}

