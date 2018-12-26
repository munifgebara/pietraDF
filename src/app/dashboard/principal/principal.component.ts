import { Component, OnInit } from '@angular/core';
import { DSServiceService } from '../dsservice.service';
import { DFResponse } from 'src/app/dfresponse.type';
import { Evento } from '../evento.type';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})



export class PrincipalComponent implements OnInit {

  data: DFResponse<Evento>;

  constructor(public service: DSServiceService) { }

  ngOnInit() {
    this.service.eventos().then(r => {
      this.data = r;

    }).catch(e => {

    });
  }

}
