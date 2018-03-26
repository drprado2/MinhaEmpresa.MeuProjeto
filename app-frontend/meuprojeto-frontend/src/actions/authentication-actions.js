import {actionsTypes} from './action-types';
import {Authenticator} from '../utils/authenticator';
import { push } from 'react-router-redux';

const get = (values) => new Promise((resolve, reject) => {
  setTimeout(()=>{
    if(values.user === 'drprado2' && values.password === '123')
      resolve({userName: 'Adriano', userLogin : 'drprado2', userEmail: 'a@gmail.com'});

    let errors = [];

    if(values.user !== 'drprado2') errors.push({ref: 'user', message: "O login é inválido"});
    if(values.password !== '123') errors.push({ref: 'password', message: "A senha é inválida"});
    errors.push({ref: 'genericError', message: "Erro genérico"});

    reject(errors);
  }, 1300)
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

