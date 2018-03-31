import {ApiBase} from "../api-base";

export class UserApi extends ApiBase{
  constructor(){
    super("users");

    this.addEndpoint({url: '/authenticate', method: 'post', action: this.authenticate})
  }

  authenticate = values => {
    const user = this._crud.get({login: values.user}).data[0];
    if(!user)
      return {statusCode: 400, payload: [{ref: 'user', message: 'Usuário não encontrado'}]};

    const passwordIsOk = user.password === values.password;
    if(!passwordIsOk)
      return {statusCode: 400, payload: [{ref: 'password', message: 'Senha incorreta'}]};

    return {statusCode: 200, payload: {userName: user.name, userEmail: user.email}};
  }
}
