import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiRestRoutes, ApiRestHeaders } from "../apiRest";
import { IUsersLogin } from "../interfaces/users";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  api = ApiRestRoutes;
  
  constructor(private http: HttpClient) { }

  public getToken(request: IUsersLogin) {
    return this.http.post(ApiRestRoutes.users.login, request);
  }

  public get() {
    return this.http.get(ApiRestRoutes.users.list, ApiRestHeaders);
  }
}