import { Component, OnInit } from '@angular/core';
import { SuperService } from './super-service';
import { DFResponse } from 'src/app/dfresponse.type';
import { Router, ActivatedRoute, Params } from '@angular/router';

export class SuperLista<Tipo> implements OnInit {

    protected offset = 0;
    protected message = "listando";
    protected data: DFResponse<Tipo>;
    protected service: SuperService<Tipo>;
    protected router: Router;
    protected route: ActivatedRoute;

    constructor(service: SuperService<Tipo>, router: Router, route: ActivatedRoute) {
        this.service = service;
        this.router = router;
        this.route = route;
    }

    ngOnInit() {
        this.updateData();
    }

    updateData() {
        this.service.query("id", this.offset).then(r => {
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
