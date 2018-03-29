import {CrudBase} from "../crud-base";

const DEFAULT_USER={
  id: '',
  name: '',
  login: '',
  password: '',
  email: ''
}

const USER_TABLE="Users";

export class UserCrud extends CrudBase{
  constructor(){
    super(USER_TABLE);
  }
}

