import { Component, OnInit } from '@angular/core';
import { DSServiceService } from '../dsservice.service';
import { ServiceService } from '../../compromisso/service.service';
import { DFResponse } from 'src/app/dfresponse.type';
import { Evento } from '../evento.type';
import { Compromisso } from 'src/app/compromisso/compromisso.type';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})



export class PrincipalComponent implements OnInit {

  data: DFResponse<Evento>;

  constructor(public service: DSServiceService, public s2: ServiceService) { }

  ngOnInit() {
    this.service.eventos().then(r => {
      this.data = r;

    }).catch(e => {

    });
  }

  insere() {
    this.s2.remove("2");

  }

}
