import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GrupoDePessoasRoutingModule } from './grupodepessoas-routing.module';
import { CrudComponent } from './crud/crud.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [CrudComponent, DetalhesComponent, ListaComponent],
  imports: [
    CommonModule,
    FormsModule,
    GrupoDePessoasRoutingModule
  ]
})
export class GrupoDePessoasModule { }
