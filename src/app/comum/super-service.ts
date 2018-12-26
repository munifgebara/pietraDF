import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { LoginService } from '../login.service';
import { DFResponse } from '../dfresponse.type';
import { identifierModuleUrl } from '@angular/compiler';


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

    query(limit = 10, order = "id", filter = "", offset = 0): Promise<DFResponse<Tipo>> {

        return this.http.get<DFResponse<Tipo>>(`${LoginService.BASE_URL}/pietra/_table/${this.colecao}?filter=${filter}&limit=${limit}&offset=${offset}&order=${order}&include_count=true`, { headers: this.createAuthorizationHeader() })
            .toPromise().then(response => {
                return response;
            }).catch(this.errorHandler);
    }

    getOne(id: string): Promise<Tipo> {
        return this.http.get<Tipo>(`${LoginService.BASE_URL}/pietra/_table/${this.colecao}/${id}`, { headers: this.createAuthorizationHeader() })
            .toPromise().then(response => {
                return response;
            }).catch(this.errorHandler);
    }

    add(objeto: Tipo): Promise<DFResponse<Tipo>> {
        return this.http.post<DFResponse<Tipo>>(`${LoginService.BASE_URL}/pietra/_table/${this.colecao}`, { resource: [objeto] }, { headers: this.createAuthorizationHeader() })
            .toPromise().then(response => response)
            .catch(this.errorHandler);
    }

    replace(objeto: Tipo): Promise<DFResponse<Tipo>> {
        return this.http.put<DFResponse<Tipo>>(`${LoginService.BASE_URL}/pietra/_table/${this.colecao}`, { resource: [objeto] }, { headers: this.createAuthorizationHeader() })
            .toPromise().then(response => response)
            .catch(this.errorHandler);
    }

    modify(objeto: Tipo): Promise<DFResponse<Tipo>> {
        return this.http.patch<DFResponse<Tipo>>(`${LoginService.BASE_URL}/pietra/_table/${this.colecao}`, { resource: [objeto] }, { headers: this.createAuthorizationHeader() })
            .toPromise().then(response => response)
            .catch(this.errorHandler);
    }

    newObject(): Tipo {
        return {} as Tipo;
    }

    remove(id: string): Promise<Tipo> {
        return this.http.delete<Tipo>(`${LoginService.BASE_URL}/pietra/_table/${this.colecao}/${id}`, { headers: this.createAuthorizationHeader() })
            .toPromise().then(response => {
                return response;
            }).catch(this.errorHandler);
    }


}
