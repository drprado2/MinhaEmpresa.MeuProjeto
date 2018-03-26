import urls from './../utils/routes-urls';
import {push} from 'react-router-redux';

export const goToUsers = () => {
  return dispatch => {
    dispatch(push(urls.USERS));
  }
}