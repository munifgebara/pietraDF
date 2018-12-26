import { Injectable } from '@angular/core';

import * as jwt_decode from "jwt-decode";
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

  public static API_KEY = "36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88";

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
        this.logado = true;
        //      console.log(jwt_decode(session_token));

        return { ok: true };
      }).catch(this.errorHandler);
  }

  logout() {
    this.logado = false;
  }

  errorHandler(error: any) {
    return Promise.reject({ error, ok: false });
  }

}
