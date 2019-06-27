import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  link: string = 'http://localhost/colegioEscribanosProject/public/index.php/usuario/';

  constructor(private _http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this._http.get(this.link);
  }

  public newUsuario(usuario) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body = JSON.stringify(usuario);
    return this._http.post(this.link + 'newUsuario', body,
      httpOption);
  }
  public newEscribano(usuario) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body = JSON.stringify(usuario);
    return this._http.post(this.link + 'new', body,
      httpOption);
  }

  modificarUsuario(usuario: Usuario) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let body = JSON.stringify(usuario);
    //envio en el body el mensaje transformado en un JSON
    return this._http.post(this.link + usuario.id + '/edit', body, httpOption);
  }

  modificarEscribano(usuario: Usuario) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let body = JSON.stringify(usuario);
    //envio en el body el mensaje transformado en un JSON
    return this._http.post(this.link + usuario.id + '/editEscribano', body, httpOption);
  }
  

  borrarUsuario(id: number) {
    //utilizo el metodo delete de http que es el configurado en el deleteAction de Symfony
    return this._http.delete((this.link + id));
  }

}