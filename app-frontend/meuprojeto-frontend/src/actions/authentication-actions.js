import {actionsTypes} from './action-types';
import {Authenticator} from '../utils/authenticator';
import { push } from 'react-router-redux';
import {FetchMock} from "./../mock-api/fetch-mock";

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
    dispatch({type: actionsTypes.AUTHENTICATE_START});
    FetchMock.post("users/authenticate", values)
      .then(x =>{
        if(!x.ok){
          console.log("Cheguei aqui o response não está ok")
          throw x;
        }
        return x.json();
      })
      .then(x => {
        Authenticator.SetAuth(values.rememberMe, JSON.stringify(x));
        dispatch(push('/dashboard'));
        dispatch({type: actionsTypes.AUTHENTICATE_DONE, payload: x});
      })
      .catch(x => {
        console.log("cheguei ao catch", x);
        // x.status == 400 ? x.json() : [{ref: 'genericError', message: "Ocorreu um erro inesperado tente novamente!"}]
        return x.json();
      })
      .then(x =>{
        console.log("Cheguei ao ultimo then", x)
        dispatch({type: actionsTypes.AUTHENTICATE_ERROR, payload: x});
      })
  }
}

const resolveError = response =>{
  let error;
  switch(response.status){
    case(404):
      error = [{ref: 'genericError', message: "O recurso solicitado não existe!"}];
      break;
    case(400):
      error = response.json();
      break;
    default:
      error = [{ref: 'genericError', message: "Ocorreu um erro inesperado tente novamente!"}];
  }
  return error;
}

export const logout = () => {
  return dispatch => {
    Authenticator.Logout();
    dispatch({type: actionsTypes.LOGOUT});
    dispatch(push('/login'));
  }
}

