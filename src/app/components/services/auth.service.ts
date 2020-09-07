import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";

import { UserLogin } from '../login/login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private htttp: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });



  loginuser(username: string, password: string): Observable<any> {
    const param: any = {};
    param.cl_usua_usuario = username;
    param.cl_usua_clave = password;
    const url_api = "http://25.99.184.68:8081/sicaper/api/usuario/validarUsuario";
    return this.htttp
      .post<UserLogin>(
        url_api,
        param
      )
      .pipe(map(data => data));

  }

  setUser(user: UserLogin): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

  getCurrentUser(): UserLogin {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: UserLogin = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  logoutUser() {
    let accessToken = localStorage.getItem("accessToken");
    const url_api = `http://localhost:3000/api/Users/logout?access_token=${accessToken}`;
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    return this.htttp.post<UserLogin>(url_api, { headers: this.headers });
  }
}
