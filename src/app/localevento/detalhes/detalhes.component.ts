
import { Component, OnInit } from '@angular/core';
import { LocalEventoService } from '../localevento.service';
import { DFResponse } from 'src/app/dfresponse.type';
import { LocalEvento  } from '../localevento.type';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SuperDetalhes } from 'src/app/comum/super-detalhes';
@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent extends SuperDetalhes<LocalEvento > implements OnInit {

  constructor(service: LocalEventoService, router: Router, route: ActivatedRoute) {
    super(service, router, route);
  }
}


    
    
    