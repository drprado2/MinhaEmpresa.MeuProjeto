import {ApiBase} from "../api-base";
import {UserCrud} from "./user-crud";


export class UserApi extends ApiBase{
  constructor(timeToResponse=1500){
    super(new UserCrud(), timeToResponse);
  }
}