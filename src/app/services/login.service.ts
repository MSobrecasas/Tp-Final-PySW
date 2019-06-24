import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userLoggedIn: boolean = false;
  userLogged: Usuario;
  link: string = 'http://localhost/colegioEscribanosProject/public/index.php/usuario/';
  constructor(private _http: HttpClient) { }

  public login(username: string, password: string): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body = JSON.stringify({ username: username, password: password });
    return this._http.post(this.link + 'login', body, httpOption);
  }

  public logout() {
    // remove user from local storage to log user out
    // localStorage.removeItem('currentUser');
    this.userLogged = new Usuario();
    this.userLoggedIn = false;
  }
}
