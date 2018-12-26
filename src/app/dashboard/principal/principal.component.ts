import { Component, OnInit } from '@angular/core';
import { DSServiceService } from '../dsservice.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})



export class PrincipalComponent implements OnInit {

  lista: any;

  constructor(public service: DSServiceService) { }

  ngOnInit() {
    this.service.eventos().then(r => {
      this.lista = r;

    }).catch(e => {

    });
  }

}
