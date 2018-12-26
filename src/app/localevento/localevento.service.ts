
import { Injectable } from '@angular/core';
import { SuperService } from '../comum/super-service';
import { LocalEvento } from './localevento.type';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class LocalEventoService extends SuperService<LocalEvento>{

  constructor(http: HttpClient, loginService: LoginService) {
    super("LocalEvento", http, loginService);
  }
  newObject(): LocalEvento {
    return { }  as LocalEvento;
  }
}
