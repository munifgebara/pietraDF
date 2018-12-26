
import { Component, OnInit } from '@angular/core';
import { LocalEventoService } from '../localevento.service';
import { DFResponse } from 'src/app/dfresponse.type';
import { LocalEvento } from '../localevento.type';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SuperLista } from 'src/app/comum/super-lista';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent extends SuperLista<LocalEvento> implements OnInit {


  constructor(service: LocalEventoService, router: Router, route: ActivatedRoute) {
    super(service, router, route, "nome");
  }

}

