import { Injectable } from '@angular/core';
import { SuperService } from '../comum/super-service';
import { Compromisso } from './compromisso.type';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService extends SuperService<Compromisso>{

  constructor(http: HttpClient, loginService: LoginService) {
    super("Compromisso", http, loginService);

  }
}
