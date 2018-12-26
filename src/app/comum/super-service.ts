import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { LoginService } from '../login.service';
import { DFResponse } from '../dfresponse.type';


export class SuperService<Tipo> {

    protected colecao: string;
    protected loginService: LoginService;
    protected http: HttpClient;

    constructor(colecao: string, http: HttpClient, loginService: LoginService) {
        this.colecao = colecao;
        this.http = http;
        this.loginService = loginService;
    }

    errorHandler(error: any) {
        return Promise.reject({ error, ok: false });
    }

    createAuthorizationHeader() {
        let headers = {};
        headers['X-DreamFactory-Session-Token'] = this.loginService.session.session_token;
        headers['X-DreamFactory-API-Key'] = LoginService.API_KEY;
        return headers;
    }

    getAll(): Promise<DFResponse<Tipo>> {
        return this.http.get<DFResponse<Tipo>>(`${LoginService.BASE_URL}/pietra/_table/${this.colecao}?limit=10&order=id%20desc&include_count=true`, { headers: this.createAuthorizationHeader() })
            .toPromise().then(response => {
                return response;
            }).catch(this.errorHandler);
    }

    add(objeto: Tipo): Promise<DFResponse<Tipo>> {
        return this.http.post<DFResponse<Tipo>>(`${LoginService.BASE_URL}/${this.colecao}`, { resource: [objeto] }, { headers: this.createAuthorizationHeader() })
            .toPromise().then(response => response)
            .catch(this.errorHandler);
    }

}
