import {push} from 'react-router-redux';
import urls from './../utils/routes-urls';

export const menuClick = key => {
  switch(key){
    case('item_1'):
      return dispatch => dispatch(push(urls.DASHBOARD));

    case('11'):
      return dispatch => dispatch(push(urls.FINANCIAL_LAUNCHES));

    case('12'):
      return dispatch => dispatch(push(urls.FINANCIAL_ACCOUNTS));

    case('21'):
      return dispatch => dispatch(push(urls.FAMILIES));
  }
}
