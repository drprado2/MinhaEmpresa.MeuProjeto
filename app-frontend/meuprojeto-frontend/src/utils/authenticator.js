export class Authenticator{

  static IsAuthenticated(){
    return localStorage.getItem('jwtAuth') || sessionStorage.getItem('jwtAuth');
  }

  static SetAuth(rememberMe, jwt){
    if(rememberMe){
      localStorage.setItem('jwtAuth', jwt);
      return;
    }

    sessionStorage.setItem('jwtAuth', jwt);
  }

  static Logout(){
    localStorage.removeItem('jwtAuth');
    sessionStorage.removeItem('jwtAuth');
  }
}