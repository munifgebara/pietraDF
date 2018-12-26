
import { Component, OnInit } from '@angular/core';
import { GrupoDePessoasService } from '../grupodepessoas.service';
import { DFResponse } from 'src/app/dfresponse.type';
import { GrupoDePessoas } from '../grupodepessoas.type';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SuperDetalhes } from 'src/app/comum/super-detalhes';
@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent extends SuperDetalhes<GrupoDePessoas> implements OnInit {

  constructor(service: GrupoDePessoasService, router: Router, route: ActivatedRoute) {
    super(service, router, route);
  }
}




