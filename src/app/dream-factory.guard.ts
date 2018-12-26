import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DreamFactoryGuard implements CanActivate {

  constructor(public loginService: LoginService, private router: Router) {

  }

  canActivate(


    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.loginService.proximaUrl = state.url;
    if (!this.loginService.logado) {
      this.router.navigate(['/login']);
    }
    return this.loginService.logado;
  }
}
