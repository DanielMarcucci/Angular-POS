import { HttpHeaders } from "@angular/common/http";

const apiRestDomain: String = 'http://localhost:8000';
const userLocalStorage: any = JSON.parse(localStorage.getItem('user'));

export const ApiRestHeaders = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'AuthorizationToken': (userLocalStorage == null) ? '' : userLocalStorage.api_token
  })
};

export const ApiRestRoutes = {
  users: {
    login: apiRestDomain+'/users/login',
    list: apiRestDomain+'/users',
    create: apiRestDomain+'/users'
  },
  clients: {
    getTelefonoNitNombre: apiRestDomain+'/clients'
  }
};