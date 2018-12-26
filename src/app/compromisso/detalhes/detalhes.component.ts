import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { DFResponse } from 'src/app/dfresponse.type';
import { Compromisso } from '../compromisso.type';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  protected selecionado: Compromisso = {};
  protected id = "new";

  constructor(protected service: ServiceService, protected router: Router, protected route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    if (this.id == "new") {
      this.selecionado = this.service.newObject();
      this.selecionado.id = "new";
    }
    else {
      this.service.getOne(this.id).then(obj => {
        this.selecionado = obj;
      });
    }

  }

  cancel() {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }

  save() {
    if (this.id == "new") {
      this.service.add({ ...this.selecionado, id: undefined }).then((r) => this.router.navigate(['../..'], { relativeTo: this.route }));
    } else {
      this.service.modify(this.selecionado).then((r) => this.router.navigate(['../..'], { relativeTo: this.route }));
    }
  }

  delete() {
    if (this.id == "new") {
      this.router.navigate(['../..'], { relativeTo: this.route });
    } else {
      this.service.remove(this.id).then((r) => this.router.navigate(['../..'], { relativeTo: this.route }));
    }
  }

}


