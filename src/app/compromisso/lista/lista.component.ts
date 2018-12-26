import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { DFResponse } from 'src/app/dfresponse.type';
import { Compromisso } from '../compromisso.type';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  protected offset = 0;
  protected message = "listando";
  protected data: DFResponse<Compromisso>;

  constructor(protected service: ServiceService, protected router: Router, protected route: ActivatedRoute) { }

  ngOnInit() {
    this.updateData();
  }

  updateData() {
    this.service.query("descricao", this.offset).then(r => {
      this.data = r;
    });
  }
  first() {
    this.offset = 0;
    this.updateData();
  }
  next() {
    this.offset = 0;
    if (this.data && this.data.meta.next) {
      this.offset = this.data.meta.next;
    }
    this.updateData();
  }
  detail(id: string) {
    this.router.navigate(['detalhes', id], { relativeTo: this.route });
  }

  create() {
    this.router.navigate(['detalhes', 'new'], { relativeTo: this.route });
  }
}
