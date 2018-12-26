import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Dfsession } from './dfsession.type';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public static ins: LoginService;

  public proximaUrl: string;

  public logado = false;

  public static BASE_URL = 'http://18.232.51.153/api/v2';

  public session: Dfsession;

  public baseUrl: string;

  constructor(protected http: HttpClient) {
    this.baseUrl = LoginService.BASE_URL;
    console.log(this.baseUrl);
    LoginService.ins = this;
  }

  login(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/user/session`, { email, password, duration: 0 })
      .toPromise().then(response => {
        let { session_token, session_id, id, name, first_name, last_name, email, is_sys_admin, last_login_date, host }: any = response;
        this.session = { session_token, session_id, id, name, first_name, last_name, email, is_sys_admin, last_login_date, host };


        console.log(this.session);


        this.logado = true;

        return { ok: true };
      })
      .catch(this.errorHandler);
  }

  logout() {
    this.logado = false;
  }

  errorHandler = error => {
    return Promise.reject(error);
  }

}
