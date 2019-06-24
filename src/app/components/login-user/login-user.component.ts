import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

import { Usuario } from 'src/app/models/usuario';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  userform: Usuario = new Usuario();
  returnUrl: string;
  msglogin: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }
  
  login() {
    this.loginService.login(this.userform.username, this.userform.password)
      .subscribe(
        data => {
          var user = data;
          console.log(user);
          if (user.username != '') {
            //vbles para mostrar-ocultar cosas en el header
            this.loginService.userLoggedIn = true;
            this.loginService.userLogged = user;
            //localstorage usado para mostrar o no un componente
            //localStorage.setItem('currentUser', JSON.stringify(user));
            this.router.navigateByUrl(this.returnUrl);
          } else {
            //usuario no encontrado muestro mensaje en la vista
            this.msglogin = "Credenciales incorrectas..";
          }
        },
        error => {
          console.log("error...");
          console.log(error);
        });
  }

}
