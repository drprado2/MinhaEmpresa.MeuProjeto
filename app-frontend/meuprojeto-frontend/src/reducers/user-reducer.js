import {actionsTypes} from './../actions/action-types';

const INITIAL_STATE={loading: false, errors: null, userCreated: false}

export const userReducer = (state=INITIAL_STATE, action) => {
  switch(action.type){
    case(actionsTypes.CREATING_USER):{
      return {...state, loading: true, userCreated: false};
      break;
    }
    case(actionsTypes.CREATE_USER_ERROR):{
      return {...state, loading: false, errors: action.payload, userCreated: false};
      break;
    }
    case(actionsTypes.USER_CREATED):{
      return {...state, loading: false, errors: null, userCreated: true}
      break;
    }
    default: return {...state}
  }
}