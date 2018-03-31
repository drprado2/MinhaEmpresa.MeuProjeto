import {actionsTypes} from './../actions/action-types';

const INITIAL_STATE={
  loading: false,
  authenticated: false,
  userName: '',
  userLogin: '',
  userEmail: '',
  loaded: false,
  errors: null
}

export const authenticationReducer = (state=INITIAL_STATE, action) => {
  switch(action.type){
    case(actionsTypes.AUTHENTICATE_START):{
      return {...state, errors: null, loading: true, loaded: false}
    }
    case(actionsTypes.AUTHENTICATE_ERROR):{
      console.log("Chegou no reducer de autenticação veja o erro", action.payload);
      return {...state, loading: false, errors: action.payload}
    }
    case(actionsTypes.AUTHENTICATE_DONE):{
      return {
        ...state,
        authenticated: true,
        useEmail: action.payload.userEmail,
        userName: action.payload.userName,
        userLogin: action.payload.userLogin,
        errors: null,
        loading: false
      }
    }
    case(actionsTypes.LOGOUT):{
      return {
        ...state,
        authenticated: false,
        useEmail: '',
        userName: '',
        userLogin: ''
      }
    }
    default:{
      return {...state}
    }
  }
}