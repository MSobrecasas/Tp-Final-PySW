import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  btn;
  usuariolog: Usuario;
  constructor(public route: Router,
    public loginService: LoginService,
    private usuarioService: UsuarioService) {
    this.usuariolog = new Usuario();
    this.obtenerUsuarioLog();
  }

  ngOnInit() {

  }
  inicio() {

  }
  public openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    this.btn = document.getElementById('cardv');
    this.btn.addEventListener("click",
      (e: Event) => this.closeNav())
  }

  public closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  obtenerUsuarioLog() {
    if (this.loginService.userLoggedIn) {
      this.usuarioService.getUsuario(this.loginService.userLogged.id)
        .subscribe(
          res => {
            this.usuariolog = res;
          },
          err => {
            console.log("No hay usuario logeado", err)
          }
        )

    }
  }
  logout() {
    //localStorage.removeItem('currentUser');
    this.usuariolog = new Usuario();
    this.loginService.logout();
  }
}