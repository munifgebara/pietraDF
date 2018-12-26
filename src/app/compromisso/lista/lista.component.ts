import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { DFResponse } from 'src/app/dfresponse.type';
import { Compromisso } from '../compromisso.type';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  protected message = "listando";
  protected data: DFResponse<Compromisso>;

  constructor(protected service: ServiceService) { }

  ngOnInit() {
    this.service.query().then(r => {
      this.data = r;
    })
  }

}
