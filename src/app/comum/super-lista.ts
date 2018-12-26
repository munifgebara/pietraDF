import { Component, OnInit } from '@angular/core';
import { SuperService } from './super-service';
import { DFResponse } from 'src/app/dfresponse.type';
import { Router, ActivatedRoute, Params } from '@angular/router';

export class SuperLista<Tipo> implements OnInit {

    public offset = 0;
    public message = "listando";
    public data: DFResponse<Tipo>;
    public service: SuperService<Tipo>;
    public router: Router;
    public route: ActivatedRoute;
    public queryString: string = "%";


    constructor(service: SuperService<Tipo>, router: Router, route: ActivatedRoute, protected mainField: string) {
        this.service = service;
        this.router = router;
        this.route = route;
    }

    ngOnInit() {
        this.updateData();
    }

    updateData() {

        this.service.query(this.mainField, this.offset, 10, `${this.mainField} like '${this.queryString}'`).then(r => {
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
