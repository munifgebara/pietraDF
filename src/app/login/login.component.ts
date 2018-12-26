import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public mensagem = "Logue";

  constructor(public loginService: LoginService, public router: Router) { }

  ngOnInit() {
  }

  loga() {
    this.loginService.login("pietra@munif.com.br", "qwe123").then(r => {
      if (r.ok) {
        let purl = this.loginService.proximaUrl ? this.loginService.proximaUrl : "/compromisso";
        this.router.navigate([purl]);
      }
      else {
        this.mensagem = "login invalido";
      }
    });


  }

}
