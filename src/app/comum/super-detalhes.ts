import { Component, OnInit } from '@angular/core';
import { SuperService } from './super-service';
import { DFResponse } from 'src/app/dfresponse.type';
import { Router, ActivatedRoute, Params } from '@angular/router';
export class SuperDetalhes<Tipo> implements OnInit {

    public selecionado: Tipo;
    public id = "new";
    public service: SuperService<Tipo>;
    public router: Router;
    public route: ActivatedRoute;
    constructor(service: SuperService<Tipo>, router: Router, route: ActivatedRoute) {
        this.service = service;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        if (this.id == "new") {
            this.selecionado = this.service.newObject();
            this.selecionado['id'] = "new";
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
            this.selecionado['id'] = undefined;
            this.service.add(this.selecionado).then((r) => this.router.navigate(['../..'], { relativeTo: this.route }));
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


