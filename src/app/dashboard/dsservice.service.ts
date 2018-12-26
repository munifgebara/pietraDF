import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { LoginService } from '../login.service';
import { DFResponse } from '../dfresponse.type';
import { Evento } from './evento.type';
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

  eventos(): Promise<DFResponse<Evento>> {
    return this.http.get<DFResponse<Evento>>(`${LoginService.BASE_URL}/pietra/_table/Evento?limit=10&order=quando%20desc&include_count=true`, { headers: this.createAuthorizationHeader() })
      .toPromise().then(response => {
        return response;
      }).catch(this.errorHandler);
  }

  errorHandler(error: any) {
    return Promise.reject({ error, ok: false });
  }
}
