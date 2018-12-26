import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { DFResponse } from 'src/app/dfresponse.type';
import { Compromisso } from '../compromisso.type';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SuperDetalhes } from 'src/app/comum/super-detalhes';
@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent extends SuperDetalhes<Compromisso> implements OnInit {

  constructor(service: ServiceService, router: Router, route: ActivatedRoute) {
    super(service, router, route);
  }
}


