import urls from './../utils/routes-urls';
import {push} from 'react-router-redux';
import {FetchMock} from '../mock-api/fetch-mock';
import {actionsTypes} from './action-types';

export const goToUsers = () => {
  return dispatch => {
    dispatch(push(urls.USERS));
  }
}

export const createUser = user =>
  dispatch => {
    dispatch({type: actionsTypes.CREATING_USER});
    FetchMock.post("users", user)
      .then(x => x.ok ? dispatch({type: actionsTypes.USER_CREATED}) : Promise.reject(x))
      .catch(x =>{
        let error;

        switch(x.status){
          case(404):
            error = [{ref: 'genericError', message: "O recurso solicitado não existe!"}];
            break;
          case(400):
            error = x.json();
            break;
          default:
            error = [{ref: 'genericError', message: "Ocorreu um erro inesperado tente novamente!"}];
        }

        dispatch({type: actionsTypes.CREATE_USER_ERROR, payload: error});
      })
  }

