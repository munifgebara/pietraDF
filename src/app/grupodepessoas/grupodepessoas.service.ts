
import { Injectable } from '@angular/core';
import { SuperService } from '../comum/super-service';
import { GrupoDePessoas } from './grupodepessoas.type';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class GrupoDePessoasService extends SuperService<GrupoDePessoas>{

  constructor(http: HttpClient, loginService: LoginService) {
    super("GrupoDePessoas", http, loginService);
  }
  newObject(): GrupoDePessoas {
    return { }  as GrupoDePessoas;
  }
}
