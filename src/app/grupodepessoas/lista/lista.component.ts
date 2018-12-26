
import { Component, OnInit } from '@angular/core';
import { GrupoDePessoasService } from '../grupodepessoas.service';
import { DFResponse } from 'src/app/dfresponse.type';
import { GrupoDePessoas } from '../grupodepessoas.type';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SuperLista } from 'src/app/comum/super-lista';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent extends SuperLista<GrupoDePessoas> implements OnInit {


  constructor(service: GrupoDePessoasService, router: Router, route: ActivatedRoute) {
    super(service, router, route, "nome");
  }

}

