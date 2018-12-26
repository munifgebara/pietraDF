import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { DFResponse } from 'src/app/dfresponse.type';
import { Compromisso } from '../compromisso.type';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SuperLista } from 'src/app/comum/super-lista';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent extends SuperLista<Compromisso> implements OnInit {


  constructor(service: ServiceService, router: Router, route: ActivatedRoute) {
    super(service, router, route);
  }

}
