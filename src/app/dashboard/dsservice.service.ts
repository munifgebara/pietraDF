import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { LoginService } from '../login.service';
@Injectable({
  providedIn: 'root'
})
export class DSServiceService {
  constructor(protected http: HttpClient, protected loginService: LoginService) {
  }

  createAuthorizationHeader() {
    let headers = {};

    headers['X-DreamFactory-Session-Token'] = this.loginService.session.session_token;
    headers['X-DreamFactory-API-Key'] = LoginService.API_KEY;
    return headers;
  }

  eventos() {
    return this.http.get(`${LoginService.BASE_URL}/pietra/_table/Evento?limit=10`, { headers: this.createAuthorizationHeader() })
      .toPromise().then(response => {
        console.log(response);
        return response;
      }).catch(this.errorHandler);
  }

  errorHandler(error: any) {
    return Promise.reject({ error, ok: false });
  }
}
