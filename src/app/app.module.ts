import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CompromissoModule } from './compromisso/compromisso.module';
import { GrupoDePessoasModule } from './grupodepessoas/grupodepessoas.module';
import { LocalEventoModule } from './localevento/localevento.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DashboardModule,
    CompromissoModule,
    GrupoDePessoasModule,
    LocalEventoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
