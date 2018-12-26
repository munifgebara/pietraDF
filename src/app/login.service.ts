import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public static ins: LoginService;

  public proximaUrl: string;

  public logado = false;

  public token: string;

  public static BASE_URL = 'http://18.232.51.153/api/v2';


  public baseUrl: string;

  constructor(protected http: HttpClient) {
    this.baseUrl = LoginService.BASE_URL;
    console.log(this.baseUrl);
    LoginService.ins = this;
  }

  login(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/user/session`, { email, password, duration: 0 })
      .toPromise().then(response => {
        let r = response;
        console.log(r);
        this.logado = true;

        return { ok: true };
      })
      .catch(this.errorHandler);
  }

  logout() {
    this.logado = false;
  }

  errorHandler = error => {
    return Promise.reject(error.json());
  }

}
