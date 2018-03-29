import urls from './../utils/routes-urls';
import {push} from 'react-router-redux';
import {UserApi} from './../../mock-api/user/user-api';

export const goToUsers = () => {
  return dispatch => {
    dispatch(push(urls.USERS));
  }
}

