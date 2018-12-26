import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './dashboard/principal/principal.component';
import { DreamFactoryGuard } from './dream-factory.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent, canActivate: [DreamFactoryGuard] },
  { path: '', redirectTo: '/principal', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(r: Router) {
    this.logaRotas("/", r.config);
  }

  logaRotas(pai: String, rotas: Routes) {
    for (let i = 0; i < rotas.length; i++) {

      //console.log("path:", pai, rotas[i].path, rotas[i].component ? rotas[i].component : "-->" + rotas[i].redirectTo);
      if (rotas[i].children) {
        rotas[i].canActivate = [DreamFactoryGuard];
        this.logaRotas(rotas[i].path + "/", rotas[i].children);
      }
    }

  }

}
